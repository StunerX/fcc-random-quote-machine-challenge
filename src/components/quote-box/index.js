import React from 'react'
import './quote-box.css'

import QuoteText from '../quote-text'
import QuoteAuthor from '../quote-author'
import Buttons from '../buttons'

const QuoteBox = () => (
    <div className="quote-box">
        <QuoteText />
        <QuoteAuthor />
        <Buttons />
    </div>
)

export default QuoteBox