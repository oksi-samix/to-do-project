import React, {Component} from 'react';

export const TabNav = ({selectedIndex, tabs, selectTab}) => {
    const itemClick = (ev, index) => {
        ev.preventDefault();
        selectTab(index)
    };
    return (
        <nav className="nav-tab">
            <ul>
                {tabs.map((tab, index) => (
                    <li key={index} className={selectedIndex === index ? "active" : null}>
                        <a href="#" onClick={ev => itemClick(ev, index)}>
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>
    );
};
