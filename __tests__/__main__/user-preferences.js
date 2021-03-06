/* eslint-disable no-undef */
const { showDay, getUserPreferences } = require('../../js/user-preferences');

describe('Preferences Main', () => {
    process.env.NODE_ENV = 'test';

    let days = getUserPreferences();

    test('showDay(year, month, day)', () => {
        expect(showDay(2020, 1, 1)).toBe(days['working-days-saturday']);
        expect(showDay(2020, 1, 2)).toBe(days['working-days-sunday']);
        expect(showDay(2020, 1, 3)).toBe(days['working-days-monday']);
        expect(showDay(2020, 1, 4)).toBe(days['working-days-tuesday']);
        expect(showDay(2020, 1, 5)).toBe(days['working-days-wednesday']);
        expect(showDay(2020, 1, 6)).toBe(days['working-days-thursday']);
        expect(showDay(2020, 1, 7)).toBe(days['working-days-friday']);

    });

});

