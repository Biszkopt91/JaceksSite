/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';

const styles = {
  footer: {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white'
  }
};

interface IFooterProps {};

interface IFooterState {};

export class Footer extends React.Component<IFooterProps, IFooterState> {
  render() {
    return (
      <footer className="footer" style={styles.footer}>
        Strona w przebudowie. Jacek Hachulski Pracowania Stolarska kontakt +48 697 328 697
      </footer>
    );
  }
}
