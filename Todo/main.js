(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <todo-list></todo-list>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_autofocus_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-autofocus-fix */ "./node_modules/angular-autofocus-fix/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todo-item/todo-item.component */ "./src/app/components/todo-item/todo-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"],
                _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__["TodoItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_autofocus_fix__WEBPACK_IMPORTED_MODULE_3__["AutofocusModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-item\">\n  <div class=\"todo-item-left\">\n    <input type=\"checkbox\" [(ngModel)]=\"todo.completed\" (change)=\"doneEdit(todo)\">\n      <button #editingTodo (click)=\"editTodo(todo)\">Edit</button>\n\n    <div *ngIf=\"!todo.editing; else editingTodo\" class=\"todo-item-label\" [ngClass]=\"{ 'completed' : todo.completed }\"\n      (dblclick)=\"editTodo(todo)\">{{ todo.title }}</div>\n    \n    <ng-template #editingTodo>\n      <input type=\"text\" class=\"todo-item-edit\" [(ngModel)]=\"todo.title\" (blur)=\"doneEdit(todo)\" (keyup.enter)=\"doneEdit(todo)\"\n        (keyup.esc)=\"cancelEdit(todo)\" autofocus>\n    </ng-template>\n\n\n  </div>\n  <div class=\"remove-item\" (click)=\"deleteTodo(todo.id)\">\n    &times;\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-item {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s; }\n\n.remove-item {\n  cursor: pointer;\n  margin-left: 14px; }\n\n.remove-item:hover {\n    color: black; }\n\n.todo-item-left {\n  display: flex;\n  align-items: center; }\n\n.todo-item-label {\n  padding: 10px;\n  border: 1px solid white;\n  margin-left: 12px; }\n\n.todo-item-edit {\n  font-size: 24px;\n  color: #2c3e50;\n  margin-left: 12px;\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  font-family: 'Avenir', Helvetica, Arial, sans-serif; }\n\n.todo-item-edit:focus {\n    outline: none; }\n\n.completed {\n  text-decoration: line-through;\n  color: red;\n  text-shadow: 0px 0px 3px red; }\n\nbutton {\n  margin-left: 20px;\n  background-color: white;\n  border: solid 1px gray;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0vQzpcXE15cHJvZ3JhbVxcRG93bmxvYWRcXHRvZG8tYW5ndWxhci0wMi1wYXNzaW5nLXN0YXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b2RvLWl0ZW1cXHRvZG8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5QixpQ0FBd0I7VUFBeEIseUJBQXdCLEVBQ3pCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixrQkFBaUIsRUFJbEI7O0FBTkQ7SUFJSSxhQUFZLEVBQ2I7O0FBR0g7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsWUFBVztFQUNYLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsb0RBQW1ELEVBS3BEOztBQVpEO0lBVUksY0FBYSxFQUNkOztBQUdIO0VBQ0UsOEJBQTZCO0VBQzdCLFdBQVU7RUFDViw2QkFBNEIsRUFDN0I7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLHVCQUFzQjtFQUN0QixjQUFhLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5yZW1vdmUtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4udG9kby1pdGVtLWxlZnQgeyAvLyBsYXRlclxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kby1pdGVtLWxhYmVsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4udG9kby1pdGVtLWVkaXQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8vb3ZlcnJpZGUgZGVmYXVsdHNcbiAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cblxuLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggcmVkO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbnBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent() {
        this.checkedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doubleClickedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelledItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deletedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    TodoItemComponent.prototype.doneEdit = function (todo) {
        this.checkedItem.emit(todo);
    };
    TodoItemComponent.prototype.editTodo = function (todo) {
        this.doubleClickedItem.emit(todo);
    };
    TodoItemComponent.prototype.cancelEdit = function (todo) {
        this.cancelledItem.emit(todo);
    };
    TodoItemComponent.prototype.deleteTodo = function (todo) {
        this.deletedItem.emit(todo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "todo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "checkedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "doubleClickedItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "cancelledItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "deletedItem", void 0);
    TodoItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/components/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.scss */ "./src/app/components/todo-item/todo-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<input type=\"text\" class=\"todo-input\" placeholder=\"กรอก todo-list แล้วกด Enter\" [(ngModel)]=\"todoTitle\" (keyup.enter)=\"addTodo()\">\n\n\n<todo-item\n  *ngFor=\"let todo of todosFiltered()\"\n  [todo]=\"todo\"\n  (checkedItem)=\"doneEdit($event)\"\n  (doubleClickedItem)=\"editTodo($event)\"\n  (blurredItem)=\"doneEdit($event)\"\n  (enteredItem)=\"doneEdit($event)\"\n  (cancelledItem)=\"cancelEdit($event)\"\n  (deletedItem)=\"deleteTodo($event)\"\n></todo-item>\n\n<!-- <div class=\"todo-item\" *ngFor=\"let todo of todosFiltered()\" @fade>\n  <div class=\"todo-item-left\">\n    <input type=\"checkbox\" [(ngModel)]=\"todo.completed\" (change)=\"doneEdit(todo)\">\n    <div *ngIf=\"!todo.editing; else editingTodo\" class=\"todo-item-label\" [ngClass]=\"{ 'completed' : todo.completed }\" (dblclick)=\"editTodo(todo)\">{{ todo.title }}</div>\n    <ng-template #editingTodo>\n      <input type=\"text\" class=\"todo-item-edit\" [(ngModel)]=\"todo.title\" (blur)=\"doneEdit(todo)\" (keyup.enter)=\"doneEdit(todo)\" (keyup.esc)=\"cancelEdit(todo)\"autofocus>\n    </ng-template>\n  </div>\n  <div class=\"remove-item\" (click)=\"deleteTodo(todo.id)\">\n    &times;\n  </div>\n</div> -->\n\n\n"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-input {\n  width: 100%;\n  padding: 10px 18px;\n  font-size: 18px;\n  margin-bottom: 16px; }\n  .todo-input:focus {\n    outline: 0; }\n  .extra-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  border-top: 1px solid lightgrey;\n  padding-top: 14px;\n  margin-bottom: 14px; }\n  button {\n  font-size: 14px;\n  background-color: white;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  button:hover {\n    background: lightgreen; }\n  button:focus {\n    outline: none; }\n  .active {\n  background: lightgreen; }\n  .fade-enter-active, .fade-leave-active {\n  transition: opacity .2s; }\n  .fade-enter, .fade-leave-to {\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvQzpcXE15cHJvZ3JhbVxcRG93bmxvYWRcXHRvZG8tYW5ndWxhci0wMi1wYXNzaW5nLXN0YXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXHRvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixvQkFBbUIsRUFNcEI7RUFWRDtJQVFJLFdBQVUsRUFDWDtFQWlESDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLGdCQUFlO0VBQ2YsZ0NBQStCO0VBQy9CLGtCQUFpQjtFQUNqQixvQkFBbUIsRUFDcEI7RUFFRDtFQUNFLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLHlCQUFnQjtLQUFoQixzQkFBZ0I7VUFBaEIsaUJBQWdCLEVBU2pCO0VBWkQ7SUFNSSx1QkFBc0IsRUFDdkI7RUFQSDtJQVVJLGNBQWEsRUFDZDtFQUdIO0VBQ0UsdUJBQXNCLEVBQ3ZCO0VBR0Q7RUFDRSx3QkFBdUIsRUFDeEI7RUFFRDtFQUNFLFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxufVxuXG4vLyAudG9kby1pdGVtIHtcbi8vICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG4vLyB9XG5cbi8vIC5yZW1vdmUtaXRlbSB7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4vLyAgICY6aG92ZXIge1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgfVxuLy8gfVxuXG4vLyAudG9kby1pdGVtLWxlZnQgeyAvLyBsYXRlclxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gfVxuXG4vLyAudG9kby1pdGVtLWxhYmVsIHtcbi8vICAgcGFkZGluZzogMTBweDtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4vLyAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuLy8gfVxuXG4vLyAudG9kby1pdGVtLWVkaXQge1xuLy8gICBmb250LXNpemU6IDI0cHg7XG4vLyAgIGNvbG9yOiAjMmMzZTUwO1xuLy8gICBtYXJnaW4tbGVmdDogMTJweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8vb3ZlcnJpZGUgZGVmYXVsdHNcbi8vICAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4vLyAgICY6Zm9jdXMge1xuLy8gICAgIG91dGxpbmU6IG5vbmU7XG4vLyAgIH1cbi8vIH1cblxuLy8gLmNvbXBsZXRlZCB7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuLy8gICBjb2xvcjogZ3JleTtcbi8vIH1cblxuLmV4dHJhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbn1cblxuLy8gQ1NTIFRyYW5zaXRpb25zXG4uZmFkZS1lbnRlci1hY3RpdmUsIC5mYWRlLWxlYXZlLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xufVxuXG4uZmFkZS1lbnRlciwgLmZhZGUtbGVhdmUtdG8ge1xuICBvcGFjaXR5OiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.anyRemainingModel = true;
        this.filter = 'all';
        this.beforeEditCache = '';
        this.idForTodo = 4;
        this.todoTitle = '';
        this.todos = [
            {
                'id': 1,
                'title': 'Finish Angular Screencast',
                'completed': false,
                'editing': false,
            },
            {
                'id': 2,
                'title': 'Take over world',
                'completed': false,
                'editing': false,
            },
            {
                'id': 3,
                'title': 'One more thing',
                'completed': false,
                'editing': false,
            },
        ];
    };
    TodoListComponent.prototype.addTodo = function () {
        if (this.todoTitle.trim().length === 0) {
            return;
        }
        this.todos.push({
            id: this.idForTodo,
            title: this.todoTitle,
            completed: false,
            editing: false
        });
        this.todoTitle = '';
        this.idForTodo++;
    };
    TodoListComponent.prototype.editTodo = function (todo) {
        this.beforeEditCache = todo.title;
        todo.editing = true;
    };
    TodoListComponent.prototype.doneEdit = function (todo) {
        if (todo.title.trim().length === 0) {
            todo.title = this.beforeEditCache;
        }
        todo.editing = false;
    };
    TodoListComponent.prototype.cancelEdit = function (todo) {
        todo.title = this.beforeEditCache;
        todo.editing = false;
    };
    TodoListComponent.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoListComponent.prototype.remaining = function () {
        return this.todos.filter(function (todo) { return !todo.completed; }).length;
    };
    TodoListComponent.prototype.todosFiltered = function () {
        if (this.filter === 'all') {
            return this.todos;
        }
        else if (this.filter === 'active') {
            return this.todos.filter(function (todo) { return !todo.completed; });
        }
        else if (this.filter === 'completed') {
            return this.todos.filter(function (todo) { return todo.completed; });
        }
        return this.todos;
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/components/todo-list/todo-list.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(30px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0px)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(30px)' }))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Myprogram\Download\todo-angular-02-passing-state\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map