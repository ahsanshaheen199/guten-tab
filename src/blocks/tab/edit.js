import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

const Edit = ( { attributes, setAttributes, clientId } ) => {
	const { uid, activeTab } = attributes;

	useEffect( () => {
		if ( ! uid ) {
			setAttributes( { uid: clientId } );
		}
	}, [] );

	const display = activeTab === uid ? 'block' : 'none';
	return (
		<div { ...useBlockProps() }>
			<div className={ 'guten-tab-panel' } style={ { display } }>
				<InnerBlocks
					allowedBlocks={ [ 'core/heading', 'core/paragraph' ] }
					renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
				/>
			</div>
		</div>
	);
};

export default Edit;
