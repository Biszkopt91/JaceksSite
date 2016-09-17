/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './header';
import {Title} from './title';
import {Footer} from './footer';

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
    console.log(ReactDOM.findDOMNode(this.refs[scrollToElement]).getBoundingClientRect().top);
    const scrollTop = ReactDOM.findDOMNode(this.refs[scrollToElement]).getBoundingClientRect().top;
    window.scrollTo(0, scrollTop)
  };

  render() {
    return (
      <div style={styles.container}>
        <Header onMenuItemClick={ this.handleNavItemClick }/>
        <main style={styles.main}>
          <Title/>

        </main>
        <Footer ref="footer"/>
      </div>
    );
  }
}
