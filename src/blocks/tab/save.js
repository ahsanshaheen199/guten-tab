import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = () => {
	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
