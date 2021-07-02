import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';

registerBlockType('gtt/guten-tailwind-tab', {
	apiVersion: 2,
	title: __('Tailwind Tab'),
	attributes: {
		tabs: {
			type: Object,
			default: {
				options: [
					{
						name: 'tab1',
						title: 'Tab Title',
						tabContent: 'Tab Content',
					},
				],
			},
		},
	},
	edit: Edit,
	save(props) {
		return <h2>Hello from save</h2>;
	},
});
