import {describe, expect, test} from '@jest/globals';
import getMatchedResults from "./text-matcher";

describe('text matcher module should', () => {
    test('return an array of matched entries', async() => {
        await getMatchedResults('guay').then(data => expect(data).toStrictEqual(['Paraguay', 'Uruguay']));
    });
    test('return an empty array if there are no matches', async() => {
        await getMatchedResults('wakanda').then(data => expect(data).toStrictEqual([]));
    });
    test('return an array of only one element if there is only one match', async() => {
        await getMatchedResults('zambia').then(data => expect(data).toStrictEqual(['Zambia']));
    });
    test('return results regardless of upper/lowercase', async() => {
        await getMatchedResults('zAmBiA').then(data => expect(data).toStrictEqual(['Zambia']));
    });
});
