(function () {

  // Instantiate a new collection, initialized with data.
  // NOTE that each object gets wrapped with a *backbone model*
  window.tasks = new Tasks([
    { name: 'create a todo list' },
    { name: 'check boxes', complete: true },
    { name: 'complete list' }
  ]);

  window.taskListView = new TaskListView({
    collection: tasks,
    el: $('#todo-list')
  });

  taskListView.render();

  tasks.add({ name: 'newly added task' });

})();
