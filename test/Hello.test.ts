import { Aygo } from '../src'

test('Say hello', () => {
    expect(Aygo.sayHello()).toBe('Hello !');
});