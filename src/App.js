import Button from './components/input/button/button';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px' }}>
    <h1>Componenti in Stile SAPUI5</h1>
    <h4>Button normal</h4>
    {/* Button Component */}
    <div style={{display:'flex', gap:'20px'}} >
    <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    <Button label="Click Me" onClick={() => alert('Button clicked!')} variant="secondary"/>
    <Button label="Click Me" onClick={() => alert('Button clicked!')} variant="tertiary"/>  
    <Button label="Click Me" variant="success"/>  
    <Button label="Click Me" variant="danger"/>  
    <Button label="Click Me" variant="warning"/>  <br></br>
  </div>
  <h4>Button disabled</h4>
  <div style={{display:'flex', gap:'20px'}} >
    <Button label="Click Me" onClick={() => alert('Button clicked!')} disabled='true'/>
    <Button label="Click Me" onClick={() => alert('Button clicked!')} variant="secondary" disabled='true'/>
    <Button label="Click Me" onClick={() => alert('Button clicked!')} variant="tertiary" disabled='true'/>  
    <Button label="Click Me" variant="success" disabled='true'/>  
    <Button label="Click Me" variant="danger" disabled='true'/>  
    <Button label="Click Me" variant="warning" disabled='true'/>  
  </div> 
  <h4>Button focused</h4>
    {/* Button Component */}
    <div style={{display:'flex', gap:'20px'}} >
    <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    <Button label="Click Me" onClick={() => alert('Button clicked!')} variant="secondary"/>
    <Button label="Click Me" onClick={() => alert('Button clicked!')} variant="tertiary"/>  
    <Button label="Click Me" variant="success"/>  
    <Button label="Click Me" variant="danger"/>  
    <Button label="Click Me" variant="warning"/>  <br></br>
  </div>
    
    <h4>Input</h4>  
      

    </div>
  );
}

export default App;
