webpackJsonp([0],{

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(93)

/* script */
__vue_exports__ = __webpack_require__(87)

/* template */
var __vue_template__ = __webpack_require__(91)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/alisa/SOFTWARE/vue-webpack/src/containers/uicontainer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40b30061", __vue_options__)
  } else {
    hotAPI.reload("data-v-40b30061", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] uicontainer.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {};

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.ui-container{\n  color:#333;\n}\n", "", {"version":3,"sources":["/./src/containers/uicontainer.vue?376cc996"],"names":[],"mappings":";AAYA;EACA,WAAA;CACA","file":"uicontainer.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"ui-container\">\n    这是uiContainer\n  </div>\n</template>\n\n<script>\nexport default {\n}\n</script>\n\n<style lang=\"css\">\n  .ui-container{\n    color:#333;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _h('div', {
    staticClass: "ui-container"
  }, ["\n  这是uiContainer\n"])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40b30061", module.exports)
  }
}

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-40b30061!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./uicontainer.vue", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-40b30061!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./uicontainer.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

});
//# sourceMappingURL=0-0-e3b69025170ccc5f6545.js.map