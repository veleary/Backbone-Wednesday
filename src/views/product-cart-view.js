(function(){
	var cartTemplateHtml = $('#templates .cart-view').html();
	var cartTemplate = _.template(cartTemplateHtml); 
	window.ProductCartView = Backbone.View.extend({
		render: function() {
	      	var newHtml = cartTemplate(this.model.toJSON() );
	      	$(this.el).html(newHtml);	      	
	    }
	});
})();