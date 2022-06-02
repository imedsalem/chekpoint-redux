import React from 'react'
import { useDispatch } from 'react-redux';
import style from './TodoItem.module.css'
import {DeleteItemData,ChangeStateItemData} from '../../features/EditData';
import { Link } from 'react-router-dom';

const TodoItem = ({el}) => {
    const dispatch = useDispatch();
    const handleClickDelete = () => {
        dispatch(DeleteItemData(el.id))
    }
    const handleClickDone = () => {
        dispatch(ChangeStateItemData(el.id))
    }
    return (
        <div className={style.container}>
            <div className={style.todoitem}>
                {el.isDone===true ? 
                <img className={style.img} src="https://www.pngfind.com/pngs/m/6-62743_check-circle-green-checkmark-confirm-okay-tick-ok.png" alt="done" /> 
                :<img className={style.img}src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/2048px-Deletion_icon.svg.png" alt="notdone" /> }
                {el.desc}
            </div>
            <div className={style.control}>
                <button onClick={handleClickDelete}>X</button>
                <Link to={`/${el.id}`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleClickDone}>IsDone</button>
            </div>
        </div>
    )
}

export default TodoItem