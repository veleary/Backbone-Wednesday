describe("Task", function () {
  var task;

  beforeEach(function () {
    task = new Task({ name: 'default task name' });
  });

  it("has a default complete equal to false", function () {
    expect( task.get('complete') ).toEqual(false);
  });

});
