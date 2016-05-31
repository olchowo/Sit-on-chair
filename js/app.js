$(function() {
	
	//drop-down menu in section "s1_top"
	var aboutUs = $(".navi_about");
	var dropAboutUs = $(".about_menu");
	
	aboutUs.on("click", function() {
		$(dropAboutUs).slideToggle(300);		
	});
	
	
	//slider in section "s2_header"
	var headerArrowL = $("#arrow_left");
	var headerArrowR = $("#arrow_right");
	var headerSlides = $(".chair-slides").find("li");
	var headerCount = 0;
	
	headerArrowL.on("click", function() {
		console.log("tra-la-la");
		headerCount++;
		if (headerCount > 2) {
			headerSlides.animate({
				left: "+=800px"
			}, 400);
			headerCount = 0;
		} else {
			headerSlides.animate({
			left: "-=400px"
			}, 400);
		};
	});
	
	/* THIS PART NEEDS FIXING:
	headerArrowR.on("click", function() {
		console.log("pam-pa-ram");
		
		if (headerCount > 1) {
			headerSlides.animate({
				right: "-=800px"
			}, 400);
			headerCount = 2;
		} else {
			headerSlides.animate({
			right: "+=400px"
			}, 400);
			headerCount--;
		};
	});
	*/
	
	
	//vanishing photo titles in section "s3_products"
	var productPhoto = $(".s3_item");
	var productTitle = $(".article_title");
	
	productPhoto.on("mouseenter", function() {
		$(this).find(productTitle).slideUp(400);
	});
	productPhoto.on("mouseleave", function() {
		$(this).find(productTitle).slideDown(200);
	});
	
});
