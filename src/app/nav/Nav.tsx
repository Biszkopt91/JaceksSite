import * as React from 'react';
import { resources } from './resources'


interface INavProps {
    onMenuItemClick: (scrollToElement) => void;
};

interface INavState {
    isOpen: boolean
};

export class Nav extends React.Component<INavProps, INavState> {
    constructor(props, state){
        super(props, state);
    }

    generateLinks(){
        return (
            resources.map((item) => {
                return (
                    <button
                        key={ item.id }
                        className="nav-item"
                        onClick={() => { this.props.onMenuItemClick(item.scrollTo) }}>
                        <span className="nav-item-title">{ item.label }</span>
                    </button>
                )
            })
        )
    }

    render() {
        return (
            <nav className="nav">
                <div className="nav-toggle">

                </div>
                <div className="nav-items">
                    { this.generateLinks() }

                </div>
            </nav>
        );
    }
}


