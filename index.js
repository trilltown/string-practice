let str = "beautiful day";

// 1. Print all other letters starting with the first one

// for (let i = 0; i < str.length; i+= 2) {
//     console.log(str[i])     
// }

// 2. Print index of 'e'

// console.log(str.indexOf("e"))

// 3. Print the characters that occur at even indexes

// for (let i = 0; i <= str.length - 1; i++) {
//     if (i % 2 === 0) {
//         console.log(str[i])
//     }
// }

// 4. Print the characters that occur at odd indexes - do it backward

// for (let i = str.length; i >= 0; i--) {
//     if (i % 2 === 1) {
//         console.log(str[i])
//     }
// }

// 5. Print with each character in this format "Index of (character) is (index)"

// input: "hi"
// output:
    // "Index of h is 0"
    // "Index of i is 1"

// Re-do everything using another loop (`for` / `while`)

// for (let i = 0; i < str.length; i++) {
//     console.log(`Index of ${str[i]} is ${i}`)
// }

let newSentence = "Today we are Saturday"

// 1. Return a new string without the vowels

 // input: "hello"
 // output: "hll"

let sentenceWithoutVowels = ""

for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i] !== "a" && newSentence[i] !=="e" && newSentence[i] !=="i" && newSentence[i] != "o" && newSentence[i] !== "u") {
        sentenceWithoutVowels += newSentence[i];
    }
}
console.log(sentenceWithoutVowels)
