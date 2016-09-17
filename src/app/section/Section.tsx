import * as React from 'react';



interface ISectionProps {
    id: string;
    title?: string;
    extraClass?: string;
    children?: Element;
    img?: string;
    icon?: string;
};

interface ISectionState {};

export class Section extends React.Component<ISectionProps, ISectionState> {
    constructor(props, state){
        super(props, state);
    }

    render() {
        return (
            <section className={`section ${this.props.extraClass ? this.props.extraClass :''}`}>
                {this.props.img &&
                    <img className="section-image" src={this.props.img}/>
                }
                <div className="container">
                    {this.props.title &&
                    <header className="section-header">

                            {this.props.icon &&
                                <i className={`icon fi flaticon-${this.props.icon}`}></i>
                            }
                            <span className="title">{ this.props.title }</span>
                            {this.props.icon &&
                                <i className={`icon fi flaticon-${this.props.icon}`}></i>
                            }


                    </header>
                    }
                    <div className="section-content">
                        { this.props.children }
                    </div>
                </div>
            </section>
        );
    }
}


