(function () {

  // collection VIEW
  // You should use "ListView" in your collection view names
  window.TaskListView = Backbone.View.extend({

    initialize: function (options) {
      // Assign a new view to each model in the collection
      this.collection.each(function (taskModel) {
        taskModel.view = new TaskView({ model: taskModel });
      });
      // Callback our assignNewTaskView function
      // whenever our collection gets a new task.
      this.listenTo(this.collection, 'add', this.assignNewTaskView);
    },

    assignNewTaskView: function (taskModel) {
      // Create a new view and assign it to the task model
      taskModel.view = new TaskView({ model: taskModel });
      // Render the new view and add it to our element
      $(this.el).append( taskModel.view.render().el );
    },

    render: function () {
      var self = this;
      $(this.el).empty();

      // Render each task view and append its element to our own element.
      this.collection.each(function (taskModel) {
        $(self.el).append( taskModel.view.render().el );
      });
    }

  });

})();
