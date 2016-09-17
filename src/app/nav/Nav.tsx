import * as React from 'react';
import * as ReactDom from 'react-dom';
import { resources } from './resources'
import './nav.scss';


interface INavProps {
    onMenuItemClick: (scrollToElement) => void;
};

interface INavState {};

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
                        { item.label }
                    </button>
                )
            })
        )
    }

    render() {
        console.log(this.generateLinks());
        return (
            <nav className="nav">
                <div className="nav-items">
                    { this.generateLinks() }

                </div>
            </nav>
        );
    }
}


