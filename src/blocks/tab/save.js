import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const { uid } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div data-tab-id={ uid } className={ 'guten-tab-panel' }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
