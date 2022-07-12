// Soal No 2. Validasi
const validasi = (text) => {
  var split = text.split("");
  var tampung = [];

  for (var i = 0; i < split.length; i++) {
    if (split[i].match(/^[0-9]+$/)) {
      tampung.push(split[i]);
    }
  }

  if (tampung.join("").match(/^[0-9]+$/)) {
    return console.log(
      `Sistem kami menolak untuk inputan berisi angka ${tampung.join("")}`
    );
  }

  return console.log(
    `Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ${text}`
  );
};

var input1 = "hallo jesika24 selamat datang!";
var input2 = "hallo anggun selamat datang!";
var input3 = "hallo ** selamat datang!";
var input4 = "hallo Mariage889120! selamat datang!";

validasi(input1);
validasi(input2);
validasi(input3);
validasi(input4);
