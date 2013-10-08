(function () {

  // model VIEW
  window.TaskView = Backbone.View.extend({

    // By default, a view creates an empty div for its element.
    // This tells backbone to set a class name on that empty div.
    className: 'task',

    // This adds a property `template` to the TaskView prototype,
    // which is accessible inside any view via this.template
    template: _.getTemplate('task'),

    events: {
      'change .check': 'toggleComplete'
    },

    toggleComplete: function (e) {
      // Grab checked status from the triggering checkbox element
      var isChecked = $(e.currentTarget).is(':checked');
      console.log('New check status:', this.model.get('complete'));

      // Set the new complete status in our task model
      this.model.set({ complete: isChecked });

      // Toggle the 'done' class so we can properly style via css
      $(this.el).toggleClass('done', isChecked);
    },

    render: function () {
      // Generate html using our model for the template data
      var newHtml = this.template( this.model.toJSON() );
      $(this.el).html(newHtml);

      // Toggle the 'done' class and checkbox based on our model's complete state
      var isChecked = this.model.get('complete');
      $(this.el).find('.check').prop('checked', isChecked);
      $(this.el).toggleClass('done', isChecked);

      // Return the view so we other code can chain stuff if it needs to
      return this;
    }
  });

})();
