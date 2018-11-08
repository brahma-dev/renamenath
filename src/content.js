(function renamenath() {
	var elements = document.getElementsByTagName("*");

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var text = node.nodeValue;
				var replacedText = text.replace(/Yogi Adityanath/g, "Ajay Mohan Bisht")
					.replace(/YogiAdityanath/g, "AjayMohanBisht")
					.replace(/yogi adityanath/g, "ajay mohan bisht")
					.replace(/yogiadityanath/g, "ajaymohanbisht")
					.replace(/CM Yogi/g, "CM Ajay")
					.replace(/Prayagraj/g, "Allahabad")
					.replace(/prayagraj/g, "allahabad")
					.replace(/Ayodhya/g, "Faizabad")
					.replace(/ayodhya/g, "faizabad")
					.replace(/\u092F\u094B\u0917\u0940 \u0906\u0926\u093F\u0924\u094D\u092F\u0928\u093E\u0925/g, "\u0905\u091C\u092F \u092E\u094B\u0939\u0928 \u092C\u093F\u0937\u094D\u091F")
					.replace(/\u092F\u094B\u0917\u0940\u0906\u0926\u093F\u0924\u094D\u092F\u0928\u093E\u0925/g, "\u0905\u091C\u092F\u092E\u094B\u0939\u0928\u092C\u093F\u0937\u094D\u091F")
					.replace(/\u092F\u094B\u0917\u0940 \u0906\u0926\u093F\u0924\u094D\u200D\u092F\u0928\u093E\u0925/g, "\u0905\u091C\u092F \u092E\u094B\u0939\u0928 \u092C\u093F\u0937\u094D\u091F")
					.replace(/\u092F\u094B\u0917\u0940\u0906\u0926\u093F\u0924\u094D\u200D\u092F\u0928\u093E\u0925/g, "\u0905\u091C\u092F\u092E\u094B\u0939\u0928\u092C\u093F\u0937\u094D\u091F")
					.replace(/\u0938\u0940\u090F\u092E \u092F\u094B\u0917\u0940/g, "\u0938\u0940\u090F\u092E \u0905\u091C\u092F")
					.replace(/\u092A\u094D\u0930\u092F\u093E\u0917\u0930\u093E\u091C/g, "\u0905\u0932\u093E\u0939\u093E\u092C\u093E\u0926")
					.replace(/\u0905\u092F\u094B\u0927\u094D\u092F\u093E/g, "\u092B\u093C\u0948\u091C\u093C\u093E\u092C\u093E\u0926");

				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
	if (typeof window.renamenathTimer === "undefined") {
		window.renamenathTimer = setInterval(renamenath, 15000);
	}
}());
