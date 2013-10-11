(function(){
	var inventory = new Inventory();
	var inventoryListView = new StoreView({
		collection: inventory,
		el: '#store'
	});


	inventory.add([
		{name: 'Product 1', price: "$25.00" },
		{name: 'Product 2', price: "$30.00" }
	]);

})();