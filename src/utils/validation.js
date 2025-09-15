export const isEmailValid = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');

export const isRequired = (val) => String(val || '').trim().length > 0;

export const isMinLength = (val, min) => String(val || '').trim().length >= min;

export const isEqual = (a, b) => a === b;
