import State from '../state'
import React, { useState } from 'react';

const QuoteModal = () => {

	const [index, setIndex] = useState(0);

	const changeColor = (color) => {
		document.body.style.backgroundColor = color;
		document.getElementById("text").style.color = color;
		document.getElementById("author").style.color = color;

		/// Font awesome icons
		document.getElementsByClassName("tweet")[0].style.color = color;
		document.getElementsByClassName("refresh")[0].style.color = color;
		document.getElementsByClassName("leftQuote")[0].style.color = color;
	}

	return (
		State &&
		<div class="modal-container">
			<i class="fa fa-quote-left leftQuote" aria-hidden="true"></i>
			<span id="text">{State[index].quote}</span>
			<div id="author">- {State[index].author}</div>
			<InfoPanel index={index} setIndex={setIndex} changeColor={changeColor} />
		</div>
	)
};

const InfoPanel = ({ index, setIndex, changeColor }) => {

	const newQuote = () => {
		const newIndex = index + 1;
		if (newIndex === State.length) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
		changeColor(State[index].color);
	}

	return (
		State &&
		<div class="buttonsContainer">
			<a id="tweetQuoteContainer" href="https://twitter.com/intent/tweet">
				<i class="fa fa-twitter tweetIcon" aria-hidden="true"></i>
			</a>
			<div onClick={newQuote} id="newQuoteContainer">
				<i class="fa fa-refresh refreshIcon" aria-hidden="true"></i>
			</div>
		</div>
	)
}

export default QuoteModal;