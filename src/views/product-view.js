(function () {
	var productTemplateHtml = $('#templates .product').html();
	var productTemplate = _.template(productTemplateHtml); 
    
    window.ProductView = Backbone.View.extend({

    	events: {
    		'click .add': 'addToCart',
    		'click .remove' : 'removeFromCart'
    	},

    	addToCart: function(e){
    		var newClone = this.model.clone();
    		userEvents.trigger('add-to-cart', newClone );
    	}, 
    	removeFromCart: function(e){
    		var newClone = this.model.remove();
    		userEvents.trigger('add-to-cart', newClone );
    	}, 
	    render: function() {
	      	var newHtml = productTemplate(this.model.toJSON() );
	      	$(this.el).html(newHtml);	      	
	    }
    });

})();
