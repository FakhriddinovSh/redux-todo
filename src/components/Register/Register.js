import axios from 'axios'
import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { addToken } from '../../redux/token/tokenActions';
export const Register = () => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch()

    const hendelSubmit = () => {
        axios.post("http://localhost:8080/register", {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }).then(data => {
            dispatch(addToken(data.data.accessToken))
            localStorage.setItem("token", data.data.accessToken)
        })
    }

    return <>
        <div className='w-50 mx-auto shadow-lg p-5 mt-5'>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                hendelSubmit()
            }}>
                <h2 className='mb-3'>
                    Registration
                </h2>
                <input type="text" className="form-control mb-4" ref={firstNameRef} placeholder="First Name" required/>
                <input type="text" className="form-control mb-4" ref={lastNameRef} placeholder="Last Name" required/>
                <input type="email" className="form-control mb-4" ref={emailRef} placeholder="Email"/>
                <input type="password" className="form-control mb-4" ref={passwordRef} placeholder="Password"/>
                <button className='btn btn-success' type='submit'>SUBMIT</button>
            </form>
        </div>
    </>
}
