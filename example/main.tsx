import React from 'react'
import DOM from 'react-dom';
import {PayDialog, CFButton} from '../components';
import './main.less';

const App = () => {
  return (
    <div className="demo">
      <div className="item">
        <PayDialog />
      </div>
      <div className="item">
        <CFButton borderColor="red" />
      </div>
    </div>
  )
}

DOM.render(<App/> , document.getElementById('root'));