import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import {Button, Form} from 'antd';
import Form2 from './Form';
import Table from './Table';




function App() {
  return (
    <div className="App">
      <MyHeader/>
      <header className="App-header">
      <h2>hdi</h2>
      <Form2/>
      <Table/>

      </header>
      <MyFooter/>
    </div>

  );
}

export default App;
