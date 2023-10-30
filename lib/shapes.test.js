

const Shape = require('./shapes')


describe("Shape Render Tests", () => {
  it("Triangle should render the color properly", () => {
    const triangle = new Shape.Triangle('polygon', 'red');

    expect(triangle.render()).toEqual('<polygon points="150 0, 300 200, 0 200" fill="red" />');
  })

  it("Square should render the color properly", () => {
    const square = new Shape.Square('polygon', 'red');

    expect(square.render()).toEqual('<polygon points="0 0, 0 300, 200 300, 200 0" fill="red" />');
  })

  it("Circle should render the color properly", () => {
    const circle = new Shape.Circle('circle', 'red');

    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  })
})
