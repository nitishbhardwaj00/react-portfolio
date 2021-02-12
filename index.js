import React, { usestate } from 'react';
import { render } from 'react-dom';
import Form from './Form'
import './style.css';

const App = () => {


 
    return (
      <div>
     <Form />
        
      </div>
    );
  
}

render(<App />, document.getElementById('root'));
