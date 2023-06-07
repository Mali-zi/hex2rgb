import { useState } from "react";
import { AvailableCharacter } from './models/index';

function ConvForm() {
  const initHexColor: AvailableCharacter[] = ['0', '0', '0', '0', '0', '0'];
  const [hexColor, setHexColor] = useState<AvailableCharacter[]>(initHexColor);
  const rgbColor = "RGB(0, 0, 0)";
  const valueCharacters = [];
  // const availableCharacters: AvailableCharacter[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f];

  function handleChangeHex(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.value.toUpperCase();
    if (typeof Array.from(event.target.value) === 'AvailableCharacter[]') {
      setHexColor(event.target.value);
    }
    setHexColor(event.target.value);

  };

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
          onChange={(event) => handleChangeHex(event)} 
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