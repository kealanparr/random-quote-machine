import State from '../state.json'

const QuoteModal = () => {
	return (
		<div state={State}>
				<div id="text"></div>
				<div id="author"></div>
				<InfoPanel />
		</div>

	)
};

const InfoPanel = () => {
	return (
		<div>
			<a href="twitter.com/intent/tweet">Tweet</a>
			<div id="new-quote"></div>
		</div>
	)
}

export default QuoteModal;