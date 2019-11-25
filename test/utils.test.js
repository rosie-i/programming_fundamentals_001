const utils = require('../app/bookshop_utils');
describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
  test("returns 43.2 when passed 36", () => {
    expect(utils.addVAT(36)).toBe(43.2);
  });
});

describe("utils.getFullName", () => {
  test("returns Jennifer Lopez when passed Jennifer and Lopez", () => {
    expect(utils.getFullName("Jennifer", "Lopez")).toBe("Jennifer Lopez");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 1 when passed 2", () => {
    expect(utils.makeHalfPrice(2)).toBe(1);
  });
});

describe("utils.countBooks", () => {
  test("returns 2 when passed 'Harry Potter' and 'Growth Mindset'", () => {
    expect(utils.countBooks(['Harry Potter', 'Growth Mindset'])).toBe(2);
  });
  test("returns 3 when passed 'Northern Lights', 'Harry Potter' and 'Growth Mindset'", () => {
    expect(utils.countBooks(['Northern Lights', 'Harry Potter', 'Growth Mindset'])).toBe(3);
  });
});

describe("utils.isInStock", () => {
  test("returns true if book quantity is >= 1", () => {
    const book = {
      title: 'The Stone Diaries',
      quantity: 2
    };
    expect(utils.isInStock(book)).toBe(true);
  });
  test("returns false if book quantity is < 1", () => {
    const book = {
      title: 'Mindset',
      quantity: 0
    };
    expect(utils.isInStock(book)).toBe(false);
  });
})

describe("utils.getTotalOrderPrice", () => {
  test("returns total order price of books and VAT", () => {
    expect(utils.getTotalOrderPrice(18, 2)).toBe(43.2);
  });
})