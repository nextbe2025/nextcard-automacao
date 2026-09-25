import { LeadField } from '@/data/lead-forms';

// Shared by the form (instant feedback) and the API route (the real protection: never trust the browser).

const validDdd = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89,
  91, 92, 93, 94, 95, 96, 97, 98, 99,
]);

const controlChars = /[\u0000-\u001F\u007F-\u009F\u200B-\u200F\u2028-\u202E\u2060-\u206F\uFEFF]/g;
const nameChars = /[^\p{L}\s'-]/gu;
const nameInvalid = /[^\p{L}\s'-]/u;
const freeTextChars = /[^\p{L}\p{N} .,()/&+-]/gu;
const freeTextInvalid = /[^\p{L}\p{N} .,()/&+-]/u;
const emailRe =
  /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*\.[a-z]{2,24}$/;

const messageChars = /[^\p{L}\p{N} .,;:!?()/&+%@#'"-]/gu;
const messageInvalid = /[^\p{L}\p{N} .,;:!?()/&+%@#'"-]/u;

export const limits = { nome: 80, email: 254, text: 60, number: 6, message: 600 } as const;

export const cleanText = (value: unknown, max = 300) =>
  typeof value === 'string'
    ? value.normalize('NFKC').replace(controlChars, '').replace(/\s+/g, ' ').trim().slice(0, max)
    : '';

export const maskPhone = (value: string) => {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) {
    return d;
  }
  if (d.length <= 6) {
    return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  }
  if (d.length <= 10) {
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  }
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

// Live filtering while the person types: characters that are not allowed simply do not appear.
export const filterInput = (field: LeadField, value: string) => {
  switch (field.type) {
    case 'text':
      return field.name === 'nome'
        ? value
            .normalize('NFKC')
            .replace(nameChars, '')
            .replace(/\s{2,}/g, ' ')
            .slice(0, limits.nome)
        : value
            .normalize('NFKC')
            .replace(freeTextChars, '')
            .replace(/\s{2,}/g, ' ')
            .slice(0, limits.text);
    case 'textarea':
      return value.normalize('NFKC').replace(/\s+/g, ' ').replace(messageChars, '').slice(0, limits.message);
    case 'email':
      return value.replace(/\s/g, '').toLowerCase().slice(0, limits.email);
    case 'tel':
      return maskPhone(value);
    case 'number':
      return value.replace(/\D/g, '').slice(0, limits.number);
    default:
      return value;
  }
};

export type FieldResult = { value: string; error?: string };

export const validateField = (field: LeadField, raw: unknown): FieldResult => {
  const value = cleanText(raw);
  const empty = value === '';

  if (empty) {
    return { value: '', error: field.required ? 'Campo obrigatório' : undefined };
  }

  switch (field.type) {
    case 'select': {
      return field.options?.includes(value) ? { value } : { value: '', error: 'Escolha uma das opções' };
    }
    case 'textarea': {
      const lowered = value.toLowerCase();
      if (
        value.length < 5 ||
        /^[=+@-]/.test(value) ||
        value.length > limits.message ||
        lowered.includes('http') ||
        lowered.includes('www.') ||
        messageInvalid.test(value)
      ) {
        return { value: '', error: 'Escreva uma mensagem com letras, números e pontuação simples, sem links' };
      }
      return { value };
    }
    case 'number': {
      return /^\d{1,6}$/.test(value) ? { value } : { value: '', error: 'Use apenas números' };
    }
    case 'tel': {
      const digits = value.replace(/\D/g, '');
      const ddd = Number(digits.slice(0, 2));
      const okLength = digits.length === 10 || digits.length === 11;
      const okNumber = digits.length === 11 ? digits[2] === '9' : /[2-5]/.test(digits[2] ?? '');
      if (!okLength || !validDdd.has(ddd) || !okNumber) {
        return { value: '', error: 'Informe um telefone válido com DDD' };
      }
      return { value: maskPhone(digits) };
    }
    case 'email': {
      const email = value.toLowerCase();
      if (email.length > limits.email || email.includes('..') || !emailRe.test(email)) {
        return { value: '', error: 'Informe um e-mail válido (com @ e domínio)' };
      }
      return { value: email };
    }
    default: {
      if (field.name === 'nome') {
        const letters = value.replace(/[^\p{L}]/gu, '');
        if (nameInvalid.test(value) || letters.length < 2 || value.length > limits.nome) {
          return { value: '', error: 'Use apenas letras no nome' };
        }
        return { value };
      }
      // free text (ex.: sistema/PDV): no links, no symbols that could carry scripts or spreadsheet formulas
      const lowered = value.toLowerCase();
      if (
        value.length > limits.text ||
        /^[=+@-]/.test(value) ||
        lowered.includes('http') ||
        lowered.includes('www.') ||
        freeTextInvalid.test(value)
      ) {
        return { value: '', error: 'Use apenas letras, números e pontuação simples' };
      }
      return { value };
    }
  }
};
