const quoteListReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCHING': return []
        default: return state
    }
}

export default quoteListReducer