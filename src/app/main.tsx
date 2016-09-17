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
        <Header onMenuItemClick={ this.handleNavItemClick }/>
        <div className="content">
          <Section
              extraClass="intro"
              ref={ sectionsRes.intro.id }
              id={ sectionsRes.intro.id }
              img="../img/c2.jpg"
          >
            <div></div>
          </Section>

          <Section
              id={ sectionsRes.services.id }
              icon={ sectionsRes.services.icon }
              ref={ sectionsRes.services.id }
              title={ sectionsRes.services.title }
          >
            <div></div>

          </Section>
          <Section
              id={ sectionsRes.realizations.id }
              ref={ sectionsRes.realizations.id }
              title={ sectionsRes.realizations.title }
          >
            <div></div>

          </Section>
          <Section
              id={ sectionsRes.contact.id }
              ref={ sectionsRes.contact.id }
              title={ sectionsRes.contact.title }
          >
            <div></div>

          </Section>
        </div>
        <Footer ref="footer"/>
      </div>
    );
  }
}
