(function () {

  // model VIEW
  window.TaskView = Backbone.View.extend({
    // This adds a property `template` to the TaskView prototype,
    // which is accessible inside any view via this.template
    template: _.getTemplate('task'),

    events: {
      'change .complete': 'toggleComplete'
    },

    toggleComplete: function (e) {
      // Grab checked status from the triggering checkbox element
      var isChecked = $(e.currentTarget).is(':checked');

      // Set the new complete status in our task model
      this.model.set({ complete: isChecked });
      console.log('New check status:', this.model.get('complete'));
    },

    render: function () {
      // Generate html using our model for the template data
      var newHtml = this.template( this.model.toJSON() );
      $(this.el).html(newHtml);

      // Toggle chekbox based on our model's complete state
      $(this.el).find('.complete').prop('checked', this.model.get('complete'));

      // Return the view so we other code can chain stuff if it needs to
      return this;
    }
  });

})();
