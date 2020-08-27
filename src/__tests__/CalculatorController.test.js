import CalculatorController from '../CalculatorController.js';

describe('Basic Operations', () => {
    it('Sum 1 + 1 and return 2', async () => {
        expect((new CalculatorController().run(`1+1`))).toBe(2);
    });

    it('Multiply 10 * 10 and return 100', async () => {
        expect((new CalculatorController()).run('10*10')).toBe(100);
    });

    it('Dividy 10 / 2 and return 5', async () => {
        expect((new CalculatorController()).run('10/2')).toBe(5);
    });

    it('Subtract 3 from 10 and return 7', async () => {
        expect((new CalculatorController()).run('10-3')).toBe(7);
    });
});

describe('Test division by zero', () => {
    it('Divides 1 by zero and return positive infinite', async () => {
        expect((new CalculatorController()).run('1/0')).toBe(Infinity);
    });

    it('Divided -1 vy 0 and return negative infinite', async () => {
        expect((new CalculatorController()).run('-1/0')).toBe(-Infinity);
    });
});

describe('test mock', () => {
    it('Should test mock 7', async () => {
        const fn = jest.fn();
        fn.mockReturnValue(7);
        expect(fn()).toBe(7);
        expect(fn.mock.calls[0][0]).toBe(undefined);
    });
});