import React, { Component } from 'react'
import './quote-box.css'

import QuoteText from '../quote-text'
import QuoteAuthor from '../quote-author'
import Buttons from '../buttons'

import { connect } from 'react-redux'

import axios from 'axios'

class QuoteBox extends Component {

    componentDidMount() {
        const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        axios.get(url).then((result) => {
            this.props.dispatch({ type: 'FETCHING', quotes: result.data.quotes })

            let randomNumber = Math.floor(Math.random() * result.data.quotes.length)

            let quote = result.data.quotes[randomNumber]

            this.props.dispatch({ type: 'NEXT_AUTHOR', newQuote: quote })
        })
    }

    render() {
        return (
            <div className="quote-box">
                <QuoteText text={this.props.quote} />
                <QuoteAuthor author={this.props.author} />
                <Buttons />
            </div>
        )
    }
}

const mapStateToProps = ({ quoteReducer }) => ({
    quote: quoteReducer.quote,
    author: quoteReducer.author
})


export default connect(mapStateToProps)(QuoteBox)