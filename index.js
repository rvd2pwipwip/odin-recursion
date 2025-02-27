/**
 * The Fibonacci Sequence is a numerical sequence where each number is the sum of the two numbers before it.
 * Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.
 */

function fibs(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) { //only push value to result if n > 1 (we know result[0] and result[1])
    const a = result[i - 1]; //value of result at current last index
    const b = result[i - 2]; //value of result at current penultimate index

    result.push(a + b); //push last + penultimate
  }

  return result[n]; //value at last index
}

function fibsRec(n) {
  if (n < 2) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}

const ternaryFibs = (n) =>
  n < 2 ? n : ternaryFibs(n - 1) + ternaryFibs(n - 2);

console.log(fibs(7));
console.log(fibsRec(7));
console.log(ternaryFibs(8));
