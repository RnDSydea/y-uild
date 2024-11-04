import React, { useState, useEffect } from "react";
import './home.css';
import Button from "../../components/input/button/button";
import Input from '../../components/input/input/input';
import TextArea from '../../components/input/textArea/textArea';
import RadioButton from '../../components/input/radio/radio';
import Checkbox from '../../components/input/checkbox/checkbox';
import Select from '../../components/input/select/select';
import Toast from '../../components/input/toast/toast';
import Card from '../../components/input/card/card';
import YuildHeader from '../../components/input/yUildHeader/yUildHeader';
import YuildBody from '../../components/input/yUildBody/yUildBody';
import YuildFooter from '../../components/input/yUildFooter/yUildFooter';
import Alert from '../../components/input/alert/alert';
import Table from '../../components/input/table/table';
import Dialog from '../../components/input/dialog/dialog';
import Drawer from '../../components/input/drawer/drawer';
// import HomeIcon from '../assets/house-solid.svg'
// import User from '../assets/user-solid.svg'
// import Comment from '../assets/comment-solid.svg'
// import Info from '../assets/circle-info-solid.svg'
// import Gear from '../assets/gear-solid.svg'
// import Logout from '../assets/right-from-bracket-solid.svg'
// import MoveIcon from '../assets/arrows-up-down-left-right-solid.svg'
// import Delete from '../assets/trash-solid.svg'
import ComponentsData from '../../assets/data/components.json'
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { render } from '@testing-library/react';

export const Home = () => {

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
  const [editorMode, setEditorMode] = useState(true);

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

  // const [numColumns, setNumColumns] = useState(12);
  // const [numRows, setNumRows] = useState(36);
  const [numColumns, setNumColumns] = useState(24);
  const [numRows, setNumRows] = useState(72);
  const [grid, setGrid] = useState([]);
  const [highlightsCell, setHighlightsCell] = useState([]);
  const [draggedComponent, setDraggedComponent] = useState(null);
  const [patchObj, setPatchObj] = useState([]);
  const [selectedProps, setSelectedProps] = useState({});

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
    setDraggedComponent({ ...component, componentId: uniqueId });  
  };

  const handleDrop = (index_row, index_col) => {
    if (!draggedComponent) {
      return;
    }
  
    const { lunghezza: newLunghezza, altezza: newAltezza } = draggedComponent;
    const cellsToFill = calculateCellsToFill(index_row, index_col, newLunghezza, newAltezza);
  
    // Se le celle da riempire superano l'ultima riga, aggiungi una nuova riga
    const exceedsLastRow = cellsToFill.some((cell) => cell.row >= numRows);
    if (exceedsLastRow) {
      setNumRows((prevNumRows) => prevNumRows + 1); // Aggiunge una nuova riga
      return; // Esci e attendi l'aggiornamento della griglia
    }
  
    // Verifica se qualcuna delle celle è occupata
    const isOccupied = cellsToFill.some(
      (cell) => grid[cell.row] && grid[cell.row][cell.columns] && grid[cell.row][cell.columns].componente
    );
  
    if (isOccupied) {
      setHighlightsCell([]);
      return;
    }
  
    // Rilascia il componente nelle celle
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
      component: draggedComponent.nome,
      componentId: draggedComponent.componentId,
      render: draggedComponent.render,
      top,
      left,
      width,
      height,
      props: draggedComponent.props
    };
  
    const newPatchObj = [...patchObj];
    newPatchObj.push(overlay_component);
  
    setGrid(newGrid);
    setDraggedComponent(null);
    setHighlightsCell([]);
    setPatchObj(newPatchObj);
  };
  

  // const handleDragOver = (index_row, index_col) => {
  //   if (draggedComponent) {
  //       const { lunghezza, altezza } = draggedComponent;
  //       const cellHighlightBorder = calculateCellsToFill(index_row, index_col, lunghezza, altezza);
  //       var newRows = 0;
  //       console.log(cellHighlightBorder.length);
        
  //       if((cellHighlightBorder.length / lunghezza) < altezza){
  //         newRows = altezza - cellHighlightBorder.length;
  //       }

  //       if(numRows > 34){
  //         setTempRows(newRows);
  //         const totalRows = numRows;
  //         console.log('numero ', totalRows);
  //         console.log('NUOVE ',newRows);
  //         setNumRows(totalRows+newRows);
  //       }
        


  //       const isOccupied = cellHighlightBorder.some(({ row, columns }) => {
            // Controlla se row e columns sono validi prima di accedere
//             return grid[row] && grid[row][columns] && grid[row][columns].componente !== null;
//         });

//         // Imposta la classe per evidenziare celle libere o occupate
//         if (isOccupied) {
//             setHighlightsCell(cellHighlightBorder.map(({ row, columns }) => ({
//                 row,
//                 columns,
//                 occupied: true
//             })));
//         } else {
//             setHighlightsCell(cellHighlightBorder.map(({ row, columns }) => ({
//                 row,
//                 columns,
//                 occupied: false
//             })));
//         }
//     } else {
//         setHighlightsCell([]);
//     }
// };
  const handleDragOver = (index_row, index_col) => {
    if (draggedComponent) {
        const { lunghezza, altezza } = draggedComponent;
        const cellHighlightBorder = calculateCellsToFill(index_row, index_col, lunghezza, altezza);
        
        // Calcola il numero totale di righe necessarie
        const totalNeededRows = index_row + altezza;

        // Se il numero di righe attuali è inferiore a quelle necessarie, aggiorna il numero di righe
        if (totalNeededRows > numRows) {
            setNumRows(totalNeededRows);
        }

        const isOccupied = cellHighlightBorder.some(({ row, columns }) => {
            // Controlla se row e columns sono validi prima di accedere
            return grid[row] && grid[row][columns] && grid[row][columns].componente !== null;
        });

        // Imposta la classe per evidenziare celle libere o occupate
        const highlights = cellHighlightBorder.map(({ row, columns }) => ({
            row,
            columns,
            occupied: isOccupied,
        }));

        setHighlightsCell(highlights);
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

            // Aggiungi solo celle valide (all'interno dei limiti della griglia)
            if (cellIndex_row < numRows && cellIndex_col < numColumns) {
                cells.push({ row: cellIndex_row, columns: cellIndex_col });
            }
        }
    }
    return cells;
};

  const handlePatchClick = (index) => {
    const newPatchObj = patchObj.map((patch, i) => ({
      ...patch,
      selected: i === index ? !patch.selected : false 
    }));
    setPatchObj(newPatchObj);
    setSelectedProps(patchObj[index].props);
    document.addEventListener('click', handleOutsideClick); 
  };
  
  const handleOutsideClick = (event) => {
    // Verifica se il clic è stato fatto all'esterno di un componente
    const isClickOutside = !event.target.closest('.component-overlay');
    if (isClickOutside) {
      deselectComponent();
      document.removeEventListener('click', handleOutsideClick);
    }
  };
  
  const deselectComponent = () => {
    setPatchObj((prevPatchObj) =>
      prevPatchObj.map((patch) => ({
        ...patch,
        selected: false,
      }))
    );
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
    setSelectedProps({});
  };

  const handleDeletePatchClick = (event, index) => {
    event.stopPropagation();
    handleDeletePatch(index);
  };

  const generateHtmlFile = (component) => {
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${component.nome}</title>
        </head>
        <body>
          <p>Hai scaricato il componente: ${component.nome}, che ha come id  ${component.id} </p>
          ${component.render}
        </body>
      </html>`;
    
    return htmlTemplate;
  };
  
  const handleDownloadZip = () => {
    const zip = new JSZip();
  
    patchObj.forEach((component) => {
      const fileName = `test.html`;
      const htmlContent = generateHtmlFile(component);
      zip.file(fileName, htmlContent);
    });
  
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'components.zip');
    });
  };

  const buttonComponent = {
    nome: 'Button',
    lunghezza: 2,
    altezza: 1,
    render: '<Button label="Primary" /> ',
  };

  const clearAll = () => {
    const updatedGrid = [...grid];
    for (let i = 0; i < updatedGrid.length; i++) {
      for (let j = 0; j < updatedGrid[i].length; j++) {
        updatedGrid[i][j] = {
          id: updatedGrid[i][j].id,
          lunghezza: 1,
          componente: null,
          componentId: null,
        };
      }
    }
    setPatchObj([]);
    setGrid(updatedGrid);
    setSelectedProps({});
  };

  const componentMap = {
    Button, Input, TextArea, RadioButton, Checkbox, Select, Toast, Card, YuildHeader, YuildBody, YuildFooter, Alert,
  };

  const handleInputChangeProps = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    const keys = name.split(".");
  
    const updatedSelectedProps = { ...selectedProps };
    let ref = updatedSelectedProps;
  
    keys.slice(0, -1).forEach((key) => {
      if (!ref[key]) ref[key] = {};
      ref = ref[key];
    });
    ref[keys[keys.length - 1]] = newValue;
    setSelectedProps(updatedSelectedProps);

    const newPatchObj = patchObj.map((patch) =>
      patch.selected ? { ...patch, props: updatedSelectedProps } : patch
    );
    setPatchObj(newPatchObj);
  };

    return (
        <div>
          <div className='yuild-header'>
            <div className='btn-download-container'>
              <span><b>Y-UILD</b></span>
              <span>Github</span>
              <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <span>Editor mode</span>
                <div class="yuild-toggle-container">
                  <input type="checkbox" class="yuild-toggle-checkbox" id="checkbox" checked={editorMode} onChange={(e) => setEditorMode(e.target.checked)}></input>
                  <label class="yuild-toggle-switch" for="checkbox">
                    <span class="yuild-toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className='btn-download-container'>
              <Button label="Show Editor" onClick={handleDownloadZip} />
              <Button label="Clear" onClick={clearAll} />
              <Button label="Scarica il codice" onClick={handleDownloadZip} />
            </div>
          </div>
        
          <div className='main-container'>
            <div className='components-container'>
              {/* <div
                className="tile"
                draggable
                onDragStart={() => handleDragStart(buttonComponent)}
              >
              </div> */}
              {ComponentsData.components.map((component, index) => (
                <div
                  key={index}
                  className="tile"
                  draggable
                  onDragStart={() => handleDragStart(component)}
                >
                  <div className='row-drag-component'>
                    <div className='drag-icon'>
                      <svg fill="currentcolor" viewBox="0 0 24 24">
                        <path d="M10,4A2,2,0,1,1,8,2,2,2,0,0,1,10,4ZM8,10a2,2,0,1,0,2,2A2,2,0,0,0,8,10Zm0,8a2,2,0,1,0,2,2A2,2,0,0,0,8,18ZM16,6a2,2,0,1,0-2-2A2,2,0,0,0,16,6Zm0,8a2,2,0,1,0-2-2A2,2,0,0,0,16,14Zm0,8a2,2,0,1,0-2-2A2,2,0,0,0,16,22Z"/></svg>
                      </div>
                      <p>{component.nome}</p>
                  </div>
                </div>
              ))}
            </div>
    
            <div className="drag-and-drop-container">
              <div className='yuild-container box-page'>
                {grid.map((row, index_row) => (
                  <div className='yuild-row' key={index_row}>
                    {row.map((cell, index_cell) => (
                      <div
                        // className={`grid-cell ${highlightsCell.find((e)=>e.row === index_row && e.columns===index_cell) ? 'highlight' : ''} yuild-col-${cell.lunghezza}`}
                        className={`grid-cell ${editorMode ? 'editable':''} ${
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
                        {/* {cell.componente && cell.componentId ? `${cell.id} + ${cell.componentId}` : cell.id}  */}
                      </div>
                      ))}
                  </div>
                ))}
                {patchObj.map((overlay, index) => {
                  const ComponentToRender = componentMap[overlay.component];
                return(           
                  <div
                    key={index}
                    className="overlay-container"
                    style={{
                      top: overlay.top,
                      left: overlay.left,
                      width: overlay.width,
                      height: overlay.height,
                    }}
                  >
                    <div
                      className={`component-overlay ${overlay.selected ? 'selected':''}`}
                      style={{
                        // width: overlay.width,
                        // height: overlay.height,
                        boxShadow: overlay.selected ? 'inset 0 0 0 3px red' : ''
                      }}
                      onClick={() => handlePatchClick(index)}  
                    >
                      <div style={{width:'100%', height:'100%'}} className={
                        `yuild-d-${overlay.props.layout.display} ${overlay.props.layout.direction ? `yuild-flex-dir-${overlay.props.layout.direction}` : ''} 
                        ${overlay.props.layout['vertical-align'] ? `yuild-vertical-align-${overlay.props.layout['vertical-align']}` : ''} 
                        ${overlay.props.layout['horizontal-align'] ? `yuild-horizontal-align-${overlay.props.layout['horizontal-align']}` : ''} 
                        `
                        }>
                      {/* <div className='box-render-yuild-component'> */}
                        {/* <div className='box-render-yuild-component-wrapper'> */}
                        {/* <p>{JSON.stringify(overlay.props)}</p> */}
                          {ComponentToRender && <ComponentToRender {...overlay.props} />}
                        {/* </div> */}
                      </div>
                    </div>
                    
                    {overlay.selected && (
                      <div className='button-container'>
                        <div className='icon-patch' onClick={() => alert('Button clicked!')}>
                          <svg viewBox="0 0 512 512" className='drag-sel-icon'>
                            <path d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4L224 224l-114.7 0 9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L224 288l0 114.7-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4L288 288l114.7 0-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L288 224l0-114.7 9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z"/>
                          </svg>
                        </div>
                        <div className='icon-patch' onClick={(e) => handleDeletePatchClick(e, index)}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='trash-icon'>
                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                          </svg>
                        </div>
                      </div>
                      // <div className='button-container'>
                      //   <div className="move-icon-container" style={{ left: `calc(${overlay.width}px + 10px)`}} onClick={() => alert('Button clicked!')}>
                      //     <img src={MoveIcon} alt="Move Icon" className="delete-icon"  />
                      //   </div>
                      //   <div className="delete-icon-container" style={{ left: `calc(${overlay.width}px + 5rem)`}} onClick={(e) => handleDeletePatchClick(e, index)}>
                      //     <img src={Delete} alt="Delete Icon" className="delete-icon" />
                      //   </div>
                      // </div>
                    )}
                  </div>)
                })} 
              </div>
            </div>
            <div className='component-details-column' onClick={(event) => event.stopPropagation()}>
              <div className='comp-col-props'>
                {/* <p style={{wordBreak:'break-all'}}>{JSON.stringify(selectedProps)}</p> */}
                <p className='props-comp-topic'>Props</p>
                {Object.keys(selectedProps).length > 0 && (
                <>
                  {selectedProps.label !== null && selectedProps.label !== undefined && (
                    <div className='row-comp-props'>
                      <p className='props-comp-label'>Label</p>
                      <input
                        value={selectedProps.label}
                        name="label"
                        onChange={handleInputChangeProps}
                        className='input-props-comp'
                      />
                    </div>
                  )}
                  {selectedProps.placeholder !== null && selectedProps.placeholder !== undefined && (
                    <div className='row-comp-props'>
                      <p className='props-comp-label'>Placeholder</p>
                      <input
                        value={selectedProps.placeholder}
                        name="placeholder"
                        onChange={handleInputChangeProps}
                        className='input-props-comp'
                      />
                    </div>
                  )}
    
                  {selectedProps.variant && (
                    <div className='row-comp-props'>
                      <p className='props-comp-label'>Variant</p>
                      <select
                        name="variant"
                        value={selectedProps.variant || "default"}
                        onChange={handleInputChangeProps}
                        className='input-props-comp'
                      >
                        <option value="default">default</option>
                        <option value="disabled">disabled</option>
                        <option value="readOnly">readOnly</option>
                        <option value="error">error</option>
                        <option value="success">success</option>
                        <option value="warning">warning</option>
                        <option value="information">information</option>
                      </select>
                    </div>
                  )}
    
                  {selectedProps.disabled !== null && selectedProps.disabled !== undefined && (
                    <div className='row-comp-props'>
                      <p className='props-comp-label'>Disabled</p>
                      <input
                        type="checkbox"
                        checked={selectedProps.disabled}
                        name="disabled"
                        onChange={handleInputChangeProps}
                        className='checkbox-props-comp'
                      />
                    </div>
                  )}
    
                  {selectedProps.required !== null && selectedProps.required !== undefined && (
                    <div className='row-comp-props'>
                      <p className='props-comp-label'>Required</p>
                      <input
                        type="checkbox"
                        checked={selectedProps.required}
                        name="required"
                        onChange={handleInputChangeProps}
                        className='checkbox-props-comp'
                      />
                    </div>
                  )}
                  
                  {selectedProps.readOnly !== null && selectedProps.readOnly !== undefined && (
                    <div className='row-comp-props'>
                      <p className='props-comp-label'>Read only</p>
                      <input
                        type="checkbox"
                        checked={selectedProps.readOnly}
                        name="readOnly"
                        onChange={handleInputChangeProps}
                        className='checkbox-props-comp'
                      />
                    </div>
                  )}
    
                  {selectedProps.theme && (
                    <div className='row-comp-props'>
                      <p className='props-comp-label'>Theme</p>
                      <select
                        name="theme"
                        id="theme-select"
                        value={selectedProps.theme}
                        onChange={handleInputChangeProps}
                        className='input-props-comp'
                      >
                        <option value="sap">sap</option>
                        <option value="material">yuild</option>
                      </select>
                    </div>
                  )}
    
                  <p className='props-comp-topic' style={{ marginTop: '1rem' }}>Layout</p>
                  <div className='row-comp-props'>
                    <div>
                      <p className='props-comp-label'>Display</p>
                      <select
                        name="layout.display"
                        value={selectedProps.layout?.display || "block"}
                        onChange={handleInputChangeProps}
                        className='input-props-comp'
                      >
                        <option value="block">block</option>
                        <option value="flex">flex</option>
                        <option value="inline">inline</option>
                        <option value="grid">grid</option>
                      </select>
                    </div>
                    {
                      selectedProps.layout?.display === 'flex' &&
                      <>
                      <div>
                        <p className='props-comp-label'>Direction</p>
                        <select
                          name="layout.direction"
                          value={selectedProps.layout?.direction || 'row'}
                          onChange={handleInputChangeProps}
                          className='input-props-comp'
                        >
                          <option value="row">row</option>
                          <option value="row-reverse">row-reverse</option>
                          <option value="column">column</option>
                          <option value="column-reverse">column-reverse</option>
                        </select>
                      </div>
                      <div>
                        <p className='props-comp-label'>Vertical Align</p>
                        <select
                          name="layout.vertical-align"
                          value={selectedProps.layout?.['vertical-align'] || 'center'}
                          onChange={handleInputChangeProps}
                          className='input-props-comp'
                        >
                          <option value="center">center</option>
                          <option value="start">start</option>
                          <option value="end">end</option>
                          <option value="stretch">stretch</option>
                        </select>
                      </div>
                      <div>
                        <p className='props-comp-label'>Horizontal Align</p>
                        <select
                          name="layout.horizontal-align"
                          value={selectedProps.layout?.['horizontal-align'] || 'center'}
                          onChange={handleInputChangeProps}
                          className='input-props-comp'
                        >
                          <option value="center">center</option>
                          <option value="start">start</option>
                          <option value="end">end</option>
                          <option value="space-between">space-between</option>
                        </select>
                      </div>
                      </>
                    }
                  </div>
    
                  <p className='props-comp-topic' style={{ marginTop: '1rem' }}>Spacing</p>
                  <div className='row-comp-props'>
                    <div>
                      <p className='props-comp-label'>Margin</p>
                      <p className='props-comp-label'>All</p>
                      <input value={selectedProps.spacing?.margin.all} name="spacing.margin.all" onChange={handleInputChangeProps} placeholder='0px' className='input-props-comp' />
                      <div style={{display:'flex', justifyContent: 'center'}}>
                        <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                          <p className='props-comp-label'>Top</p>
                          <input value={selectedProps.spacing?.margin.top} name="spacing.margin.top" onChange={handleInputChangeProps} placeholder='0px' className='box-spacing-props input-props-comp' />
                        </div>
                      </div>
                      <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                          <p className='props-comp-label'>Left</p>
                          <input value={selectedProps.spacing?.margin.left} name="spacing.margin.left" onChange={handleInputChangeProps} placeholder='0px' className='box-spacing-props input-props-comp' />
                        </div>
                        <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                          <p className='props-comp-label'>Right</p>
                          <input value={selectedProps.spacing?.margin.right} name="spacing.margin.right" onChange={handleInputChangeProps} placeholder='0px' className='box-spacing-props input-props-comp' />
                        </div>
                      </div>
                      <div style={{display:'flex', justifyContent: 'center'}}>
                        <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                          <p className='props-comp-label'>Bottom</p>
                          <input value={selectedProps.spacing?.margin.bottom} name="spacing.margin.bottom" onChange={handleInputChangeProps} placeholder='0px' className='box-spacing-props input-props-comp' />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className='props-comp-label'>Padding</p>
                      <p className='props-comp-label'>All</p>
                      <input value={selectedProps.spacing?.padding.all} name="spacing.padding.all" onChange={handleInputChangeProps} placeholder='0px' className='input-props-comp' />
                      <div style={{display:'flex', justifyContent: 'center'}}>
                        <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                          <p className='props-comp-label'>Top</p>
                          <input value={selectedProps.spacing?.padding.top} name="spacing.padding.top" onChange={handleInputChangeProps} placeholder='0px' className='box-spacing-props input-props-comp' />
                        </div>
                      </div>
                      <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                          <p className='props-comp-label'>Left</p>
                          <input value={selectedProps.spacing?.padding.left} name="spacing.padding.left" onChange={handleInputChangeProps} placeholder='0px' className='box-spacing-props input-props-comp' />
                        </div>
                        <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                          <p className='props-comp-label'>Right</p>
                          <input value={selectedProps.spacing?.padding.right} name="spacing.padding.right" onChange={handleInputChangeProps} placeholder='0px' className='box-spacing-props input-props-comp' />
                        </div>
                      </div>
                      <div style={{display:'flex', justifyContent: 'center'}}>
                        <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                          <p className='props-comp-label'>Bottom</p>
                          <input value={selectedProps.spacing?.padding.bottom} name="spacing.padding.bottom" onChange={handleInputChangeProps} placeholder='0px' className='box-spacing-props input-props-comp' />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
    
    
              </div>
            </div>
          </div>
        </div>
      );
}