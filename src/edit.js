import {
	TabPanel,
	Button,
	PanelBody,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
	BlockControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { v4 as uuid } from 'uuid';

const Edit = (props) => {
	const { attributes, setAttributes } = props;
	const { tabs } = attributes;
	console.log(tabs);

	const setTabDetails = (tab) => {
		setAttributes({
			tabs: {
				options: [
					...tabs.options.map((t) => {
						return tab.name === t.name ? tab : t;
					}),
				],
			},
		});
	};

	const addNewTab = () => {
		setAttributes({
			tabs: {
				options: [
					...tabs.options,
					{
						name: uuid(),
						title: 'Tab Title',
						tabContent: 'Tab Content',
					},
				],
			},
		});
	};

	const removeTab = (tabID) => {
		setAttributes({
			tabs: {
				options: [
					...tabs.options.filter((t) => {
						return t.name !== tabID;
					}),
				],
			},
		});
	};

	return (
		<>
			<div {...useBlockProps()}>
				<InspectorControls>
					<PanelBody title='My Block Settings' initialOpen={true}>
						{tabs.options.map((tab) => {
							return (
								<PanelBody
									title={tab.title}
									initialOpen={false}>
									<TextControl
										label={__('Tab Title')}
										value={tab.title}
										onChange={(title) =>
											setTabDetails({
												...tab,
												title,
											})
										}
									/>
									<TextareaControl
										label={__('Tab Content')}
										value={tab.tabContent}
										onChange={(content) =>
											setTabDetails({
												...tab,
												tabContent: content,
											})
										}
									/>

									<Button
										className='button is-destructive'
										onClick={() => removeTab(tab.name)}>
										{__('Remove Tab')}
									</Button>
								</PanelBody>
							);
						})}

						<Button
							className='button is-primary'
							onClick={addNewTab}>
							{__('Add New Tab')}
						</Button>
					</PanelBody>
				</InspectorControls>
				<TabPanel
					className='guten-tab-panel'
					activeClass='active-tab'
					tabs={[...tabs.options]}>
					{(tab) => <div>{tab.tabContent}</div>}
				</TabPanel>
			</div>
		</>
	);
};

export default Edit;
