import { randomBytes, createDecipheriv, createCipheriv } from 'crypto';

export function encrypt(text: string, secret: string, algorithm = 'aes-256-cbc', iv_length = 16): string {
  const iv = randomBytes(iv_length);
  const cipher = createCipheriv(algorithm, Buffer.from(secret), iv);
  let encrypted = cipher.update(text);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

export function decrypt(text: string, secret: string, algorithm = 'aes-256-cbc'): string {
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = createDecipheriv(algorithm, Buffer.from(secret), iv);

  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}

export default { decrypt, encrypt };
