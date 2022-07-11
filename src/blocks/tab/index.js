import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';
import './style.css';

const { name, ...settings } = json;

registerBlockType( name, {
	...settings,
	edit: Edit,
	save: Save,
} );
