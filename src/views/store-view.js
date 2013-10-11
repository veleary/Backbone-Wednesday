(function(){
	window.StoreView = Backbone.View.extend({
		initialize: function(options){
			
			this.listenTo(this.collection, 'add', onProductAdd);
		},

		onProductAdd: function(newProduct){
			var newProductView = new ProductView({model: newProduct});
			newProductView.render();
			$(this.el).html(newProductView.el);
		}
	});

})();