import React, {Component} from 'react';
import {TabNav} from "./TabNav";
import {Tab} from "./Tab";
import './tabs.scss';

export class Tabs extends Component {
    state = {
        selectedIndex: 0
    };

    selectTab = (index) => {
        this.setState({selectedIndex: index})
    };

    render() {
        const {children} = this.props;
        const {selectedIndex} = this.state;
        const tabs = children.filter(child => child.type === Tab);
        const titles = tabs.map(tab => tab.props.title);

        return (
            <div className="tabs">
                <TabNav
                    tabs={titles}
                    selectedIndex={this.state.selectedIndex}
                    selectTab={this.selectTab}
                />
                <section>
                    {tabs[selectedIndex].props.children}
                </section>
            </div>
        );
    }
}
