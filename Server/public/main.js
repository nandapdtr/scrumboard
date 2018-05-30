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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\r\n<router-outlet></router-outlet>"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-dnd */ "./node_modules/@swimlane/ngx-dnd/release/index.js");
/* harmony import */ var _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");
/* harmony import */ var _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-edit/task-edit.component */ "./src/app/task-edit/task-edit.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Other Modules



//Components





//Services
// import { TaskService } from './task.service';
// import { LoaderService } from './loader.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_10__["TaskListComponent"],
                _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_11__["TaskEditComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_6__["CustomMaterialModule"],
                _swimlane_ngx_dnd__WEBPACK_IMPORTED_MODULE_5__["NgxDnDModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            entryComponents: [_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_11__["TaskEditComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-material/custom-material.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-material/custom-material.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
            ],
            declarations: []
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-hldr\">\n\t<mat-toolbar color=\"primary\">\n\t\t<span>Sample Scrumboard</span>\n\t</mat-toolbar>\n\t<div class=\"scrum-board-hldr\">\n\t\t<div class=\"flex-container\">\n\t\t\t<div *ngFor=\"let header of taskHeaders; first as isFirst\">\n\t\t\t\t<div class=\"col-hldr\">\n\t\t\t\t\t<mat-toolbar [class]=\"header\">\n\t\t\t\t\t\t<span>{{header | uppercase}}</span>\n\t\t\t\t\t\t<span class=\"spacer\"></span>\n\t\t\t\t\t\t<mat-icon (click)=\"openPopup()\" *ngIf=\"isFirst\">add</mat-icon>\n\t\t\t\t\t</mat-toolbar>\n\t\t\t\t\t<div class=\"col-body\">\n\t\t\t\t\t\t<app-task-list [taskData]=\"tasks[header]\" [taskStatus]=\"header\" (onDropped)=\"dropped($event)\"></app-task-list>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-hldr {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column; }\n\n.scrum-board-hldr {\n  position: relative;\n  flex: 1;\n  overflow-y: auto; }\n\n.flex-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.flex-container > div {\n    position: relative;\n    margin: 10px;\n    width: calc(16.66% - 20px); }\n\n.col-hldr {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column; }\n\n.col-hldr .backlog {\n    background-color: #00e3f7; }\n\n.col-hldr .plan {\n    background-color: #ffa500; }\n\n.col-hldr .develop {\n    background-color: #aa23f3; }\n\n.col-hldr .test {\n    background-color: #f77228; }\n\n.col-hldr .deploy {\n    background-color: #ffba04; }\n\n.col-hldr .done {\n    background-color: #33f733; }\n\n.col-hldr .backlog, .col-hldr .plan, .col-hldr .develop, .col-hldr .test, .col-hldr .deploy, .col-hldr .done {\n    color: #fff; }\n\n.col-hldr .col-body {\n    background-color: #e5e5e5;\n    overflow-y: auto;\n    position: relative;\n    flex: 1;\n    padding: 10px; }\n\n.col-body::-webkit-scrollbar {\n  width: 6px;\n  background-color: #e5e5e5; }\n\n.col-body::-webkit-scrollbar-thumb {\n  background-color: #af4e4a; }\n\nmat-icon {\n  cursor: pointer; }\n\n/* Medium Devices, Desktops */\n\n@media only screen and (max-width: 992px) {\n  .flex-container > div {\n    width: calc(33.33% - 20px);\n    height: 400px; } }\n\n/* Small Devices, Tablets */\n\n/* Extra Small Devices, Phones */\n\n@media only screen and (max-width: 480px) {\n  .flex-container > div {\n    width: calc(100% - 20px); } }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-edit/task-edit.component */ "./src/app/task-edit/task-edit.component.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(taskService, dialog) {
        this.taskService = taskService;
        this.dialog = dialog;
        this.unSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.taskHeaders = ['backlog', 'plan', 'develop', 'test', 'deploy', 'done'];
        this.tasks = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    //Gets all the tasks
    DashboardComponent.prototype.getTasks = function () {
        var _this = this;
        console.log('get tasks');
        this.taskService.getTasks()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unSubscribe)).subscribe(function (result) {
            _this.tasksData = result;
            console.log('inside getTasks', result);
            _this.distTasks();
        });
    };
    //Distributes all the tasks into respective categories
    DashboardComponent.prototype.distTasks = function () {
        var _loop_1 = function (status_1) {
            this_1.tasks[status_1] = this_1.tasksData.filter(function (item) { return item.status === status_1; });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.taskHeaders; _i < _a.length; _i++) {
            var status_1 = _a[_i];
            _loop_1(status_1);
        }
        console.log('inside distTasks', this.tasks);
    };
    //Opens a dialog to add new task
    DashboardComponent.prototype.openPopup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_4__["TaskEditComponent"], {
            width: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            result && _this.addTask(result);
        });
    };
    //Calls service to add new task into database
    DashboardComponent.prototype.addTask = function (task) {
        var _this = this;
        task.taskId = Date.now();
        task.status = 'backlog';
        this.taskService.addTask(task)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unSubscribe)).subscribe(function (result) {
            console.log(result);
            _this.tasks.backlog.push(result);
        }, function (error) { return console.log(error); });
    };
    //Method called from task list component after dropping the task
    DashboardComponent.prototype.dropped = function ($event) {
        console.log($event);
        console.log('before deleting', this.tasks[$event.value.prevStatus]);
        console.log('before inserting', this.tasks[$event.value.status]);
        var index = this.tasks[$event.value.prevStatus].findIndex(function (item) { return item.taskId === $event.value.taskId; });
        this.tasks[$event.value.prevStatus].splice(index, 1);
        console.log('after deleting', this.tasks[$event.value.prevStatus]);
        delete $event.value.prevStatus;
        this.tasks[$event.value.status].splice($event.dropIndex, 0, $event.value);
        console.log('after inserting', this.tasks[$event.value.status]);
        console.log(index);
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.unSubscribe.next();
        this.unSubscribe.unsubscribe();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/loader.service.ts":
/*!***********************************!*\
  !*** ./src/app/loader.service.ts ***!
  \***********************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ show: true });
        this.loaderState = this.loaderSub.asObservable();
    }
    LoaderService.prototype.show = function () {
        console.log('inside loader serive show method');
        this.loaderSub.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSub.next({ show: false });
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.loader-hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n    <div>\n      <mat-spinner *ngIf=\"show\"></mat-spinner>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.scss":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\n  visibility: hidden; }\n\n.loader-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  z-index: 500000;\n  background: rgba(0, 0, 0, 0.5); }\n\n.loader-overlay > div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader.service */ "./src/app/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState.subscribe(function (result) { _this.show = result.show; console.log(_this.show); });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/task-edit/task-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"task-form\" #taskForm=\"ngForm\">\n\t<div mat-dialog-content class=\"mat-form\">\n\t\t<mat-form-field>\n\t\t\t<input matInput [(ngModel)]=\"taskData.title\" placeholder=\"Title\" name=\"title\" required>\n\t\t</mat-form-field>\n\t\t<mat-form-field>\n\t\t\t<textarea matInput [(ngModel)]=\"taskData.description\" placeholder=\"Description\" name=\"description\" required></textarea>\n\t\t</mat-form-field>\n\t\t<mat-form-field>\n\t\t\t<textarea matInput [(ngModel)]=\"taskData.storyPoints\" placeholder=\"Story Points\" name=\"storyPoints\" required></textarea>\n\t\t</mat-form-field>\n\t\t<mat-form-field>\n\t\t\t<mat-select placeholder=\"Issue Type\" [(ngModel)]=\"taskData.issueType\" name=\"issueType\" [compareWith]=\"compareFn\" required>\n\t\t\t\t<mat-option>-- None --</mat-option>\n\t\t\t\t<ng-container *ngFor=\"let issue of issueTypes\">\n\t\t\t\t\t<mat-option *ngFor=\"let issue of issueTypes\" [value]=\"issue\">{{issue.value}}</mat-option>\n\t\t\t\t</ng-container>\n\t\t\t</mat-select>\n\t\t</mat-form-field>\n\t</div>\n\t<div mat-dialog-actions class=\"mat-btns\">\n\t\t<button mat-button (click)=\"cancel()\">Cancel</button>\n\t\t<button mat-button [mat-dialog-close]=\"taskData\" [disabled]=\"taskForm.invalid\">Ok</button>\n\t</div>\n</form>"

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.scss":
/*!****************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form mat-form-field {\n  width: 100%; }\n\n.mat-btns button {\n  flex: 1; }\n"

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.ts ***!
  \**************************************************/
/*! exports provided: TaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditComponent", function() { return TaskEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.taskData = {};
        this.issueTypes = [{ key: 'user-story', value: 'User Story' },
            { key: 'bug', value: 'Bug' },
            { key: 'task', value: 'Task' },
            { key: 'spike', value: 'Spike' }];
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        if (this.data) {
            this.taskData = this.data;
        }
    };
    TaskEditComponent.prototype.compareFn = function (task1, task2) {
        return task1 && task2 ? task1.key === task2.key : task1 === task2;
    };
    TaskEditComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    TaskEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-edit',
            template: __webpack_require__(/*! ./task-edit.component.html */ "./src/app/task-edit/task-edit.component.html"),
            styles: [__webpack_require__(/*! ./task-edit.component.scss */ "./src/app/task-edit/task-edit.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-list/task-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-card-container\">\n\t<div class=\"mat-card-hldr\" ngxDroppable=\"drop-zone\" (drop)=\"dropped($event)\">\n\t\t<mat-card class=\"material-card ngx-dnd-item\" [ngClass]=\"task.issueType.key\" *ngFor=\"let task of taskData; index as i\" [model]=\"task\" ngxDraggable>\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title class=\"task-title\">{{task.title}}</mat-card-title>\n\t\t\t\t<span class=\"spacer\"></span>\n\t\t\t\t<mat-icon class=\"material-icon\" (click)=\"editTask(task, i)\">edit</mat-icon>\n\t\t\t\t<mat-icon class=\"material-icon\" (click)=\"deleteTask(task, i)\">delete</mat-icon>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<p>{{task.description}}</p>\n\t\t\t\t<p>{{task.storyPoints}}</p>\n\t\t\t\t<p>{{task.issueType.value}}</p>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/task-list/task-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/task-list/task-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-container {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n  .mat-card-container .mat-card-hldr {\n    flex: 1;\n    position: relative; }\n  .mat-card-container .mat-card-hldr .material-card {\n      margin: 5px;\n      background-color: #fff;\n      padding: 10px; }\n  .mat-card-container .mat-card-hldr .material-card .task-title {\n        font-weight: bold; }\n  .mat-card-container .mat-card-hldr .material-card .material-icon {\n        margin: 5px;\n        cursor: pointer; }\n  .mat-card-container .mat-card-hldr .material-card p {\n        word-wrap: break-word; }\n  .mat-card-container .mat-card-hldr .material-card.bug {\n      border-left: 6px solid #ef4646; }\n  .mat-card-container .mat-card-hldr .material-card.task {\n      border-left: 6px solid #35d8e6; }\n  .mat-card-container .mat-card-hldr .material-card.user-story {\n      border-left: 6px solid #7dd438; }\n  .mat-card-container .mat-card-hldr .material-card.spike {\n      border-left: 6px solid #ffa500; }\n"

/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-edit/task-edit.component */ "./src/app/task-edit/task-edit.component.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(dialog, taskService) {
        this.dialog = dialog;
        this.taskService = taskService;
        this.onDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unSubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TaskListComponent.prototype.ngOnChanges = function () {
        console.log('onchanges in task-list', this.taskData);
    };
    TaskListComponent.prototype.ngOnInit = function () {
    };
    //opens a popup to edit the task
    TaskListComponent.prototype.editTask = function (task, taskInd) {
        var _this = this;
        var dialogRef = this.dialog.open(_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_4__["TaskEditComponent"], {
            width: '350px',
            data: Object.assign({}, task)
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed in edit');
            console.log(result);
            if (result) {
                _this.taskService.updateTask(result)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this.unSubscribe)).subscribe(function (res) {
                    console.log('afterupdate task in mat-card', res);
                    _this.taskData[taskInd] = result;
                }, function (error) { return console.log(error); });
            }
        });
    };
    //deletes the selected task
    TaskListComponent.prototype.deleteTask = function (task, taskInd) {
        var _this = this;
        console.log(task);
        this.taskService.deleteTask(task)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unSubscribe)).subscribe(function (result) {
            console.log(result);
            _this.taskData.splice(taskInd, 1);
        }, function (error) { return console.log(error); });
    };
    //Method fires on dropping a task
    TaskListComponent.prototype.dropped = function ($event) {
        var _this = this;
        console.log('dropping in task list');
        console.log(this.taskData);
        var eventData = $event;
        if (this.taskStatus !== eventData.value.status) {
            eventData.value.prevStatus = eventData.value.status;
            eventData.value.status = this.taskStatus;
            this.taskService.updateTask(eventData.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unSubscribe)).subscribe(function (res) {
                console.log('afterupdate task in mat-card', res);
                _this.onDropped.emit(eventData);
            }, function (error) { return console.log(error); });
        }
    };
    //destroy event of this component
    TaskListComponent.prototype.ngOnDestroy = function () {
        this.unSubscribe.next();
        this.unSubscribe.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TaskListComponent.prototype, "taskData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TaskListComponent.prototype, "taskStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TaskListComponent.prototype, "onDropped", void 0);
    TaskListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.scss */ "./src/app/task-list/task-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var TaskService = /** @class */ (function () {
    function TaskService(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
        this.url = 'http://localhost:3000/tasks';
    }
    TaskService.prototype.getTasks = function () {
        var _this = this;
        this.loaderService.show();
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.hideLoader(); }, function (error) { return _this.hideLoader(); }));
    };
    TaskService.prototype.addTask = function (task) {
        var _this = this;
        this.loaderService.show();
        return this.http.post(this.url, task, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.hideLoader(); }, function (error) { return _this.hideLoader(); }));
    };
    TaskService.prototype.updateTask = function (task) {
        var _this = this;
        this.loaderService.show();
        console.log('inside update task in task service');
        var url = this.url + "/" + task._id;
        return this.http.put(url, task)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.hideLoader(); }, function (error) { return _this.hideLoader(); }));
    };
    TaskService.prototype.deleteTask = function (task) {
        var _this = this;
        this.loaderService.show();
        var url = this.url + "/" + task._id;
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.hideLoader(); }, function (error) { return _this.hideLoader(); }));
    };
    TaskService.prototype.hideLoader = function () {
        this.loaderService.hide();
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], TaskService);
    return TaskService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\KLMAssignment\scrumboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map