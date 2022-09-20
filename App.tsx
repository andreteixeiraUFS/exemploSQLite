
import React from 'react';
import Home from './src/home/'
import DatabaseInit from './src/database/database-init';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    new DatabaseInit
    console.log("initialize database")
  }


  render() {
    return (
      <Home />
    );
  }
}