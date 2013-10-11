(function(){
	window.ShoppingCartView = Backbone.View.extend ({

		initialize: function(options){
			this.listenTo(this.collection, 'add', this.onAddToCart);
			this.listenTo(userEvents, 'removeFromCart', this.removeFromCart);
		},

		removeFromCart: function (product) {
			this.collection.remove(product);
		},

		onAddToCart: function(product){
			newproductview = new ProductCartView({model: product});
			newproductview.render();
			$(this.el).append(newproductview.el);
		}
	});
})();