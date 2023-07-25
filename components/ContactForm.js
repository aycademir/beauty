"use client"
import React from 'react'
import style from '@/styles/Contact.module.css';
import { useState } from 'react';
import { sendContactForm } from '@/lib/api';


const initValues= {
    name: "",
    email:"",
    subject:"",
    message:"",
}

const initState = {
    values: initValues
}

/*
const initCheck = {
    name: false,
    email:false,
    subject: false,
    message:false,
}
*/
const ContactForm = () => {
    const [state, setState] = useState(initState)
    //const [allDone, setAllDone] = useState(initCheck);
    //const [showError, setShowError] = useState(false);


    const {values, isLoading, error} = state

    const onChangeHandler = ({target}) => 
        setState((prev)=>({
            ...prev,
            values:{
                ...prev.values,
                [target.id]: target.value,
            }
        

        }))
    
       

    const onSubmit = async (e) =>{
        e.preventDefault()

/*
        if (values.name.includes(" ") && 
            values.name.length>4 && 
            values.name.length<40
            ) {
            await setAllDone((prev)=>({
                ...prev,
                name : true
            }))
        } 

        if (values.email.includes("@") && 
            values.email.includes(".") && 
            values.email.substring(0, values.email.indexOf("@")).length>0 &&
            values.email.substring(values.email.indexOf("@")+1, values.email.indexOf(".")).length>0 &&
            values.email.substring(values.email.indexOf(".")+1, values.email.length).length>0 
            ) {
            await setAllDone((prev)=>({
                ...prev,
                email : true
            }))
            
        } 
        

        if (values.subject.length >0) {
            await setAllDone((prev)=>({
                ...prev,
                subject : true
            }))
        } 

        if (values.message.length >0) {
            await setAllDone((prev)=>({
                ...prev,
                message : true
            }))
        }

        console.log(allDone.name, allDone.email, allDone.subject, allDone.message);
*/
        
        
        
            setState((prev)=>({
                ...prev,
                isLoading: true
            }))
            try {
                await sendContactForm(values);
                setState(initState);
                location.reload();
            } catch (error) {
                
                setState((prev)=>({
                    ...prev,
                    isLoading: false,
                    error: error.message,
                }))
            }
    }

    

  return (
    <>
        <div className={style.main}>
        <p className={style.fillin}>Please fill in the form below</p>
    
   
        <form  className={style.form} onSubmit={onSubmit}> 
            <div className={style.div}>
                <label className={style.label}  htmlFor="name" >Name<p style={{color:"red"}}>*</p></label>
                <input 
                    required
                    onChange={onChangeHandler}
                    value={values.name}
                    className={/*(showError && !allDone.name) ? style.errorinput : */style.input} 
                    type="text" 
                    id='name' 
                    placeholder='John Smith'
                />
            </div>
            
            {/*showError && !allDone.name &&
                <div className={style.errordiv}>
                    <div className={style.error}>Please enter your full name as name and surname.</div>
                </div>
            */}

            <div className={style.div}>
                <label className={style.label}  htmlFor="email">E-mail<p style={{color:"red"}}>*</p></label>
                <input 
                    onChange={onChangeHandler}
                    value={values.email}
                    className={/*(showError && !allDone.email) ? style.errorinput : */style.input} 
                    type="email" 
                    id='email' 
                    placeholder='john@abc.com'
                    required
                /> 
                    
            </div>

            {/*showError && !allDone.email &&
                <div className={style.errordiv}>
                    <div className={style.error}>Please enter a valid email.</div>
                </div>
            */}

            <div className={style.div}>
                <label className={style.label}  htmlFor="subject" >Subject<p style={{color:"red"}}>*</p></label>
                <input 
                    
                    required
                    onChange={onChangeHandler}
                    value={values.subject}
                    className={/*(showError && !allDone.name) ? style.errorinput : */style.input} 
                    type="text" 
                    id='subject' 
                    placeholder='Type in the subject...'
                />
            </div>

            {/*showError && !allDone.subject &&
                <div className={style.errordiv}>
                    <div className={style.error}>Please fill in the subject.</div>
                </div>
            */ }

            <div className={style.div}>
                <label className={ style.label}  htmlFor="message" >Message<p style={{color:"red"}}>*</p></label>
                <textarea 
                    rows={8}
                    required
                    onChange={onChangeHandler}
                    value={values.message}
                    className={/*(showError && !allDone.name) ? style.errorinput : */style.input} 
                    type="text" 
                    id='message' 
                    placeholder='Type in your message...'
                />
            </div>

            {/*showError && !allDone.message &&
                <div className={style.errordiv}>
                    <div className={style.error}>Please fill in your message.</div>
                </div>
            */ }

            

            <button 
                /*disabled={!values.name || !values.email || !values.subject || !values.message} */
                className={/*!values.name || !values.email || !values.subject || !values.message ? style.disabledbutton :*/ style.button} 
                type='submit'
            >
                {isLoading ? 'Loading...': 'Send'}
               
            </button>
        </form>
        
        </div>
    </>
  )
}

export default ContactForm