const _SAVE = 'DATA_SAVE';
const _SELECT = 'DATA_SELECT';
const _UPDATE = 'DATA_UPDATE';
const _DELETE = 'DATA_DELETE';

export const dataSave = (inputData) => ({
    type: _SAVE,
    inputData: {
        id: inputData.id,
        title: inputData.title,
        content: inputData.content
    }
});

export const selectRow = (id) => ({
    type: _SELECT,
    id: id
});

export const dataUpdate = (inputData) => ({
    type: _UPDATE,
    inputData: {
        id: inputData.id,
        title: inputData.title,
        content: inputData.content
    }
});

export const dataDelete = (id) => ({
    type: _DELETE,
    id: id
});

const initialState = {
    lastId: 0,
    inputData: [],
    selectRowData: {}
};

export default function boardReducer(state = initialState, action) {
    switch (action.type) {
        case _SAVE:
            return {
                ...state,
                lastId: state.lastId + 1,
                inputData: [
                    ...state.inputData,
                    {
                        ...action.inputData,
                        id: state.lastId + 1
                    }
                ]
            };
        case _SELECT:
            return {
                ...state,
                selectRowData: state.inputData.find(row => row.id === action.id)
            };
        case _UPDATE:
            return {
                ...state,
                inputData: state.inputData.map(row =>
                    row.id === action.inputData.id ? {...action.inputData} : row
                ),
                selectRowData: {}
            };
        case _DELETE:
            return {
                ...state,
                inputData: state.inputData.filter(row => row.id !== action.id),
                selectRowData: {}
            };
        default:
            return state;
    }
}
