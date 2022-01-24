import { ADD_ITEM ,DEL_ITEM,COMPLETE_ITEM} from './addItemTypes'

export function addItem(item) {
    return (dispatch) => {
      
        return dispatch({
            type: ADD_ITEM,
            payload: item
        })
    }
}

export const delItem = (id) =>(dispatch)=> {
    return dispatch({
        type:DEL_ITEM,
        payload:id
    })
}

export const completeItem = (id) =>(dispatch)=> {
    return dispatch({
        type:COMPLETE_ITEM,
        payload:id
    })
}