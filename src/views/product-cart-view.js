(function(){
  var productCartTemplateHtml = $('#templates .cart-view').html();
  var productCartTemplate = _.template(productCartTemplateHtml)
	
	window.ProductCartView = Backbone.View.extend({
		render: function(){
			var newHtml = productCartTemplate( this.model.toJSON() );
			$(this.el).append(newHtml);
		}
	});
})();