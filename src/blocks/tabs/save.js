import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const { tabs } = attributes;

	const blockProps = useBlockProps.save( {
		className: `${ useBlockProps.save().className } guten-tab-wrapper`,
	} );

	return (
		<div { ...blockProps }>
			<div className={ 'guten-tabs-nav' }>
				{ tabs.map( ( tab ) => {
					return (
						<div
							key={ tab.uid }
							className={ 'guten-tab-item' }
							role="tab"
							tabIndex="0"
						>
							<div
								data-tab-id={ tab.uid }
								className={ `guten-tab-link` }
							>
								<div>{ tab.title }</div>
							</div>
						</div>
					);
				} ) }
			</div>
			<div className={ 'guten-tab-content' }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
