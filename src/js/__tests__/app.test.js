import {Character, Bowerman, Daemon, Magician, Undead, Zombie, Swordsman} from '../app';

test.each(
  [
    [Daemon, { attack: 12, defence: 48, health: 100, level: 2, name: "Jack" }],
    [Bowerman, { name: 'Jack', health: 100, level: 2, attack: 30, defence: 30 }],
    [Magician, { name: 'Jack', health: 100, level: 2, attack: 12, defence: 48 }],
    [Undead, { name: 'Jack', health: 100, level: 2, attack: 48, defence: 12 }],
    [Zombie, { name: 'Jack', health: 100, level: 2, attack: 30, defence: 30 }],
    [Swordsman, { name: 'Jack', health: 100, level: 2, attack: 48, defence: 12 }],
  ],
)('get object', (func, result) => {
  const character = new func('Jack');
  character.levelUp();
  expect(character).toEqual(result);
});

test.each([Bowerman, Daemon, Magician, Undead, Zombie, Swordsman])('throw error', (func) => {
  const character = new func('Jack');
  character.health = 0;

  expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего персонажа');
});
