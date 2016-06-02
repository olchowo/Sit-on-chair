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
	var headerCount = 1;
	
	headerArrowL.on("click", function() {
		if (headerCount < 1) {
			headerSlides.animate({
				left: "-=800px"
			}, 400);
			headerCount = 2;
		} else {
			headerSlides.animate({
			left: "+=400px"
			}, 400);
			headerCount--;
		};
	});
	
	headerArrowR.on("click", function() {
		if (headerCount > 1) {
			headerSlides.animate({
				left: "+=800px"
			}, 400);
			headerCount = 0;
		} else {
			headerSlides.animate({
			left: "-=400px"
			}, 400);
			headerCount++;
		};
	});
	
	
	//vanishing photo titles in section "s3_products"
	var productPhoto = $(".s3_item");
	var productTitle = $(".article_title");
	
	productPhoto.on("mouseenter", function() {
		$(this).find(productTitle).slideUp(400);
	});
	productPhoto.on("mouseleave", function() {
		$(this).find(productTitle).slideDown(200);
	});
	
	
	//order-form 
	
	var chairModel = $(".chair_model");
	var modelOption = $(chairModel).find("option:not([class=placeholder])");
	var chairColor = $(".chair_color");
	var colorOption = $(chairColor).find("option:not([class=placeholder])");
	var chairTextile = $(".chair_textile");
	var textileOption = $(chairTextile).find("option:not([class=placeholder])");
	
	
	//filling in summary form:
	
	var optionName = function(element) {
		return $(element).data("name");
	}
	
	var optionPrice = function(element) {
		return $(element).data("price");
	};
	
	var orderModel = $(".order_model").find(".option_name");
	var orderModelPrice = $(".order_model").find(".option_cost");
	
	var orderColor = $(".order_model").find(".option_name");
	var orderColorPrice = $(".order_model").find(".option_cost");
	
	var orderTextile = $(".order_model").find(".option_name");
	var orderTextilePrice = $(".order_model").find(".option_cost");
	
	var total = $(".cost_total");
	
	
	//new elements: img for every chair model and color
	var chairImage = $("#order_photo");
	
	var imgBlackEgg = $("<img id='blackEggImage' src='imagesOk/black-egg.jpg' class='black egg'>");
	var imgBlackOval = $("<img id='blackOvalImage' src='imagesOk/black-round.jpg' class='black oval'>");
	var imgBlackWing = $("<img id='blackWingImage' src='imagesOk/black-wing.jpg' class='black wing'>");
	
	var imgGrayEgg = $("<img id='grayEggImage' src='imagesOk/gray-egg.jpg' class='gray egg'>");
	var imgGrayOval = $("<img id='grayOvalImage' src='imagesOk/gray-round.jpg' class='gray oval'>");
	var imgGrayWing = $("<img id='grayWingImage' src='imagesOk/gray-wing.jpg' class='gray wing'>");
	
	var imgPinkEgg = $("<img id='pinkEggImage' src='imagesOk/pink-egg.jpg' class='pink egg'>");
	var imgPinkOval = $("<img id='pinkOvalImage' src='imagesOk/pink-round.jpg' class='pink oval'>");
	var imgPinkWing = $("<img id='pinkWingImage' src='imagesOk/pink-wing.jpg' class='pink wing'>");
	
	var imgOrangeEgg = $("<img id='orangeEggImage' src='imagesOk/orange-egg.jpg' class='orange egg'>");
	var imgOrangeOval = $("<img id='orangeOvalImage' src='imagesOk/orange-round.jpg' class='orange oval'>");
	var imgOrangeWing = $("<img id='orangeWingImage' src='imagesOk/orange-wing.jpg' class='orange wing'>");
	
	chairModel.on("change", function() {
		
		if (modelOption[0].selected) {
			chairImage.empty().append(imgBlackEgg);
			var orderText = optionName(modelOption[0]);
			orderModel.text(orderText);
			var orderNum = optionPrice(modelOption[0]);
			orderModelPrice.text(orderNum);
			
		} else if (modelOption[1].selected) {
			chairImage.empty().append(imgBlackOval);
			var orderText = optionName(modelOption[1]);
			orderModel.text(orderText);
			var orderNum = optionPrice(modelOption[1]);
			console.log(orderNum);
			orderModelPrice.text(orderNum);
		} else {
			chairImage.empty().append(imgBlackWing);
			var orderText = optionName(modelOption[2]);
			orderModel.text(orderText);
			var orderNum = optionPrice(modelOption[2]);
			console.log(orderNum);
			orderModelPrice.text(orderNum);
		}
	});
	
	chairColor.on("change", function() {
		if (modelOption[0].selected) {
			if (colorOption[0].selected) {
				chairImage.empty().append(imgBlackEgg);
			} else if (colorOption[1].selected) {
				chairImage.empty().append(imgGrayEgg);
			} else if (colorOption[2].selected) {
				chairImage.empty().append(imgPinkEgg);
			} else {
				chairImage.empty().append(imgOrangeEgg);
			}
		} else if (modelOption[1].selected) {
			if (colorOption[0].selected) {
				chairImage.empty().append(imgBlackOval);
			} else if (colorOption[1].selected) {
				chairImage.empty().append(imgGrayOval);
			} else if (colorOption[2].selected) {
				chairImage.empty().append(imgPinkOval);
			} else {
				chairImage.empty().append(imgOrangeOval);
			}
		} else {
			if (colorOption[0].selected) {
				chairImage.empty().append(imgBlackWing);
			} else if (colorOption[1].selected) {
				chairImage.empty().append(imgGrayWing);
			} else if (colorOption[2].selected) {
				chairImage.empty().append(imgPinkWing);
			} else {
				chairImage.empty().append(imgOrangeWing);
			}
		}
	});
	
	
	
});
