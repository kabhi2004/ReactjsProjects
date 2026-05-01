import styles from './Contact.module.css'
import Button from './Button'
import { TbMessageFilled,TbPhoneFilled } from "react-icons/tb";
import {MdMail} from "react-icons/md"
import { useState } from 'react';
 
function ContactForm(){
 function viaCall(){
    console.log("Connect with call");
 }
 function viaEmail(){
    console.log("Connect by a Email");
 }
 const[name,setname]=useState("Abhishek");
 const[email,setemail]=useState("abc@gmail.com");
 const[text,settext]=useState("Hello User");
 let onsubmit=(event)=>{
    event.preventDefault();
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);

 }

    return(<>
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                 <Button  onClick={viaEmail} text="VIA SUPPORT CHAT" icon={<TbMessageFilled fontSize="20px"/>}/>
                 <Button onClick={viaCall} text="VIA CALL" icon={<TbPhoneFilled fontSize="20px"/>}/>
            </div>
            <div>
                <Button isOutline={true} text="Via Email Form" icon={<MdMail fontSize="20px"/>}/>
            </div>
            <form onSubmit={onsubmit}>
                <div className={styles.form_controller}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name"></input>
                </div>
                <div className={styles.form_controller}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"></input>
                </div>
                <div className={styles.form_controller}>
                    <label htmlFor='text'>Text</label>
                    <textarea name="text" rows="8"></textarea>
                </div>
            
            <div style={{display:"flex",justifyContent:"end"}}><Button name="Submit" text="Submit" /></div>
            <div>{name+"   "+email+"   "+text}</div>
            </form>
           
        </div>
        <div className={styles.contact_image}>
            <img src="/Images/side.svg" alt="side Image" />
        </div>

    </section>
    
    </>)
}

export default ContactForm;