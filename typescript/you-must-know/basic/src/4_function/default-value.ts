const buttonLabel = (label: string = 'Type your label') => {
  return `<button>${label}</button>`;
};

console.log(buttonLabel()); // Type your label
console.log(buttonLabel('OK'));
