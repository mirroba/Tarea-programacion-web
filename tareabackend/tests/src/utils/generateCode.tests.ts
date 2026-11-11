import { describe, it, expect } from 'vitest';
import { generateSixDigitCode } from './generateCode.utils.ts';

describe('Pruebas unitarias para generateCode.utils.ts', () => {
  it('Debe generar un codigo de 6 digitos exactamente', () => {
    const code = generateSixDigitCode();
    // Valida sring
    expect(code).toBeTypeOf('string');
    // Valida longitud
    expect(code.length).toBe(6);
    // Valida num
    expect(code).toMatch(/^[0-9]{6}$/);
});

it('Debe generar codigos distintos en llamadas sucesivas', () => {
    const code1 = generateSixDigitCode();
    const code2 = generateSixDigitCode();
    expect(code1).toBeDefined();
    expect(code2).toBeDefined();
  });
});