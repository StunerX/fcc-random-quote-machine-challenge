import React from 'react'
import Button from '../button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons"
import '../buttons/buttons.css'

const Buttons = () => (
    <div className="buttons">
        <a class="button tweet-quote" title="Tweet this quote!" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a class="button tumblr-quote" title="Tweet this quote!" target="_blank">
            <FontAwesomeIcon icon={faTumblr} />
        </a>
        <div className="new-quote"><Button>New Quote</Button></div>
    </div>
)

export default Buttons