import {
	Button,
	PanelBody,
	TextControl,
	TextareaControl,
	ColorPalette,
	IconButton,
} from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
	RichText,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { v4 as uuid } from 'uuid';
// import TailwindTabs from './components/TailwindTabs';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

const Edit = ( { attributes, setAttributes, clientId } ) => {
	const { tabs, activeTab } = attributes;

	const setActiveTab = ( uid ) => {
		setAttributes( { activeTab: uid } );
		const parentBlock = select( 'core/block-editor' ).getBlock( clientId );

		parentBlock.innerBlocks.forEach( ( innerBlock ) => {
			dispatch( 'core/block-editor' ).updateBlockAttributes(
				innerBlock.clientId,
				{
					activeTab: uid,
				}
			);
		} );

		dispatch( 'core/block-editor' ).selectBlock( uid );
	};

	useEffect( () => {
		if ( tabs.length && ! activeTab ) {
			setActiveTab( tabs[ 0 ].uid );
		}
	}, [] );

	return (
		<>
			<div { ...useBlockProps() }>
				<div className={ 'guten-tabs-nav flex flex-wrap' }>
					{ tabs.map( ( tab ) => {
						return (
							<div
								key={ tab.uid }
								className={ 'guten-tab-item text-sm mr-6' }
							>
								<div
									className={ `cursor-pointer py-3 guten-tab-link${
										tab.uid === activeTab
											? ' is-active'
											: ''
									}` }
									role="tab"
									tabIndex="0"
									onClick={ () => setActiveTab( tab.uid ) }
								>
									<RichText value={ tab.title } />
								</div>
							</div>
						);
					} ) }
					<Button
						variant={ 'primary' }
						icon={ 'plus' }
						onClick={ () => {
							const tab = createBlock( 'ahsan03/tab' );
							const position = tabs.length;
							dispatch( 'core/block-editor' ).insertBlock(
								tab,
								position,
								clientId
							);
							setAttributes( {
								tabs: [
									...tabs,
									{
										uid: tab.clientId,
										title: 'New Title',
									},
								],
							} );
						} }
					>
						{ __( 'Add Tab', 'gtt' ) }
					</Button>
				</div>
				<InnerBlocks
					allowedBlocks={ [ 'ahsan03/tab' ] }
					renderAppender={ false }
				/>
			</div>
		</>
	);
};

export default Edit;
