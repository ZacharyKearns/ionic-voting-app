webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common_services_polls_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_poll_view_poll__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(pollsService, store, navCtrl) {
        this.pollsService = pollsService;
        this.store = store;
        this.navCtrl = navCtrl;
        this.polls = pollsService.polls;
        pollsService.loadPolls();
    }
    HomePage.prototype.ngOnDestroy = function () {
        this.store.dispatch({ type: 'RESET_POLLS' });
    };
    HomePage.prototype.viewPoll = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_poll_view_poll__["a" /* ViewPollPage */], { id: id });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/zacharykearns/projects/ionic_voting_app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Welcome to the polling app!</h3>\n\n  <polls-list [polls]="polls | async" (selectedPoll)="viewPoll($event)"></polls-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zacharykearns/projects/ionic_voting_app/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_common_services_polls_service__["a" /* PollsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_common_services_polls_service__["a" /* PollsService */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = 'https://shielded-dawn-63022.herokuapp.com/api/polls/';
var HEADER = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) };
var PollsService = (function () {
    function PollsService(http, store) {
        this.http = http;
        this.store = store;
        this.polls = store.select('polls');
    }
    PollsService.prototype.loadPolls = function () {
        var _this = this;
        this.http.get("" + BASE_URL)
            .map(function (res) { return res.json(); })
            .map(function (payload) { return ({ type: 'LOAD_POLLS', payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); });
    };
    PollsService.prototype.loadPoll = function (id) {
        var _this = this;
        this.http.get("" + BASE_URL + id)
            .map(function (res) { return res.json(); })
            .map(function (payload) { return ({ type: 'LOAD_POLL', payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); });
    };
    return PollsService;
}());
PollsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
], PollsService);

//# sourceMappingURL=polls.service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPollPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common_services_polls_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewPollPage = (function () {
    function ViewPollPage(pollsService, store, navParams) {
        var _this = this;
        this.pollsService = pollsService;
        this.store = store;
        this.navParams = navParams;
        this.id = this.navParams.get('id');
        this.polls = pollsService.polls;
        pollsService.loadPoll(this.id);
        this.polls.subscribe(function (polls) { return _this.poll = polls.activePoll; });
    }
    ViewPollPage.prototype.ngOnDestroy = function () {
        this.store.dispatch({ type: 'RESET_POLL' });
    };
    return ViewPollPage;
}());
ViewPollPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-poll',template:/*ion-inline-start:"/Users/zacharykearns/projects/ionic_voting_app/src/pages/view-poll/view-poll.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>{{ poll?.title }}</h3>\n\n  <h4>Votes</h4>\n\n  <ion-list>\n    <ion-item *ngFor="let option of poll?.options">\n      {{ option.option }}: {{ option.votes }}\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/zacharykearns/projects/ionic_voting_app/src/pages/view-poll/view-poll.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_common_services_polls_service__["a" /* PollsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_common_services_polls_service__["a" /* PollsService */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ViewPollPage);

//# sourceMappingURL=view-poll.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_services_user_service__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(userService, store) {
        var _this = this;
        this.userService = userService;
        this.store = store;
        this.user = userService.user;
        this.user.subscribe(function (user) { return _this.error = user.error; });
        this.formValues = {
            username: null,
            password: null
        };
    }
    LoginPage.prototype.login = function () {
        this.userService.loginUser(this.formValues);
        if (this.error) {
            this.store.dispatch({ type: 'RESET_LOGIN_ERROR' });
        }
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this.store.dispatch({ type: 'RESET_LOGIN_ERROR' });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/zacharykearns/projects/ionic_voting_app/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Please log in</h3>\n\n  <ion-item *ngIf="error" class="error" item-centered>{{ error.message }}</ion-item>\n  <form (ngSubmit)="login(values)">\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="formValues.username" name="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="formValues.password" name="password"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Log in</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zacharykearns/projects/ionic_voting_app/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_common_services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_common_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_common_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _b || Object])
], LoginPage);

var _a, _b;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_view_poll_view_poll__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_stores_polls_store__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_stores_user_store__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__polls_polls_list_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_view_poll_view_poll__["a" /* ViewPollPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__polls_polls_list_component__["a" /* PollsList */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* StoreModule */].forRoot({
                polls: __WEBPACK_IMPORTED_MODULE_9__common_stores_polls_store__["a" /* polls */],
                user: __WEBPACK_IMPORTED_MODULE_10__common_stores_user_store__["a" /* user */]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_view_poll_view_poll__["a" /* ViewPollPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/zacharykearns/projects/ionic_voting_app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/zacharykearns/projects/ionic_voting_app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = 'https://shielded-dawn-63022.herokuapp.com/api/users/login';
var HEADER = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) };
var UserService = (function () {
    function UserService(http, store) {
        this.http = http;
        this.store = store;
        this.user = store.select('user');
    }
    UserService.prototype.loginUser = function (values) {
        var _this = this;
        this.http.post("" + BASE_URL, values, HEADER)
            .map(function (res) { return res.json(); })
            .map(function (payload) { return ({ type: 'LOGIN_USER', payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); }, function (error) { return _this.store.dispatch({ type: 'LOGIN_ERROR', payload: JSON.parse(error._body) }); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polls; });
var initialState = {
    activePollList: [],
    activePoll: null
};
var polls = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case 'LOAD_POLLS':
            return Object.assign({}, state, { activePollList: payload });
        case 'RESET_POLLS':
            return Object.assign({}, state, { activePollList: [] });
        case 'LOAD_POLL':
            return Object.assign({}, state, { activePoll: payload });
        case 'RESET_POLL':
            return Object.assign({}, state, { activePoll: null });
        default:
            return state;
    }
};
//# sourceMappingURL=polls.store.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return user; });
var initialState = {
    user: null,
    status: null,
    error: null
};
var user = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case 'LOGIN_USER':
            return Object.assign({}, state, { user: payload.user });
        case 'LOGIN_ERROR':
            return Object.assign({}, state, { error: payload });
        case 'RESET_LOGIN_ERROR':
            return Object.assign({}, state, { error: null });
        default:
            return state;
    }
};
//# sourceMappingURL=user.store.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PollsList = (function () {
    function PollsList() {
        this.selectedPoll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    return PollsList;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], PollsList.prototype, "polls", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], PollsList.prototype, "selectedPoll", void 0);
PollsList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'polls-list',template:/*ion-inline-start:"/Users/zacharykearns/projects/ionic_voting_app/src/app/polls/polls-list.component.html"*/'<ion-list>\n  <button ion-item *ngFor="let poll of polls.activePollList" (click)="selectedPoll.emit(poll._id)">\n    {{ poll.title }}\n  </button>\n</ion-list>\n'/*ion-inline-end:"/Users/zacharykearns/projects/ionic_voting_app/src/app/polls/polls-list.component.html"*/
    })
], PollsList);

//# sourceMappingURL=polls-list.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map