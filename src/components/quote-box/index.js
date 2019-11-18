import React from 'react'
import './quote-box.css'

import QuoteText from '../quote-text'
import QuoteAuthor from '../quote-author'
import Buttons from '../buttons'

import { connect } from 'react-redux'

const QuoteBox = ({ quote, author }) => (
    <div className="quote-box">
        <QuoteText text={quote} />
        <QuoteAuthor author={author} />
        <Buttons />
    </div>
)

const mapStateToProps = ({ quoteReducer }) => ({
    quote: quoteReducer.quote,
    author: quoteReducer.author
})

export default connect(mapStateToProps)(QuoteBox)