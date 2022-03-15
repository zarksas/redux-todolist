import React from "react";
import { useDispatch } from "react-redux";
import style from "../App.module.css";

const ButtonAdd = ({ message, setMessage }) => {

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "create", payload: message });
    setMessage("")
    
  };

  return (
    <>
      <button className={style.buttonAdd} onClick={handleAdd}>
        Add
      </button>
    </>
  );
};

export default ButtonAdd;
