/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './header';
import {Section} from './section/Section';
import {Footer} from './footer';
import {resources} from './resources'


const sectionsRes = resources.sections;
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

interface IMainProps {};

interface IMainState {};

export class Main extends React.Component<IMainProps, IMainState> {


  handleNavItemClick = (scrollToElement) => {
    console.log(ReactDOM.findDOMNode(this.refs[scrollToElement]).getBoundingClientRect());
    const scrollTop = ReactDOM.findDOMNode(this.refs[scrollToElement]).getBoundingClientRect().top;
    window.scrollTo(0, window.scrollY + scrollTop - 50)
  };

  render() {
    return (
      <div style={styles.container}>
        <div className="">
          <Section
              mask={true}
              extraClass="intro"
              ref={ sectionsRes.intro.id }
              id={ sectionsRes.intro.id }
              img="./img/c2.jpg"
          >
            <img className="logo" src="./img/logowhite.png"/>
          </Section>
        </div>
        <Footer ref="footer"/>
      </div>
    );
  }
}
