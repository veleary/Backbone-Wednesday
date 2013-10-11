(function(){
	var inventory = new Inventory();
	var inventoryListView = new StoreView({
		collection: inventory,
		el: '#store'
	});
 var cart = new Inventory();
 var shoppingCart = new ShoppingCartView({
 	collection: cart,
 	el: '#cart'
 });

 inventory.add([
		{ name: 'Product 1', price: "$25.00" },
		{ name: 'Product 2', price: "$30.00" }
	]);

	cart.listenTo(userEvents, 'add-to-cart', function(product){
		console.log('Adding', product.get('name'), 'to cart collection');
		this.add(product);
		console.log('New cart size', this.length);
	});

	

})();