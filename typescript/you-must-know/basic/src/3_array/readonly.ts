const nameListCh: string[] = ['ups', 'tr', 'abs'];
console.log(nameListCh[0]); // ups
nameListCh[0] = 'ch';
console.log(nameListCh[0]); // ch

// readonly digunakan agar tidak bisa mengubah data yang sudah dibuat sebelumnya
const nameList: ReadonlyArray<string> = ['ups', 'tr', 'abs'];

// nameList[0] = 'ch'; // error
