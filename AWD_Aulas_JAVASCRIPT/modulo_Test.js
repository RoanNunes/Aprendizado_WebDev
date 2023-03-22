//Em um arquivo JAVACRIPT há necessidade de definir o que pode ser exportado, segue exemplo.
function getPrimes(max) {
    const isPrime = Array.from({ length: max }, () => true);
    isPrime[0] = isPrime[1] = false;
    isPrime[2] = true;
    for (let i = 2; i * i < max; i++) {
      if (isPrime[i]) {
        for (let j = i ** 2; j < max; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return [...isPrime.entries()]
      .filter(([, isPrime]) => isPrime)
      .map(([number]) => number);
}

function imprimirPrimo(n){
    return document.getElementById('ContainerExemplo_Modulo').innerHTML = getPrimes(n);
}

export {getPrimes, imprimirPrimo}
export default getPrimes;