import { encrypt, decrypt } from './two-way-encrypt';

describe('Two Way Encrypt', () => {
  const secret = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

  it('Should encrypt', () => {
    const something = 'hello world';

    const encrypted = encrypt(something, secret);

    expect(encrypted).not.toEqual(something);
  });

  it('Should decrypt', () => {
    const something = 'hello world';

    const encrypted = encrypt(something, secret);
    const decrypted = decrypt(encrypted, secret);

    expect(encrypted).not.toEqual(something);
    expect(decrypted).toEqual(something);
  });

  it('Should be salted', () => {
    const something = 'hello world';

    const encrypted = encrypt(something, secret);
    const anotherEncrypted = encrypt(encrypted, secret);

    expect(encrypted).not.toEqual(something);
    expect(anotherEncrypted).not.toEqual(encrypted);
  });
});
