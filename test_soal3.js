// Soal No.3 Segitiga Bintang
const segitigaBintang1 = (baris) => {
  var hasil = "";

  for (var i = 1; i <= baris; i++) {
    for (var j = 0; j < i; j++) {
      hasil += "*";
    }
    hasil += "\n";
  }

  return console.log(hasil);
};

const segitigaBintang2 = (baris) => {
  var hasil = "";

  for (var i = 1; i <= baris; i++) {
    for (var j = 1; j <= baris - i; j++) {
      hasil += " ";
    }
    for (var k = 1; k <= i; k++) {
      hasil += "*";
    }
    hasil += "\n";
  }

  return console.log(hasil);
};

segitigaBintang1(6);
segitigaBintang2(6);
