(function(){
	window.ShoppingCartView = Backbone.View.extend({
		initialize: function(options) {
			this.listenTo(this.collection, 'add', this.onAddToCart);
		},
		onAddToCart: function(product){
			newview = new ProductCartView({model: product});
			newview.render();
			$(this.el).html(newview.el);
		}
	})



})();