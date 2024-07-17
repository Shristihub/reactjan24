import styles from '../Button/Button.module.css'
const Button = ({desc,icon, isSecondary}) => {
    // let buttonName = props.desc;
  return (
    <div>
        <button className={isSecondary?`${styles.secondary}`:''}>{icon} {desc}</button>
    </div>
  )
}

export default Button