// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector("#noun1");
const verbButton = document.querySelector("#verb");
const adjectiveButton = document.querySelector("#adjective");
const noun2Button = document.querySelector("#noun2");
const settingButton = document.querySelector("#setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.querySelector("#choosenNoun1");
const chosenVerb = document.querySelector("#choosenVerb");
const chosenAdjective = document.querySelector("#choosenAdjective");
const chosenNoun2 = document.querySelector("#choosenNoun2");
const chosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.querySelector("#playback");
const randomButton = document.querySelector("#random");
const story = document.querySelector("#story");

// Variables for pre-defined arrays
const nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    chosenNoun1.textContent = nouns[noun1Count];
    if (noun1Count < nouns.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
}

function verb_on_click() {
    chosenVerb.textContent = verbs[verbCount];
    if (verbCount < verbs.length - 1) {
        verbCount++;
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    chosenAdjective.textContent = adjectives[adjectiveCount];
    if (adjectiveCount < adjectives.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    chosenNoun2.textContent = nouns2[noun2Count];
    if (noun2Count < nouns2.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
}

function setting_on_click() {
    chosenSetting.textContent = settings[settingCount];
    if (settingCount < settings.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }
}

// Concatenate the user story and display
function playback_on_click() {
    story.textContent = ` ${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}.`;
}

// Grabbing a random element from arrays, concatenate and display
function random_on_click() {
    chosenNoun1.textContent = nouns[getRandomInt(0, nouns.length)];
    chosenVerb.textContent = verbs[getRandomInt(0, verbs.length)];
    chosenAdjective.textContent = adjectives[getRandomInt(0, adjectives.length)];
    chosenNoun2.textContent = nouns2[getRandomInt(0, nouns2.length)];
    chosenSetting.textContent = settings[getRandomInt(0, settings.length)];
    story.textContent = ` ${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}.`;

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// New function to handle the Student Info button click
function studentInfo_on_click() {
    const studentName = `Student name: Flora Bhatt`   
    const studentNumber = ` Student number: 200534094`;
    document.querySelector("#studentName").textContent = studentName;
    document.querySelector("#studentNumber").textContent =  studentNumber;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
document.getElementById("studentInfo").addEventListener("click", studentInfo_on_click);
