
// At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:

 

// Instructions
// The length of the sentence (the number of characters).
// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that: 

// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters.



function readSentenceLength(sentence) {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < sentence.length; i++) {
        const currentChar = sentence[i];

        if (currentChar === '.') {
            break;
        }
        length++;

        // Count words
        if (currentChar === ' ') {
            wordCount++;
        }

        // Vowels count
        if (vowels.includes(currentChar.toLowerCase())) {
            vowelCount++;
        }
    }
    wordCount++;

    return { length, wordCount, vowelCount };
}

const sentence = "This is a sample sentence.";
const { length, wordCount, vowelCount } = readSentenceLength(sentence);

console.log("Length of the sentence:", length);
console.log("Number of words in the sentence:", wordCount);
console.log("Number of vowels in the sentence:", vowelCount);
