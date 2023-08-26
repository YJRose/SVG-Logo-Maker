const shapes = require('./shapes.js');

//test example for render method
describe("shapes", () => {
    it("should have blue color of triangle", () =>{
        const shape = new Triangle;
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});
