import {MdMessage} from 'react-icons/md'
import styles from './Button.module.css'
const Button = ({isOutline,icon,content,...restproperty}) => {
    // const {isOutline,icon,content} =props;
  return (
    <button 
      {...restproperty}
      className={isOutline?styles.outline_btn:styles.primary_btn}>
        {icon}{content}
    </button>
  )
}

export default Button