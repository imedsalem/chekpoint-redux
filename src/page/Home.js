import React from 'react'
import AddItem from '../component/AddItem/AddItem'
import TodoList from '../component/TodoList/TodoList'
import style from './Home.module.css'


const Home = () => {
  return (
    <div className={style.posetion}>
      <div className={style.container}>
        <AddItem />
        <TodoList />
      </div>
    </div>
  )
}

export default Home