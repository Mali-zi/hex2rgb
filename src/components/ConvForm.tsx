import { useState } from "react";

function ConvForm() {
  const [hexColor, setHexColor] = useState<string>("");
  const rgbColor = "RGB(0, 0, 0)";
  const allowChars: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const lowerChar = event.key.toLowerCase();
    if(allowChars.indexOf(lowerChar) === -1 && event.key !== 'Backspace'){
      event.preventDefault();
    };
  };

  function handleChangeHex(event: React.ChangeEvent<HTMLInputElement>) {
    setHexColor(event.target.value);
    // let curentColor: string = `{backgroundColor: ${hexColor}}`;
    if (hexColor.length === 6) {
      // curentColor = `{backgroundColor: ${hexColor}}`;
    };
    // return curentColor;
  };

  return (
    <div className="container"
      style={{
      backgroundColor: rgbColor, // Added variable here 
      }}
    >
    <p>
      HEX to RGB Color Converter
    </p>
      <label htmlFor="hexColor">
        Hex color 
        <input 
          id="hexColor" 
          name="hexColor" 
          type="text"
          maxLength={6} 
          value={hexColor} 
          onKeyDown={handleKeyDown}
          onChange={handleChangeHex} 
        />
      </label>
      <button name="clear" type="button">Clear</button>
      <label htmlFor="rgbColor">
        RGB color 
        <input 
          id="rgbColor" 
          name="rgbColor" 
          type="text" 
          value={rgbColor} 
        />
      </label>
    </div>
  )
};

export default ConvForm;