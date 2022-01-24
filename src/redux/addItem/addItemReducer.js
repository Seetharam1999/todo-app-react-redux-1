
import { ADD_ITEM, DEL_ITEM, COMPLETE_ITEM } from './addItemTypes'

const intialState = {
    content: []
}


const addReducer = (state = intialState, { type, payload }) => {

    switch (type) {
        case ADD_ITEM:
            return {
                ...state, content: [...state.content, payload],

            }
        case DEL_ITEM:
            return {
                ...state,
                content: [...state.content, state.content.map(newItem => { if (newItem !== undefined) if (newItem.id === payload) newItem.isDeleted = true })[0]]
            }
        case COMPLETE_ITEM:
            return {
                ...state,
                content: [...state.content, state.content.map(newItem => { if (newItem !== undefined) if (newItem.id === payload) newItem.isCompleted = true })[0]]
            }



        default: return {
            ...state
        }
    }

}

export default addReducer;