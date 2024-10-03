import Button from './components/input/button/button';
import Input from './components/input/input/input';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Pulsanti in Stile SAPUI5</h1>
      <h4>Normal</h4>
      {/* Button Component */}
      <div style={{display:'flex', gap:'20px'}} >
      <Button label="Primary" onClick={() => alert('Button clicked!')} />
      <Button label="Secondary" onClick={() => alert('Button clicked!')} variant="secondary"/>
      <Button label="Tertiary" onClick={() => alert('Button clicked!')} variant="tertiary"/>  
      <Button label="Success" variant="success"/>  
      <Button label="error" variant="error"/>  
      <Button label="Warning" variant="warning"/>  <br></br>
    </div>
    <h4>Disabled</h4>
    <div style={{display:'flex', gap:'20px'}} >
      <Button label="Primary" onClick={() => alert('Button clicked!')} disabled='true'/>
      <Button label="Secondary" onClick={() => alert('Button clicked!')} variant="secondary" disabled='true'/>
      <Button label="Tertiary" onClick={() => alert('Button clicked!')} variant="tertiary" disabled='true'/>  
      <Button label="Success" variant="success" disabled='true'/>  
      <Button label="error" variant="error" disabled='true'/>  
      <Button label="Warning" variant="warning" disabled='true'/>  
    </div> 
    {/* <h4>Focused</h4> */}
      {/* Button Component */}
      {/* <div style={{display:'flex', gap:'20px'}} >
      <Button label="Primary" onClick={() => alert('Button clicked!')} />
      <Button label="Secondary" onClick={() => alert('Button clicked!')} variant="secondary"/>
      <Button label="Tertiary" onClick={() => alert('Button clicked!')} variant="tertiary"/>  
      <Button label="Success" variant="success"/>  
      <Button label="error" variant="error"/>  
      <Button label="Warning" variant="warning"/>  <br></br>
    </div> */}
    
    <h1>Pulsanti in Stile MaterialUi</h1>
    <h4>Normal</h4>
    
      <div style={{display:'flex', gap:'20px'}} >
        <Button label="Primary" theme='material' /> 
        <Button label="Secondary" variant="secondary" theme='material'/>
        <Button label="Tertiary" variant="tertiary" theme='material'/>
        <Button label="Success" variant="success" theme='material'/>
        <Button label="error" variant="error" theme='material'/>
        <Button label="Warning" variant="warning" theme='material'/>
      </div> 
      <h4>Disabled</h4>
     
      <div style={{display:'flex', gap:'20px'}} >
        <Button label="Primary" theme='material' disabled='true' /> 
        <Button label="Secondary" variant="secondary" disabled='true' theme='material'/>
        <Button label="Tertiary" variant="tertiary" disabled='true' theme='material'/>
        <Button label="Success" variant="success" disabled='true' theme='material'/>
        <Button label="error" variant="error" disabled='true' theme='material'/>
        <Button label="Warning" variant="warning" disabled='true' theme='material'/>
      </div> 
      <br/> 
      <hr/>
      <h1>Input field in Stile SAPUI5</h1>
      <h4>Normal</h4>
      <Input 
        label="Required" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter your name" 
        required={true} 
        theme="sap"
        variant="default"
      />
      <Input 
        label="Not required" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter your email" 
        required={false} 
        theme="sap"
        variant="default"
      />
       <Input 
        label="Disabled" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter your email" 
        required={false}
        disabled={true}
        theme="sap"
        variant="default"
      />
       <Input 
        label="Read Only" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter your email" 
        required={false} 
        disabled={true}
        readOnly={true}
        theme="sap"
        variant="default"
      />
       <Input 
        label="Error" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter your email" 
        required={false} 
        theme="sap"
        variant="error"
      />
       <Input 
        label="Success" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter your email" 
        required={false} 
        theme="sap"
        variant="success"
      />
      <Input 
        label="Warning" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter your email" 
        required={false} 
        theme="sap"
        variant="warning"
      />
      <Input 
        label="Information" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter your email" 
        required={false}
        theme="sap"
        variant="information"
      />
    </div>
    
  );
}

export default App;
