import { useBlockProps } from '@wordpress/block-editor';
import TailwindTabs from './components/TailwindTabs';
const { Component } = wp.element;

class Save extends Component {
	render() {
		const { attributes } = this.props;
		return (
			<div>
				<TailwindTabs {...attributes} />
			</div>
		);
	}
}

export default Save;
