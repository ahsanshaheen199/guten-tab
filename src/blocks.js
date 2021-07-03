import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { v4 as uuid } from 'uuid';
import Edit from './edit';
import Save from './Save';
import './index.css';

registerBlockType('gtt/guten-tailwind-tab', {
	apiVersion: 2,
	title: __('Tailwind Tab'),
	attributes: {
		tabs: {
			type: Object,
			default: {
				options: [
					{
						key: uuid(),
						title: 'Tab Title',
						tabContent: 'Tab Content',
					},
				],
			},
		},
		activeColor: {
			type: 'string',
		},
	},
	edit: Edit,
	save: Save,
});
