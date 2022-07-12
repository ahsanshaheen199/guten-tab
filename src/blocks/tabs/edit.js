import { Button } from '@wordpress/components';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import './editor.scss';

const Edit = ( { attributes, setAttributes, clientId } ) => {
	const { tabs, activeTab } = attributes;

	const blockProps = useBlockProps( {
		className: `${ useBlockProps().className } guten-tab-wrapper`,
	} );

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
	};

	const addNewTab = () => {
		const tab = createBlock( 'ahsan03/tab' );
		const position = tabs.length;
		dispatch( 'core/block-editor' ).insertBlock( tab, position, clientId );
		setAttributes( {
			tabs: [
				...tabs,
				{
					uid: tab.clientId,
					title: `Tab ${ tabs.length + 1 }`,
				},
			],
		} );
		setActiveTab( tab.clientId );
	};

	const tabTitleChange = ( newValue ) => {
		setAttributes( {
			tabs: [
				...tabs.map( ( t ) => {
					return t.uid === activeTab
						? {
								...t,
								title: newValue,
						  }
						: t;
				} ),
			],
		} );
	};

	useEffect( () => {
		if ( tabs.length && ! activeTab ) {
			setActiveTab( tabs[ 0 ].uid );
		}
	}, [ tabs ] );

	return (
		<>
			<div { ...blockProps }>
				<div className={ 'guten-tabs-nav' }>
					{ tabs.map( ( tab ) => {
						return (
							<div
								key={ tab.uid }
								className={ 'guten-tab-item' }
								role="tab"
								tabIndex="0"
								onClick={ () => setActiveTab( tab.uid ) }
							>
								<div
									className={ `guten-tab-link${
										tab.uid === activeTab
											? ' is-active'
											: ''
									}` }
								>
									<RichText
										tagName="div"
										value={ tab.title }
										onChange={ tabTitleChange }
									/>
								</div>
							</div>
						);
					} ) }
					<Button
						variant={ 'primary' }
						icon={ 'plus' }
						onClick={ addNewTab }
					>
						{ __( 'Add Tab', 'gtt' ) }
					</Button>
				</div>
				<div className={ 'guten-tab-content' }>
					<InnerBlocks
						allowedBlocks={ [ 'ahsan03/tab' ] }
						renderAppender={ false }
					/>
				</div>
			</div>
		</>
	);
};

export default Edit;
