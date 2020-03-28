const generationUniqueId = require('../../src/util/generationUniqueId');

describe('Generate Unique ID', () => {
    it('shoud generation an unique ID', () => {
        const id = generationUniqueId();
        
        expect(id).toHaveLength(8);
    });
});