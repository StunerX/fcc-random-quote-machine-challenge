import React from 'react'
import './quote-author.css'

const QuoteAuthor = ({ author }) => (
    <div className="quote-author">
        - <span>{author}</span>
    </div>
)

export default QuoteAuthor