(function renamenath() {
	var elements = document.getElementsByTagName("*");

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var text = node.nodeValue;
				var replacedText = text.replace(/\bYogi Adityanath\b/g, "Ajay Mohan Bisht")
					.replace(/\bYogiAdityanath\b/g, "AjayMohanBisht")
					.replace(/\byogi adityanath\b/g, "ajay mohan bisht")
					.replace(/\byogiadityanath\b/g, "ajaymohanbisht")
					.replace(/\bCM Yogi\b/g, "CM Ajay")
					.replace(/\bPrayagraj\b/g, "Allahabad")
					.replace(/\bprayagraj\b/g, "allahabad")
					.replace(/\bAyodhya\b/g, "Faizabad")
					.replace(/\bayodhya\b/g, "faizabad")
					.replace(/\b\u092F\u094B\u0917\u0940 \u0906\u0926\u093F\u0924\u094D\u092F\u0928\u093E\u0925\b/g, "\u0905\u091C\u092F \u092E\u094B\u0939\u0928 \u092C\u093F\u0937\u094D\u091F")
					.replace(/\b\u092F\u094B\u0917\u0940\u0906\u0926\u093F\u0924\u094D\u092F\u0928\u093E\u0925\b/g, "\u0905\u091C\u092F\u092E\u094B\u0939\u0928\u092C\u093F\u0937\u094D\u091F")
					.replace(/\b\u092F\u094B\u0917\u0940 \u0906\u0926\u093F\u0924\u094D\u200D\u092F\u0928\u093E\u0925\b/g, "\u0905\u091C\u092F \u092E\u094B\u0939\u0928 \u092C\u093F\u0937\u094D\u091F")
					.replace(/\b\u092F\u094B\u0917\u0940\u0906\u0926\u093F\u0924\u094D\u200D\u092F\u0928\u093E\u0925\b/g, "\u0905\u091C\u092F\u092E\u094B\u0939\u0928\u092C\u093F\u0937\u094D\u091F")
					.replace(/\b\u0938\u0940\u090F\u092E \u092F\u094B\u0917\u0940\b/g, "\u0938\u0940\u090F\u092E \u0905\u091C\u092F")
					.replace(/\b\u092A\u094D\u0930\u092F\u093E\u0917\u0930\u093E\u091C\b/g, "\u0905\u0932\u093E\u0939\u093E\u092C\u093E\u0926")
					.replace(/\b\u0905\u092F\u094B\u0927\u094D\u092F\u093E\b/g, "\u092B\u093C\u0948\u091C\u093C\u093E\u092C\u093E\u0926");

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
