const quoteListReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCHING': return state.concat(action.quotes)
        default: return state
    }
}

export default quoteListReducer