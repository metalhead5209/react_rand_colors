// returns a random item from a list. usually an array

const choice = (arr) => {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

export { choice };