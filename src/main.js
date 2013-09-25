(function () {

  var task = new Task({ name: 'make a better todo list' });
  var view = new TaskView({ model: task });
  $('#todo-list').append( view.render().el );

})();
