import React, { Component } from 'react';
// 按需加载
import Uicomp from './Uicomp'
// fetch请求
import Fetch from './Fetch';
// 跨域请求
import Proxy from './Proxy';
class App extends Component{
  render() {
    return (
      <div className="App">
        <Uicomp />
        <Fetch />
        <Proxy/>
      </div>
    );
  }
}

export default App;
