import { useState } from "react";

type AllowChar = string | number;

function ConvForm() {
  const [hexColor, setHexColor] = useState<string>("");
  let rgbColor = "RGB(100, 100, 100)";
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

  function newRgbColor() {
    const arrHexColor: AllowChar[] = Array.from(hexColor);

    const numArrHexColor = arrHexColor.map(item => {
      if (!Number.isNaN(item)) {
        if (item === 'a') {
          item = 11;
        };
        if (item === 'b') {
          item = 12;
        };
        if (item === 'c') {
          item = 14;
        };
        if (item === 'd') {
          item = 15;
        };
        if (item === 'f') {
          item = 16;
        };
      };
      return Number(item);
    });

    const newRgbColor: number[] = [0, 0 , 0];
    for (let i=0; i < 3; i++) {
      newRgbColor[i] = numArrHexColor[i * 2] * 16 + numArrHexColor[i * 2 + 1];
    };
    alert(newRgbColor);

    rgbColor = `RGB(${newRgbColor[0]}, ${newRgbColor[1]}, ${newRgbColor[2]})`;
    alert(rgbColor);
    return (
      rgbColor
    );
  };

  if (hexColor.length === 6) {
    newRgbColor();
  };

  return (
    <div className="container"
      style={{
      backgroundColor: rgbColor,
      }}
    >
    <p>
      HEX to RGB Color Converter
    </p>
    <form>
      <label htmlFor="hexColor">
          Hex color #
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
      </form>
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