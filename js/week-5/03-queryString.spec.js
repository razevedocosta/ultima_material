const {queryString} = require('./03-queryString');

describe('Transform object to query string', () => {
    it('should create a valid query string from an object', () => {
        const obj = {
            name: 'Rodrigo',
            lastname: 'Costa'
        };

        expect(queryString(obj)).toBe(
            'name=Rodrigo&lastname=Costa'
        );
    });

    it('should create a valid query string from an array', () => {
        const obj = {
            name: 'Rodrigo',
            lastname: ['Azevedo','Costa']
        };

        expect(queryString(obj)).toBe(
            'name=Rodrigo&lastname=Azevedo,Costa'
        );
    });

    it('should create a valid query string from an object', () => {
        const obj = {
            name: 'Rodrigo',
            latname: {
                first: 'Azevedo',
                second: 'Costa'
            }
        };

        expect(() => {
            queryString(obj);
        }).toThrowError();
    });

});