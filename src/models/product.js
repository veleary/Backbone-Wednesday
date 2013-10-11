(function () {

  window.Product = Backbone.Model.extend({
    // defaults: {
    //   foo: 'default val'
    // }

  });

  window.Inventory = Backbone.Collection.extend({
  	model: Product
  });

})();
