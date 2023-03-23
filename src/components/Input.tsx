import React from "react"

const Input = React.forwardRef((props:{className:string,value:any,onChange:any,placeholder?:any},ref:any) => {
  return (
    <input ref={ref} className={` ${props.className}`} placeholder={props.placeholder} onChange={(e)=>props.onChange(e.target.value)} value={props.value}/>
  )
}
)

export default Input
