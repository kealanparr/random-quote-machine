import State from '../state.json'
import React, { useState } from 'react';

const QuoteModal = () => {
	return (
		<div>
				{ /* 	<i className="fas fa-quote-left"></i> */ }
				<div id="text">{State.data[State.index].quote}</div>
				<div id="author">{State.data[State.index].author}</div>
				<InfoPanel />
		</div>
	)
};

const InfoPanel = () => {
	
		const [index, nextQuote] = useState(0);

	return (
		<div>
			<a href="twitter.com/intent/tweet">Tweet</a>
			<div onClick={() => {
				debugger;
				nextQuote(index + 1);
			}} id="new-quote"></div>
		</div>
	)
}

export default QuoteModal;