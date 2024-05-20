// type dinamis
function genericFunction<T>(params: T): T {
  return params;
}

console.log(typeof genericFunction(1)); // number
console.log(typeof genericFunction('abc')); // string
console.log(typeof genericFunction(true)); // boolean

// kenapa ngak menggunakan any
function valueNotGeneric(value: any): any {
  return value;
}

console.log(valueNotGeneric(1).length); // undefined
console.log(valueNotGeneric('abc').length); // 3

function valueGeneric<T>(value: T): T {
  return value;
}

// console.log(valueGeneric(1).length); // error
console.log(valueGeneric('abc').length); // 3

/*
  dengan begitu kita bisa mengetahui error yang terjadi, jika menggunakan array kita tidak akan tau method apa yang ada, nah hal itu mengakibatkan value menjadi undefined
*/
