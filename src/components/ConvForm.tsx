import { useState } from "react";
import { AvailableCharacter } from './models/index';

function ConvForm() {
  const [hexColor, setHexColor] = useState<string>("");
  const rgbColor = "RGB(0, 0, 0)";
  const valueCharacters: string[] = [];
  // const availableCharacters: AvailableCharacter[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f];

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if(['1','2','3','4','5', 'N', 'O', 'A', 'B', 'C'].indexOf(event.key) !== -1){
      valueCharacters.push(event.key);
    } else {
      event.preventDefault();
    };
    return valueCharacters;
  };

  function handleChangeHex(event: React.ChangeEvent<HTMLInputElement>) {
    setHexColor(event.target.value);
  }

    // const lowerValue = event.target.value.toLowerCase();
  //   // const arrayValue = Array.from(lowerValue);
  //   // if (typeof arrayValue === 'AvailableCharacter[]') {
  //     setHexColor(arrayValue);
  //   };
  // };

  return (
    <div>
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