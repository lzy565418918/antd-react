import React from 'react';
// -----------按需加载----------
import Button from 'antd/es/button'; // 加载 JS
import 'antd/es/button/style/css'; // 加载 CSS
import Steps from 'antd/es/steps'; // 加载 JS
import 'antd/es/steps/style/css'; // 加载 CSS
// ------------------------------
// import { Button, Steps } from 'antd';
const { Step } = Steps

function App() {
  
  return (
    <div className="App">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed" danger>Dashed</Button>
      <Button type="link">Link</Button>
      <Steps current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
    </div>
  );
}

export default App;
