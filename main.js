// Object holding 3 arrays, message will be generated from one part of each array.
const message = {
    characters: ['Makunouchi Ippo', 'Rock Lee', 'Subaru Natsuki', 'Vegeta', 'Rengoku', 'Natsu Dragoneel', 'Endeavor', 'Lawliet Ryuzaki', 'Erza Scarlet', 'Levi Ackerman'],
    songs: [
        'Throne by Bring Me The Horizon',
        'I Am Above by In Flames',
        'Black Flame by Bury Tomorrow',
        'Angel in Disgrace by The Raven Age',
        'Before I Forget by Slipknot',
        'Forgotten by Linkin Park',
        'Pressure by Divide Music',
        'Heart of The Night by Divide Music',
        'The Only Thing They Fear Is You by Mick Gordon',
        'Faint by Linkin Park'
    ],
    quotes: [
        "Be yourself; everyone else is already taken. ― Oscar Wilde",
        "Be the change that you wish to see in the world. ― Mahatma Gandhi",
        "All our dreams can come true, if we have the courage to pursue them. — Walt Disney",
        "The secret of getting ahead is getting started. — Mark Twain",
        "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life, and that is why I succeed. — Mark Twain",
        "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. - Mary Kay Ash",
        "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
        "It's hard to beat a person who never gives up. - Babe Ruth",
        "We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes―understanding that failure is not the opposite of success, it's part of success. - Arianna Huffington",
        "Everything you can imagine is real. - Pablo Picasso"
    ]
};

let motivation = [];

// Generates a random number between 0 and the length of the array
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

// Generates the message
function generateMessage(){
    // Loops for each property
    for(i = 0; i < message.length; i++) {
        // Generates a random option for each property
        let option = generateRandomNumber(message[i].length);
        // Adds the chosen messages to the final array, changing the context for what property is being displayed
        switch (i) {
            case 0:
                motivation.push(`Your inspirational anime character for the day is: ${message[i][option]}.`);
                break;
            case 1:
                motivation.push(`Your motivational rock song for the day is: ${message[i][option]}.`);
                break;
            case 2:
                motivation.push(`Your motivational quote for the day is: ${message[i][option]}.`);
                break;
            default:
                motivation.push('There\'s no more motivation for today!');
                break;
        }
    }
}

