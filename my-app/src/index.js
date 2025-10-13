import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import CardComponent from './CardComponent';
import Header from './Header';
// import Home from './Home';
import "./css/Sample.css";
// import Reacticons from './Reacticons';
// import Basic_1 from './React design library/Basic_1';
// import Basic_3 from './React design library/React bootstrap/Basic_3';
// import Basic_2 from './React design library/React bootstrap/Basic_2';
import App from './muireact/App';
import CustomizedRating from './muireact/MuirecatComponent';
import SwitchLabels from './muireact/Switch';

import QrComponents from './antdesign/QrComponents';
import ColorPick from './antdesign/ColorPicker';
import DatePick from './antdesign/DatePicker';
import UploadComponents from './antdesign/Upload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     {/* <Header />
     <App />
    <CardComponent /> */}
    {/* <Home />
    <Reacticons /> */}
    {/* <Basic_1 />
    <Basic_3 />
    <Basic_2 /> */}
    <App />
    <CustomizedRating />
    <SwitchLabels />
    <DatePick />
    <ColorPick />
    <QrComponents />
    <UploadComponents />

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
