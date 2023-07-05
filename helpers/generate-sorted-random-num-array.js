export const generateSortedRandomNumArray = (length) => {
    let array = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * 1000);
        array.push(randomNumber);
    }

    array.sort((a, b) => a - b);

    return array;
}
