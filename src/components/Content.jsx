import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import style from "../App.module.css"

const Content = () => {

    const add = useSelector((state) => state.add)

    const dispatch = useDispatch();

    const handleX = (index) => {
        dispatch({type: "delete", payload: index})
    }

    const handleConfirm = (item, index) => {
        dispatch({type: "confirm", payload: index})
    }

    return (
        <div className={style.main}>
         {add.map((item, index) => {
            return (
                <div className={style.b1}>
                    <button className={style.change} onClick={() => handleConfirm(item, index)}>{!item.confirm ? "подтвердить" : "подтверждено"}</button>
                    <div className={style.string}>{item.text}</div>
                    <button className={style.x} onClick={() => handleX(index)}>x</button>
                </div>
            )
        })}  
        </div>
        
    )
}

export default Content;