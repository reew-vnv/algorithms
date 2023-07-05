export const generateRandomNumArray = (length) => {
    let array = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * 1000);
        array.push(randomNumber);
    }

    return array;
}
