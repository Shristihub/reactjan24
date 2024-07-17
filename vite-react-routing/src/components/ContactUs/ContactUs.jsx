import { useState } from "react";
import styles from "../ContactUs/ContactUs.module.css";
const ContactUs = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [comments, setComments] = useState("");
  const[isSelected,setIsSelected] =useState(false);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsSelected(true);
    console.log(isSelected);
    console.log(event.target); 
    setUsername(event.target[0].value);
    setEmail(event.target[1].value);
    setMobile(event.target[2].value);
    setComments(event.target[3].value);

    alert(`Success ${event}`);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.formcontrol}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div className={styles.formcontrol}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.formcontrol}>
          <label htmlFor="mobile">Mobile</label>
          <input type="number" name="mobile" />
        </div>
        <div className={styles.formcontrol}>
          <label htmlFor="comments">Enter Details</label>
          <input type="text" name="comments" />
        </div>
        <div>
          <input type="Submit" />
        </div>
      </form>
      <div style={!isSelected?{visibility:'hidden'}:{visibility:'visible',backgroundColor:'aqua'}}>
        <h4>Welcome {username}</h4>
        <h4> Your registered email {email}</h4>
        <h4>Your Mobile {mobile}</h4>
        <h4>Your Comments {comments}</h4>
      </div>
    </div>
  );
};

export default ContactUs;
