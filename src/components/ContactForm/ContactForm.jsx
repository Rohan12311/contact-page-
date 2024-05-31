import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function ContactForm() {

  const [name,setName] = useState("Rohan Ramakant kale")
  const [email,setEmail] = useState("rohan@gmail.com")
  const [text,setText] = useState("Shri Sawami Samrtha")
  

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText (event.target[2].value)
  }

  const onViaCallSubmit = () => {
    console.log('I am Fomm call');
  }


  return (
    <section className={`${styles.container} `}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button  text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={"24px"}/>}/>
          <Button  
          onClick={onViaCallSubmit}
          text="VIA CALL"
           icon={<FaPhoneAlt fontSize={"24px"}/>}/>
        </div>
        <Button 
        isOutline={true}
        text="VIA EMAIL FORM" icon={<HiMail  fontSize={"24px"}/>}/>

        <form 
        onSubmit={onSubmit}
        >

          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
            <input type="Email" name='email' />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
            <textarea name='text' rows={10} />
          </div>
          
          <div
          style={{
            display: 'flex',
            justifyContent: 'end'
          }}
          >
          <Button  text="SUBMIT" />
          </div>

          <div>{name + "      " + email + "    " + text + "    " }</div>

        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  )
}

export default ContactForm ;
