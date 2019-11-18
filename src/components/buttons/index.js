import React, { Component } from 'react'
import Button from '../button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons"
import '../buttons/buttons.css'

import { connect } from 'react-redux'

import axios from 'axios'

class Buttons extends Component {
    handleClickQuote = () => {
        const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        axios.get(url).then((result) => {
            console.log('recebeu dados', result.data.quotes[0])
            this.props.nextAuthor(result.data.quotes[0])
        })
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


const mapDispatchtoProps = dispatch => {
    return {
        nextAuthor: (newQuote) => dispatch({ type: 'NEXT_AUTHOR', newQuote })
    }
}

export default connect(null, mapDispatchtoProps)(Buttons)