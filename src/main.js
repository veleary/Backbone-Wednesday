(function () {

  // Instantiate a new collection, initialized with data.
  // NOTE that each object in the following array gets wrapped with a *backbone model*
  window.tasks = new Tasks([
    { name: 'create a todo list' },
    { name: 'add a second task', complete: true },
    { name: 'complete list' }
  ]);

  window.taskListView = new TaskListView({
    collection: tasks,
    el: $('#todo-list')
  });

  taskListView.render();

  tasks.add({ name: 'understand how this task was rendered via collections' });

})();
