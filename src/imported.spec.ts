import { imported } from './imported';

describe('imported', () => {
  it(`can be called without errors`, () => {
    imported();

    expect(true).toBeTrue(); // part of this is to force Jest-extended to be used
  });
});
