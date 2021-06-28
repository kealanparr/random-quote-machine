const QuoteModal = () => {
	return (
		< div>
				<div id="text"></div>
				<div id="author"></div>
				<InfoPanel />
		</div>

	)
};

const InfoPanel = () => {
	return (
		<div>
			<div id="tweet-quote"></div>
			<div id="new-quote"></div>
		</div>
	)
}

export default QuoteModal;