import { AllowChar } from './models/index';

export default function Convertor(hexColor: string) {
  const arrHexColor: AllowChar[] = Array.from(hexColor);

  const numArrHexColor = arrHexColor.map(item => {
    if (!Number.isNaN(item)) {
      if (item === 'a') {
        item = 10;
      };
      if (item === 'b') {
        item = 11;
      };
      if (item === 'c') {
        item = 12;
      };
      if (item === 'd') {
        item = 13;
      };
      if (item === 'e') {
        item = 14;
      };
      if (item === 'f') {
        item = 15;
      };
    };
    return Number(item);
  });

  const newRgbColor: number[] = [0, 0 , 0];
  for (let i=0; i < 3; i++) {
    newRgbColor[i] = numArrHexColor[i * 2] * 16 + numArrHexColor[i * 2 + 1];
  };

  return (
    newRgbColor
  );
};
