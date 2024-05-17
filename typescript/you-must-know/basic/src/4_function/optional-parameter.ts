const optionalParameter = (name: string, noHP?: number) => {
  return `${name} = ${noHP}`;
};

console.log(optionalParameter('Naufal')); // Naufal = undefined
console.log(optionalParameter('Naufal', 123012391293)); // Naufal = 123012391293
