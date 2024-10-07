import React, { useState } from 'react';
import Button from './components/input/button/button';
import Input from './components/input/input/input';
import TextArea from './components/input/textArea/textArea';
import RadioButton from './components/input/radio/radio';
import Checkbox from './components/input/checkbox/checkbox';
import Select from './components/input/select/select';
import './App.css';

function App() {
  // Inizializza lo stato come un oggetto con una chiave per ogni input/textarea
  const [inputValues, setInputValues] = useState({
    sapRequired: '',
    sapNotRequired: '',
    sapDisabled: '',
    sapReadOnly: '',
    sapError: '',
    sapSuccess: '',
    sapWarning: '',
    sapInformation: '',
    materialRequired: '',
    materialNotRequired: '',
    materialDisabled: '',
    materialReadOnly: '',
    materialError: '',
    materialSuccess: '',
    materialWarning: '',
    materialInformation: '',
    sapTextAreaRequired: '',
    sapTextAreaNotRequired: '',
    sapTextAreaDisabled: '',
    sapTextAreaReadOnly: '',
    sapTextAreaError: '',
    sapTextAreaSuccess: '',
    sapTextAreaWarning: '',
    sapTextAreaInformation: '',
    materialTextAreaRequired: '',
    materialTextAreaNotRequired: '',
    materialTextAreaDisabled: '',
    materialTextAreaReadOnly: '',
    materialTextAreaError: '',
    materialTextAreaSuccess: '',
    materialTextAreaWarning: '',
    materialTextAreaInformation: '',
  });

  // Gestione del cambio di valore degli input
  const handleInputChange = (e, key) => {
    setInputValues({
      ...inputValues,
      [key]: e.target.value,
    });
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  // Funzione che gestisce il cambiamento dell'opzione selezionata
  const handleSelectChange = (e) => {
    console.log('Selected value:', e.target.value);
  };


  return (
    <div style={{ padding: '20px' }}>
      <h1>Pulsanti in Stile SAP</h1>
      <h4>Normal</h4>
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

      <h1>Pulsanti in Stile Material UI</h1>
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

      <h1>Input field in Stile SAP</h1>
      <div className='input-container'>
        <Input
          label="Required"
          value={inputValues.sapRequired}
          onChange={(e) => handleInputChange(e, 'sapRequired')}
          placeholder="Enter text here.."
          required={true}
          theme="sap"
          variant="default"
        />
        <Input
          label="Not required"
          value={inputValues.sapNotRequired}
          onChange={(e) => handleInputChange(e, 'sapNotRequired')}
          placeholder="Enter text here.."
          required={false}
          theme="sap"
          variant="default"
        />
        <Input
          label="Disabled"
          value={inputValues.sapDisabled}
          onChange={(e) => handleInputChange(e, 'sapDisabled')}
          placeholder="Enter text here.."
          required={false}
          disabled={true}
          theme="sap"
          variant="default"
        />
        <Input
          label="Read Only"
          value={inputValues.sapReadOnly}
          onChange={(e) => handleInputChange(e, 'sapReadOnly')}
          placeholder="Enter text here.."
          required={false}
          readOnly={true}
          theme="sap"
          variant="default"
        />
        <Input
          label="Error"
          value={inputValues.sapError}
          onChange={(e) => handleInputChange(e, 'sapError')}
          placeholder="Enter text here.."
          theme="sap"
          variant="error"
        />
        <Input
          label="Success"
          value={inputValues.sapSuccess}
          onChange={(e) => handleInputChange(e, 'sapSuccess')}
          placeholder="Enter text here.."
          theme="sap"
          variant="success"
        />
        <Input
          label="Warning"
          value={inputValues.sapWarning}
          onChange={(e) => handleInputChange(e, 'sapWarning')}
          placeholder="Enter text here.."
          theme="sap"
          variant="warning"
        />
        <Input
          label="Information"
          value={inputValues.sapInformation}
          onChange={(e) => handleInputChange(e, 'sapInformation')}
          placeholder="Enter text here.."
          theme="sap"
          variant="information"
        />
      </div>

      <h1>Input field in Material UI</h1>
      <div className='input-container'>
        <Input
          label="Required"
          value={inputValues.materialRequired}
          onChange={(e) => handleInputChange(e, 'materialRequired')}
          placeholder="Enter text here.."
          required={true}
          theme="material"
          variant="default"
        />
        <Input
          label="Not required"
          value={inputValues.materialNotRequired}
          onChange={(e) => handleInputChange(e, 'materialNotRequired')}
          placeholder="Enter text here.."
          required={false}
          theme="material"
          variant="default"
        />
        <Input
          label="Disabled"
          value={inputValues.materialDisabled}
          onChange={(e) => handleInputChange(e, 'materialDisabled')}
          placeholder="Enter text here.."
          required={false}
          disabled={true}
          theme="material"
          variant="default"
        />
        <Input
          label="Read Only"
          value={inputValues.materialReadOnly}
          onChange={(e) => handleInputChange(e, 'materialReadOnly')}
          placeholder="Enter text here.."
          required={false}
          readOnly={true}
          theme="material"
          variant="default"
        />
        <Input
          label="Error"
          value={inputValues.materialError}
          onChange={(e) => handleInputChange(e, 'materialError')}
          placeholder="Enter text here.."
          theme="material"
          variant="error"
        />
        <Input
          label="Success"
          value={inputValues.materialSuccess}
          onChange={(e) => handleInputChange(e, 'materialSuccess')}
          placeholder="Enter text here.."
          theme="material"
          variant="success"
        />
        <Input
          label="Warning"
          value={inputValues.materialWarning}
          onChange={(e) => handleInputChange(e, 'materialWarning')}
          placeholder="Enter text here.."
          theme="material"
          variant="warning"
        />
        <Input
          label="Information"
          value={inputValues.materialInformation}
          onChange={(e) => handleInputChange(e, 'materialInformation')}
          placeholder="Enter text here.."
          theme="material"
          variant="information"
        />
      </div>

        <h1>Text Area in Stile Sap UI</h1>
        <div className='textarea-container'>
        <TextArea
          label="Required"
          value={inputValues.sapTextAreaRequired}
          onChange={(e) => handleInputChange(e, 'sapTextAreaRequired')}
          placeholder="Enter text here.."
          required={true}
          theme="sap"
          variant="default"
        />
        <TextArea
          label="Disabled"
          value={inputValues.sapTextAreaDisabled}
          onChange={(e) => handleInputChange(e, 'sapTextAreaDisabled')}
          placeholder="Enter text here.."
          required={false}
          disabled={true}
          theme="sap"
          variant="default"
        />
        <TextArea
          label="Read Only"
          value={inputValues.sapTextAreaReadOnly}
          onChange={(e) => handleInputChange(e, 'sapTextAreaReadOnly')}
          placeholder="Enter text here.."
          required={false}
          readOnly={true}
          theme="sap"
          variant="default"
        />
        </div>
        <br/>
        <div className='textarea-container-second-row '>
        <TextArea
          label="Error"
          value={inputValues.sapTextAreaError}
          onChange={(e) => handleInputChange(e, 'sapTextAreaError')}
          placeholder="Enter text here.."
          theme="sap"
          variant="error"
        />
        <TextArea
          label="Success"
          value={inputValues.sapTextAreaSuccess}
          onChange={(e) => handleInputChange(e, 'sapTextAreaSuccess')}
          placeholder="Enter text here.."
          theme="sap"
          variant="success"
        />
        <TextArea
          label="Warning"
          value={inputValues.sapTextAreaWarning}
          onChange={(e) => handleInputChange(e, 'sapTextAreaWarning')}
          placeholder="Enter text here.."
          theme="sap"
          variant="warning"
        />
        <TextArea
          label="Information"
          value={inputValues.sapTextAreaInformation}
          onChange={(e) => handleInputChange(e, 'sapTextAreaInformation')}
          placeholder="Enter text here.."
          theme="sap"
          variant="information"
        />
        </div>

        <h1>Text Area in Stile Material UI</h1>
        <div className='textarea-container'>
        <TextArea
          label="Required"
          value={inputValues.materialTextAreaRequired}
          onChange={(e) => handleInputChange(e, 'materialTextAreaRequired')}
          placeholder="Enter text here.."
          required={true}
          theme="material"
          variant="default"
        />
        <TextArea
          label="Disabled"
          value={inputValues.materialTextAreaDisabled}
          onChange={(e) => handleInputChange(e, 'materialTextAreaDisabled')}
          placeholder="Enter text here.."
          required={false}
          disabled={true}
          theme="material"
          variant="default"
        />
        <TextArea
          label="Read Only"
          value={inputValues.materialTextAreaReadOnly}
          onChange={(e) => handleInputChange(e, 'materialTextAreaReadOnly')}
          placeholder="Enter text here.."
          required={false}
          readOnly={true}
          theme="material"
          variant="default"
        />
        </div>
        <br/>
        <div className="textarea-container-second-row ">
        <TextArea
          label="Error"
          value={inputValues.materialTextAreaError}
          onChange={(e) => handleInputChange(e, 'materialTextAreaError')}
          placeholder="Enter text here.."
          required={false}
          theme="material"
          variant="error"
        />
        <TextArea
          label="Success"
          value={inputValues.materialTextAreaSuccess}
          onChange={(e) => handleInputChange(e, 'materialTextAreaSuccess')}
          placeholder="Enter text here.."
          required={false}
          theme="material"
          variant="success"
        />
        <TextArea
          label="Warning"
          value={inputValues.materialTextAreaWarning}
          onChange={(e) => handleInputChange(e, 'materialTextAreaWarning')}
          placeholder="Enter text here.."
          required={false}
          theme="material"
          variant="warning"
        />
        <TextArea
          label="Information"
          value={inputValues.materialTextAreaInformation}
          onChange={(e) => handleInputChange(e, 'materialTextAreaInformation')}
          placeholder="Enter text here.."
          required={false}
          theme="material"
          variant="information"
        />
        </div>

        <br/> 
        <hr/> 

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
