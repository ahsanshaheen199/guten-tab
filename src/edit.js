import {
	Button,
	PanelBody,
	TextControl,
	TextareaControl,
	ColorPicker,
} from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
	BlockControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { v4 as uuid } from 'uuid';
import TailwindTabs from './components/TailwindTabs';

const Edit = (props) => {
	const { attributes, setAttributes } = props;
	const { tabs } = attributes;

	const setTabDetails = (tab) => {
		setAttributes({
			tabs: {
				options: [
					...tabs.options.map((t) => {
						return tab.key === t.key ? tab : t;
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
						key: uuid(),
						title: 'Tab Title',
						tabContent: 'Tab Content',
					},
				],
			},
		});
	};

	const removeTab = (tabID) => {
		if (tabs.options.length === 1) {
			alert('One item must be there');
			return;
		}
		setAttributes({
			tabs: {
				options: [
					...tabs.options.filter((t) => {
						return t.key !== tabID;
					}),
				],
			},
		});
	};

	return (
		<>
			<div {...useBlockProps()}>
				<InspectorControls>
					<PanelBody title={__('Content')} initialOpen={true}>
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
										onClick={() => removeTab(tab.key)}>
										{__('Remove Tab')}
									</Button>
								</PanelBody>
							);
						})}

						<div style={{ textAlign: 'center', marginTop: '10px' }}>
							<Button
								className='button is-primary'
								onClick={addNewTab}>
								{__('Add New Tab')}
							</Button>
						</div>
					</PanelBody>
					<PanelBody title={__('Color')} initialOpen={false}>
						<ColorPicker
							color={props.attributes.activeColor}
							onChangeComplete={(value) =>
								setAttributes({
									activeColor: value,
								})
							}
						/>
					</PanelBody>
				</InspectorControls>
				<TailwindTabs {...attributes} />
			</div>
		</>
	);
};

export default Edit;
