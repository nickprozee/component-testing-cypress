const jokes = [
  "Why did the developer quit his job? He didn't get arrays.",
  "What do you call a fish with no eyes? Fsh.",
  "Why did the JavaScript developer get fired? He kept using console.log() instead of alert().",
  "Why did the SQL developer get fired? He kept giving everyone CTEs.",
  "What do you call a programmer who doesn't code? A manager.",
  "Why did the developer get lost in the forest? He couldn't find the main function.",
  "What do you call a programmer who doesn't use tabs? A space cadet.",
  "Why did the developer get fired from the lighthouse? He kept putting out the on lights.",
  "What do you call a programmer who doesn't like semicolons? A loose cannon.",
  "Why did the developer get fired from the zoo? He kept giving the animals treats in the wrong enclosure.",
  "What do you call a programmer who doesn't like recursion? A loopy person.",
  "Why did the developer get fired from the circus? He kept giving the elephants NullPointerExceptions.",
  "What do you call a programmer who doesn't like arrays? A hash head.",
  "Why did the developer get fired from the library? He kept checking out books he didn't return.",
  "What do you call a programmer who doesn't like functions? A lazybones.",
  "Why did the developer get fired from the restaurant? He kept giving everyone the wrong orders.",
  "What do you call a programmer who doesn't like variables? A constant pain.",
  "Why did the developer get fired from the hospital? He kept giving everyone the wrong diagnosis.",
  "What do you call a programmer who doesn't like loops? A linear thinker.",
  "Why did the developer get fired from the airport? He kept crashing the system.",
  "What do you call a programmer who doesn't like debugging? A happy camper.",
  "Why did the developer get fired from the amusement park? He kept giving everyone the wrong rides.",
  "What do you call a programmer who doesn't like comments? A cryptic person.",
  "Why did the developer get fired from the bank? He kept giving everyone the wrong PIN numbers.",
  "What do you call a programmer who doesn't like object-oriented programming? A procedural thinker.",
  "Why did the developer get fired from the school? He kept giving everyone the wrong answers.",
  "What do you call a programmer who doesn't like unit tests? A lazy tester.",
  "Why did the developer get fired from the hotel? He kept giving everyone the wrong rooms.",
  "What do you call a programmer who doesn't like Git? A messy person.",
  "Why did the developer get fired from the store? He kept giving everyone the wrong change.",
  "What do you call a programmer who doesn't like documentation? A mystery writer.",
];

export class JokeFactory {
  public static create = (): [string, string] => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];

    return [joke.split("?")[0], joke.split("?")[1]];
  };
}
