import { useEffect, useState } from 'react'
import Input from '../components/Input'
import Btn from '../components/Button'
import ReduxStore from '../Stores/ReduxStore'
import Dispatch from '../Actions/Dispatch'
import { useDispatch, useSelector } from 'react-redux'
import FetchClientData from '../ApiCalls/FetchClientData'
import ClientDataManipulation from '../ApiCalls/FetchClientData'
import { useNavigate } from 'react-router-dom'
const About = (props: { dataType: string, store: string, title: string }) => {
  const navigate=useNavigate()
  const posterStore = useSelector((state: any) => state.posterStore)
  const videoStore = useSelector((state: any) => state.videoStore)
  const photographyStore = useSelector((state: any) => state.photographyStore)
  const directionStore = useSelector((state: any) => state.directionStore)
  const contentStore = useSelector((state: any) => state.contentStore)
  const cinemaStore = useSelector((state: any) => state.cinemaStore)
  const dispatch = useDispatch()
  const [text, setText] = useState<string>('')
  const [clientName, setClientName] = useState<string>('')
  const [PhotographyArr, setPhotographyArr] = useState<any[]>([])
  const [arrFinalise, setArrFinalise] = useState<boolean>(false)
  const [clientInput, setClientInput] = useState<string>('')
  const [imgSrc, setImgSrc] = useState<string>('')
  const [iFrame, setIframe] = useState<string>('')
  const [dataPost, setDataPost] = useState<boolean>(false)
  const add = (data: any, type: string) => { Dispatch(`${type}`, data, dispatch) }


  let response=false
  useEffect(() => {
    if (response==false) {
      FetchClientData((data: any) => {
        return (
          data.data.data.content.map((item: any) => add(item, 'addContentClient')),
          data.data.data.photography.map((item: any) => add(item, 'addClient')),
          data.data.data.video.map((item: any) => add(item, 'addVideoClient')),
          data.data.data.poster.map((item: any) => add(item, 'addPosterClient')),
          data.data.data.direction.map((item: any) => add(item, 'addDirectionClient')),
          data.data.data.cinema.map((item: any) => add(item, 'addCinemaClient'))

        )

      }, () => console.log('fetch'), 'get', 'http://localhost:5000/about')
    }
    response=true
  }, [])
  useEffect(() => {
    if (dataPost) {

      ClientDataManipulation(() => { alert('data posted successfully') }, () => alert('data post failed'), 'patch', 'http://localhost:5000/about', {}, {
        ClientPics: {
          content: contentStore,
          photography: photographyStore,
          video: videoStore,
          direction: directionStore,
          poster: posterStore,
          cinema: cinemaStore
        }
      })
      setDataPost(false)
    }
  }, [dataPost, setDataPost])
useEffect(()=>{
  localStorage.getItem('_lgi')!=='true'&&navigate('/login')

},[])

  const inputChange = (data: any) => {
    setText(data)
  }
  function add3Dots(text: any, limit: any) {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  }
  const clientInputChange = (data: any) => {
    setClientName(data)
  }
  const addClient = () => {
    if (props.title === 'photography') {
      if (clientName === '') {
        return alert('cannot leave this field empty')
      }
      Dispatch(props.dataType, { clientName: clientName, url: PhotographyArr }, dispatch)
      setText('')
      setClientName('')
      setArrFinalise(false)
      setPhotographyArr([])
    }
    else {
      if (text === '') {
        return alert('cannot leave this field empty')
      }

      else {
        console.log(props.dataType)
        Dispatch(props.dataType, { url: text }, dispatch)
        setText('')
      }
    }

  }
  const addClientImage = (data: any) => {
    if (text === '') {
      return alert('cannot leave this field empty')
    }
    else {
      setPhotographyArr((array: any) => [data, ...array])
      setText('')
    }
  }

  const listRender = (data: any, index?: any) => {
    const dropDownFn = () => {
      document.getElementById(data.clientName)?.classList.toggle('hidden')

    }
    if (props.title === 'photography') {
      return (
        <div className='flex flex-col'>
          <div className='overflow-hidden text-ellipsis whitespace-nowrap w-full h-[36px] px-3 my-[2px] py-2 bg-[#f8f8f8] border border-stone-400 rounded-[4px] shadow-md text-black capitalize'>
            <div className='flex justify-between overflow-hidden text-ellipsis whitespace-nowrap'>
              {data.clientName}
              <div>
                <button className='text-red-500' onClick={() => window.confirm('Are you sure you want to delete this client and all its data from database?') === true && Dispatch('removeClient', { clientName: data.clientName }, dispatch)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg>
                </button>
                <button onClick={() => document.getElementById(data.clientName + 'input')?.classList.toggle('hidden')}>
                  <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="17px" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="50" width="50" /><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="9" x2="41" y1="25" y2="25" /><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="25" x2="25" y1="9" y2="41" /></svg>
                </button>
                <button onClick={() => dropDownFn()}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 1792 1792" width="17"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div id={`${data.clientName}input`} className='hidden'>
            <div className='flex justify-center items-center w-[96%] mx-auto h-[30px] my-2'>
              <Input placeholder={'add a link'} className={'w-full h-full px-2'} value={clientInput} onChange={(data: any) => { return setClientInput(data) }} />
              <Btn type={'secondary'} title={'add'} class={'px-2 rounded-sm '} onClick={() => { return (document.getElementById(data.clientName + 'input')?.classList.toggle('hidden'), clientInput !== '' && (Dispatch('addClientLink', { name: data.clientName, link: clientInput }, dispatch), setClientInput(''))) }} />

              {/* </button> */}
            </div>
          </div>
          {<div id={`${data.clientName}`} className='hidden'>
            {data.url.map((link: any) => {
              return (
                <div key={data.url.indexOf(link)} className='overflow-hidden text-ellipsis my-[5px] whitespace-nowrap mx-auto rounded-md h-[34px] px-3 py-2 bg-[#9e8888] border border-stone-400  text-black capitalize flex justify-between w-[96%] cursor-pointer' onClick={() => setImgSrc(link)}>{add3Dots(link, 35)}
                  <button className='text-red-800' onClick={() => Dispatch('removeClientLink', { index: index, name: data.clientName, deletedUrl: link }, dispatch)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg></button>
                </div>)
            })}
          </div>}
        </div>)
    }
    else {
      return (
        <div className='w-full h-[36px] px-3 py-2 my-[2px] bg-[#f8f8f8] border border-stone-400 rounded-md shadow-md text-black capitalize flex justify-between cursor-pointer' onClick={() => (props.title == 'cinematography' || props.title == 'direction' || props.title == 'videography' || props.title == 'content-creation') ? setIframe(data.url) : setImgSrc(data.url)}>{add3Dots(data.url, 35)}
          <button className='text-red-400' onClick={() => window.confirm('are you sure you want to delete this link permanently?') === true && Dispatch(props.dataType.replace('add', 'remove'), data.url, dispatch)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
          </button>
        </div>
      )
    }
  }



  return (
    <>
      <div className='h-full w-full flex flex-col '>
        <div className='w-full mx-auto h-[60px]   sticky top-0 bg-[#264d00] text-2xl flex justify-center items-center uppercase text-white'><div className='w-[90%] flex items-center justify-center'>{props.title ? props.title : 'Please select a Category to display'}</div><button className='w-[20%] text-sm bg-slate-900 py-3 mr-1 rounded-lg border-2 border-white' onClick={() => setDataPost(true)}>click to finalise data</button></div>

        <div className='flex flex-row'>
          <div className='w-3/5 h-full p-20'>
            <div className='h-[50vh] w-auto' style={{ backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${imgSrc})` }}>
              {(props.title == 'cinematography' || props.title == 'Direction' || props.title == 'videography' || props.title == 'content-creation') && <iframe width="450px" height="250px" src={`${iFrame}`} title="iframe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
            </div>
          </div>

          <div className='w-2/5 h-full'>
            {PhotographyArr[0] !== undefined ? PhotographyArr.map((link: any) => {
              return (<div className='w-full h-[36px] px-3 py-2 bg-[#9e8888] border border-stone-400 rounded-sm text-black capitalize'>{link}</div>)
            }) : <div className=''><ReduxStore store={props.store} storeFn={listRender} /></div>}
          </div>
        </div>
        <div className='w-full py-2 h-auto mt-auto sticky bottom-0 bg-slate-200 mx-auto  flex flex-row justify-around items-start'>
          {props.title === 'photography' ?
            <div className='flex flex-col w-[70%] '>
              {!arrFinalise && <div className='flex flex-row my-2'>
                <div>Image URL:</div>
                <Input className={'w-[80%] h-[36px] px-5 text-sm font-serif mx-3'} value={text} onChange={inputChange} />
              </div>}

              {arrFinalise && <div className='flex flex-row '>
                <div>Client Name:</div>
                <Input className={'w-[80%] h-[36px] px-5 text-sm font-serif mx-3'} value={clientName} onChange={clientInputChange} />
              </div>}

            </div>
            : <div className='flex flex-row w-[70%]'>
              <div>Image URL:</div>
              <Input className={'w-[80%] h-[36px] px-5 text-sm font-serif mx-3'} value={text} onChange={inputChange} />
            </div>}
          <div className='flex flex-col justify-evenly h-full'>

            {(props.title === 'photography' && !arrFinalise) && <Btn type={'primary'} onClick={() => addClientImage(text)} title={'click to add image'} class={'w-auto px-5 h-[28px] text-black capitalize my-auto '} />}
            {(props.title === 'photography' && !arrFinalise) && <Btn type={'secondary'} onClick={() => setArrFinalise(true)} title={'click to Finalise images'} class={'w-auto mt-3 px-5 h-[28px] text-black capitalize my-auto '} />}
            {(arrFinalise || props.title !== 'photography') && <Btn type={'primary'} onClick={addClient} title={'click to add LINK'} class={'w-auto px-5 h-[28px] text-black capitalize my-auto '} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default About
