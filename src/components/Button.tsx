import { styles } from '../styles/style'

const Btn = (props:{type:string,onClick:any,disabled?:boolean,title:string,class:string}) => {
  return (
    <button onClick={props.onClick}  className={`${props.class} ${props.type==='primary'?styles.primaryButton:styles.secondaryButton}`}>{props.title}</button>
  )
}

export default Btn
