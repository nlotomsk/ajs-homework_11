export default class Team {
  constructor() {
    this.characters = new Set();
  }

  [Symbol.iterator]() {
    const chars = this.characters;
    let i = 0;
    return {
      next() {
        i += 1;
        if (i < chars.length) {
          return {
            done: false,
            value: chars[i - 1],
          };
        }
        return { done: true };
      },
    };
  }
}
