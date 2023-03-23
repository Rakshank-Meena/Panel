import { useState } from 'react'
import SidePane from '../components/SidePane'
import About from './About'

const Panel = () => {
    const [dataType,setDataType]=useState<{dataType:string,store:string,title:string}>({dataType:'',store:'',title:''})
  return (
    <div className='w-screen h-screen flex flex-row bg-[#f8f8f8]'>
      <SidePane typeSetter={setDataType}/>
      <About dataType={dataType.dataType} store={dataType.store} title={dataType.title}/>
    </div>
  )
}

export default Panel
