import React, { Component } from 'react';
// 按需加载
import Uicomp from './Uicomp'
// fetch请求
import Fetch from './Fetch';
class App extends Component{
  render() {
    return (
      <div className="App">
        <Uicomp />
        <Fetch/>
      </div>
    );
  }
}

export default App;
