// var product = new Product({ name: 'P1'});
// var productview = new ProductView({ model: product});

// productview.render();
// $('#store').html(productview.el);



// console.log(productview.el);
// console.log(productview.model.get('name'));
(function(){
	var products = new Inventory();
	var cart = new Inventory();
	var shoppingCart = new ShoppingCartView ({
		collection: cart,
		el: '#cart-view'
	});

	var storeview = new StoreView({
		collection: products,
		el: '#store'
	});
	
	cart.listenTo(userEvents, 'add-to-cart', function(product){
		console.log('Adding', product.get('name'), 'to cart collection');
		this.add(product);
		console.log('New cart size', this.length);			
	});

	products.add([
		{name: 'Product 1', price: '15.00' },
		{name: 'Product 2', price: '25.00'}
	]);

})();