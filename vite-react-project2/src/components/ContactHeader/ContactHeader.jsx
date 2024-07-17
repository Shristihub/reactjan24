import styles from '../ContactHeader/ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <main className={`${styles.main_container} container`}>
        <h1>Contact Us</h1>
        <p>LET US CONNECT
            We are here to help and we would love to hear from you!
            If you have a question,comment, or just want to chat, you can reach out to us
            through the contact form or by phone or email or social
        </p>
    </main>
  )
}

export default ContactHeader