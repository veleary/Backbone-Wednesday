(function(){
	window.StoreView = Backbone.View.extend({
		initialize: function(options){

			this.listenTo(this.collection, 'add', this.onProductAdd);
		},

		onProductAdd: function(newProduct){
			newProductView = new ProductView({model: newProduct});
			newProductView.render();
			$(this.el).append(newProductView.el);
		}
	});

})();