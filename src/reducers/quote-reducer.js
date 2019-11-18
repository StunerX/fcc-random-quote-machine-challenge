const defaultQuote = ({
    quote: 'Ser ou não ser',
    author: 'Santos, Cleyton'
})

const quoteReducer = (state = defaultQuote, action) => {
    switch (action.type) {
        case 'NEXT_AUTHOR': return {
            quote: action.newQuote.quote,
            author: action.newQuote.author,
        }
        default: return state
    }
}

export default quoteReducer