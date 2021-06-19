import { registerBlockType } from "@wordpress/blocks";
import {__} from "@wordpress/i18n";
import edit from "./edit";

registerBlockType('gtt/guten-tailwind-tab',{
    apiVersion: 2,
    title: __('Tailwind Tab'),
    attributes: {
        tabs: {
            type: Object,
            default: {
                options: [ 
                    { name: 'tab1',title: 'Tab One', tabContent: 'Tab One Content' },
                    { name: 'tab2',title: 'Tab Two', tabContent: 'Tab Two Content' },
                ]
            }
        },
    },
    edit,
    save(props){
        return (
            <h2>Hello from save</h2>
        )
    }
});