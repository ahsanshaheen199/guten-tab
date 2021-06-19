import { TabPanel, Button, PanelBody } from "@wordpress/components";
import {
    InspectorControls,
} from '@wordpress/block-editor';

const edit = ( props ) => {
    const { attributes } = props;
    const { tabs } = attributes;
    return (
        <>
            <InspectorControls>
                <PanelBody title="My Block Settings" initialOpen={ true }>
                    {
                        tabs.options.map( tab => {
                            return (
                            <PanelBody title={tab.title} initialOpen={false}>
                                {tab.title} 
                            </PanelBody>
                            )
                        } )
                    }
                    <Button className="button is-primary">
                        Add new tab
                    </Button>
                </PanelBody>
            </InspectorControls>
            <TabPanel
            className="my-tab-panel"
            activeClass="active-tab"
            tabs={ [...tabs.options] }
        >
            { ( tab ) => <div>{ tab.tabContent }</div> }
            </TabPanel>
        </>
    )
}

export default edit;