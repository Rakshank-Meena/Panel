import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const LoggedIn = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const data: {
    userName: String,
    password: String
  } = {
    userName: email,
    password: password
  }
  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/login', data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then((res) => {
      localStorage.setItem('_lgi',"true" )
        navigate('/')
      
    }).catch((e) => { console.log(e) })
  }


  return (
    <div className='h-screen w-screen flex justify-center items-center bg-lime-900'>
      <div className='w-[70%] h-1/2 border shadow-md flex flex-col p-[16px] justify-between items-center bg-white rounded-lg pb-[20px]' >
        <div className='text-[21px] font-semibold text-cyan-900'>Please Login To Continue</div>
        <input className='bg-lime-50 px-2 h-[40px] w-[80%] rounded-md border border-slate-500' type='email' placeholder='Please Your Email here' onChange={(e) => { setEmail(e.target.value) }}></input>
        <input className='bg-lime-50 px-2 h-[40px] w-[80%] rounded-md  border border-slate-500' type='password' placeholder='Your Password' onChange={(e) => { setPassword(e.target.value) }}></input>
        <Button class={'w-2/5 font-semibold uppercase py-1'} type={'primary'} onClick={handleSubmit} title={'submit'}/>
      </div>
    </div>
  )
}

export default LoggedIn
