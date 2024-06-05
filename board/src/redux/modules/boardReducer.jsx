const _SAVE = 'DATA_SAVE';
const _SELECT = 'DATA_SELECT'

export const dataSave = (inputData) => ({
    type: _SAVE,
    inputData: {
        id: inputData.id,
        title: inputData.title,
        content: inputData.content
    }
})

export const selectRow = (id) => ({
    type: _SELECT,
    inputData: {
        id: id,
    },
    selectRowData: {}
})
 
const initialState = {
    lastId: 0,
    inputData: []
}
 
export default function boardReducer(state = initialState, action){
    switch(action.type) {
        case _SAVE:
            console.log(state.inputData)
            return {
                lastId: state.lastId + 1,
                inputData: state.inputData.concat({
                    ...action.inputData,
                    id: state.lastId + 1,
                })
            }
        case _SELECT:
            return {
                ...state,
                selectRowData: state.inputData.find(row => row.id === action.inputData.id)
            }
        default:
            return state
    }
}