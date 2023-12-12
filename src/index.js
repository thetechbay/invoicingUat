import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from  "./components/loginLayout/Login"
import Dashboard from "./components/basic/Dashboard"
import SalesDashboard from "./components/basic/sales/SalesDashboard"
import Logout from "../src/auth/logout"
// import SaleInvoice from './components/basic/sales/SaleInvoice';
import ClientsDashboard from './components/basic/clients/ClientsDashboard';
import Check from './components/Check';
import InvoiceForm from '../src/components/basic/invoice/InvoiceForm';
import InvoiceTest from "../src/components/basic/invoice/InvoiceTest";
import InvoiceShow from './components/basic/invoice/InvoiceShow';
// import Logout from  "./components/loginLayout/Logout"
const root = ReactDOM.createRoot(document.getElementById('root'));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


ReactDOM.render(
  <Router>
  <Routes>
      <Route  path="/" element={<Check />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/dashboard" element={<Dashboard />} />
      <Route  path="/logout" element = {<Logout/>} />
      <Route path="/dashboard/sales" element={<SalesDashboard />} />
      {/* <Route path="/dashboard/sales/invoice" element={<SaleInvoice />} /> */}
      <Route path="/dashboard/clients" element={<ClientsDashboard />} />
      <Route path='dashboard/sales/createInvoice' element={<InvoiceTest />} />
      <Route path='/invoice/:id' element={<InvoiceShow />} />
      {/* <Route component={Error} /> */}
  </Routes>
</Router>
,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
