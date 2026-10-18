const calculaIdade = require('./calculaIdade');

describe('calculaIdade', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2026, 9, 18));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('pessoa que já fez aniversário este ano deve ter idade completa', () => {
    expect(calculaIdade('2000-03-01')).toBe(26);
  });

  test('pessoa que ainda não fez aniversário este ano deve ter um ano a menos', () => {
    expect(calculaIdade('2000-12-25')).toBe(25);
  });

  test('pessoa que faz aniversário hoje deve ter idade completa', () => {
    expect(calculaIdade('2000-10-18')).toBe(26);
  });

  test('recém-nascido no ano atual deve ter 0 anos', () => {
    expect(calculaIdade('2026-01-01')).toBe(0);
  });
});
