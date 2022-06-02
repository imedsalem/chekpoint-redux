import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import style from './ChangeTodo.module.css'
import {changeData} from '../features/EditData'

const ChangeTodo = () => {
    let params = useParams()
    let navigate = useNavigate();

    const count = useSelector((state) => state.EditData.data)
    const test = (count.filter(el=>(el.id===params.id))[0])

    const dispatch = useDispatch();
    const [newtodo, setNewtodo] = useState(test.desc)
    const handleChange = (e) => {
        setNewtodo(e.target.value)
    }
    const handleClick = () => {
        dispatch(changeData({id:params.id,desc:newtodo}))
        setNewtodo('')
        navigate('/')
    }
    return (
        <div className={style.container}>
            <input type="text" value={newtodo} placeholder="Add New Item" onChange={handleChange}/>
            <button onClick={handleClick} disabled={newtodo==""?true:false}>Add</button>
            
        </div>
    )
}

export default ChangeTodo