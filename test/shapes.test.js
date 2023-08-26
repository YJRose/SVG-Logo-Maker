const {Triangle, Circle, Square} = require('../lib/shapes');

//test example for render method
describe('shapes', () => {
    describe('Triangle', () =>{
    it("should have blue color of triangle", () =>{
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});
    describe('Cirle', () =>{
    it("should have blue color of Cirle", () =>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});
describe('Square', () =>{
    it("should have blue color of Square", () =>{
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="blue" />');
    });
});
});
