(function () {
  var productTemplateHtml = $('#templates .product').html();
  var productTemplate = _.template(productTemplateHtml)
  
  window.ProductView = Backbone.View.extend({
    events:{
      'click .add' : 'addToCart',
      // 'click .remove' : 'removeFromCart'
    },

    addToCart: function(){
      var newClone = this.model.clone();
      userEvents.trigger( 'add-to-cart', newClone, 7)
    },

    render: function(){
      var newHtml = productTemplate(this.model.toJSON() );
      $(this.el).html(newHtml);
    }
  });

})();
