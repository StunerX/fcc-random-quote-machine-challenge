import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './quote-text.css'

const QuoteText = () => (
    <div className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} /><span>Ser ou não ser, eis a questão</span>
    </div>
)

export default QuoteText