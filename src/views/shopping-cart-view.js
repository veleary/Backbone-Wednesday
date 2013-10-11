(function(){
	window.ShoppingCartView = Backbone.View.extend ({

		initialize: function(options){
			this.listenTo(this.collection, 'add', this.onAddToCart);
		},

		onAddToCart: function(product){
			newproductview = new ProductView({model: product});
			newproductview.render();
			$(this.el).append(newproductview.el);
		}
	});
})();