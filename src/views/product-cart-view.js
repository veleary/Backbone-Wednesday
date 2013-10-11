(function(){
  var productCartTemplateHtml = $('#templates .cart-view').html();
  var productCartTemplate = _.template(productCartTemplateHtml)
	
	window.ProductCartView = Backbone.View.extend({
		events: {
			'click .remove' : 'removeFromCart'
		},

		removeFromCart: function(){
      userEvents.trigger('remove', this.model);
      this.remove();      
    },

		render: function(){
			var newHtml = productCartTemplate( this.model.toJSON() );
			$(this.el).append(newHtml);
		}
	});
})();