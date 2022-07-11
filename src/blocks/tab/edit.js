import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

const Edit = ( { attributes, setAttributes, clientId } ) => {
	const { uid, activeTab } = attributes;
	console.log( { activeTab } );
	useEffect( () => {
		// only do this if there is no uid already, meaning it is a newly created tab
		if ( ! uid ) {
			setAttributes( { uid: clientId } );
		}
	}, [] );

	const display = activeTab === uid ? 'block' : 'none';
	return (
		<div { ...useBlockProps() }>
			<div style={ { display } }>
				<InnerBlocks
					allowedBlocks={ [ 'core/heading', 'core/paragraph' ] }
				/>
			</div>
		</div>
	);
};

export default Edit;
