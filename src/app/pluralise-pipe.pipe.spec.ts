import { PluralisePipe } from './pluralise-pipe.pipe';

describe('PluralisePipePipe', () => {
  it('create an instance', () => {
    const pipe = new PluralisePipe();
    expect(pipe).toBeTruthy();
  });

  it('ends in st for items ending 1', () => {
    const pipe = new PluralisePipe();
    const result = pipe.transform(5001);
    expect(result).toBe('5001st');
  });

  it('ends in nd for items ending 2', () => {
    const pipe = new PluralisePipe();
    const result = pipe.transform(6002);
    expect(result).toBe('6002nd');
  });

  it('ends in nd for items ending 3', () => {
    const pipe = new PluralisePipe();
    const result = pipe.transform(6003);
    expect(result).toBe('6003rd');
  });

  it('ends in th for items ending 4', () => {
    const pipe = new PluralisePipe();
    const result = pipe.transform(6004);
    expect(result).toBe('6004th');
  });
});
