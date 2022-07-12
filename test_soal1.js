// Soal No. 1 Mencari Modus
const nilaiModus = (array) => {
  var tampungData = [];
  var result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i - 1] || array[i] == array[0]) {
      tampungData.push(array[i]);
    }
  }

  for (let i = 0; i < tampungData.length; i++) {
    if (
      tampungData[i] == tampungData[i - 1] ||
      tampungData[i] == tampungData[0]
    ) {
      result.push(tampungData[i]);
    }
  }

  return console.log(
    `total data paling banyak keluar adalah ${[
      ...new Set(result),
    ]} dengan jumlah ${result.length}`
  );
};

var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];

nilaiModus(data1);
nilaiModus(data2);
nilaiModus(data3);
