import React from "react";
import Button from "../Button/Button";
import contact from "../../assets/contact.svg"
import styles from "../ContactForm/ContactForm.module.css";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
  const [username, setUsername] = useState('Priya');
  const [email,setEmail] = useState('aa');
  const [comments, setComments] = useState('comments');
  const onRegister = (event)=>{
    alert('hello');
    event.preventDefault();
    setUsername(event.target[0].value)
    setEmail(event.target[1].value)
    setComments(event.target[2].value)

    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
  }
  return (
    <section className={styles.section_container}>
      <div className={styles.section_article}>
        <div className={styles.section_topbtn}>
          <Button
            desc="Via Support Chat"
            icon={<BsChatLeftTextFill />}
          ></Button>
          <Button desc="Via Call" icon={<FaPhone />}></Button>
        </div>
        <Button
          desc="Via Email"
          icon={<MdOutlineMail />}
          isSecondary={true}
        ></Button>
        <form onSubmit= {onRegister}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_control}>
          <label htmlFor="comments">Comments</label>
            <textarea name="comments" id="" cols="30"></textarea>
          </div>
          <div>
            <Button desc="Submit"></Button>
          </div>
        </form>
        {username}{email}{comments}
      </div>
      <div>
        <img src={contact} alt="Contact" />
      </div>
    </section>
  );
};

export default ContactForm;
