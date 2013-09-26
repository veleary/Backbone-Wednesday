(function () {

  var task = new Task({ name: 'make a better todo list' });
  var view = new TaskView({ model: task });
  $('#todo-list').append( view.render().el );

  var taskTwo = new Task({ name: 'study collections' });
  var viewTwo = new TaskView({ model: taskTwo });
  $('#todo-list').append( viewTwo.render().el );

})();
