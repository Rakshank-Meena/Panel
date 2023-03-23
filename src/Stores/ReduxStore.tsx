import { useSelector } from "react-redux"
import ClientDataManipulation from "../ApiCalls/FetchClientData"
const ReduxStore=(props:{store:string,storeFn?:any})=>{
    const {store}=props
    const posterStore=useSelector((state:any)=>state.posterStore)
    const  videoStore=useSelector(( state:any)=> state.videoStore)
    const photographyStore=useSelector((state:any)=>state.photographyStore)
    const directionStore=useSelector((state:any)=>state.directionStore)
    const contentStore=useSelector((state:any)=>state.contentStore)
    const cinemaStore=useSelector((state:any)=>state.cinemaStore)
    if (store==='posterStore'){
        return posterStore.map((item:any)=>{return <div key={posterStore.indexOf(item)}>{props.storeFn(item)}</div>})
    }
    if (store==='videoStore'){
        return videoStore.map((item:any)=>{return <div key={videoStore.indexOf(item)}>{props.storeFn(item)}</div>})
    }
    if (store==='photographyStore'){
        return photographyStore.map((item:any)=>{return <div key={photographyStore.indexOf(item)}>{props.storeFn(item,photographyStore.indexOf(item))}</div>})
    }
    if (store==='directionStore'){
        return directionStore.map((item:any)=>{return <div key={directionStore.indexOf(item)}>{props.storeFn(item)}</div>})
    }
    if (store==='contentStore'){
        return contentStore.map((item:any)=>{return <div key={contentStore.indexOf(item)}>{props.storeFn(item)}</div>})
    }
    if (store==='cinemaStore'){
        return cinemaStore.map((item:any)=>{return <div key={cinemaStore.indexOf(item)}>{props.storeFn(item)}</div>})
    }
    
    else {console.log('invalid store type')}

}
export const SendData:any=()=>{
    const posterStore=useSelector((state:any)=>state.posterStore)
    const  videoStore=useSelector(( state:any)=> state.videoStore)
    const photographyStore=useSelector((state:any)=>state.photographyStore)
    const directionStore=useSelector((state:any)=>state.directionStore)
    const contentStore=useSelector((state:any)=>state.contentStore)
    const cinemaStore=useSelector((state:any)=>state.cinemaStore)
        return ClientDataManipulation(()=>{alert('data posted successfully')},()=>alert('data post failed'),'patch','http://localhost:5000/about',{ClientPics:{
            content:contentStore,
            photography:photographyStore,
            video:videoStore,
            direction:directionStore,
            poster:posterStore,
            cinema:cinemaStore
        }})
    }

export default ReduxStore