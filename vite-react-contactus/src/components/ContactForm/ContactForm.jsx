import { MdLocalPhone, MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { HiMail } from "react-icons/hi";
import contact from "../../assets/contact.svg"
import { useState } from "react";
const ContactForm = () => {
  let [name,setName] = useState('Sri');
  let [mail,setEmail] = useState('sri@gmail.com') ;
  let [comments,setComments]= useState('');
 const onRegister = (event)=>{
  event.preventDefault()
  setName(event.target[0].value); 
  setEmail(event.target[1].value); 
  setComments(event.target[2].value); 
 }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button
            content="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          ></Button>
          <Button
            content="VIA CALL"
            icon={<MdLocalPhone fontSize="24px" />}
          ></Button>
        </div>
        <Button
          isOutline={true}
          content="VIA EMAIL" //onClick={show}
          icon={<HiMail fontSize="24px" />}
        ></Button>
        <form onSubmit={onRegister}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="comments">Comments</label>
            <textarea name="comments" rows="8"></textarea>
          </div>
          <div style={{
            display:"flex","justifyContent":'end'
            }} >
          <Button content="SUBMIT" />
          </div>
        </form>
        <div>
          {name}{mail}{comments}
        </div>
      </div>
      <div className={styles.contact_img}>
        <img src={contact} alt="CustomerService" />
      </div>
    </section>
  );
};

export default ContactForm;
