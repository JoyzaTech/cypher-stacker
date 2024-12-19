import React, { useEffect } from 'react';
import cipherData from './data'; // Import the data file
// Helper function to split a word into a 2D array with a set number of columns
function wordTo2DArray(word, columns) {
    let array2D = [];
    for (let i = 0; i < word.length; i += columns) {
        array2D.push(word.slice(i, i + columns).split(''));
    }
    return array2D;
}

// Helper function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const CipherGenerator = React.memo(({ id, onCipherGenerated }) => {
    useEffect(() => {
        const generateCipher = (word, columns) => {
            // Create a 2D array
            const array2D = wordTo2DArray(word, columns);

            // Generate a shuffled key
            const key = Array.from({ length: columns }, (_, i) => i + 1);
            const shuffledKey = shuffleArray([...key]);

            // Create the ciphered word using the key
            let cipheredWord = "";
            for (let col of shuffledKey) {
                for (let row of array2D) {
                    if (row[col - 1]) cipheredWord += row[col - 1];
                }
                cipheredWord += "-";
            }

            cipheredWord = cipheredWord.slice(0, -1);

            // **Calculate the correct answer**
            let correctAnswer = "";
            for (let row of array2D) {
                correctAnswer += row.join(''); 
            }

            // Call the callback to pass the generated data
            onCipherGenerated({
                key: shuffledKey,
                cipheredWord,
                correctAnswer: correctAnswer 
            });
        };

        // Only run when id changes
        const selectedData = cipherData[id];
        if (selectedData) {
            const { word, columns } = selectedData;
            generateCipher(word, columns);
        }
    }, [id]);

    return null; // This component does not render anything directly
});

export default CipherGenerator;