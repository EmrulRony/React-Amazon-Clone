export const initialState = {
    busket: []
}

const reducer = (state, action) => {
    console.log('🔥', action);

    switch (action.type) {
        case 'ADD_TO_BUSKET':
            return state;
        case 'REMOVE_FROM_BUSKET':
            return state;
        default:
            return state;
    }
}

export default reducer;
