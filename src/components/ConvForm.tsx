import { useState } from "react";
import Convertor from './Convertor';
import { AllowChar } from './models/index';

function ConvForm() {
  const [hexColor, setHexColor] = useState<string>("");
  let rgbColor = "rgb(236, 40, 60)";
  let rgbColorMessage = rgbColor;
  let darkRgbColor = "rgb(118, 20, 30)";
  const allowChars: AllowChar[] = ['#', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const lowerChar = event.key.toLowerCase();
    if(allowChars.indexOf(lowerChar) === -1 && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'End'){
      event.preventDefault();
    };
  };

  function handleChangeHex(event: React.ChangeEvent<HTMLInputElement>) {
    setHexColor(event.target.value);
  };

  let cutHexColor = '';
  if (hexColor.length === 7) {
    if (hexColor[0] === '#') {
      cutHexColor = hexColor.slice(1).toLowerCase();
      const newRgbColor = Convertor(cutHexColor);
      rgbColor = `rgb(${newRgbColor[0]}, ${newRgbColor[1]}, ${newRgbColor[2]})`;
      rgbColorMessage = rgbColor;
      darkRgbColor = `rgb(${newRgbColor[0] / 2}, ${newRgbColor[1] / 2}, ${newRgbColor[2] / 2})`;
    } else {
      rgbColorMessage = 'Ошибка!';
    }


  };

  return (
    <div className="container"
      style={{
      backgroundColor: rgbColor,
      }}
    >
      <div 
        className="title"
        style={{color: "white", backgroundColor: darkRgbColor}}
      >
        HEX to RGB Color Converter
      </div>
      <input 
        name="hexColor" 
        type="text"
        maxLength={7} 
        className="colorInput"
        style={{color: darkRgbColor, backgroundColor: 'white'}}
        value={hexColor} 
        onKeyDown={handleKeyDown}
        onChange={handleChangeHex} 
      />
      <input 
        name="rgbColor" 
        type="text" 
        className="colorInput"
        style={{color: "white", backgroundColor: darkRgbColor}}
        value={rgbColorMessage} 
      />
    </div>
  )
};

export default ConvForm;