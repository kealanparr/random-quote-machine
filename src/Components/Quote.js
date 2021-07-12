import State from '../state'
import React, { useState } from 'react';

const QuoteModal = () => {

	const [index, setIndex] = useState(0);

	const changeColor = (color) => {
		document.body.style.backgroundColor = color;
		document.getElementById("text").style.backgroundColor = color;
		document.getElementById("author").style.backgroundColor = color;
	}
	
	return (
		State &&
		<div>
			<div id="text">{State[index].quote}</div>
			<div id="author">{State[index].author}</div>
			<InfoPanel index={index} setIndex={setIndex} changeColor={changeColor} />
		</div>
	)
};

const InfoPanel = ({index, setIndex, changeColor}) => {
	return (
		State &&
		<div>
			<a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet</a>
			<div onClick={() => {
				debugger;
				const newIndex = index + 1;
				if (newIndex === State.length) {
					setIndex(0);
				} else {
					setIndex(index + 1);
				}
				changeColor(State[index].color);
			}} id="new-quote">New Quote</div>
		</div>
	)
}

export default QuoteModal;