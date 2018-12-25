import React, {Component} from 'react';
import './tabs.scss';

export class Tabs extends Component {
    state={
        selectedIndex: 0
    };

    render() {
        return (
            <div className="tabs">
                <nav className="nav-tab">
                    <ul>
                        {this.props.tabs.map((tab, index) => (<li key={index}><a href="#">{tab.titile}</a></li>))}
                    </ul>

                </nav>
                <section>
                    {this.props.tabs[this.state.selectedIndex].content}
                </section>
            </div>
        );
    }
}
