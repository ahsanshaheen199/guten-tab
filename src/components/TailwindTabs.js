const { Component } = wp.element;

class TailwindTabs extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTabKey: this.props.tabs.options[0].key };
	}

	render() {
		console.log(this.props);
		return (
			<div className='guten-tab-panel'>
				<div className='guten-tabs-nav flex flex-wrap border-b border-gray-300 border-solid'>
					{this.props.tabs.options.map((tab) => {
						return (
							<div
								key={tab.key}
								className='guten-tab-item text-sm mr-6'>
								<div
									data-tab={tab.key}
									id={`${tab.key}-tab-link`}
									className={`cursor-pointer py-3 guten-tab-link${
										this.state.activeTabKey == tab.key
											? ' is-active'
											: ''
									}`}
									style={{
										color: this.props?.activeColor?.hex,
									}}
									onClick={() =>
										this.setState({ activeTabKey: tab.key })
									}>
									{tab.title}
								</div>
							</div>
						);
					})}
				</div>
				<div className='guten-tab-content'>
					{this.props.tabs.options.map((tab) => {
						return (
							<div
								data-tab={tab.key}
								key={tab.key}
								id={`${tab.key}-tab-panel`}
								className={` text-sm py-4 guten-tab-pane${
									this.state.activeTabKey == tab.key
										? ' is-active'
										: ''
								}`}>
								{tab.tabContent}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default TailwindTabs;
