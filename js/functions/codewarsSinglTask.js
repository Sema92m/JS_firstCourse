function createSpiral(N) {
    console.log(!Number.isInteger("N"));
    if (!Number.isInteger(N) || N < 1 || typeof N !== "number") {
        return [];
    }
    let result = new Array(N).fill().map(() => new Array(N).fill(""));
    let counter = 1;
    let fc = 0;
    let lc = N - 1;
    let fr = 0;
    let lr = N - 1;

    while (fc <= lc && fr <= lr) {
        for (let i = fc; i <= lc; i++) {
            result[fr][i] = counter;
            counter++;
        }
        fr++;
        for (let i = fr; i <= lr; i++) {
            result[i][lc] = counter;
            counter++;
        }
        lc--;
        for (let i = lc; i >= fc; i--) {
            result[lr][i] = counter;
            counter++;
        }
        lr--;
        for (let i = lr; i >= fr; i--) {
            result[i][fc] = counter;
            counter++;
        }
        fc++;
    }
    return result;
}
// console.log(createSpiral(1));
// console.log(createSpiral(3));
// console.log(createSpiral(0));
console.log(createSpiral(5.5));
