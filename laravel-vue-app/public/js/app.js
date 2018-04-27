webpackJsonp([0],{

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    template: '<h1>Hello World</h1>'
};

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(30);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    //the form class should be responsible for all of its fields
    //expose all functionality of a form e.g resetting, submitting etc
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data; //but in order to access this this.name.data
        //eg {name: 'Andrew'} field becomes equal to name
        for (var field in data) {
            this[field] = data[field];
        }
        //now the form class is responsible for form errors..better coupling...
        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
    }

    _createClass(Form, [{
        key: 'data',
        value: function data() {
            //data should be name and description needs to be dynamic, cant fectch all the properties, there's errors, originalData
            //clone the object
            //let data = Object.assign({}, this);
            //omit
            //delete data.originalData;
            //delete data.errors;
            var data = {};
            for (var property in this.originalData) {
                //filtering through name and description
                //for each one data.name = this.name;
                data[property] = this[property];
            }
            //payload
            return data;
        }
    }, {
        key: 'reset',
        value: function reset() {
            //pointer to the original data, so filter throught it and update the properties on the form
            for (var field in originalData) {
                this[field] = '';
            }
            //ensure that the errors are empty
            this.errors.clear();
        }
    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }
    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }
    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }
    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }
    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            //perform axios call here
            //changes because of the class, need to record incoming error messages
            //make it dynamic e.g PATCH request
            //when these methods get called the this context get rebouned
            //return our own promise
            //resolve a-okay, fail reject
            //axios call returns a promise, but in order to do it in our view instance we need to wrap it in another one
            return new Promise(function (resolve, reject) {
                //form.submit('post','some-endpoint')
                axios[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data);
                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data); //*fix this
                    reject(error.response.data);
                });
            });
        }
    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            alert(data.message);
            this.reset();
        }
    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors); //data associated with the response
        }
    }]);

    return Form;
}();

/* harmony default export */ exports["a"] = Form;

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: "has",
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }
    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }, {
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }
    }, {
        key: "record",
        value: function record(errors) {
            //updates errors object (object within another object?)
            this.errors = errors.errors;
        }
    }, {
        key: "clear",
        value: function clear(field) {
            //if you gave us a field then delete that single field else update errors or reset it entirely
            if (field) {
                delete this.errors[field];
                return; //deletes per field and doesn't just move on
            }
            this.errors = {};
        }
    }]);

    return Errors;
}();

/* harmony default export */ exports["a"] = Errors;

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Example__ = __webpack_require__(11);




//make them global through the window object
window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
window.Form = __WEBPACK_IMPORTED_MODULE_2__core_Form__["a" /* default */]; //can then just say new Form, no need to import it


var vm = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({

    el: "#app",

    components: {
        Example: __WEBPACK_IMPORTED_MODULE_3__components_Example__["a" /* default */] //in our view we can now do <example></example>
    },

    data: {
        //skills: []
        //declare your v-models here
        //name: '', form class takes responsibility for these two fields
        //description: '',
        form: new __WEBPACK_IMPORTED_MODULE_2__core_Form__["a" /* default */]({ //form.errors, since form class is now responsible..not defined on the instance
            //pass through reactive data
            //v-models should now point to form.field
            name: '',
            description: ''
        })
    },

    methods: {
        onSubmit: function onSubmit() {
            //respond after updating the form, flash message etc...promises
            this.form.post('/projects')
            //.then(data => console.log(data))
            //.catch(error => console.log(error));//keeps throwing error...wtf?
            .then(function (data) {
                return alert(data.JSON);
            });
            //.catch(error => alert(error))
        }

        /*onSuccess(response) {
            alert(response.data.message);
            //very specific not dynamic
            //this.name = '';
            //this.description = '';
            // we 're trying to reset the form
            form.reset();
        }*/

    },

    mounted: function mounted() {
        //Make an ajax request to the server endpoint :/skills
        //axios.get('/skills').then(reponse => this.skills = reponse.data);
        //Vue resource is an alternative
    }
});

/***/ }

},[34]);