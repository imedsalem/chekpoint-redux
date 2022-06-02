import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: [{id:uuidv4()  , desc: 'Task1', isDone: true},{id:uuidv4() , desc: 'Task2', isDone: false},{id:uuidv4() , desc: 'Task3', isDone: true}]
}

export const editSlice = createSlice({
    name: 'EditData',
    initialState,
    reducers: {
        AddItemToData: (state, action) => {
            state.data = [...state.data, {id:uuidv4()  , desc: action.payload, isDone: false}]
        },
        DeleteItemData: (state, action) => {
            state.data = state.data.filter(el=>el.id!==action.payload)
        },
        ChangeStateItemData: (state, action) => {
            state.data = state.data.map(el =>
                el.id === action.payload
                    ? {...el,isDone:!el.isDone}
                    : el
                )
        },
        changeData: (state, action) => {
            state.data = state.data.map(el =>
                el.id === action.payload.id
                    ? {...el,desc:action.payload.desc}
                    : el
                )
        },
    },
})

export const {AddItemToData,DeleteItemData,ChangeStateItemData,changeData} = editSlice.actions

export default editSlice.reducer