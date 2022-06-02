import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './AddItem.module.css'
import {AddItemToData} from '../../features/EditData';

const AddItem = () => {
  //disabled={true}
    const dispatch = useDispatch();
    const [newtodo, setNewtodo] = useState("")
    const handleChange = (e) => {
        setNewtodo(e.target.value)
        
    }
    const handleClick = () => {
        dispatch(AddItemToData(newtodo))
        setNewtodo('')
        
    }
  return (
    <div className={style.container}>
        <input type="text" value={newtodo} placeholder="Add New Item" onChange={handleChange}/>
        <button onClick={handleClick} disabled={newtodo==""?true:false} >Add</button>
    </div>
  )
}

export default AddItem