import React, { createRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import style from '../style/password.module.css'
export default function Password() {
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const password = createRef();
    const confirmPassword = createRef();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState([]);

    function handleclick() {

        let isValid = checkPassword(password.current.value, confirmPassword.current.value);
        console.log(isValid);
        if (isValid) {
            navigate("/success");
        } else {
            setIsPasswordValid(false);
        }
    }

    function checkPassword(pass, confPass) {

        if (pass !== confPass) {
            errorMessage.push("Password do not match")
            setErrorMessage([...errorMessage])
        }
        if (pass.length < 8) {
            errorMessage.push("Passweord length is less than 8")
            setErrorMessage([...errorMessage])
        }
        if (/^[a-zA-Z]+$/.test(pass)) {
            errorMessage.push("password must not contains all alphabates")
            setErrorMessage([...errorMessage])
        }

        if (pass === confPass && pass.length >= 8 && !/^[a-zA-Z]+$/.test(pass)) {
            return true
        }


        return false

    }

    return (
        <div className={style.password}>

            <div className={style.box}>
                <h1>Password Reset</h1>
                <h3 className={style.txt}> NEW PASSWORD</h3>
                <input className={style.input} type="password" name='password' onChange={() => {setErrorMessage([]);setIsPasswordValid(true)}} ref={password} />
                <h3 className={style.txt}>RE-ENTER NEW PASSWORD</h3>
                <input className={style.input} type="password" name='password' onChange={() => {setErrorMessage([]);setIsPasswordValid(true)}} ref={confirmPassword} />

                {!isPasswordValid &&

                    <div>
                        {errorMessage.map((item) => {
                            return (
                                <div>
                                    <span style={{ color: "red" }}>{item}</span>
                                </div>
                            )
                        })
                        }
                    </div>

                }

                <div> <button className={style.btn} onClick={handleclick} >RESET PASSWORD</button>
                </div>

            </div>
        </div>
    )
}
