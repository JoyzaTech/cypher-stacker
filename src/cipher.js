// Helper function to split a word into a 2D array with a set number of columns
function wordTo2DArray(word, columns) {
    let array2D = [];
    for (let i = 0; i < word.length; i += columns) {
        array2D.push(word.slice(i, i + columns).split(''));
    }
    return array2D;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Main function to create the ciphered word and log the results
function generateCipher(word, columns) {
    //Replace spaces with underscores
    word = word.replace(/ /g, "_");

    //Create a 2D array
    const array2D = wordTo2DArray(word, columns);
    console.log(array2D);

    //Generate a shuffled key
    const key = Array.from({ length: columns }, (_, i) => i + 1); // [1, 2, 3, ..., columns]
    const shuffledKey = shuffleArray([...key]); // Shuffle a copy of the key

    //Create the ciphered word using the key
    let cipheredWord = "";
    for (let col of shuffledKey) {
        for (let row of array2D) {
            if (row[col - 1]) cipheredWord += row[col - 1]; // Append letter if it exists
        }
        cipheredWord += "-"; // Add separator
    }

    cipheredWord = cipheredWord.slice(0, -1);
    console.log("Key:", shuffledKey.join(""));
    console.log("Ciphered Word:", cipheredWord);
}

const word = "MEAT LIKE APPENDAGES";
const columns = 5;

generateCipher(word, columns);