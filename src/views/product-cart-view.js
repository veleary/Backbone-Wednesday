(function(){
  var productCartTemplateHtml = $('#templates .cart-view').html();
  var productCartTemplate = _.template(productCartTemplateHtml)
  var cartPrice = 0; 

	window.ProductCartView = Backbone.View.extend({
		events: {
			'click .remove' : 'removeFromCart'
		},

		removeFromCart: function(){
      userEvents.trigger('remove', this.model);
      this.remove();  
      cartPrice -= this.model.get('price');   
    },

		render: function(){
			var data = this.model.toJSON();
			cartPrice += this.model.get('price');
			var newHtml = productCartTemplate(data);			
			$(this.el).append(newHtml);
		},
	});
})();