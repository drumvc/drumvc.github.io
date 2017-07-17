webpackJsonp([2],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\r\n\theight: 100%;\r\n}\r\n\r\nbody {\r\n\theight: 100%;   \r\n\tbackground: rgba(247,247,247,1);\r\n\tbackground: radial-gradient(ellipse at center, rgba(247,247,247,1) 0%, rgba(246,246,246,1) 47%, rgba(180,180,180,1) 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );\r\n    /*font-family: 'Roboto Slab', serif;*/\r\n    font-family: BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n}\r\n\r\nh1 {\r\n\ttext-align: center;\r\n\tfont-weight: normal;\r\n}\r\n\r\naside {\r\n\twidth: 190px;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\theight: 100%;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tpadding: 0 0 0 15px;\r\n\tfont-size: 16px;\r\n}\r\n\r\naside a {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n\r\naside .content {\r\n\tmargin-top: 130px;\r\n}\r\n\r\naside .left {\r\n\twidth: 30px;\r\n\tfloat: left;\r\n\tmargin-right: 10px;\r\n\tclear: left;\r\n\ttext-align: center;\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\naside .right {\r\n\twidth: 150px;\r\n\tfloat: left;\r\n}\r\n\r\naside .right a:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.machine {\r\n\tmargin: 40px auto;\r\n\twidth: 910px;\r\n\tposition: relative;\r\n}\r\n\r\n#staves {\r\n\tborder-left: 20px solid #232323;\r\n\tborder-right: 20px solid #232323;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.stave {\r\n\twidth: 100%;\r\n\theight: 70px;\r\n\tborder: 1px solid #666;\r\n\tbackground: #333;\r\n}\r\n\r\n.staveName {\r\n\tfont-family: \"Abel\", sans-serif;\r\n\tfloat: right;\r\n\tcolor: white;\r\n\tmargin: 20px 10px 0 0;\r\n\tbackground: #111;\r\n\twidth: 80px;\r\n\tpadding: 3px 8px 3px 8px;\r\n\tborder-left: 2px solid #222222;\r\n\tborder-right: 2px solid #454545;\r\n\tborder-top: 2px solid #212121;\r\n\tborder-bottom: 2px solid #565656;\r\n}\r\n\r\n.noteContainer {\r\n\twidth: 95px;\r\n\theight: 70px;\r\n\tbackground: none;\r\n\tfloat: left;\r\n}\r\n\r\n.transportContainer {\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tpadding-top: 10px;\r\n\tborder: 1px solid #666;\r\n\tbackground: #333;\r\n}\r\n\r\n.transport {\r\n\twidth: 95px;\r\n\theight: 50px;\r\n\tmargin-left: 20px;\r\n\ttext-align: center;\r\n\tleft: 0;\r\n\tz-index: 1;\r\n\tposition: absolute;\r\n}\r\n\r\n.transportOff {\r\n\twidth: 95px;\r\n\theight: 60px;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n}\r\n\r\n.transportLight {\r\n\tborder-radius: 50%;\r\n\tbackground-color: #001100;\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\tborder: 3px solid #222;\r\n}\r\n\r\n.transportLight:after {\r\n\tcontent: '';\r\n\twidth: 4px;\r\n\theight: 4px;\r\n\tborder-radius: 50%;\r\n\tposition: absolute;\r\n\tbackground-color: rgba(255, 255, 255, 0.5);\r\n\ttop: 6px;\r\n\tleft: 6px;\r\n\tbox-shadow: 3px 4px 7px 8px rgba(0, 120, 0, 0.6);\r\n}\r\n\r\n.transportLightActive {\r\n\tbackground-color: #00AA00;\r\n\tbox-shadow: 0px 0px 10px 5px rgba(0, 255, 0, 0.4);\r\n\tborder: 3px solid rgba(0, 120, 0, 1);\r\n}\r\n\r\n.transportLightActive:after {\r\n\tbackground-color: rgba(255,255,255,1);\r\n\tbox-shadow: 4px 4px 6px 7px rgba(0, 255, 0, 1);\r\n}\r\n\r\n.note {\r\n\tborder-radius: 50%;\r\n\tbackground-color: #220000;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tmargin: 20px auto;\r\n\tborder: 3px solid #222;\r\n}\r\n\r\n.active {\r\n\tbackground-color: #AA0000;\r\n\tbox-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.4);\r\n\tborder: 3px solid rgba(120, 0, 0, 1);\r\n}\r\n\r\n.note:after {\r\n\tcontent: '';\r\n\twidth: 4px;\r\n\theight: 4px;\r\n\tborder-radius: 50%;\r\n\tposition: absolute;\r\n\tbackground-color: rgba(255, 255, 255, 0.5);\r\n\ttop: 7px;\r\n\tleft: 7px;\r\n\tbox-shadow: 3px 4px 7px 9px rgba(180, 0, 0, 0.6);\r\n}\r\n\r\n.active:after {\r\n\tbackground-color: rgba(255,255,255,1);\r\n\tbox-shadow: 4px 4px 6px 7px rgba(255, 0, 0, 1);\r\n}\r\n\r\n/* CONTROLS */\r\n\r\n.controls {\r\n\tfont-family: \"Abel\", sans-serif;\r\n\twidth: 100%;\r\n\tpadding: 15px 0 15px 0;\r\n\tbackground: #333;\r\n\tborder-left: 1px solid #666;\r\n\tborder-right: 1px solid #666;\r\n}\r\n\r\n.controls::after { \r\n\tcontent: \"\";\r\n\tdisplay: block; \r\n\theight: 0; \r\n\tclear: both;\r\n}\r\n\r\n.bpmRange {\r\n\tfloat: right;\r\n\tmargin-top: 3px;\r\n}\r\n\r\n.bpmTitle {\r\n\tfloat: left;\r\n\tcolor: white;\r\n\tmargin: 8px 8px 0 0;\r\n}\r\n\r\n.bpmOutput {\r\n\twidth: 30px;\r\n\tmargin: 8px 15px 0 8px;\r\n\tcolor: white;\r\n\tfloat: right;\r\n}\r\n\r\n/* BUTTONS */\r\n\r\n.buttons {\r\n\tfloat: left;\r\n}\r\n\r\na.button {\r\n\twidth: 130px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n\tpadding: 12px 0;\r\n\tdisplay: inline-block;\r\n\tbackground: #7b7b8c;\r\n\tbox-shadow: 0 2px 4px rgba(255, 255, 255, 0.1) inset, 0 -15px 70px rgba(0, 0, 0, 0.45) inset, -2px -2px 5px rgba(0, 0, 0, 0.4);\r\n\tcolor: #fff;\r\n\tmargin-left: 15px;\r\n\tfont-size: 16px;\r\n}\r\n\r\n.button:active {\r\n\tbox-shadow: 0 1px 5px rgba(255, 255, 255, 0.2) inset, 0 -15px 70px rgba(0, 0, 0, 0.3) inset, -2px 2px 2px rgba(0, 0, 0, 0.25), 0 10px 100px rgba(0, 0, 0, 0.2) inset;\r\n}\r\n\r\n/* RANGE INPUT */\r\n/* Styled with http://danielstern.ca/range.css/ */\r\n\r\ninput[type=range] {\r\n\twidth: 16em;\r\n\t-webkit-appearance: none;\r\n\tmargin: 16.55px 0;\r\n}\r\n\r\ninput[type=range]:focus {\r\n\toutline: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n\twidth: 100%;\r\n\theight: 2.9px;\r\n\tcursor: pointer;\r\n\tbox-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n\tbackground: #606060;\r\n\tborder-radius: 20px;\r\n\tborder: 0.1px solid #010101;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n\tbox-shadow: 0 -2px 4px rgba(255, 255, 255, 0.6) inset, -2px -2px 5px rgba(0, 0, 0, 0.4);\r\n\tbackground: #adadad;\r\n\tborder: 0px solid #000000;\r\n\theight: 36px;\r\n\twidth: 16px;\r\n\tborder-radius: 2px;\r\n\tcursor: pointer;\r\n\t-webkit-appearance: none;\r\n\tmargin-top: -16.65px;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n\tbackground: #636363;\r\n}\r\n\r\ninput[type=range]::-moz-range-track {\r\n\twidth: 100%;\r\n\theight: 2.9px;\r\n\tcursor: pointer;\r\n\tbox-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n\tbackground: #606060;\r\n\tborder-radius: 20px;\r\n\tborder: 0.1px solid #010101;\r\n}\r\n\r\ninput[type=range]::-moz-range-thumb {\r\n\tbox-shadow: 0 -2px 4px rgba(255, 255, 255, 0.6) inset, -2px -2px 5px rgba(0, 0, 0, 0.4);\r\n\tbackground: #adadad;\r\n\tborder: 0px solid #000000;\r\n\theight: 36px;\r\n\twidth: 16px;\r\n\tborder-radius: 3px;\r\n\tcursor: pointer;\r\n}\r\n\r\ninput[type=range]::-ms-track {\r\n\twidth: 100%;\r\n\theight: 2.9px;\r\n\tcursor: pointer;\r\n\tbackground: transparent;\r\n\tborder-color: transparent;\r\n\tcolor: transparent;\r\n}\r\n\r\ninput[type=range]::-ms-fill-lower {\r\n\tbackground: #5d5d5d;\r\n\tborder: 0.1px solid #010101;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\n\r\ninput[type=range]::-ms-fill-upper {\r\n\tbackground: #606060;\r\n\tborder: 0.1px solid #010101;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\n\r\ninput[type=range]::-ms-thumb {\r\n\tbox-shadow: 0 -2px 4px rgba(255, 255, 255, 0.6) inset, -2px -2px 5px rgba(0, 0, 0, 0.4);\r\n\tbackground: #adadad;\r\n\tborder: 0px solid #000000;\r\n\theight: 36px;\r\n\twidth: 16px;\r\n\tborder-radius: 3px;\r\n\tcursor: pointer;\r\n\theight: 2.9px;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-lower {\r\n\tbackground: #606060;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-upper {\r\n\tbackground: #636363;\r\n}\r\n\r\n.credits {\r\n\twidth: 99%;\r\n\ttext-align: center;\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n}\r\n\r\n.credits a {\r\n\tcolor: black;\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map