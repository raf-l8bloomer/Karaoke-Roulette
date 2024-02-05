const data = [
    "4 Chair Turn",
    "Opening a Sonny Angel you already have",
    "Rolling a 7 in Catan",
    "Audition for your vape back",
    "This would kill a victorian child",
    "You have to poo but there's 12 other people in the adjacent room",
    "You've been chosen as tribute for The Hunger Games",
    "Revenge Era",
    "The last cigarette in the box",
    "Stuck in an elevator with your crush",
    "You've just discovered electricity",
    "Finding the perfect meme for the groupchat before the someone else replies",
    "Voicemail song",
    "Empty parking lot acoustics"
]

const skippedPrompts = [];
const completedPrompts = [];
let randomPromptIndex = 0

function randomPrompt(arr){
    randomPromptIndex = Math.floor(Math.random() * arr.length);
    return arr[randomPromptIndex]
}

function sangPrompt(arr, index){
    completedPrompts.push(arr[index]);
}


const spin = document.querySelector('#spin');
let prompt = document.querySelector('.prompt');
let currentPrompt;


spin.addEventListener('click', () => {
    currentPrompt = "";
    prompt.innerHTML = "";
    currentPrompt += randomPrompt(data);
    prompt.innerHTML += currentPrompt;
})

const complete = document.querySelector('#complete');



complete.addEventListener('click', () => {
    sangPrompt(data, randomPromptIndex);
    data.splice(randomPromptIndex,1)

    console.log(`These are completed prompts: ${completedPrompts} `);
    console.log(`What's left of data prompts ${data} `)
})

/*
Click spin
get random prompt
Sing to current prompted song
Click complete
Remove current prompted song from array
add current prompted song to completed array
*/





