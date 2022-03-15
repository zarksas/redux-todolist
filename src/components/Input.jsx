import React, { useState } from 'react';
import ButtonAdd from './ButtonAdd';
import style from "../App.module.css"

const Input = () => {

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className={style.card}>
          <input value={message} className={style.input} onChange={handleChange}/>
          <ButtonAdd message={message} setMessage={setMessage}/>
        </div>
      
    );
};

export default Input;