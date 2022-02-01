"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Logo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Logo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TextInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TextInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      required: false,
      type: String,
      "default": ''
    },
    name: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String
    },
    placeholder: {
      required: false,
      type: String
    },
    label: {
      required: false,
      type: String
    },
    autocomplete: {
      required: false,
      "default": 'off'
    },
    error: {
      required: false,
      "default": undefined
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_TextInput_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/TextInput.vue */ "./resources/js/Components/TextInput.vue");
/* harmony import */ var _Components_Logo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Logo.vue */ "./resources/js/Components/Logo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TextInput: _Components_TextInput_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Logo: _Components_Logo_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    errors: Object
  },
  data: function data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  methods: {
    submit: function submit() {
      console.log("Test");
      this.$inertia.post('/register', this.form);
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/Logo.vue":
/*!******************************************!*\
  !*** ./resources/js/Components/Logo.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=672d36f6& */ "./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./resources/js/Components/Logo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Logo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/TextInput.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/TextInput.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextInput_vue_vue_type_template_id_23a98e62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput.vue?vue&type=template&id=23a98e62& */ "./resources/js/Components/TextInput.vue?vue&type=template&id=23a98e62&");
/* harmony import */ var _TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextInput.vue?vue&type=script&lang=js& */ "./resources/js/Components/TextInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TextInput_vue_vue_type_template_id_23a98e62___WEBPACK_IMPORTED_MODULE_0__.render,
  _TextInput_vue_vue_type_template_id_23a98e62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/TextInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e59c811e& */ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Logo.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Logo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Logo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/TextInput.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/TextInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TextInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_672d36f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Logo.vue?vue&type=template&id=672d36f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6&");


/***/ }),

/***/ "./resources/js/Components/TextInput.vue?vue&type=template&id=23a98e62&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/TextInput.vue?vue&type=template&id=23a98e62& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_template_id_23a98e62___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_template_id_23a98e62___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_template_id_23a98e62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextInput.vue?vue&type=template&id=23a98e62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TextInput.vue?vue&type=template&id=23a98e62&");


/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=e59c811e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Link",
    {
      staticClass: "flex text-xl font-display text-green-500",
      attrs: { href: "/" }
    },
    [
      _c("span", { staticClass: "sr-only" }, [_vm._v("treedeals")]),
      _vm._v("\n    tree\n    "),
      _c("span", { staticClass: "text-green-900" }, [_vm._v("deals")])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TextInput.vue?vue&type=template&id=23a98e62&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TextInput.vue?vue&type=template&id=23a98e62& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full" }, [
    _vm.label
      ? _c(
          "label",
          {
            staticClass: "block text-sm font-medium text-gray-700 mb-1",
            attrs: { for: _vm.name }
          },
          [_vm._v(_vm._s(_vm.label))]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      staticClass:
        "block w-full px-3 py-2 border border-gray-300 focus:border-gray-200 focus:outline-none focus:shadow-outline-green focus:ring-2 focus:ring-offset-0 focus:ring-green-700",
      style: [_vm.error ? { border: "1px solid red !important" } : {}],
      attrs: {
        name: _vm.name,
        placeholder: _vm.placeholder,
        id: _vm.name,
        type: _vm.type,
        autocomplete: _vm.autocomplete
      },
      on: {
        keyup: function($event) {
          return _vm.$emit("update:value", $event.target.value)
        }
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "h-3" }, [
      _vm.error
        ? _c("div", { staticClass: "text-sm text-red-500" }, [
            _vm._v(_vm._s(_vm.error))
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    },
    [
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "transition ease-out duration-100",
            "enter-from-class": "transform opacity-0 scale-95",
            "enter-to-class": "transform opacity-100 scale-100",
            "leave-active-class": "transition ease-in duration-75",
            "leave-from-class": "transform opacity-100 scale-100",
            "leave-to-class": "transform opacity-0 scale-95"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "bg-yellow-50 border-l-4 w-full max-w-md mx-auto border-yellow-400 p-4 fixed top-4 left-1/2 transform -translate-x-1/2"
            },
            [
              _c("div", { staticClass: "flex" }, [
                _c("div", { staticClass: "flex-shrink-0" }, [
                  _c(
                    "svg",
                    {
                      staticClass: "h-5 w-5 text-yellow-400",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          d:
                            "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                          "clip-rule": "evenodd"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ml-4" }, [
                  _c("p", { staticClass: "text-sm text-yellow-700" }, [
                    _vm._v(
                      "\n                        Wir haben dir einen Bestätigungslink auf zugesendet\n                        "
                    ),
                    _c(
                      "a",
                      {
                        staticClass:
                          "border mt-1 block text-center border-yellow-600 px-2 py-1.5 rounded font-medium text-yellow-700 hover:bg-yellow-100",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.resendVerificationEmail.apply(
                              null,
                              arguments
                            )
                          }
                        }
                      },
                      [_vm._v("Bestätigungslink erneut senden")]
                    )
                  ])
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "mt-8 sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center justify-center"
        },
        [
          _c("Logo"),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "text-center text-sm text-gray-600 max-w-md" },
            [_vm._v("Jetzt registrieren und zum Erhalt der Wälder beitragen.")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "sm:mx-auto sm:w-full sm:max-w-lg" }, [
        _c("div", { staticClass: "p-8 sm:px-10" }, [
          _c(
            "form",
            {
              staticClass: "space-y-4",
              attrs: { method: "POST" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                }
              }
            },
            [
              _c("TextInput", {
                attrs: {
                  name: "username",
                  value: _vm.form.username,
                  error: _vm.errors.username,
                  type: "text",
                  label: "Benutzername",
                  placeholder: "Benutzername"
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.form, "username", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("TextInput", {
                attrs: {
                  name: "email",
                  value: _vm.form.email,
                  error: _vm.errors.email,
                  type: "text",
                  label: "E-mail-Adresse",
                  placeholder: "E-Mail-Adresse"
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.form, "email", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("TextInput", {
                attrs: {
                  name: "password",
                  value: _vm.form.password,
                  error: _vm.errors.password,
                  type: "password",
                  label: "Passwort",
                  autocomplete: "new-password",
                  placeholder: "Passwort"
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.form, "password", $event)
                  }
                }
              }),
              _vm._v(" "),
              _c("TextInput", {
                attrs: {
                  name: "password_confirmation",
                  value: _vm.errors.password_confirmation,
                  error: _vm.errors.password_confirmation,
                  type: "password",
                  label: "Passwort Bestätigen",
                  autocomplete: "new-password",
                  placeholder: "Passwort Bestätigen"
                },
                on: {
                  "update:value": function($event) {
                    return _vm.$set(_vm.errors, "password_confirmation", $event)
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(0)
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass:
            "w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-3 focus:ring-offset-0 focus:ring-green-200",
          attrs: { type: "submit" }
        },
        [_vm._v("Registrieren")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);
//# sourceMappingURL=resources_js_Pages_Auth_Register_vue.js.map?id=11410565f8fb27d1a727