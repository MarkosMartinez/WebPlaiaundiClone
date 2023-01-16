jQuery(document).ready(function() {
	/* EVENTOS FAQS */			
	jQuery("div.faqs div.pregunta h4.pregunta").click(function() {
		/* Si no esta abierta... */
		if(!jQuery(this).parent().hasClass("abierta")){
			jQuery("div.faqs div.pregunta").removeClass("abierta");
			jQuery(this).parent().addClass("abierta");
		}
		return false;
	});

	jQuery("div.faqs div.pregunta input.cerrar").click(function() {
		jQuery("div.faqs div.pregunta").removeClass("abierta");
		return false;
	});
	
});

