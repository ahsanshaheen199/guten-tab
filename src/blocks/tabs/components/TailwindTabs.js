import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';

const TailwindTabs = ( { tabs, activeColor } ) => {
	const [ activeTabKey, setActiveTabKey ] = useState( tabs.options[ 0 ].key );

	return (
		<div className="guten-tab-panel">
			<div className="guten-tabs-nav flex flex-wrap border-b border-gray-300 border-solid">
				{ tabs.options.map( ( tab ) => {
					return (
						<div
							key={ tab.key }
							className="guten-tab-item text-sm mr-6"
						>
							<div
								data-tab={ tab.key }
								id={ `${ tab.key }-tab-link` }
								className={ `cursor-pointer py-3 guten-tab-link${
									activeTabKey === tab.key ? ' is-active' : ''
								}` }
								style={ {
									color: activeColor,
								} }
								onClick={ () => setActiveTabKey( tab.key ) }
							>
								{ tab.title }
							</div>
						</div>
					);
				} ) }
				<Button variant="primary">CLick</Button>
			</div>
			<div className="guten-tab-content">
				{ tabs.options.map( ( tab ) => {
					return (
						<div
							data-tab={ tab.key }
							key={ tab.key }
							id={ `${ tab.key }-tab-panel` }
							className={ ` text-sm py-4 guten-tab-pane${
								activeTabKey === tab.key ? ' is-active' : ''
							}` }
						>
							{ tab.tabContent }
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

export default TailwindTabs;
