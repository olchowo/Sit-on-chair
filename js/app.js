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
	
	var orderForm = $(".order_form");
	var selectTransport = $("#transport");
	var transportCost = $(".order_transport").find(".option_cost");
	
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
	
	var orderColor = $(".order_color").find(".option_name");
	var orderColorPrice = $(".order_color").find(".option_cost");
	
	var orderTextile = $(".order_textile").find(".option_name");
	var orderTextilePrice = $(".order_textile").find(".option_cost");
	
	var changeText = function(index, option, order, price) {
		var orderText = optionName(option[index]);
		order.text(orderText);
		var orderNum = optionPrice(option[index]);
		price.text(orderNum);
	};
	
	chairModel.on("change", function() {
		if (modelOption[1].selected) {
			changeText(1, modelOption, orderModel, orderModelPrice);
		} else if (modelOption[2].selected) {
			changeText(2, modelOption, orderModel, orderModelPrice);
		} else {
			changeText(0, modelOption, orderModel, orderModelPrice);
		}
	});
	
	chairColor.on("change", function() {
		if (colorOption[1].selected) {
			changeText(1, colorOption, orderColor, orderColorPrice);
		} else if (colorOption[2].selected) {
			changeText(2, colorOption, orderColor, orderColorPrice);
		} else if (colorOption[3].selected) {
			changeText(3, colorOption, orderColor, orderColorPrice);
		} else {
			changeText(0, colorOption, orderColor, orderColorPrice);
		}
	});
	
	chairTextile.on("change", function() {
		if (textileOption[1].selected) {
			changeText(1, textileOption, orderTextile, orderTextilePrice);
		} else if (textileOption[2].selected) {
			changeText(2, textileOption, orderTextile, orderTextilePrice);
		} else {
			changeText(0, textileOption, orderTextile, orderTextilePrice);
		}
	});
	
	var total = $(".cost_total");
	
	orderForm.on("change", function() {
		var currentModelPrice = orderModelPrice.text();
		var currentTextilePrice = orderTextilePrice.text();
		var currentTotal = +currentModelPrice + +currentTextilePrice;
		if (selectTransport.is(":checked")) {
			var transportPrice = 50;
			transportCost.text(transportPrice);
			currentTotal = +currentTotal + +transportPrice;
		} else {
			transportCost.text("0");
		};
		total.text(currentTotal);
	});
	
	
	
	//new elements: img for every chair model and color
	var chairImage = $("#order_photo");
	
	var imgBlackEgg = $("<img id='blackEggImage' src='imagesOk/black-egg.jpg' data-model='Egg' data-color='Black'>");
	var imgBlackOval = $("<img id='blackOvalImage' src='imagesOk/black-round.jpg' data-model='Oval' data-color='Black'>");
	var imgBlackWing = $("<img id='blackWingImage' src='imagesOk/black-wing.jpg' data-model='Wing' data-color='Black'>");
	
	var imgGrayEgg = $("<img id='grayEggImage' src='imagesOk/gray-egg.jpg' data-model='Egg' data-color='Gray'>");
	var imgGrayOval = $("<img id='grayOvalImage' src='imagesOk/gray-round.jpg' data-model='Oval' data-color='Gray'>");
	var imgGrayWing = $("<img id='grayWingImage' src='imagesOk/gray-wing.jpg' data-model='Wing' data-color='Gray'>");
	
	var imgPinkEgg = $("<img id='pinkEggImage' src='imagesOk/pink-egg.jpg' data-model='Egg' data-color='Pink'>");
	var imgPinkOval = $("<img id='pinkOvalImage' src='imagesOk/pink-round.jpg' data-model='Oval' data-color='Pink'>");
	var imgPinkWing = $("<img id='pinkWingImage' src='imagesOk/pink-wing.jpg' data-model='Wing' data-color='Pink'>");
	
	var imgOrangeEgg = $("<img id='orangeEggImage' src='imagesOk/orange-egg.jpg' data-model='Egg' data-color='Orange'>");
	var imgOrangeOval = $("<img id='orangeOvalImage' src='imagesOk/orange-round.jpg' data-model='Oval' data-color='Orange'>");
	var imgOrangeWing = $("<img id='orangeWingImage' src='imagesOk/orange-wing.jpg' data-model='Wing' data-color='Orange'>");
	
	orderForm.on("change", function() {
		if (modelOption[1].selected) {
			if (colorOption[1].selected) {
				chairImage.empty().append(imgGrayOval);
			} else if (colorOption[2].selected) {
				chairImage.empty().append(imgPinkOval);
			} else if (colorOption[3].selected) {
				chairImage.empty().append(imgOrangeOval);
			} else {
				chairImage.empty().append(imgBlackOval);
			}
		} else if (modelOption[2].selected) {
			if (colorOption[1].selected) {
				chairImage.empty().append(imgGrayWing);
			} else if (colorOption[2].selected) {
				chairImage.empty().append(imgPinkWing);
			} else if (colorOption[3].selected) {
				chairImage.empty().append(imgOrangeWing);
			} else {
				chairImage.empty().append(imgBlackWing);
			}
		} else {
			if (colorOption[1].selected) {
				chairImage.empty().append(imgGrayEgg);
			} else if (colorOption[2].selected) {
				chairImage.empty().append(imgPinkEgg);
			} else if (colorOption[3].selected) {
				chairImage.empty().append(imgOrangeEgg);
			} else {
				chairImage.empty().append(imgBlackEgg);
			}
		}
	});	
	
	//all this code below those are my attempts to write a function, which can select one image from above on dataset walue basis -- an attach only thic selected one to the website
	//so there won't be a need to change event if/else statment with every new image that may be added in the future
	
	//strike-1:
	/*
	var allImages = [imgBlackEgg, imgBlackOval, imgBlackWing, imgGrayEgg, imgGrayOval, imgGrayWing, imgPinkEgg, imgPinkOval, imgPinkWing, imgOrangeEgg, imgOrangeOval, imgOrangeWing];
	
	var showPhoto = function(theModel, theColor) {
		var findPhoto = function(allImages) {
			var findModel = [];
			for (var i=0; i<allImages.length; i++) {
				if (allImages[i].data("model") === theModel) {
					findModel.push(allImages[i])
				}
				return findModel;
			};
			
			for (var j=0; j<findModel.length; j++) {
				if (findModel[j].data("color") === theColor) {
					return findModel[j];
				}
			}
			
		};
		//chairImage.empty().append(findPhoto);
		
	};
	*/
	
	//strike-2:
	/*
	var imgBlackEgg = $("<img id='blackEggImage' src='imagesOk/black-egg.jpg' data-model='Egg' data-color='Black'>");
	var imgBlackOval = $("<img id='blackOvalImage' src='imagesOk/black-round.jpg' data-model='Oval' data-color='Black'>");
	var imgBlackWing = $("<img id='blackWingImage' src='imagesOk/black-wing.jpg' data-model='Wing' data-color='Black'>");
	
	var imgGrayEgg = $("<img id='grayEggImage' src='imagesOk/gray-egg.jpg' data-model='Egg' data-color='Gray'>");
	var imgGrayOval = $("<img id='grayOvalImage' src='imagesOk/gray-round.jpg' data-model='Oval' data-color='Gray'>");
	var imgGrayWing = $("<img id='grayWingImage' src='imagesOk/gray-wing.jpg' data-model='Wing' data-color='Gray'>");
	
	var imgPinkEgg = $("<img id='pinkEggImage' src='imagesOk/pink-egg.jpg' data-model='Egg' data-color='Pink'>");
	var imgPinkOval = $("<img id='pinkOvalImage' src='imagesOk/pink-round.jpg' data-model='Oval' data-color='Pink'>");
	var imgPinkWing = $("<img id='pinkWingImage' src='imagesOk/pink-wing.jpg' data-model='Wing' data-color='Pink'>");
	
	var imgOrangeEgg = $("<img id='orangeEggImage' src='imagesOk/orange-egg.jpg' data-model='Egg' data-color='Orange'>");
	var imgOrangeOval = $("<img id='orangeOvalImage' src='imagesOk/orange-round.jpg' data-model='Oval' data-color='Orange'>");
	var imgOrangeWing = $("<img id='orangeWingImage' src='imagesOk/orange-wing.jpg' data-model='Wing' data-color='Orange'>");
	
	var showPhoto = function(model, color) {
		var findPhoto = $("img").find("img[data-model=model]").find("img[data-color=color]");
		chairImage.empty().append(findPhoto);
	};
	*/
	
	//and new event code:
	/*
	orderForm.on("change", function() {
		if (modelOption[1].selected) {
			if (colorOption[1].selected) {
				showPhoto("Oval", "Gray");
			} else if (colorOption[2].selected) {
				showPhoto("Oval", "Pink");
			} else if (colorOption[3].selected){
				showPhoto("Oval", "Orange");
			} else {
				showPhoto("Oval", "Black");
			}
		} else if (modelOption[2].selected) {
			if (colorOption[1].selected) {
				showPhoto("Wing", "Gray");
			} else if (colorOption[2].selected) {
				showPhoto("Wing", "Pink");
			} else if (colorOption[3].selected){
				showPhoto("Wing", "Orange");
			} else {
				showPhoto("Wing", "Black");
			}
		} else {
			if (colorOption[1].selected) {
				showPhoto("Egg", "Gray");
			} else if (colorOption[2].selected) {
				showPhoto("Egg", "Pink");
			} else if (colorOption[3].selected){
				showPhoto("Egg", "Orange");
			} else {
				showPhoto("Egg", "Black");
			}
		};	
	});
	*/
	
	
});
