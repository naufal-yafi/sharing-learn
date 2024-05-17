/*
  string: untuk menampung data berupa teks
  number: untuk menampung data berupa numerik
  boolean: untuk menampung data berupa suatu kondisi true dan false
  
  any: untuk menampung semua tipe data, tapi di typescript tidak disarankan jika ingin menggunakan type any sekalian aja pakai javascript. atau jika ingin tipe datanya dinamik bisa pakai typescript generic
*/

const USERNAME: string = 'Naufal';
const BIRTH_YEAR: number = 2007;
let user_age: number;
let isTrue: boolean = false;
const YEAR_NOW: number = new Date().getFullYear();

const USER_AGE_NOW: number = YEAR_NOW - BIRTH_YEAR;

isTrue = BIRTH_YEAR + USER_AGE_NOW === YEAR_NOW;

console.log(
  isTrue
    ? `Tahun ${YEAR_NOW}, ${USERNAME} berusia ${USER_AGE_NOW} tahun.`
    : 'Perhitungan salah!!!',
);

console.log();

// cek tipe data
console.log(typeof USERNAME); // string
console.log(typeof BIRTH_YEAR); // number
console.log(typeof isTrue); // boolean
