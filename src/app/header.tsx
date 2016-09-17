/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import { Nav } from './nav/Nav';
const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

interface IHeaderProps {
  onMenuItemClick: (scrollToElement) => void;
};

interface IHeaderState {};

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    return (
      <header style={styles.header}>
        <Nav onMenuItemClick={ this.props.onMenuItemClick }></Nav>
      </header>
    );
  }
}
