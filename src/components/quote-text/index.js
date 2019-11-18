import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './quote-text.css'

const QuoteText = ({ text }) => (
    <div className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} /><span>{text}</span>
    </div>
)

export default QuoteText