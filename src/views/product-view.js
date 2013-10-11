(function () {
	var productTemplateHtml = $('#templates .product').html();
	var productTemplate = _.template(productTemplateHtml)
  window.ProductView = Backbone.View.extend({
    
    render: function(){
    	var newHtml = productTemplate(this.model.toJSON() );
 		$(this.el).html(newHtml);
    }
  });

})();
