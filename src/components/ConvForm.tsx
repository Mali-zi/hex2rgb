import { useState } from "react";
import Convertor from './Convertor';

type AllowChar = string | number;

function ConvForm() {
  const [hexColor, setHexColor] = useState<string>("");
  let rgbColor = "rgb(100, 100, 100)";
  let darkRgbColor = "rgb(50, 50, 50)";
  const allowChars: AllowChar[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const lowerChar = event.key.toLowerCase();
    if(allowChars.indexOf(lowerChar) === -1 && event.key !== 'Backspace'){
      event.preventDefault();
    };
  };

  function handleChangeHex(event: React.ChangeEvent<HTMLInputElement>) {
    setHexColor(event.target.value);
  };


  if (hexColor.length === 6) {
    const newRgbColor = Convertor(hexColor);
    rgbColor = `rgb(${newRgbColor[0]}, ${newRgbColor[1]}, ${newRgbColor[2]})`;
    darkRgbColor = `rgb(${newRgbColor[0] / 2}, ${newRgbColor[1] / 2}, ${newRgbColor[2] / 2})`;

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
        id="hexColor" 
        name="hexColor" 
        type="text"
        maxLength={6} 
        className="colorInput"
        style={{color: darkRgbColor, backgroundColor: 'white'}}
        value={hexColor} 
        onKeyDown={handleKeyDown}
        onChange={handleChangeHex} 
      />
      <input 
        id="rgbColor" 
        name="rgbColor" 
        type="text" 
        className="colorInput"
        style={{color: "white", backgroundColor: darkRgbColor}}
        value={rgbColor} 
      />
    </div>
  )
};

export default ConvForm;