(function(){
	window.StoreView = Backbone.View.extend({
		initialize: function(options){

			this.listenTo(this.collection, 'add', this.onProductAdd);
			this.listenTo(this.collection, 'remove', this.onProductRemove);
		},

		onProductRemove: function(removedProduct){
			removedProduct.remove({ model: product});
			removedProduct.view.remove();
			
		},

		onProductAdd: function(newProduct){
			newProductView = new ProductView({model: newProduct});
			newProductView.render();
			$(this.el).append(newProductView.el);
		}
	});

})();