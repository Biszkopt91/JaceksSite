import * as React from 'react';
import './section.scss';


interface ISectionProps {
    id: string;
    title?: string;
    children?: Element;
};

interface ISectionState {};

export class Section extends React.Component<ISectionProps, ISectionState> {
    constructor(props, state){
        super(props, state);
    }

    render() {
        return (
            <section className="section">
                {this.props.title &&
                    <header className="section-header">
                        <h2>
                            { this.props.title }
                        </h2>

                    </header>
                }
                <div className="section-content">
                    { this.props.children }
                </div>
            </section>
        );
    }
}


