const camelize = require('./1');

test('background-color', () => {
    expect(camelize('background-color')).toBe('backgroundColor');
});

test('list-style-image', () => {
    expect(camelize('list-style-image')).toBe('listStyleImage');
});

test('Background-color', () => {
    expect(camelize('Background-color')).toBe('backgroundColor');
});
test('BaCkgrGRound-color', () => {
    expect(camelize('BaCkground-color')).toBe('backgroundColor');
});
test('ПУСТАЯ СТРОЧКА', () => {
    expect(camelize('')).toBe('');
});

test('BaCkgrGRound-coLoR', () => {
    expect(camelize('BaCkground-color')).toBe('backgroundColor');
});