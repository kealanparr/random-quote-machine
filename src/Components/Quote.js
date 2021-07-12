import State from '../state.json'
import React, { useState } from 'react';

const QuoteModal = () => {

	const [index, setIndex] = useState(0);

	const changeColor = (color) => {
		document.body.style.backgroundColor = color;
	}
	
	return (
			State &&
			<div>
					<div id="text">{State.data[index].quote}</div>
					<div id="author">{State.data[index].author}</div>	
					<InfoPanel index={index} setIndex={setIndex} changeColor={changeColor} />
			</div>
	)
};

const InfoPanel = ({index, setIndex, changeColor}) => {
	return (
		<div>
				<a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
				<div onClick={() => {
					debugger;
					const newIndex = index + 1;
					if (newIndex === State.data.length) {
						setIndex(0);
					} else {
						setIndex(index + 1);
					}
					changeColor(State.data[index].color);
				}} id="new-quote"></div>
		</div>
	)
}

export default QuoteModal;