// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente:

let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

let decrescente = array.sort((a, b)=> b - a);

console.log(decrescente);

// Variante: ordine crescente.

let crescente = array.sort((a, b)=> a - b);

console.log(crescente);
