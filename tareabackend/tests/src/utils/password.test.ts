import { describe, it, expect } from 'vitest';
import { hashPassword, comparePassword } from './password.utils';

describe('Pruebas unitarias para password.utils.ts', () => {
  const password1 = "ClaveUno123!";
  const password2 = "ClaveDos456!";
  
  let hash1: string;
  let hash2: string;

  it('Generación de hashes: cada uno es una cadena no vacía y diferente de su contraseña original', async () => {
    hash1 = await hashPassword(password1);
    hash2 = await hashPassword(password2);

    expect(hash1).toBeTypeOf('string');
    expect(hash1.length).toBeGreaterThan(0);
    expect(hash1).not.toBe(password1);

    expect(hash2).toBeTypeOf('string');
    expect(hash2.length).toBeGreaterThan(0);
    expect(hash2).not.toBe(password2);
  });

  it('Contraseña correcta: comparePassword devuelve true', async () => {
    hash1 = await hashPassword(password1);
    hash2 = await hashPassword(password2);

    const match1 = await comparePassword(password1, hash1);
    const match2 = await comparePassword(password2, hash2);

    expect(match1).toBe(true);
    expect(match2).toBe(true);
  });

  it('Contraseña incorrecta: comparePassword devuelve false', async () => {
    hash1 = await hashPassword(password1);
    hash2 = await hashPassword(password2);

    const mismatch1 = await comparePassword(password2, hash1);
    const mismatch2 = await comparePassword(password1, hash2);

    expect(mismatch1).toBe(false);
    expect(mismatch2).toBe(false);
  });
});