"use strict";
(self["webpackChunktodo_project"] = self["webpackChunktodo_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/main.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/main.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "main {\r\n\theight: 60vh;\r\n\tbackground-color: var(--light-primary-color);\r\n\toverflow-y: auto;\r\n}\r\nmain::-webkit-scrollbar {\r\n\twidth: 1em;\r\n}\r\n\r\nmain::-webkit-scrollbar-track {\r\n\tbox-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nmain::-webkit-scrollbar-thumb {\r\n\tbackground-color: var(--primary-color);\r\n\tborder-radius: 28px;\r\n\toutline: 1px solid slategrey;\r\n}\r\n\r\n.add-button,\r\n.add-button-project-view,\r\n.add-note-button,\r\n.add-project-button {\r\n\tdisplay: flex;\r\n\tz-index: 2;\r\n\talign-items: center;\r\n\tposition: sticky;\r\n\tbackground-color: var(--primary-color);\r\n\tpadding: 10px;\r\n\twidth: fit-content;\r\n\theight: fit-content;\r\n\tborder-radius: 9999px;\r\n\ttop: 85%;\r\n\tleft: 93%;\r\n\ttransition: 300ms ease-in-out;\r\n\tcursor: pointer;\r\n}\r\n\r\n.add-button {\r\n\t--move-left: -8em;\r\n\t--button-text: \"Add new Todo\";\r\n}\r\n\r\n.add-button-project-view {\r\n\t--move-left: -9em;\r\n\t--button-text: \"Click to expand\";\r\n}\r\n\r\n.add-note-button {\r\n\t--move-left: -8em;\r\n\t--button-text: \"Add new Todo\";\r\n}\r\n\r\n.add-project-button {\r\n\t--move-left: -9em;\r\n\t--button-text: \"Add new Project\";\r\n}\r\n\r\n.add-note-button.unhide {\r\n\ttransform: translateY(-150%);\r\n}\r\n\r\n.add-project-button.unhide {\r\n\ttransform: translateY(-300%);\r\n}\r\n\r\n.add-note-button,\r\n.add-project-button {\r\n\tz-index: 1;\r\n}\r\n\r\n.add-note-button svg,\r\n.add-project-button svg {\r\n\twidth: 32px;\r\n\theight: 32px;\r\n}\r\n\r\n.add-button::before,\r\n.add-button-project-view.inactive::before,\r\n.add-note-button.unhide::before,\r\n.add-project-button.unhide::before {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n}\r\n\r\n.add-button:hover::before,\r\n.add-button-project-view.inactive:hover::before,\r\n.add-note-button.unhide:hover::before,\r\n.add-project-button.unhide:hover::before {\r\n\tpadding: 15px 10px;\r\n\tborder-radius: 10px;\r\n\tanimation: 1s 1 normal moveleft;\r\n\tanimation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes moveleft {\r\n\t0% {\r\n\t\tleft: 0rem;\r\n\t\tbackground-color: rgba(0, 0, 0, 0);\r\n\t\tcolor: rgba(0, 0, 0, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\t25% {\r\n\t\tbackground-color: rgba(0, 0, 0, 0);\r\n\t\tcolor: rgba(0, 0, 0, 0);\r\n\t}\r\n\t50% {\r\n\t\tbackground-color: var(--accent-color);\r\n\t\tcolor: inherit;\r\n\t\tleft: var(--move-left);\r\n\t\tcontent: var(--button-text);\r\n\t}\r\n\t100% {\r\n\t\tcontent: var(--button-text);\r\n\t\tleft: var(--move-left);\r\n\t\tbackground-color: var(--accent-color);\r\n\t\tcolor: inherit;\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.add-button:hover,\r\n.add-button-project-view:hover,\r\n.add-note-button.unhide:hover,\r\n.add-project-button.unhide:hover {\r\n\tbackground-color: var(--accent-color);\r\n}\r\n\r\n.add-button-project-view.clicked {\r\n\tbackground-color: var(--accent-color);\r\n\ttransform: rotateZ(405deg);\r\n}\r\n.add-button-project-view.clicked::before {\r\n\tcontent: \"\";\r\n}\r\n\r\n.add-button-project-view.clicked:hover::before {\r\n\tcontent: \"\";\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/main/main.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,4CAA4C;CAC5C,gBAAgB;AACjB;AACA;CACC,UAAU;AACX;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,sCAAsC;CACtC,mBAAmB;CACnB,4BAA4B;AAC7B;;AAEA;;;;CAIC,aAAa;CACb,UAAU;CACV,mBAAmB;CACnB,gBAAgB;CAChB,sCAAsC;CACtC,aAAa;CACb,kBAAkB;CAClB,mBAAmB;CACnB,qBAAqB;CACrB,QAAQ;CACR,SAAS;CACT,6BAA6B;CAC7B,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,6BAA6B;AAC9B;;AAEA;CACC,iBAAiB;CACjB,gCAAgC;AACjC;;AAEA;CACC,iBAAiB;CACjB,6BAA6B;AAC9B;;AAEA;CACC,iBAAiB;CACjB,gCAAgC;AACjC;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;;CAEC,UAAU;AACX;;AAEA;;CAEC,WAAW;CACX,YAAY;AACb;;AAEA;;;;CAIC,WAAW;CACX,kBAAkB;AACnB;;AAEA;;;;CAIC,kBAAkB;CAClB,mBAAmB;CACnB,+BAA+B;CAC/B,6BAA6B;AAC9B;;AAEA;CACC;EACC,UAAU;EACV,kCAAkC;EAClC,uBAAuB;EACvB,UAAU;CACX;CACA;EACC,kCAAkC;EAClC,uBAAuB;CACxB;CACA;EACC,qCAAqC;EACrC,cAAc;EACd,sBAAsB;EACtB,2BAA2B;CAC5B;CACA;EACC,2BAA2B;EAC3B,sBAAsB;EACtB,qCAAqC;EACrC,cAAc;EACd,UAAU;CACX;AACD;;AAEA;;;;CAIC,qCAAqC;AACtC;;AAEA;CACC,qCAAqC;CACrC,0BAA0B;AAC3B;AACA;CACC,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ","sourcesContent":["main {\r\n\theight: 60vh;\r\n\tbackground-color: var(--light-primary-color);\r\n\toverflow-y: auto;\r\n}\r\nmain::-webkit-scrollbar {\r\n\twidth: 1em;\r\n}\r\n\r\nmain::-webkit-scrollbar-track {\r\n\tbox-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nmain::-webkit-scrollbar-thumb {\r\n\tbackground-color: var(--primary-color);\r\n\tborder-radius: 28px;\r\n\toutline: 1px solid slategrey;\r\n}\r\n\r\n.add-button,\r\n.add-button-project-view,\r\n.add-note-button,\r\n.add-project-button {\r\n\tdisplay: flex;\r\n\tz-index: 2;\r\n\talign-items: center;\r\n\tposition: sticky;\r\n\tbackground-color: var(--primary-color);\r\n\tpadding: 10px;\r\n\twidth: fit-content;\r\n\theight: fit-content;\r\n\tborder-radius: 9999px;\r\n\ttop: 85%;\r\n\tleft: 93%;\r\n\ttransition: 300ms ease-in-out;\r\n\tcursor: pointer;\r\n}\r\n\r\n.add-button {\r\n\t--move-left: -8em;\r\n\t--button-text: \"Add new Todo\";\r\n}\r\n\r\n.add-button-project-view {\r\n\t--move-left: -9em;\r\n\t--button-text: \"Click to expand\";\r\n}\r\n\r\n.add-note-button {\r\n\t--move-left: -8em;\r\n\t--button-text: \"Add new Todo\";\r\n}\r\n\r\n.add-project-button {\r\n\t--move-left: -9em;\r\n\t--button-text: \"Add new Project\";\r\n}\r\n\r\n.add-note-button.unhide {\r\n\ttransform: translateY(-150%);\r\n}\r\n\r\n.add-project-button.unhide {\r\n\ttransform: translateY(-300%);\r\n}\r\n\r\n.add-note-button,\r\n.add-project-button {\r\n\tz-index: 1;\r\n}\r\n\r\n.add-note-button svg,\r\n.add-project-button svg {\r\n\twidth: 32px;\r\n\theight: 32px;\r\n}\r\n\r\n.add-button::before,\r\n.add-button-project-view.inactive::before,\r\n.add-note-button.unhide::before,\r\n.add-project-button.unhide::before {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n}\r\n\r\n.add-button:hover::before,\r\n.add-button-project-view.inactive:hover::before,\r\n.add-note-button.unhide:hover::before,\r\n.add-project-button.unhide:hover::before {\r\n\tpadding: 15px 10px;\r\n\tborder-radius: 10px;\r\n\tanimation: 1s 1 normal moveleft;\r\n\tanimation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes moveleft {\r\n\t0% {\r\n\t\tleft: 0rem;\r\n\t\tbackground-color: rgba(0, 0, 0, 0);\r\n\t\tcolor: rgba(0, 0, 0, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\t25% {\r\n\t\tbackground-color: rgba(0, 0, 0, 0);\r\n\t\tcolor: rgba(0, 0, 0, 0);\r\n\t}\r\n\t50% {\r\n\t\tbackground-color: var(--accent-color);\r\n\t\tcolor: inherit;\r\n\t\tleft: var(--move-left);\r\n\t\tcontent: var(--button-text);\r\n\t}\r\n\t100% {\r\n\t\tcontent: var(--button-text);\r\n\t\tleft: var(--move-left);\r\n\t\tbackground-color: var(--accent-color);\r\n\t\tcolor: inherit;\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.add-button:hover,\r\n.add-button-project-view:hover,\r\n.add-note-button.unhide:hover,\r\n.add-project-button.unhide:hover {\r\n\tbackground-color: var(--accent-color);\r\n}\r\n\r\n.add-button-project-view.clicked {\r\n\tbackground-color: var(--accent-color);\r\n\ttransform: rotateZ(405deg);\r\n}\r\n.add-button-project-view.clicked::before {\r\n\tcontent: \"\";\r\n}\r\n\r\n.add-button-project-view.clicked:hover::before {\r\n\tcontent: \"\";\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main/main.css":
/*!***************************!*\
  !*** ./src/main/main.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMain)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main/main.css");


function getMain() {
	const main = document.createElement("main");
	const todosHolder = document.createElement("div");
	todosHolder.classList.add("todos-holder");

	main.appendChild(todosHolder);

	return main;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly90b2RvLXByb2plY3QvLi9zcmMvbWFpbi9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9tYWluL21haW4uY3NzP2RhMTgiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvbWFpbi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibWFpbiB7XFxyXFxuXFx0aGVpZ2h0OiA2MHZoO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xcclxcblxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcbm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHR3aWR0aDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuXFx0Ym94LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyOHB4O1xcclxcblxcdG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uLFxcclxcbi5hZGQtYnV0dG9uLXByb2plY3QtdmlldyxcXHJcXG4uYWRkLW5vdGUtYnV0dG9uLFxcclxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ei1pbmRleDogMjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFx0aGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxyXFxuXFx0dG9wOiA4NSU7XFxyXFxuXFx0bGVmdDogOTMlO1xcclxcblxcdHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24ge1xcclxcblxcdC0tbW92ZS1sZWZ0OiAtOGVtO1xcclxcblxcdC0tYnV0dG9uLXRleHQ6IFxcXCJBZGQgbmV3IFRvZG9cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbi1wcm9qZWN0LXZpZXcge1xcclxcblxcdC0tbW92ZS1sZWZ0OiAtOWVtO1xcclxcblxcdC0tYnV0dG9uLXRleHQ6IFxcXCJDbGljayB0byBleHBhbmRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLW5vdGUtYnV0dG9uIHtcXHJcXG5cXHQtLW1vdmUtbGVmdDogLThlbTtcXHJcXG5cXHQtLWJ1dHRvbi10ZXh0OiBcXFwiQWRkIG5ldyBUb2RvXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0LS1tb3ZlLWxlZnQ6IC05ZW07XFxyXFxuXFx0LS1idXR0b24tdGV4dDogXFxcIkFkZCBuZXcgUHJvamVjdFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbm90ZS1idXR0b24udW5oaWRlIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uLnVuaGlkZSB7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1ub3RlLWJ1dHRvbixcXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLW5vdGUtYnV0dG9uIHN2ZyxcXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHN2ZyB7XFxyXFxuXFx0d2lkdGg6IDMycHg7XFxyXFxuXFx0aGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbjo6YmVmb3JlLFxcclxcbi5hZGQtYnV0dG9uLXByb2plY3Qtdmlldy5pbmFjdGl2ZTo6YmVmb3JlLFxcclxcbi5hZGQtbm90ZS1idXR0b24udW5oaWRlOjpiZWZvcmUsXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbi51bmhpZGU6OmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbjpob3Zlcjo6YmVmb3JlLFxcclxcbi5hZGQtYnV0dG9uLXByb2plY3Qtdmlldy5pbmFjdGl2ZTpob3Zlcjo6YmVmb3JlLFxcclxcbi5hZGQtbm90ZS1idXR0b24udW5oaWRlOmhvdmVyOjpiZWZvcmUsXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbi51bmhpZGU6aG92ZXI6OmJlZm9yZSB7XFxyXFxuXFx0cGFkZGluZzogMTVweCAxMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0YW5pbWF0aW9uOiAxcyAxIG5vcm1hbCBtb3ZlbGVmdDtcXHJcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb3ZlbGVmdCB7XFxyXFxuXFx0MCUge1xcclxcblxcdFxcdGxlZnQ6IDByZW07XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG5cXHRcXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG5cXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdH1cXHJcXG5cXHQyNSUge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuXFx0XFx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuXFx0fVxcclxcblxcdDUwJSB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG5cXHRcXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRcXHRsZWZ0OiB2YXIoLS1tb3ZlLWxlZnQpO1xcclxcblxcdFxcdGNvbnRlbnQ6IHZhcigtLWJ1dHRvbi10ZXh0KTtcXHJcXG5cXHR9XFxyXFxuXFx0MTAwJSB7XFxyXFxuXFx0XFx0Y29udGVudDogdmFyKC0tYnV0dG9uLXRleHQpO1xcclxcblxcdFxcdGxlZnQ6IHZhcigtLW1vdmUtbGVmdCk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG5cXHRcXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b246aG92ZXIsXFxyXFxuLmFkZC1idXR0b24tcHJvamVjdC12aWV3OmhvdmVyLFxcclxcbi5hZGQtbm90ZS1idXR0b24udW5oaWRlOmhvdmVyLFxcclxcbi5hZGQtcHJvamVjdC1idXR0b24udW5oaWRlOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbi1wcm9qZWN0LXZpZXcuY2xpY2tlZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVooNDA1ZGVnKTtcXHJcXG59XFxyXFxuLmFkZC1idXR0b24tcHJvamVjdC12aWV3LmNsaWNrZWQ6OmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uLXByb2plY3Qtdmlldy5jbGlja2VkOmhvdmVyOjpiZWZvcmUge1xcclxcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFlBQVk7Q0FDWiw0Q0FBNEM7Q0FDNUMsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxzQ0FBc0M7Q0FDdEMsbUJBQW1CO0NBQ25CLDRCQUE0QjtBQUM3Qjs7QUFFQTs7OztDQUlDLGFBQWE7Q0FDYixVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixzQ0FBc0M7Q0FDdEMsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsNkJBQTZCO0NBQzdCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBOztDQUVDLFVBQVU7QUFDWDs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBOzs7O0NBSUMsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTs7OztDQUlDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsK0JBQStCO0NBQy9CLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsVUFBVTtDQUNYO0NBQ0E7RUFDQyxrQ0FBa0M7RUFDbEMsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLHNCQUFzQjtFQUN0QiwyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxVQUFVO0NBQ1g7QUFDRDs7QUFFQTs7OztDQUlDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLHFDQUFxQztDQUNyQywwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJtYWluIHtcXHJcXG5cXHRoZWlnaHQ6IDYwdmg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdHdpZHRoOiAxZW07XFxyXFxufVxcclxcblxcclxcbm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG5cXHRib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDI4cHg7XFxyXFxuXFx0b3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24sXFxyXFxuLmFkZC1idXR0b24tcHJvamVjdC12aWV3LFxcclxcbi5hZGQtbm90ZS1idXR0b24sXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cG9zaXRpb246IHN0aWNreTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHRoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXHJcXG5cXHR0b3A6IDg1JTtcXHJcXG5cXHRsZWZ0OiA5MyU7XFxyXFxuXFx0dHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbiB7XFxyXFxuXFx0LS1tb3ZlLWxlZnQ6IC04ZW07XFxyXFxuXFx0LS1idXR0b24tdGV4dDogXFxcIkFkZCBuZXcgVG9kb1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uLXByb2plY3QtdmlldyB7XFxyXFxuXFx0LS1tb3ZlLWxlZnQ6IC05ZW07XFxyXFxuXFx0LS1idXR0b24tdGV4dDogXFxcIkNsaWNrIHRvIGV4cGFuZFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbm90ZS1idXR0b24ge1xcclxcblxcdC0tbW92ZS1sZWZ0OiAtOGVtO1xcclxcblxcdC0tYnV0dG9uLXRleHQ6IFxcXCJBZGQgbmV3IFRvZG9cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG5cXHQtLW1vdmUtbGVmdDogLTllbTtcXHJcXG5cXHQtLWJ1dHRvbi10ZXh0OiBcXFwiQWRkIG5ldyBQcm9qZWN0XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1ub3RlLWJ1dHRvbi51bmhpZGUge1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b24udW5oaWRlIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLW5vdGUtYnV0dG9uLFxcclxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5hZGQtbm90ZS1idXR0b24gc3ZnLFxcclxcbi5hZGQtcHJvamVjdC1idXR0b24gc3ZnIHtcXHJcXG5cXHR3aWR0aDogMzJweDtcXHJcXG5cXHRoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uOjpiZWZvcmUsXFxyXFxuLmFkZC1idXR0b24tcHJvamVjdC12aWV3LmluYWN0aXZlOjpiZWZvcmUsXFxyXFxuLmFkZC1ub3RlLWJ1dHRvbi51bmhpZGU6OmJlZm9yZSxcXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uLnVuaGlkZTo6YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uOmhvdmVyOjpiZWZvcmUsXFxyXFxuLmFkZC1idXR0b24tcHJvamVjdC12aWV3LmluYWN0aXZlOmhvdmVyOjpiZWZvcmUsXFxyXFxuLmFkZC1ub3RlLWJ1dHRvbi51bmhpZGU6aG92ZXI6OmJlZm9yZSxcXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uLnVuaGlkZTpob3Zlcjo6YmVmb3JlIHtcXHJcXG5cXHRwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRhbmltYXRpb246IDFzIDEgbm9ybWFsIG1vdmVsZWZ0O1xcclxcblxcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVsZWZ0IHtcXHJcXG5cXHQwJSB7XFxyXFxuXFx0XFx0bGVmdDogMHJlbTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcblxcdFxcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcblxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0fVxcclxcblxcdDI1JSB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG5cXHRcXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG5cXHR9XFxyXFxuXFx0NTAlIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcblxcdFxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdFxcdGxlZnQ6IHZhcigtLW1vdmUtbGVmdCk7XFxyXFxuXFx0XFx0Y29udGVudDogdmFyKC0tYnV0dG9uLXRleHQpO1xcclxcblxcdH1cXHJcXG5cXHQxMDAlIHtcXHJcXG5cXHRcXHRjb250ZW50OiB2YXIoLS1idXR0b24tdGV4dCk7XFxyXFxuXFx0XFx0bGVmdDogdmFyKC0tbW92ZS1sZWZ0KTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcblxcdFxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbjpob3ZlcixcXHJcXG4uYWRkLWJ1dHRvbi1wcm9qZWN0LXZpZXc6aG92ZXIsXFxyXFxuLmFkZC1ub3RlLWJ1dHRvbi51bmhpZGU6aG92ZXIsXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbi51bmhpZGU6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uLXByb2plY3Qtdmlldy5jbGlja2VkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlWig0MDVkZWcpO1xcclxcbn1cXHJcXG4uYWRkLWJ1dHRvbi1wcm9qZWN0LXZpZXcuY2xpY2tlZDo6YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24tcHJvamVjdC12aWV3LmNsaWNrZWQ6aG92ZXI6OmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vbWFpbi5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW4oKSB7XHJcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG5cdGNvbnN0IHRvZG9zSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHR0b2Rvc0hvbGRlci5jbGFzc0xpc3QuYWRkKFwidG9kb3MtaG9sZGVyXCIpO1xyXG5cclxuXHRtYWluLmFwcGVuZENoaWxkKHRvZG9zSG9sZGVyKTtcclxuXHJcblx0cmV0dXJuIG1haW47XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9