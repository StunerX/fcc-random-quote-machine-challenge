import React, { Component } from 'react'
import Button from '../button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons"
import '../buttons/buttons.css'

import { connect } from 'react-redux'

import axios from 'axios'

class Buttons extends Component {
    handleClickQuote = () => {
        let randomNumber = Math.floor(Math.random() * this.props.quotes.length)

        let quote = this.props.quotes[randomNumber]

        this.props.nextAuthor(quote)

    }
    render() {
        return (
            <div className="buttons">
                <a className="button tweet-quote" title="Tweet this quote!" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="button tumblr-quote" title="Tweet this quote!" target="_blank">
                    <FontAwesomeIcon icon={faTumblr} />
                </a>
                <div className="new-quote">
                    <Button handleClick={() => this.handleClickQuote()}>New Quote</Button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ quoteListReducer }) => ({
    quotes: quoteListReducer
})

const mapDispatchtoProps = dispatch => {
    return {
        nextAuthor: (newQuote) => dispatch({ type: 'NEXT_AUTHOR', newQuote })
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Buttons)