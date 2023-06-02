export const reducer = (state, action) => {
    if(action.type === 'REMOVE_ITEM'){
        return{
            ...state,
            item: state.items.filter((curItem) => {
                return curItem.id !== action.payload;
            })
        }
    }
    return state;
}
