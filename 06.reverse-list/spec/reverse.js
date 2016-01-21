describe('List', function() {
  'use strict';

  var list;

  beforeEach(function() {
    list = new List();
  });

  it('should reverse the list', function() {
    var data = [1, 2, 3, 4, 5];
    expect(list.reverseList(data)).toBe([5, 4, 3, 2, 1]);
  });

  it('should cover invalid values', function() {
    expect(list.reverseList([])).toBe([]);
    expect(list.reverseList(null)).toBe([]);
    expect(list.reverseList(1)).toBe([1]);
    expect(list.reverseList(true)).toBe([true]);
    expect(list.reverseList('list')).toBe(['list']);
  });

});