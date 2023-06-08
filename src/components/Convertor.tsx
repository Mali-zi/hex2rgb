type AllowChar = string | number;

export default function Convertor(hexColor: string) {
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

  return (
    newRgbColor
  );
};
