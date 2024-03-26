function sum(n) {
    let i;
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(100));