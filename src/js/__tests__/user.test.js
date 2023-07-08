import Team from '../user';


test('Создание объекта', () => {
  const bowman = {
    name: 'Лучник',
    type: 'Bowman',
    attack: 40,
    level: 1,
    defence: 10,
    health: 100,
  };
  const swords = {
    name: 'Маг',
    type: 'Swordsman',
    attack: 20,
    level: 1,
    defence: 10,
    health: 100,
  };
  const zavmag = {
    name: 'ЗавМаг',
    type: 'ZavMag',
    attack: 40,
    level: 1,
    defence: 15,
    health: 100,
  };

  const team = new Team([bowman, swords, zavmag]);

  const result = [];

  for (const item of team) {
    result.push(item);
  }

  const correct = [
    {
      name: 'Лучник',
      type: 'Bowman',
      attack: 40,
      level: 1,
      defence: 10,
      health: 100,
    },
    {
      name: 'Маг',
      type: 'Swordsman',
      attack: 20,
      level: 1,
      defence: 10,
      health: 100,
    },
    {
      name: 'ЗавМаг',
      type: 'ZavMag',
      attack: 40,
      level: 1,
      defence: 15,
      health: 100,
    },
  ]
  expect(result).toEqual(correct);
});
