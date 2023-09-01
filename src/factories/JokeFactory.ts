const jokes = [
  "Why did the developer quit his job? He didn't get arrays.",
  "What do you call a fish with no eyes? Fsh.",
  "Why did the JavaScript developer get fired? He kept using console.log() instead of alert().",
  "What do you call a programmer who doesn't code? A manager.",
];

export class JokeFactory {
  public static create = (): [string, string] => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];

    return [joke.split("?")[0], joke.split("?")[1]];
  };
}
