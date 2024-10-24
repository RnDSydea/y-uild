import React, { useEffect, useState } from 'react';
import Button from './components/input/button/button';
import Input from './components/input/input/input';
import TextArea from './components/input/textArea/textArea';
import RadioButton from './components/input/radio/radio';
import Checkbox from './components/input/checkbox/checkbox';
import Select from './components/input/select/select';
import Toast from './components/input/toast/toast';
import Card from './components/input/card/card';
import YuildHeader from './components/input/yUildHeader/yUildHeader';
import YuildBody from './components/input/yUildBody/yUildBody';
import YuildFooter from './components/input/yUildFooter/yUildFooter';
import Alert from './components/input/alert/alert';
import Table from './components/input/table/table';
import './App.css'
import Dialog from './components/input/dialog/dialog';
import Drawer from './components/input/drawer/drawer';
import Home from './assets/house-solid.svg'
import User from './assets/user-solid.svg'
import Comment from './assets/comment-solid.svg'
import Info from './assets/circle-info-solid.svg'
import Gear from './assets/gear-solid.svg'
import Logout from './assets/right-from-bracket-solid.svg'
import Delete from './assets/trash-solid.svg'
import ComponentsData from './assets/data/components.json'


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

  
  const handleSelectChange = (e) => {
    console.log('Selected value:', e.target.value);
  };

  const [showToastSap, setShowToastSap] = useState(false);
  const [showToast, setShowToast] = useState(false);


  // Funzione per mostrare il toast
  const handleShowToastSap = () => {
    setShowToastSap(true);
    
    setTimeout(() => {
      setShowToastSap(false);
    }, 3000); 
  }
  
  const handleShowToast = () => {
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000); 
  }

  const [showAlertSap, setShowAlertSap] = useState(false);
  const handleShowAlertSap = () => {
    setShowAlertSap(true);
  }

  const handleHideAlertSap = () => {
    setShowAlertSap(false);
  }

  const [showAlertMaterial, setShowAlertMaterial] = useState(false);

  const handleShowAlertMaterial = () => {
    setShowAlertMaterial(true);
  }

  const handleAlertClose = (actionType) => {
    setShowAlertMaterial(false);
    // console.log(`Azione di chiusura: ${actionType}`);
    
    // if (actionType === 'confirm') {
    //  console.log("Hai cliccato il pulsante conferma");
    // } else if (actionType === 'cancel') {
    //   console.log("Hai cliccato il pulsante cancella");

    // } else if (actionType === 'click-outside') {
    //   console.log("Hai cliccato fuori dal div");
    // }
  };

  const [showDialogSap, setShowDialogSap] = useState(false);
  const handleShowDialogSap = () => {
    setShowDialogSap(true);
  }

  const handleHideDialogSap = () => {
    setShowDialogSap(false);
  }

  const [showDialogMaterial, setShowDialogMaterial] = useState(false);
  const handleShowDialogMaterial = () => {
    setShowDialogMaterial(true);
  }

  const handleHideDialogMaterial = () => {
    setShowDialogMaterial(false);
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Country', accessor: 'country' },
  ];
  
  const data = [
    { id: 1, name: 'Alice', age: 28, country: 'USA' },
    { id: 2, name: 'Bob', age: 34, country: 'UK' },
    { id: 3, name: 'Charlie', age: 25, country: 'Canada' },
    { id: 4, name: 'David', age: 30, country: 'Australia' },
  ];

  const [numColumns, setNumColumns] = useState(12);
  const [numRows, setNumRows] = useState(36);
  const [grid, setGrid] = useState([]);
  const [highlightsCell, setHighlightsCell] = useState([]);
  const [draggedComponent, setDraggedComponent] = useState(null);
  const [patchObj, setPatchObj] = useState([]);
  const [selectedPatch, setSelectedPatch] = useState(null); 

  const initGrid = () => {
    const totalCells = numColumns * numRows;
    const newGrid = [];
    let index = 0;
    for (let i = 0; i < numRows; i++) {
      newGrid.push([]);
      for (let j = 0; j < numColumns; j++) {
        index++;
        newGrid[i].push({
          id: 'yuild-'+index,  
          lunghezza: 1,
          componente: null,
          componentId: null,  
        });
      }
    }
    setGrid(newGrid);
  };

  useEffect(() => {
    initGrid();
  }, [numColumns, numRows]);

  const getFormattedTimestamp = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year}-${hours}:${minutes}:${seconds}`;
  };

  const handleDragStart = (component) => {
    const uniqueId = `comp-${getFormattedTimestamp()}`;
    setDraggedComponent({ ...component, componentId: uniqueId });  // Usa componentId
  };

  const handleDrop = (index_row, index_col) => {
    if (!draggedComponent) {
      return;
    }
  
    const { lunghezza: newLunghezza, altezza: newAltezza } = draggedComponent;
    const cellsToFill = calculateCellsToFill(index_row, index_col, newLunghezza, newAltezza);
  
    // Verifica se qualcuna delle celle è occupata
    const isOccupied = cellsToFill.some(
      (cell) => grid[cell.row] && grid[cell.row][cell.columns] && grid[cell.row][cell.columns].componente
    );
  
    if (isOccupied) {
      setHighlightsCell([]);
      return;
    }
  
    // rilascio del componente
    const newGrid = [...grid];
    cellsToFill.forEach(({ row, columns }) => {
      newGrid[row][columns] = {
        ...newGrid[row][columns],
        lunghezza: newLunghezza,
        componente: draggedComponent.nome,
        componentId: draggedComponent.componentId,
      };
    });

  const firstCellId = newGrid[cellsToFill[0].row][cellsToFill[0].columns].id;
  const lastCellId = newGrid[cellsToFill[cellsToFill.length - 1].row][cellsToFill[cellsToFill.length - 1].columns].id;

  const topCell = document.getElementById(firstCellId);
  const bottomCell = document.getElementById(lastCellId);

  const top = topCell.offsetTop;  
  const left = topCell.offsetLeft;
  const bottom = bottomCell.offsetTop + bottomCell.offsetHeight;
  const right = bottomCell.offsetLeft + bottomCell.offsetWidth; 

  const width = right - left;
  const height = bottom - top;

  const overlay_component = {
    id: draggedComponent.componentId,
    component:draggedComponent.component,
    componentId: draggedComponent.componentId,
    top,
    left,
    width,
    height,
  };

  const newPatchObj = [...patchObj];
  newPatchObj.push(overlay_component);

  setGrid(newGrid);
  setDraggedComponent(null);
  setHighlightsCell([]);
  setPatchObj(newPatchObj);
  };

  const handleDragOver = (index_row, index_col) => {
    if (draggedComponent) {
      const { lunghezza, altezza } = draggedComponent;
      const cellHighlightBorder = calculateCellsToFill(index_row, index_col, lunghezza, altezza);
      
      const isOccupied = cellHighlightBorder.some(({ row, columns }) => {
        return grid[row][columns].componente !== null;
      });
      
      // Imposta la classe per evidenziare celle libere o occupate
      if (isOccupied) {
        setHighlightsCell(cellHighlightBorder.map(({ row, columns }) => ({
          row,
          columns,
          occupied: true
        })));
      } else {
        setHighlightsCell(cellHighlightBorder.map(({ row, columns }) => ({
          row,
          columns,
          occupied: false
        })));
      }
    } else {
      setHighlightsCell([]);
    }
  };

  const handleDragLeave = () => {
    setHighlightsCell([]);
  };

  const calculateCellsToFill = (index_row, index_col, lunghezza, altezza) => {
    const cells = [];
    for (let i = 0; i < altezza; i++) {
      for (let j = 0; j < lunghezza; j++) {
        const cellIndex_row = index_row + i;
        const cellIndex_col = index_col + j;
        cells.push({ row: cellIndex_row, columns: cellIndex_col });
      }
    }
    return cells;
  };

  const handlePatchClick = (index) => {
    if (selectedPatch === index) {
      setSelectedPatch(null);
    } else {
      setSelectedPatch(index);
      document.addEventListener('click', handleOutsideClick);
    }
  };
  
  const handleOutsideClick = (event) => {
    const overlayElement = document.querySelector('.component-overlay'); 
    if (overlayElement && !overlayElement.contains(event.target)) {
      setSelectedPatch(null); 
      document.removeEventListener('click', handleOutsideClick); 
    }
  };
  
  useEffect(() => {
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleDeletePatch = (index) => {
    const patchToDelete = patchObj[index];
    const { top, left, width, height } = patchToDelete;
    const cellsToFree = [];
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const cell = document.getElementById(grid[row][col].id);
        if (
          cell.offsetTop >= top &&
          cell.offsetTop < top + height &&
          cell.offsetLeft >= left &&
          cell.offsetLeft < left + width
        ) {
          cellsToFree.push({ row, col });
        }
      }
    }
  
    const updatedGrid = [...grid];
    cellsToFree.forEach(({ row, col }) => {
      updatedGrid[row][col] = {
        ...updatedGrid[row][col],
        lunghezza: 1,
        componente: null,
        componentId: null,
      };
    });
  
  
    const updatedPatchObj = patchObj.filter((_, patchIndex) => patchIndex !== index);
    setGrid(updatedGrid);
    setPatchObj(updatedPatchObj);
    setSelectedPatch(null);
  };
  


  const buttonComponent = {
    nome: 'Button',
    lunghezza: 2,
    altezza: 1,
    render: () => <Button label="Primary" onClick={() => alert('Button clicked!')} />,
  };

  return (
    <div className='main-container'>
      <div className='components-container'>
        <h3 className='title'>Componenti</h3>
        <div
          className="tile"
          draggable
          onDragStart={() => handleDragStart(buttonComponent)}
        >
          <p>{buttonComponent.nome}</p>
        </div>
        {ComponentsData.components.map((component, index) => (
          <div
            key={index}
            className="tile"
            draggable
            onDragStart={() => handleDragStart(component)}
          >
            <p>{component.nome}</p>
          </div>
        ))}
      </div>

      <div className="drag-and-drop-container">
        <div className='btn-download-container'>
            <Button label="Scarica il codice" />
        </div>
        <div className='yuild-container'>
          {grid.map((row, index_row) => (
            <div className='yuild-row'>
              {row.map((cell, index_cell) => (
                <div
                  // className={`grid-cell ${highlightsCell.find((e)=>e.row === index_row && e.columns===index_cell) ? 'highlight' : ''} yuild-col-${cell.lunghezza}`}
                  className={`grid-cell ${
                    highlightsCell.find((e) => e.row === index_row && e.columns === index_cell) 
                      ? highlightsCell.find((e) => e.row === index_row && e.columns === index_cell).occupied 
                        ? 'occupied' 
                        : 'highlight' 
                      : ''
                  } yuild-col-1`}
                  key={index_cell}
                  id={cell.id}
                  onDragOver={(e) => {
                    e.preventDefault();
                    handleDragOver(index_row, index_cell);
                  }}
                  onDragLeave={handleDragLeave}
                  onDrop={() => handleDrop(index_row, index_cell)}
                
                >
                   {cell.componente && cell.componentId ? `${cell.id} + ${cell.componentId}` : cell.id} 
                </div>
                ))}
            </div>
          ))}
          {patchObj.map((overlay, index) => (
            <div
              key={index}
              className="overlay-container"  
              style={{
                position:'absolute',
                top: overlay.top,
                left: overlay.left,
              }}
            >
              <div
                className="component-overlay"
                style={{
                  position: 'absolute',
                  right: overlay.right,
                  bottom: overlay.bottom,
                  width: overlay.width,
                  height: overlay.height,
                  boxShadow: selectedPatch === index ? 'inset 0 0 0 3px red' : '',
                  transition: 'box-shadow 0.3s ease'
                }}
                onClick={() => handlePatchClick(index)}  
              >
                
              </div>

            
              {selectedPatch === index && (
                <div className="delete-icon-container" style={{ left: `calc(${overlay.width}px + 10px)`,}}>
                  <img src={Delete} alt="Delete Icon"className="delete-icon" onClick={() => handleDeletePatch(index)}  />
                </div>
              )}
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
}


      // <div style={{ padding: '20px' }}>
      //   <h1>Pulsanti in Stile SAP</h1>
      //   <h4>Normal</h4>
      //   <div style={{display:'flex', gap:'20px'}} >
      //     <Button label="Primary" onClick={() => alert('Button clicked!')} />
      //     <Button label="Secondary" onClick={() => alert('Button clicked!')} variant="secondary"/>
      //     <Button label="Tertiary" onClick={() => alert('Button clicked!')} variant="tertiary"/>  
      //     <Button label="Success" variant="success"/>  
      //     <Button label="error" variant="error"/>  
      //     <Button label="Warning" variant="warning"/>  <br></br>
      //   </div>
      //   <h4>Disabled</h4>
      //   <div style={{display:'flex', gap:'20px'}} >
      //     <Button label="Primary" onClick={() => alert('Button clicked!')} disabled='true'/>
      //     <Button label="Secondary" onClick={() => alert('Button clicked!')} variant="secondary" disabled='true'/>
      //     <Button label="Tertiary" onClick={() => alert('Button clicked!')} variant="tertiary" disabled='true'/>  
      //     <Button label="Success" variant="success" disabled='true'/>  
      //     <Button label="error" variant="error" disabled='true'/>  
      //     <Button label="Warning" variant="warning" disabled='true'/>  
      //   </div> 

      //   <h1>Pulsanti in Stile Material UI</h1>
      //   <h4>Normal</h4>
      
      //   <div style={{display:'flex', gap:'20px'}} >
      //     <Button label="Primary" theme='material' /> 
      //     <Button label="Secondary" variant="secondary" theme='material'/>
      //     <Button label="Tertiary" variant="tertiary" theme='material'/>
      //     <Button label="Success" variant="success" theme='material'/>
      //     <Button label="error" variant="error" theme='material'/>
      //     <Button label="Warning" variant="warning" theme='material'/>
      //   </div> 
      //   <h4>Disabled</h4>
      
      //   <div style={{display:'flex', gap:'20px'}} >
      //     <Button label="Primary" theme='material' disabled='true' /> 
      //     <Button label="Secondary" variant="secondary" disabled='true' theme='material'/>
      //     <Button label="Tertiary" variant="tertiary" disabled='true' theme='material'/>
      //     <Button label="Success" variant="success" disabled='true' theme='material'/>
      //     <Button label="error" variant="error" disabled='true' theme='material'/>
      //     <Button label="Warning" variant="warning" disabled='true' theme='material'/>
      //   </div> 
      //   <br/> 
      //   <hr/>

      //   <h1>Input field in Stile SAP</h1>
      //   <div className='input-container'>
      //     <Input
      //       label="Required"
      //       value={inputValues.sapRequired}
      //       onChange={(e) => handleInputChange(e, 'sapRequired')}
      //       placeholder="Enter text here.."
      //       required={true}
      //       theme="sap"
      //       variant="default"
      //     />
      //     <Input
      //       label="Not required"
      //       value={inputValues.sapNotRequired}
      //       onChange={(e) => handleInputChange(e, 'sapNotRequired')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       theme="sap"
      //       variant="default"
      //     />
      //     <Input
      //       label="Disabled"
      //       value={inputValues.sapDisabled}
      //       onChange={(e) => handleInputChange(e, 'sapDisabled')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       disabled={true}
      //       theme="sap"
      //       variant="default"
      //     />
      //     <Input
      //       label="Read Only"
      //       value={inputValues.sapReadOnly}
      //       onChange={(e) => handleInputChange(e, 'sapReadOnly')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       readOnly={true}
      //       theme="sap"
      //       variant="default"
      //     />
      //     <Input
      //       label="Error"
      //       value={inputValues.sapError}
      //       onChange={(e) => handleInputChange(e, 'sapError')}
      //       placeholder="Enter text here.."
      //       theme="sap"
      //       variant="error"
      //     />
      //     <Input
      //       label="Success"
      //       value={inputValues.sapSuccess}
      //       onChange={(e) => handleInputChange(e, 'sapSuccess')}
      //       placeholder="Enter text here.."
      //       theme="sap"
      //       variant="success"
      //     />
      //     <Input
      //       label="Warning"
      //       value={inputValues.sapWarning}
      //       onChange={(e) => handleInputChange(e, 'sapWarning')}
      //       placeholder="Enter text here.."
      //       theme="sap"
      //       variant="warning"
      //     />
      //     <Input
      //       label="Information"
      //       value={inputValues.sapInformation}
      //       onChange={(e) => handleInputChange(e, 'sapInformation')}
      //       placeholder="Enter text here.."
      //       theme="sap"
      //       variant="information"
      //     />
      //   </div>

      //   <h1>Input field in Material UI</h1>
      //   <div className='input-container'>
      //     <Input
      //       label="Required"
      //       value={inputValues.materialRequired}
      //       onChange={(e) => handleInputChange(e, 'materialRequired')}
      //       placeholder="Enter text here.."
      //       required={true}
      //       theme="material"
      //       variant="default"
      //     />
      //     <Input
      //       label="Not required"
      //       value={inputValues.materialNotRequired}
      //       onChange={(e) => handleInputChange(e, 'materialNotRequired')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       theme="material"
      //       variant="default"
      //     />
      //     <Input
      //       label="Disabled"
      //       value={inputValues.materialDisabled}
      //       onChange={(e) => handleInputChange(e, 'materialDisabled')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       disabled={true}
      //       theme="material"
      //       variant="default"
      //     />
      //     <Input
      //       label="Read Only"
      //       value={inputValues.materialReadOnly}
      //       onChange={(e) => handleInputChange(e, 'materialReadOnly')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       readOnly={true}
      //       theme="material"
      //       variant="default"
      //     />
      //     <Input
      //       label="Error"
      //       value={inputValues.materialError}
      //       onChange={(e) => handleInputChange(e, 'materialError')}
      //       placeholder="Enter text here.."
      //       theme="material"
      //       variant="error"
      //     />
      //     <Input
      //       label="Success"
      //       value={inputValues.materialSuccess}
      //       onChange={(e) => handleInputChange(e, 'materialSuccess')}
      //       placeholder="Enter text here.."
      //       theme="material"
      //       variant="success"
      //     />
      //     <Input
      //       label="Warning"
      //       value={inputValues.materialWarning}
      //       onChange={(e) => handleInputChange(e, 'materialWarning')}
      //       placeholder="Enter text here.."
      //       theme="material"
      //       variant="warning"
      //     />
      //     <Input
      //       label="Information"
      //       value={inputValues.materialInformation}
      //       onChange={(e) => handleInputChange(e, 'materialInformation')}
      //       placeholder="Enter text here.."
      //       theme="material"
      //       variant="information"
      //     />
      //   </div>
      //   <h1>Text Area in Stile Sap UI</h1>
      //   <div className='textarea-container'>
      //     <TextArea
      //       label="Required"
      //       value={inputValues.sapTextAreaRequired}
      //       onChange={(e) => handleInputChange(e, 'sapTextAreaRequired')}
      //       placeholder="Enter text here.."
      //       required={true}
      //       theme="sap"
      //       variant="default"
      //     />
      //     <TextArea
      //       label="Disabled"
      //       value={inputValues.sapTextAreaDisabled}
      //       onChange={(e) => handleInputChange(e, 'sapTextAreaDisabled')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       disabled={true}
      //       theme="sap"
      //       variant="default"
      //     />
      //     <TextArea
      //       label="Read Only"
      //       value={inputValues.sapTextAreaReadOnly}
      //       onChange={(e) => handleInputChange(e, 'sapTextAreaReadOnly')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       readOnly={true}
      //       theme="sap"
      //       variant="default"
      //     />
      //   </div>
      //   <br/>
      //   <div className='textarea-container-second-row '>
      //     <TextArea
      //       label="Error"
      //       value={inputValues.sapTextAreaError}
      //       onChange={(e) => handleInputChange(e, 'sapTextAreaError')}
      //       placeholder="Enter text here.."
      //       theme="sap"
      //       variant="error"
      //     />
      //     <TextArea
      //       label="Success"
      //       value={inputValues.sapTextAreaSuccess}
      //       onChange={(e) => handleInputChange(e, 'sapTextAreaSuccess')}
      //       placeholder="Enter text here.."
      //       theme="sap"
      //       variant="success"
      //     />
      //     <TextArea
      //       label="Warning"
      //       value={inputValues.sapTextAreaWarning}
      //       onChange={(e) => handleInputChange(e, 'sapTextAreaWarning')}
      //       placeholder="Enter text here.."
      //       theme="sap"
      //       variant="warning"
      //     />
      //     <TextArea
      //       label="Information"
      //       value={inputValues.sapTextAreaInformation}
      //       onChange={(e) => handleInputChange(e, 'sapTextAreaInformation')}
      //       placeholder="Enter text here.."
      //       theme="sap"
      //       variant="information"
      //     />
      //   </div>

      //   <h1>Text Area in Stile Material UI</h1>
      //   <div className='textarea-container'>
      //     <TextArea
      //       label="Required"
      //       value={inputValues.materialTextAreaRequired}
      //       onChange={(e) => handleInputChange(e, 'materialTextAreaRequired')}
      //       placeholder="Enter text here.."
      //       required={true}
      //       theme="material"
      //       variant="default"
      //     />
      //     <TextArea
      //       label="Disabled"
      //       value={inputValues.materialTextAreaDisabled}
      //       onChange={(e) => handleInputChange(e, 'materialTextAreaDisabled')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       disabled={true}
      //       theme="material"
      //       variant="default"
      //     />
      //     <TextArea
      //       label="Read Only"
      //       value={inputValues.materialTextAreaReadOnly}
      //       onChange={(e) => handleInputChange(e, 'materialTextAreaReadOnly')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       readOnly={true}
      //       theme="material"
      //       variant="default"
      //     />
      //   </div>
      //   <br/>
      //   <div className="textarea-container-second-row ">
      //     <TextArea
      //       label="Error"
      //       value={inputValues.materialTextAreaError}
      //       onChange={(e) => handleInputChange(e, 'materialTextAreaError')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       theme="material"
      //       variant="error"
      //     />
      //     <TextArea
      //       label="Success"
      //       value={inputValues.materialTextAreaSuccess}
      //       onChange={(e) => handleInputChange(e, 'materialTextAreaSuccess')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       theme="material"
      //       variant="success"
      //     />
      //     <TextArea
      //       label="Warning"
      //       value={inputValues.materialTextAreaWarning}
      //       onChange={(e) => handleInputChange(e, 'materialTextAreaWarning')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       theme="material"
      //       variant="warning"
      //     />
      //     <TextArea
      //       label="Information"
      //       value={inputValues.materialTextAreaInformation}
      //       onChange={(e) => handleInputChange(e, 'materialTextAreaInformation')}
      //       placeholder="Enter text here.."
      //       required={false}
      //       theme="material"
      //       variant="information"
      //     />
      //   </div>
      //   <br/> 
      //   <hr/> 

      //   <h1>Radio Buttons in Stile SAP</h1>
      //   <div className="radio-main-container" style={{ display: 'flex', flexDirection: 'row',gap:'25px' }}>
      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //       <h4>Normal </h4>
      //       <RadioButton label="Default" theme="sap" />
      //       <RadioButton label="Checked" theme="sap" checked/>
      //       <RadioButton label="Disabled" theme="sap" disabled />
      //       <RadioButton label="Read Only" theme="sap" disabled variant='readOnly'/>
      //     </div>
      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //       <h4>Status </h4>
      //       <RadioButton label="Error" theme="sap" variant='error' />
      //       <RadioButton label="Success" theme="sap" variant='success'/>
      //       <RadioButton label="warning" theme="sap" variant='warning'/>
      //       <RadioButton label="Information" theme="sap" variant='information'/>
      //     </div>
      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //       <h4>Status Checked </h4>
      //       <RadioButton label="Error" theme="sap" checked  variant='error' />
      //       <RadioButton label="Success" theme="sap" checked variant='success'/>
      //       <RadioButton label="warning" theme="sap" checked variant='warning'/>
      //       <RadioButton label="Information" theme="sap" checked variant='information'/>
      //     </div>
      //   </div>
      //   <h1>Radio Buttons in Stile Material UI</h1>
      //   <div className="radio-main-container" style={{ display: 'flex', flexDirection: 'row',gap:'25px' }}>
      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //       <h4>Normal </h4>
      //       <RadioButton label="Default" theme="material" />
      //       <RadioButton label="Checked" theme="material" checked/>
      //       <RadioButton label="Disabled" theme="material" disabled />
      //       <RadioButton label="Read Only" theme="material" disabled variant='readOnly'/>
      //     </div>
      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //       <h4>Status </h4>
      //       <RadioButton label="Error" theme="material" variant='error' />
      //       <RadioButton label="Success" theme="material" variant='success'/>
      //       <RadioButton label="Warning" theme="material" variant='warning'/>
      //       <RadioButton label="Information" theme="material" variant='information'/>
      //     </div>

      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //       <h4>Status Checked </h4>
      //       <RadioButton label="Error" theme="material" checked  variant='error' />
      //       <RadioButton label="Success" theme="material" checked variant='success'/>
      //       <RadioButton label="Warning" theme="material" checked variant='warning'/>
      //       <RadioButton label="Information" theme="material" checked variant='information'/>
      //     </div>
      //   </div>
      //   <br/> 
      //   <hr/> 

      //   <h1>Checkbox in Stile SAP</h1>
      //   <div className="radio-main-container" style={{ display: 'flex', flexDirection: 'row',gap:'25px' }}>
      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //      <h4>Normal </h4>
      //       <Checkbox label="Default" theme="sap" />
      //       <Checkbox label="Checked" theme="sap" checked/>
      //       <Checkbox label="Disabled" theme="sap" disabled />
      //       <Checkbox label="Read Only" theme="sap" disabled variant='readOnly'/>
      //     </div>
      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //     <h4>Status </h4>
      //       <Checkbox label="Error" theme="sap" variant='error' />
      //       <Checkbox label="Success" theme="sap" variant='success'/>
      //       <Checkbox label="warning" theme="sap" variant='warning'/>
      //       <Checkbox label="Information" theme="sap" variant='information'/>
      //     </div>

      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //     <h4>Status Checked </h4>
      //       <Checkbox label="Error" theme="sap" checked  variant='error' />
      //       <Checkbox label="Success" theme="sap" checked variant='success'/>
      //       <Checkbox label="warning" theme="sap" checked variant='warning'/>
      //       <Checkbox label="Information" theme="sap" checked variant='information'/>
      //     </div>
      //   </div>
      //   <h1>Checkbox in Stile Material UI</h1>
      //   <div className="radio-main-container" style={{ display: 'flex', flexDirection: 'row',gap:'25px' }}>
      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //      <h4>Normal </h4>
      //       <Checkbox label="Default" theme="material" />
      //       <Checkbox label="Checked" theme="material" checked/>
      //       <Checkbox label="Disabled" theme="material" disabled />
      //       <Checkbox label="Read Only" theme="material" disabled variant='readOnly'/>
      //     </div>
      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //     <h4>Status </h4>
      //       <Checkbox label="Error" theme="material" variant='error' />
      //       <Checkbox label="Success" theme="material" variant='success'/>
      //       <Checkbox label="Warning" theme="material" variant='warning'/>
      //       <Checkbox label="Information" theme="material" variant='information'/>
      //     </div>

      //     <div className="radio-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      //     <h4>Status Checked </h4>
      //       <Checkbox label="Error" theme="material" checked  variant='error' />
      //       <Checkbox label="Success" theme="material" checked variant='success'/>
      //       <Checkbox label="Warning" theme="material" checked variant='warning'/>
      //       <Checkbox label="Information" theme="material" checked variant='information'/>
      //     </div>
      //   </div>
      //   <br/> 
      //   <hr/>

      //   <h1>Select in Stile SAP</h1>
      //   <div className='select-container'>
      //     <Select 
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="default" 
      //       theme="sap"
      //     />
      //     <Select 
      //       label='Label'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="default" 
      //       theme="sap"
      //     />
      //     <Select 
      //       label='Disabled'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="disabled" 
      //       theme="sap"
      //       disabled={true}
      //     />
      //     <Select 
      //       label='Read Only'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="readOnly" 
      //       theme="sap"
      //       disabled={true}
      //       readOnly={true}
      //     />
      //     <Select 
      //       label='Error'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="error" 
      //       theme="sap"
      //     />
      //     <Select 
      //       label='Success'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="success" 
      //       theme="sap"
      //     />
      //     <Select 
      //       label='Warning'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="warning" 
      //       theme="sap"
      //     />
      //     <Select 
      //       label='Information'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="information" 
      //       theme="sap"
      //     />
      //   </div>

      //   <h1>Select in Stile Material</h1>
      //   <div className='select-container'>
      //     <Select 
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="default" 
      //       theme="material"
      //     />
      //     <Select 
      //       label='Label'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="default" 
      //       theme="material"
      //     />
      //     <Select 
      //       label='Disabled'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="disabled" 
      //       theme="material"
      //       disabled={true}
      //     />
      //     <Select 
      //       label='Read Only'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="readOnly" 
      //       theme="material"
      //       disabled={true}
      //     />
      //     <Select 
      //       label='Error'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="error" 
      //       theme="material"
      //     />
      //     <Select 
      //       label='Success'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="success" 
      //       theme="material"
      //     />
      //     <Select 
      //       label='Warning'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="warning" 
      //       theme="material"
      //     />
      //     <Select 
      //       label='Information'
      //       options={options} 
      //       onChange={handleSelectChange} 
      //       variant="information" 
      //       theme="material"
      //     />
      //   </div> 
      //   <br/> 
      //   <hr/>

      //   <h1>Toast in Stile SAP</h1>
      //   <div style={{display:'flex', gap:"1.5rem"}}>
      //     <Toast 
      //       message={"Standard message short text"}
      //       variant='default'
      //       theme='sap'
      //     />

      //     <p style={{ cursor: 'pointer', color: 'blue' }} onClick={handleShowToast}>
      //       Mostra Toast
      //     </p>

      //     {showToast && (
      //       <Toast 
      //         message="Operazione completata con successo!" 
      //         variant="success" 
      //         theme="sap" 
      //         position="top-right" 
      //       />
      //     )}
      //   </div>
      //   <br/>
      //   <div className='toast-container'>
      //     <Toast 
      //       message={"Error message short text"}
      //       variant='error'
      //       theme='sap'
      //     />
      //     <Toast 
      //       message={"Warning message short text "}
      //       variant='warning'
      //       theme='sap'
      //     />
      //     <Toast 
      //       message={"Success message short text "}
      //       variant='success'
      //       theme='sap'
      //     />
      //     <Toast 
      //       message={"Information message short text "}
      //       variant='information'
      //       theme='sap'
      //     />
      //   </div>

      //   <h1>Toast in Stile Material UI</h1>
      //   <div style={{display:'flex', gap:"1.5rem"}}>
      //     <Toast 
      //       message={"Standard message short text"}
      //       variant='default'
      //       theme='material'
      //     />
      //     <p style={{ cursor: 'pointer', color: 'blue' }} onClick={handleShowToastSap}>
      //       Mostra Toast
      //     </p>

      //     {showToastSap && (
      //       <Toast 
      //         message="Operazione completata con successo!" 
      //         variant="success" 
      //         theme="material" 
      //         position="top-right" 
      //       />
      //     )}
      //   </div>
      //     <br/>
      //     <div className='toast-container'>
      //       <Toast 
      //         message={"Error message short text"}
      //         variant='error'
      //         theme='material'
      //       />
      //       <Toast 
      //         message={"Warning message short text "}
      //         variant='warning'
      //         theme='material'
      //       />
      //       <Toast 
      //         message={"Success message short text "}
      //         variant='success'
      //         theme='material'
      //       />
      //       <Toast 
      //         message={"Information message short text "}
      //         variant='information'
      //         theme='material'
      //       />
      //     </div>
      //     <br/>
      //     <hr/>
      //     <h1>Card in Stile Sap</h1>
      //     <Card
      //       variant="default"
      //       theme="sap"
      //     >
      //       <YuildHeader>
      //         <h2>Titolo della Card</h2>
      //       </YuildHeader>
      //       <YuildBody>
      //         <p>Questo è il contenuto della card.</p>
      //       </YuildBody>
      //       <YuildFooter> 
      //         <div>
      //           <Button label="Accetta"></Button>
      //         < Button variant='tertiary' label="Rifiuta"></Button>
      //          </div>
      //       </YuildFooter>
      //     </Card>

      //     <h1>Card in Stile Material UI</h1>
      //     <Card
      //       variant="default"
      //       theme="material"
      //     >
      //       <YuildHeader >
      //         <h2>Titolo della Card</h2>
      //       </YuildHeader>
      //       <YuildBody>
      //         <p>Questo è il contenuto della card.</p>
      //       </YuildBody>
      //       <YuildFooter> 
      //         <div>
      //           <Button variant="tertiary" label="Accetta" theme='material'></Button>
      //         < Button variant='tertiary' label="Rifiuta" theme="material"></Button>
      //          </div>
      //       </YuildFooter>
      //     </Card>
      //     <br/>
      //     <hr/>
      //     <h1>Alert in Stile Sap </h1>
      //     <div style={{display:'flex', gap:"1.5rem"}}>
            
      //       <p style={{ cursor: 'pointer', color: 'blue' }} onClick={handleShowAlertSap} >
      //         Mostra Alert
      //       </p>
      //       {
      //         showAlertSap && (
      //         <Alert
      //           variant="default"
      //           theme='sap'
      //           header={<h2>Header dell'Alert</h2>}
      //           body={<div>Questo è un messaggio di alert</div>}
      //           showAlert={showAlertSap}
      //           onClose={handleHideAlertSap}
      //         />
      //       )}
      //     </div>
      //     <br/>
      //     <hr/>
      //     <h1>Alert in Stile Material </h1>
      //     <div style={{display:'flex', gap:"1.5rem"}}>
            
      //       <p style={{ cursor: 'pointer', color: 'blue' }} onClick={handleShowAlertMaterial} >
      //         Mostra Alert
      //       </p>
      //       {
      //         <Alert
      //           variant="default"
      //           theme='material'
      //           header={<h2>Header dell'Alert</h2>}
      //           body={<div>Questo è un messaggio di alert</div>}
      //           labelBtnConfirm='Conferma'
      //           labelBtnCancel='Chiudi'
      //           showAlert={showAlertMaterial}
      //           onClose={handleAlertClose}
      //         />
      //       }
      //     </div>
      //     <br/>
      //     <hr/>
      //     <h1>Dialog in Stile SAP </h1>
      //     <div style={{display:'flex', gap:"1.5rem"}}>
            
      //       <p style={{ cursor: 'pointer', color: 'blue' }} onClick={handleShowDialogSap} >
      //         Mostra Dialog
      //       </p>
      //       {showDialogSap && (
      //         <Dialog variant="default" theme="sap" onClose={handleHideDialogSap}>
      //           <YuildHeader>
      //             <h2>Titolo del dialog</h2>
      //           </YuildHeader>
      //           <YuildBody>
      //             <p>Questo è il contenuto del dialog.</p>
      //           </YuildBody>
      //           <YuildFooter> 
      //             <Button label="Accetta"></Button>
      //             < Button variant='tertiary' label="Rifiuta"></Button>
      //           </YuildFooter>
      //         </Dialog>
      //       )}
      //     </div>
      //     <br/>
      //     <hr/>
      //     <h1>Dialog in Stile Material </h1>
      //     <div style={{display:'flex', gap:"1.5rem"}}>
            
      //       <p style={{ cursor: 'pointer', color: 'blue' }} onClick={handleShowDialogMaterial}>
      //         Mostra Dialog
      //       </p>
      //       {showDialogMaterial && (
      //         <Dialog variant="default" theme="material" onClose={handleHideDialogMaterial}>
      //           <YuildHeader>
      //             <h2>Titolo del dialog</h2>
      //           </YuildHeader>
      //           <YuildBody>
      //             <p>Questo è il contenuto del dialog.</p>
      //           </YuildBody>
      //           <YuildFooter> 
      //             <Button label="Accetta" theme="material"></Button>
      //             < Button variant='tertiary' theme="material" label="Rifiuta"></Button>
      //           </YuildFooter>
      //         </Dialog>
      //       )}
      //     </div>
      //     <br/>
      //     <hr/>
      //     <h1>Drawer in Stile Sap</h1>
      //     <Button label="Apri Drawer" onClick={openDrawer} theme="sap"/>

      //   <Drawer theme="sap" isOpen={isDrawerOpen} onClose={closeDrawer} closeBtn={false} >
      //     <ul className='list-item'>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='sap-drawerIcon' src={Home} alt='Home icon'/>
      //           </span>
      //           <span className="title">Home</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='sap-drawerIcon' src={User} alt='User icon'/>
      //           </span>
      //           <span className="title">Profile</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='sap-drawerIcon' src={Comment} alt='Message icon'/>
      //           </span>
      //           <span className="title">Message</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='sap-drawerIcon' src={Info} alt='Home icon'/>
      //           </span>
      //           <span className="title">Help</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='sap-drawerIcon' src={Gear} alt='Settings icon'/>
      //           </span>
      //           <span className="title">Setting</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='sap-drawerIcon' src={Logout} alt='LogOut icon'/>
      //           </span>
      //           <span className="title">Sign Out</span>
      //         </a>
      //       </li>
      //     </ul>
      //   </Drawer>
      //   <br/>
      //     <hr/>
      //     <h1>Drawer in Stile Material UI</h1>
      //     <Button label="Apri Drawer" onClick={openDrawer} theme="material"/>

      //   <Drawer theme="material" isOpen={isDrawerOpen} onClose={closeDrawer} closeBtn={true}>
      //     <ul className='list-item'>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='material-drawerIcon' src={Home} alt='Home icon'/>
      //           </span>
      //           <span className="title">Home</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='material-drawerIcon' src={User} alt='User icon'/>
      //           </span>
      //           <span className="title">Profile</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='material-drawerIcon' src={Comment} alt='Message icon'/>
      //           </span>
      //           <span className="title">Message</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='material-drawerIcon' src={Info} alt='Home icon'/>
      //           </span>
      //           <span className="title">Help</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='material-drawerIcon' src={Gear} alt='Settings icon'/>
      //           </span>
      //           <span className="title">Setting</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a>
      //           <span className="icon">
      //             <img className='material-drawerIcon' src={Logout} alt='LogOut icon'/>
      //           </span>
      //           <span className="title">Sign Out</span>
      //         </a>
      //       </li>
      //     </ul>
      //   </Drawer>
      //   <br/>
      //   <hr/>
      //   <h1>Tabella in Stile SAP</h1>
      //   <Table theme="sap" columns={columns} data={data} />
      //   <br/>
      //   <hr/>
      //   <h1>Tabella in Stile Material UI</h1>
      //   <Table theme="material" columns={columns} data={data} />
      // </div>


export default App;
