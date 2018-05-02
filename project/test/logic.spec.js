import { makeMove, newGame } from '../src/logic';

test('first move works ok', () => {
  const initial = newGame();
  const expected = { state: 'plr1', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: [] };
  const results = makeMove(initial, 2);
  expect(results).toEqual(expected);
  expect(initial).toEqual(newGame()); // testing we didn't mutate entry state
});

// ...more tests to follow here! 

