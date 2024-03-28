import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Btn from './26-03-24/function component/btn';
import List from './26-03-24/list';
import Table from './26-03-24/function component/Table';
import Form from './26-03-24/function component/Form';
import Img from './26-03-24/Class components/Img';
import List1 from './26-03-24/Class components/List1';
import Table1 from './26-03-24/Class components/Table1';
import Form1 from './26-03-24/Class components/form1';
import Btn1 from './26-03-24/Class components/Btn1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Btn />
    <List />
    <Table />
    < Form />
    < Img />
    <Btn1 />
    <List1 />
    <Table1 />
    <Form1 />
  </React.StrictMode>
);

