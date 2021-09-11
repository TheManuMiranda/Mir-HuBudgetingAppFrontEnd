

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginBtn from '../Commons/Button/Button';
import InputText from '../Commons/InputText/InputText';
import { FormGroup,Form } from 'reactstrap';
import { useState } from 'react';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <div className="widget-body">
          <Form>
            <FormGroup>
              <InputText custpholder="Enter email or username"/>
              <br/>
              <InputText custpholder="Enter your passw0rd" custType="password"/>
              <br/>
              <LoginBtn title="Iniciar Sesion" custStyle="secondary" />
            </FormGroup>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default App;
