import { TbMessageFilled,TbPhoneFilled} from "react-icons/tb";
import styles from './Button.module.css';
function Button({icon,text,isOutline,...rest})
{
    return(
        <button {...rest} className={isOutline?styles.second_btn:styles.button}>
             {icon}
             {text}
             
        </button>
       
        
    )
}

export default Button;