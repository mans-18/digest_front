(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+01d":
/*!***************************************************!*\
  !*** ./src/app/report/report/report.component.ts ***!
  \***************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/api.service */ "hD8V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ReportComponent_div_2_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](":::", item_r4.event, " ", ev_r1.id, "");
} }
function ReportComponent_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportComponent_div_2_div_1_div_3_p_1_Template, 2, 2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ev_r1.id === item_r4.event);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.im1.slice(0, 50), "....");
} }
function ReportComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportComponent_div_2_div_1_div_3_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("If eventReports Length: ", ctx_r2.eventReports.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.eventReports);
} }
function ReportComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportComponent_div_2_div_1_Template, 4, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.eventReports.length > 0);
} }
class ReportComponent {
    constructor(apiService, route) {
        this.apiService = apiService;
        this.route = route;
        this.eventReports = [];
        this.events = [];
        this.im1ToDisplay = new Image();
        this.photo = null;
    }
    ngOnInit() {
        this.photo = document.getElementById('photo');
        this.getEvents();
        this.getEventReport();
        this.getEventReports();
        //this.decodeImage();
    }
    ngAfterViewInit() {
    }
    setAttr() {
        var src = this.eventReport.im1;
        this.photo.setAttribute('src', src);
    }
    getEventReports() {
        this.apiService.getEventReports()
            .subscribe(events => this.eventReports = events);
    }
    getEvents() {
        this.apiService.getEvents()
            .subscribe(events => this.events = events);
    }
    getEventReport() {
        const ix = +this.route.snapshot.paramMap.get('ix');
        this.apiService.getEventReport(ix)
            .subscribe(event => this.eventReport = event);
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["report"]], decls: 9, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["id", "photo"], ["id", "getAttr", 3, "click"], [4, "ngIf"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No eventReports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_7_listener() { return ctx.setAttr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get Im");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".snap-container[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    text-align: center;\n  }\n  \n  .list-unstyled[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n  \n  .list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 10px;\n    cursor: pointer;\n  }\n  \n  .show[_ngcontent-%COMP%] {\n    display: block;\n  }\n  \n  .hide[_ngcontent-%COMP%] {\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNuYXAtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubGlzdC11bnN0eWxlZCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBcbiAgLmxpc3QtdW5zdHlsZWQgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Miguel/ng/digest-rater/src/main.ts */"zUnb");


/***/ }),

/***/ "3hl/":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "5Jv5":
/*!*******************************************************!*\
  !*** ./src/app/assistant/assistant-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AssistantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantRoutingModule", function() { return AssistantRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AssistantRoutingModule {
}
AssistantRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AssistantRoutingModule });
AssistantRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AssistantRoutingModule_Factory(t) { return new (t || AssistantRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AssistantRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "5pvF":
/*!*****************************************!*\
  !*** ./src/services/message.service.ts ***!
  \*****************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7L5p":
/*!*******************************************************!*\
  !*** ./src/app/home/insurance/insurance.component.ts ***!
  \*******************************************************/
/*! exports provided: InsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceComponent", function() { return InsuranceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");



class InsuranceComponent {
    constructor(apiService, cookieService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        const mrToken = this.cookieService.get('mr-token');
        if (!mrToken) {
            document.getElementById('photoCap').hidden = true;
        }
    }
    // Used to toggle the menu on smaller screens when clicking on the menu button
    openNav() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        }
        else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    // Script for side navigation
    w3_open() {
        var x = document.getElementById("mySidebar");
        x.style.width = "300px";
        x.style.paddingTop = "10%";
        x.style.display = "block";
    }
    // Close side navigation
    w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }
}
InsuranceComponent.ɵfac = function InsuranceComponent_Factory(t) { return new (t || InsuranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
InsuranceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsuranceComponent, selectors: [["app-insurance"]], decls: 243, vars: 0, consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://www.w3schools.com/lib/w3-theme-black.css"], ["id", "myPage"], ["id", "fb-root"], ["id", "mySidebar", 1, "w3-sidebar", "w3-bar-block", "w3-white", "w3-card", "w3-animate-left", "w3-xxlarge", 2, "display", "none", "z-index", "2"], ["href", "javascript:void(0)", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button", "w3-display-topright", "w3-text-teal"], [1, "fa", "fa-remove"], ["href", "#", 1, "w3-bar-item", "w3-button"], [1, "w3-top", 2, "padding-top", "20px", "padding-right", "80px"], [1, "w3-bar", "w3-theme-d2", "w3-left-align"], ["href", "javascript:void(0);", 1, "w3-bar-item", "w3-button", "w3-hide-medium", "w3-hide-large", "w3-right", "w3-hover-white", "w3-theme-d2", 3, "click"], [1, "fa", "fa-bars"], ["href", "#", 1, "w3-bar-item", "w3-button", "w3-teal"], [1, "fa", "fa-home", "w3-margin-right", 2, "padding-left", "10px"], ["href", "team", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "products", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["onclick", "document.getElementById('insuranceModal').style.display='block'"], [1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "#contact", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], [1, "w3-dropdown-hover", "w3-hide-small"], ["title", "Notifications", 1, "w3-button"], [1, "fa", "fa-caret-down"], [1, "w3-dropdown-content", "w3-card-4", "w3-bar-block"], ["id", "photoCap"], ["href", "capture", 1, "w3-bar-item", "w3-button"], ["href", "themes", 1, "w3-bar-item", "w3-button"], ["href", "auth", 1, "w3-bar-item", "w3-button"], ["href", "https://www.google.com.br/search?q=digest%2Bcom.br", "title", "Search", "target", "_blank", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-right", "w3-hover-teal"], [1, "fa", "fa-search", 2, "padding-right", "40px"], ["id", "navDemo", 1, "w3-bar-block", "w3-theme-d2", "w3-hide", "w3-hide-large", "w3-hide-medium"], ["href", "team", 1, "w3-bar-item", "w3-button"], ["href", "products", 1, "w3-bar-item", "w3-button"], ["href", "insurance", 1, "w3-bar-item", "w3-button"], ["href", "#contact", 1, "w3-bar-item", "w3-button"], [1, "w3-display-container", "w3-animate-opacity"], ["src", "/assets/images/gcanyon1.jpg", "alt", "Digest", 2, "width", "100%", "min-height", "250px", "max-height", "600px"], [1, "w3-container", "w3-display-topright", "w3-display-bottomleft", "w3-margin-bottom"], [2, "font-size", "4vw", "padding-top", "40px"], [2, "font-size", "2vw"], ["data-href", "http://www.digest.com.br", "data-width", "", "data-layout", "button", "data-action", "like", "data-size", "small", "data-share", "false", 1, "fb-like"], [1, "w3-container", "w3-display-bottomright", "w3-margin-bottom"], ["title", "Contato", 1, "w3-button", "w3-large", "w3-theme", "w3-hover-teal"], ["href", "#contact"], ["id", "txt1"], ["id", "servs"], [1, "article"], [1, "wf-td", "hgroup"], [1, "h2-size"], [1, "wf-td"], [1, "assistive-text"], [0, "xmlns", "v", "http://rdf.data-vocabulary.org/#", 1, "breadcrumbs", "text-small"], ["typeof", "v:Breadcrumb"], ["rel", "v:url", "property", "v:title", "href", "home", "title", ""], [1, "current"], ["id", "main", 1, "sidebar-none"], [1, "main-gradient"], [1, "wf-wrap"], [1, "wf-container-main"], ["id", "content", "role", "main", 1, "content"], [1, "vc_row", "wpb_row", "vc_row-fluid", "dt-default", 2, "margin-top", "0px", "margin-bottom", "0px"], [1, "wpb_column", "vc_column_container", "vc_col-sm-4"], [1, "vc_column-inner"], [1, "wpb_wrapper"], [1, "standard-arrow", "list-divider", "bullet-top"], [1, "w3-container", "w3-padding-32", "w3-theme-d1", "w3-center"], ["href", "https://www.facebook.com/sharer/sharer.php?u=http://www.digest.com.br/static/catalog/z-ph.png&&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Facebook", "title", "Facebook", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-facebook"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-twitter"], ["href", "https://www.facebook.com/digestoficial", "target", "_blank", "title", "Facebook", 1, "w3-button", "w3-large", "w3-blue"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-cyan"], ["href", "https://www.instagram.com/digestoficial", "target", "_blank", "rel", "noopener", "title", "Instagram", 1, "w3-button", "w3-large", "w3-pink"], [1, "fa", "fa-instagram"], ["href", "http://www.digest.com.br", "target", "_blank"]], template: function InsuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Link 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Link 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceComponent_Template_a_click_27_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Saiba Mais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Foto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Videos Educativos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Temas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Digest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\"Diagn\u00F3stico, tratamento & preven\u00E7\u00E3o\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Deseja atendimento?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "article", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Servi\u00E7os:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Gastroenterologia & Hepatologia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Endoscopia Digestiva Alta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Colonoscopia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Ecoendoscopia ou Ultra-Som Endosc\u00F3pico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Colangiopancreatografia Retr\u00F3grada Endosc\u00F3pica (CPRE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Manometria Esof\u00E1gica e Anorretal de Alta Resolu\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "pHmetria Esof\u00E1gica de 24h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "pHmetria SEM SONDA, de 48h (Bravo)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Imped\u00E2ncio-pHmetria Esof\u00E1gica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h1", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Voc\u00EA est\u00E1 aqui:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ol", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "AMIL ASSISTENCIA MEDICA INTERNACIONAL LTDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "ASSEFAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "BANCO CENTRAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "BASE AEREA DE FORTALEZA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "BRADESCO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "BRADESCO PROCTOLOGIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "CAFAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "CAIXA ASSIST EMPREG EMPR BRASIL PESQ AGROP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "POSTAL SAUDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "CAMED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "CAPSESP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "CASSI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "EMBRATEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "FACHESF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "FAMED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "FUNCEF (SAUDE CAIXA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "FUSEX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "FUSMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "GEAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "HOSPITAL INFANTIL ALBERT SABIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "IPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "ISSEC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "ISSEC INTERIOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "JESU\u00CDTAS DO BRASIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "LIV SA\u00DADE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "LIFE EMPRESARIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "MEDISERVICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "MERCEEIROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "NORCLINICAS (INTERMEDICA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "NOTRE DAME SEGURADORA SA (INTERMEDICA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "PAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "PAS INTERIOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "PETROBRAS PETR\u00D3LEO AMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "PETROBRAS DISFOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "PLAN ASSISTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "PROASA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "REDE MAIS SA\u00DADE E VIDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "SUL AMERICA SERVICOS DE SAUDE SA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "UNIMED (TODOS PLANOS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "VAI BEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "VITALLIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "footer", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Compartilhe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Veja tamb\u00E9m:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Criado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "digest.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".servs[_ngcontent-%COMP%] {\n    background-color: lightblue;\n    text-align: center;\n    margin: auto;\n    width: 99%;\n    \n    border: 1px solid green;\n    clear: left;\n}\n.scale-down[_ngcontent-%COMP%] {object-fit: scale-down;}\n.center[_ngcontent-%COMP%] {text-align: center; padding: 0px}\n#center[_ngcontent-%COMP%] {text-align: center; margin-left:auto; margin-right:auto; display:block;}\nul[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3VyYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTs7SUFFVix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0EsYUFBYSxzQkFBc0IsQ0FBQztBQUNwQyxTQUFTLGtCQUFrQixFQUFFLFlBQVk7QUFFekMsU0FBUyxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLENBQUM7QUFFaEY7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoiaW5zdXJhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgY2xlYXI6IGxlZnQ7XG59XG4uc2NhbGUtZG93biB7b2JqZWN0LWZpdDogc2NhbGUtZG93bjt9XG4uY2VudGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDBweH1cblxuI2NlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tbGVmdDphdXRvOyBtYXJnaW4tcmlnaHQ6YXV0bzsgZGlzcGxheTpibG9jazt9XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59Il19 */", ""] });


/***/ }),

/***/ "7mpd":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _mainforms_event_form_modal_event_form_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mainforms/event-form-modal/event-form-modal.component */ "in7A");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");











const _c0 = ["calendar"];
function CalendarComponent_full_calendar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "full-calendar", 5, 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.calendarOptions);
} }
class CalendarComponent {
    // Create a temp event to pass to event-form component. There, St and Ti shall be extracted.
    // tempEvent: Event;
    // Refresh without reload - dont work
    // subscriptionRefresh: any;
    constructor(apiService, cookieService, dialog, router) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.router = router;
        this.calEvents = [];
        this.calTiTest = 'test calTI verbose';
        this.calData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.argTi = null;
        this.today = new Date();
        this.nextEvents = [];
        this.showCal = false;
        this.calendarVisible = true;
        this.calendarOptions = {
            locale: 'pt-br',
            //height: '400',
            //contentHeight: 'auto', // auto >> no scroll bar
            //aspectRatio: 1.5,
            titleFormat: {
                month: 'numeric',
                year: '2-digit',
                day: 'numeric',
            },
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'timeGridDay,resourceTimeline'
            },
            footerToolbar: {
                left: 'today',
                center: '',
                right: 'dayGridMonth,timeGridWeek'
            },
            buttonText: {
                today: 'Hoje',
                month: 'Mês',
                week: 'Semana',
                day: 'Dia',
                resourceTimeline: 'Salas',
            },
            initialView: 'dayGridMonth',
            // eventColor: '#378006', // No effect
            businessHours: [
                {
                    daysOfWeek: [1, 2, 3, 4, 5],
                    startTime: '07:00',
                    endTime: '20:00' // 6pm
                },
                {
                    daysOfWeek: [6],
                    startTime: '7:00',
                    endTime: '13:00' // 4pm
                }
            ],
            /* Some colors
            #1abc9c Verde
            #f5b041 Laranja
            #5dade2 Roxo
            steelblue Azul
            #566573 Cinza
            #008000 Verde escuro
            #f88bc1 Rosa
            #33f399 Verde claro
            #808000; Oliva escuro
            #8edbff; Azul claro
            #0fa1fc; Azul escuro
            #c2c205; Oliva claro
            */
            resources: [
                {
                    id: 'a',
                    title: 'Sala A',
                    eventColor: '#f88bc1',
                    constraint: {
                        resourceIds: ['a', 'b'] // constrain dragging to these
                    },
                    businessHours: {
                        startTime: '07:00',
                        endTime: '13:00'
                    }
                },
                {
                    id: 'b',
                    title: 'Sala B',
                    eventColor: '#008000',
                    constraint: {
                        resourceIds: ['a', 'b'] // constrain dragging to these
                    },
                    businessHours: {
                        startTime: '07:00',
                        endTime: '13:00',
                    }
                },
                {
                    id: 'c',
                    title: 'Consultório 1',
                    eventColor: '#0fa1fc',
                    businessHours: {
                        startTime: '07:00',
                        endTime: '19:00'
                    }
                },
                {
                    id: 'd',
                    title: 'Consultório 2',
                    eventColor: '#808000',
                    businessHours: {
                        startTime: '07:00',
                        endTime: '19:00'
                    }
                },
                {
                    id: 'e',
                    title: 'Sala E',
                    eventColor: '#f5b041',
                    businessHours: {
                        startTime: '13:00',
                        endTime: '20:00'
                    }
                },
                {
                    id: 'x',
                    title: 'Sem Sala',
                    eventColor: '#566573',
                },
            ],
            slotMinTime: "07:00:00",
            slotMaxTime: "20:00:00",
            weekends: true,
            editable: true,
            navLinks: true,
            //initialDate: '2021-02-19', //when loading
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            defaultTimedEventDuration: 1800000,
            select: this.handleDateSelect.bind(this),
            eventClick: this.handleEventClick.bind(this),
            eventsSet: this.handleEvents.bind(this),
            // eventResizableFromStart: this.handleResizableFromStart.bind(this),
            // eventDragStop: this.handleEventDragStop.bind(this),
            eventDrop: this.handleEventDrop.bind(this),
            // you can update a remote database when these fire:
            // eventAdd:
            eventChange: this.handleEventChange.bind(this),
        };
    }
    ngOnInit() {
        document.getElementById("efm").hidden = true;
        const mrToken = this.cookieService.get('mr-token');
        console.log('mrToken on cal:', mrToken);
        if (!mrToken) {
            this.router.navigate(['/auth']);
        }
        else {
            // Gets all data (type Event), extracts title and start, pushes them into callEvents(type EventInput).
            // This way there is no type conflict. Type error if you try to attribute data to calEvents directly.
            this.apiService.getEvents().subscribe((data) => {
                for (let i = 0; i < data.length; i++) {
                    let evs = { "id": String(data[i].id), "title": data[i].title, "start": data[i].start,
                        "color": data[i].color, "resourceId": data[i].resourceId, "persona": data[i].persona, "kollege": data[i].kollege };
                    this.calEvents.push(evs);
                    // It does it but inside a FOR LOOP it is inadequate.
                    this.calendarOptions.events = this.getEvents(this.calEvents);
                    this.calendarOptions.eventColor = evs.color;
                    this.calendarOptions.eventResizableFromStart = true;
                    this.calendarOptions.slotDuration = 900000;
                }
            }, error => console.log(error));
            this.apiService.getEvents().subscribe((data) => {
                let tempEv = [];
                for (let i = 0; i < data.length; i++) {
                    let evs = { "id": String(data[i].id), "title": data[i].title, "start": data[i].start,
                        "color": data[i].color, "persona": data[i].persona, "kollege": data[i].kollege };
                    tempEv.push(evs);
                }
                let tempToday = [];
                for (let el of tempEv) {
                    if (Date.parse(el.start) > Date.now() && Date.parse(el.start) < Date.now() + 86400000) {
                        tempToday.push(el);
                        console.log('el: ', Date.parse(el.start));
                    }
                }
                this.nextEvents = tempToday;
                // console.log('BBBB: ', 'test', this.todayEvents,tempToday, Date.now());
            }, error => console.log(error));
        }
    }
    ngAfterViewInit() {
        // this.calSt = this.eventFormComponent.formSt
        // console.log('@Input vars on cal after: ', this.calSt, this.calTi)
        // this.todayEvents = this.getTodayEvents();
        // console.log('todayEv: ', this.calEvents)
        // Set the eventColor. Fix a bug of eventColor white at times.
        //const calAPI = this.calendarComponent.getApi();
        //calAPI.setOption('eventColor', 'steelblue');
    }
    // sendFormCtrl(arg) { this.eventForm.sendFormCtrl(arg)};
    removeCalendar() {
        const calAPI = this.calendarComponent.getApi();
        calAPI.el.remove();
    }
    toggleCalendar() {
        let showCal = !this.showCal;
        const calAPI = this.calendarComponent.getApi();
        calAPI.el.hidden = showCal;
        this.showCal = showCal;
    }
    // Events need to be got by a function on the htlm component
    getEvents(arg) {
        let evs = [];
        for (let i = 0; i <= arg.length - 1; i++) {
            if (arg[i].color !== '#FFFFFF') {
                let el = { "id": arg[i].id, "title": arg[i].title, "start": arg[i].start, "color": arg[i].color,
                    "resourceId": arg[i].resourceId, "persona": arg[i].persona, "kollege": arg[i].kollege };
                evs.push(el);
            }
        }
        return evs;
    }
    handleCalendarToggle() {
        this.calendarVisible = !this.calendarVisible;
    }
    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }
    // USE: fill in the event-form;
    // Instead of accessing a property,
    // getFormCtrl captures an empty eventForm instance emitted from event-form
    // component and patches it with the values set in the handleDateSelect
    // function: calTi, calSt, and calTime.
    // The patch needed to be done here, where the values from handleDateSelect
    // are available.
    getFormCtrl(arg) {
        // console.log('event arg: ', arg);
        arg.patchValue({ title: this.calTi, start: this.calSt, time: this.calTime, resourceId: this.calResource });
        //console.log("patched: ", arg, this.calSt, this.calTime);
    }
    // getCalPersonas(arg) {
    //   console.log('personas emitted form event-form:', arg);
    // }
    createEvent() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        // dialogConfig.maxHeight = '400px';
        // dialogConfig.width = '600px';
        // dialogConfig.data = {  // TO PASS DATA to the dialog
        //   id, name, mobile, whatsapp, telephone, email, street,
        //   complement, postalcode, dob, registerdate, comment
        // };
        const dialogRef = this.dialog.open(_mainforms_event_form_modal_event_form_modal_component__WEBPACK_IMPORTED_MODULE_2__["EventFormModalComponent"], // TO PASS DATA to the dialog: { data: { id: 1 }});
        dialogConfig);
        dialogRef.afterClosed().subscribe(
        // This returns a plain object { k: v, ...}
        //val => console.log("Dialog output:", val),
        // This returns an object Object
        val => {
            console.log(`Dialog output: , ${val}`);
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_mainforms_event_form_modal_event_form_modal_component__WEBPACK_IMPORTED_MODULE_2__["EventFormModalComponent"], {
            data: {
                title: this.calData.emit() //this.calTi,
                //start: this.calSt
            }
        });
        console.log('title: ', this.calTi, this.calSt, this.calTime, this.calResource);
    }
    handleDateSelect(selectInfo) {
        document.getElementById("efm").hidden = false;
        console.log('selectInfo:', selectInfo, 'sel endstr', selectInfo.endStr, 'Date diff', (Date.parse(selectInfo.endStr) - Date.parse(selectInfo.startStr)), 'new Date', new Date(selectInfo.start), 'get:', selectInfo.start.getHours());
        //if (selectInfo.start.getHours() < 20 && selectInfo.start.getHours() > 6) {
        if ((Date.parse(selectInfo.endStr) - Date.parse(selectInfo.startStr)) < 1800009) {
            const title = prompt('Please enter a new title for your event');
            // Bug: backgroundColor gets white, at times. Corrected when the two line
            // below are commented out
            const calendarApi = selectInfo.view.calendar;
            calendarApi.unselect(); // clear date selection
            const date = new Date(selectInfo.start);
            //this.calStart = date;
            calendarApi.zoomTo(date); // goes to the selected day/dayview
            // Set at ngAfterInit
            // calendarApi.setOption('eventColor', 'red'); // Change at runtime
            // Split date and time
            const calStArray = selectInfo.startStr.split('T');
            // Date
            const calSt1 = calStArray[0];
            // Time
            const calSt2 = calStArray[1].slice(0, 5);
            // const color = selectInfo.jsEvent
            // Resource
            const calAPI = this.calendarComponent.getApi();
            // sensored in strict mode
            //calAPI.el = null;
            if (selectInfo.resource) {
                const calRes = selectInfo.resource._resource.id;
                this.calSt = calSt1;
                this.calTime = calSt2;
                this.calTi = title;
                this.calResource = calRes;
            }
            else {
                if (title) {
                    // Create bindings to title and start
                    // Navigate to 'event-form'
                    // Capture them in event-form.component
                    // Test the data flow from calendar.component to event-form.component
                    // Set the corresponding form fields to them
                    // Three items below have already been implemented (could be better, a search instead of select)
                    // Search persona
                    // If null, fill out the new form
                    // Else, set persona
                    setTimeout(() => { this.calTi = title; }, 2000);
                    this.calSt = calSt1;
                    this.calTime = calSt2;
                    //this.calTi = title;
                    this.calResource = 'x';
                    console.log("cal var: ", this.calSt, this.calTi, this.calResource);
                    // Perhaps refresh and inside a kind of init() call getFormCtrl()
                    // this.callGetFormCtrl();
                    // this.sendFormCtrl();
                    // When it navigates, there is no data binding on cal..html ([formSt]="calSt")
                    // this.router.navigate(['event-form'],)
                    // calendarApi.addEvent({
                    //   id: createEventId(),
                    //   title,
                    //   start: selectInfo.startStr,
                    //   end: selectInfo.endStr,
                    //   allDay: selectInfo.allDay
                    // });
                }
                //let calStt = Date.parse(calSt1);
                //let calSttt
                //console.log("cal var: ", this.calSt, this.calTime, this.calTi, this.calResource);
            }
            //} else {alert('Please go to week or day view')}
            //Instead go right to the day view
        }
        else {
            const date = new Date(selectInfo.start);
            const calendarApi = selectInfo.view.calendar;
            calendarApi.zoomTo(date);
        }
        //} else {alert('Please select another time from 7 AM to 8 PM')}
        //setTimeout(() => this.createEvent(), 1000);
        //Cannot pass data to dialog!!! So navigate to event-form-modal
        //this.openDialog();
        //const calAPI = this.calendarComponent.getApi();
        //calAPI.el.hidden = true;
        //this.router.navigate(['event-form-modal/'],);
    }
    handleEventClick(clickInfo) {
        // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        //   clickInfo.event.remove();
        // console.log('clikInfo', clickInfo.event);
        // }
        // Test to pass data to clickroute by the going url. In this cas: event start
        const calendarAPI = clickInfo.event.start;
        const idx = clickInfo.event.id;
        const clickRoute = `event-form-detail/${idx}`;
        this.router.navigate([clickRoute, { clickInfo: calendarAPI },]);
        // if (confirm(`Are you sure you want to delete this event '${clickInfo.event.title}'`)) {
        // console.log('getEvents on eventclick: ', this.getEvents(28));
        //   clickInfo.event.color = '#FFFFFF';
        //   // this.eventss = this.eventss.filter(h => h !== event);
        //   // this.apiService.deleteEvent(event).subscribe();
        //   this.apiService.putEventDel(clickInfo.event.id, clickInfo.event.title, clickInfo.event.start, clickInfo.event.color, clickInfo.event.persona, clickInfo.event.kollege).subscribe();
        //   }
        //this.openDialog();
    }
    handleEvents(events) {
        // this.currentEvents = events;
    }
    handleEventDrop(arg) {
        console.log('drAAggin;', arg);
        let evs = this.getEvents(this.calEvents);
        let persona = 0;
        let kollege = 0;
        for (let e of evs) {
            if (e.id == arg.event.id) {
                persona = e.persona;
            }
        }
        for (let e of evs) {
            if (e.id == arg.event.id) {
                kollege = e.kollege;
            }
        }
        // let dragResourceId = arg.newResource._resource.id;
        // console.log(dragResourceId);
        if (arg.newResource) {
            console.log('arg.newRes::', arg.event.id, arg.event.title, arg.event.startStr, arg.newResource._resource.id);
            this.apiService.putEvent(arg.event.id, arg.event.title, arg.event.startStr, arg.newResource._resource.id, persona, kollege).subscribe();
        }
        else {
            this.apiService.putEvent_(arg.event.id, arg.event.title, arg.event.startStr, persona, kollege).subscribe();
        }
        ////// PRINT ARG TO SEE ALL THE TREE OF ARG DATA
        // console.log('test arg:', arg);
        // console.log('test:', arg.newResource._resource.id);
        // location.reload();
        // this.router.navigate(['dashboard'],);
        // Does with bug: not always dragging to refresh th table
        // this.router.navigateByUrl('/', {skipLocationChange: true})
        // .then(() => this.router.navigate(['interface']));
    }
    ////// This event may interfere with drop  //////
    handleEventChange(arg) {
        // console.log('resizing:', arg.event);
        let evs = this.getEvents(this.calEvents);
        let persona;
        let kollege;
        for (let e of evs) {
            if (e.id == arg.event.id) {
                persona = e.persona;
            }
        }
        for (let e of evs) {
            if (e.id == arg.event.id) {
                kollege = e.kollege;
            }
        }
        /////// This code was overriding the putEvent of handleEventDrop above ///////
        // this.apiService.putEvent_(arg.event.id, arg.event.title, arg.event.startStr,
        //   persona,
        //   kollege).subscribe(
        //   )
        // location.reload();
    }
    eviClicked(arg) {
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["calendar-root"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.calendarComponent = _t.first);
    } }, outputs: { calData: "calData" }, decls: 5, vars: 6, consts: [[1, "demo-app"], [1, "demo-app-main"], [3, "options", 4, "ngIf"], ["id", "efm", 1, "demo-app-modal"], [3, "calSt", "calTi", "calTime", "calResource", "calTiTest"], [3, "options"], ["calendar", ""]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarComponent_full_calendar_2_Template, 2, 1, "full-calendar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-event-form-modal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calendarVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calSt", ctx.calSt)("calTi", ctx.calTi)("calTime", ctx.calTime)("calResource", ctx.calResource)("calTiTest", ctx.calTiTest);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _mainforms_event_form_modal_event_form_modal_component__WEBPACK_IMPORTED_MODULE_2__["EventFormModalComponent"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__["FullCalendarComponent"]], styles: ["h2[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 16px;\n  }\n\nul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0 0 0 1.5em;\n  }\n\nli[_ngcontent-%COMP%] {\n    margin: 1.5em 0;\n    padding: 0;\n  }\n\nb[_ngcontent-%COMP%] { \n    margin-right: 3px;\n  }\n\n.demo-app[_ngcontent-%COMP%] {\n    display: flex; \n    column-count: 2;\n    min-height: 100%;\n    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n    font-size: 11px;\n  }\n\n.demo-app-sidebar[_ngcontent-%COMP%] {\n    width: 300px;\n    line-height: 1.5;\n    background: #eaf9ff;\n    border-right: 1px solid #d3e2e8;\n  }\n\n.demo-app-sidebar-section[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n\n.demo-app-main[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding: 2em;\n  }\n\n.demo-app-modal[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n\n.fc[_ngcontent-%COMP%] { \n    max-width: 1100px;\n    margin: 0 auto;\n    font-size: 11px;\n  }\n\n.fc-toolbar-title[_ngcontent-%COMP%] { \n    font-size: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSCxTQUFTOztBQUNQO0dBQ0M7O0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRzs7QUFFSDtJQUNJLFNBQVM7SUFDVCxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsU0FBUztJQUNULG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0VBQ1o7O0FBRUEsSUFBSSwrQkFBK0I7SUFDakMsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsYUFBYSxFQUFFLDBEQUEwRDtJQUN6RSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlEQUF5RDtJQUN6RCxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsK0JBQStCO0VBQ2pDOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQSxNQUFNLHNCQUFzQjtJQUMxQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBRUEsb0JBQW9CLGdDQUFnQztJQUNsRCxlQUFlO0VBQ2pCIiwiZmlsZSI6ImNhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMS41ZW07XG59XG5cbmxpIHtcbiAgbWFyZ2luOiAxLjVlbSAwO1xuICBwYWRkaW5nOiAwO1xufSAqL1xuXG4vKiBiIHsgICovXG4gIC8qIG1hcmdpbi1yaWdodDogM3B4O1xufSAqL1xuLyogXG4uZGVtby1hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRlbW8tYXBwLXNpZGViYXIge1xuICB3aWR0aDogMzAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJhY2tncm91bmQ6ICNlYWY5ZmY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UyZTg7XG59XG5cbi5kZW1vLWFwcC1zaWRlYmFyLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAyZW07XG59XG5cbi5kZW1vLWFwcC1tYWluIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAzZW07XG59XG5cbi5mYyB7IFxuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59ICovXG5cbmgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIFxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMCAwIDEuNWVtO1xuICB9XG4gIFxuICBsaSB7XG4gICAgbWFyZ2luOiAxLjVlbSAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIGIgeyAvKiB1c2VkIGZvciBldmVudCBkYXRlcy90aW1lcyAqL1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICB9XG4gIFxuICAuZGVtby1hcHAge1xuICAgIGRpc3BsYXk6IGZsZXg7IC8qZmxleGJveCBnZXRzIHNpemVzIHRoYXQgZG9udCBkaXNwbGF5IGV2ZW50cyBvbiB0aGUgY2FsISovXG4gICAgY29sdW1uLWNvdW50OiAyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICBcbiAgLmRlbW8tYXBwLXNpZGViYXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJhY2tncm91bmQ6ICNlYWY5ZmY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTJlODtcbiAgfVxuICBcbiAgLmRlbW8tYXBwLXNpZGViYXItc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG4gIFxuICAuZGVtby1hcHAtbWFpbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgfVxuXG4gIC5kZW1vLWFwcC1tb2RhbCB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIFxuICAuZmMgeyAvKiB0aGUgY2FsZW5kYXIgcm9vdCAqL1xuICAgIG1heC13aWR0aDogMTEwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC5mYy10b29sYmFyLXRpdGxlIHsgLyogbm8gZWZmZWN0IC0gbG93IHNwZWNpZmljaXR5PyovXG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiJdfQ== */"] });


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message.service */ "5pvF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MessagesComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2, " ");
} }
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.messageService.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
} }
class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Eek8":
/*!****************************************************!*\
  !*** ./src/app/traceboard/traceboard.component.ts ***!
  \****************************************************/
/*! exports provided: TraceboardComponent, StatusDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceboardComponent", function() { return TraceboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusDialogComponent", function() { return StatusDialogComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "hD8V");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









function TraceboardComponent_a_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function TraceboardComponent_a_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r4.nameStatusIn(ev_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ev_r1.status);
} }
function TraceboardComponent_a_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraceboardComponent_a_3_ng_template_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.activateEvent(ev_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r6.nameStatusOut(ev_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ev_r1.status);
} }
function TraceboardComponent_a_3_span_11_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/event-form-detail/", ev_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ev_r1.resourceId, "-", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 4, per_r15.name, 0, 8), " (", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 8, ev_r1.start, "h:mm"), ")");
} }
function TraceboardComponent_a_3_span_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TraceboardComponent_a_3_span_11_span_1_span_1_Template, 6, 11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ev_r1.persona == per_r15.id);
} }
function TraceboardComponent_a_3_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TraceboardComponent_a_3_span_11_span_1_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ev_r1.color !== "#FFFFFF");
} }
function TraceboardComponent_a_3_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Entra");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TraceboardComponent_a_3_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sai");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TraceboardComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Example with a access_time icon with overlaid badge showing the number 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TraceboardComponent_a_3_div_5_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TraceboardComponent_a_3_ng_template_6_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TraceboardComponent_a_3_ng_template_8_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TraceboardComponent_a_3_span_11_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraceboardComponent_a_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ev_r1 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.enableBt2(ev_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TraceboardComponent_a_3_span_13_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraceboardComponent_a_3_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ev_r1 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.disableBt2(ev_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TraceboardComponent_a_3_span_16_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matBadge", ev_r1.genericChar1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ev_r1.status == "Em Atendimento")("ngIfThen", _r3)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.personas);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.bt1Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r0.nameBt1(ev_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ev_r1.status == "Aguardando");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.bt2Color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r0.nameBt2(ev_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ev_r1.status == "Em Atendimento");
} }
function StatusDialogComponent_ul_3_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusDialogComponent_ul_3_span_1_span_1_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.setStatusOutOnDB(ev_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Aguardando");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusDialogComponent_ul_3_span_1_span_1_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.setStatusInOnDB(ev_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Em Atendimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusDialogComponent_ul_3_span_1_span_1_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.setStatusOffOnDB(ev_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Cancelado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const iev_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](iev_r2);
} }
function StatusDialogComponent_ul_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StatusDialogComponent_ul_3_span_1_span_1_Template, 12, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r4 = ctx.$implicit;
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ev_r1.persona == per_r4.id);
} }
function StatusDialogComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StatusDialogComponent_ul_3_span_1_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.personas);
} }
class TraceboardComponent {
    constructor(apiService, dialog) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.events = [];
        this.eventos = [];
        this.personas = [];
        this.todayEvents = [];
        this.today = Date.now();
        this.evv = [];
        this.bt1Status = false;
        this.bt2Status = true;
        this.bt2Color = 'rgb(150, 2,4)';
        this.bt1Color = 'rgb(0, 79, 10)';
        this.procedureIni = [];
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            kolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    openDialog() {
        this.dialog.open(StatusDialogComponent, {});
    }
    ngOnInit() {
        this.getEvents();
        this.getPersonas();
        // this.getKollegen();
        this.getTodayEvents();
        this.changeVar();
    }
    getEvents() {
        this.apiService.getEvents()
            .subscribe(arg => this.events = arg.slice(0, 15));
    }
    // Get today events that are confirmed
    getTodayEvents() {
        this.apiService.getEvents()
            .subscribe(arg => this.todayEvents = arg.filter(
        /*    r => (r.status=='Finalizado' ||
            r.status=='Confirmado' ||
            r.status=='Em Atendimento' ||
            r.status=='Aguardando')
            && (r.color!=='#FFFFFF')))*/
        r => //r.color=='#008000'
         (new Date(r.start).getTime() > Date.now() - 30000)
            && (new Date(r.start).getTime() < Date.now() + 86400000)));
    }
    changeVar() {
        this.todayEvents = this.evv;
    }
    getPersonas() {
        this.apiService.getPersonas()
            .subscribe(data => this.personas = data);
        console.log('personass: ', this.personas);
    }
    // Name the element according to the event id so we have a different element for each event
    nameBt1(arg) {
        let name = `bt${arg.id}`;
        return name;
    }
    nameBt2(arg) {
        let name = `bt${arg.id}+1`;
        return name;
    }
    // Need to have a completed status in the BD
    // nameFinalizado(arg: Event) {
    //   let name = `Finalizado${arg.id}+1`
    //   return name
    // }
    nameStatusIn(arg) {
        let name = `inStatus${arg.id}+1`;
        return name;
    }
    nameStatusOut(arg) {
        let name = `outStatus${arg.id}+1`;
        return name;
    }
    // Makes the key for the dic: idIni<string>:stTime<number> 
    // nameProcedureIni(arg: Event) {
    //   let name = `procedureIni${arg.id}`
    //   return name
    // }
    activateEvent(event) {
        for (let evt of this.todayEvents) {
            if (evt.id == event.id) {
                event.status = 'Aguardando';
                this.apiService.putEventConf(event.id, event.title, event.partner, event.start, event.color, event.status, event.addtitle2, event.persona, event.kollege, event.genericChar1, event.genericNumber1).subscribe();
            }
        }
    }
    enableBt2(event) {
        for (let evt of this.todayEvents) {
            if (evt.id == event.id) {
                // ERROR: procedureIni must be unique for each event attendance
                // We can keep the procedureIni value in a dic where each key is the event.id
                // let stTime = Date.now();
                // console.log('stTime at def', stTime, this.procedureIni)
                // let idIni = this.nameProcedureIni(evt);
                // let pIni = [];
                // this.procedureIni.push({idIni, stTime});
                // this.procedureIni["stTime"] = stTime
                // this.procedureIni["idIni"] = idIni
                // procedureIni is array of objects with key = name of the event, and value = stTime
                // this.procedureIni.push({"idIni": stTime});
                // this.procedureIni.push({"abc":1234});
                // Object.assign(this.procedureIni, pIni)
                // for (let x of this.procedureIni) {
                // console.log('idIni at enablebt2', idIni)
                // }
                // if (idIni in this.procedureIni) {
                //   console.log('if in', 'yes', this.nameProcedureIni(evt).valueOf)
                // }
                // let p = this.procedureIni;
                // let sttt = this.getObjStTime(p);
                // let iddd = this.getObjIdIni(p);
                // console.log('this.procedureIni', typeof(p), p[0].idIni, this.procedureIni)
                evt.genericChar1 = ''; // resets the badge when one entra again.
                // But does not sums the first entry and the followings
                evt.status = 'Em Atendimento';
                evt.genericNumber1 = Date.now();
                console.log(evt.genericNumber1, evt.id);
                this.apiService.putEventConf(evt.id, evt.title, evt.partner, evt.start, evt.color, evt.status, evt.addtitle2, evt.persona, evt.kollege, evt.genericChar1, evt.genericNumber1).subscribe();
                let name1 = this.nameBt1(event);
                let el1 = document.getElementById(name1);
                el1.style.backgroundColor = 'rgb(55, 255, 45)';
                el1.hidden = true;
                let name2 = this.nameBt2(event);
                let el2 = document.getElementById(name2);
                el2.hidden = false;
            }
            // location.reload()
            // this.bt2Status = false
            // this.bt1Status = true
            // document.write(Date())
        }
        // }
    }
    disableBt2(event) {
        if (event) {
            for (let evt of this.todayEvents) {
                console.log(evt, event);
                if (evt.id == event.id) {
                    let endTime = Date.now();
                    // let idIni = this.nameProcedureIni(evt);
                    // When reload, stTime gets null. That's because it depends on the event triggered on the html (click on "sai")
                    let stTime = evt.genericNumber1;
                    console.log('end', endTime, 'st', stTime);
                    // for (let x of this.procedureIni) {
                    //   x.stTime = this.procedureIni["stTime"];
                    //   console.log('xxxx', x, this.procedureIni);
                    // }
                    // Value is wrong for the specific event
                    if (stTime !== null) {
                        evt.genericChar1 = String(Math.round((endTime - stTime) / 60000));
                    }
                    evt.status = 'Finalizado';
                    this.apiService.putEventConf(evt.id, evt.title, evt.partner, evt.start, evt.color, evt.status, evt.addtitle2, evt.persona, evt.kollege, evt.genericChar1, evt.genericNumber1).subscribe();
                    if (event.status == 'Finalizado') {
                        let name = this.nameBt2(event);
                        let el = document.getElementById(name);
                        el.hidden = true;
                    }
                    // if (event.status == 'Finalizado') {
                    //   let nameFinal = this.nameFinalizado(event)
                    //   var elFinal = document.getElementById(nameFinal)
                    //   elFinal.hidden = false
                    // }
                    let eStatus = this.nameStatusIn(event);
                    let eleStatus = document.getElementById(eStatus);
                    eleStatus.hidden = true;
                    console.log('disablebt2', this.procedureIni);
                    //TODO
                    // this.nameBadge(event, this.procedureDuration)
                }
            }
        }
    }
}
TraceboardComponent.ɵfac = function TraceboardComponent_Factory(t) { return new (t || TraceboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
TraceboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TraceboardComponent, selectors: [["app-traceboard"]], decls: 4, vars: 1, consts: [[2, "cursor", "pointer", 3, "click"], [1, "grid", "grid-pad"], ["class", "col-1-4", 4, "ngFor", "ngForOf"], [1, "col-1-4"], ["matBadgeColor", "warn", 3, "matBadge"], [1, "cdk-visually-hidden"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["id", "traceBox", 1, "module"], [4, "ngFor", "ngForOf"], ["id", "iniTrace", 2, "background-color", "transparent", "font-size", "4mm", "border", "none", 3, "id", "click"], [4, "ngIf"], ["id", "endTrace", 2, "background-color", "transparent", "font-size", "4mm", "border", "none", 3, "id", "click"], [2, "color", "#008000", "text-align", "center", 3, "id"], [2, "cursor", "pointer", "color", "red", "text-align", "center", 3, "id", "click"], ["routerLinkActive", "router-link-active", 3, "routerLink"]], template: function TraceboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraceboardComponent_Template_h3_click_0_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Eventos de Hoje");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TraceboardComponent_a_3_Template, 17, 13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.todayEvents);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["[class*='col-'][_ngcontent-%COMP%] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n  [class*='col-'][_ngcontent-%COMP%]:last-of-type {\n    padding-right: 0;\n  }\n  a[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n    box-sizing: border-box;\n  }\n  h3[_ngcontent-%COMP%] {\n    \n    text-align: center;\n    margin-bottom: 0;\n  }\n  h4[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .grid[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .col-1-4[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n  .module[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-align: left;\n    color: #eee;\n    max-height: 120px;\n    min-width: 120px;\n    background-color: #3f525c;\n    border-radius: 2px;\n    overflow: auto;\n  }\n  .module[_ngcontent-%COMP%]:hover {\n    background-color: #faf3d2;\n    cursor: pointer;\n    color: #607d8b;\n  }\n  .grid-pad[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n  .grid-pad[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:last-of-type {\n    padding-right: 20px;\n  }\n  @media (max-width: 600px) {\n    .module[_ngcontent-%COMP%] {\n      font-size: 10px;\n      max-height: 175px; }\n  }\n  @media (max-width: 1024px) {\n    .grid[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n    .module[_ngcontent-%COMP%] {\n      min-width: 60px;\n    }\n  }\n  \n  .fab[_ngcontent-%COMP%]{\n    position: fixed;\n    \n\n    width:60px;\n    height:60px;\n    \n    bottom:40px;\n    right:40px;\n    background-color:#0C9;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    \n    box-shadow: 2px 2px 3px #999;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNlYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBR0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRTtNQUNFLGVBQWU7TUFDZixpQkFBaUIsRUFBRTtFQUN2QjtFQUNBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRjtFQUVBOztLQUVHO0VBRUg7SUFDRSxlQUFlO0lBQ2Y7aUJBQ2E7O0lBRWIsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtFQUM5QjtFQUtDOzs7Ozs7Ozs7Ozs7OztRQWNLO0VBRU47OztJQUdFO0VBQ0Y7Ozs7Ozs7OztLQVNHIiwiZmlsZSI6InRyYWNlYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9J2NvbC0nXSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAqLCAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGgzIHtcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIGg0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmdyaWQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuY29sLTEtNCB7XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxuICAubW9kdWxlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICNlZWU7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MjVjO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICAubW9kdWxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmM2QyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzYwN2Q4YjtcbiAgfVxuICAuZ3JpZC1wYWQge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuICAuZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5tb2R1bGUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgbWF4LWhlaWdodDogMTc1cHg7IH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmdyaWQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAubW9kdWxlIHtcbiAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICB9XG4gIH1cblxuICAvKiBkaXY6aG92ZXIgaDMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9ICovXG5cbiAgLmZhYntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLyogYm90dG9tOjEwcHg7XG4gICAgcmlnaHQ6MTBweDsgKi9cblxuICAgIHdpZHRoOjYwcHg7XG4gICAgaGVpZ2h0OjYwcHg7XG4gICAgLyogdG9wOjQwcHg7ICovXG4gICAgYm90dG9tOjQwcHg7XG4gICAgcmlnaHQ6NDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwQzk7XG4gICAgY29sb3I6I0ZGRjtcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgLyogcGFkZGluZy10b3A6IDEuMSU7ICovXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgfVxuXG5cblxuICBcbiAgIC8qIC5mYWIgYnV0dG9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2I2MGIzO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwuNCk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIFxuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1vdXQ7XG4gICAgfSAgKi9cbiAgXG4gIC8qIC5mYWIgYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgICovXG4gIC8qIC5mYWIgYnV0dG9uLm1haW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YjE5Yjc7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDIwO1xuICB9ICovIl19 */"] });
class StatusDialogComponent {
    constructor(data, apiService) {
        this.data = data;
        this.apiService = apiService;
        this.events = [];
        this.personas = [];
        this.todayEvents = [];
        this.today = Date.now();
    }
    // trackByFn(iev) {
    //   iev = iev+1
    //   this.index = iev
    //   console.log('track', iev, this.index)
    //   return this.index; 
    // } 
    ngOnInit() {
        this.getEvents();
        this.getPersonas();
        this.getTodayEvents();
        // this.changeVar();
    }
    getEvents() {
        this.apiService.getEvents()
            .subscribe(arg => this.events = arg.slice(0, 15));
    }
    getTodayEvents() {
        this.apiService.getEvents()
            .subscribe(arg => this.todayEvents = arg.filter(r => new Date(r.start).getTime() > Date.now() - 60300000));
    }
    // changeVar() {
    //   this.todayEvents = this.evv;
    // }
    getPersonas() {
        this.apiService.getPersonas()
            .subscribe(data => this.personas = data);
    }
    setStatusInOnDB(event) {
        // this.data = data
        // console.log('set', event.status, this.data) // this.data and data are undefined
        event.status = "Em Atendimento";
        this.apiService.putEventConf(event.id, event.title, event.partner, event.start, event.color, event.status, event.addtitle2, event.persona, event.kollege, event.genericChar1, event.genericNumber1).subscribe();
        location.reload();
    }
    setStatusOutOnDB(event) {
        event.status = "Aguardando";
        this.apiService.putEventConf(event.id, event.title, event.partner, event.start, event.color, event.status, event.addtitle2, event.persona, event.kollege, event.genericChar1, event.genericNumber1).subscribe();
        location.reload();
    }
    setStatusOffOnDB(event) {
        event.status = "Cancelado";
        this.apiService.putEventConf(event.id, event.title, event.partner, event.start, event.color, event.status, event.addtitle2, event.persona, event.kollege, event.genericChar1, event.genericNumber1).subscribe();
        location.reload();
    }
}
StatusDialogComponent.ɵfac = function StatusDialogComponent_Factory(t) { return new (t || StatusDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
StatusDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StatusDialogComponent, selectors: [["app-status-dialog"]], decls: 4, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "color", "blue"], [2, "cursor", "pointer", 3, "click"]], template: function StatusDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Qual o estado do atendimento?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StatusDialogComponent_ul_3_Template, 2, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.todayEvents);
    } }, encapsulation: 2 });


/***/ }),

/***/ "FHe0":
/*!***********************************************!*\
  !*** ./src/app/mainforms/mainforms.module.ts ***!
  \***********************************************/
/*! exports provided: MainformsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainformsModule", function() { return MainformsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_angutils_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/angutils.module */ "I2XR");
/* harmony import */ var _shared_angmat_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/angmat.module */ "OIqw");
/* harmony import */ var _mainforms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainforms-routing.module */ "UghC");
/* harmony import */ var _event_form_modal_event_form_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-form-modal/event-form-modal.component */ "in7A");
/* harmony import */ var _event_form_detail_event_form_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-form-detail/event-form-detail.component */ "mt6o");
/* harmony import */ var _kollege_form_modal_kollege_form_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kollege-form-modal/kollege-form-modal.component */ "eVYu");
/* harmony import */ var _persona_form_detail_persona_form_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./persona-form-detail/persona-form-detail.component */ "OP6d");
/* harmony import */ var _persona_form_modal_persona_form_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./persona-form-modal/persona-form-modal.component */ "cdK/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class MainformsModule {
}
MainformsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: MainformsModule });
MainformsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function MainformsModule_Factory(t) { return new (t || MainformsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _mainforms_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainformsRoutingModule"],
            _shared_angutils_module__WEBPACK_IMPORTED_MODULE_1__["AngutilsModule"],
            _shared_angmat_module__WEBPACK_IMPORTED_MODULE_2__["AngmatModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](MainformsModule, { declarations: [_event_form_modal_event_form_modal_component__WEBPACK_IMPORTED_MODULE_4__["EventFormModalComponent"],
        _event_form_detail_event_form_detail_component__WEBPACK_IMPORTED_MODULE_5__["EventFormDetailComponent"],
        _kollege_form_modal_kollege_form_modal_component__WEBPACK_IMPORTED_MODULE_6__["KollegeFormModalComponent"],
        _persona_form_detail_persona_form_detail_component__WEBPACK_IMPORTED_MODULE_7__["PersonaFormDetailComponent"],
        _persona_form_modal_persona_form_modal_component__WEBPACK_IMPORTED_MODULE_8__["PersonaFormModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _mainforms_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainformsRoutingModule"],
        _shared_angutils_module__WEBPACK_IMPORTED_MODULE_1__["AngutilsModule"],
        _shared_angmat_module__WEBPACK_IMPORTED_MODULE_2__["AngmatModule"]], exports: [_event_form_modal_event_form_modal_component__WEBPACK_IMPORTED_MODULE_4__["EventFormModalComponent"]] }); })();


/***/ }),

/***/ "GIjN":
/*!****************************************************!*\
  !*** ./src/app/home/hometree/modalEx.component.ts ***!
  \****************************************************/
/*! exports provided: ModalExComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalExComponent", function() { return ModalExComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ModalExComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalExComponent.ɵfac = function ModalExComponent_Factory(t) { return new (t || ModalExComponent)(); };
ModalExComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalExComponent, selectors: [["app-modalEx"]], decls: 25, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], [1, "w3-container"], ["onclick", "document.getElementById('id01').style.display='block'", 1, "w3-button", "w3-black"], ["id", "id01", 1, "w3-modal"], [1, "w3-modal-content", "w3-card-4"], [1, "w3-container", "w3-teal"], ["onselect", "document.getElementById('id01').style.display='none'", 1, "w3-button", "w3-display-topright"]], template: function ModalExComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "W3.CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contatos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nossos telefones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "85 3252-5469");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "85 3224-1547");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Endere\u00E7o: ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbEV4LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "I2XR":
/*!*******************************************!*\
  !*** ./src/app/shared/angutils.module.ts ***!
  \*******************************************/
/*! exports provided: AngutilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngutilsModule", function() { return AngutilsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AngutilsModule {
}
AngutilsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AngutilsModule });
AngutilsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AngutilsModule_Factory(t) { return new (t || AngutilsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        ], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AngutilsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]], exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "KIgb":
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function() { return CalendarRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class CalendarRoutingModule {
}
CalendarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CalendarRoutingModule });
CalendarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CalendarRoutingModule_Factory(t) { return new (t || CalendarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "KT9E":
/*!*****************************************************!*\
  !*** ./src/app/home/products/products.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");



class ProductsComponent {
    constructor(apiService, cookieService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        const mrToken = this.cookieService.get('mr-token');
        if (!mrToken) {
            document.getElementById('photoCap').hidden = true;
        }
    }
    // Used to toggle the menu on smaller screens when clicking on the menu button
    openNav() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        }
        else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    // Script for side navigation
    w3_open() {
        var x = document.getElementById("mySidebar");
        x.style.width = "300px";
        x.style.paddingTop = "10%";
        x.style.display = "block";
    }
    // Close side navigation
    w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 317, vars: 0, consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://www.w3schools.com/lib/w3-theme-black.css"], ["id", "myPage"], ["id", "fb-root"], ["id", "mySidebar", 1, "w3-sidebar", "w3-bar-block", "w3-white", "w3-card", "w3-animate-left", "w3-xxlarge", 2, "display", "none", "z-index", "2"], ["href", "javascript:void(0)", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button", "w3-display-topright", "w3-text-teal"], [1, "fa", "fa-remove"], ["href", "#", 1, "w3-bar-item", "w3-button"], [1, "w3-top", 2, "padding-top", "20px", "padding-right", "80px"], [1, "w3-bar", "w3-theme-d2", "w3-left-align"], ["href", "javascript:void(0);", 1, "w3-bar-item", "w3-button", "w3-hide-medium", "w3-hide-large", "w3-right", "w3-hover-white", "w3-theme-d2", 3, "click"], [1, "fa", "fa-bars"], ["href", "#", 1, "w3-bar-item", "w3-button", "w3-teal"], [1, "fa", "fa-home", "w3-margin-right", 2, "padding-left", "10px"], ["href", "team", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "products", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["onclick", "document.getElementById('insuranceModal').style.display='block'"], [1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "#contact", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], [1, "w3-dropdown-hover", "w3-hide-small"], ["title", "Notifications", 1, "w3-button"], [1, "fa", "fa-caret-down"], [1, "w3-dropdown-content", "w3-card-4", "w3-bar-block"], ["id", "photoCap"], ["href", "capture", 1, "w3-bar-item", "w3-button"], ["href", "themes", 1, "w3-bar-item", "w3-button"], ["href", "auth", 1, "w3-bar-item", "w3-button"], ["href", "https://www.google.com.br/search?q=digest%2Bcom.br", "title", "Search", "target", "_blank", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-right", "w3-hover-teal"], [1, "fa", "fa-search", 2, "padding-right", "40px"], ["id", "navDemo", 1, "w3-bar-block", "w3-theme-d2", "w3-hide", "w3-hide-large", "w3-hide-medium"], ["href", "team", 1, "w3-bar-item", "w3-button"], ["href", "products", 1, "w3-bar-item", "w3-button"], ["href", "insurance", 1, "w3-bar-item", "w3-button"], ["href", "#contact", 1, "w3-bar-item", "w3-button"], [1, "w3-display-container", "w3-animate-opacity"], ["src", "/assets/images/gcanyon1.jpg", "alt", "Digest", 2, "width", "100%", "min-height", "250px", "max-height", "600px"], [1, "w3-container", "w3-display-topright", "w3-display-bottomleft", "w3-margin-bottom"], [2, "font-size", "4vw", "padding-top", "40px"], [2, "font-size", "2vw"], ["data-href", "http://www.digest.com.br", "data-width", "", "data-layout", "button", "data-action", "like", "data-size", "small", "data-share", "false", 1, "fb-like"], [1, "w3-container", "w3-display-bottomright", "w3-margin-bottom"], ["title", "Contato", 1, "w3-button", "w3-large", "w3-theme", "w3-hover-teal"], ["href", "#contact"], ["id", "insuranceModal", "onclick", "document.getElementById('insuranceModal').style.display='none'", 1, "w3-modal"], [1, "w3-modal-content", "w3-card-4", "w3-animate-top"], [1, "w3-container", "w3-teal", "w3-display-container"], ["onclick", "document.getElementById('insuranceModal').style.display='none'", 1, "w3-button", "w3-teal", "w3-display-topright"], [1, "fa", "fa-smile-o"], [1, "wf-td", "hgroup"], [1, "h2-size"], [1, "wf-td"], [1, "assistive-text"], ["id", "main", 1, "sidebar-none"], [1, "main-gradient"], [1, "wf-wrap"], [1, "wf-container-main"], ["id", "content", "role", "main", 1, "content"], [1, "vc_row", "wpb_row", "vc_row-fluid", "dt-default", 2, "margin-top", "0px", "margin-bottom", "0px"], [1, "wpb_column", "vc_column_container", "vc_col-sm-4"], [1, "vc_column-inner"], [1, "wpb_wrapper"], [1, "standard-arrow", "list-divider", "bullet-top"], [1, "w3-container", "w3-teal"], [1, "w3-ul", "w3-card-4"], [1, "w3-bar"], ["src", "/assets/images/gastroscopy_fig1.png", 1, "w3-bar-item", "w3-circle", "w3-hide-small", 2, "width", "75px"], [1, "w3-bar-item"], [1, "w3-large"], ["onclick", "this.parentElement.style.display='none'", 1, "w3-bar-item", "w3-button", "w3-white", "w3-xlarge", "w3-right"], ["src", "/assets/images/colonoscopy_fig1.png", 1, "w3-bar-item", "w3-circle", "w3-hide-small", 2, "width", "75px"], [1, "w3-container", "w3-padding-32", "w3-theme-d1", "w3-center"], ["href", "https://www.facebook.com/sharer/sharer.php?u=http://www.digest.com.br/static/catalog/z-ph.png&&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Facebook", "title", "Facebook", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-facebook"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-twitter"], ["href", "https://www.facebook.com/digestoficial", "target", "_blank", "title", "Facebook", 1, "w3-button", "w3-large", "w3-blue"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-cyan"], ["href", "https://www.instagram.com/digestoficial", "target", "_blank", "rel", "noopener", "title", "Instagram", 1, "w3-button", "w3-large", "w3-pink"], [1, "fa", "fa-instagram"], ["href", "http://www.digest.com.br", "target", "_blank"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Link 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Link 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_27_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Saiba Mais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Foto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Videos Educativos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Temas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Digest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\"Diagn\u00F3stico, tratamento & preven\u00E7\u00E3o\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Deseja atendimento?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "header", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Ol\u00E1! Seja bem vindo..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Espero que encontre o que precisa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h1", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Clique em qualquer lugar para fechar esta janela ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "AMIL ASSISTENCIA MEDICA INTERNACIONAL LTDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "ASSEFAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "BANCO CENTRAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "BASE AEREA DE FORTALEZA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "BRADESCO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "BRADESCO PROCTOLOGIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "CAFAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "CAIXA ASSIST EMPREG EMPR BRASIL PESQ AGROP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "POSTAL SAUDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "CAMED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "CAPSESP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "CASSI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "EMBRATEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "FACHESF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "FAMED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "FUNCEF (SAUDE CAIXA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "FUSEX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "FUSMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "GEAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "HOSPITAL INFANTIL ALBERT SABIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "IPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "ISSEC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "ISSEC INTERIOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "JESU\u00CDTAS DO BRASIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "LIV SA\u00DADE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "LIFE EMPRESARIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "MEDISERVICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "MERCEEIROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "NORCLINICAS (INTERMEDICA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "NOTRE DAME SEGURADORA SA (INTERMEDICA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "PAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "PAS INTERIOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "PETROBRAS PETR\u00D3LEO AMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "PETROBRAS DISFOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "PLAN ASSISTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "PROASA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "REDE MAIS SA\u00DADE E VIDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "SUL AMERICA SERVICOS DE SAUDE SA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "UNIMED (TODOS PLANOS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "VAI BEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "VITALLIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "footer", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Modal footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "ul", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Endoscopia Digestiva Alta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Para o diagn\u00F3stico e preven\u00E7\u00E3o de refluxo, gastrite, H pylori, \u00FAlcera, tumores do es\u00F4fago, est\u00F4mago, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Colonoscopia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Para preven\u00E7\u00E3o de c\u00E2ncer de intestino, e diagn\u00F3stico de doen\u00E7as do intestino.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Ecoendoscopia ou Ultra-Som Endosc\u00F3pico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Para detalhar/coletar material de n\u00F3dulos ou cistos da parede do tubo digestivo, p\u00E2ncreas, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Colangiopancreatografia Retr\u00F3grada Endosc\u00F3pica (CPRE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Para retirar c\u00E1lculo do f\u00EDgado ou desobstruir as vias biliares decorrentes de estenoses ou tumores.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Manometria Esof\u00E1gica de Alta Resolu\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Para o estudo do refluxo, dor no meio do peito (ap\u00F3s ir ao cardiologista), disfagia (\"entalo\").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Manometria Anorretal de Alta Resolu\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Para o estudo de problemas com a defeca\u00E7\u00E3o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "pHmetria Esof\u00E1gica de 24 h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Mede a acidez do es\u00F4fago para o diagn\u00F3stico da doen\u00E7a do refluxo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "pHmetria Esof\u00E1gica SEM SONDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Mede a acidez do es\u00F4fago para o diagn\u00F3stico de refluxo sem sonda (telemetria) por 48h ou mais.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Imped\u00E2ncio-pHmetria Esof\u00E1gica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Para refluxo e dist\u00FArbios da ingest\u00E3o/elimina\u00E7\u00E3o de ar. Mede todo tipo de refluxo: \u00E1cido, n\u00E3o-\u00E1cido e de ar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "footer", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Compartilhe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Veja tamb\u00E9m:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Criado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "digest.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".servs[_ngcontent-%COMP%] {\n    background-color: lightblue;\n    text-align: center;\n    margin: auto;\n    width: 99%;\n    \n    border: 1px solid green;\n    clear: left;\n}\n.scale-down[_ngcontent-%COMP%] {object-fit: scale-down;}\n.center[_ngcontent-%COMP%] {text-align: center; padding: 0px}\n#center[_ngcontent-%COMP%] {text-align: center; margin-left:auto; margin-right:auto; display:block;}\nul[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCOzs7Ozs7OztLQVFLO0FBRUw7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVOztJQUVWLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFDQSxhQUFhLHNCQUFzQixDQUFDO0FBQ3BDLFNBQVMsa0JBQWtCLEVBQUUsWUFBWTtBQUV6QyxTQUFTLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztBQUVoRjtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVhZGVyL2xvZ28gVGl0bGUgKi9cbi8qIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICM4NTg2ODY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQ6IDVlbS8zLjkgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9nY2FueW9uMS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfSAqL1xuICBcbi5zZXJ2cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDk5JTtcbiAgICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBjbGVhcjogbGVmdDtcbn1cbi5zY2FsZS1kb3duIHtvYmplY3QtZml0OiBzY2FsZS1kb3duO31cbi5jZW50ZXIge3RleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMHB4fVxuXG4jY2VudGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1sZWZ0OmF1dG87IG1hcmdpbi1yaWdodDphdXRvOyBkaXNwbGF5OmJsb2NrO31cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn0iXX0= */", ""] });


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AuthComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_span_27_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.registerMode = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Don't have an account? Register here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_span_28_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.registerMode = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This account already exists? Go to login.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AuthComponent {
    constructor(apiService, cookieService, router) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.router = router;
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.cookieService.get('currentUser')),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
        this.registerMode = false;
    }
    ngOnInit() {
        //this.getUsers();
        // If the token exists (user logged in), goes to calendar without logging in again
        const mrToken = this.cookieService.get('mr-token');
        console.log('mrToken on auth:', mrToken);
        if (mrToken) {
            this.router.navigate(['/dashboard']);
        }
    }
    // getUsers() {
    //   this.apiService.getUsers().subscribe(result => {console.log('users', result)}, error => console.log(error));
    // }
    saveForm() {
        console.log(document.cookie, 'authFormValue', this.authForm.value);
        if (!this.registerMode) {
            this.loginUser();
        }
        else {
            this.apiService.registerUser(this.authForm.value).subscribe(result => {
                this.loginUser();
            }, error => console.log(error));
        }
    }
    loginUser() {
        this.apiService.loginUser(this.authForm.value).subscribe((result) => {
            // this.cookieService.set('mr-token', result.token, 159888,'','', false);
            this.cookieService.set('mr-token', result.token); //document.cookie,);
            this.cookieService.set('currentUser', this.authForm.value.username);
            if (this.authForm.value.username == 'marina@dig.com') {
                this.router.navigate(['/assistant']);
            }
            else {
                this.router.navigate(['/dashboard']);
            }
        }, error => console.log(error));
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 29, vars: 5, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "row"], [1, "column", "intro"], [1, "authCard", "displayed"], [2, "text-align", "center"], ["src", "../assets/images/marFolheto.gif", 1, "displayed"], [1, "column", "login"], [1, "authCard"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "username"], ["type", "password", "formControlName", "password"], ["type", "submit"], [4, "ngIf"], [3, "click", 4, "ngIf"], [3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Bem vindo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "85 3252-5469");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_12_listener() { return ctx.saveForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AuthComponent_span_24_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AuthComponent_span_25_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AuthComponent_span_27_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AuthComponent_span_28_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.registerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.registerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerMode);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n    margin: 0;\n}\n\n.authCard[_ngcontent-%COMP%] {\n    max-width: 400px;\n    min-height: 300px;\n}\n\n.row[_ngcontent-%COMP%] {\n    padding-top: 40px;\n}\n\n.column[_ngcontent-%COMP%] {\n    float: left;\n    padding: 10px;\n    border-style: double;\n    border-color: tomato;\n}\n\n.column.login[_ngcontent-%COMP%] {\n    width: 30%;\n}\n\n.column.intro[_ngcontent-%COMP%] {\n    width: 70%;\n}\n\n\n\nimg.displayed[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.authCard.displayed[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n\n.row[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n\n\n@media screen and (max-width: 600px) {\n    .column.login[_ngcontent-%COMP%], .column.column.intro[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsc0NBQXNDOztBQUN0QztJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsbUNBQW1DOztBQUNuQztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBOytCQUMrQjs7QUFDL0I7SUFDSTtNQUNFLFdBQVc7SUFDYjtBQUNKIiwiZmlsZSI6ImF1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmF1dGhDYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ucm93IHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgICBib3JkZXItY29sb3I6IHRvbWF0bztcbn1cblxuLmNvbHVtbi5sb2dpbiB7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLmNvbHVtbi5pbnRybyB7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLyogVHVybiB0aGUgaW1nIGEgYmxvY2sgdG8gY2VudGVyIGl0ICovXG5pbWcuZGlzcGxheWVkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5hdXRoQ2FyZC5kaXNwbGF5ZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0aHJlZSBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyXG5pbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29sdW1uLmxvZ2luLCAuY29sdW1uLmNvbHVtbi5pbnRybyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "LVab":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-routing.module */ "UkO7");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report/report.component */ "+01d");
/* harmony import */ var _report_form_report_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-form/report-form.component */ "v68L");
/* harmony import */ var _shared_angmat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/angmat.module */ "OIqw");
/* harmony import */ var _shared_angutils_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/angutils.module */ "I2XR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ReportModule {
}
ReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ReportModule });
ReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ReportModule_Factory(t) { return new (t || ReportModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_1__["ReportRoutingModule"],
            _shared_angmat_module__WEBPACK_IMPORTED_MODULE_4__["AngmatModule"],
            _shared_angutils_module__WEBPACK_IMPORTED_MODULE_5__["AngutilsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ReportModule, { declarations: [_report_report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"],
        _report_form_report_form_component__WEBPACK_IMPORTED_MODULE_3__["ReportFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _report_routing_module__WEBPACK_IMPORTED_MODULE_1__["ReportRoutingModule"],
        _shared_angmat_module__WEBPACK_IMPORTED_MODULE_4__["AngmatModule"],
        _shared_angutils_module__WEBPACK_IMPORTED_MODULE_5__["AngutilsModule"]], exports: [_report_report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"],
        _report_form_report_form_component__WEBPACK_IMPORTED_MODULE_3__["ReportFormComponent"]] }); })();


/***/ }),

/***/ "N1dO":
/*!*************************************************!*\
  !*** ./src/app/shared/angmat-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class SharedRoutingModule {
}
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "O51e":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_angutils_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/angutils.module */ "I2XR");
/* harmony import */ var _mainforms_mainforms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mainforms/mainforms.module */ "FHe0");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-routing.module */ "KIgb");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/timegrid */ "PjKf");
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/resource-timeline */ "eYnI");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar.component */ "7mpd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");





 // a plugin
 // a plugin
 // a plugin



_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__["default"],
    _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__["default"],
    _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_8__["default"],
]);
class CalendarModule {
}
CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CalendarModule });
CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_angutils_module__WEBPACK_IMPORTED_MODULE_1__["AngutilsModule"],
            _mainforms_mainforms_module__WEBPACK_IMPORTED_MODULE_2__["MainformsModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_4__["CalendarRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CalendarModule, { declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_9__["CalendarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_angutils_module__WEBPACK_IMPORTED_MODULE_1__["AngutilsModule"],
        _mainforms_mainforms_module__WEBPACK_IMPORTED_MODULE_2__["MainformsModule"],
        _calendar_routing_module__WEBPACK_IMPORTED_MODULE_4__["CalendarRoutingModule"]] }); })();


/***/ }),

/***/ "OIqw":
/*!*****************************************!*\
  !*** ./src/app/shared/angmat.module.ts ***!
  \*****************************************/
/*! exports provided: AngmatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngmatModule", function() { return AngmatModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angmat_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angmat-routing.module */ "N1dO");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");


























class AngmatModule {
}
AngmatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AngmatModule });
AngmatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ factory: function AngmatModule_Factory(t) { return new (t || AngmatModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angmat_routing_module__WEBPACK_IMPORTED_MODULE_1__["SharedRoutingModule"],
            //Material
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angmat_routing_module__WEBPACK_IMPORTED_MODULE_1__["SharedRoutingModule"],
        //Material
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AngmatModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angmat_routing_module__WEBPACK_IMPORTED_MODULE_1__["SharedRoutingModule"],
        //Material
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angmat_routing_module__WEBPACK_IMPORTED_MODULE_1__["SharedRoutingModule"],
        //Material
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"]] }); })();


/***/ }),

/***/ "OP6d":
/*!********************************************************************************!*\
  !*** ./src/app/mainforms/persona-form-detail/persona-form-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: PersonaFormDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaFormDetailComponent", function() { return PersonaFormDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "hD8V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function PersonaFormDetailComponent_ul_0_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const kol_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r4.title, "(M\u00E9dico: ", kol_r2.name, "): ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, item_r4.start, "d/M/yy, h:mm, a"), " ");
} }
function PersonaFormDetailComponent_ul_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonaFormDetailComponent_ul_0_span_1_span_1_Template, 4, 6, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const kol_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.kollege == kol_r2.id);
} }
function PersonaFormDetailComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonaFormDetailComponent_ul_0_span_1_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.personaEvents);
} }
function PersonaFormDetailComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PersonaFormDetailComponent_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.saveForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mobile:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WhatsApp:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Telephone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "e-Mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Street:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Complement:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Postal Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "DOB:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Register Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.personaFormDetail);
} }
class PersonaFormDetailComponent {
    constructor(apiService, route, router, formBuider) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.formBuider = formBuider;
        this.events = [];
        this.personaEvents = [];
        this.personas = [];
        this.kollegen = [];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
        this.personaUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.personaCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = null;
    }
    // person: Observable<Persona>;
    set persona(value) {
        this.id = value.id;
        // A simple *ngIf on the template solved the problemof incomplete form loading!
        // Does not solve the incomplete form loading problem
        // this.personaFormDetail = this.formBuider.group({
        //   name: [value.name, Validators.required],
        //   mobile: [value.mobile, Validators.required],
        //   whatsapp: [value.whatsapp, Validators.required],
        //   telephone: [value.telephone, Validators.required],
        //   email: [value.email, Validators.required],
        //   street: [value.street, Validators.required],
        //   complement: [value.complement, Validators.required],
        //   postalcode: [value.postalcode, Validators.required],
        //   dob: [value.dob, Validators.required],
        //   registerdate: [new Date(), Validators.required],
        //   comment: [value.comment, Validators.required],
        // });
        this.personaFormDetail = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.name),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.mobile),
            whatsapp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.whatsapp),
            telephone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.telephone),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.email),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.street),
            complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.complement),
            postalcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.postalcode),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.dob),
            registerdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date()),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](value.comment),
        });
    }
    ngOnInit() {
        // Seems id is null
        // this.personaFormDetail = this.formBuider.group({
        //   name: ["", Validators.required],
        //   mobile: ["", Validators.required],
        //   whatsapp: ["", Validators.required],
        //   telephone: ["", Validators.required],
        //   email: ["", Validators.required],
        //   street: ["", Validators.required],
        //   complement: ["", Validators.required],
        //   postalcode: ["", Validators.required],
        //   dob: ["", Validators.required],
        //   registerdate: [new Date(), Validators.required],
        //   comment: ["", Validators.required],
        // });
        // this.apiService
        //   .getPersona(this.id)
        //   .pipe(tap(persona => this.personaFormDetail.patchValue
        //     (persona)));
        this.getPersonas();
        // To prevent the form not getting the value: get it async? Observable?
        // Or put the form inside a life cycle function (did not do it)
        this.getPersona();
        this.getEvents();
        this.getKollegen();
        // console.log('form persona: ', this.persona);
        console.log('persEvents', this.getPersonaEvents());
    }
    ngAfterViewInit() {
    }
    getEvents() {
        this.apiService.getEvents()
            .subscribe(events => this.events = events);
        console.log('events on pers: ', this.events);
    }
    getPersonaEvents() {
        this.apiService.getEvents()
            .subscribe(events => this.personaEvents = events.filter(event => String(event.persona) == this.route.snapshot.paramMap.get('id')));
        // console.log('events on pers: ', this.events);
    }
    getPersonas() {
        this.apiService.getPersonas()
            .subscribe(data => this.personas = data);
        console.log('On PersFormDet:', this.personas);
        // let personaName: string;
        // this.personas.forEach(el => {this.eventForm.value.persona==el.id?this.personaName=el.name:null});
        console.log('personaName: ', this.personas);
    }
    getPersona() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.apiService.getPersona(id)
            .subscribe(persona => this.persona = persona);
    }
    getKollegen() {
        this.apiService.getKollegen()
            .subscribe(data => this.kollegen = data);
        console.log('kollegen: ', this.kollegen);
    }
    saveForm() {
        if (this.id) {
            // TOUCHES THE DB
            this.apiService.updatePersona(this.id, 
            // the order here. Must be the same as the bd
            this.personaFormDetail.value.name, this.personaFormDetail.value.mobile, this.personaFormDetail.value.whatsapp, this.personaFormDetail.value.telephone, this.personaFormDetail.value.email, this.personaFormDetail.value.street, this.personaFormDetail.value.complement, this.personaFormDetail.value.postalcode, this.personaFormDetail.value.dob, this.personaFormDetail.value.registerdate, this.personaFormDetail.value.comment).subscribe((result) => {
                // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
                this.personaUpdated.emit(result);
            }, error => console.log(error));
            // this.router.navigate(['calendar'],);
            // Does not refresh
            this.router.navigate(['events']);
        }
        else {
            // TOUCHES THE DB
            this.apiService.createPersona(this.personaFormDetail.value.name, this.personaFormDetail.value.mobile, this.personaFormDetail.value.whatsapp, this.personaFormDetail.value.telephone, this.personaFormDetail.value.email, this.personaFormDetail.value.street, this.personaFormDetail.value.complement, this.personaFormDetail.value.postalcode, this.personaFormDetail.value.dob, this.personaFormDetail.value.registerdate, this.personaFormDetail.value.comment).subscribe(
            // Above is sufficient to write on the db. Below shall refresh yhe list
            (result) => this.personaCreated.emit(result), error => console.log(error));
            // this.router.navigate(['event-form'],);
            this.router.navigate(['events']);
        }
    }
    newKollege() {
        this.router.navigate(['kollege']);
    }
    newPersona() {
        this.router.navigate(['persona']);
    }
}
PersonaFormDetailComponent.ɵfac = function PersonaFormDetailComponent_Factory(t) { return new (t || PersonaFormDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PersonaFormDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonaFormDetailComponent, selectors: [["app-persona-form-detail"]], outputs: { personaUpdated: "personaUpdated", personaCreated: "personaCreated" }, decls: 2, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["ng-cloak", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["ng-cloak", "", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "number", "formControlName", "mobile", 1, "form-control"], ["type", "number", "formControlName", "whatsapp", 1, "form-control"], ["type", "number", "formControlName", "telephone", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "street", 1, "form-control"], ["type", "text", "formControlName", "complement", 1, "form-control"], ["type", "text", "formControlName", "postalcode", 1, "form-control"], ["type", "Date", "formControlName", "dob", 1, "form-control"], ["type", "datetime", "formControlName", "registerdate", 1, "form-control"], ["type", "text", "formControlName", "comment", 1, "form-control"], ["type", "submit", "mat-flat-button", "", "color", "primary"]], template: function PersonaFormDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonaFormDetailComponent_ul_0_Template, 2, 1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonaFormDetailComponent_form_1_Template, 58, 1, "form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kollegen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personaFormDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hLWZvcm0tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../messages/messages.component */ "DruN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function DashboardComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", kol_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, kol_r2.name), " ");
} }
const _c0 = function (a1) { return ["/event-form-detail", a1]; };
function DashboardComponent_a_42_span_4_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ev_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ev_r5.resourceId, "-", ev_r5.title, " (", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, ev_r5.start, "d/M/yy, h:mm a"), ")");
} }
function DashboardComponent_a_42_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_a_42_span_4_span_1_span_1_Template, 5, 9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const kol_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ev_r5.kollege === kol_r3.id);
} }
function DashboardComponent_a_42_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_a_42_span_4_span_1_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ev_r5.color !== "#FFFFFF");
} }
function DashboardComponent_a_42_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_a_42_Template_h3_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const kol_r3 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.delKol(kol_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_a_42_span_4_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](kol_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.todayEvents);
} }
class DashboardComponent {
    constructor(apiService, cookieService, router
    // private _util: UtilService,
    // private _http: HttpService,
    ) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.router = router;
        this.events = [];
        this.eventos = [];
        this.personas = [];
        this.kollegen = [];
        this.todayEvents = [];
        this.today = Date.now();
        this.evv = [];
        this.users = [];
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            kolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        // this.apiService.getDigests().subscribe(
        //   (data: Digest[]) => {
        //     this.digests = data.sort((a ,b) => (a.start > b.start) ? 1 : -1);
        //     console.log(`digests onInit: ${this.digests}`);
        //   },
        //   error => console.log(error)
        //   );
        this.getUsers();
        const mrToken = this.cookieService.get('mr-token');
        console.log('mrToken on events:', mrToken);
        if (!mrToken) {
            this.router.navigate(['/auth']);
        }
        else {
            this.getEvents();
            this.getPersonas();
            this.getKollegen();
            this.getTodayEvents();
            this.changeVar();
        }
    }
    getUsers() {
        this.apiService.getUsers()
            .subscribe(users => this.users = users);
    }
    // Get the data but infinit looping
    // ngAfterContentChecked() {
    //   this.getTodayEvents();
    // }
    getEvents() {
        this.apiService.getEvents()
            .subscribe(arg => this.events = arg.slice(0, 15));
        console.log('dash: ', this.events);
        console.log('ev[0]: ', this.events.lastIndexOf);
    }
    getTodayEvents() {
        // let evv: Event[] = [];
        this.apiService.getEvents()
            .subscribe(arg => this.todayEvents = arg.filter(r => new Date(r.start).getTime() > Date.now() - 60300000));
        // let today: number = Date.now();
        // console.log('today: ', today)
        // let passed: Event[] = [];
        // for (let evs of evv) {
        //   if (evs.start.getTime() == today) {
        //     passed.push(evs);
        //   }
        // }
    }
    delKol(kol) {
        console.log('kol', kol);
        if (confirm(`Are you sure you want to delete this kollege '${kol.name}'`)) {
            this.kollegen = this.kollegen.filter(h => h !== kol);
            this.apiService.deleteKollege(kol).subscribe();
        }
    }
    changeVar() {
        this.todayEvents = this.evv;
        console.log(this.evv);
    }
    // personas and digests are empty here on console,
    // but are filled up when called by the template
    getPersonas() {
        this.apiService.getPersonas()
            .subscribe(data => this.personas = data);
        console.log('personass: ', this.personas);
    }
    getKollegen() {
        this.apiService.getKollegen()
            .subscribe(data => this.kollegen = data);
    }
    email_Kollege() {
        this.apiService.emailKollege(this.emailForm.value.kolName).subscribe();
    }
    logout() {
        this.cookieService.delete('mr-token');
        //this.router.navigate(['/auth']);
        this.router.navigate(['/home']);
        //location.reload();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 44, vars: 3, consts: [["lang", "en"], ["charset", "utf-8"], ["href", "/"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "demo-app"], ["href", "/dashboard", "id", "menu-share", 1, "float"], [1, "fa", "fa-plus", "my-float"], ["href", "/calendar"], [1, "fa", "fa-calendar", "my-float"], ["href", "/traceboard"], [1, "fa", "fa-check", "my-float"], ["href", "/events"], [1, "fa", "fa-list", "my-float"], ["href", "/persona"], [1, "fa", "fa-users", "my-float"], ["href", "/kollege"], [1, "fa", "fa-user-md", "my-float"], [3, "click"], [1, "fa", "fa-sign-out", "my-float"], [3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Agenda to these kollegen", "formControlName", "kolName", "required", "", "multiple", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [1, "fabwhatz"], ["href", "https://wa.me/+5585996288800/?text=Ol\u00E1! Gentileza entrar em contato"], ["src", "../assets/images/mascara.png"], [1, "fa", "fa-whatsapp", "my-float"], [1, "grid", "grid-pad"], ["class", "col-1-4", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-1-4"], [1, "module", "hero"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLinkActive", "router-link-active", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "DigestRater");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "base", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Top Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_29_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DashboardComponent_Template_form_ngSubmit_31_listener() { return ctx.email_Kollege(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, DashboardComponent_mat_option_34_Template, 3, 4, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, DashboardComponent_a_42_Template, 5, 2, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "app-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.emailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kollegen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kollegen);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".demo-app[_ngcontent-%COMP%] {\n  display:grid;\n  min-height: 100%;\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-size: 11px;\n}\n\n\n\n[class*='col-'][_ngcontent-%COMP%] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n\n[class*='col-'][_ngcontent-%COMP%]:last-of-type {\n    padding-right: 0;\n  }\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n    box-sizing: border-box;\n  }\n\nh3[_ngcontent-%COMP%] {\n    \n    text-align: center;\n    margin-bottom: 0;\n  }\n\nh4[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n.grid[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n.col-1-4[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n\n.module[_ngcontent-%COMP%] {\n    padding: 20px;\n    text-align: left;\n    color: #eee;\n    max-height: 180px;\n    min-width: 120px;\n    background-color: #3f525c;\n    border-radius: 10px;\n    overflow: auto;\n  }\n\n.module[_ngcontent-%COMP%]:hover {\n    background-color: #eee;\n    cursor: pointer;\n    color: #607d8b;\n  }\n\n.grid-pad[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n\n.grid-pad[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:last-of-type {\n    padding-right: 20px;\n  }\n\n@media (max-width: 600px) {\n    .module[_ngcontent-%COMP%] {\n      font-size: 10px;\n      max-height: 175px; }\n  }\n\n@media (max-width: 1024px) {\n    .grid[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n    \n  }\n\n\n\n.fabwhatz[_ngcontent-%COMP%]{\n    position: fixed;\n\n    display: flex;\n    align-items: center;\n\n    width:60px;\n    height:60px;\n \n    bottom:40px;\n    right:40px;\n    background-color:#0C9;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    \n    box-shadow: 2px 2px 3px #999;\n    padding: 9px;\n  }\n\n\n\n.app[_ngcontent-%COMP%] {\n    background-color: #b1b1b1;\n    color: #2e1e02 rgb(7, 7, 7);\n    min-height: cac(100vh - 100px);\n    padding: 50px;\n    margin: 0px;\n}\n\nh1[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #2e1e02;\n    font-size: 3em;\n}\n\nh1[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    color: white;\n    display: inline-block;\n    transform: rotate(30deg);\n}\n\nh1[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\nh2[_ngcontent-%COMP%] {\n    font-size: 2em;\n    margin-top: 0;\n    padding-top: 0;\n  }\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin-top: 10px;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n  }\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\n    color: #334953;\n  }\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #039be5;\n    background-color: #cfd8dc;\n  }\n\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    color: #039be5;\n  }\n\n.fab[_ngcontent-%COMP%]{\n    position: fixed;\n    top:16px;\n    left:10px;\n    cursor: pointer;\n  }\n\n.fab_right[_ngcontent-%COMP%]{\n    position: fixed;\n    top:10px;\n    right:10px;\n    cursor: pointer;\n  }\n\n.float_left[_ngcontent-%COMP%]{\n    position:fixed;\n    width:60px;\n    height:60px;\n    top:10px;\n    left:10px;\n    background-color:#0C9;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    box-shadow: 2px 2px 3px #999;\n    z-index:1000;\n    animation: bot-to-top 2s ease-out;\n  }\n\n.float_center[_ngcontent-%COMP%]{\n    position:fixed;\n    top:20px;\n    right: 80px;\n    left: 80px;\n    color:rgb(20, 14, 14);\n    border-radius:50px;\n    text-align:center;\n    font-size: 20pt;\n    box-shadow: 2px 2px 3px #999;\n\n  }\n\n.float_right[_ngcontent-%COMP%]{\n    position:fixed;\n    top:20px;\n    right: 80px;\n    left: 80px;\n    padding-right: 10px;\n    color:rgb(20, 14, 14);\n    border-radius:50px;\n    text-align:right;\n    font-size: 20pt;\n    box-shadow: 2px 2px 3px #999;\n\n  }\n\n*[_ngcontent-%COMP%]{padding:0;margin:0;}\n\nbody[_ngcontent-%COMP%]{\n\tfont-family:Verdana, Geneva, sans-serif;\n\tbackground-color:#CCC;\n\tfont-size:12px;\n}\n\n.label-container[_ngcontent-%COMP%]{\n\tposition:fixed;\n\tbottom:48px;\n\tright:105px;\n\tdisplay:table;\n\tvisibility: hidden;\n}\n\n.label-text[_ngcontent-%COMP%]{\n\tcolor:#FFF;\n\tbackground:rgba(51,51,51,0.5);\n\tdisplay:table-cell;\n\tvertical-align:middle;\n\tpadding:10px;\n\tborder-radius:3px;\n}\n\n.label-arrow[_ngcontent-%COMP%]{\n\tdisplay:table-cell;\n\tvertical-align:middle;\n\tcolor:#333;\n\topacity:0.5;\n}\n\n.float[_ngcontent-%COMP%]{\n    position:fixed;\n    width:60px;\n    height:60px;\n      top:10px;\n    right:10px;\n    background-color:#0C9;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    box-shadow: 2px 2px 3px #999;\n    z-index:1000;\n    animation: bot-to-top 2s ease-out;\n  }\n\nul[_ngcontent-%COMP%]{\n    position:fixed;\n    right:10px;\n    padding-bottom:20px;\n      \n    top:70px;\n    z-index:100;\n  }\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    list-style:none;\n    \n      margin-top:10px;\n  }\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      \n    background-color:#0b8bf3;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    box-shadow: 2px 2px 3px #999;\n    width:60px;\n    height:60px;\n    display:block;\n  }\n\nul[_ngcontent-%COMP%]:hover{\n    visibility:visible!important;\n    opacity:1!important;\n  }\n\n.my-float[_ngcontent-%COMP%]{\n    font-size:24px;\n    margin-top:18px;\n  }\n\na#menu-share[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]{\n    visibility: hidden;\n  }\n\na#menu-share[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]{\n    visibility: visible;\n    animation: scale-in 0.5s;\n  }\n\na#menu-share[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    animation: rotate-in 0.5s;\n  }\n\na#menu-share[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%]{\n    animation: rotate-out 0.5s;\n  }\n\n@keyframes bot-to-top {\n    0%   {bottom:-40px}\n    50%  {bottom:40px}\n}\n\n@keyframes scale-in {\n    from {transform: scale(0);opacity: 0;}\n    to {transform: scale(1);opacity: 1;}\n}\n\n@keyframes rotate-in {\n    from {transform: rotate(0deg);}\n    to {transform: rotate(360deg);}\n}\n\n@keyframes rotate-out {\n    from {transform: rotate(360deg);}\n    to {transform: rotate(0deg);}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5REFBeUQ7RUFDekQsZUFBZTtBQUNqQjs7QUFFQSw0Q0FBNEM7O0FBQzVDO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7O0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0FBQ0E7SUFHRSxzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLFNBQVM7RUFDWDs7QUFDQTtJQUNFLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFO01BQ0UsZUFBZTtNQUNmLGlCQUFpQixFQUFFO0VBQ3ZCOztBQUNBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7SUFDQTs7T0FFRztFQUNMOztBQUVBOztLQUVHOztBQUVIO0lBQ0UsZUFBZTs7SUFFZixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixVQUFVO0lBQ1YsV0FBVzs7SUFFWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7QUFNQSw0Q0FBNEM7O0FBQzVDO0lBQ0UseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7QUFDQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUNBQWlDO0VBQ25DOztBQUVBO0lBQ0UsY0FBYztJQUNkLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7O0VBRTlCOztBQUVBO0lBQ0UsY0FBYztJQUNkLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNEJBQTRCOztFQUU5Qjs7QUFHQSxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUM7O0FBRXZCO0NBQ0MsdUNBQXVDO0NBQ3ZDLHFCQUFxQjtDQUNyQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsVUFBVTtDQUNWLDZCQUE2QjtDQUM3QixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLFVBQVU7Q0FDVixXQUFXO0FBQ1o7O0FBRUU7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7TUFDVCxRQUFRO0lBQ1YsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1COztJQUVuQixRQUFRO0lBQ1IsV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTs7TUFFYixlQUFlO0VBQ25COztBQUVBOztJQUVFLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSw0QkFBNEI7SUFDNUIsbUJBQW1CO0VBQ3JCOztBQUdBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsd0JBQXdCO0VBQzFCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUVBO0lBQ0UsTUFBTSxZQUFZO0lBQ2xCLE1BQU0sV0FBVztBQUNyQjs7QUFFQTtJQUNJLE1BQU0sbUJBQW1CLENBQUMsVUFBVSxDQUFDO0lBQ3JDLElBQUksbUJBQW1CLENBQUMsVUFBVSxDQUFDO0FBQ3ZDOztBQUVBO0lBQ0ksTUFBTSx1QkFBdUIsQ0FBQztJQUM5QixJQUFJLHlCQUF5QixDQUFDO0FBQ2xDOztBQUVBO0lBQ0ksTUFBTSx5QkFBeUIsQ0FBQztJQUNoQyxJQUFJLHVCQUF1QixDQUFDO0FBQ2hDOztBQUNBLGlCQUFpQjs7QUFPZDs7Ozs7Ozs7Ozs7Ozs7UUFjSzs7QUFFTjs7O0lBR0U7O0FBQ0Y7Ozs7Ozs7OztLQVNHIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tYXBwIHtcbiAgZGlzcGxheTpncmlkO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5bY2xhc3MqPSdjb2wtJ10ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBoMyB7XG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBoNCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5ncmlkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmNvbC0xLTQge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLm1vZHVsZSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTI1YztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIC5tb2R1bGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNjA3ZDhiO1xuICB9XG4gIC5ncmlkLXBhZCB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG4gIC5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAubW9kdWxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIG1heC1oZWlnaHQ6IDE3NXB4OyB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5ncmlkIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLyogLm1vZHVsZSB7XG4gICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgfSAqL1xuICB9XG5cbiAgLyogZGl2OmhvdmVyIGgzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfSAqL1xuXG4gIC5mYWJ3aGF0entcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB3aWR0aDo2MHB4O1xuICAgIGhlaWdodDo2MHB4O1xuIFxuICAgIGJvdHRvbTo0MHB4O1xuICAgIHJpZ2h0OjQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMEM5O1xuICAgIGNvbG9yOiNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIC8qIHBhZGRpbmctdG9wOiAxLjElOyAqL1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gICAgcGFkZGluZzogOXB4O1xuICB9XG5cblxuXG5cblxuICAvKiBGUk9NIHRoZSBhcHAuIFRvIGRlbCB3aGF0cyBub3QgbmVjZXNzYXJ5Ki9cbiAgLmFwcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYjFiMTtcbiAgICBjb2xvcjogIzJlMWUwMiByZ2IoNywgNywgNyk7XG4gICAgbWluLWhlaWdodDogY2FjKDEwMHZoIC0gMTAwcHgpO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMmUxZTAyO1xuICAgIGZvbnQtc2l6ZTogM2VtO1xufVxuXG5oMSBmYS1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbn1cblxuaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgbmF2IGEge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBuYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xuICAgIGNvbG9yOiAjMzM0OTUzO1xuICB9XG4gIG5hdiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAzOWJlNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICB9XG4gIG5hdiBhLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMzliZTU7XG4gIH1cblxuICAuZmFie1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MTZweDtcbiAgICBsZWZ0OjEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmZhYl9yaWdodHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOjEwcHg7XG4gICAgcmlnaHQ6MTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmZsb2F0X2xlZnR7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgd2lkdGg6NjBweDtcbiAgICBoZWlnaHQ6NjBweDtcbiAgICB0b3A6MTBweDtcbiAgICBsZWZ0OjEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMEM5O1xuICAgIGNvbG9yOiNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gICAgei1pbmRleDoxMDAwO1xuICAgIGFuaW1hdGlvbjogYm90LXRvLXRvcCAycyBlYXNlLW91dDtcbiAgfVxuXG4gIC5mbG9hdF9jZW50ZXJ7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgdG9wOjIwcHg7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgbGVmdDogODBweDtcbiAgICBjb2xvcjpyZ2IoMjAsIDE0LCAxNCk7XG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuXG4gIH1cblxuICAuZmxvYXRfcmlnaHR7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgdG9wOjIwcHg7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgbGVmdDogODBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOnJnYigyMCwgMTQsIDE0KTtcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcblxuICB9XG5cblxuICAqe3BhZGRpbmc6MDttYXJnaW46MDt9XG5cbmJvZHl7XG5cdGZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcblx0YmFja2dyb3VuZC1jb2xvcjojQ0NDO1xuXHRmb250LXNpemU6MTJweDtcbn1cblxuLmxhYmVsLWNvbnRhaW5lcntcblx0cG9zaXRpb246Zml4ZWQ7XG5cdGJvdHRvbTo0OHB4O1xuXHRyaWdodDoxMDVweDtcblx0ZGlzcGxheTp0YWJsZTtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubGFiZWwtdGV4dHtcblx0Y29sb3I6I0ZGRjtcblx0YmFja2dyb3VuZDpyZ2JhKDUxLDUxLDUxLDAuNSk7XG5cdGRpc3BsYXk6dGFibGUtY2VsbDtcblx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHRwYWRkaW5nOjEwcHg7XG5cdGJvcmRlci1yYWRpdXM6M3B4O1xufVxuXG4ubGFiZWwtYXJyb3d7XG5cdGRpc3BsYXk6dGFibGUtY2VsbDtcblx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHRjb2xvcjojMzMzO1xuXHRvcGFjaXR5OjAuNTtcbn1cblxuICAuZmxvYXR7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgd2lkdGg6NjBweDtcbiAgICBoZWlnaHQ6NjBweDtcbiAgICAgIHRvcDoxMHB4O1xuICAgIHJpZ2h0OjEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMEM5O1xuICAgIGNvbG9yOiNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gICAgei1pbmRleDoxMDAwO1xuICAgIGFuaW1hdGlvbjogYm90LXRvLXRvcCAycyBlYXNlLW91dDtcbiAgfVxuXG4gIHVse1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIHJpZ2h0OjEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206MjBweDtcbiAgICAgIFxuICAgIHRvcDo3MHB4O1xuICAgIHotaW5kZXg6MTAwO1xuICB9XG4gIFxuICB1bCBsaXtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgXG4gICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gIH1cbiAgXG4gIHVsIGxpIGF7XG4gICAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwYjhiZjM7XG4gICAgY29sb3I6I0ZGRjtcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgICB3aWR0aDo2MHB4O1xuICAgIGhlaWdodDo2MHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gIH1cbiAgXG4gIHVsOmhvdmVye1xuICAgIHZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eToxIWltcG9ydGFudDtcbiAgfVxuICBcbiAgXG4gIC5teS1mbG9hdHtcbiAgICBmb250LXNpemU6MjRweDtcbiAgICBtYXJnaW4tdG9wOjE4cHg7XG4gIH1cbiAgXG4gIGEjbWVudS1zaGFyZSArIHVse1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICBcbiAgYSNtZW51LXNoYXJlOmhvdmVyICsgdWx7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBhbmltYXRpb246IHNjYWxlLWluIDAuNXM7XG4gIH1cbiAgXG4gIGEjbWVudS1zaGFyZSBpe1xuICAgIGFuaW1hdGlvbjogcm90YXRlLWluIDAuNXM7XG4gIH1cbiAgXG4gIGEjbWVudS1zaGFyZTpob3ZlciA+IGl7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUtb3V0IDAuNXM7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJvdC10by10b3Age1xuICAgIDAlICAge2JvdHRvbTotNDBweH1cbiAgICA1MCUgIHtib3R0b206NDBweH1cbn1cblxuQGtleWZyYW1lcyBzY2FsZS1pbiB7XG4gICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKTtvcGFjaXR5OiAwO31cbiAgICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKTtvcGFjaXR5OiAxO31cbn1cblxuQGtleWZyYW1lcyByb3RhdGUtaW4ge1xuICAgIGZyb20ge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbiAgICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLW91dCB7XG4gICAgZnJvbSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG4gICAgdG8ge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbn1cbi8qIEVuZCBmcm9tIGFwcCAqL1xuXG5cblxuXG5cbiAgXG4gICAvKiAuZmFiIGJ1dHRvbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiNjBiMztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwwLDAsLjQpO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgICBcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnMgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiAuMnMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2Utb3V0O1xuICAgIH0gICovXG4gIFxuICAvKiAuZmFiIGJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICAqL1xuICAvKiAuZmFiIGJ1dHRvbi5tYWlue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWIxOWI3O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAyMDtcbiAgfSAqL1xuIl19 */"] });


/***/ }),

/***/ "R1YU":
/*!***************************************************!*\
  !*** ./src/app/capture/capture-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CaptureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureRoutingModule", function() { return CaptureRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class CaptureRoutingModule {
}
CaptureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CaptureRoutingModule });
CaptureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CaptureRoutingModule_Factory(t) { return new (t || CaptureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CaptureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AppComponent_h1_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Digest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ol\u00E1, ", ctx_r0.currentUser, "");
} }
class AppComponent {
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
        this.title = 'digest-rater';
        this.currentUser = '';
        this.hid = false;
        this.currentUser = cookieService.get('currentUser');
    }
    ngOnInit() {
        const mrToken = this.cookieService.get('mr-token');
        if (!mrToken) {
            document.getElementById('menu-share').hidden = true;
        }
    }
    logout() {
        this.cookieService.delete('mr-token');
        //this.router.navigate(['/auth']);
        this.router.navigate(['/home']);
        location.reload();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 1, consts: [["href", "/dashboard", "id", "menu-share", 1, "float"], [1, "fa", "fa-plus", "my-float"], ["href", "/calendar"], [1, "fa", "fa-calendar", "my-float"], ["href", "/traceboard"], [1, "fa", "fa-check", "my-float"], ["href", "/events"], [1, "fa", "fa-list", "my-float"], ["href", "/persona"], [1, "fa", "fa-users", "my-float"], ["href", "/kollege"], [1, "fa", "fa-user-md", "my-float"], [3, "click"], [1, "fa", "fa-sign-out", "my-float"], ["href", "/home"], ["src", "../assets/images/logo_circle.png", 1, "float_left"], [1, "app"], ["class", "float_center", 4, "ngIf"], [1, "float_center"], [1, "float_right", 2, "font-size", "0.7rem"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_h1_24_Template, 5, 1, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hid == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app[_ngcontent-%COMP%] {\n    background-color: #b1b1b1;\n    color: #2e1e02 rgb(7, 7, 7);\n    min-height: cac(100vh - 100px);\n    padding: 50px;\n    margin: 0px;\n}\nh1[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #2e1e02;\n    font-size: 3em;\n}\nh1[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    color: white;\n    display: inline-block;\n    transform: rotate(30deg);\n}\n\nh1[_ngcontent-%COMP%] {\n    \n    margin-bottom: 0;\n  }\nh2[_ngcontent-%COMP%] {\n    font-size: 2em;\n    margin-top: 0;\n    padding-top: 0;\n  }\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin-top: 10px;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n  }\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\n    color: #334953;\n  }\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #039be5;\n    background-color: #cfd8dc;\n  }\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    color: #039be5;\n  }\n.fab[_ngcontent-%COMP%]{\n    position: fixed;\n    top:16px;\n    left:10px;\n    cursor: pointer;\n  }\n.fab_right[_ngcontent-%COMP%]{\n    position: fixed;\n    top:10px;\n    right:10px;\n    cursor: pointer;\n  }\n.float_left[_ngcontent-%COMP%]{\n    position:fixed;\n    width:60px;\n    height:60px;\n      \n      top:10px;\n    left:10px;\n    background-color:#0C9;\n    color:#FFF;\n    border-radius:50px;\n    text-align:center;\n    box-shadow: 2px 2px 3px #999;\n    z-index:1000;\n    animation: bot-to-top 2s ease-out;\n  }\n.float_center[_ngcontent-%COMP%]{\n    position:fixed;\n\n      \n    top:20px;\n    right: 80px;\n    left: 80px;\n    color:rgb(20, 14, 14);\n    border-radius:50px;\n    text-align:center;\n    font-size: 20pt;\n    box-shadow: 2px 2px 3px #999;\n\n  }\n.float_right[_ngcontent-%COMP%]{\n    position:fixed;\n\n      \n    top:20px;\n    right: 80px;\n    left: 80px;\n    padding-right: 10px;\n    color:rgb(20, 14, 14);\n    border-radius:50px;\n    text-align:right;\n    font-size: 20pt;\n    box-shadow: 2px 2px 3px #999;\n\n  }\n\n*[_ngcontent-%COMP%]{padding:0;margin:0;}\nbody[_ngcontent-%COMP%]{\n\tfont-family:Verdana, Geneva, sans-serif;\n\tbackground-color:#CCC;\n\tfont-size:12px;\n}\n.label-container[_ngcontent-%COMP%]{\n\tposition:fixed;\n\tbottom:48px;\n\tright:105px;\n\tdisplay:table;\n\tvisibility: hidden;\n}\n.label-text[_ngcontent-%COMP%]{\n\tcolor:#FFF;\n\tbackground:rgba(51,51,51,0.5);\n\tdisplay:table-cell;\n\tvertical-align:middle;\n\tpadding:10px;\n\tborder-radius:3px;\n}\n.label-arrow[_ngcontent-%COMP%]{\n\tdisplay:table-cell;\n\tvertical-align:middle;\n\tcolor:#333;\n\topacity:0.5;\n}\n.float[_ngcontent-%COMP%]{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n    \n    top:10px;\n\tright:10px;\n\tbackground-color:#0C9;\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n\tbox-shadow: 2px 2px 3px #999;\n\tz-index:1000;\n\tanimation: bot-to-top 2s ease-out;\n}\nul[_ngcontent-%COMP%]{\n\tposition:fixed;\n\tright:10px;\n\tpadding-bottom:20px;\n    \n  top:70px;\n\tz-index:100;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n\tlist-style:none;\n  \n    margin-top:10px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    \n\tbackground-color:#0b8bf3;\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n\tbox-shadow: 2px 2px 3px #999;\n\twidth:60px;\n\theight:60px;\n\tdisplay:block;\n}\nul[_ngcontent-%COMP%]:hover{\n\tvisibility:visible!important;\n\topacity:1!important;\n}\n.my-float[_ngcontent-%COMP%]{\n\tfont-size:24px;\n\tmargin-top:18px;\n}\na#menu-share[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%]{\n  visibility: hidden;\n}\na#menu-share[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]{\n  visibility: visible;\n  animation: scale-in 0.5s;\n}\na#menu-share[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n\tanimation: rotate-in 0.5s;\n}\na#menu-share[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%]{\n\tanimation: rotate-out 0.5s;\n}\n@keyframes bot-to-top {\n    0%   {bottom:-40px}\n    50%  {bottom:40px}\n}\n@keyframes scale-in {\n    from {transform: scale(0);opacity: 0;}\n    to {transform: scale(1);opacity: 1;}\n}\n@keyframes rotate-in {\n    from {transform: rotate(0deg);}\n    to {transform: rotate(360deg);}\n}\n@keyframes rotate-out {\n    from {transform: rotate(360deg);}\n    to {transform: rotate(0deg);}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsS0FBSztBQUNMO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1QjtBQUVBLHNDQUFzQztBQUN0QztJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztFQUNoQjtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7RUFDakI7QUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztNQUNULGlCQUFpQjtNQUNqQixRQUFRO0lBQ1YsU0FBUztJQUNULHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGlDQUFpQztFQUNuQztBQUVBO0lBQ0UsY0FBYzs7TUFFWixpQkFBaUI7SUFDbkIsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDRCQUE0Qjs7RUFFOUI7QUFFQTtJQUNFLGNBQWM7O01BRVosaUJBQWlCO0lBQ25CLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNEJBQTRCOztFQUU5QjtBQUVBOzs7Ozs7S0FNRztBQUdILEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQztBQUV2QjtDQUNDLHVDQUF1QztDQUN2QyxxQkFBcUI7Q0FDckIsY0FBYztBQUNmO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsNkJBQTZCO0NBQzdCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsV0FBVztBQUNaO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLFdBQVc7SUFDUixpQkFBaUI7SUFDakIsUUFBUTtDQUNYLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNEJBQTRCO0NBQzVCLFlBQVk7Q0FDWixpQ0FBaUM7QUFDbEM7QUFFQTtDQUNDLGNBQWM7Q0FDZCxVQUFVO0NBQ1YsbUJBQW1COztFQUVsQixRQUFRO0NBQ1QsV0FBVztBQUNaO0FBRUE7Q0FDQyxlQUFlOztJQUVaLGVBQWU7QUFDbkI7QUFFQTs7Q0FFQyx3QkFBd0I7Q0FDeEIsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNEJBQTRCO0NBQzVCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsbUJBQW1CO0FBQ3BCO0FBR0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCO0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUVBO0lBQ0ksTUFBTSxZQUFZO0lBQ2xCLE1BQU0sV0FBVztBQUNyQjtBQUVBO0lBQ0ksTUFBTSxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7SUFDckMsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7QUFDdkM7QUFFQTtJQUNJLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsSUFBSSx5QkFBeUIsQ0FBQztBQUNsQztBQUVBO0lBQ0ksTUFBTSx5QkFBeUIsQ0FBQztJQUNoQyxJQUFJLHVCQUF1QixDQUFDO0FBQ2hDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qICAqL1xuLmFwcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYjFiMTtcbiAgICBjb2xvcjogIzJlMWUwMiByZ2IoNywgNywgNyk7XG4gICAgbWluLWhlaWdodDogY2FjKDEwMHZoIC0gMTAwcHgpO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMmUxZTAyO1xuICAgIGZvbnQtc2l6ZTogM2VtO1xufVxuXG5oMSBmYS1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbn1cblxuLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMSB7XG4gICAgLyogZm9udC1zaXplOiAxLjJlbTsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIG5hdiBhIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgbmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgICBjb2xvcjogIzMzNDk1MztcbiAgfVxuICBuYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMzliZTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgfVxuICBuYXYgYS5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDM5YmU1O1xuICB9XG5cbiAgLmZhYntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOjE2cHg7XG4gICAgbGVmdDoxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5mYWJfcmlnaHR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDoxMHB4O1xuICAgIHJpZ2h0OjEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5mbG9hdF9sZWZ0e1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIHdpZHRoOjYwcHg7XG4gICAgaGVpZ2h0OjYwcHg7XG4gICAgICAvKiBib3R0b206NDBweDsgKi9cbiAgICAgIHRvcDoxMHB4O1xuICAgIGxlZnQ6MTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwQzk7XG4gICAgY29sb3I6I0ZGRjtcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgICB6LWluZGV4OjEwMDA7XG4gICAgYW5pbWF0aW9uOiBib3QtdG8tdG9wIDJzIGVhc2Utb3V0O1xuICB9XG5cbiAgLmZsb2F0X2NlbnRlcntcbiAgICBwb3NpdGlvbjpmaXhlZDtcblxuICAgICAgLyogYm90dG9tOjQwcHg7ICovXG4gICAgdG9wOjIwcHg7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgbGVmdDogODBweDtcbiAgICBjb2xvcjpyZ2IoMjAsIDE0LCAxNCk7XG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuXG4gIH1cblxuICAuZmxvYXRfcmlnaHR7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG5cbiAgICAgIC8qIGJvdHRvbTo0MHB4OyAqL1xuICAgIHRvcDoyMHB4O1xuICAgIHJpZ2h0OiA4MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjpyZ2IoMjAsIDE0LCAxNCk7XG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG5cbiAgfVxuXG4gIC8qIC5ib3R0b217XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbToycHg7XG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XG4gICAgcGFkZGluZy1ib3R0b206MHB4O1xuICAgIGxlZnQ6MTBweDtcbiAgfSAqL1xuXG5cbiAgKntwYWRkaW5nOjA7bWFyZ2luOjA7fVxuXG5ib2R5e1xuXHRmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XG5cdGJhY2tncm91bmQtY29sb3I6I0NDQztcblx0Zm9udC1zaXplOjEycHg7XG59XG5cbi5sYWJlbC1jb250YWluZXJ7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHRib3R0b206NDhweDtcblx0cmlnaHQ6MTA1cHg7XG5cdGRpc3BsYXk6dGFibGU7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxhYmVsLXRleHR7XG5cdGNvbG9yOiNGRkY7XG5cdGJhY2tncm91bmQ6cmdiYSg1MSw1MSw1MSwwLjUpO1xuXHRkaXNwbGF5OnRhYmxlLWNlbGw7XG5cdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0cGFkZGluZzoxMHB4O1xuXHRib3JkZXItcmFkaXVzOjNweDtcbn1cblxuLmxhYmVsLWFycm93e1xuXHRkaXNwbGF5OnRhYmxlLWNlbGw7XG5cdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0Y29sb3I6IzMzMztcblx0b3BhY2l0eTowLjU7XG59XG5cbi5mbG9hdHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdHdpZHRoOjYwcHg7XG5cdGhlaWdodDo2MHB4O1xuICAgIC8qIGJvdHRvbTo0MHB4OyAqL1xuICAgIHRvcDoxMHB4O1xuXHRyaWdodDoxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMwQzk7XG5cdGNvbG9yOiNGRkY7XG5cdGJvcmRlci1yYWRpdXM6NTBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG5cdHotaW5kZXg6MTAwMDtcblx0YW5pbWF0aW9uOiBib3QtdG8tdG9wIDJzIGVhc2Utb3V0O1xufVxuXG51bHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdHJpZ2h0OjEwcHg7XG5cdHBhZGRpbmctYm90dG9tOjIwcHg7XG4gICAgXG4gIHRvcDo3MHB4O1xuXHR6LWluZGV4OjEwMDtcbn1cblxudWwgbGl7XG5cdGxpc3Qtc3R5bGU6bm9uZTtcbiAgXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG51bCBsaSBhe1xuICAgIFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMwYjhiZjM7XG5cdGNvbG9yOiNGRkY7XG5cdGJvcmRlci1yYWRpdXM6NTBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG5cdHdpZHRoOjYwcHg7XG5cdGhlaWdodDo2MHB4O1xuXHRkaXNwbGF5OmJsb2NrO1xufVxuXG51bDpob3Zlcntcblx0dmlzaWJpbGl0eTp2aXNpYmxlIWltcG9ydGFudDtcblx0b3BhY2l0eToxIWltcG9ydGFudDtcbn1cblxuXG4ubXktZmxvYXR7XG5cdGZvbnQtc2l6ZToyNHB4O1xuXHRtYXJnaW4tdG9wOjE4cHg7XG59XG5cbmEjbWVudS1zaGFyZSArIHVse1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmEjbWVudS1zaGFyZTpob3ZlciArIHVse1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBhbmltYXRpb246IHNjYWxlLWluIDAuNXM7XG59XG5cbmEjbWVudS1zaGFyZSBpe1xuXHRhbmltYXRpb246IHJvdGF0ZS1pbiAwLjVzO1xufVxuXG5hI21lbnUtc2hhcmU6aG92ZXIgPiBpe1xuXHRhbmltYXRpb246IHJvdGF0ZS1vdXQgMC41cztcbn1cblxuQGtleWZyYW1lcyBib3QtdG8tdG9wIHtcbiAgICAwJSAgIHtib3R0b206LTQwcHh9XG4gICAgNTAlICB7Ym90dG9tOjQwcHh9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtaW4ge1xuICAgIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCk7b3BhY2l0eTogMDt9XG4gICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMTt9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLWluIHtcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gICAgdG8ge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1vdXQge1xuICAgIGZyb20ge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxuICAgIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG59XG4iXX0= */"] });


/***/ }),

/***/ "Tk1w":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/api.service */ "hD8V");




class AdminGuard {
    constructor(cookieService, router, apiService) {
        this.cookieService = cookieService;
        this.router = router;
        this.apiService = apiService;
    }
    canActivate(route, state) {
        let currentUser = this.cookieService.get('currentUser');
        if (currentUser == 'mans@ufc.br') {
            return true;
        }
        else {
            this.router.navigate(['/auth']);
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/api.service */ "hD8V");




class AuthGuard {
    constructor(cookieService, router, apiService) {
        this.cookieService = cookieService;
        this.router = router;
        this.apiService = apiService;
    }
    canActivate(route, state) {
        const mrToken = this.cookieService.get('mr-token');
        //console.log('mrToken on guard canAct:', mrToken);
        if (!mrToken) {
            this.router.navigate(['/auth']);
            return false;
        }
        else {
            console.log('state', state.url, route);
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UghC":
/*!*******************************************************!*\
  !*** ./src/app/mainforms/mainforms-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MainformsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainformsRoutingModule", function() { return MainformsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class MainformsRoutingModule {
}
MainformsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainformsRoutingModule });
MainformsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MainformsRoutingModule_Factory(t) { return new (t || MainformsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainformsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "UkO7":
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class ReportRoutingModule {
}
ReportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReportRoutingModule });
ReportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ReportRoutingModule_Factory(t) { return new (t || ReportRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "UlaI":
/*!***************************************************!*\
  !*** ./src/app/main/persona/persona.component.ts ***!
  \***************************************************/
/*! exports provided: PersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaComponent", function() { return PersonaComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");















function PersonaComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r31.id, " ");
} }
function PersonaComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Del");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "orange": a0 }; };
function PersonaComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PersonaComponent_td_21_Template_fa_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const row_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.delete(row_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r4.faTrash)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, 5 > 4));
} }
function PersonaComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { "blue": true }; };
function PersonaComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PersonaComponent_td_24_Template_fa_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r36.getPersonas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r6.faEdit)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c1));
} }
function PersonaComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PersonaComponent_td_27_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const row_r38 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r39.eventClicked(row_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/persona-form-detail/", row_r38.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r38.name);
} }
function PersonaComponent_span_29_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Celular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_span_29_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r43.mobile, " ");
} }
function PersonaComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PersonaComponent_span_29_th_1_Template, 2, 0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PersonaComponent_span_29_td_2_Template, 2, 1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " WhatsApp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r44.whatsapp, " ");
} }
function PersonaComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Telefone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r45.telephone, " ");
} }
function PersonaComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " e-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r46.email, " ");
} }
function PersonaComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Endere\u00E7o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r47.street, " ");
} }
function PersonaComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Complemento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r48.complement, " ");
} }
function PersonaComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " CEP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r49.postalcode, " ");
} }
function PersonaComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Nascimento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, row_r50.dob, "d/M/yy"), " ");
} }
function PersonaComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Data registro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, row_r51.registerdate, "d/M/yy"), " ");
} }
function PersonaComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Coment\u00E1rios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PersonaComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r52.comment, " ");
} }
function PersonaComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 47);
} }
function PersonaComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 48);
} }
function PersonaComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
const _c2 = function () { return [5, 10, 25, 100]; };
class PersonaComponent {
    //######//
    // filterValues = {};
    // filterSelectObj = [];
    constructor(apiService, cookieService, router) {
        //######//
        // Object to create Filter for
        /*this.filterSelectObj = [
          {
            name: 'ID',
            columnProp: 'id',
            options: []
          }, {
            name: 'NOME',
            columnProp: 'name',
            options: []
          }, {
            name: 'CELULAR',
            columnProp: 'mobile',
            options: []
          }, {
            name: 'EMAIL',
            columnProp: 'email',
            options: []
          }, {
            name: 'DN',
            columnProp: 'dob',
            options: []
          }
        ]*/
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.router = router;
        this.new_event = "Nova Persona";
        this.events = [];
        // selectedEvent: Event;
        this.personas = [];
        this.kollegen = [];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrash"];
        this.hideme = [];
        this.eventInformation = [];
        //Mat table wt filter, pag, sort
        this.displayedColumns = ['id', 'del', 'edit', 'name', 'mobile', 'whatsapp', 'telephone', 'email', 'street',
            'complement', 'postalcode', 'dob', 'registerdate', 'comment'];
    }
    newEvent() {
        this.router.navigate(['event-form-modal']);
    }
    eventClicked(arg) { }
    ngOnInit() {
        const mrToken = this.cookieService.get('mr-token');
        console.log('mrToken on persona:', mrToken);
        if (!mrToken) {
            this.router.navigate(['/auth']);
        }
        else {
            this.getEvents();
            this.getPersonas();
            this.getKollegen();
            // console.log('personas on Init: ', this.personas);
        }
    }
    //Mat table
    ngAfterViewInit() {
        this.apiService.getPersonas()
            .subscribe(pers => {
            this.personas = pers,
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.personas),
                //######//
                // Overrride default filter behaviour of Material Datatable
                //this.dataSource.filterPredicate = this.createFilter();
                this.dataSource.data = this.personas;
            //this.filterSelectObj.filter((o) => {
            //  o.options = this.getFilterObject(this.personas, o.columnProp);
            // });
            this.dataSource.paginator = this.paginator,
                this.dataSource.sort = this.sort;
        });
    }
    //####
    // Get Uniqu values from columns to build filter
    /*getFilterObject(fullObj, key) {
      const uniqChk = [];
      fullObj.filter((obj) => {
        if (!uniqChk.includes(obj[key])) {
          uniqChk.push(obj[key]);
        }
        return obj;
      });
      return uniqChk;
    }
  
    //####
     // Called on Filter change
     filterChange(filter, event) {
      //let filterValues = {}
      this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
      this.dataSource.filter = JSON.stringify(this.filterValues)
    }
  
    //####
    // Custom filter method fot Angular Material Datatable
    createFilter() {
      let filterFunction = function (data: any, filter: string): boolean {
        let searchTerms = JSON.parse(filter);
        let isFilterSet = false;
        for (const col in searchTerms) {
          if (searchTerms[col].toString() !== '') {
            isFilterSet = true;
          } else {
            delete searchTerms[col];
          }
        }
  
        //console.log(searchTerms);
  
        let nameSearch = () => {
          let found = false;
          if (isFilterSet) {
            for (const col in searchTerms) {
              searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
                if (data[col].toString().toLowerCase().indexOf(word) != -1 &&
                    word !== 'de' &&
                    word !== 'do' &&
                    word !== 'da' &&
                    isFilterSet) {
                  found = true
                }
              });
            }
            return found
          } else {
            return true;
          }
        }
        return nameSearch()
      }
      return filterFunction
    }
  
    //####
    // Reset table filters
    resetFilters() {
      this.filterValues = {}
      this.filterSelectObj.forEach((value, key) => {
        value.modelValue = undefined;
      })
      this.dataSource.filter = "";
      }
    */
    //####//Filter slected value in columns
    //https://www.freakyjolly.com/angular-material-table-custom-filter-using-select-box/#.YEWVquZv8Wo
    //Doesnt function with the custom filters
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    getEvents() {
        this.apiService.getEvents()
            .subscribe(events => this.events = events);
        // console.log('events: ', this.events[0].id);
    }
    getPersonas() {
        this.apiService.getPersonas()
            .subscribe(data => this.personas = data);
    }
    getKollegen() {
        this.apiService.getKollegen()
            .subscribe(data => this.kollegen = data);
        // console.log('kollegen: ', this.kollegen);
    }
    add(title, start, color, insurance, resourceId, comment, persona, kollege) {
        if (!event) {
            return;
        }
        this.apiService.addEvent({ title, start, color,
            insurance, resourceId, comment,
            persona, kollege })
            .subscribe(event => {
            this.events.push(event);
        });
    }
    // update(persona: Persona) {
    //   this.personas = this.personas.filter(h => h !== persona);
    //   this.apiService.updatePersona(persona).subscribe();
    // }
    // update(id: number, name: string, mobile: number,
    //   whatsapp: number, telephone: number, email: string,
    //   street: string, complement: string, postalcode: string,
    //   dob: Date, registerdate: Date, comment: string) {
    //   // this.personas = this.personas.filter(h => h !== persona);
    //   this.apiService.updatePersona(id, name, mobile, whatsapp, telephone, email, street,
    //                                 complement, postalcode, dob, registerdate, comment).subscribe();
    // }
    delete(persona) {
        if (confirm(`Are you sure you want to delete this persona '${persona.name}'`)) {
            this.personas = this.personas.filter(h => h !== persona);
            this.apiService.deletePersona(persona.id).subscribe();
        }
    }
}
PersonaComponent.ɵfac = function PersonaComponent_Factory(t) { return new (t || PersonaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
PersonaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PersonaComponent, selectors: [["app-persona"]], viewQuery: function PersonaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { personas: "personas" }, decls: 61, vars: 6, consts: [[1, "topLimit"], [2, "text-align", "center"], ["matInput", "", "placeholder", "Ex. Bia", 3, "keyup"], ["input", ""], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "filter-tab"], [1, "table-responsive", "cnstr-record", "product-tbl"], ["mat-table", "", "matSort", "", 2, "background-color", "#b1b1b1", 3, "dataSource"], ["matColumnDef", "id"], ["hidden", "", "class", "col-center", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["hidden", "", "class", "col-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "del"], ["class", "col-center-icon", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "col-center-icon", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "edit"], ["matColumnDef", "name"], ["class", "col-center", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "col-center", "style", "cursor: pointer", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "mobile"], [4, "ngIf"], ["matColumnDef", "whatsapp"], ["class", "col-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "telephone"], ["matColumnDef", "email"], ["matColumnDef", "street"], ["matColumnDef", "complement"], ["matColumnDef", "postalcode"], ["matColumnDef", "dob"], ["matColumnDef", "registerdate"], ["matColumnDef", "comment"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [2, "display", "grid", "background-color", "#c0c0c0", 3, "pageSizeOptions"], ["hidden", "", "mat-header-cell", "", "mat-sort-header", "", 1, "col-center"], ["hidden", "", "mat-cell", "", 1, "col-center"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-center-icon"], ["mat-cell", "", 1, "col-center-icon"], [3, "icon", "ngClass", "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-center"], ["mat-cell", "", 1, "col-center", 2, "cursor", "pointer", 3, "click"], [3, "routerLink"], ["class", "col-center", "style", "display: none;", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "col-center", "style", "display: none;", "mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-center", 2, "display", "none"], ["mat-cell", "", 1, "col-center", 2, "display", "none"], ["mat-cell", "", 1, "col-center"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function PersonaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Tabela de Personas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Filtro");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function PersonaComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PersonaComponent_Template_button_click_11_listener() { return ctx.newEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Nova Persona");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PersonaComponent_th_17_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PersonaComponent_td_18_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PersonaComponent_th_20_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PersonaComponent_td_21_Template, 2, 4, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PersonaComponent_th_23_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, PersonaComponent_td_24_Template, 2, 3, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, PersonaComponent_th_26_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, PersonaComponent_td_27_Template, 3, 2, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, PersonaComponent_span_29_Template, 3, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](30, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, PersonaComponent_th_31_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, PersonaComponent_td_32_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](33, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, PersonaComponent_th_34_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, PersonaComponent_td_35_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](36, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, PersonaComponent_th_37_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, PersonaComponent_td_38_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](39, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, PersonaComponent_th_40_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, PersonaComponent_td_41_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](42, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, PersonaComponent_th_43_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, PersonaComponent_td_44_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](45, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, PersonaComponent_th_46_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, PersonaComponent_td_47_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](48, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, PersonaComponent_th_49_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, PersonaComponent_td_50_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](51, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, PersonaComponent_th_52_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, PersonaComponent_td_53_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](54, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, PersonaComponent_th_55_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, PersonaComponent_td_56_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, PersonaComponent_tr_57_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, PersonaComponent_tr_58_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, PersonaComponent_tr_59_Template, 3, 1, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "mat-paginator", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", 0 == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["fa-icon.green[_ngcontent-%COMP%] {\n    color: green;\n}\n\n#kol-plus[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 2em;\n}\n\n#per-plus[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 2em;\n}\n\n.leftAlign[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-left: 15px;\n}\n\n.rightAlign[_ngcontent-%COMP%] {\n    text-align: right;\n    margin-left: 15px;\n}\n\nfa-icon.orange[_ngcontent-%COMP%] {\n    color: crimson;\n    align-items: left;\n    cursor: pointer;\n    padding: 0px;\n}\n\nfa-icon.blue[_ngcontent-%COMP%] {\n  color: blue;\n  align-items: right;\n  cursor: pointer;\n  padding: 0px;\n}\n\n.col-right[_ngcontent-%COMP%]{\n    text-align: right;\n}\n\n.col-center[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 9%;\n    background-color: #b9b9b9;\n}\n\n.col-center-icon[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 3%;\n    background-color: #b9b9b9;\n}\n\n.topLimit[_ngcontent-%COMP%]{padding-top: 40px;}\n\n.filter-tab[_ngcontent-%COMP%]{\n    display: flexbox;\n    \n}\n\n\n\n\n\n@media all{  \n \n*[_ngcontent-%COMP%]{padding:0px;margin:0px;}  \n \ndiv[_ngcontent-%COMP%]{vertical-align:top;}  \n \nimg[_ngcontent-%COMP%]{max-width:100%;}  \n \nhtml[_ngcontent-%COMP%] {-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;}  \n \nbody[_ngcontent-%COMP%]{overflow:auto!important; width:100%!important;}  \n \nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{background-color:#e4e5e6;}  \n \nhtml[_ngcontent-%COMP%] {position:relative; min-height:100%;}  \n\n  \n.card[_ngcontent-%COMP%]{border-radius:4px;}  \n\n.card-header[_ngcontent-%COMP%]:first-child {border-radius:4px 4px 0px 0px;}  \n\n  \n  \n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif; font-weight:400; font-size:13px;}  \n\nbody[_ngcontent-%COMP%]{padding-top:52px;}  \n\np[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif; color:#303030; font-weight:400; margin-bottom:1rem;}  \n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif;}  \n  \n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif; font-weight:700;}  \n\nh1[_ngcontent-%COMP%]{font-size:20px; color:#000000; margin-bottom:10px;}  \n\nh2[_ngcontent-%COMP%]{font-size:30px;}  \n\nh3[_ngcontent-%COMP%]{font-size:24px;}  \n\nh4[_ngcontent-%COMP%]{font-size:18px;}  \n\nh5[_ngcontent-%COMP%]{font-size:14px;}  \n\nh6[_ngcontent-%COMP%]{font-size:12px;}  \n\n  \n\n.row[_ngcontent-%COMP%] {margin-right:-8px; margin-left:-8px;}  \n\n.col[_ngcontent-%COMP%], .col-1[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {padding-right:8px; padding-left:8px;}  \n\n  \n\n.card-header[_ngcontent-%COMP%]{background-color:#f0f3f5; border-bottom:1px solid #c8ced3; font-size:13px; font-weight:600; color:#464646; text-transform:uppercase; padding:.75rem 8px;}  \n\n  \n\n.cnstr-record[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{white-space:nowrap;padding:.45rem .2rem; font-size:13px; border-bottom-width:0px!important;}  \n\n.cnstr-record[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#f0f3f5;}  \n\n\n.cnstr-record[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-size:13px; padding:0px 0rem 0px 0.2rem; height:calc(2rem + 2px);}  \n\n.cnstr-record[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%]{padding-left:.05rem;}  \n\n.cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {vertical-align:middle;}  \n\n.cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.3rem;}  \n\n.cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0px;}  \n\n\n.wp-50[_ngcontent-%COMP%]{width:50px;}  \n\n.wp-60[_ngcontent-%COMP%]{width:60px;}  \n\n.wp-70[_ngcontent-%COMP%]{width:70px;}  \n\n.wp-80[_ngcontent-%COMP%]{width:80px;}  \n\n.wp-90[_ngcontent-%COMP%]{width:90px;}  \n\n.wp-100[_ngcontent-%COMP%]{width:100px;}  \n\n.mw-auto[_ngcontent-%COMP%]{min-width:inherit;}  \n\n.expand-row[_ngcontent-%COMP%]{width:100%; border:solid 1px #596269; display:inline-block; border-radius:3px; width:16px; height:16px; vertical-align:top; background:#596269; color:#ffffff!important;}  \n\n.expand-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:top; position:relative; top:2px;}  \n\n.sub-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:400; font-size:12px;}  \n\n.sub-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#e49191;}  \n\n.no-bg[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:inherit;}  \n\n.mw-100[_ngcontent-%COMP%]{max-width:100%;}  \n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFO0lBQ0UsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QseUJBQXlCO0FBQzdCOztBQUVBLFVBQVUsaUJBQWlCLENBQUM7O0FBRTVCO0lBQ0ksZ0JBQWdCO0lBQ2hCOzs7S0FHQztBQUNMOztBQUdBLHlCQUF5Qjs7QUFFekIsaUJBQWlCOztBQUVqQjs7QUFFQSxFQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUM7O0FBRXpCLElBQUksa0JBQWtCLENBQUM7O0FBRXZCLElBQUksY0FBYyxDQUFDOztBQUVuQixNQUFNLGtDQUFrQyxFQUFFLGlDQUFpQyxDQUFDOztBQUU1RSxLQUFLLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDOztBQUVuRCxXQUFXLHdCQUF3QixDQUFDOztBQUVwQyxNQUFNLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzs7O0FBR3pDLE1BQU0saUJBQWlCLENBQUM7O0FBRXhCLDBCQUEwQiw2QkFBNkIsQ0FBQzs7O0FBR3hELFVBQVU7O0FBRVYsV0FBVyxnQ0FBZ0MsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDOztBQUU3RSxLQUFLLGdCQUFnQixDQUFDOztBQUV0QixFQUFFLGdDQUFnQyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7O0FBRXZGLHdCQUF3QixnQ0FBZ0MsQ0FBQzs7O0FBR3pELGtCQUFrQixnQ0FBZ0MsRUFBRSxlQUFlLENBQUM7O0FBRXBFLEdBQUcsY0FBYyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQzs7QUFFckQsR0FBRyxjQUFjLENBQUM7O0FBRWxCLEdBQUcsY0FBYyxDQUFDOztBQUVsQixHQUFHLGNBQWMsQ0FBQzs7QUFFbEIsR0FBRyxjQUFjLENBQUM7O0FBRWxCLEdBQUcsY0FBYyxDQUFDOzs7O0FBSWxCLE1BQU0saUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7O0FBRTFDLDR1QkFBNHVCLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDOzs7O0FBSWh4QixhQUFhLHdCQUF3QixFQUFFLCtCQUErQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixDQUFDOzs7O0FBSXJLLGlCQUFpQixrQkFBa0IsQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsaUNBQWlDLENBQUM7O0FBRTVHLG9CQUFvQixrQkFBa0IsQ0FBQzs7O0FBR3ZDLDRCQUE0QixjQUFjLEVBQUUsMkJBQTJCLEVBQUUsdUJBQXVCLENBQUM7O0FBRWpHLGtDQUFrQyxtQkFBbUIsQ0FBQzs7QUFFdEQsa0RBQWtELHFCQUFxQixDQUFDOztBQUV4RSx3QkFBd0IsYUFBYSxDQUFDOztBQUV0QywyQkFBMkIsVUFBVSxDQUFDOzs7QUFHdEMsT0FBTyxVQUFVLENBQUM7O0FBRWxCLE9BQU8sVUFBVSxDQUFDOztBQUVsQixPQUFPLFVBQVUsQ0FBQzs7QUFFbEIsT0FBTyxVQUFVLENBQUM7O0FBRWxCLE9BQU8sVUFBVSxDQUFDOztBQUVsQixRQUFRLFdBQVcsQ0FBQzs7QUFFcEIsU0FBUyxpQkFBaUIsQ0FBQzs7QUFFM0IsWUFBWSxVQUFVLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQzs7QUFFcEwsZ0JBQWdCLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLE9BQU8sQ0FBQzs7QUFFL0QsY0FBYyxlQUFlLEVBQUUsY0FBYyxDQUFDOztBQUU5QyxjQUFjLGtCQUFrQixDQUFDOztBQUVqQyxVQUFVLGtCQUFrQixDQUFDOztBQUU3QixRQUFRLGNBQWMsQ0FBQzs7O0FBR3ZCIiwiZmlsZSI6InBlcnNvbmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGZhLWljb24uZ3JlZW4ge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuI2tvbC1wbHVzIGZhLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuI3Blci1wbHVzIGZhLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuXG4ubGVmdEFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnJpZ2h0QWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5mYS1pY29uLm9yYW5nZSB7XG4gICAgY29sb3I6IGNyaW1zb247XG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuZmEtaWNvbi5ibHVlIHtcbiAgY29sb3I6IGJsdWU7XG4gIGFsaWduLWl0ZW1zOiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jb2wtcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb2wtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogOSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcbn1cbi5jb2wtY2VudGVyLWljb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliOWI5O1xufVxuXG4udG9wTGltaXR7cGFkZGluZy10b3A6IDQwcHg7fVxuXG4uZmlsdGVyLXRhYntcbiAgICBkaXNwbGF5OiBmbGV4Ym94O1xuICAgIC8qIE9SIHRoZSBmb2xsb3dpbmcsIGRvZXMgdGhlIHNhbWU6XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgICovXG59XG5cblxuLyogQGNoYXJzZXQgXCJ1dGYtOFwiOyAgICAqL1xuIFxuLyogQ1NTIERvY3VtZW50ICovICBcbiBcbkBtZWRpYSBhbGx7ICBcbiBcbip7cGFkZGluZzowcHg7bWFyZ2luOjBweDt9ICBcbiBcbmRpdnt2ZXJ0aWNhbC1hbGlnbjp0b3A7fSAgXG4gXG5pbWd7bWF4LXdpZHRoOjEwMCU7fSAgXG4gXG5odG1sIHstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOyAtbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7fSAgXG4gXG5ib2R5e292ZXJmbG93OmF1dG8haW1wb3J0YW50OyB3aWR0aDoxMDAlIWltcG9ydGFudDt9ICBcbiBcbmh0bWwsIGJvZHl7YmFja2dyb3VuZC1jb2xvcjojZTRlNWU2O30gIFxuIFxuaHRtbCB7cG9zaXRpb246cmVsYXRpdmU7IG1pbi1oZWlnaHQ6MTAwJTt9ICBcblxuICBcbi5jYXJke2JvcmRlci1yYWRpdXM6NHB4O30gIFxuXG4uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge2JvcmRlci1yYWRpdXM6NHB4IDRweCAwcHggMHB4O30gIFxuXG4gIFxuLypUeXBla2l0Ki8gIFxuXG5odG1sLCBib2R5e2ZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDo0MDA7IGZvbnQtc2l6ZToxM3B4O30gIFxuXG5ib2R5e3BhZGRpbmctdG9wOjUycHg7fSAgXG5cbnB7Zm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7IGNvbG9yOiMzMDMwMzA7IGZvbnQtd2VpZ2h0OjQwMDsgbWFyZ2luLWJvdHRvbToxcmVtO30gIFxuXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdHtmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjt9ICBcbiAgXG5cbmgxLGgyLGgzLGg0LGg1LGg2e2ZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDo3MDA7fSAgXG5cbmgxe2ZvbnQtc2l6ZToyMHB4OyBjb2xvcjojMDAwMDAwOyBtYXJnaW4tYm90dG9tOjEwcHg7fSAgXG5cbmgye2ZvbnQtc2l6ZTozMHB4O30gIFxuXG5oM3tmb250LXNpemU6MjRweDt9ICBcblxuaDR7Zm9udC1zaXplOjE4cHg7fSAgXG5cbmg1e2ZvbnQtc2l6ZToxNHB4O30gIFxuXG5oNntmb250LXNpemU6MTJweDt9ICBcblxuICBcblxuLnJvdyB7bWFyZ2luLXJpZ2h0Oi04cHg7IG1hcmdpbi1sZWZ0Oi04cHg7fSAgXG5cbi5jb2wsIC5jb2wtMSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtYXV0bywgLmNvbC1sZywgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy1hdXRvLCAuY29sLW1kLCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLWF1dG8sIC5jb2wtc20sIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tYXV0bywgLmNvbC14bCwgLmNvbC14bC0xLCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC1hdXRvIHtwYWRkaW5nLXJpZ2h0OjhweDsgcGFkZGluZy1sZWZ0OjhweDt9ICBcblxuICBcblxuLmNhcmQtaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2YwZjNmNTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2M4Y2VkMzsgZm9udC1zaXplOjEzcHg7IGZvbnQtd2VpZ2h0OjYwMDsgY29sb3I6IzQ2NDY0NjsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOyBwYWRkaW5nOi43NXJlbSA4cHg7fSAgXG5cbiAgXG5cbi5jbnN0ci1yZWNvcmQgdGh7d2hpdGUtc3BhY2U6bm93cmFwO3BhZGRpbmc6LjQ1cmVtIC4ycmVtOyBmb250LXNpemU6MTNweDsgYm9yZGVyLWJvdHRvbS13aWR0aDowcHghaW1wb3J0YW50O30gIFxuXG4uY25zdHItcmVjb3JkIHRoZWFke2JhY2tncm91bmQ6I2YwZjNmNTt9ICBcblxuXG4uY25zdHItcmVjb3JkIC5mb3JtLWNvbnRyb2x7Zm9udC1zaXplOjEzcHg7IHBhZGRpbmc6MHB4IDByZW0gMHB4IDAuMnJlbTsgaGVpZ2h0OmNhbGMoMnJlbSArIDJweCk7fSAgXG5cbi5jbnN0ci1yZWNvcmQgc2VsZWN0LmZvcm0tY29udHJvbHtwYWRkaW5nLWxlZnQ6LjA1cmVtO30gIFxuXG4uY25zdHItcmVjb3JkIC50YWJsZSB0ZCwgLmNuc3RyLXJlY29yZCAudGFibGUgdGgge3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9ICBcblxuLmNuc3RyLXJlY29yZCAudGFibGUgdGR7cGFkZGluZzouM3JlbTt9ICBcblxuLmNuc3RyLXJlY29yZCAudGFibGUgdGQgaDR7bWFyZ2luOjBweDt9ICBcblxuXG4ud3AtNTB7d2lkdGg6NTBweDt9ICBcblxuLndwLTYwe3dpZHRoOjYwcHg7fSAgXG5cbi53cC03MHt3aWR0aDo3MHB4O30gIFxuXG4ud3AtODB7d2lkdGg6ODBweDt9ICBcblxuLndwLTkwe3dpZHRoOjkwcHg7fSAgXG5cbi53cC0xMDB7d2lkdGg6MTAwcHg7fSAgXG5cbi5tdy1hdXRve21pbi13aWR0aDppbmhlcml0O30gIFxuXG4uZXhwYW5kLXJvd3t3aWR0aDoxMDAlOyBib3JkZXI6c29saWQgMXB4ICM1OTYyNjk7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBib3JkZXItcmFkaXVzOjNweDsgd2lkdGg6MTZweDsgaGVpZ2h0OjE2cHg7IHZlcnRpY2FsLWFsaWduOnRvcDsgYmFja2dyb3VuZDojNTk2MjY5OyBjb2xvcjojZmZmZmZmIWltcG9ydGFudDt9ICBcblxuLmV4cGFuZC1yb3cgaW1ne3ZlcnRpY2FsLWFsaWduOnRvcDsgcG9zaXRpb246cmVsYXRpdmU7IHRvcDoycHg7fSAgXG5cbi5zdWItdGFibGUgdGh7Zm9udC13ZWlnaHQ6NDAwOyBmb250LXNpemU6MTJweDt9ICBcblxuLnN1Yi10YWJsZSB0ZHtiYWNrZ3JvdW5kOiNlNDkxOTE7fSAgXG5cbi5uby1iZyB0ZHtiYWNrZ3JvdW5kOmluaGVyaXQ7fSAgXG5cbi5tdy0xMDB7bWF4LXdpZHRoOjEwMCU7fSAgXG5cblxufSAgIl19 */"] });


/***/ }),

/***/ "Xj0r":
/*!***************************************************!*\
  !*** ./src/app/main/kollege/kollege.component.ts ***!
  \***************************************************/
/*! exports provided: KollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KollegeComponent", function() { return KollegeComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _mainforms_kollege_form_modal_kollege_form_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mainforms/kollege-form-modal/kollege-form-modal.component */ "eVYu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");











const _c0 = function (a0) { return { "blue": a0 }; };
const _c1 = function (a0) { return { "orange": a0 }; };
function KollegeComponent_tbody_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KollegeComponent_tbody_30_Template_fa_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.createKollege(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KollegeComponent_tbody_30_Template_fa_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.delete(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KollegeComponent_tbody_30_Template_td_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.eventClicked(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.faEdit)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, 5 > 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.faTrash)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c1, 5 > 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/kollege-form/", item_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", item_r1.name, " ", item_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.crm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.email);
} }
class KollegeComponent {
    constructor(apiService, cookieService, dialog, router) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.router = router;
        this.new_kollege = "Novo Médico";
        this.kollegen = [];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrash"];
        this.hideme = [];
        this.eventInformation = [];
    }
    newKollege() {
        this.router.navigate(['kollege-form']);
    }
    /*
    public showEventInfo(index,productId) {
      this.apiService.eventInfo(productId).subscribe((res:any)=>{
        this.eventInformation[index] = res;
      })
      this.hideme[index] = !this.hideme[index];
      this.Index = index;
    }
  */
    eventClicked(arg) { }
    ngOnInit() {
        const mrToken = this.cookieService.get('mr-token');
        console.log('mrToken on kollege:', mrToken);
        if (!mrToken) {
            this.router.navigate(['/auth']);
        }
        else {
            this.getKollegen();
        }
    }
    getKollegen() {
        this.apiService.getKollegen()
            .subscribe(data => this.kollegen = data);
    }
    // update(persona: Persona) {
    //   this.personas = this.personas.filter(h => h !== persona);
    //   this.apiService.updatePersona(persona).subscribe();
    // }
    // update(id: number, name: string, mobile: number,
    //   whatsapp: number, telephone: number, email: string,
    //   street: string, complement: string, postalcode: string,
    //   dob: Date, registerdate: Date, comment: string) {
    //   // this.personas = this.personas.filter(h => h !== persona);
    //   this.apiService.updatePersona(id, name, mobile, whatsapp, telephone, email, street,
    //                                 complement, postalcode, dob, registerdate, comment).subscribe();
    // }
    delete(kollege) {
        if (confirm(`Are you sure you want to delete this kollege '${kollege.name}'`)) {
            this.kollegen = this.kollegen.filter(h => h !== kollege);
            this.apiService.deleteKollege(kollege.id).subscribe();
        }
    }
    createKollege() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        // dialogConfig.maxHeight = '400px';
        // dialogConfig.width = '600px';
        const dialogRef = this.dialog.open(_mainforms_kollege_form_modal_kollege_form_modal_component__WEBPACK_IMPORTED_MODULE_2__["KollegeFormModalComponent"], // TO PASS DATA to the dialog: { data: { id: 1 }});
        dialogConfig);
        dialogRef.afterClosed().subscribe(
        // This returns a plain object { k: v, ...}
        val => console.log("Dialog output:", val)
        // This returns an object Object
        // val => {console.log(`Dialog output: , ${val}`)
        // });
        );
    }
}
KollegeComponent.ɵfac = function KollegeComponent_Factory(t) { return new (t || KollegeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
KollegeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: KollegeComponent, selectors: [["app-kollege"]], decls: 31, vars: 2, consts: [[2, "text-align", "center"], [1, "card"], [1, "card-body", "pb-0"], ["routerLink", "/kollege-form-modal"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "row"], [1, "col-12", "col-md-12"], [1, "card-body", "position-relative"], [1, "table-responsive", "cnstr-record", "product-tbl"], [1, "table", "table-bordered", "heading-hvr"], ["align", "center"], ["width", "50"], [4, "ngFor", "ngForOf"], [1, "expand-row"], [3, "icon", "ngClass", "click"], [2, "cursor", "pointer", 3, "click"], [3, "routerLink"]], template: function KollegeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Tabela de Kollegen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KollegeComponent_Template_button_click_9_listener() { return ctx.createKollege(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Novo M\u00E9dico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "CRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "e-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, KollegeComponent_tbody_30_Template, 16, 13, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.new_kollege);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.kollegen);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: ["fa-icon.blue[_ngcontent-%COMP%] {\n    color: blue;\n    align-items: right;\n    cursor: pointer;\n    padding-left: 0px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvbGxlZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJrb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmYS1pY29uLmJsdWUge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-routing.module */ "3hl/");
/* harmony import */ var _shared_angmat_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/angmat.module */ "OIqw");
/* harmony import */ var _shared_angutils_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/angutils.module */ "I2XR");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/timegrid */ "PjKf");
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/resource-timeline */ "eYnI");
/* harmony import */ var _report_report_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../report/report.module */ "LVab");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth.component */ "LS6v");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../messages/messages.component */ "DruN");
/* harmony import */ var _traceboard_traceboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../traceboard/traceboard.component */ "Eek8");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./event/event.component */ "xAcU");
/* harmony import */ var _kollege_kollege_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./kollege/kollege.component */ "Xj0r");
/* harmony import */ var _persona_persona_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./persona/persona.component */ "UlaI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");





 // a plugin
 // a plugin
 // a plugin










_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__["default"],
    _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__["default"],
    _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_8__["default"],
]);
class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_1__["MainRoutingModule"],
            _shared_angmat_module__WEBPACK_IMPORTED_MODULE_2__["AngmatModule"],
            _shared_angutils_module__WEBPACK_IMPORTED_MODULE_3__["AngutilsModule"],
            _report_report_module__WEBPACK_IMPORTED_MODULE_9__["ReportModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
        _traceboard_traceboard_component__WEBPACK_IMPORTED_MODULE_13__["TraceboardComponent"],
        _event_event_component__WEBPACK_IMPORTED_MODULE_14__["EventComponent"],
        _event_event_component__WEBPACK_IMPORTED_MODULE_14__["EventStatusDialogComponent"],
        _persona_persona_component__WEBPACK_IMPORTED_MODULE_16__["PersonaComponent"],
        _kollege_kollege_component__WEBPACK_IMPORTED_MODULE_15__["KollegeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_1__["MainRoutingModule"],
        _shared_angmat_module__WEBPACK_IMPORTED_MODULE_2__["AngmatModule"],
        _shared_angutils_module__WEBPACK_IMPORTED_MODULE_3__["AngutilsModule"],
        _report_report_module__WEBPACK_IMPORTED_MODULE_9__["ReportModule"]] }); })();


/***/ }),

/***/ "YubJ":
/*!************************************************************!*\
  !*** ./src/app/assistant/assistant/assistant.component.ts ***!
  \************************************************************/
/*! exports provided: AssistantComponent, AssistantStatusDialogComponent, AssistantExtraDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantComponent", function() { return AssistantComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantStatusDialogComponent", function() { return AssistantStatusDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantExtraDialogComponent", function() { return AssistantExtraDialogComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/utils.service */ "diQs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















function AssistantComponent_mat_form_field_3_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r29);
} }
function AssistantComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AssistantComponent_mat_form_field_3_Template_select_ngModelChange_3_listener($event) { const filter_r27 = ctx.$implicit; return filter_r27.modelValue = $event; })("change", function AssistantComponent_mat_form_field_3_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const filter_r27 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.filterChange(filter_r27, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AssistantComponent_mat_form_field_3_option_6_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](filter_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("name", filter_r27.columnProp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", filter_r27.modelValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("-- Select ", filter_r27.name, " --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", filter_r27.options);
} }
function AssistantComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Confirmados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "blue": a0 }; };
function AssistantComponent_td_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r36.faCheck)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, 5 > 4));
} }
function AssistantComponent_td_13_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_td_13_span_1_Template, 3, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AssistantComponent_td_13_span_2_Template, 3, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AssistantComponent_td_13_span_3_Template, 2, 4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AssistantComponent_td_13_span_4_Template, 3, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ev_r33.status == "confirmado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ev_r33.status == "cancelado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ev_r33.status == "finalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ev_r33.status == "agendado");
} }
function AssistantComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_span_17_td_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/event-form-detail/", ev_r41.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, ev_r41.start, "d/M/yy, h:mm a"));
} }
function AssistantComponent_span_17_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_span_17_td_1_a_1_Template, 3, 5, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r39 == 0);
} }
function AssistantComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_span_17_td_1_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Exame ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ev_r45.title, " ");
} }
function AssistantComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Conv\u00EAnio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r46.insurance, " ");
} }
function AssistantComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_26_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/persona-form-detail/", per_r49.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](per_r49.name);
} }
function AssistantComponent_td_26_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_td_26_span_1_span_1_Template, 3, 2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r49 = ctx.$implicit;
    const row_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", per_r49.id === row_r47.persona);
} }
function AssistantComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_td_26_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", row_r47.persona);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.personas);
} }
function AssistantComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " M\u00E9dico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_29_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", kol_r55.name, " ");
} }
function AssistantComponent_td_29_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_td_29_span_1_span_1_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r55 = ctx.$implicit;
    const row_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", kol_r55.id === row_r53.kollege);
} }
function AssistantComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_td_29_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", row_r53.kollege);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.kollegen);
} }
function AssistantComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Parceiro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_32_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partner_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", partner_r61.name, " ");
} }
function AssistantComponent_td_32_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_td_32_span_1_span_1_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partner_r61 = ctx.$implicit;
    const row_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", partner_r61.id === row_r59.partner);
} }
function AssistantComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_td_32_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r59 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", row_r59.partner);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r16.partners);
} }
function AssistantComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssistantComponent_td_35_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r67); const row_r65 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r66.openDialogx("Atualizar", row_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r65.status);
} }
function AssistantComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Extra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssistantComponent_td_38_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r70); const row_r68 = ctx.$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r69.openDialogx("Atualizar", row_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r68.addtitle1);
} }
function AssistantComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Extra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_41_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssistantComponent_td_41_span_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r77); const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r75.openDialogExtra("Atualizar", row_r71); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r71.addtitle2);
} }
function AssistantComponent_td_41_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssistantComponent_td_41_ng_template_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r81); const row_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r79.openDialogExtra("Atualizar", row_r71); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AssistantComponent_td_41_span_1_Template, 3, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AssistantComponent_td_41_ng_template_2_Template, 2, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r71.addtitle2)("ngIfElse", _r73);
} }
function AssistantComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Coment\u00E1rios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AssistantComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r82.comment, " ");
} }
function AssistantComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 46);
} }
function AssistantComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 47);
} }
const _c1 = function () { return [5, 10, 25, 100]; };
function AssistantStatusDialogComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AssistantStatusDialogComponent_mat_form_field_5_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.local_data.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "aguardando");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "em atendimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "cancelado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "finalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.local_data.status);
} }
function AssistantStatusDialogComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " Deseja realmente apagar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "? ");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.local_data.title, " em ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, ctx_r2.local_data.start, "dd/MM/YY hh:mm a"), "");
} }
function AssistantExtraDialogComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AssistantExtraDialogComponent_mat_form_field_5_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.local_data.addtitle2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Polipectomia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Hemostasia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Ligadura");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Dilata\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.local_data.addtitle2);
} }
function AssistantExtraDialogComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " Deseja realmente apagar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "? ");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.local_data.title, " em ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, ctx_r2.local_data.start, "dd/MM/YY hh:mm a"), "");
} }
const statusList = ['Agendado', 'Confirmado', 'Cancelado',
    'Aguardando', 'Em Atendimento', 'Finalizado'];
class AssistantComponent {
    constructor(
    //public dialogRef: MatDialogRef<EventComponent>,
    apiService, cookieService, router, dialog, dialogx, dialogextra, utilsService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.dialogx = dialogx;
        this.dialogextra = dialogextra;
        this.utilsService = utilsService;
        //no effect
        //@ViewChild('eef') eventComponent: EventComponent;
        this.new_event = "New Event";
        this.eventsFiltered = [];
        this.eventss = [];
        // For Dialog with deleted events
        this.eventsAll = [];
        // selectedEvent: Event;
        //idComing: number;
        this.personas = [];
        this.kollegen = [];
        this.partners = [];
        this.eventsDel = []; // = this.eventss.filter(c => c.color=="#FFFFFF");
        this.toggleDel = true;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEdit"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrash"];
        this.trashOn = true;
        this.titleOn = true;
        this.hideme = [];
        this.eventInformation = [];
        this.apagarLabel = ' Apagar';
        //Mat table wt filter, pag, sort
        this.displayedColumns = ['confirm', 'start', 'title', 'insurance',
            'persona', 'kollege', 'partner', 'status', 'addtitle1', 'addtitle2', 'comment'];
        //######//
        this.filterValues = {};
        this.filterSelectObj = [];
        //######//
        // Object to create Filter for
        this.filterSelectObj = [
            // {
            //   name: 'ID',
            //   columnProp: 'id',
            //   options: []
            // },
            {
                name: 'DATA',
                columnProp: 'start',
                options: []
            },
            {
                name: 'CONVÊNIO',
                columnProp: 'insurance',
                options: []
            },
            {
                name: 'MÉDICO',
                columnProp: 'genericChar2',
                options: []
            },
            {
                name: 'PACIENTE',
                columnProp: 'genericChar1',
                options: []
            }
        ];
    }
    toggleEvs(ev) {
        //   if (ev.color == '#FFFFFF' && this.toggleDel==true) {
        return true;
        // }
        return true;
    }
    eventClicked(arg) {
        const id = arg.persona;
        // console.log('color', arg.color)
        //this.router.navigate([`persona-form-detail/${id}`],);
    }
    ngOnInit() {
        const mrToken = this.cookieService.get('mr-token');
        console.log('mrToken on events:', mrToken);
        if (!mrToken) {
            this.router.navigate(['/auth']);
        }
        else {
            //this.getEvents();
            this.getPersonas();
            this.getKollegen();
            this.getEventsDel();
            this.getPartners();
        }
    }
    //Mat table
    ngAfterViewInit() {
        if (this.toggleDel) {
            //Dates filtered: less than 4h from now and more than 12h from now
            const today = Date.now();
            this.apiService.getEvents()
                .subscribe(events => {
                this.eventss = events.filter(ev => (ev.status == 'confirmado' || ev.status == 'agendado') && ev.color !== '#FFFFFF' && (new Date(ev.start).getTime() > today - 14400000 && new Date(ev.start).getTime() < today + 43200000)),
                    this.utilsService.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.eventss),
                    //this.displayedColumns.push('restore');
                    //######//
                    // Overrride default filter behaviour of Material Datatable
                    this.utilsService.dataSource.filterPredicate = this.createFilter(),
                    this.utilsService.dataSource.data = this.eventss,
                    this.addPersonaNameToFilter(),
                    this.addKollegeNameToFilter(),
                    this.filterSelectObj.filter((o) => {
                        o.options = this.getFilterObject(this.eventss, o.columnProp);
                    });
                this.sincColorDel();
                this.utilsService.dataSource.paginator = this.paginator,
                    this.utilsService.dataSource.sort = this.sort;
            });
        }
        else {
            this.apiService.getEvents()
                .subscribe(events => {
                this.eventss = events.filter(ev => ev.color == '#FFFFFF'),
                    this.utilsService.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.eventss),
                    this.displayedColumns.pop();
                //######//
                // Overrride default filter behaviour of Material Datatable
                this.utilsService.dataSource.filterPredicate = this.createFilter(),
                    this.utilsService.dataSource.data = this.eventss,
                    //this.addPersonaNameToFilter(),
                    //this.addKollegeNameToFilter(),
                    this.filterSelectObj.filter((o) => {
                        o.options = this.getFilterObject(this.eventss, o.columnProp);
                    });
                this.sincColorDel();
                //console.log('toggleDel', this.toggleDel);
                this.utilsService.dataSource.paginator = this.paginator,
                    this.utilsService.dataSource.sort = this.sort;
            });
        }
        // For dialog with deleted events
        this.apiService.getEvents()
            .subscribe(events => { this.eventsAll = events; });
    }
    addPersonaNameToFilter() {
        for (let item of this.utilsService.dataSource.data) {
            for (let per of this.personas) {
                if (item.persona === per.id) {
                    item.genericChar1 = per.name;
                }
            }
        }
    }
    addKollegeNameToFilter() {
        for (let item of this.utilsService.dataSource.data) {
            for (let kol of this.kollegen) {
                if (item.kollege === kol.id) {
                    item.genericChar2 = kol.name;
                }
            }
        }
    }
    //####
    // Get Uniqu values from columns to build filter
    getFilterObject(fullObj, key) {
        const uniqChk = [];
        fullObj.filter((obj) => {
            if (!uniqChk.includes(obj[key])) {
                uniqChk.push(obj[key]);
            }
            return obj;
        });
        return uniqChk;
    }
    //####
    // Called on Filter change
    filterChange(filter, event) {
        //let filterValues = {}
        this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase();
        this.utilsService.dataSource.filter = JSON.stringify(this.filterValues);
    }
    //####
    // Custom filter method fot Angular Material Datatable
    createFilter() {
        let filterFunction = function (data, filter) {
            let searchTerms = JSON.parse(filter);
            let isFilterSet = false;
            for (const col in searchTerms) {
                if (searchTerms[col].toString() !== '') {
                    isFilterSet = true;
                }
                else {
                    delete searchTerms[col];
                }
            }
            //console.log(searchTerms);
            let nameSearch = () => {
                let found = false;
                if (isFilterSet) {
                    for (const col in searchTerms) {
                        searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
                            if (data[col].toString().toLowerCase().indexOf(word) != -1 &&
                                word !== 'de' &&
                                word !== 'do' &&
                                word !== 'da' &&
                                isFilterSet) {
                                found = true;
                            }
                        });
                    }
                    return found;
                }
                else {
                    return true;
                }
            };
            return nameSearch();
        };
        return filterFunction;
    }
    //####
    // Reset table filters
    resetFilters() {
        this.filterValues = {};
        this.filterSelectObj.forEach((value, key) => {
            value.modelValue = undefined;
        });
        this.utilsService.dataSource.filter = "";
    }
    //Doesnt function with the custom filters
    applyFilter(event) {
        //persona is a number so the name is not detected
        const filterValue = event.target.value;
        this.utilsService.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.utilsService.dataSource.paginator) {
            this.utilsService.dataSource.paginator.firstPage();
        }
    }
    //////////eventss por events
    getEvents() {
        this.apiService.getEvents()
            .subscribe(events => this.eventss = events);
        // .subscribe(events => this.eventss = events.filter(ev => ev.color="#FFFFFF"));    // .subscribe(events => {for (let ev of events) {if (ev.title == 'eda') {}}});
        // this.eventsFiltered = this.eventss.filter(ev => ev.title=='eda');
        // console.log('events: ', this.eventss);
    }
    getEventsDel() {
        this.apiService.getEvents()
            .subscribe(events => this.eventsDel = events.filter(c => c.color == '#FFFFFF'));
        // .subscribe(events => this.eventss = events.filter(ev => ev.color="#FFFFFF"));    // .subscribe(events => {for (let ev of events) {if (ev.title == 'eda') {}}});
        // this.eventsFiltered = this.eventss.filter(ev => ev.title=='eda');
        console.log('eventsDel: ', this.eventsDel);
    }
    getPersonas() {
        this.apiService.getPersonas()
            .subscribe(data => this.personas = data);
        // console.log('personas: ', this.personas);
    }
    getKollegen() {
        this.apiService.getKollegen()
            .subscribe(data => this.kollegen = data);
        // console.log('kollegen: ', this.kollegen);
    }
    getPartners() {
        this.apiService.getPartners()
            .subscribe(data => this.partners = data);
    }
    add(title, start, color, insurance, resourceId, comment, persona, kollege) {
        // if (!event) { return; }
        // this.apiService.addEvent({ title, start, color,
        //   insurance, resourceId, comment,
        //   persona, kollege } as Event)
        //   .subscribe(event => {
        //     this.events.push(event);
        //   });
    }
    //////////eventss por events
    sincColorDel() {
        for (let ev of this.eventss) {
            if (ev.color == '#FFFFFF') {
                ev.status = 'cancelado';
                this.apiService.putEventConf(ev.id, ev.title, ev.partner, ev.start, ev.color, ev.status, ev.addtitle2, ev.persona, ev.kollege, ev.genericChar1, ev.genericNumber1).subscribe();
            }
        }
    }
    openDialogx(action, dataobj) {
        console.log('at openDialogx', dataobj, dataobj.action); //event obj, undefined
        dataobj.action = action;
        console.log('at openDialogx', dataobj); //str, str
        const dialogRefx = this.dialogx.open(AssistantStatusDialogComponent, {
            width: '250px',
            data: dataobj
        });
        dialogRefx.afterClosed().subscribe(result => {
            // console.log('result.event', result, result.event);
            if (result.event == 'Novo') {
            }
            else if (result.event == 'Atualizar') {
                //  console.log('afterclose', result, result.data);
                this.updateRowData(result.data); //passes an event
            }
            else if (result.event == 'Apagar') {
                this.deleteRowData(result.data);
            }
        });
    }
    openDialogExtra(action, dataobj) {
        console.log('at openDialogx', dataobj, dataobj.action); //event obj, undefined
        dataobj.action = action;
        console.log('at openDialogx', dataobj); //str, str
        const dialogRefx = this.dialogextra.open(AssistantExtraDialogComponent, {
            width: '250px',
            data: dataobj
        });
        dialogRefx.afterClosed().subscribe(result => {
            // console.log('result.event', result, result.event);
            if (result.event == 'Novo') {
            }
            else if (result.event == 'Atualizar') {
                //  console.log('afterclose', result, result.data);
                this.updateRowData(result.data); //passes an event
            }
            else if (result.event == 'Apagar') {
                this.deleteRowData(result.data);
            }
        });
    }
    updateRowData(row_obj) {
        //Needs to touch db
        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((valu, key) => {
            if (valu.id == row_obj.id) {
                console.log('value:', valu.id, valu, row_obj, this.utilsService.dataSource.data);
                // value and row_obj are two differ obj with the same values. So need to make the below binding
                valu.status = row_obj.status;
                valu.addtitle2 = row_obj.addtitle2;
                this.apiService.putEventConf(valu.id, valu.title, valu.partner, valu.start, valu.color, valu.status, valu.addtitle2, valu.persona, valu.kollege, valu.genericChar1, valu.genericNumber1)
                    .subscribe();
            }
            return true;
        });
    }
    putBackDeletedEvent(arg) {
        //console.log('arg putback: ', arg);
        //console.log('data deletedDial: ', this.data);
        //this.toggleActiveFunction();
        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((value, key) => {
            if (value.id == arg.id) {
                console.log(value.id, arg.id);
                const color = '';
                const status = 'agendado';
                this.apiService.putEventConf(arg.id, arg.title, arg.partner, arg.start, color, status, arg.addtitle2, arg.persona, arg.kollege, arg.genericChar1, arg.genericNumber1).subscribe();
                //this.dialogRef.close();
            }
            return true;
        });
        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((value, key) => {
            return value.id !== arg.id;
        });
    }
    deleteRowData(row_obj) {
        // Just hide but doesnt touch db. This bit of code changes the view without refreshing.
        // For this to happen, return false to the filter
        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((value, key) => {
            return value.id !== row_obj.id;
        });
        // Even if there is no change in color or status, the view drops the pseudodeleted row that shows up again after refreshing
        row_obj.color = '#FFFFFF';
        row_obj.status = 'cancelado';
        this.apiService.putEventConf(row_obj.id, row_obj.title, row_obj.partner, row_obj.start, row_obj.color, row_obj.status, row_obj.addtitle2, row_obj.persona, row_obj.kollege, row_obj.genericChar1, row_obj.genericNumber1).subscribe();
    }
}
AssistantComponent.ɵfac = function AssistantComponent_Factory(t) { return new (t || AssistantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"])); };
AssistantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AssistantComponent, selectors: [["app-assistant"]], viewQuery: function AssistantComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.evtable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { eventss: "eventss", personas: "personas", kollegen: "kollegen", partners: "partners" }, decls: 48, vars: 7, consts: [["id", "ec"], ["ec", ""], [2, "margin-left", "10px"], ["style", "padding-left: 0px;padding-right: 10px;padding-top: 40px;", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "warn", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["evtable", ""], ["matColumnDef", "confirm"], ["class", "col-center", "style", "background-color: rgb(189, 250, 189);", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "col-center", "style", "background-color: rgb(189, 250, 189);", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "start"], ["class", "col-center", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "title"], ["class", "col-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "insurance"], ["class", "col-center", "mat-cell", "", 3, "hidden", 4, "matCellDef"], ["matColumnDef", "persona"], ["class", "col-center", "mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "kollege"], ["matColumnDef", "partner"], ["matColumnDef", "status"], ["matColumnDef", "addtitle1"], ["matColumnDef", "addtitle2"], ["matColumnDef", "comment"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [2, "padding-left", "0px", "padding-right", "10px", "padding-top", "40px"], ["matNativeControl", "", 3, "name", "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-center", 2, "background-color", "rgb(189, 250, 189)"], ["mat-cell", "", 1, "col-center", 2, "background-color", "rgb(189, 250, 189)"], [4, "ngIf"], ["matSuffix", ""], [3, "icon", "ngClass"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-center"], ["mat-cell", "", 1, "col-center"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], [1, "handPointer", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function AssistantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AssistantComponent_mat_form_field_3_Template, 7, 5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssistantComponent_Template_button_click_5_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AssistantComponent_th_12_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AssistantComponent_td_13_Template, 5, 4, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AssistantComponent_th_16_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AssistantComponent_span_17_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AssistantComponent_th_19_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AssistantComponent_td_20_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AssistantComponent_th_22_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AssistantComponent_td_23_Template, 2, 3, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AssistantComponent_th_25_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AssistantComponent_td_26_Template, 2, 3, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](27, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AssistantComponent_th_28_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AssistantComponent_td_29_Template, 2, 3, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](30, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AssistantComponent_th_31_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, AssistantComponent_td_32_Template, 2, 3, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](33, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AssistantComponent_th_34_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, AssistantComponent_td_35_Template, 3, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](36, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AssistantComponent_th_37_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, AssistantComponent_td_38_Template, 3, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](39, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, AssistantComponent_th_40_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, AssistantComponent_td_41_Template, 4, 2, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](42, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, AssistantComponent_th_43_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, AssistantComponent_td_44_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, AssistantComponent_tr_45_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, AssistantComponent_tr_46_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "mat-paginator", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterSelectObj);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.utilsService.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.eventss);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["fa-icon.green[_ngcontent-%COMP%] {\n    color: green;\n}\n\n#kol-plus[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 2em;\n}\n\n#per-plus[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 2em;\n}\n\n.handPointer[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: red;\n}\n\n.leftAlign[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-left: 15px;\n}\n\n.rightAlign[_ngcontent-%COMP%] {\n    text-align: right;\n    margin-left: 15px;\n}\n\nfa-icon.orange[_ngcontent-%COMP%] {\n    color: crimson;\n    align-items: left;\n    cursor: pointer;\n    padding-left: 0px;\n}\n\nfa-icon.blue[_ngcontent-%COMP%] {\n  color: blue;\n  align-items: right;\n  cursor: pointer;\n  padding-left: 0px;\n}\n\n.col-right[_ngcontent-%COMP%]{\n    text-align: right;\n}\n\n.col-center[_ngcontent-%COMP%]{\n    text-align: center;\n    padding: 15px;\n}\n\n\n\n\n\n@media all{  \n \n    *[_ngcontent-%COMP%]{padding:0px;margin:0px;}  \n \n\n \nimg[_ngcontent-%COMP%]{max-width:100%;}  \n \nhtml[_ngcontent-%COMP%] {-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;}  \n \nbody[_ngcontent-%COMP%]{overflow:auto!important; width:100%!important;}  \n \nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{background-color:#e4e5e6;}  \n \nhtml[_ngcontent-%COMP%] {position:relative; min-height:100%;}  \n\n  \n.card[_ngcontent-%COMP%]{border-radius:4px;}  \n\n.card-header[_ngcontent-%COMP%]:first-child {border-radius:4px 4px 0px 0px;}  \n\n  \n  \n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif; font-weight:400; font-size:13px;}  \n\nbody[_ngcontent-%COMP%]{padding-top:52px;}  \n\np[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif; color:#303030; font-weight:400; margin-bottom:1rem;}  \n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif;}  \n  \n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif; font-weight:700;}  \n\nh1[_ngcontent-%COMP%]{font-size:20px; color:#000000; margin-bottom:10px;}  \n\nh2[_ngcontent-%COMP%]{font-size:30px;}  \n\nh3[_ngcontent-%COMP%]{font-size:24px;}  \n\nh4[_ngcontent-%COMP%]{font-size:18px;}  \n\nh5[_ngcontent-%COMP%]{font-size:14px;}  \n\nh6[_ngcontent-%COMP%]{font-size:12px;}  \n\n  \n\n.row[_ngcontent-%COMP%] {margin-right:-8px; margin-left:-8px;}  \n\n.col[_ngcontent-%COMP%], .col-1[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {padding-right:8px; padding-left:8px;}  \n\n  \n\n.card-header[_ngcontent-%COMP%]{background-color:#f0f3f5; border-bottom:1px solid #c8ced3; font-size:13px; font-weight:600; color:#464646; text-transform:uppercase; padding:.75rem 8px;}  \n\n  \n\n.cnstr-record[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{white-space:nowrap;padding:.45rem .2rem; font-size:13px; border-bottom-width:0px!important;}  \n\n.cnstr-record[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#f0f3f5;}  \n\n\n.cnstr-record[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-size:13px; padding:0px 0rem 0px 0.2rem; height:calc(2rem + 2px);}  \n\n.cnstr-record[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%]{padding-left:.05rem;}  \n\n\n\n.cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.3rem;}  \n\n.cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0px;}  \n\n\n.wp-50[_ngcontent-%COMP%]{width:50px;}  \n\n.wp-60[_ngcontent-%COMP%]{width:60px;}  \n\n.wp-70[_ngcontent-%COMP%]{width:70px;}  \n\n.wp-80[_ngcontent-%COMP%]{width:80px;}  \n\n.wp-90[_ngcontent-%COMP%]{width:90px;}  \n\n.wp-100[_ngcontent-%COMP%]{width:100px;}  \n\n.mw-auto[_ngcontent-%COMP%]{min-width:inherit;}  \n\n.expand-row[_ngcontent-%COMP%]{width:100%; border:solid 1px #596269; display:inline-block; border-radius:3px; width:16px; height:16px; vertical-align:top; background:#596269; color:#ffffff!important;}  \n\n.expand-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:top; position:relative; top:2px;}  \n\n.sub-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:400; font-size:12px;}  \n\n.sub-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#efefef;}  \n\n.no-bg[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:inherit;}  \n\n.mw-100[_ngcontent-%COMP%]{max-width:100%;}  \n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lzdGFudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUEseUJBQXlCOztBQUV6QixpQkFBaUI7O0FBRWpCOztJQUVJLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQzs7QUFFN0IsK0JBQStCOztBQUUvQixJQUFJLGNBQWMsQ0FBQzs7QUFFbkIsTUFBTSxrQ0FBa0MsRUFBRSxpQ0FBaUMsQ0FBQzs7QUFFNUUsS0FBSyx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQzs7QUFFbkQsV0FBVyx3QkFBd0IsQ0FBQzs7QUFFcEMsTUFBTSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7OztBQUd6QyxNQUFNLGlCQUFpQixDQUFDOztBQUV4QiwwQkFBMEIsNkJBQTZCLENBQUM7OztBQUd4RCxVQUFVOztBQUVWLFdBQVcsZ0NBQWdDLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQzs7QUFFN0UsS0FBSyxnQkFBZ0IsQ0FBQzs7QUFFdEIsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFDOztBQUV2Rix3QkFBd0IsZ0NBQWdDLENBQUM7OztBQUd6RCxrQkFBa0IsZ0NBQWdDLEVBQUUsZUFBZSxDQUFDOztBQUVwRSxHQUFHLGNBQWMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLENBQUM7O0FBRXJELEdBQUcsY0FBYyxDQUFDOztBQUVsQixHQUFHLGNBQWMsQ0FBQzs7QUFFbEIsR0FBRyxjQUFjLENBQUM7O0FBRWxCLEdBQUcsY0FBYyxDQUFDOztBQUVsQixHQUFHLGNBQWMsQ0FBQzs7OztBQUlsQixNQUFNLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDOztBQUUxQyw0dUJBQTR1QixpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQzs7OztBQUloeEIsYUFBYSx3QkFBd0IsRUFBRSwrQkFBK0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSx3QkFBd0IsRUFBRSxrQkFBa0IsQ0FBQzs7OztBQUlySyxpQkFBaUIsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLGlDQUFpQyxDQUFDOztBQUU1RyxvQkFBb0Isa0JBQWtCLENBQUM7OztBQUd2Qyw0QkFBNEIsY0FBYyxFQUFFLDJCQUEyQixFQUFFLHVCQUF1QixDQUFDOztBQUVqRyxrQ0FBa0MsbUJBQW1CLENBQUM7O0FBRXRELGdGQUFnRjs7QUFFaEYsd0JBQXdCLGFBQWEsQ0FBQzs7QUFFdEMsMkJBQTJCLFVBQVUsQ0FBQzs7O0FBR3RDLE9BQU8sVUFBVSxDQUFDOztBQUVsQixPQUFPLFVBQVUsQ0FBQzs7QUFFbEIsT0FBTyxVQUFVLENBQUM7O0FBRWxCLE9BQU8sVUFBVSxDQUFDOztBQUVsQixPQUFPLFVBQVUsQ0FBQzs7QUFFbEIsUUFBUSxXQUFXLENBQUM7O0FBRXBCLFNBQVMsaUJBQWlCLENBQUM7O0FBRTNCLFlBQVksVUFBVSxFQUFFLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7O0FBRXBMLGdCQUFnQixrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLENBQUM7O0FBRS9ELGNBQWMsZUFBZSxFQUFFLGNBQWMsQ0FBQzs7QUFFOUMsY0FBYyxrQkFBa0IsQ0FBQzs7QUFFakMsVUFBVSxrQkFBa0IsQ0FBQzs7QUFFN0IsUUFBUSxjQUFjLENBQUM7OztBQUd2QiIsImZpbGUiOiJhc3Npc3RhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBmYS1pY29uLmdyZWVuIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbiNrb2wtcGx1cyBmYS1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbiNwZXItcGx1cyBmYS1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbi5oYW5kUG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5sZWZ0QWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ucmlnaHRBbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZhLWljb24ub3JhbmdlIHtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmZhLWljb24uYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xuICBhbGlnbi1pdGVtczogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5jb2wtcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb2wtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4vKiBAY2hhcnNldCBcInV0Zi04XCI7ICAgICovXG4gXG4vKiBDU1MgRG9jdW1lbnQgKi8gIFxuIFxuQG1lZGlhIGFsbHsgIFxuIFxuICAgICp7cGFkZGluZzowcHg7bWFyZ2luOjBweDt9ICBcbiBcbi8qIGRpdnt2ZXJ0aWNhbC1hbGlnbjp0b3A7fSAgICovXG4gXG5pbWd7bWF4LXdpZHRoOjEwMCU7fSAgXG4gXG5odG1sIHstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOyAtbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7fSAgXG4gXG5ib2R5e292ZXJmbG93OmF1dG8haW1wb3J0YW50OyB3aWR0aDoxMDAlIWltcG9ydGFudDt9ICBcbiBcbmh0bWwsIGJvZHl7YmFja2dyb3VuZC1jb2xvcjojZTRlNWU2O30gIFxuIFxuaHRtbCB7cG9zaXRpb246cmVsYXRpdmU7IG1pbi1oZWlnaHQ6MTAwJTt9ICBcblxuICBcbi5jYXJke2JvcmRlci1yYWRpdXM6NHB4O30gIFxuXG4uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge2JvcmRlci1yYWRpdXM6NHB4IDRweCAwcHggMHB4O30gIFxuXG4gIFxuLypUeXBla2l0Ki8gIFxuXG5odG1sLCBib2R5e2ZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDo0MDA7IGZvbnQtc2l6ZToxM3B4O30gIFxuXG5ib2R5e3BhZGRpbmctdG9wOjUycHg7fSAgXG5cbnB7Zm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7IGNvbG9yOiMzMDMwMzA7IGZvbnQtd2VpZ2h0OjQwMDsgbWFyZ2luLWJvdHRvbToxcmVtO30gIFxuXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdHtmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjt9ICBcbiAgXG5cbmgxLGgyLGgzLGg0LGg1LGg2e2ZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDo3MDA7fSAgXG5cbmgxe2ZvbnQtc2l6ZToyMHB4OyBjb2xvcjojMDAwMDAwOyBtYXJnaW4tYm90dG9tOjEwcHg7fSAgXG5cbmgye2ZvbnQtc2l6ZTozMHB4O30gIFxuXG5oM3tmb250LXNpemU6MjRweDt9ICBcblxuaDR7Zm9udC1zaXplOjE4cHg7fSAgXG5cbmg1e2ZvbnQtc2l6ZToxNHB4O30gIFxuXG5oNntmb250LXNpemU6MTJweDt9ICBcblxuICBcblxuLnJvdyB7bWFyZ2luLXJpZ2h0Oi04cHg7IG1hcmdpbi1sZWZ0Oi04cHg7fSAgXG5cbi5jb2wsIC5jb2wtMSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtYXV0bywgLmNvbC1sZywgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy1hdXRvLCAuY29sLW1kLCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLWF1dG8sIC5jb2wtc20sIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tYXV0bywgLmNvbC14bCwgLmNvbC14bC0xLCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC1hdXRvIHtwYWRkaW5nLXJpZ2h0OjhweDsgcGFkZGluZy1sZWZ0OjhweDt9ICBcblxuICBcblxuLmNhcmQtaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2YwZjNmNTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2M4Y2VkMzsgZm9udC1zaXplOjEzcHg7IGZvbnQtd2VpZ2h0OjYwMDsgY29sb3I6IzQ2NDY0NjsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOyBwYWRkaW5nOi43NXJlbSA4cHg7fSAgXG5cbiAgXG5cbi5jbnN0ci1yZWNvcmQgdGh7d2hpdGUtc3BhY2U6bm93cmFwO3BhZGRpbmc6LjQ1cmVtIC4ycmVtOyBmb250LXNpemU6MTNweDsgYm9yZGVyLWJvdHRvbS13aWR0aDowcHghaW1wb3J0YW50O30gIFxuXG4uY25zdHItcmVjb3JkIHRoZWFke2JhY2tncm91bmQ6I2YwZjNmNTt9ICBcblxuXG4uY25zdHItcmVjb3JkIC5mb3JtLWNvbnRyb2x7Zm9udC1zaXplOjEzcHg7IHBhZGRpbmc6MHB4IDByZW0gMHB4IDAuMnJlbTsgaGVpZ2h0OmNhbGMoMnJlbSArIDJweCk7fSAgXG5cbi5jbnN0ci1yZWNvcmQgc2VsZWN0LmZvcm0tY29udHJvbHtwYWRkaW5nLWxlZnQ6LjA1cmVtO30gIFxuXG4vKiAuY25zdHItcmVjb3JkIC50YWJsZSB0ZCwgLmNuc3RyLXJlY29yZCAudGFibGUgdGgge3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9ICAgKi9cblxuLmNuc3RyLXJlY29yZCAudGFibGUgdGR7cGFkZGluZzouM3JlbTt9ICBcblxuLmNuc3RyLXJlY29yZCAudGFibGUgdGQgaDR7bWFyZ2luOjBweDt9ICBcblxuXG4ud3AtNTB7d2lkdGg6NTBweDt9ICBcblxuLndwLTYwe3dpZHRoOjYwcHg7fSAgXG5cbi53cC03MHt3aWR0aDo3MHB4O30gIFxuXG4ud3AtODB7d2lkdGg6ODBweDt9ICBcblxuLndwLTkwe3dpZHRoOjkwcHg7fSAgXG5cbi53cC0xMDB7d2lkdGg6MTAwcHg7fSAgXG5cbi5tdy1hdXRve21pbi13aWR0aDppbmhlcml0O30gIFxuXG4uZXhwYW5kLXJvd3t3aWR0aDoxMDAlOyBib3JkZXI6c29saWQgMXB4ICM1OTYyNjk7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBib3JkZXItcmFkaXVzOjNweDsgd2lkdGg6MTZweDsgaGVpZ2h0OjE2cHg7IHZlcnRpY2FsLWFsaWduOnRvcDsgYmFja2dyb3VuZDojNTk2MjY5OyBjb2xvcjojZmZmZmZmIWltcG9ydGFudDt9ICBcblxuLmV4cGFuZC1yb3cgaW1ne3ZlcnRpY2FsLWFsaWduOnRvcDsgcG9zaXRpb246cmVsYXRpdmU7IHRvcDoycHg7fSAgXG5cbi5zdWItdGFibGUgdGh7Zm9udC13ZWlnaHQ6NDAwOyBmb250LXNpemU6MTJweDt9ICBcblxuLnN1Yi10YWJsZSB0ZHtiYWNrZ3JvdW5kOiNlZmVmZWY7fSAgXG5cbi5uby1iZyB0ZHtiYWNrZ3JvdW5kOmluaGVyaXQ7fSAgXG5cbi5tdy0xMDB7bWF4LXdpZHRoOjEwMCU7fSAgXG5cblxufSAgIl19 */"] });
class AssistantStatusDialogComponent {
    constructor(dialogRefx, data) {
        this.dialogRefx = dialogRefx;
        this.data = data;
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
    }
    doAction() {
        this.dialogRefx.close({ event: this.action, data: this.local_data });
    }
    closeDialogx() {
        this.dialogRefx.close({ event: 'Cancel' });
    }
}
AssistantStatusDialogComponent.ɵfac = function AssistantStatusDialogComponent_Factory(t) { return new (t || AssistantStatusDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"], 8)); };
AssistantStatusDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AssistantStatusDialogComponent, selectors: [["assistant-status-dialog"]], decls: 13, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "mat-flat-button", "", "color", "warn", 3, "click"], ["type", "text", "placeholder", "Estado", 3, "ngModel", "ngModelChange"], ["value", "aguardando", "disabled", ""], ["value", "em_atendimento", "disabled", ""], ["value", "cancelado"], ["value", "finalizado"]], template: function AssistantStatusDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Voc\u00EA vai :: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AssistantStatusDialogComponent_mat_form_field_5_Template, 12, 1, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AssistantStatusDialogComponent_ng_template_6_Template, 5, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssistantStatusDialogComponent_Template_button_click_9_listener() { return ctx.doAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssistantStatusDialogComponent_Template_button_click_11_listener() { return ctx.closeDialogx(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.action !== "Apagar")("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.action);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], encapsulation: 2 });
class AssistantExtraDialogComponent {
    constructor(dialogRefx, data) {
        this.dialogRefx = dialogRefx;
        this.data = data;
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
    }
    doAction() {
        this.dialogRefx.close({ event: this.action, data: this.local_data });
    }
    closeDialogx() {
        this.dialogRefx.close({ event: 'Cancel' });
    }
}
AssistantExtraDialogComponent.ɵfac = function AssistantExtraDialogComponent_Factory(t) { return new (t || AssistantExtraDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"], 8)); };
AssistantExtraDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AssistantExtraDialogComponent, selectors: [["assistant-extra-dialog"]], decls: 13, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "mat-flat-button", "", "color", "warn", 3, "click"], ["type", "text", "placeholder", "Extra", 3, "ngModel", "ngModelChange"], ["value", "polipectomia"], ["value", "hemostasia"], ["value", "ligadura"], ["value", "dilata\u00E7\u00E3o"]], template: function AssistantExtraDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Voc\u00EA vai :: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AssistantExtraDialogComponent_mat_form_field_5_Template, 12, 1, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AssistantExtraDialogComponent_ng_template_6_Template, 5, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssistantExtraDialogComponent_Template_button_click_9_listener() { return ctx.doAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AssistantExtraDialogComponent_Template_button_click_11_listener() { return ctx.closeDialogx(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.action !== "Apagar")("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.action);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_angmat_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/angmat.module */ "OIqw");
/* harmony import */ var _shared_angutils_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/angutils.module */ "I2XR");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.module */ "XpXM");
/* harmony import */ var _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/calendar.module */ "O51e");
/* harmony import */ var _mainforms_mainforms_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainforms/mainforms.module */ "FHe0");
/* harmony import */ var _capture_capture_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capture/capture.module */ "nulL");
/* harmony import */ var _report_report_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./report/report.module */ "LVab");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _assistant_assistant_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assistant/assistant.module */ "lqzx");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'auth' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
            _shared_angmat_module__WEBPACK_IMPORTED_MODULE_2__["AngmatModule"],
            _shared_angutils_module__WEBPACK_IMPORTED_MODULE_3__["AngutilsModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
            _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"],
            _capture_capture_module__WEBPACK_IMPORTED_MODULE_7__["CaptureModule"],
            _report_report_module__WEBPACK_IMPORTED_MODULE_8__["ReportModule"],
            _mainforms_mainforms_module__WEBPACK_IMPORTED_MODULE_6__["MainformsModule"],
            _assistant_assistant_module__WEBPACK_IMPORTED_MODULE_11__["AssistantModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
        _shared_angmat_module__WEBPACK_IMPORTED_MODULE_2__["AngmatModule"],
        _shared_angutils_module__WEBPACK_IMPORTED_MODULE_3__["AngutilsModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
        _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"],
        _capture_capture_module__WEBPACK_IMPORTED_MODULE_7__["CaptureModule"],
        _report_report_module__WEBPACK_IMPORTED_MODULE_8__["ReportModule"],
        _mainforms_mainforms_module__WEBPACK_IMPORTED_MODULE_6__["MainformsModule"],
        _assistant_assistant_module__WEBPACK_IMPORTED_MODULE_11__["AssistantModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"]] }); })();


/***/ }),

/***/ "bbly":
/*!*********************************************!*\
  !*** ./src/app/home/team/team.component.ts ***!
  \*********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");



class TeamComponent {
    constructor(apiService, cookieService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        const mrToken = this.cookieService.get('mr-token');
        if (!mrToken) {
            document.getElementById('photoCap').hidden = true;
        }
    }
    // Used to toggle the menu on smaller screens when clicking on the menu button
    openNav() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        }
        else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    // Script for side navigation
    w3_open() {
        var x = document.getElementById("mySidebar");
        x.style.width = "300px";
        x.style.paddingTop = "10%";
        x.style.display = "block";
    }
    // Close side navigation
    w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 320, vars: 0, consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://www.w3schools.com/lib/w3-theme-black.css"], ["id", "myPage"], ["id", "fb-root"], ["id", "mySidebar", 1, "w3-sidebar", "w3-bar-block", "w3-white", "w3-card", "w3-animate-left", "w3-xxlarge", 2, "display", "none", "z-index", "2"], ["href", "javascript:void(0)", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button", "w3-display-topright", "w3-text-teal"], [1, "fa", "fa-remove"], ["href", "#", 1, "w3-bar-item", "w3-button"], [1, "w3-top", 2, "padding-top", "20px", "padding-right", "80px"], [1, "w3-bar", "w3-theme-d2", "w3-left-align"], ["href", "javascript:void(0);", 1, "w3-bar-item", "w3-button", "w3-hide-medium", "w3-hide-large", "w3-right", "w3-hover-white", "w3-theme-d2", 3, "click"], [1, "fa", "fa-bars"], ["href", "#", 1, "w3-bar-item", "w3-button", "w3-teal"], [1, "fa", "fa-home", "w3-margin-right", 2, "padding-left", "10px"], ["href", "team", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "products", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["onclick", "document.getElementById('insuranceModal').style.display='block'"], [1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "#contact", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], [1, "w3-dropdown-hover", "w3-hide-small"], ["title", "Notifications", 1, "w3-button"], [1, "fa", "fa-caret-down"], [1, "w3-dropdown-content", "w3-card-4", "w3-bar-block"], ["id", "photoCap"], ["href", "capture", 1, "w3-bar-item", "w3-button"], ["href", "themes", 1, "w3-bar-item", "w3-button"], ["href", "auth", 1, "w3-bar-item", "w3-button"], ["href", "https://www.google.com.br/search?q=digest%2Bcom.br", "title", "Search", "target", "_blank", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-right", "w3-hover-teal"], [1, "fa", "fa-search", 2, "padding-right", "40px"], ["id", "navDemo", 1, "w3-bar-block", "w3-theme-d2", "w3-hide", "w3-hide-large", "w3-hide-medium"], ["href", "team", 1, "w3-bar-item", "w3-button"], ["href", "products", 1, "w3-bar-item", "w3-button"], ["href", "insurance", 1, "w3-bar-item", "w3-button"], ["href", "#contact", 1, "w3-bar-item", "w3-button"], [1, "w3-display-container", "w3-animate-opacity"], ["src", "/assets/images/gcanyon1.jpg", "alt", "Digest", 2, "width", "100%", "min-height", "250px", "max-height", "600px"], [1, "w3-container", "w3-display-topright", "w3-display-bottomleft", "w3-margin-bottom"], [2, "font-size", "4vw", "padding-top", "40px"], [2, "font-size", "2vw"], ["data-href", "http://www.digest.com.br", "data-width", "", "data-layout", "button", "data-action", "like", "data-size", "small", "data-share", "false", 1, "fb-like"], [1, "w3-container", "w3-display-bottomright", "w3-margin-bottom"], ["title", "Contato", 1, "w3-button", "w3-large", "w3-theme", "w3-hover-teal"], ["href", "#contact"], ["id", "team", 1, "w3-container", "w3-padding-64", "w3-center"], [1, "w3-row"], [2, "background-color", "rgb(217, 233, 248)"], [1, "w3-quarter"], ["src", "/assets/images/Icons/lava1.png", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["src", "/assets/images/Icons/lava2.png", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["src", "/assets/images/Icons/avatarOndulado.webp", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["src", "/assets/images/Icons/avatarRuiva.webp", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["src", "/assets/images/Icons/Wash_hands_Clean_Hygiene_Prevention-512.webp", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["onclick", "document.getElementById('id01').style.display='block'", "src", "/assets/images/Icons/avatarLoira.webp", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["src", "/assets/images/Icons/avatarNovo.webp", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["src", "/assets/images/Icons/web_development_character_builder___man_design_computer_monitor_work-512.webp", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["src", "/assets/images/Icons/avatarMoreno.webp", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["src", "/assets/images/Icons/avatarPardo.webp", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["src", "/assets/images/Icons/avatarCurto.webp", "alt", "Digest", 1, "w3-circle", "w3-hover-opacity", 2, "width", "45%"], ["id", "id01", 1, "w3-modal"], [1, "w3-modal-content", "w3-card-4", "w3-animate-top"], [1, "w3-container", "w3-teal", "w3-display-container"], ["onclick", "document.getElementById('id01').style.display='none'", 1, "w3-button", "w3-teal", "w3-display-topright"], [1, "fa", "fa-smile-o"], [1, "w3-container"], [1, "w3-container", "w3-teal"], ["href", "#contact", 1, "w3-text-red"], ["id", "id02", 1, "w3-modal"], ["id", "id03", 1, "w3-modal"], ["id", "id04", 1, "w3-modal"], ["id", "id05", 1, "w3-modal"], ["id", "id06", 1, "w3-modal"], ["id", "id07", 1, "w3-modal"], [1, "w3-container", "w3-padding-32", "w3-theme-d1", "w3-center"], ["href", "https://www.facebook.com/sharer/sharer.php?u=http://www.digest.com.br/static/catalog/z-ph.png&&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Facebook", "title", "Facebook", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-facebook"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-twitter"], ["href", "https://www.facebook.com/digestoficial", "target", "_blank", "title", "Facebook", 1, "w3-button", "w3-large", "w3-blue"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-cyan"], ["href", "https://www.instagram.com/digestoficial", "target", "_blank", "rel", "noopener", "title", "Instagram", 1, "w3-button", "w3-large", "w3-pink"], [1, "fa", "fa-instagram"], ["href", "http://www.digest.com.br", "target", "_blank"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Link 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Link 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_Template_a_click_27_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Saiba Mais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Foto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Videos Educativos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Temas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Digest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\"Diagn\u00F3stico, tratamento & preven\u00E7\u00E3o\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Deseja atendimento?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Nossa Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Recep\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "T\u00E9rcia Brasileiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Supervis\u00E3o de recep\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Gabriela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Recep\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Enfermagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Jarana Mota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Enfermeira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Lucileia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "T\u00E9cnico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Gloria Stefane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "T\u00E9cnico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "M\u00E9dicos(as)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Larissa Elias Soares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "M\u00E9dica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Daniel Viana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "M\u00E9dico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Loraine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "M\u00E9dica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Tarciso Daniel Rocha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "M\u00E9dico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Miguel A N Souza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "M\u00E9dico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Samara Lima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "M\u00E9dica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "header", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Dra Larissa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Gastroenterologista & Endoscopista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Ol\u00E1! Sou graduada pela Universidade Federal do Cear\u00E1, e tenho t\u00EDtulo de especialista pela Federa\u00E7\u00E3o Brasileira de Gastroenterologia e pela Sociedade Brasileira de Endoscopia Digestiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "footer", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Entre em contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " e farei o m\u00E1ximo para ajudar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "header", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Dra Larissa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Gastroenterologista & Endoscopista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Ol\u00E1! Sou graduada pela Universidade Federal do Cear\u00E1, e tenho t\u00EDtulo de especialista pela Federa\u00E7\u00E3o Brasileira de Gastroenterologia e pela Sociedade Brasileira de Endoscopia Digestiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "footer", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Entre em contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " e farei o m\u00E1ximo para ajudar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "header", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Dra Larissa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Gastroenterologista & Endoscopista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Ol\u00E1! Sou graduada pela Universidade Federal do Cear\u00E1, e tenho t\u00EDtulo de especialista pela Federa\u00E7\u00E3o Brasileira de Gastroenterologia e pela Sociedade Brasileira de Endoscopia Digestiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "footer", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Entre em contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " e farei o m\u00E1ximo para ajudar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "header", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Dra Larissa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Gastroenterologista & Endoscopista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Ol\u00E1! Sou graduada pela Universidade Federal do Cear\u00E1, e tenho t\u00EDtulo de especialista pela Federa\u00E7\u00E3o Brasileira de Gastroenterologia e pela Sociedade Brasileira de Endoscopia Digestiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "footer", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Entre em contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " e farei o m\u00E1ximo para ajudar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "header", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Dra Larissa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Gastroenterologista & Endoscopista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Ol\u00E1! Sou graduada pela Universidade Federal do Cear\u00E1, e tenho t\u00EDtulo de especialista pela Federa\u00E7\u00E3o Brasileira de Gastroenterologia e pela Sociedade Brasileira de Endoscopia Digestiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "footer", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Entre em contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " e farei o m\u00E1ximo para ajudar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "header", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Dra Larissa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Gastroenterologista & Endoscopista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Ol\u00E1! Sou graduada pela Universidade Federal do Cear\u00E1, e tenho t\u00EDtulo de especialista pela Federa\u00E7\u00E3o Brasileira de Gastroenterologia e pela Sociedade Brasileira de Endoscopia Digestiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "footer", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Entre em contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " e farei o m\u00E1ximo para ajudar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "header", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Dra Larissa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Gastroenterologista & Endoscopista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Ol\u00E1! Sou graduada pela Universidade Federal do Cear\u00E1, e tenho t\u00EDtulo de especialista pela Federa\u00E7\u00E3o Brasileira de Gastroenterologia e pela Sociedade Brasileira de Endoscopia Digestiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "footer", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Entre em contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " e farei o m\u00E1ximo para ajudar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "footer", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Compartilhe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Veja tamb\u00E9m:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Criado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "digest.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".servs[_ngcontent-%COMP%] {\n  background-color: lightblue;\n  text-align: center;\n  margin: auto;\n  width: 99%;\n  \n  border: 1px solid green;\n  clear: left;\n}\n.scale-down[_ngcontent-%COMP%] {object-fit: scale-down;}\n.center[_ngcontent-%COMP%] {text-align: center; padding: 0px}\n#center[_ngcontent-%COMP%] {text-align: center; margin-left:auto; margin-right:auto; display:block;}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVOztFQUVWLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFDQSxhQUFhLHNCQUFzQixDQUFDO0FBQ3BDLFNBQVMsa0JBQWtCLEVBQUUsWUFBWTtBQUV6QyxTQUFTLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztBQUVoRjtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zZXJ2cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5OSU7XG4gIFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgY2xlYXI6IGxlZnQ7XG59XG4uc2NhbGUtZG93biB7b2JqZWN0LWZpdDogc2NhbGUtZG93bjt9XG4uY2VudGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDBweH1cblxuI2NlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tbGVmdDphdXRvOyBtYXJnaW4tcmlnaHQ6YXV0bzsgZGlzcGxheTpibG9jazt9XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufSJdfQ== */", ""] });


/***/ }),

/***/ "cPhq":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");





class HomeComponent {
    constructor(apiService, cookieService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            like: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
    }
    ngOnInit() {
        const mrToken = this.cookieService.get('mr-token');
        if (!mrToken) {
            document.getElementById('photoCap').hidden = true;
        }
    }
    emailSendClient() {
        // Send an email from the client smtp. Needs an email account configured
        const name = this.emailForm.value.name;
        const email = this.emailForm.value.email;
        const body = this.emailForm.value.body;
        const like = this.emailForm.value.like;
        var link = "mailto:contato@digest.com.br"
            + "?cc=mans@ufc.br"
            + "&subject=" + encodeURIComponent(`${name}`)
            + "&body=" + encodeURIComponent(body);
        console.log(this.emailForm.value.name, 'link', link);
        //window.location.href = link;
        window.open(link);
    }
    emailSendServer() {
        // Starts an email from the server.
        // Sends data to the API by a service. The API sends the email from a proprietary account: miguel.sza@gmail.com
        this.apiService.emailFromSite(this.emailForm.value.name, this.emailForm.value.mobile, this.emailForm.value.email, this.emailForm.value.body).subscribe();
    }
    // Used to toggle the menu on smaller screens when clicking on the menu button
    openNav() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        }
        else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    // Script for side navigation
    w3_open() {
        var x = document.getElementById("mySidebar");
        x.style.width = "300px";
        x.style.paddingTop = "10%";
        x.style.display = "block";
    }
    // Close side navigation
    w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 341, vars: 1, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://www.w3schools.com/lib/w3-theme-black.css"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["name", "description", "content", "gastroenterologia, endoscopia, colonoscopia, ecoendoscopia, CPRE, manometria, bravo,pHmetria, imped\u00E2ncio-pHmetria, fortaleza, cear\u00E1, miguel a n souza"], ["id", "myPage"], ["id", "fb-root"], ["id", "mySidebar", 1, "w3-sidebar", "w3-bar-block", "w3-white", "w3-card", "w3-animate-left", "w3-xxlarge", 2, "display", "none", "z-index", "2"], ["href", "javascript:void(0)", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button", "w3-display-topright", "w3-text-teal"], [1, "fa", "fa-remove"], ["href", "#", 1, "w3-bar-item", "w3-button"], [1, "w3-top", 2, "padding-top", "20px", "padding-right", "80px"], [1, "w3-bar", "w3-theme-d2", "w3-left-align"], ["href", "javascript:void(0);", 1, "w3-bar-item", "w3-button", "w3-hide-medium", "w3-hide-large", "w3-right", "w3-hover-white", "w3-theme-d2", 3, "click"], [1, "fa", "fa-bars"], ["href", "#", 1, "w3-bar-item", "w3-button", "w3-teal"], [1, "fa", "fa-home", "w3-margin-right", 2, "padding-left", "10px"], ["href", "team", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "products", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["onclick", "document.getElementById('insuranceModal').style.display='block'"], [1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "#contact", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], [1, "w3-dropdown-hover", "w3-hide-small"], ["title", "Notifications", 1, "w3-button"], [1, "fa", "fa-caret-down"], [1, "w3-dropdown-content", "w3-card-4", "w3-bar-block"], ["id", "photoCap"], ["href", "capture", 1, "w3-bar-item", "w3-button"], ["href", "themes", 1, "w3-bar-item", "w3-button"], ["href", "auth", 1, "w3-bar-item", "w3-button"], [1, "w3-bar-item"], [1, "fa", "fa-phone", "w3-text-teal", "w3-large"], ["href", "https://www.google.com.br/search?q=digest%2Bcom.br", "title", "Search", "target", "_blank", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-right", "w3-hover-teal"], [1, "fa", "fa-search", 2, "padding-right", "40px"], ["id", "navDemo", 1, "w3-bar-block", "w3-theme-d2", "w3-hide", "w3-hide-large", "w3-hide-medium"], ["href", "team", 1, "w3-bar-item", "w3-button"], ["href", "products", 1, "w3-bar-item", "w3-button"], ["href", "insurance", 1, "w3-bar-item", "w3-button"], ["href", "#contact", 1, "w3-bar-item", "w3-button"], [1, "w3-display-container", "w3-animate-opacity"], ["src", "/assets/images/gcanyon1.jpg", "alt", "Digest", 2, "width", "100%", "min-height", "250px", "max-height", "600px"], [1, "w3-container", "w3-display-topright", "w3-display-bottomleft", "w3-margin-bottom"], [2, "font-size", "4vw", "padding-top", "40px"], [2, "font-size", "2vw"], ["data-href", "http://www.digest.com.br", "data-width", "", "data-layout", "button", "data-action", "like", "data-size", "small", "data-share", "false", 1, "fb-like"], [1, "w3-container", "w3-display-bottomright", "w3-margin-bottom"], ["title", "Contato", 1, "w3-button", "w3-large", "w3-theme", "w3-hover-teal"], ["href", "#contact"], ["id", "insuranceModal", "onclick", "document.getElementById('insuranceModal').style.display='none'", 1, "w3-modal"], [1, "w3-modal-content", "w3-card-4", "w3-animate-top"], [1, "w3-container", "w3-teal", "w3-display-container"], ["onclick", "document.getElementById('insuranceModal').style.display='none'", 1, "w3-button", "w3-teal", "w3-display-topright"], [1, "fa", "fa-smile-o"], [1, "wf-td", "hgroup"], [1, "h2-size"], [1, "wf-td"], [1, "assistive-text"], ["id", "main", 1, "sidebar-none"], [1, "main-gradient"], [1, "wf-wrap"], [1, "wf-container-main"], ["id", "content", "role", "main", 1, "content"], [1, "vc_row", "wpb_row", "vc_row-fluid", "dt-default", 2, "margin-top", "0px", "margin-bottom", "0px"], [1, "wpb_column", "vc_column_container", "vc_col-sm-4"], [1, "vc_column-inner"], [1, "wpb_wrapper"], [1, "standard-arrow", "list-divider", "bullet-top"], [1, "w3-container", "w3-teal"], ["id", "work", 1, "w3-row-padding", "w3-padding-64", "w3-theme-l1"], [1, "w3-quarter"], [2, "font-size", "0.85em"], ["id", "map", "src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.358882826357!2 d-38.51637775053424!3d-3.731715944218886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748599ea2ae71%3A0x1a3cef816d7fe704!2sR.%20Ant%C3%B4nio%20Augusto%2C%201270%20-%20Meireles%2C%20Fortaleza%20-%20CE%2C%2060110-370!5e0!3m2!1spt-BR!2sbr!4v1569816622096!5m2!1spt-BR!2sbr", "frameborder", "0", "allowfullscreen", "", 2, "border", "0", "max-width", "100%"], [1, "w3-card", "w3-white"], ["src", "/assets/images/LosAngeles.jpg", "alt", "Snow", 2, "width", "100%"], [1, "w3-container"], ["src", "/assets/images/manometria.jpg", "alt", "Lights", 2, "width", "100%"], ["src", "/assets/images/colangioCA_autoex2x.png", "alt", "Mountains", 2, "width", "100%"], [1, "w3-container", 2, "position", "relative"], ["onclick", "w3_open()", 1, "w3-button", "w3-xlarge", "w3-circle", "w3-teal", 2, "position", "absolute", "top", "-28px", "right", "24px"], ["id", "contact", 1, "w3-container", "w3-padding-64", "w3-theme-l5"], [1, "w3-row"], [1, "w3-col", "m5"], [1, "w3-padding-16"], [1, "w3-xlarge", "w3-border-teal", "w3-bottombar"], [1, "fa", "fa-map-marker", "w3-text-teal", "w3-xlarge"], [1, "fa", "fa-phone", "w3-text-teal", "w3-xlarge"], ["title", "WhatsApp", 1, "fa", "fa-smile-o", "w3-text-teal", "w3-xlarge"], ["title", "Instagram", 1, "fa", "fa-instagram", "w3-text-teal", "w3-xlarge"], [1, "fa", "fa-envelope-o", "w3-text-teal", "w3-xlarge"], ["href", "https://wa.me/+5585996288800/?text=Ol\u00E1! Gentileza entrar em contato", "title", "WhatsApp", "target", "_blank", "rel", "noopener noreferrer", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-whatsapp"], [1, "w3-col", "m7"], ["id", "emailForm", "action", "/action_page.php", "target", "_blank", 1, "w3-container", "w3-card-4", "w3-padding-16", "w3-white", 3, "formGroup", "ngSubmit"], [1, "w3-section"], ["id", "ename", "type", "text", "formControlName", "name", "required", "", 1, "w3-input"], ["type", "text", "formControlName", "mobile", "required", "", 1, "w3-input"], ["type", "email", "formControlName", "email", "required", "", 1, "w3-input"], ["id", "ebody", "type", "text", "formControlName", "body", "required", "", 1, "w3-input"], ["type", "checkbox", "checked", "", "name", "like", 1, "w3-check"], ["type", "submit", 1, "w3-button", "w3-right", "w3-theme"], [1, "w3-container", "w3-padding-32", "w3-theme-d1", "w3-center"], ["href", "https://www.facebook.com/sharer/sharer.php?u=http://www.digest.com.br/static/catalog/z-ph.png&&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Facebook", "title", "Facebook", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-facebook"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-twitter"], ["href", "https://www.facebook.com/digestoficial", "target", "_blank", "title", "Facebook", 1, "w3-button", "w3-large", "w3-blue"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-cyan"], ["href", "https://www.instagram.com/digestoficial", "target", "_blank", "rel", "noopener", "title", "Instagram", 1, "w3-button", "w3-large", "w3-pink"], [1, "fa", "fa-instagram"], [2, "padding-top", "20px", "font-size", "0.7em"], ["href", "http://www.digest.com.br", "target", "_blank"], [1, "w3-tooltip", "w3-right", 2, "position", "relative", "bottom", "0px", "z-index", "1"], [1, "w3-text", "w3-padding", "w3-teal", "w3-hide-small"], ["href", "#myPage", 1, "w3-button", "w3-theme"], [1, "w3-xlarge"], [1, "fa", "fa-chevron-circle-up"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Digest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "body", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Link 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Link 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_29_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Saiba Mais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Foto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Videos Educativos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Temas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " 85 3252-5469");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h1", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Digest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "\"Diagn\u00F3stico, tratamento & preven\u00E7\u00E3o\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Deseja atendimento?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "header", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Ol\u00E1! Seja bem vindo..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Espero que encontre o que precisa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h1", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Clique em qualquer lugar para fechar esta janela ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "AMIL ASSISTENCIA MEDICA INTERNACIONAL LTDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "ASSEFAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "BANCO CENTRAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "BASE AEREA DE FORTALEZA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "BRADESCO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "BRADESCO PROCTOLOGIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "CAFAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "CAIXA ASSIST EMPREG EMPR BRASIL PESQ AGROP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "POSTAL SAUDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "CAMED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "CAPSESP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "CASSI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "EMBRATEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "FACHESF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "FAMED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "FUNCEF (SAUDE CAIXA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "FUSEX");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "FUSMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "GEAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "HOSPITAL INFANTIL ALBERT SABIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "IPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "ISSEC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "ISSEC INTERIOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "JESU\u00CDTAS DO BRASIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "LIV SA\u00DADE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "LIFE EMPRESARIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "MEDISERVICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "MERCEEIROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "NORCLINICAS (INTERMEDICA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "NOTRE DAME SEGURADORA SA (INTERMEDICA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "PAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "PAS INTERIOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "PETROBRAS PETR\u00D3LEO AMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "PETROBRAS DISFOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "PLAN ASSISTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "PROASA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "REDE MAIS SA\u00DADE E VIDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "SUL AMERICA SERVICOS DE SAUDE SA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "UNIMED (TODOS PLANOS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "VAI BEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "VITALLIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "footer", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Modal footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Nossa Miss\u00E3o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Prestar servi\u00E7os em sa\u00FAde centrados no paciente e sua fam\u00EDlia, com alta qualidade t\u00E9cnica e respeitando os princ\u00EDpios da bio\u00E9tica.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Localiza\u00E7\u00E3o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "iframe", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Endoscopia & Colonoscopia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Realizamos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "consultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, " e diversos diagn\u00F3ticos por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "endoscopia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " (esofagite, \u00FAlcera, gastrite, tumores, etc) bem como promovemos a preven\u00E7\u00E3o de doen\u00E7as como c\u00E2ncer g\u00E1strico ou de intestino (");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "colonoscopia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Testes Funcionais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Estudos da fun\u00E7\u00E3o do es\u00F4fago (manometria de alta resolu\u00E7\u00E3o) e monitoriza\u00E7\u00E3o do refluxo, com ou ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "sem sonda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, " (pHmetria, imped\u00E2ncio-pHmetria, Bravo).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Endoscopia Avan\u00E7ada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Realizamos procedimentos endosc\u00F3picos complexos: CPRE, ecoendoscopia, abla\u00E7\u00E3o, dilata\u00E7\u00F5es, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Entre em contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Ligue, passe um e-mail ou mensagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, " Rua Ant\u00F4nio Augusto 1270, Fortaleza");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, " 85 3252-5469, 3224-1547");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, " 85 99628-8800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](278, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, " @digestoficial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, " contato@digest.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, " Clique para WhatsApp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "form", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_289_listener() { return ctx.emailSendServer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Mensagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](306, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "Curtir!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "footer", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Compartilhe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](316, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](319, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "Veja tamb\u00E9m:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](327, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](329, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "p", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Criado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "digest.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "Acima");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](289);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.emailForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], styles: ["div.gallery[_ngcontent-%COMP%] {\n    margin: 5px;\n    border: 1px solid #ccc;\n    float: left;\n    width: 180px;\n  }\n\n  div.gallery[_ngcontent-%COMP%]:hover {\n    border: 1px solid #777;\n  }\n\n  div.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 120px;\n  }\n\n  div.desc[_ngcontent-%COMP%] {\n    padding: 15px;\n    text-align: center;\n  }\n\n  .servs[_ngcontent-%COMP%] {\n    background-color: lightblue;\n    text-align: center;\n    margin: auto;\n    width: 99%;\n    \n    border: 1px solid green;\n    clear: left;\n}\n\n  .scale-down[_ngcontent-%COMP%] {object-fit: scale-down;}\n\n  .center[_ngcontent-%COMP%] {text-align: center; padding: 0px}\n\n  #center[_ngcontent-%COMP%] {text-align: center; margin-left:auto; margin-right:auto; display:block;}\n\n  ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n\n  .flex_container[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 50%;\n  \n  padding: 10px;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTs7SUFFVix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztFQUNBLGFBQWEsc0JBQXNCLENBQUM7O0VBQ3BDLFNBQVMsa0JBQWtCLEVBQUUsWUFBWTs7RUFFekMsU0FBUyxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLENBQUM7O0VBRWhGO0lBQ0kscUJBQXFCO0FBQ3pCOztFQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5nYWxsZXJ5IHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuXG4gIGRpdi5nYWxsZXJ5OmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xuICB9XG5cbiAgZGl2LmdhbGxlcnkgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG5cbiAgZGl2LmRlc2Mge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNlcnZzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTklO1xuICAgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIGNsZWFyOiBsZWZ0O1xufVxuLnNjYWxlLWRvd24ge29iamVjdC1maXQ6IHNjYWxlLWRvd247fVxuLmNlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAwcHh9XG5cbiNjZW50ZXIge3RleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWxlZnQ6YXV0bzsgbWFyZ2luLXJpZ2h0OmF1dG87IGRpc3BsYXk6YmxvY2s7fVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uZmxleF9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuOyAqL1xuICBwYWRkaW5nOiAxMHB4O1xuICAvKiBmbGV4LXdyYXA6IG5vd3JhcDsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTsgKi9cbn0iXX0= */"] });


/***/ }),

/***/ "cdK/":
/*!******************************************************************************!*\
  !*** ./src/app/mainforms/persona-form-modal/persona-form-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonaFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaFormModalComponent", function() { return PersonaFormModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "hD8V");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");










// export interface DialogData {
//   animal: string;
//   name: string;
// }
/**
 * @title Dialog Overview
 */
class PersonaFormModalComponent {
    constructor(apiService, fb, dialogRef, data
    // // id,
    // name,
    // mobile,
    // whatsapp,
    // telephone,
    // email, 
    // street,
    // complement,
    // postalcode,
    // dob,
    // registerdate,
    // comment,
    // }
    ) {
        // this.name = name;
        this.apiService = apiService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        //   animal: string;
        //   name: string;
        this.hide = true;
        this.form = fb.group({
            // id: [id],
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            whatsapp: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telephone: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            street: [],
            complement: [],
            postalcode: [],
            dob: [],
            registerdate: [moment__WEBPACK_IMPORTED_MODULE_2__(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            comment: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
        // this.form = fb.group({
        //     description: [description, []],
        //     ...
        // });
    }
    save() {
        try {
            if (this.form.value.name == '') {
                throw alert('Por favor, informe o nome do cliente!');
            }
            ;
            if (this.form.value.dob == null) {
                throw alert('Por favor, informe a data de nascimento do cliente!');
            }
            ;
            if (this.form.value.mobile == null) {
                throw alert('Por favor, informe o celular do cliente!');
            }
            ;
            console.log('dob and mob', this.form.value.dob, this.form.value.mobile);
            //this.dialogRef.close(this.form.value);
            this.apiService.createPersona(this.form.value.name.toLowerCase(), this.form.value.mobile, this.form.value.whatsapp, this.form.value.telephone, this.form.value.email, this.form.value.street, this.form.value.complement, this.form.value.postalcode, this.form.value.dob, this.form.value.registerdate, this.form.value.comment).subscribe(
            // Above is sufficient to write on the db. Below shall refresh yhe list
            // (result: Event) => this.eventCreated.emit(result),
            // error => console.log(error)
            );
            console.log(this.form);
            //location.reload();
            // this.router.navigate(['event-form'],);
            console.log('dob: ', this.form.value.dob);
        }
        catch (err) {
            err;
        }
    }
    close() {
        this.dialogRef.close();
    }
    getErrorMessage() { }
}
PersonaFormModalComponent.ɵfac = function PersonaFormModalComponent_Factory(t) { return new (t || PersonaFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
PersonaFormModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PersonaFormModalComponent, selectors: [["persona-form-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
        //## This was preventing the dialog to close
        //## witn saying close() was not a function i MatDialogRef.
        //## In fact it wasnt in its provide:
        //{ provide: MatDialogRef, useValue: {} }
        ])], decls: 33, vars: 1, consts: [["mat-dialog-title", ""], [3, "formGroup"], ["matInput", "", "placeholder", "Nome", "formControlName", "name", "required", ""], ["matInput", "", "placeholder", "Celular", "formControlName", "mobile", "required", ""], ["matInput", "", "placeholder", "WhatsApp", "formControlName", "whatsapp"], ["matInput", "", "placeholder", "Telefone", "formControlName", "telephone"], ["matInput", "", "placeholder", "e-mail", "formControlName", "email"], ["matInput", "", "placeholder", "Rua & No", "formControlName", "street"], ["matInput", "", "placeholder", "Complemento", "formControlName", "complement"], ["matInput", "", "placeholder", "CEP", "formControlName", "postalcode"], ["matInput", "", "type", "date", "placeholder", "DN", "formControlName", "dob"], ["myDatepicker", ""], ["matInput", "", "placeholder", "Data de Registro", "formControlName", "registerdate"], ["matInput", "", "placeholder", "Coment\u00E1rios", "formControlName", "comment"], [1, "mat-raised-button", 3, "click"], ["cdkFocusInitial", "", 1, "mat-raised-button", "mat-primary", 3, "mat-dialog-close", "click"]], template: function PersonaFormModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Novo cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PersonaFormModalComponent_Template_button_click_29_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PersonaFormModalComponent_Template_button_click_31_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n    display: block;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 100px;\n    resize: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmEtZm9ybS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InBlcnNvbmEtZm9ybS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufSJdfQ== */"] });


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_angutils_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/angutils.module */ "I2XR");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _hometree_modalEx_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hometree/modalEx.component */ "GIjN");
/* harmony import */ var _themes_themes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes/themes.component */ "lWNe");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team/team.component */ "bbly");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "KT9E");
/* harmony import */ var _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./insurance/insurance.component */ "7L5p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _shared_angutils_module__WEBPACK_IMPORTED_MODULE_1__["AngutilsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _hometree_modalEx_component__WEBPACK_IMPORTED_MODULE_4__["ModalExComponent"],
        _themes_themes_component__WEBPACK_IMPORTED_MODULE_5__["ThemesComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
        _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_8__["InsuranceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _shared_angutils_module__WEBPACK_IMPORTED_MODULE_1__["AngutilsModule"]] }); })();


/***/ }),

/***/ "diQs":
/*!***************************************!*\
  !*** ./src/services/utils.service.ts ***!
  \***************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "hD8V");



class UtilsService {
    constructor(apiService) {
        this.apiService = apiService;
        this.eventss = [];
    }
    ngAfterViewInit() {
        this.apiService.getEvents().subscribe(event => {
            this.eventss = event.filter(ev => ev.color !== 'FFFFFF'),
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.eventss);
        });
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eVYu":
/*!******************************************************************************!*\
  !*** ./src/app/mainforms/kollege-form-modal/kollege-form-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: KollegeFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KollegeFormModalComponent", function() { return KollegeFormModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ "hD8V");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








/**
 * @title Dialog
 */
class KollegeFormModalComponent {
    constructor(apiService, fb, dialogRef, data) {
        this.apiService = apiService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = fb.group({
            // id: [id],
            name: [''],
            crm: [''],
            email: [''],
        });
    }
    ngOnInit() { }
    save() {
        //this.dialogRef.close(this.form.value);
        console.log(this.form.value);
        //this.dialogRef.close(this.form.value);
        try {
            if (this.form.value.name == '') {
                throw alert('Por favor, informe o nome do médico!');
            }
            ;
            if (this.form.value.dob == '') {
                throw alert('Por favor, informe o CRM do médico!');
            }
            ;
            if (this.form.value.mobile == '') {
                throw alert('Por favor, informe o celular do médico!');
            }
            ;
            this.apiService.createKollege(this.form.value.name, this.form.value.crm, this.form.value.email).subscribe(
            // Above is sufficient to write on the db. Below shall refresh yhe list
            // (result: Event) => this.eventCreated.emit(result),
            // error => console.log(error)
            );
            //close();
            //location.reload();
            console.log(this.form);
            // this.router.navigate(['event-form'],);
            // console.log('dob: ', this.form.value.dob);
        }
        catch (err) {
            err;
        }
    }
    onNoAction() {
        this.dialogRef.close();
    }
}
KollegeFormModalComponent.ɵfac = function KollegeFormModalComponent_Factory(t) { return new (t || KollegeFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
KollegeFormModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KollegeFormModalComponent, selectors: [["kollege-form-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
        //{ provide: MAT_DIALOG_DATA, useValue: {}},
        //{ provide: MatDialogRef, useValue: {} }
        ])], decls: 14, vars: 1, consts: [["mat-dialog-title", ""], [3, "formGroup"], ["matInput", "", "placeholder", "Nome", "formControlName", "name"], ["matInput", "", "placeholder", "CRM", "formControlName", "crm"], ["matInput", "", "placeholder", "e-mail", "formControlName", "email"], ["mat-button", "", 1, "mat-raised-button", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 1, "mat-raised-button", "mat-primary", 3, "mat-dialog-close", "click"]], template: function KollegeFormModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Novo m\u00E9dico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KollegeFormModalComponent_Template_button_click_10_listener() { return ctx.onNoAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KollegeFormModalComponent_Template_button_click_12_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n    display: block;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 100px;\n    resize: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvbGxlZ2UtZm9ybS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImtvbGxlZ2UtZm9ybS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufSJdfQ== */"] });


/***/ }),

/***/ "hD8V":
/*!*************************************!*\
  !*** ./src/services/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "5pvF");







class ApiService {
    constructor(httpClient, cookieService, messageService) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.messageService = messageService;
        this.baseUrl = 'http://127.0.0.1:8000/';
        this.baseDigestUrl = `${this.baseUrl}api/persona/events/`; // TO BE DELETED
        this.baseEventUrl = `${this.baseUrl}api/persona/events`;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        this.messageService.add(`ApiService: ${message}`);
    }
    // ######## API SERVICES ###########
    createEvent(title, partner, start, color, status, insurance, resourceId, addtitle1, addtitle2, addtitle3, comment, persona, kollege) {
        const body = JSON.stringify({ title, partner, start, color, status, insurance, resourceId, addtitle1, addtitle2,
            addtitle3, comment, persona, kollege });
        return this.httpClient.post(`${this.baseEventUrl}/`, body, { headers: this.getAuthHeaders() });
    }
    getEvents() {
        // this.messageService.add('ApiService: fetched events');
        // return of(events);
        return this.httpClient.get(this.baseEventUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.log('fetched events')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getEvents', [])));
    }
    /** GET hero by id. Return `undefined` when id not found */
    getEventNo404(id) {
        const url = `${this.baseEventUrl}/?id=${id}`;
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(events => events[0]), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} event id=${id}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError(`getEvent id=${id}`)));
    }
    /** GET hero by id. Will 404 if id not found */
    getEvent(id) {
        const url = `${this.baseEventUrl}/${id}/`;
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.log(`fetched event id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError(`getEvent id=${id}`)));
    }
    /** POST: add a new hero to the server */
    addEvent(event) {
        return this.httpClient.post(this.baseEventUrl, event, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((newEvent) => this.log(`added event w/ id=${newEvent.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('addEvent')));
    }
    /** DELETE: delete the hero from the server */
    deleteEvent(event) {
        const id = typeof event === 'number' ? event : event.id;
        const url = `${this.baseEventUrl}/${id}/`;
        return this.httpClient.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.log(`deleted event id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('deleteEvent')));
    }
    updateEvent(id, title, partner, start, color, status, insurance, resourceId, addtitle1, addtitle2, addtitle3, comment, persona, kollege) {
        const body = JSON.stringify({ title, partner, start, color, status, insurance, resourceId, addtitle1, addtitle2,
            addtitle3, comment, persona, kollege });
        console.log('body api_serv:', body);
        console.log(typeof (start), typeof (Date), typeof (new Date()));
        return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, { headers: this.getAuthHeaders() });
    }
    putEvent(id, title, start, resourceId, persona, kollege) {
        const body = JSON.stringify({ title, start, resourceId, persona, kollege });
        console.log('body api_serv:', body);
        return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, { headers: this.getAuthHeaders() });
    }
    putEvent_(id, title, start, persona, kollege) {
        const body = JSON.stringify({ title, start, persona, kollege });
        // console.log('body api_serv___:', body);
        return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, { headers: this.getAuthHeaders() });
    }
    putEventByAssistant(id, title, persona, kollege, status) {
        const body = JSON.stringify({ title, persona, kollege, status });
        // console.log('body api_serv___:', body);
        return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, { headers: this.getAuthHeaders() });
    }
    putEventDel(id, title, start, color, status, persona, kollege) {
        const body = JSON.stringify({ id, title, start, color, status, persona, kollege });
        // console.log('body api_serv:', body);
        return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, { headers: this.getAuthHeaders() });
    }
    putEventConf(id, title, partner, start, color, status, addtitle2, persona, kollege, genericChar1, genericNumber1) {
        const body = JSON.stringify({ id, title, partner, start, color, status, addtitle2, persona, kollege, genericChar1, genericNumber1 });
        // console.log('body api_serv:', body);
        return this.httpClient.put(`${this.baseEventUrl}/${id}/`, body, { headers: this.getAuthHeaders() });
    }
    createPersona(name, mobile, whatsapp, telephone, email, street, complement, postalcode, dob, registerdate, comment) {
        const body = JSON.stringify({ name, mobile, whatsapp, telephone, email, street,
            complement, postalcode, dob, registerdate, comment });
        return this.httpClient.post(`${this.baseUrl}api/persona/personas/`, body, { headers: this.getAuthHeaders() });
    }
    getPersonas() {
        return this.httpClient.get(`${this.baseUrl}api/persona/personas/`, { headers: this.getAuthHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.log('fetched personas')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getPersonas', [])));
    }
    getPersona(id) {
        const url = `${this.baseUrl}api/persona/personas/${id}/`;
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.log(`fetched persona id=${id}`)), 
        // this does not solve the incomplete form problem on personaFormDetail
        // delay(5000),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError(`getPersona id=${id}`)));
    }
    updatePersona(id, name, mobile, whatsapp, telephone, email, street, complement, postalcode, dob, registerdate, comment) {
        const body = JSON.stringify({ name, mobile, whatsapp, telephone, email, street,
            complement, postalcode, dob, registerdate, comment });
        return this.httpClient.put(`${this.baseUrl}api/persona/personas/${id}/`, body, { headers: this.headers });
    }
    deletePersona(persona) {
        const id = typeof persona === 'number' ? persona : persona.id;
        const url = `${this.baseUrl}api/persona/personas/${id}/`;
        return this.httpClient.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.log(`deleted persona id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('deletePersona')));
    }
    createKollege(name, crm, email) {
        const body = JSON.stringify({ name, crm, email });
        return this.httpClient.post(`${this.baseUrl}api/persona/kollegen/`, body, { headers: this.getAuthHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('Bad request')));
    }
    /// To send email 31-8-20
    updateKollege(id, name, crm, email) {
        const body = JSON.stringify({ name, crm, email });
        return this.httpClient.put(`${this.baseUrl}api/persona/kollegen/${id}`, body, { headers: this.getAuthHeaders() });
    }
    getKollegen() {
        return this.httpClient.get(`${this.baseUrl}api/persona/kollegen/`, { headers: this.getAuthHeaders() });
    }
    deleteKollege(kollege) {
        const id = typeof kollege === 'number' ? kollege : kollege.id;
        const url = `${this.baseUrl}api/persona/kollegen/${id}/`;
        return this.httpClient.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.log(`deleted kollege id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('deleteKollege')));
    }
    createPartner(name, crm, email, mobile, whatsapp, telephone) {
        const body = JSON.stringify({ name, crm, email, mobile, whatsapp, telephone });
        // console.log(body);
        // console.log(this.headers);
        return this.httpClient.post(`${this.baseUrl}api/persona/partners/`, body, { headers: this.getAuthHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('Bad request')));
    }
    getPartners() {
        return this.httpClient.get(`${this.baseUrl}api/persona/partners/`, { headers: this.getAuthHeaders() });
    }
    // ######## API: EMAIL SERVICES ###########
    emailKollege(name) {
        // return this.httpClient.get(`${this.baseUrl}api/persona/email/`, {headers: this.getAuthHeaders()}).subscribe();
        const body = name; //JSON.stringify({name});
        alert("email sent!");
        return this.httpClient.post(`${this.baseUrl}api/persona/email/`, body, { headers: this.getAuthHeaders() });
    }
    emailFromSite(name, mobile, email, body) {
        // return this.httpClient.get(`${this.baseUrl}api/persona/email/`, {headers: this.getAuthHeaders()}).subscribe();
        const bodie = { 'name': name, 'mobile': mobile, 'email': email, 'body': body }; //JSON.stringify({name});
        //console.log('body', bodie);
        alert("email sent!");
        return this.httpClient.post(`${this.baseUrl}api/persona/emailserv/`, bodie, { headers: this.getAuthHeaders() });
    }
    // ######## API: SEARCH SERVICES ###########
    /* GET heroes whose name contains search term */
    searchEvents(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.httpClient.get(`${this.baseEventUrl}/?name=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(x => x.length ?
            this.log(`found events matching "${term}"`) :
            this.log(`no events matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('searchEvents', [])));
    }
    searchPersonas(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.httpClient.get(`${this.baseUrl}api/persona/personas?search=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(x => x.length ?
            this.log(`found personas matching "${term}"`) :
            this.log(`no personas matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('searchPersonas', [])));
    }
    searchPartners(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.httpClient.get(`${this.baseUrl}api/persona/partners?search=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(x => x.length ?
            this.log(`found partners matching "${term}"`) :
            this.log(`no partners matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('searchPartners', [])));
    }
    // ######## API: AUTH SERVICES ###########
    getUsers() {
        // this.messageService.add('ApiService: fetched events');
        // return of(events);
        return this.httpClient.get(this.baseUrl + `api/user/users`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.log('fetched users')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('getUsers', [])));
    }
    loginUser(authData) {
        this.loggedUser = authData.username;
        const body = JSON.stringify(authData);
        return this.httpClient.post(`${this.baseUrl}auth/`, body, { headers: this.headers });
    }
    registerUser(authData) {
        const body = JSON.stringify(authData);
        return this.httpClient.post(`${this.baseUrl}users/`, body, { headers: this.headers });
    }
    getAuthHeaders() {
        const token = this.cookieService.get('mr-token');
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
        });
    }
    /** PUT: update the hero on the server */
    // updateEvent(event: Event): Observable<any> {
    //   return this.httpClient.put(this.baseEventUrl, event, this.httpOptions).pipe(
    //     tap(_ => this.log(`updated event id=${event.id}`)),
    //     catchError(this.handleError<any>('updateEvent'))
    //   );
    // }
    // ######## HANDLE ERROR SERVICES ###########
    //   /**
    //  * Handle Http operation that failed.
    //  * Let the app continue.
    //  * @param operation - name of the operation that failed
    //  * @param result - optional value to return as the observable result
    //  */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            //console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            alert(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    }
    // deleteEvent(id: number) {
    //   return this.httpClient.delete(`${this.baseEventUrl}${id}/`, {headers: this.getAuthHeaders()})
    // }
    rateEvent(nome, rate, paciente, user, digestId) {
        /*OK if the full url (http...) is passed. Template literal uses backticks
        not single/double quotes. ${expression} syntax embed an expression in the
        literal. Post is not allowed by the API on /pacientes/id/*/
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        // console.log(digestId);
        const body = JSON.stringify({ nome: nome, staff: rate, paciente: paciente, user: user });
        return this.httpClient.put(`${this.baseEventUrl}${digestId}/`, body, { headers: this.getAuthHeaders() });
    }
    // TO IMPLEMENT THE URL SEARCHING THE API: TABLE ON MOVIE-LIST
    // ORIGINAL:
    //  eventInfo(productId) {  
    //          this.url = 'http://localhost:49661/api/Company/getProductCountryInformation?productId='+productId;  
    //          return this.http.get<any[]>(this.url);  
    //      }  
    eventInfo(event) {
        const id = typeof event === 'number' ? event : event.id;
        const url = `${this.baseEventUrl}/${id}`;
        // this.eventUrl = 'this.baseEventUrl/?id='+productId;
        return this.httpClient.get(url, { headers: this.getAuthHeaders() });
    }
    // ######## REPORT SERVICES ###########
    createEventReport(//id: number,
    // reportUUID: string,
    im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, drugs, anest, assistant, equipment, phar, esop, stom, duod, urease, biopsy, hystoResults, prep, quality, colo, conc1, conc2, conc3, conc4, conc5, conc6, complications, event) {
        const body = JSON.stringify({
            im1, im2, im3, im4, im5, im6, im7, im8, im9, im10,
            drugs, anest, assistant, equipment,
            phar, esop, stom, duod,
            urease, biopsy, hystoResults,
            prep, quality,
            colo, conc1, conc2, conc3, conc4, conc5, conc6, complications, event
        });
        console.log('into create service', body);
        // console.log(this.headers);
        return this.httpClient.post(`${this.baseUrl}api/persona/eventreports/`, body, { headers: this.getAuthHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('Bad request')));
    }
    updateEventReport(id, event, 
    // reportUUID: string,
    im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, drugs, anest, assistant, equipment, phar, esop, stom, duod, urease, biopsy, hystoResults, prep, quality, colo, conc1, conc2, conc3, conc4, conc5, conc6, complications) {
        const body = JSON.stringify({ id, event,
            im1, im2, im3, im4, im5, im6, im7, im8, im9, im10,
            drugs, anest, assistant, equipment,
            phar, esop, stom, duod,
            urease, biopsy, hystoResults,
            prep, quality,
            colo, conc1, conc2, conc3, conc4, conc5, conc6, complications });
        console.log('into create service', body);
        // console.log(this.headers);
        return this.httpClient.put(`${this.baseUrl}api/persona/eventreports/${id}`, body, { headers: this.getAuthHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('Bad request')));
    }
    getEventReports() {
        return this.httpClient.get(`${this.baseUrl}api/persona/eventreports/`, { headers: this.getAuthHeaders() });
    }
    /*  getEventReport(id: number) {
    return this.httpClient.get<EventReport[]>(`${this.baseUrl}api/persona/eventreport/${id}`, {headers: this.getAuthHeaders()});
    } */
    getEventReport(id) {
        // this.messageService.add('ApiService: fetched events');
        // return of(events);
        const url = `${this.baseUrl}api/persona/eventreports/${id}/`;
        return this.httpClient.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.log('fetched reports')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError(`getReport id=${id}`)));
    }
    // ######## CAPTURE SERVICES ###########
    read_camera_capture(id, index_camera) {
        //index_camera = 0;
        //const body = JSON.stringify({id});
        console.log('index_camera', index_camera, typeof (index_camera));
        return this.httpClient.put(`${this.baseEventUrl}/${id}/`, index_camera, { headers: this.getAuthHeaders() });
    }
    // ####################### https://efficientcoder.net/angular-tutorial-example-upload-files-with-formdata-httpclient-rxjs-and-material-progressbar/
    upload(formData) {
        return this.httpClient.post(`${this.baseUrl}api/persona/eventreports/`, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "in7A":
/*!**************************************************************************!*\
  !*** ./src/app/mainforms/event-form-modal/event-form-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: EventFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormModalComponent", function() { return EventFormModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _persona_form_modal_persona_form_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../persona-form-modal/persona-form-modal.component */ "cdK/");
/* harmony import */ var _kollege_form_modal_kollege_form_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kollege-form-modal/kollege-form-modal.component */ "eVYu");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/api.service */ "hD8V");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






















function EventFormModalComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", per_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 4, per_r7.name, 0, 5), "..", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, per_r7.name, 8), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", per_r7.dob, " ");
} }
function EventFormModalComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", kol_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, kol_r8.name), " ");
} }
function EventFormModalComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partner_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", partner_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 4, partner_r9.name, 0, 5), "..", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, partner_r9.name, 8), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", partner_r9.crm, " ");
} }
const _c0 = function () { return { "green": "green" }; };
/**
 * @title Dialog
 */
class EventFormModalComponent {
    constructor(data, apiService, dialog) {
        this.data = data;
        this.apiService = apiService;
        this.dialog = dialog;
        //public dialogRef: MatDialogRef<EventFormModalComponent>
        // To get data from the calendar parent by input binding to set the form with cal data
        //@Input() calStart: Date;
        this.calTi = '';
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"];
        this.exData = ['EDA', 'Colonoscopia', 'pHmetria', 'Manometria Esofágica',
            'Manometria Anorretal', 'CPRE', 'EUS com punção', 'EUS sem punção'];
        this.kollegen = [];
        this.partners = [];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.insuranceListRaw = ['Unimed', 'Hapvida', 'Issec', 'IPM', 'Cassi', 'Bradesco', 'Camed',
            'Geap', 'Petrobrás Asfor', 'Petrobrás Disfor', 'Amil', 'Outro'];
        this.extraListRaw = ['Polipectomia', 'Hemostasia', 'Ligadura', 'Dilatação', 'Injeção', 'Mucosectomia',
            'Retirada', 'Sonda', 'Esclerose', 'GTT', 'Estenostomia', 'Diverticulotomia',
            'Papilotomia', 'Prótese', 'Tatuagem'];
        this.insuranceList = this.insuranceListRaw.sort();
        this.extraList = this.extraListRaw.sort();
        //form: FormGroup;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            partner: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            insurance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            resourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addtitle1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addtitle2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addtitle3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            persona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kollege: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        console.log('calTiTest', this.calTiTest);
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create([{ provide: String, useValue: this.calTi }]);
        this.getKollegen();
        // From search component
        // this.events$ = this.searchTerms.pipe(
        this.personas$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((term) => this.apiService.searchPersonas(term)));
        console.log('calTi onInit: ', this.calTi); //not defined yet
        //this.patchForm();
        this.getPartners();
        this.partners$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((term) => this.apiService.searchPartners(term)));
    }
    ngOnChanges() {
        console.log('calTi defined??: ', this.calTi); //not defined yet
        setTimeout(() => this.patchForm(), 1000);
        /*  for (const propName in changes) {
            const chng = changes[propName];
            const cur  = JSON.stringify(chng.currentValue);
            const prev = JSON.stringify(chng.previousValue);
            //alert( cur);
            this.form.value.title = this.calTi;
            //alert(this.form.value.title)
            //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
          }*/
    }
    displayFn(per) {
        return per && per.name ? per.name : '';
    }
    getKollegen() {
        this.apiService.getKollegen()
            .subscribe(data => this.kollegen = data);
    }
    patchForm() {
        console.log('calTi on patchForm: ', this.calTi); //undefined!
        this.form.patchValue({ title: this.calTi, start: this.calSt, time: this.calTime, resourceId: this.calResource });
    }
    save() {
        let title = this.form.value.title;
        let startVal = new Date(this.form.value.start);
        console.log('form.value: ', this.form.value.title, this.form.value.start, title, startVal);
        /*
           this.dialogRef.close(this.form.value);
           this.apiService.createEvent(
           this.form.value.title.toLowerCase(),
           startVal,
           this.form.value.color,
           this.form.value.status,
           this.form.value.insurance,
           this.form.value.resourceId,
           this.form.value.addtitle1,
           this.form.value.addtitle2,
           this.form.value.addtitle3,
           this.form.value.comment,
           this.form.value.persona,
           this.form.value.kollege).subscribe(
             // Above is sufficient to write on the db. Below shall refresh yhe list
             // (result: Event) => this.eventCreated.emit(result),
             // error => console.log(error)
             );
          */
        console.log('agein start: ', this.form.value.start);
        // // this.router.navigate(['event-form'],);
        // console.log('dob: ', this.form.value.dob);
        //Create an instance of FormControl (Emit does it on another component) and fill and desired data
        //Create FormControl object here and patch values
        //Create the obj and don't have undefined variables
        //let arg: FormControl;
        //this.formCtrl.emit(arg) //Would require to have a directive on this component (html: (formCtrl))
        // Commented
        if (this.calTi) {
            //this.form.patchValue({title: this.calTi, start: this.calSt, time: this.calTime, resourceId: this.calResource});
        }
        let persona_name = this.form.value.persona;
        // console.log(persona_name);
        let persona_id = persona_name.id;
        // console.log(persona_id);
        let kollege_name = this.form.value.kollege;
        // console.log(kollege_name);
        let kollege_id = kollege_name.id;
        // console.log(kollege_id);
        // Ang-Mat Datetime is not supported by firefox/safari
        // Cocatenate the Datepicker and the Timepicker values to set this.eventForm
        let datePlusTime = new Date((this.form.value.start) + 'T' + (this.form.value.time));
        if (this.form.value.resourceId == '') {
            this.form.value.resourceId = 'x';
        }
        ;
        //console.log('date+time: ', datePlusTime, this.form.value.start, this.form.value.time);
        //console.log('Start abd time: ', this.form.value.title, this.form.value.start, this.form.value.time, datePlusTime.valueOf());  
        try {
            if (persona_id == null || undefined) {
                throw alert('Por favor, informe o cliente!');
            }
            ;
            if (kollege_id == null || undefined) {
                throw alert('Por favor, informe o médico!');
            }
            ;
            if (this.form.value.title == '') {
                throw alert('Por favor, informe o procedimento!');
            }
            ;
            if (this.form.value.start == '') {
                throw alert('Por favor, informe a data e hora!');
            }
            ;
            if (this.form.value.insurance == '') {
                throw alert('Por favor, informe o convênio!');
            }
            ;
            if (this.id) {
                // TOUCHES THE DB
                this.apiService.updateEvent(this.id, 
                // the order here. Must be the same as the bd
                this.form.value.title, this.form.value.partner, 
                //this.eventForm.value.start,
                //this.form.value.start,
                datePlusTime, this.form.value.color, this.form.value.status, this.form.value.insurance, this.form.value.resourceId, this.form.value.addtitle1, this.form.value.addtitle2, this.form.value.addtitle3, this.form.value.comment, persona_id, kollege_id).subscribe((result) => {
                    // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
                    //   this.eventUpdated.emit(result);
                });
                location.reload();
                // this.router.navigate(['main'],);
            }
            else {
                //let datePlusTime1: Date = new Date((this.calSt)+'T'+(this.calTime));
                console.log('date+time1: ', this.calSt);
                let startVal = new Date(this.form.value.start);
                console.log('startVal:', startVal);
                // TOUCHES THE DB
                this.apiService.createEvent(this.form.value.title, this.form.value.partner, 
                // this.eventForm.value.start,
                datePlusTime, this.form.value.color, this.form.value.status, this.form.value.insurance, this.form.value.resourceId, this.form.value.addtitle1, this.form.value.addtitle2, this.form.value.addtitle3, this.form.value.comment, persona_id, kollege_id).subscribe(
                // Above is sufficient to write on the db. Below shall refresh yhe list
                // (result: Event) => this.eventCreated.emit(result),
                error => console.log(error));
                location.reload();
                // this.router.navigate(['main'],);
            }
        }
        catch (err) {
            err;
        }
    }
    close() {
        //this.dialogRef.close();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            partner: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            insurance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            resourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addtitle1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addtitle2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addtitle3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            persona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kollege: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    //Temp
    //saveForm() {}
    createPersona() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        // dialogConfig.maxHeight = '400px';
        // dialogConfig.width = '600px';
        // dialogConfig.data = {  // TO PASS DATA to the dialog
        //   id, name, mobile, whatsapp, telephone, email, street,
        //   complement, postalcode, dob, registerdate, comment
        // };
        const dialogRef = this.dialog.open(_persona_form_modal_persona_form_modal_component__WEBPACK_IMPORTED_MODULE_6__["PersonaFormModalComponent"], // TO PASS DATA to the dialog: { data: { id: 1 }});
        dialogConfig);
        dialogRef.afterClosed().subscribe(
        // This returns a plain object { k: v, ...}
        val => console.log("Dialog output:", val)
        // This returns an object Object
        // val => {console.log(`Dialog output: , ${val}`)
        // });
        );
    }
    createKollege() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        // dialogConfig.maxHeight = '400px';
        // dialogConfig.width = '600px';
        const dialogRef = this.dialog.open(_kollege_form_modal_kollege_form_modal_component__WEBPACK_IMPORTED_MODULE_7__["KollegeFormModalComponent"], // TO PASS DATA to the dialog: { data: { id: 1 }});
        dialogConfig);
        dialogRef.afterClosed().subscribe(
        // This returns a plain object { k: v, ...}
        val => console.log("Dialog output:", val)
        // This returns an object Object
        // val => {console.log(`Dialog output: , ${val}`)
        // });
        );
    }
    createPartner() {
    }
    getPartners() {
        this.apiService.getPartners()
            .subscribe(data => this.partners = data);
    }
}
EventFormModalComponent.ɵfac = function EventFormModalComponent_Factory(t) { return new (t || EventFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
EventFormModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventFormModalComponent, selectors: [["app-event-form-modal"]], inputs: { calTi: "calTi", calTiTest: "calTiTest", calResource: "calResource", calSt: "calSt", calTime: "calTime" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // ##### provide below may be a mistake!! ####
            // ##### If left on, no data will be passed ####
            // ##### But if off, the calendar doesnt show up!!! ####
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], useValue: {} },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 67, vars: 21, consts: [[1, "demo-app-main"], ["mat-dialog-title", ""], [3, "formGroup"], [1, "course-actions"], [3, "icon", "ngClass", "click"], ["type", "text", "placeholder", "Selecione um cliente", "aria-label", "Number", "matInput", "", "formControlName", "persona", "required", "", 3, "matAutocomplete", "input"], ["searchBox", ""], [3, "displayWith"], ["autos", "matAutocomplete"], ["id", "pers", 3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "M\u00E9dico", "formControlName", "kollege", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Selecione um parceiro", "aria-label", "Number", "matInput", "", "formControlName", "partner", "required", "", 3, "matAutocomplete", "input"], ["id", "partners", 3, "value", 4, "ngFor", "ngForOf"], ["floatLabel", "auto", "appearance", "fill", "color", "accent"], ["matSuffix", ""], ["matInput", "", "placeholder", "Exame", "formControlName", "title"], ["align", "end"], ["matInput", "", "type", "date", "placeholder", "Data", "formControlName", "start"], ["matInput", "", "type", "time", "placeholder", "Hora", "formControlName", "time"], ["matInput", "", "placeholder", "Color", "formControlName", "color"], ["matInput", "", "placeholder", "Status", "formControlName", "status"], ["matInput", "", "placeholder", "Conv\u00EAnio", "formControlName", "insurance"], ["matInput", "", "placeholder", "Sala", "formControlName", "resourceId"], ["matInput", "", "placeholder", "Extra", "formControlName", "addtitle1"], ["matInput", "", "placeholder", "Extra", "formControlName", "addtitle2"], ["matInput", "", "placeholder", "Extra", "formControlName", "addtitle3"], ["matInput", "", "placeholder", "Coment\u00E1rios", "formControlName", "comment"], ["mat-flat-button", "", "color", "warn", 1, "mat-raised-button", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "mat-raised-button", "mat-primary", 3, "click"], ["id", "pers", 3, "value"], [3, "value"], ["id", "partners", 3, "value"]], template: function EventFormModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Novo evento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormModalComponent_Template_fa_icon_click_5_listener() { return ctx.createPersona(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EventFormModalComponent_Template_input_input_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EventFormModalComponent_mat_option_13_Template, 5, 11, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormModalComponent_Template_fa_icon_click_16_listener() { return ctx.createKollege(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EventFormModalComponent_mat_option_21_Template, 3, 4, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormModalComponent_Template_fa_icon_click_23_listener() { return ctx.createPartner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 12, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EventFormModalComponent_Template_input_input_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-autocomplete", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EventFormModalComponent_mat_option_31_Template, 5, 11, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Exame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-hint", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormModalComponent_Template_button_click_62_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Limpar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormModalComponent_Template_button_click_65_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, ctx.personas$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kollegen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 16, ctx.partners$));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatHint"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n    display: block;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 100px;\n    resize: vertical;\n}\n\n.demo-app-main[_ngcontent-%COMP%] {\n    \n    padding: 3em;\n    column-count: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWZvcm0tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6ImV2ZW50LWZvcm0tbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5kZW1vLWFwcC1tYWluIHtcbiAgICAvKiBmbGV4LWdyb3c6IDE7ICovXG4gICAgcGFkZGluZzogM2VtO1xuICAgIGNvbHVtbi1jb3VudDogMjtcbn0iXX0= */"] });


/***/ }),

/***/ "lWNe":
/*!*************************************************!*\
  !*** ./src/app/home/themes/themes.component.ts ***!
  \*************************************************/
/*! exports provided: ThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesComponent", function() { return ThemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");



class ThemesComponent {
    constructor(apiService, cookieService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        const mrToken = this.cookieService.get('mr-token');
        if (!mrToken) {
            document.getElementById('photoCap').hidden = true;
        }
    }
    // Used to toggle the menu on smaller screens when clicking on the menu button
    openNav() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        }
        else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    // Script for side navigation
    w3_open() {
        var x = document.getElementById("mySidebar");
        x.style.width = "300px";
        x.style.paddingTop = "10%";
        x.style.display = "block";
    }
    // Close side navigation
    w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }
}
ThemesComponent.ɵfac = function ThemesComponent_Factory(t) { return new (t || ThemesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
ThemesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThemesComponent, selectors: [["app-themes"]], decls: 307, vars: 0, consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://www.w3schools.com/lib/w3-theme-black.css"], ["id", "myPage"], ["id", "fb-root"], ["id", "mySidebar", 1, "w3-sidebar", "w3-bar-block", "w3-white", "w3-card", "w3-animate-left", "w3-xxlarge", 2, "display", "none", "z-index", "2"], ["href", "javascript:void(0)", "onclick", "w3_close()", 1, "w3-bar-item", "w3-button", "w3-display-topright", "w3-text-teal"], [1, "fa", "fa-remove"], ["href", "#", 1, "w3-bar-item", "w3-button"], [1, "w3-top", 2, "padding-top", "20px", "padding-right", "80px"], [1, "w3-bar", "w3-theme-d2", "w3-left-align"], ["href", "javascript:void(0);", 1, "w3-bar-item", "w3-button", "w3-hide-medium", "w3-hide-large", "w3-right", "w3-hover-white", "w3-theme-d2", 3, "click"], [1, "fa", "fa-bars"], ["href", "#", 1, "w3-bar-item", "w3-button", "w3-teal"], [1, "fa", "fa-home", "w3-margin-right", 2, "padding-left", "10px"], ["href", "team", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "products", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["onclick", "document.getElementById('insuranceModal').style.display='block'"], [1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], ["href", "#contact", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-hover-white"], [1, "w3-dropdown-hover", "w3-hide-small"], ["title", "Notifications", 1, "w3-button"], [1, "fa", "fa-caret-down"], [1, "w3-dropdown-content", "w3-card-4", "w3-bar-block"], ["id", "photoCap"], ["href", "capture", 1, "w3-bar-item", "w3-button"], ["href", "themes", 1, "w3-bar-item", "w3-button"], ["href", "auth", 1, "w3-bar-item", "w3-button"], ["href", "https://www.google.com.br/search?q=digest%2Bcom.br", "title", "Search", "target", "_blank", 1, "w3-bar-item", "w3-button", "w3-hide-small", "w3-right", "w3-hover-teal"], [1, "fa", "fa-search", 2, "padding-right", "40px"], ["id", "navDemo", 1, "w3-bar-block", "w3-theme-d2", "w3-hide", "w3-hide-large", "w3-hide-medium"], ["href", "team", 1, "w3-bar-item", "w3-button"], ["href", "products", 1, "w3-bar-item", "w3-button"], ["href", "insurance", 1, "w3-bar-item", "w3-button"], ["href", "#contact", 1, "w3-bar-item", "w3-button"], [1, "w3-display-container", "w3-animate-opacity"], ["src", "/assets/images/gcanyon1.jpg", "alt", "Digest", 2, "width", "100%", "min-height", "250px", "max-height", "600px"], [1, "w3-container", "w3-display-topright", "w3-display-bottomleft", "w3-margin-bottom"], [2, "font-size", "4vw", "padding-top", "40px"], [2, "font-size", "2vw"], ["data-href", "http://www.digest.com.br", "data-width", "", "data-layout", "button", "data-action", "like", "data-size", "small", "data-share", "false", 1, "fb-like"], [1, "w3-container", "w3-display-bottomright", "w3-margin-bottom"], ["title", "Contato", 1, "w3-button", "w3-large", "w3-theme", "w3-hover-teal"], ["href", "#contact"], ["id", "insuranceModal", "onclick", "document.getElementById('insuranceModal').style.display='none'", 1, "w3-modal"], [1, "w3-modal-content", "w3-card-4", "w3-animate-top"], [1, "w3-container", "w3-teal", "w3-display-container"], ["onclick", "document.getElementById('insuranceModal').style.display='none'", 1, "w3-button", "w3-teal", "w3-display-topright"], [1, "fa", "fa-smile-o"], [1, "wf-td", "hgroup"], [1, "h2-size"], [1, "wf-td"], [1, "assistive-text"], ["id", "main", 1, "sidebar-none"], [1, "main-gradient"], [1, "wf-wrap"], [1, "wf-container-main"], ["id", "content", "role", "main", 1, "content"], [1, "vc_row", "wpb_row", "vc_row-fluid", "dt-default", 2, "margin-top", "0px", "margin-bottom", "0px"], [1, "wpb_column", "vc_column_container", "vc_col-sm-4"], [1, "vc_column-inner"], [1, "wpb_wrapper"], [1, "standard-arrow", "list-divider", "bullet-top"], [1, "w3-container", "w3-teal"], [1, "main"], [1, "row"], [1, "fakeimg"], [2, "height", "200px"], ["src", "/assets/images/LosAngeles.jpg", 2, "max-width", "100%"], [2, "font-size", "1.3vw", "padding", "10px"], ["src", "/assets/images/manometria.jpg", 2, "max-width", "100%"], [1, "container"], ["id", "txt3"], ["id", "tema"], ["target", "_blank", "href", "cpre.pdf"], [1, "myBox"], [2, "color", "#DDE0E3"], [1, "asideContatos"], ["id", "contatos"], ["href", "mailto:contato@digest.com.br"], [1, "w3-container", "w3-padding-32", "w3-theme-d1", "w3-center"], ["href", "https://www.facebook.com/sharer/sharer.php?u=http://www.digest.com.br/static/catalog/z-ph.png&&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Facebook", "title", "Facebook", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-facebook"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-teal"], [1, "fa", "fa-twitter"], ["href", "https://www.facebook.com/digestoficial", "target", "_blank", "title", "Facebook", 1, "w3-button", "w3-large", "w3-blue"], ["href", "https://twitter.com/intent/tweet?url=http://www.digest.com.br/&text=Estou+na+Digest:+Cl\u00EDnica de Gastroenterologia e Endoscopia &hashtags=digestoficial", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Share on Twitter", 1, "w3-button", "w3-large", "w3-cyan"], ["href", "https://www.instagram.com/digestoficial", "target", "_blank", "rel", "noopener", "title", "Instagram", 1, "w3-button", "w3-large", "w3-pink"], [1, "fa", "fa-instagram"], ["href", "http://www.digest.com.br", "target", "_blank"], [1, "footer"], ["id", "mailto", "href", "mailto:contato@digest.com.br"]], template: function ThemesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Link 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Link 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemesComponent_Template_a_click_27_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Saiba Mais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Foto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Videos Educativos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Temas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Digest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\"Diagn\u00F3stico, tratamento & preven\u00E7\u00E3o\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Deseja atendimento?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "header", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Ol\u00E1! Seja bem vindo..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Espero que encontre o que precisa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h1", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Conv\u00EAnios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Clique em qualquer lugar para fechar esta janela ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "AMIL ASSISTENCIA MEDICA INTERNACIONAL LTDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "ASSEFAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "BANCO CENTRAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "BASE AEREA DE FORTALEZA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "BRADESCO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "BRADESCO PROCTOLOGIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "CAFAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "CAIXA ASSIST EMPREG EMPR BRASIL PESQ AGROP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "POSTAL SAUDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "CAMED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "CAPSESP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "CASSI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "EMBRATEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "FACHESF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "FAMED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "FUNCEF (SAUDE CAIXA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "FUSEX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "FUSMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "GEAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "HOSPITAL INFANTIL ALBERT SABIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "IPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "ISSEC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "ISSEC INTERIOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "JESU\u00CDTAS DO BRASIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "LIV SA\u00DADE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "LIFE EMPRESARIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "MEDISERVICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "MERCEEIROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "NORCLINICAS (INTERMEDICA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "NOTRE DAME SEGURADORA SA (INTERMEDICA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "PAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "PAS INTERIOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "PETROBRAS PETR\u00D3LEO AMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "PETROBRAS DISFOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "PLAN ASSISTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "PROASA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "REDE MAIS SA\u00DADE E VIDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "SUL AMERICA SERVICOS DE SAUDE SA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "UNIMED (TODOS PLANOS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "VAI BEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "VITALLIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "footer", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Modal footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Temas de Interesse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Endoscopia Digestiva Alta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Esofagite de refluxo (Classifica\u00E7\u00E3o de Los Angeles)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Manometria Alta Resolu\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Manometria esof\u00E1gica de alta resolu\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Manometria Alta Resolu\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Manometria esof\u00E1gica de alta resolu\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Manometria Alta Resolu\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Manometria esof\u00E1gica de alta resolu\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "article", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "h2", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Tema da semana: CPRE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Texto completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " A CPRE \u00E9 um procedimento cir\u00FArgico por endoscopia. Logo distal ao est\u00F4mago, o col\u00E9doco (canal da bile) desemboca no intestino delgado atrav\u00E9s de uma v\u00E1lvula chamada papila (esf\u00EDncter de Oddi). A bile produzida no f\u00EDgado e acumulada na ves\u00EDcula vai para o intestino atrav\u00E9s do col\u00E9doco. Ocorre que pedras (c\u00E1lculos biliares) podem migrar da ves\u00EDcula ou se formarem diretamente no col\u00E9doco (coledocolit\u00EDase). Neste caso, o paciente tem dor abdominal e pode ficar com os olhos e a pele amarelados (icter\u00EDcia), assim como a urina. Pode ocorrer tamb\u00E9m febre e calafrios (colangite) ou inflama\u00E7\u00E3o do p\u00E2ncreas (pancreatite). Esta situa\u00E7\u00E3o exige tratamento cir\u00FArgico e a via menos invasiva \u00E9 a endosc\u00F3pica. Pela CPRE, cortamos a papila (papilotomia), passamos acess\u00F3rios para o interior do col\u00E9doco (cesta ou bal\u00E3o), e retiramos os c\u00E1lculos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "hr", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " Em outras situa\u00E7\u00F5es, ocorre obstru\u00E7\u00E3o do col\u00E9doco por tumores, como o do p\u00E2ncreas. Nestes casos, inicialmente n\u00E3o h\u00E1 dor e sim uma icter\u00EDcia progressiva. Pela CPRE, pode-se desobstruir temporariamente o col\u00E9doco com pr\u00F3teses apropriadas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "hr", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " Os exames de sangue importantes para o diagn\u00F3stico das obstru\u00E7\u00F5es do col\u00E9doco s\u00E3o principalmente as chamadas enzimas hep\u00E1ticas (ALT, AST, gamaGT, fosfatase alcalina) e as bilirrubinas. O ultrassom abdominal frequentemente n\u00E3o mostra c\u00E1lculos nem tumores obstruindo o col\u00E9doco, mas mostra uma dilata\u00E7\u00E3o deste, indicando que h\u00E1 de fato uma obstru\u00E7\u00E3o. A colangiorresson\u00E2ncia magn\u00E9tica pode mostrar c\u00E1lculos em torno de 5mm ou maiores. E a ecoendoscopia pode mostrar c\u00E1lculos ou tumores menores ainda. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "aside", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h2", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Contatos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Telefones (85):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "3252-5469");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "3224-1547");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "WhatsApp (85):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "99628-8800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Envie um e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "footer", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Compartilhe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Veja tamb\u00E9m:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Criado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "digest.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Rua Ant\u00F4nio Augusto 1270, 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "andar, Fortaleza-CE, +55 85 3252-5469");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Envie um e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial;\n  margin: 0;\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  background: #858686;\n  color: white;\n  font: 5em/3.9 Arial, Helvetica, sans-serif;\n  background-image: url(\"/assets/images/gcanyon1.jpg\");\n  background-repeat: no-repeat;\n}\n\n\n\n.row[_ngcontent-%COMP%] {  \n  display: flex;\n  \n  align-items:center;\n  justify-content:center;\n}\n\n\n\n\n\n.side[_ngcontent-%COMP%] {\n  flex: 25%;\n  background-color: #f1f1f1;\n  padding: 20px;\n}\n\n\n\n.main[_ngcontent-%COMP%] {\n  flex: 75%;\n  background-color: #b1b1c1;\n  padding: 20px;\n}\n\n.sideright[_ngcontent-%COMP%] {\n  flex: 25%;\n  background-color: #f1f1f1;\n  padding: 20px;\n}\n\n\n\n.fakeimg[_ngcontent-%COMP%] {\n  background-color: rgb(119, 142, 116);\n  width: 100%;\n  padding: 5px;\n}\n\n\n\n.footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n}\n\n\n\n@media screen and (max-width: 800px) {\n  .row[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%] {   \n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBDQUEwQyxDQUFDLHlCQUF5QjtFQUNwRSxvREFBb0Q7RUFDcEQsNEJBQTRCO0FBQzlCOztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRSxhQUFhOztFQUViLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUEsNERBQTREOztBQUM1RCx3QkFBd0I7O0FBQ3hCO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUEsc0NBQXNDOztBQUN0QztFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQSwrSUFBK0k7O0FBQy9JO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJ0aGVtZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFN0eWxlIHRoZSBib2R5ICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEhlYWRlci9sb2dvIFRpdGxlICovXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjODU4Njg2O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IDVlbS8zLjkgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsvKjMuOSBhZGp1c3RzIHRoZSBoZWlnaHQqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9nY2FueW9uMS5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi8qIENvbHVtbiBjb250YWluZXIgKi9cbi5yb3cgeyAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG5cbi8qIENyZWF0ZSB0d28gdW5lcXVhbCBjb2x1bW5zIHRoYXQgc2l0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi8qIFNpZGViYXIvbGVmdCBjb2x1bW4gKi9cbi5zaWRlIHtcbiAgZmxleDogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBNYWluIGNvbHVtbiAqL1xuLm1haW4ge1xuICBmbGV4OiA3NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWIxYzE7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zaWRlcmlnaHQge1xuICBmbGV4OiAyNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIEZha2UgaW1hZ2UsIGp1c3QgZm9yIHRoaXMgZXhhbXBsZSAqL1xuLmZha2VpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE5LCAxNDIsIDExNik7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qIEZvb3RlciAqL1xuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDcwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAucm93LCAubmF2YmFyIHsgICBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */", ""] });


/***/ }),

/***/ "lqzx":
/*!***********************************************!*\
  !*** ./src/app/assistant/assistant.module.ts ***!
  \***********************************************/
/*! exports provided: AssistantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantModule", function() { return AssistantModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _assistant_assistant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistant/assistant.component */ "YubJ");
/* harmony import */ var _assistant_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assistant-routing.module */ "5Jv5");
/* harmony import */ var _shared_angmat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/angmat.module */ "OIqw");
/* harmony import */ var _shared_angutils_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/angutils.module */ "I2XR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AssistantModule {
}
AssistantModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AssistantModule });
AssistantModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AssistantModule_Factory(t) { return new (t || AssistantModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _assistant_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssistantRoutingModule"],
            _shared_angutils_module__WEBPACK_IMPORTED_MODULE_4__["AngutilsModule"],
            _shared_angmat_module__WEBPACK_IMPORTED_MODULE_3__["AngmatModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AssistantModule, { declarations: [_assistant_assistant_component__WEBPACK_IMPORTED_MODULE_1__["AssistantComponent"],
        _assistant_assistant_component__WEBPACK_IMPORTED_MODULE_1__["AssistantStatusDialogComponent"],
        _assistant_assistant_component__WEBPACK_IMPORTED_MODULE_1__["AssistantExtraDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _assistant_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssistantRoutingModule"],
        _shared_angutils_module__WEBPACK_IMPORTED_MODULE_4__["AngutilsModule"],
        _shared_angmat_module__WEBPACK_IMPORTED_MODULE_3__["AngmatModule"]] }); })();


/***/ }),

/***/ "mt6o":
/*!****************************************************************************!*\
  !*** ./src/app/mainforms/event-form-detail/event-form-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: EventFormDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormDetailComponent", function() { return EventFormDetailComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "hD8V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function EventFormDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r2.id);
} }
function EventFormDetailComponent_form_6_select_52_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r10 = ctx.$implicit;
    const ev_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", per_r10.id !== ev_r8.persona)("ngValue", per_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, per_r10.name), " ");
} }
function EventFormDetailComponent_form_6_select_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Manter o m\u00E9dico");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EventFormDetailComponent_form_6_select_52_option_3_Template, 3, 5, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r4.id !== ev_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.personas);
} }
function EventFormDetailComponent_form_6_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EventFormDetailComponent_form_6_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EventFormDetailComponent_form_6_div_54_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.persona.errors.required);
} }
function EventFormDetailComponent_form_6_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EventFormDetailComponent_form_6_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EventFormDetailComponent_form_6_div_62_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.kollege.errors.required);
} }
function EventFormDetailComponent_form_6_span_66_span_1_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](per_r17.name);
} }
function EventFormDetailComponent_form_6_span_66_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EventFormDetailComponent_form_6_span_66_span_1_span_1_span_1_Template, 3, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r17 = ctx.$implicit;
    const ev_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", per_r17.id == ev_r14.persona);
} }
function EventFormDetailComponent_form_6_span_66_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EventFormDetailComponent_form_6_span_66_span_1_span_1_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r15.personas);
} }
function EventFormDetailComponent_form_6_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EventFormDetailComponent_form_6_span_66_span_1_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r14 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.id == ev_r14.id);
} }
const _c0 = function () { return { "green": "green" }; };
function EventFormDetailComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EventFormDetailComponent_form_6_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.saveForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Exame:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Full name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-hint", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Agendado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Confirmado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Aguardando");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Em Atendimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Finalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Cancelado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EventFormDetailComponent_form_6_Template_fa_icon_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.newPersona(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Paciente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, EventFormDetailComponent_form_6_select_52_Template, 4, 3, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, EventFormDetailComponent_form_6_div_54_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EventFormDetailComponent_form_6_Template_fa_icon_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.newKollege(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\u00A0\u00A0M\u00E9dico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, EventFormDetailComponent_form_6_div_62_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EventFormDetailComponent_form_6_Template_fa_icon_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.newPersona(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "\u00A0\u00A0Paciente: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, EventFormDetailComponent_form_6_span_66_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.eventFormDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("Marcado para: ", ctx_r1.day, "/", ctx_r1.month, "/", ctx_r1.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r1.faPlus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.persona.invalid && (ctx_r1.persona.dirty || ctx_r1.persona.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r1.faPlus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.kollege.invalid && (ctx_r1.kollege.dirty || ctx_r1.kollege.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r1.faPlus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.events);
} }
class EventFormDetailComponent {
    //   ngAfterViewChecked(): void {
    //   alert('7. after view init checked');
    //   }
    //   ngOnDestroy(): void {
    //   alert('8. on destroy called');
    //   }
    // ngAfterContentInit(): void {
    //   alert("4. after content init called");
    //   }
    // ngDoCheck(): void {
    //   alert("3. do check is called");
    //   }
    // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    // }
    constructor(apiService, route, router) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.events = [];
        // selectedEvent: Event;
        this.personas = [];
        this.kollegen = [];
        // personaName: String;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.id = null;
    } //private router: Router) {alert("1. First on change") }
    set event(value) {
        this.day = value.start.toLocaleString().split('T')[0].split('-')[2];
        this.month = value.start.toLocaleString().split('T')[0].split('-')[1];
        this.year = value.start.toLocaleString().split('T')[0].split('-')[0];
        let date = new Date(Date.parse(this.day + '/' + this.month + '/' + this.year));
        let datee = this.year + '-' + this.month + '-' + this.day;
        this.id = value.id;
        this.eventFormDetail = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.title),
            partner: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.partner),
            //startDate: new FormControl(date.toISOString().substring(0, 10)), //doesnt get into the input as date, but it does as a str
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](datee),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.start.toLocaleString().split('T')[1].slice(0, 5)),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.color),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.status),
            insurance: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.insurance),
            resourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.resourceId),
            addtitle1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.addtitle1),
            addtitle2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.addtitle2),
            addtitle3: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.addtitle3),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.comment),
            persona: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.persona),
            kollege: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value.kollege),
        });
        console.log('event', value.id, this.eventFormDetail.get('title')); // event is undefined
    }
    // ngAfterContentChecked(): void {
    //   alert("5. after content check called");
    //   }
    // Called once after view has initialized
    //Commented because of error undefined name: 82, 83, 210-213, 223-226
    ngAfterViewInit() {
        //this.eventFormDetail.patchValue({persona: this.getActualPersona()});
        //this.eventFormDetail.patchValue({kollege: this.getActualKollege()});
        // alert('6. after view init called');
        // console.log('actual kol: ', this.getActualKollege());
        // this.getPersonas();
        // this.getEvents();
        // this.getKollegen();
    }
    ngOnInit() {
        // this.eventFormDetail.patchValue({persona: 5})
        // alert("2. on init is called");
        this.getEvent();
        this.getPersonas();
        this.getEvents();
        this.getKollegen();
        this.getActualEvent(this.events);
        //this.getEventReport();
        // this.getActualPersona();
        // this.getActualKollege();
        // Testing get params from calendar in the comeing url
        this.clickInfo$ = this.route.paramMap;
        console.log('clickInfo: ', this.clickInfo$);
        console.log('eventformdetail: ', this.eventFormDetail);
        // console.log('actual pers: ', this.getActualPersona());
        console.log('actual kol: ', this.getActualKollege());
    }
    // Getters fot use in the template - just for reference. No use actually
    get persona() { return this.eventFormDetail.get('persona'); }
    get kollege() { return this.eventFormDetail.get('kollege'); }
    // get pers_id() {
    //   this.persona_name = this.eventFormDetail.value.persona;
    //   console.log('name per: ', this.persona_name); 
    //   this.persona_id = this.persona_name.id;  //undef
    //   console.log('id per: ', this.persona_id);
    //   return this.persona_id;
    // }
    // get kollege_id() {
    //   let kollege_name = this.eventFormDetail.value.kollege;
    // console.log('name kol: ', kollege_name);
    //   let kollege_id = kollege_name.id;  //undef
    // console.log('id kol: ', kollege_id);
    //   return kollege_id;
    // }
    // Test the value of reactive form --TO DELETE
    valChange() {
        this.eventFormDetail.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => {
            value.title = value.title.toUppercase();
            return value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((value) => this.eventFormDetail.valid))
            .subscribe((value) => {
            console.log("Model driven form valid value: vm = ", JSON.stringify(value));
        });
    }
    getEvent() {
        // const ids = this.route.snapshot;
        // console.log('snapS', ids)
        // The name ix is defined at the app-routing module
        const ix = +this.route.snapshot.paramMap.get('ix');
        this.apiService.getEvent(ix)
            .subscribe(event => this.event = event);
    }
    getEvents() {
        this.apiService.getEvents()
            .subscribe(events => this.events = events);
        // console.log('events: ', this.events[0].id);
    }
    getEventReport() {
        const ix = +this.route.snapshot.paramMap.get('ix');
        this.apiService.getEventReport(ix)
            .subscribe(event => this.eventReport = event);
    }
    getPersonas() {
        this.apiService.getPersonas()
            .subscribe(data => this.personas = data);
        // let personaName: string;
        // this.personas.forEach(el => {this.eventForm.value.persona==el.id?this.personaName=el.name:null});
        console.log('personaName: ', this.personas);
    }
    getKollegen() {
        this.apiService.getKollegen()
            .subscribe(data => this.kollegen = data);
        console.log('kollegen: ', this.kollegen);
    }
    // Iterate across events and get the actual event
    getActualEvent(events) {
        let passed = [];
        for (let item of events) {
            if (item.id == this.id) {
                passed.push(item);
            }
        }
        return passed;
    }
    // Iterate across personas and get the persona of the actual event
    // Show the name of the persona
    getActualPersona() {
        //let actualEvent = this.getActualEvent(this.events); //this.events.filter(ev => ev.id == this.id);
        //let actualPersona = this.personas.filter(ps => ps.id ==  actualEvent[0].persona);
        // console.log('show name: ', actualPersona[0].name);
        //return actualPersona[0].name
    }
    getActualPersonaId() {
        let actualEvent = this.getActualEvent(this.events);
        let persona_id = actualEvent[0].persona;
        return persona_id;
    }
    getActualKollege() {
        //let actualEvent = this.getActualEvent(this.events); //this.events.filter(ev => ev.id == this.id);
        //let actualKollege = this.kollegen.filter(ps => ps.id ==  actualEvent[0].kollege);
        //console.log('show kol: ', actualKollege[0].name);
        //return actualKollege[0].name
    }
    getActualKollegeId() {
        let actualEvent = this.getActualEvent(this.events);
        let kollege_id = actualEvent[0].kollege;
        return kollege_id;
    }
    saveForm() {
        let persona_name = this.eventFormDetail.value.persona;
        let persona_id = persona_name.id; //undef
        // console.log('id per: ', persona_id);
        let kollege_name = this.eventFormDetail.value.kollege;
        // console.log('name kol: ', kollege_name);
        let kollege_id = kollege_name.id; //undef
        // console.log('id kol: ', kollege_id);
        let dayy = this.eventFormDetail.value.startDate; //.split('/')[0];
        let time = this.eventFormDetail.value.startTime;
        let recoposeStartStr = dayy + 'T' + time;
        //let month = this.eventFormDetail.value.startDate.split('/')[1];
        //let year = this.eventFormDetail.value.startDate.split('/')[2];
        //let recoposeStartStr = year+'-'+month+'-'+day+'T'+time;
        let recoposeStartNumber = Date.parse(recoposeStartStr);
        let recoposeStart = new Date(recoposeStartNumber);
        console.log('start1: ', this.eventFormDetail.value.startDate);
        console.log('start2: ', this.eventFormDetail.value.startDate.split('-'));
        console.log('start3: ', recoposeStartStr, recoposeStart);
        try {
            let stEx = /\b20/g;
            if (stEx.test(recoposeStart.toString()) == false) {
                throw alert('Por favor, informe a data!');
            }
            ;
            if (this.eventFormDetail.value.title == '' || null) {
                throw alert('Por favor, informe o procedimento!');
            }
            ;
            if (this.eventFormDetail.value.insurance == '') {
                throw alert('Por favor, informe o convênio!');
            }
            ;
            if (this.getActualPersonaId() == null || undefined) {
                "Preencha o 'cliente' por favor!";
            }
            ;
            if (this.getActualKollegeId() == null || undefined) {
                "Preencha o 'médico' por favor!";
            }
            ;
            if (this.getActualKollegeId() !== this.eventFormDetail.value.kollege) {
                confirm("deseja realmente trocar o médico?");
            }
            if (this.id) {
                // TOUCHES THE DB
                this.apiService.updateEvent(this.id, 
                // the order here. Must be the same as the bd
                this.eventFormDetail.value.title, this.eventFormDetail.value.partner, recoposeStart, this.eventFormDetail.value.color, this.eventFormDetail.value.status, this.eventFormDetail.value.insurance, this.eventFormDetail.value.resourceId, this.eventFormDetail.value.addtitle1, this.eventFormDetail.value.addtitle2, this.eventFormDetail.value.addtitle3, this.eventFormDetail.value.comment, this.getActualPersonaId(), 
                //this.getActualKollegeId()),
                this.eventFormDetail.value.kollege).subscribe((result) => {
                    // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
                    //   this.eventUpdated.emit(result);
                });
                // The alert below also allowed the list on 'events' update! No need to manually refresh now.
                //alert('Event updated');
                // location.reload();
                this.router.navigate(['events']);
            }
            else {
                // TOUCHES THE DB
                this.apiService.createEvent(this.eventFormDetail.value.title, this.eventFormDetail.value.partner, this.eventFormDetail.value.start, this.eventFormDetail.value.color, this.eventFormDetail.value.status, this.eventFormDetail.value.insurance, this.eventFormDetail.value.resourceId, this.eventFormDetail.value.addtitle1, this.eventFormDetail.value.addtitle2, this.eventFormDetail.value.addtitle3, this.eventFormDetail.value.comment, this.getActualPersonaId(), this.getActualKollegeId()).subscribe(
                // Above is sufficient to write on the db. Below shall refresh yhe list
                // (result: Event) => this.eventCreated.emit(result),
                // error => console.log(error)
                );
                alert('Event created');
                // location.reload();
                this.router.navigate(['events']);
            }
        }
        catch (err) {
            err;
        }
    }
    // Capture
    /*
    saveFormX() {
  
      let persona_name = this.eventFormDetail.value.persona;
      
      let persona_id = persona_name.id;  //undef
      // console.log('id per: ', persona_id);
  
      let kollege_name = this.eventFormDetail.value.kollege;
      // console.log('name kol: ', kollege_name);
      let kollege_id = kollege_name.id;  //undef
      // console.log('id kol: ', kollege_id);
      
      let dayy = this.eventFormDetail.value.startDate//.split('/')[0];
      let time = this.eventFormDetail.value.startTime;
      let recoposeStartStr = dayy+'T'+time;
  
      //let month = this.eventFormDetail.value.startDate.split('/')[1];
      //let year = this.eventFormDetail.value.startDate.split('/')[2];
      //let recoposeStartStr = year+'-'+month+'-'+day+'T'+time;
      let recoposeStartNumber = Date.parse(recoposeStartStr);
      let recoposeStart = new Date(recoposeStartNumber);
  
      console.log('start1: ', this.eventFormDetail.value.startDate);
      console.log('start2: ', this.eventFormDetail.value.startDate.split('-'));
      console.log('start3: ', recoposeStartStr, recoposeStart);
  
      try {
        let stEx = /\b20/g;
        if (stEx.test(recoposeStart.toString()) == false) { throw alert('Por favor, informe a data!')};
        if (this.eventFormDetail.value.title == '' || null) { throw alert('Por favor, informe o procedimento!')};
        if (this.eventFormDetail.value.insurance == '') { throw alert('Por favor, informe o convênio!')};
        if (this.getActualPersonaId() == null || undefined) {"Preencha o 'cliente' por favor!"};
        if (this.getActualKollegeId() == null || undefined) {"Preencha o 'médico' por favor!"};
        if (this.getActualKollegeId() !== this.eventFormDetail.value.kollege) {confirm("deseja realmente trocar o médico?")}
      if (this.id) {
      // TOUCHES THE DB
      
      this.apiService.read_camera_capture(
        this.id,
        // the order here. Must be the same as the bd
        0,
        ).subscribe(
          (result: Event) => {
            // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
          //   this.eventUpdated.emit(result);
          },
          // error => console.log(error)
          )
        // The alert below also allowed the list on 'events' update! No need to manually refresh now.
        //alert('Event updated');
        // location.reload();
        this.router.navigate(['calendar'],);
        }
      }
      catch(err) {err}
    }
  */
    // confirmEvent(event: Event): void {
    //   if (confirm(`Are you sure you want to CONFIRM this event '${event.title}'`)) {
    //   event.color = '#1abc9c';
    //   // this.eventss = this.eventss.filter(h => h !== event);
    //   // this.apiService.deleteEvent(event).subscribe();
    //   this.apiService.putEventConf(event.id, event.title, event.start, event.color, event.persona, event.kollege).subscribe();
    //   }
    //   this.router.navigate(['calendar'],);
    // }
    newKollege() {
        this.router.navigate(['kollege']);
    }
    newPersona() {
        this.router.navigate(['persona']);
    }
}
EventFormDetailComponent.ɵfac = function EventFormDetailComponent_Factory(t) { return new (t || EventFormDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EventFormDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EventFormDetailComponent, selectors: [["app-event-form-detail"]], decls: 7, vars: 2, consts: [[4, "ngFor", "ngForOf"], [1, "demo-app-main"], ["matSuffix", ""], ["mat-dialog-title", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["floatLabel", "auto", "appearance", "fill", "color", "accent"], [2, "font-weight", "bold"], ["matInput", "", "placeholder", "Exame", "formControlName", "title"], ["align", "end"], ["matInput", "", "type", "date", "placeholder", "Data", "formControlName", "startDate"], ["matInput", "", "type", "time", "placeholder", "Hora", "formControlName", "startTime"], ["matInput", "", "placeholder", "Color", "formControlName", "color"], ["matInput", "", "placeholder", "Conv\u00EAnio", "formControlName", "insurance"], ["matInput", "", "placeholder", "Sala", "formControlName", "resourceId"], ["matInput", "", "placeholder", "Extra", "formControlName", "addtitle1"], ["matInput", "", "placeholder", "Extra", "formControlName", "addtitle2"], ["matInput", "", "placeholder", "Extra", "formControlName", "addtitle3"], ["matInput", "", "placeholder", "Coment\u00E1rios", "formControlName", "comment"], [1, "form-group", "row"], [1, "col-sm-10"], ["type", "text", "placeholder", "Estado", "formControlName", "status"], ["value", "agendado"], ["value", "confirmado"], ["value", "aguardando", "disabled", ""], ["value", "em_atendimento", "disabled", ""], ["value", "finalizado"], ["value", "cancelado"], ["hidden", "", "id", "per-plus", 1, "form-group", "row"], [1, "col-sm-2", "col-form-label"], [3, "icon", "ngClass", "click"], ["class", "form-control", "type", "text", "formControlName", "persona", 3, "hidden", 4, "ngFor", "ngForOf"], ["hidden", "", "type", "text", "formControlName", "persona", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "kol-plus", 3, "icon", "ngClass", "click"], ["matInput", "", "type", "text", "formControlName", "kollege"], ["type", "submit", "mat-flat-button", "", "color", "primary"], ["type", "text", "formControlName", "persona", 1, "form-control", 3, "hidden"], ["disabled", "", 3, "ngValue"], [3, "hidden", "ngValue", 4, "ngFor", "ngForOf"], [3, "hidden", "ngValue"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function EventFormDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EventFormDetailComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Evento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EventFormDetailComponent_form_6_Template, 69, 17, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.eventFormDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n    display: block;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    height: 100px;\n    resize: vertical;\n}\n\n.demo-app-main[_ngcontent-%COMP%] {\n    \n    padding: 3em;\n    column-count: 2;\n}\n\n#kol-plus[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWZvcm0tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiZXZlbnQtZm9ybS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5kZW1vLWFwcC1tYWluIHtcbiAgICAvKiBmbGV4LWdyb3c6IDE7ICovXG4gICAgcGFkZGluZzogM2VtO1xuICAgIGNvbHVtbi1jb3VudDogMjtcbn1cblxuI2tvbC1wbHVzIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "nIPh":
/*!******************************************************!*\
  !*** ./src/app/capture/capture/capture.component.ts ***!
  \******************************************************/
/*! exports provided: CaptureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureComponent", function() { return CaptureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/api.service */ "hD8V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["video"];
const _c1 = ["canvas"];
function CaptureComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "video", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "canvas", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", !ctx_r0.isCaptured)("hide", ctx_r0.isCaptured);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r0.WIDTH)("height", ctx_r0.HEIGHT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r0.isCaptured)("hide", !ctx_r0.isCaptured);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r0.WIDTH)("height", ctx_r0.HEIGHT);
} }
function CaptureComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaptureComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.capture(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Snap Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CaptureComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaptureComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.removeCurrent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Take Another");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CaptureComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaptureComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.endCamera(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Desligar a c\u00E2mera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CaptureComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.error, ". Por favor, cheque o sistema de captura! ");
} }
function CaptureComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaptureComponent_li_9_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const idx_r15 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.setPhoto(idx_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const src_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", src_r14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class CaptureComponent {
    constructor(renderer, el, apiService, route, router) {
        this.renderer = renderer;
        this.el = el;
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        /* ################# CAPTURE START ################# */
        this.WIDTH = 640;
        this.HEIGHT = 480;
        //  @ViewChild("mycanvas")
        //  public mycanvas: ElementRef;
        this.captures = [];
        this.photo = null;
        /* ######## END ############ */
        // BINDINGS
        /* ### Angular 2 how to make child component wait for async data to be ready
          https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
        this.id = null;
    }
    ngOnInit() {
        this.photo = document.getElementById('photo');
        /* ### Angular 2 how to make child component wait for async data to be ready
        https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
        //this._events.subscribe(x => {console.log('xxxx', x)});
        //console.log('_events', this._events);
    }
    /* ################# CAPTURE START ################# */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setupDevices();
            if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
                console.log("enumerateDevices() not supported.");
                return;
            }
            // List cameras and microphones.
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                devices.forEach(function (device) {
                    console.log(device.kind + ": " + device.label +
                        " id = " + device.deviceId);
                });
            })
                .catch(function (err) {
                console.log(err.name + ": " + err.message);
            });
        });
    }
    setupDevices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                try {
                    const stream = yield navigator.mediaDevices.getUserMedia({
                        video: true
                    });
                    if (stream) {
                        this.video.nativeElement.srcObject = stream;
                        this.video.nativeElement.play();
                        this.error = null;
                    }
                    else {
                        this.error = "You have no output video device";
                    }
                }
                catch (e) {
                    this.error = e;
                }
            }
        });
    }
    /*
    addElement () {
      // create a new div element
      const newDiv = this.renderer.createElement("div");
    
      // and give it some content
      const newContent = this.renderer.createText("Hi there and greetings!");
    
      // add the text node to the newly created div
      newDiv.appendChild(newContent);
    
      
      var cv = document.getElementById('mycanvas');
      console.log('cv', cv.id);
    
      // add the newly created element and its content into the DOM
      this.renderer.appendChild(cv, newDiv);
      
    }*/
    capture() {
        //console.log('chikdren', document.children);
        this.drawImageToCanvas(this.video.nativeElement);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
        var img = new Image();
        img.src = this.canvas.nativeElement.toDataURL("image/png");
        img.width = 480;
        //console.log('img cpatured', img)
        /*
        var byteStr = atob(this.captures[0].split(',')[1]);
        // problem here: ERROR DOMException: String contains an invalid character
        var mimeStr = this.captures[0].split(',')[0].split(':')[1].split(';')[0];
        var buffer = new ArrayBuffer(byteStr.length);
        var data = new DataView(buffer);
        console.log('vars to blob', mimeStr, byteStr);
        console.log('data from bufeer', data);
      
        for (var i = 0; i < byteStr.length; i++) {
          data.setUint8(i, byteStr.charCodeAt(i));
        }
      
        var newBlob = new Blob([buffer], { type: mimeStr });
        var newBlob2 = new Blob([data], { type: mimeStr });
        console.log('newBlob', newBlob, newBlob2);
        */
        this.photo.setAttribute('src', img.src);
        this.blobToForm = img.src; //newBlob;
        // ### trying to get the image
        /*
        var canvas = document.getElementById('mycanvas');
        const cxt = this.mycanvas.nativeElement
          .getContext("2d")
          .drawImage(Image, 0, 0, this.WIDTH, this.HEIGHT);
        cxt.toBlob(function(blob) {
          var newImg = document.createElement('img'),
              url = URL.createObjectURL(blob);
          newImg.onload = function() {
            URL.revokeObjectURL(url);
          }
          newImg.src = url;
          document.body.appendChild(newImg);
        });*/
        // ###########
        //console.log('cp', typeof(this.video.nativeElement), typeof(this.captures[0]));
        this.isCaptured = true;
    }
    endCamera() {
        this.video.nativeElement.srcObject.getVideoTracks().forEach(track => track.stop());
    }
    removeCurrent() {
        this.isCaptured = false;
    }
    setPhoto(idx) {
        this.isCaptured = true;
        var image = new Image();
        console.log('im', image);
        image.src = this.captures[idx];
        this.drawImageToCanvas(image);
    }
    drawImageToCanvas(image) {
        this.canvas.nativeElement
            .getContext("2d")
            .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
    }
}
CaptureComponent.ɵfac = function CaptureComponent_Factory(t) { return new (t || CaptureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CaptureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CaptureComponent, selectors: [["app-capture"]], viewQuery: function CaptureComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 27, vars: 6, consts: [["id", "div1", "class", "video-container", 4, "ngIf"], [1, "snap-container"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "text-danger mt-4", 4, "ngIf"], [1, "output"], ["id", "photo", "alt", "The screen capture will appear in this box."], [1, "list-unstyled"], [3, "click", 4, "ngFor", "ngForOf"], [1, "button-group"], ["id", "btn-start", "type", "button", 1, "button"], ["id", "btn-stop", "type", "button", 1, "button"], ["id", "btn-capture", "type", "button", 1, "button"], [1, "play-area"], [1, "play-area-sub"], ["id", "stream", "width", "240", "height", "240"], ["id", "capture", "width", "240", "height", "240"], ["id", "snapshot"], ["id", "div1", 1, "video-container"], ["id", "video", "autoplay", "", 3, "width", "height"], ["video", ""], ["id", "canvas", 3, "width", "height"], ["canvas", ""], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "text-danger", "mt-4"], [1, "mt-5"], ["src", "http://www.digest.com.br/static/catalog/manometria.jpg"], [3, "click"], ["height", "50", 3, "src"]], template: function CaptureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CaptureComponent_div_0_Template, 5, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CaptureComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CaptureComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CaptureComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CaptureComponent_div_5_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CaptureComponent_li_9_Template, 2, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Start Streaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Stop Streaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Capture Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "The Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "video", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "The Capture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "canvas", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isCaptured);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCaptured);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCaptured);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.captures);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".snap-container[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    text-align: center;\n  }\n\n.list-unstyled[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px 10px;\n    cursor: pointer;\n  }\n\n.show[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n.hide[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n\n\n\n\n.button-group[_ngcontent-%COMP%], .play-area[_ngcontent-%COMP%] {  \n    border: 1px solid grey;  \n    padding: 1em 1%;  \n    margin-bottom: 1em;  \n  }\n\n.button[_ngcontent-%COMP%] {  \n    padding: 0.5em;  \n    margin-right: 1em;  \n  }\n\n.play-area-sub[_ngcontent-%COMP%] {  \n    width: 47%;  \n    padding: 1em 1%;  \n    display: inline-block;  \n    text-align: center;  \n  }\n\n#capture[_ngcontent-%COMP%] {  \n    display: none;  \n  }\n\n#snapshot[_ngcontent-%COMP%] {  \n    display: inline-block;  \n    width: 240px;  \n    height: 240px;  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcHR1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7O0FBRXhDO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBLHNDQUFzQzs7QUFHeEMsZ0hBQWdIOztBQUVoSDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7QUFDQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtFQUNmIiwiZmlsZSI6ImNhcHR1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICMjIyMjIyMjIENBUFRVUkUgU1RBUlQgIyMjIyMjIyMjIyMjICovXG5cbi5zbmFwLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxpc3QtdW5zdHlsZWQge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgXG4gIC5saXN0LXVuc3R5bGVkIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogIyMjIyMjIyMgQ0FQVFVSRSBFTkQgIyMjIyMjIyMjIyMjICovXG5cblxuLyogIyMjIyMjIyMgSG93IFRvIENhcHR1cmUgSW1hZ2UgRnJvbSBDYW1lcmE6IGh0dHBzOi8vZ2V0cG9ja2V0LmNvbS9yZWFkLzI2Mzg5MTM2ODA/c3JjPWZ4X25ld190YWIgIyMjIyMjIyMjIyMgKi9cblxuLmJ1dHRvbi1ncm91cCwgLnBsYXktYXJlYSB7ICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgXG4gICAgcGFkZGluZzogMWVtIDElOyAgXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtOyAgXG4gIH0gIFxuICAuYnV0dG9uIHsgIFxuICAgIHBhZGRpbmc6IDAuNWVtOyAgXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07ICBcbiAgfSAgXG4gIC5wbGF5LWFyZWEtc3ViIHsgIFxuICAgIHdpZHRoOiA0NyU7ICBcbiAgICBwYWRkaW5nOiAxZW0gMSU7ICBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiAgfSAgXG4gICNjYXB0dXJlIHsgIFxuICAgIGRpc3BsYXk6IG5vbmU7ICBcbiAgfSAgXG4gICNzbmFwc2hvdCB7ICBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcbiAgICB3aWR0aDogMjQwcHg7ICBcbiAgICBoZWlnaHQ6IDI0MHB4OyAgXG4gIH0iXX0= */"] });


/***/ }),

/***/ "nulL":
/*!*******************************************!*\
  !*** ./src/app/capture/capture.module.ts ***!
  \*******************************************/
/*! exports provided: CaptureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureModule", function() { return CaptureModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _capture_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capture-routing.module */ "R1YU");
/* harmony import */ var _capture_capture_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capture/capture.component */ "nIPh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CaptureModule {
}
CaptureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CaptureModule });
CaptureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CaptureModule_Factory(t) { return new (t || CaptureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _capture_routing_module__WEBPACK_IMPORTED_MODULE_1__["CaptureRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CaptureModule, { declarations: [_capture_capture_component__WEBPACK_IMPORTED_MODULE_2__["CaptureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _capture_routing_module__WEBPACK_IMPORTED_MODULE_1__["CaptureRoutingModule"]] }); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, consts: [[2, "text-align", "center", "padding-top", "50px"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "tmVS":
/*!*******************************************!*\
  !*** ./src/app/guards/assistant.guard.ts ***!
  \*******************************************/
/*! exports provided: AssistantGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantGuard", function() { return AssistantGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/api.service */ "hD8V");




class AssistantGuard {
    constructor(cookieService, router, apiService) {
        this.cookieService = cookieService;
        this.router = router;
        this.apiService = apiService;
    }
    canActivate(route, state) {
        let currentUser = this.cookieService.get('currentUser');
        if (currentUser == 'marina@dig.com') {
            return true;
        }
        else {
            this.router.navigate(['/auth']);
            return false;
        }
    }
}
AssistantGuard.ɵfac = function AssistantGuard_Factory(t) { return new (t || AssistantGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AssistantGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssistantGuard, factory: AssistantGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "v68L":
/*!*************************************************************!*\
  !*** ./src/app/report/report-form/report-form.component.ts ***!
  \*************************************************************/
/*! exports provided: ReportFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFormComponent", function() { return ReportFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/api.service */ "hD8V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");















function ReportFormComponent_span_0_span_1_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, per_r4.name), " (id: ", ctx_r5.id, ") realizou ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 6, ev_r1.title), " em ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 8, ev_r1.start, "d/M/yy, h:mm a"), ". ");
} }
function ReportFormComponent_span_0_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReportFormComponent_span_0_span_1_span_1_span_1_Template, 7, 11, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r4 = ctx.$implicit;
    const ev_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", per_r4.id == ev_r1.persona);
} }
function ReportFormComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReportFormComponent_span_0_span_1_span_1_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.personas);
} }
function ReportFormComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReportFormComponent_span_0_span_1_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.id == ev_r1.id);
} }
class ReportFormComponent {
    constructor(renderer, el, apiService, route, router) {
        this.renderer = renderer;
        this.el = el;
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.photo = null;
        /* ### Angular 2 how to make child component wait for async data to be ready
          https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
        this._events = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"];
        this.id = null;
        // this.image.src = './../assets/images/logo_circle.png'
        /*
            this.formIm = new FormGroup({
              event: new FormControl(''),
              im1: new FormControl(''),
            });
        */
        this.formReport = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            // reportUUID: new FormControl(''),
            im1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            drugs: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            anest: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            assistant: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            equipment: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            phar: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            esop: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            stom: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            duod: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            urease: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            biopsy: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hystoResults: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            prep: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            quality: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            colo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            conc1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            conc2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            conc3: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            conc4: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            conc5: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            conc6: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            complications: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            event: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        console.log('formReportConstruct', this.formReport);
        setTimeout(() => console.log('this.eventsConstruct', this.events), 350);
    }
    set events(value) { this._events.next(value); }
    ;
    //formIm: FormGroup;
    //image = new Image();
    // Substitute for directives on the template
    set event(value) {
        /*this.id = value.id;
        console.log('set',value);
        console.log('event', this.event);
        this.formEvent = new FormGroup({
          name: new FormControl(value.persona),
          start: new FormControl(value.start),
          time: new FormControl(value.start),
        });*/
    }
    ngOnInit() {
        setTimeout(() => console.log('this.events$', this.events$), 1000);
        this.getEvents();
        setTimeout(() => console.log('this.events500', this.events), 500);
        this.getPersonas();
        setTimeout(() => console.log('this.personas500', this.personas), 500);
        //const data = from(Array(this.events));
        //data.subscribe({ next(resp) {console.log('observable getEv', resp)}});
        this.events$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => this.apiService.searchEvents(term)));
        /* ### Angular 2 how to make child component wait for async data to be ready
        https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
        //this._events.subscribe(x => {console.log('xxxx', x)});
        //console.log('_events', this._events);
        setTimeout(() => this.patchForm(), 500);
    }
    /*
      ngOnChanges() {
        console.log('this.events onChange', this.events, this.route.snapshot.paramMap.get('id'));
        setTimeout(() => this.patchForm(), 1000);
      }
    
      ngAfterViewInit(): void {
        setTimeout(() => this.patchForm(), 1000);
        console.log('idCom', this.idComing);
      }
    */
    // #################################################################################################### //
    // If does now: keeping both templates on the same page on event.component.html
    // but hiding (see event.conponent.ts) one or another according to function.
    // Breaf: event.com..ts builds event-end-form.html on its template that has a link to a specific event
    // >> event-endo-form.ts snapshots the id param of the url and patches the formReport event field.
    // If the event-endo-form is built on the event-endo-form.ts template, the specific event is undefined.
    // No need to touch the BD as would be the case with setters (set event...).
    patchForm() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.id = id;
        let ev = [];
        this._events.subscribe(e => ev = e);
        this.formReport.patchValue({ event: id, assistant: ev[0].title });
        // Can subscribe to the subject as above or simply get the value directly from it:
        //this.formReport.patchValue({ event: id, assistant: this._events.value[0].title });
        //this.formIm.patchValue({event: id});
    }
    search(term) {
        this.searchTerms.next(term);
    }
    displayFn(ev) {
        /*   let persName: string;
           console.log(this.personas$);
           //this.getPersonas();
           for (let pers of this.personas) {
             if (pers.id == ev.persona) {
               persName = pers.name;
             }
           }
           */
        return ev && ev.title ? ev.title : '';
    }
    // get getForm() {return this.form.get('name')}
    /* ### Angular 2 how to make child component wait for async data to be ready
      https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
    // No need. Values processed at patchForm()
    /* getEvs() {
        return this._events.getValue();
      }*/
    getEvents() {
        this.apiService.getEvents()
            .subscribe(events => this.events = events);
        // console.log('events: ', this.events[0].id);
    }
    /*
      getEvent() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.apiService.getEvent(id)
          .subscribe(event => this.event = event);
      }
    */
    getPersonas() {
        this.apiService.getPersonas()
            .subscribe(data => this.personas = data);
        // let personaName: string;
        // this.personas.forEach(el => {this.eventForm.value.persona==el.id?this.personaName=el.name:null});
        console.log('personaNameInsideGet: ', this.personas);
    }
    saveForm() {
        console.log('ID at formRepo', this.id);
        console.log('into the if clause', this.formReport.value.event);
        /*
         try {
         if (this.formReport.value.title == '') { throw alert('Por favor, informe o procedimento!')};
         if (this.formReport.value.start == '') { throw alert('Por favor, informe a data e hora!')};
         if (this.formReport.value.insurance == '') { throw alert('Por favor, informe o convênio!')};
     */
        //if (this.id) {
        // TOUCHES THE DB
        this.apiService.createEventReport(
        //this.id,
        //  this.formReport.value.reportUUID,
        String(this.blobToForm), this.formReport.value.im2, this.formReport.value.im3, this.formReport.value.im4, this.formReport.value.im5, this.formReport.value.im6, this.formReport.value.im7, this.formReport.value.im8, this.formReport.value.im9, this.formReport.value.im10, this.formReport.value.drugs, this.formReport.value.anest, this.formReport.value.assistant, this.formReport.value.equipment, this.formReport.value.phar, this.formReport.value.esop, this.formReport.value.stom, this.formReport.value.duod, this.formReport.value.urease, this.formReport.value.biopsy, this.formReport.value.hystoResults, this.formReport.value.prep, this.formReport.value.quality, this.formReport.value.colo, this.formReport.value.conc1, this.formReport.value.conc2, this.formReport.value.conc3, this.formReport.value.conc4, this.formReport.value.conc5, this.formReport.value.conc6, this.formReport.value.complications, this.formReport.value.event).subscribe((result) => {
            console.log('into create EventReport subscribe');
            // This line only updates the view. Commenting it keeps updateDigest but needs manual refreshing.
            //   this.eventUpdated.emit(result);
        });
        //location.reload();
        // this.router.navigate(['main'],);
        /* } else {
           this.apiService.createEvent(
             this.eventForm.value.title,
             this.eventForm.value.partner,
             datePlusTime,
             this.eventForm.value.color,
             this.eventForm.value.status,
             this.eventForm.value.insurance,
             this.eventForm.value.resourceId,
             this.eventForm.value.addtitle1,
             this.eventForm.value.addtitle2,
             this.eventForm.value.addtitle3,
             this.eventForm.value.comment,
             persona_id,
             kollege_id).subscribe(
               // Above is sufficient to write on the db. Below shall refresh yhe list
               // (result: Event) => this.eventCreated.emit(result),
               error => console.log(error)
               );
               location.reload();
             // this.router.navigate(['main'],);
         } */
    }
    catch(err) { err; }
    //  }
    createEvent() { }
    save() { }
    close() { }
}
ReportFormComponent.ɵfac = function ReportFormComponent_Factory(t) { return new (t || ReportFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ReportFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReportFormComponent, selectors: [["report-form"]], inputs: { events: "events" }, decls: 71, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["id", "eef", 1, "demo-app-main"], [3, "formGroup"], ["matInput", "", "readonly", "", "hidden", "", "placeholder", "ID", "formControlName", "event"], [2, "padding-left", "10px"], [2, "width", "32%"], ["matNativeControl", "", "placeholder", "Medicamentos", "formControlName", "drugs"], ["value", "null"], ["value", "base"], ["value", "propofol"], ["value", "none"], ["value", "other"], ["matInput", "", "placeholder", "Equipamentos", "formControlName", "equipment"], [2, "width", "33%", "padding-left", "10px"], ["matInput", "", "placeholder", "Solicitante", "formControlName", "assistant"], ["cellspacing", "10", 2, "width", "100%"], ["cdkDropList", "", "appearance", "fill", 2, "width", "100%"], ["matInput", "", "placeholder", "Faringe", "formControlName", "phar"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "placeholder", "Est\u00F4mago", "formControlName", "stom"], ["matInput", "", "placeholder", "Es\u00F4fago", "formControlName", "esop"], ["matInput", "", "placeholder", "Duodeno", "formControlName", "duod"], [2, "width", "100%"], [2, "padding-left", "5px"], ["matInput", "", "placeholder", "Conclus\u00E3o1", "formControlName", "conc1"], ["matInput", "", "placeholder", "Conclus\u00E3o2", "formControlName", "conc2"], ["matInput", "", "placeholder", "Conclus\u00E3o3", "formControlName", "conc3"], ["matInput", "", "placeholder", "Conclus\u00E3o4", "formControlName", "conc4"], ["matInput", "", "placeholder", "Conclus\u00E3o5", "formControlName", "conc5"], ["matInput", "", "placeholder", "Conclus\u00E3o6", "formControlName", "conc6"], [2, "width", "50%"], ["matInput", "", "placeholder", "Complica\u00E7\u00F5es", "formControlName", "complications"], ["matInput", "", "placeholder", "Event", "formControlName", "event"], [1, "mat-raised-button", 3, "click"], [1, "mat-raised-button", "mat-primary", 3, "click"], [4, "ngIf"], [1, "col-sm-2", "col-form-label"]], template: function ReportFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ReportFormComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "--");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "lidoca\u00EDna, dimeticona, fentanila, midazolam");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "lidoca\u00EDna, dimeticona, fentanila, midazolam, propofol");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "lidoca\u00EDna, dimeticona");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "outro");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Passagem f\u00E1cil e sem traumas pelo esf\u00EDncter superior do es\u00F4fago, sob vis\u00E3o direta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportFormComponent_Template_button_click_67_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportFormComponent_Template_button_click_69_listener() { return ctx.saveForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formReport);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["CdkDropList"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_assistant_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/assistant.guard */ "tmVS");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/calendar.component */ "7mpd");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _mainforms_event_form_detail_event_form_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainforms/event-form-detail/event-form-detail.component */ "mt6o");
/* harmony import */ var _mainforms_event_form_modal_event_form_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainforms/event-form-modal/event-form-modal.component */ "in7A");
/* harmony import */ var _main_event_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/event/event.component */ "xAcU");
/* harmony import */ var _mainforms_kollege_form_modal_kollege_form_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainforms/kollege-form-modal/kollege-form-modal.component */ "eVYu");
/* harmony import */ var _main_kollege_kollege_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/kollege/kollege.component */ "Xj0r");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _mainforms_persona_form_detail_persona_form_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mainforms/persona-form-detail/persona-form-detail.component */ "OP6d");
/* harmony import */ var _mainforms_persona_form_modal_persona_form_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mainforms/persona-form-modal/persona-form-modal.component */ "cdK/");
/* harmony import */ var _main_persona_persona_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/persona/persona.component */ "UlaI");
/* harmony import */ var _traceboard_traceboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./traceboard/traceboard.component */ "Eek8");
/* harmony import */ var _report_report_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./report/report/report.component */ "+01d");
/* harmony import */ var _report_report_form_report_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./report/report-form/report-form.component */ "v68L");
/* harmony import */ var _capture_capture_capture_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./capture/capture/capture.component */ "nIPh");
/* harmony import */ var _assistant_assistant_assistant_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assistant/assistant/assistant.component */ "YubJ");
/* harmony import */ var _guards_reception_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/reception.guard */ "zknQ");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/admin.guard */ "Tk1w");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home/home.component */ "cPhq");
/* harmony import */ var _home_hometree_modalEx_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/hometree/modalEx.component */ "GIjN");
/* harmony import */ var _home_themes_themes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/themes/themes.component */ "lWNe");
/* harmony import */ var _home_team_team_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/team/team.component */ "bbly");
/* harmony import */ var _home_products_products_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/products/products.component */ "KT9E");
/* harmony import */ var _home_insurance_insurance_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/insurance/insurance.component */ "7L5p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");






























const routes = [
    { path: '', component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"] },
    { path: 'home', component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"] },
    { path: 'team', component: _home_team_team_component__WEBPACK_IMPORTED_MODULE_25__["TeamComponent"] },
    { path: 'products', component: _home_products_products_component__WEBPACK_IMPORTED_MODULE_26__["ProductsComponent"] },
    { path: 'insurance', component: _home_insurance_insurance_component__WEBPACK_IMPORTED_MODULE_27__["InsuranceComponent"] },
    { path: 'modalEx', component: _home_hometree_modalEx_component__WEBPACK_IMPORTED_MODULE_23__["ModalExComponent"] },
    { path: 'themes', component: _home_themes_themes_component__WEBPACK_IMPORTED_MODULE_24__["ThemesComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_reception_guard__WEBPACK_IMPORTED_MODULE_20__["ReceptionGuard"]] },
    { path: 'traceboard', component: _traceboard_traceboard_component__WEBPACK_IMPORTED_MODULE_15__["TraceboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_reception_guard__WEBPACK_IMPORTED_MODULE_20__["ReceptionGuard"]] },
    { path: 'calendar', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_reception_guard__WEBPACK_IMPORTED_MODULE_20__["ReceptionGuard"]] },
    { path: 'events', component: _main_event_event_component__WEBPACK_IMPORTED_MODULE_8__["EventComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_reception_guard__WEBPACK_IMPORTED_MODULE_20__["ReceptionGuard"]] },
    { path: 'event-form-detail/:ix', component: _mainforms_event_form_detail_event_form_detail_component__WEBPACK_IMPORTED_MODULE_6__["EventFormDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__["AdminGuard"]] },
    { path: 'event-form-modal', component: _mainforms_event_form_modal_event_form_modal_component__WEBPACK_IMPORTED_MODULE_7__["EventFormModalComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_reception_guard__WEBPACK_IMPORTED_MODULE_20__["ReceptionGuard"]] },
    { path: 'persona', component: _main_persona_persona_component__WEBPACK_IMPORTED_MODULE_14__["PersonaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__["AdminGuard"]] },
    { path: 'persona-form-detail/:id', component: _mainforms_persona_form_detail_persona_form_detail_component__WEBPACK_IMPORTED_MODULE_12__["PersonaFormDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_reception_guard__WEBPACK_IMPORTED_MODULE_20__["ReceptionGuard"]] },
    { path: 'persona-form-modal', component: _mainforms_persona_form_modal_persona_form_modal_component__WEBPACK_IMPORTED_MODULE_13__["PersonaFormModalComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_reception_guard__WEBPACK_IMPORTED_MODULE_20__["ReceptionGuard"]] },
    { path: 'kollege', component: _main_kollege_kollege_component__WEBPACK_IMPORTED_MODULE_10__["KollegeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__["AdminGuard"]] },
    { path: 'kollege-form-modal', component: _mainforms_kollege_form_modal_kollege_form_modal_component__WEBPACK_IMPORTED_MODULE_9__["KollegeFormModalComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_reception_guard__WEBPACK_IMPORTED_MODULE_20__["ReceptionGuard"]] },
    //{ path: 'deleted-dialog', component: DeletedDialog },
    { path: 'report', component: _report_report_report_component__WEBPACK_IMPORTED_MODULE_16__["ReportComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__["AdminGuard"]] },
    { path: 'capture', component: _capture_capture_capture_component__WEBPACK_IMPORTED_MODULE_18__["CaptureComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__["AdminGuard"]] },
    { path: 'report-form/:id', component: _report_report_form_report_form_component__WEBPACK_IMPORTED_MODULE_17__["ReportFormComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_21__["AdminGuard"]] },
    { path: 'assistant', component: _assistant_assistant_assistant_component__WEBPACK_IMPORTED_MODULE_19__["AssistantComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_assistant_guard__WEBPACK_IMPORTED_MODULE_3__["AssistantGuard"]] },
    { path: 'assistant/:ix', component: _assistant_assistant_assistant_component__WEBPACK_IMPORTED_MODULE_19__["AssistantComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xAcU":
/*!***********************************************!*\
  !*** ./src/app/main/event/event.component.ts ***!
  \***********************************************/
/*! exports provided: EventComponent, EventStatusDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventStatusDialogComponent", function() { return EventStatusDialogComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api.service */ "hD8V");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/utils.service */ "diQs");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _report_report_form_report_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../report/report-form/report-form.component */ "v68L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");























function EventComponent_mat_form_field_5_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r35);
} }
function EventComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EventComponent_mat_form_field_5_Template_select_ngModelChange_3_listener($event) { const filter_r33 = ctx.$implicit; return filter_r33.modelValue = $event; })("change", function EventComponent_mat_form_field_5_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const filter_r33 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r37.filterChange(filter_r33, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, EventComponent_mat_form_field_5_option_6_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](filter_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("name", filter_r33.columnProp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", filter_r33.modelValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("-- Select ", filter_r33.name, " --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", filter_r33.options);
} }
function EventComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Confirma? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "blue": a0 }; };
function EventComponent_td_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "fa-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r40.faCheck)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, 5 > 4));
} }
function EventComponent_td_17_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_td_17_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); const ev_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r44.confirmEvent(ev_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_17_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_td_17_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49); const ev_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r47.confirmEvent(ev_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_17_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_td_17_span_1_Template, 2, 4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EventComponent_td_17_span_2_Template, 3, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, EventComponent_td_17_span_3_Template, 3, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, EventComponent_td_17_span_4_Template, 3, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ev_r39.status == "finalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ev_r39.status == "agendado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ev_r39.status == "cancelado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ev_r39.status == "confirmado");
} }
function EventComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "sentiment_very_satisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cancela? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "orange": a0 }; };
function EventComponent_span_22_td_1_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 47);
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r53.faTrash)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c1, 5 > 4));
} }
function EventComponent_span_22_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_span_22_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const ev_r52 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r54.deleteEvent(ev_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_span_22_td_1_fa_icon_1_Template, 1, 4, "fa-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r51.trashOn);
} }
function EventComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_span_22_td_1_Template, 2, 1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_span_26_td_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/event-form-detail/", ev_r59.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, ev_r59.start, "d/M/yy, h:mm a"));
} }
function EventComponent_span_26_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_span_26_td_1_a_1_Template, 3, 5, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r57 == 0);
} }
function EventComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_span_26_td_1_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Exame ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_td_29_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); const ev_r63 = ctx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r64.confirmEvent(ev_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"](" ", ev_r63.title, " ", ev_r63.id, " ", ev_r63.partner, " ", ev_r63.addtitle2, " ");
} }
function EventComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Conv\u00EAnio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r66.insurance, " ");
} }
function EventComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_35_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/persona-form-detail/", per_r69.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", per_r69.name, " /", per_r69.mobile, " /", per_r69.telephone, "");
} }
function EventComponent_td_35_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_td_35_span_1_span_1_Template, 3, 4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r69 = ctx.$implicit;
    const row_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", per_r69.id === row_r67.persona);
} }
function EventComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_td_35_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r67 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", row_r67.persona);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r16.personas);
} }
function EventComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " M\u00E9dico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_38_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", kol_r75.name, " ");
} }
function EventComponent_td_38_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_td_38_span_1_span_1_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kol_r75 = ctx.$implicit;
    const row_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", kol_r75.id === row_r73.kollege);
} }
function EventComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_td_38_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", row_r73.kollege);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r18.kollegen);
} }
function EventComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Parceiro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_41_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partner_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", partner_r81.name, " ");
} }
function EventComponent_td_41_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_td_41_span_1_span_1_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partner_r81 = ctx.$implicit;
    const row_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", partner_r81.id === row_r79.partner);
} }
function EventComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_td_41_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r79 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", row_r79.partner);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r20.partners);
} }
function EventComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_td_44_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const row_r85 = ctx.$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r86.openDialogx("Atualizar", row_r85); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r85.status);
} }
function EventComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Coment\u00E1rios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r88.comment, " ");
} }
function EventComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_td_50_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r91); const row_r89 = ctx.$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r90.putBackDeletedEvent(row_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Restaurar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " A\u00E7\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_td_53_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r94); const row_r92 = ctx.$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r93.openDialogx("Atualizar", row_r92); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_td_53_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r94); const row_r92 = ctx.$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r95.openDialogx("Apagar", row_r92); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r28.apagarLabel);
} }
function EventComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Laudo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_span_56_td_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/report-form/", ev_r99.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Laudo ", ev_r99.id, "");
} }
function EventComponent_span_56_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_span_56_td_1_a_1_Template, 2, 2, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r97 == 0);
} }
function EventComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EventComponent_span_56_td_1_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EventComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 66);
} }
function EventComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 67);
} }
const _c2 = function () { return [5, 10, 25, 100]; };
function EventStatusDialogComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EventStatusDialogComponent_mat_form_field_5_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.local_data.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "agendado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "confirmado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "aguardando");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "em atendimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "cancelado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.local_data.status);
} }
function EventStatusDialogComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " Deseja realmente apagar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "? ");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.local_data.title, " em ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, ctx_r2.local_data.start, "dd/MM/YY hh:mm a"), "");
} }
const statusList = ['Agendado', 'Confirmado', 'Cancelado',
    'Aguardando', 'Em Atendimento', 'Finalizado'];
class EventComponent {
    constructor(
    //public dialogRef: MatDialogRef<EventComponent>,
    apiService, cookieService, router, dialog, dialogx, utilsService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.dialogx = dialogx;
        this.utilsService = utilsService;
        //no effect
        //@ViewChild('eef') eventComponent: EventComponent;
        this.new_event = "New Event";
        this.eventsFiltered = [];
        this.eventss = [];
        // For Dialog with deleted events
        this.eventsAll = [];
        // selectedEvent: Event;
        //idComing: number;
        this.personas = [];
        this.kollegen = [];
        this.partners = [];
        this.eventsDel = []; // = this.eventss.filter(c => c.color=="#FFFFFF");
        this.toggleDel = true;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEdit"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrash"];
        this.trashOn = true;
        this.titleOn = true;
        this.hideme = [];
        this.eventInformation = [];
        this.apagarLabel = ' Apagar';
        //Mat table wt filter, pag, sort
        this.displayedColumns = ['confirm', 'start', 'title', 'insurance',
            'persona', 'kollege', 'partner', 'status', 'comment', 'action', 'laudo'];
        /*
        catchEvent(arg: Event) {
      
          document.getElementById('ec').hidden = true;
          // always 1
          //const idx = document.getElementById('evID').textContent
      
          const id = arg.id;
          console.log('got id', id);
          //this.router.navigate([`event-endo-form/${id}`],);
      
          //return this.idComing = id //? id : idx.slice(6,9999999).trim()
        }
        */
        //######//
        this.filterValues = {};
        this.filterSelectObj = [];
        //######//
        // Object to create Filter for
        this.filterSelectObj = [
            // {
            //   name: 'ID',
            //   columnProp: 'id',
            //   options: []
            // },
            {
                name: 'EXAME',
                columnProp: 'title',
                options: []
            },
            {
                name: 'CONVÊNIO',
                columnProp: 'insurance',
                options: []
            },
            {
                name: 'MÉDICO',
                columnProp: 'genericChar2',
                options: []
            },
            {
                name: 'PACIENTE',
                columnProp: 'genericChar1',
                options: []
            }
        ];
    }
    toggleEvs(ev) {
        //   if (ev.color == '#FFFFFF' && this.toggleDel==true) {
        return true;
        // }
        return true;
    }
    // eventForm: FormGroup;
    // id = null;
    // set event(value: Event) {
    //   this.id = value.id;
    //   // May be better: makes eventsForms an array of all personas
    //   // let x: string;
    //   // this.personas.forEach(el => {this.eventForm.value.persona==el.id?x=el.name:null});
    //   this.eventForm = new FormGroup({
    //     title: new FormControl(value.title),
    //     start: new FormControl(value.start),
    //     color: new FormControl(value.color),
    //     insurance: new FormControl(value.insurance),
    //     resourceId: new FormControl(value.resourceId),
    //     comment: new FormControl(value.comment),
    //     persona: new FormControl(value.persona),
    //     kollege: new FormControl(value.kollege),
    // });
    // }
    // newKollege() {}
    // newPersona() {}
    // saveForm() {}
    newEvent() {
        // this.router.navigate(['event-form'],);
    }
    editEvent(arg) { }
    // public showEventInfo(index,productId) {
    //   this.apiService.eventInfo(productId).subscribe((res:any)=>{
    //     this.eventInformation[index] = res;
    //   })
    //   this.hideme[index] = !this.hideme[index];
    //   this.Index = index;  
    // }
    // deleteEvent(event: Event) {}
    eventClicked(arg) {
        const id = arg.persona;
        // console.log('color', arg.color)
        //this.router.navigate([`persona-form-detail/${id}`],);
    }
    ngOnInit() {
        this.toggleName = "Show deleted";
        //hide event-endo-form
        document.getElementById('eef').hidden = true;
        const mrToken = this.cookieService.get('mr-token');
        console.log('mrToken on events:', mrToken);
        if (!mrToken) {
            this.router.navigate(['/auth']);
        }
        else {
            //this.getEvents();
            this.getPersonas();
            this.getKollegen();
            this.getEventsDel();
            this.getPartners();
            console.log('eventss on Init: ', this.eventss);
            // console.log('eventsDel: ', this.eventsDel);
        }
    }
    //Mat table
    ngAfterViewInit() {
        // If toggleDel is false, table shows only 'deleted'
        if (this.toggleDel) {
            //Dates filtered: less than 12h from now and more than 7days from now
            const today = Date.now();
            this.apiService.getEvents()
                .subscribe(events => {
                this.eventss = events.filter(ev => ev.color !== '#FFFFFF' && (new Date(ev.start).getTime() > today - 43200000 && new Date(ev.start).getTime() < today + 604800000)),
                    this.utilsService.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.eventss),
                    //console.log('ddd',this.utilsService.dataSource.data, this.utilsService.dataSource.filteredData, this.utilsService.dataSource)
                    //this.displayedColumns.push('restore');
                    //######//
                    // Overrride default filter behaviour of Material Datatable
                    this.utilsService.dataSource.filterPredicate = this.createFilter(),
                    this.utilsService.dataSource.data = this.eventss,
                    this.addPersonaNameToFilter(),
                    this.addKollegeNameToFilter(),
                    this.filterSelectObj.filter((o) => {
                        o.options = this.getFilterObject(this.eventss, o.columnProp);
                    });
                this.sincColorDel();
                //console.log('toggleDel', this.toggleDel);
                this.utilsService.dataSource.paginator = this.paginator,
                    this.utilsService.dataSource.sort = this.sort;
            });
        }
        else {
            this.apiService.getEvents()
                .subscribe(events => {
                this.eventss = events.filter(ev => ev.color == '#FFFFFF'),
                    this.utilsService.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.eventss),
                    this.displayedColumns.pop();
                //######//
                // Overrride default filter behaviour of Material Datatable
                this.utilsService.dataSource.filterPredicate = this.createFilter(),
                    this.utilsService.dataSource.data = this.eventss,
                    //this.addPersonaNameToFilter(),
                    //this.addKollegeNameToFilter(),
                    this.filterSelectObj.filter((o) => {
                        o.options = this.getFilterObject(this.eventss, o.columnProp);
                    });
                this.sincColorDel();
                //console.log('toggleDel', this.toggleDel);
                this.utilsService.dataSource.paginator = this.paginator,
                    this.utilsService.dataSource.sort = this.sort;
            });
        }
        // For dialog with deleted events
        this.apiService.getEvents()
            .subscribe(events => { this.eventsAll = events; });
    }
    addPersonaNameToFilter() {
        for (let item of this.utilsService.dataSource.data) {
            for (let per of this.personas) {
                if (item.persona === per.id) {
                    item.genericChar1 = per.name;
                }
            }
        }
    }
    addKollegeNameToFilter() {
        for (let item of this.utilsService.dataSource.data) {
            for (let kol of this.kollegen) {
                if (item.kollege === kol.id) {
                    item.genericChar2 = kol.name;
                }
            }
        }
    }
    //####
    // Get Uniqu values from columns to build filter
    getFilterObject(fullObj, key) {
        const uniqChk = [];
        fullObj.filter((obj) => {
            if (!uniqChk.includes(obj[key])) {
                uniqChk.push(obj[key]);
            }
            return obj;
        });
        return uniqChk;
    }
    //####
    // Called on Filter change
    filterChange(filter, event) {
        //let filterValues = {}
        this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase();
        this.utilsService.dataSource.filter = JSON.stringify(this.filterValues);
    }
    //####
    // Custom filter method fot Angular Material Datatable
    createFilter() {
        let filterFunction = function (data, filter) {
            let searchTerms = JSON.parse(filter);
            let isFilterSet = false;
            for (const col in searchTerms) {
                if (searchTerms[col].toString() !== '') {
                    isFilterSet = true;
                }
                else {
                    delete searchTerms[col];
                }
            }
            //console.log(searchTerms);
            let nameSearch = () => {
                let found = false;
                if (isFilterSet) {
                    for (const col in searchTerms) {
                        searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
                            if (data[col].toString().toLowerCase().indexOf(word) != -1 &&
                                word !== 'de' &&
                                word !== 'do' &&
                                word !== 'da' &&
                                isFilterSet) {
                                found = true;
                            }
                        });
                    }
                    return found;
                }
                else {
                    return true;
                }
            };
            return nameSearch();
        };
        return filterFunction;
    }
    //####
    // Reset table filters
    resetFilters() {
        this.filterValues = {};
        this.filterSelectObj.forEach((value, key) => {
            value.modelValue = undefined;
        });
        this.utilsService.dataSource.filter = "";
    }
    //Doesnt function with the custom filters
    applyFilter(event) {
        //persona is a number so the name is not detected
        const filterValue = event.target.value;
        console.log('filterValue:', filterValue, this.personas, this.utilsService.dataSource);
        this.utilsService.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.utilsService.dataSource.paginator) {
            this.utilsService.dataSource.paginator.firstPage();
        }
    }
    //////////eventss por events
    getEvents() {
        this.apiService.getEvents()
            .subscribe(events => this.eventss = events);
        // .subscribe(events => this.eventss = events.filter(ev => ev.color="#FFFFFF"));    // .subscribe(events => {for (let ev of events) {if (ev.title == 'eda') {}}});
        // this.eventsFiltered = this.eventss.filter(ev => ev.title=='eda');
        // console.log('events: ', this.eventss);
    }
    getEventsDel() {
        this.apiService.getEvents()
            .subscribe(events => this.eventsDel = events.filter(c => c.color == '#FFFFFF'));
        // .subscribe(events => this.eventss = events.filter(ev => ev.color="#FFFFFF"));    // .subscribe(events => {for (let ev of events) {if (ev.title == 'eda') {}}});
        // this.eventsFiltered = this.eventss.filter(ev => ev.title=='eda');
        console.log('eventsDel: ', this.eventsDel);
    }
    getPersonas() {
        this.apiService.getPersonas()
            .subscribe(data => this.personas = data);
        // console.log('personas: ', this.personas);
    }
    getKollegen() {
        this.apiService.getKollegen()
            .subscribe(data => this.kollegen = data);
        // console.log('kollegen: ', this.kollegen);
    }
    getPartners() {
        this.apiService.getPartners()
            .subscribe(data => this.partners = data);
    }
    // onSelect(event: Event) {
    //   this.selectedEvent = event;
    //   this.messageService.add(`ApiService: Selected event id=${event.id}`);
    // }
    add(title, start, color, insurance, resourceId, comment, persona, kollege) {
        // if (!event) { return; }
        // this.apiService.addEvent({ title, start, color,
        //   insurance, resourceId, comment,
        //   persona, kollege } as Event)
        //   .subscribe(event => {
        //     this.events.push(event);
        //   });
    }
    //////////eventss por events
    deleteEvent(event) {
        if (confirm(`Are you sure you want to DELETE this event '${event.title}'`)) {
            event.color = '#FFFFFF';
            event.status = 'cancelado';
            // this.eventss = this.eventss.filter(h => h !== event);
            // this.apiService.deleteEvent(event).subscribe();
            this.apiService.putEventDel(event.id, event.title, event.start, event.color, event.status, event.persona, event.kollege).subscribe();
        }
        //location.reload();
        // Does function with data still in the db
        //this.evtable.renderRows();
    }
    sincColorDel() {
        for (let ev of this.eventss) {
            if (ev.color == '#FFFFFF') {
                ev.status = 'cancelado';
                this.apiService.putEventConf(ev.id, ev.title, ev.partner, ev.start, ev.color, ev.status, ev.addtitle2, ev.persona, ev.kollege, ev.genericChar1, ev.genericNumber1).subscribe();
            }
        }
    }
    confirmEvent(event) {
        if (confirm(`Are you sure you want to CONFIRM this event '${event.title}'`)) {
            event.color = '#008000';
            event.status = 'confirmado';
            console.log('passed event', event.status);
            // this.eventss = this.eventss.filter(h => h !== event);
            // this.apiService.deleteEvent(event).subscribe();
            this.apiService.putEventConf(event.id, event.title, event.partner, event.start, event.color, event.status, event.addtitle2, event.persona, event.kollege, event.genericChar1, event.genericNumber1).subscribe();
        }
        // this.router.navigate(['calendar'],);
        //location.reload();
    }
    toggleDelShow() {
        this.toggleDel = !this.toggleDel;
        if (this.toggleDel == false) {
            if (!this.displayedColumns.includes('restore')) {
                this.displayedColumns.push('restore');
            }
            this.toggleName = "Hide deleted";
            document.getElementById("toggleDelBt").textContent = "Hide deleted";
            this.apagarLabel = '';
            // TO SELECT THE DELETED ROWS
            let local_data;
            this.apiService.getEvents()
                .subscribe(events => {
                local_data = events.filter(ev => ev.color == '#FFFFFF');
                this.utilsService.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](local_data);
            });
        }
        else {
            this.toggleActiveFunction();
            this.toggleName = "Show deleted";
            document.getElementById("toggleDelBt").textContent = "Show deleted";
            this.apagarLabel = ' Apagar';
        }
        //location.reload();
    }
    toggleActiveFunction() {
        this.apiService.getEvents()
            .subscribe(events => {
            this.eventss = events.filter(ev => ev.color !== '#FFFFFF'),
                this.utilsService.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.eventss);
            //console.log('ddd',this.utilsService.dataSource.data, this.utilsService.dataSource);
            const displayedColumns = ['confirm', 'start', 'title', 'insurance',
                'persona', 'kollege', 'partner', 'status', 'comment', 'action', 'laudo'];
            this.displayedColumns = displayedColumns;
            //######//
            // Overrride default filter behaviour of Material Datatable
            this.utilsService.dataSource.filterPredicate = this.createFilter(),
                this.utilsService.dataSource.data = this.eventss,
                this.addPersonaNameToFilter(),
                this.addKollegeNameToFilter(),
                this.filterSelectObj.filter((o) => {
                    o.options = this.getFilterObject(this.eventss, o.columnProp);
                });
            // this.sincColorDel();
            //console.log('toggleDel', this.toggleDel);
            this.utilsService.dataSource.paginator = this.paginator;
            //  this.dataSource.sort = this.sort
        });
    }
    toggleDelFunction() {
        /*
          this.apiService.getEvents()
          .subscribe(events => {this.eventss = events.filter(ev => ev.color == '#FFFFFF'),
                                this.dataSource = new MatTableDataSource(this.eventss),
      
                                  //######//
                                // Overrride default filter behaviour of Material Datatable
                                this.dataSource.filterPredicate = this.createFilter(),
                                this.dataSource.data = this.eventss,
                                this.addPersonaNameToFilter(),
                                this.addKollegeNameToFilter(),
                                this.filterSelectObj.filter((o) => {
                                  o.options = this.getFilterObject(this.eventss, o.columnProp);
                                });
                               // this.sincColorDel();
                          //console.log('toggleDel', this.toggleDel);
                                this.dataSource.paginator = this.paginator
                              //  this.dataSource.sort = this.sort
                                });
                */
    }
    /*
      openDialog() {
        //let local_evs = this.eventss;
        console.log('evss on dial',this.eventss);
        const dialogRef = this.dialog.open(DeletedDialog, {
          width: '450px',
          maxHeight: '400px',
          data: this.eventsAll.filter(x => x.color == '#FFFFFF'),
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          //this.router.navigate(['calendar'],);
          //location.reload();
          //local_evs = result;
          //this.eventss = result;
          console.log('res',result);
          // Inadequate but cannot show cancelados again if not refresshed
          // Corrected with local variables above or not resetting eventss wth 'this.eventss = result'
          //location.reload();
        });
      }
      */
    openDialogx(action, dataobj) {
        console.log('at openDialogx', dataobj, dataobj.action); //event obj, undefined
        dataobj.action = action;
        console.log('at openDialogx', dataobj); //str, str
        const dialogRefx = this.dialogx.open(EventStatusDialogComponent, {
            width: '250px',
            data: dataobj
        });
        dialogRefx.afterClosed().subscribe(result => {
            // console.log('result.event', result, result.event);
            if (result.event == 'Novo') {
                this.addRowData(result.data);
            }
            else if (result.event == 'Atualizar') {
                //  console.log('afterclose', result, result.data);
                this.updateRowData(result.data); //passes an event
            }
            else if (result.event == 'Apagar') {
                this.deleteRowData(result.data);
            }
        });
    }
    addRowData(row_obj) {
        /*  var d = 1;
          this.dataSource.data.push({
            id:d,
            title:row_obj.title
            ...
            ...
          });
          this.evtable.renderRows();
          */
    }
    updateRowData(row_obj) {
        //Needs to touch db
        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((valu, key) => {
            if (valu.id == row_obj.id) {
                console.log('value:', valu.id, valu, row_obj, this.utilsService.dataSource.data); // value and row_obj are two differ obj with the same values
                valu.status = row_obj.status;
                this.apiService.putEventConf(valu.id, valu.title, valu.partner, valu.start, valu.color, valu.status, valu.addtitle2, valu.persona, valu.kollege, valu.genericChar1, valu.genericNumber1)
                    .subscribe();
            }
            return true;
        });
    }
    putBackDeletedEvent(arg) {
        //console.log('arg putback: ', arg);
        //console.log('data deletedDial: ', this.data);
        //this.toggleActiveFunction();
        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((value, key) => {
            if (value.id == arg.id) {
                console.log(value.id, arg.id);
                const color = '';
                const status = 'agendado';
                this.apiService.putEventConf(arg.id, arg.title, arg.partner, arg.start, color, status, arg.addtitle2, arg.persona, arg.kollege, arg.genericChar1, arg.genericNumber1).subscribe();
                //this.dialogRef.close();
            }
            return true;
        });
        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((value, key) => {
            return value.id !== arg.id;
        });
        if (this.utilsService.dataSource.data.length < 1) {
            setTimeout(() => this.toggleActiveFunction(), 300);
            this.toggleName = "Show deleted";
            document.getElementById("toggleDelBt").textContent = "Show deleted";
        }
        //setTimeout(() => this.toggleActiveFunction(), 4000);
        //setTimeout(() => this.router.navigate(['/calendar']), 5000);
        // toggleActiveFunction needs to be assync. So, an observable shall be better
        // without a delay, the view does not change and does not show up with the retored evento
        //setTimeout(_ => this.toggleActiveFunction(), 500);
    }
    deleteRowData(row_obj) {
        // Just hide but doesnt touch db. This bit of code changes the view without refreshing.
        // For this to happen, return false to the filter
        this.utilsService.dataSource.data = this.utilsService.dataSource.data.filter((value, key) => {
            return value.id !== row_obj.id;
        });
        // Even if there is no change in color or status, the view drops the pseudodeleted row that shows up again after refreshing
        row_obj.color = '#FFFFFF';
        row_obj.status = 'cancelado';
        this.apiService.putEventConf(row_obj.id, row_obj.title, row_obj.partner, row_obj.start, row_obj.color, row_obj.status, row_obj.addtitle2, row_obj.persona, row_obj.kollege, row_obj.genericChar1, row_obj.genericNumber1).subscribe();
        // This way needs refreshing to change view
        // SO, needs to change the passed arg, row_obj?
        /*   this.dataSource.data = this.dataSource.data.filter((value,key)=>{
             if (value.id == row_obj.id) {
             value.color = '#FFFFFF';
             value.status = 'cancelado';
             row_obj.color = '#FFFFFF';
             row_obj.status = 'cancelado';
             this.apiService.putEventConf(value.id, value.title, value.partner, value.start,
                                         value.color, value.status, value.persona,
                                         value.kollege, value.genericChar1, value.genericNumber1)
                                         .subscribe();
             }
             return true;
           });
        */
    }
}
EventComponent.ɵfac = function EventComponent_Factory(t) { return new (t || EventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"])); };
EventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EventComponent, selectors: [["app-event"]], viewQuery: function EventComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.evtable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { eventss: "eventss", personas: "personas", kollegen: "kollegen", partners: "partners" }, decls: 61, vars: 10, consts: [["id", "ec"], ["ec", ""], ["mat-button", "", "mat-flat-button", "", "color", "primary", 3, "click"], [2, "margin-left", "10px"], ["style", "padding-left: 0px;padding-right: 10px;padding-top: 40px;", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["id", "toggleDelBt", "mat-flat-button", "", "color", "warn", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["evtable", ""], ["matColumnDef", "confirm"], ["class", "col-center", "style", "background-color: rgb(189, 250, 189);", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "col-center", "style", "background-color: rgb(189, 250, 189);", "mat-cell", "", 4, "matCellDef"], ["elseTemplate", ""], ["matColumnDef", "del"], ["class", "col-center", "style", "background-color:rgb(252, 235, 252)", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "start"], ["class", "col-center", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "title"], ["class", "col-center", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "insurance"], ["class", "col-center", "mat-cell", "", 3, "hidden", 4, "matCellDef"], ["matColumnDef", "persona"], ["class", "col-center", "mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "kollege"], ["matColumnDef", "partner"], ["matColumnDef", "status"], ["class", "col-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "comment"], ["matColumnDef", "restore"], ["matColumnDef", "action"], ["class", "col-center", "style", "background-color:rgb(252, 235, 252)", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "col-center", "style", "background-color:rgb(252, 235, 252)", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "laudo"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [2, "padding-left", "0px", "padding-right", "10px", "padding-top", "40px"], ["matNativeControl", "", 3, "name", "ngModel", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-center", 2, "background-color", "rgb(189, 250, 189)"], ["mat-cell", "", 1, "col-center", 2, "background-color", "rgb(189, 250, 189)"], [4, "ngIf"], [3, "click", 4, "ngIf"], [3, "icon", "ngClass"], [3, "click"], ["matSuffix", "", 1, "handPointer"], ["matSuffix", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-center", 2, "background-color", "rgb(252, 235, 252)"], ["class", "col-center", "style", "background-color:rgb(252, 235, 252)", "mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-cell", "", 1, "col-center", 2, "background-color", "rgb(252, 235, 252)", 3, "click"], [3, "icon", "ngClass", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-center"], ["mat-cell", "", 1, "col-center"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], ["mat-cell", "", 1, "col-center", 3, "click"], [2, "color", "rgb(29, 85, 168)", "cursor", "pointer", 3, "click"], ["mat-header-cell", "", 1, "col-center", 2, "background-color", "rgb(252, 235, 252)"], ["mat-cell", "", 1, "col-center", 2, "background-color", "rgb(252, 235, 252)"], [2, "color", "rgb(160, 36, 36)", "cursor", "pointer", 3, "click"], ["id", "evID", "style", "color:rgb(4, 156, 57); cursor: pointer", 3, "routerLink", 4, "ngIf"], ["id", "evID", 2, "color", "rgb(4, 156, 57)", "cursor", "pointer", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function EventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_Template_button_click_2_listener() { return ctx.openDialogx("Novo", {}); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Novo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, EventComponent_mat_form_field_5_Template, 7, 5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_Template_button_click_7_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventComponent_Template_button_click_10_listener() { return ctx.toggleDelShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "table", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, EventComponent_th_16_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, EventComponent_td_17_Template, 5, 4, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, EventComponent_ng_template_18_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, EventComponent_th_21_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, EventComponent_span_22_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, EventComponent_th_25_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, EventComponent_span_26_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](27, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, EventComponent_th_28_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, EventComponent_td_29_Template, 2, 4, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](30, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, EventComponent_th_31_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, EventComponent_td_32_Template, 2, 3, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](33, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, EventComponent_th_34_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, EventComponent_td_35_Template, 2, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](36, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, EventComponent_th_37_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, EventComponent_td_38_Template, 2, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](39, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, EventComponent_th_40_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, EventComponent_td_41_Template, 2, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](42, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, EventComponent_th_43_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, EventComponent_td_44_Template, 3, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](45, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, EventComponent_th_46_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, EventComponent_td_47_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](48, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, EventComponent_th_49_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, EventComponent_td_50_Template, 3, 0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](51, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, EventComponent_th_52_Template, 2, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, EventComponent_td_53_Template, 5, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](54, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, EventComponent_th_55_Template, 2, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, EventComponent_span_56_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, EventComponent_tr_57_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, EventComponent_tr_58_Template, 1, 0, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "mat-paginator", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "report-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterSelectObj);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.toggleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.utilsService.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.eventss);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.eventss);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.eventss);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c2));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _report_report_form_report_form_component__WEBPACK_IMPORTED_MODULE_12__["ReportFormComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_x"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["fa-icon.green[_ngcontent-%COMP%] {\n    color: green;\n}\n\n#kol-plus[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 2em;\n}\n\n#per-plus[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 2em;\n}\n\n.handPointer[_ngcontent-%COMP%] {\n    cursor: pointer;\n    \n}\n\n.leftAlign[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-left: 15px;\n}\n\n.rightAlign[_ngcontent-%COMP%] {\n    text-align: right;\n    margin-left: 15px;\n}\n\nfa-icon.orange[_ngcontent-%COMP%] {\n    color: crimson;\n    align-items: left;\n    cursor: pointer;\n    padding-left: 0px;\n}\n\nfa-icon.blue[_ngcontent-%COMP%] {\n  color: blue;\n  align-items: right;\n  \n  padding-left: 0px;\n}\n\n.col-right[_ngcontent-%COMP%]{\n    text-align: right;\n}\n\n.col-center[_ngcontent-%COMP%]{\n    text-align: center;\n    padding: 15px;\n}\n\n\n\n\n\n@media all{  \n \n    *[_ngcontent-%COMP%]{padding:0px;margin:0px;}  \n \n\n \nimg[_ngcontent-%COMP%]{max-width:100%;}  \n \nhtml[_ngcontent-%COMP%] {-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;}  \n \nbody[_ngcontent-%COMP%]{overflow:auto!important; width:100%!important;}  \n \nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{background-color:#e4e5e6;}  \n \nhtml[_ngcontent-%COMP%] {position:relative; min-height:100%;}  \n\n  \n.card[_ngcontent-%COMP%]{border-radius:4px;}  \n\n.card-header[_ngcontent-%COMP%]:first-child {border-radius:4px 4px 0px 0px;}  \n\n  \n  \n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif; font-weight:400; font-size:13px;}  \n\nbody[_ngcontent-%COMP%]{padding-top:52px;}  \n\np[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif; color:#303030; font-weight:400; margin-bottom:1rem;}  \n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif;}  \n  \n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:'Roboto', sans-serif; font-weight:700;}  \n\nh1[_ngcontent-%COMP%]{font-size:20px; color:#000000; margin-bottom:10px;}  \n\nh2[_ngcontent-%COMP%]{font-size:30px;}  \n\nh3[_ngcontent-%COMP%]{font-size:24px;}  \n\nh4[_ngcontent-%COMP%]{font-size:18px;}  \n\nh5[_ngcontent-%COMP%]{font-size:14px;}  \n\nh6[_ngcontent-%COMP%]{font-size:12px;}  \n\n  \n\n.row[_ngcontent-%COMP%] {margin-right:-8px; margin-left:-8px;}  \n\n.col[_ngcontent-%COMP%], .col-1[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {padding-right:8px; padding-left:8px;}  \n\n  \n\n.card-header[_ngcontent-%COMP%]{background-color:#f0f3f5; border-bottom:1px solid #c8ced3; font-size:13px; font-weight:600; color:#464646; text-transform:uppercase; padding:.75rem 8px;}  \n\n  \n\n.cnstr-record[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{white-space:nowrap;padding:.45rem .2rem; font-size:13px; border-bottom-width:0px!important;}  \n\n.cnstr-record[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#f0f3f5;}  \n\n\n.cnstr-record[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-size:13px; padding:0px 0rem 0px 0.2rem; height:calc(2rem + 2px);}  \n\n.cnstr-record[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%]{padding-left:.05rem;}  \n\n\n\n.cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.3rem;}  \n\n.cnstr-record[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0px;}  \n\n\n.wp-50[_ngcontent-%COMP%]{width:50px;}  \n\n.wp-60[_ngcontent-%COMP%]{width:60px;}  \n\n.wp-70[_ngcontent-%COMP%]{width:70px;}  \n\n.wp-80[_ngcontent-%COMP%]{width:80px;}  \n\n.wp-90[_ngcontent-%COMP%]{width:90px;}  \n\n.wp-100[_ngcontent-%COMP%]{width:100px;}  \n\n.mw-auto[_ngcontent-%COMP%]{min-width:inherit;}  \n\n.expand-row[_ngcontent-%COMP%]{width:100%; border:solid 1px #596269; display:inline-block; border-radius:3px; width:16px; height:16px; vertical-align:top; background:#596269; color:#ffffff!important;}  \n\n.expand-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:top; position:relative; top:2px;}  \n\n.sub-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:400; font-size:12px;}  \n\n.sub-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#efefef;}  \n\n.no-bg[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:inherit;}  \n\n.mw-100[_ngcontent-%COMP%]{max-width:100%;}  \n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztFQUlFO0lBQ0UsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQSx5QkFBeUI7O0FBRXpCLGlCQUFpQjs7QUFFakI7O0lBRUksRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDOztBQUU3QiwrQkFBK0I7O0FBRS9CLElBQUksY0FBYyxDQUFDOztBQUVuQixNQUFNLGtDQUFrQyxFQUFFLGlDQUFpQyxDQUFDOztBQUU1RSxLQUFLLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDOztBQUVuRCxXQUFXLHdCQUF3QixDQUFDOztBQUVwQyxNQUFNLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzs7O0FBR3pDLE1BQU0saUJBQWlCLENBQUM7O0FBRXhCLDBCQUEwQiw2QkFBNkIsQ0FBQzs7O0FBR3hELFVBQVU7O0FBRVYsV0FBVyxnQ0FBZ0MsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDOztBQUU3RSxLQUFLLGdCQUFnQixDQUFDOztBQUV0QixFQUFFLGdDQUFnQyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7O0FBRXZGLHdCQUF3QixnQ0FBZ0MsQ0FBQzs7O0FBR3pELGtCQUFrQixnQ0FBZ0MsRUFBRSxlQUFlLENBQUM7O0FBRXBFLEdBQUcsY0FBYyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQzs7QUFFckQsR0FBRyxjQUFjLENBQUM7O0FBRWxCLEdBQUcsY0FBYyxDQUFDOztBQUVsQixHQUFHLGNBQWMsQ0FBQzs7QUFFbEIsR0FBRyxjQUFjLENBQUM7O0FBRWxCLEdBQUcsY0FBYyxDQUFDOzs7O0FBSWxCLE1BQU0saUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7O0FBRTFDLDR1QkFBNHVCLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDOzs7O0FBSWh4QixhQUFhLHdCQUF3QixFQUFFLCtCQUErQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixDQUFDOzs7O0FBSXJLLGlCQUFpQixrQkFBa0IsQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsaUNBQWlDLENBQUM7O0FBRTVHLG9CQUFvQixrQkFBa0IsQ0FBQzs7O0FBR3ZDLDRCQUE0QixjQUFjLEVBQUUsMkJBQTJCLEVBQUUsdUJBQXVCLENBQUM7O0FBRWpHLGtDQUFrQyxtQkFBbUIsQ0FBQzs7QUFFdEQsZ0ZBQWdGOztBQUVoRix3QkFBd0IsYUFBYSxDQUFDOztBQUV0QywyQkFBMkIsVUFBVSxDQUFDOzs7QUFHdEMsT0FBTyxVQUFVLENBQUM7O0FBRWxCLE9BQU8sVUFBVSxDQUFDOztBQUVsQixPQUFPLFVBQVUsQ0FBQzs7QUFFbEIsT0FBTyxVQUFVLENBQUM7O0FBRWxCLE9BQU8sVUFBVSxDQUFDOztBQUVsQixRQUFRLFdBQVcsQ0FBQzs7QUFFcEIsU0FBUyxpQkFBaUIsQ0FBQzs7QUFFM0IsWUFBWSxVQUFVLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQzs7QUFFcEwsZ0JBQWdCLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLE9BQU8sQ0FBQzs7QUFFL0QsY0FBYyxlQUFlLEVBQUUsY0FBYyxDQUFDOztBQUU5QyxjQUFjLGtCQUFrQixDQUFDOztBQUVqQyxVQUFVLGtCQUFrQixDQUFDOztBQUU3QixRQUFRLGNBQWMsQ0FBQzs7O0FBR3ZCIiwiZmlsZSI6ImV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbiAgZmEtaWNvbi5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4ja29sLXBsdXMgZmEtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4jcGVyLXBsdXMgZmEtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uaGFuZFBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKiBjb2xvcjogcmVkOyAqL1xufVxuXG4ubGVmdEFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnJpZ2h0QWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5mYS1pY29uLm9yYW5nZSB7XG4gICAgY29sb3I6IGNyaW1zb247XG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5mYS1pY29uLmJsdWUge1xuICBjb2xvcjogYmx1ZTtcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uY29sLXJpZ2h0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY29sLWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLyogQGNoYXJzZXQgXCJ1dGYtOFwiOyAgICAqL1xuIFxuLyogQ1NTIERvY3VtZW50ICovICBcbiBcbkBtZWRpYSBhbGx7ICBcbiBcbiAgICAqe3BhZGRpbmc6MHB4O21hcmdpbjowcHg7fSAgXG4gXG4vKiBkaXZ7dmVydGljYWwtYWxpZ246dG9wO30gICAqL1xuIFxuaW1ne21heC13aWR0aDoxMDAlO30gIFxuIFxuaHRtbCB7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDsgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlO30gIFxuIFxuYm9keXtvdmVyZmxvdzphdXRvIWltcG9ydGFudDsgd2lkdGg6MTAwJSFpbXBvcnRhbnQ7fSAgXG4gXG5odG1sLCBib2R5e2JhY2tncm91bmQtY29sb3I6I2U0ZTVlNjt9ICBcbiBcbmh0bWwge3Bvc2l0aW9uOnJlbGF0aXZlOyBtaW4taGVpZ2h0OjEwMCU7fSAgXG5cbiAgXG4uY2FyZHtib3JkZXItcmFkaXVzOjRweDt9ICBcblxuLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtib3JkZXItcmFkaXVzOjRweCA0cHggMHB4IDBweDt9ICBcblxuICBcbi8qVHlwZWtpdCovICBcblxuaHRtbCwgYm9keXtmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6NDAwOyBmb250LXNpemU6MTNweDt9ICBcblxuYm9keXtwYWRkaW5nLXRvcDo1MnB4O30gIFxuXG5we2ZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmOyBjb2xvcjojMzAzMDMwOyBmb250LXdlaWdodDo0MDA7IG1hcmdpbi1ib3R0b206MXJlbTt9ICBcblxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3R7Zm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7fSAgXG4gIFxuXG5oMSxoMixoMyxoNCxoNSxoNntmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6NzAwO30gIFxuXG5oMXtmb250LXNpemU6MjBweDsgY29sb3I6IzAwMDAwMDsgbWFyZ2luLWJvdHRvbToxMHB4O30gIFxuXG5oMntmb250LXNpemU6MzBweDt9ICBcblxuaDN7Zm9udC1zaXplOjI0cHg7fSAgXG5cbmg0e2ZvbnQtc2l6ZToxOHB4O30gIFxuXG5oNXtmb250LXNpemU6MTRweDt9ICBcblxuaDZ7Zm9udC1zaXplOjEycHg7fSAgXG5cbiAgXG5cbi5yb3cge21hcmdpbi1yaWdodDotOHB4OyBtYXJnaW4tbGVmdDotOHB4O30gIFxuXG4uY29sLCAuY29sLTEsIC5jb2wtMTAsIC5jb2wtMTEsIC5jb2wtMTIsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLWF1dG8sIC5jb2wtbGcsIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctYXV0bywgLmNvbC1tZCwgLmNvbC1tZC0xLCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1tZC1hdXRvLCAuY29sLXNtLCAuY29sLXNtLTEsIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXNtLWF1dG8sIC5jb2wteGwsIC5jb2wteGwtMSwgLmNvbC14bC0xMCwgLmNvbC14bC0xMSwgLmNvbC14bC0xMiwgLmNvbC14bC0yLCAuY29sLXhsLTMsIC5jb2wteGwtNCwgLmNvbC14bC01LCAuY29sLXhsLTYsIC5jb2wteGwtNywgLmNvbC14bC04LCAuY29sLXhsLTksIC5jb2wteGwtYXV0byB7cGFkZGluZy1yaWdodDo4cHg7IHBhZGRpbmctbGVmdDo4cHg7fSAgXG5cbiAgXG5cbi5jYXJkLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMGYzZjU7IGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjOGNlZDM7IGZvbnQtc2l6ZToxM3B4OyBmb250LXdlaWdodDo2MDA7IGNvbG9yOiM0NjQ2NDY7IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgcGFkZGluZzouNzVyZW0gOHB4O30gIFxuXG4gIFxuXG4uY25zdHItcmVjb3JkIHRoe3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nOi40NXJlbSAuMnJlbTsgZm9udC1zaXplOjEzcHg7IGJvcmRlci1ib3R0b20td2lkdGg6MHB4IWltcG9ydGFudDt9ICBcblxuLmNuc3RyLXJlY29yZCB0aGVhZHtiYWNrZ3JvdW5kOiNmMGYzZjU7fSAgXG5cblxuLmNuc3RyLXJlY29yZCAuZm9ybS1jb250cm9se2ZvbnQtc2l6ZToxM3B4OyBwYWRkaW5nOjBweCAwcmVtIDBweCAwLjJyZW07IGhlaWdodDpjYWxjKDJyZW0gKyAycHgpO30gIFxuXG4uY25zdHItcmVjb3JkIHNlbGVjdC5mb3JtLWNvbnRyb2x7cGFkZGluZy1sZWZ0Oi4wNXJlbTt9ICBcblxuLyogLmNuc3RyLXJlY29yZCAudGFibGUgdGQsIC5jbnN0ci1yZWNvcmQgLnRhYmxlIHRoIHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7fSAgICovXG5cbi5jbnN0ci1yZWNvcmQgLnRhYmxlIHRke3BhZGRpbmc6LjNyZW07fSAgXG5cbi5jbnN0ci1yZWNvcmQgLnRhYmxlIHRkIGg0e21hcmdpbjowcHg7fSAgXG5cblxuLndwLTUwe3dpZHRoOjUwcHg7fSAgXG5cbi53cC02MHt3aWR0aDo2MHB4O30gIFxuXG4ud3AtNzB7d2lkdGg6NzBweDt9ICBcblxuLndwLTgwe3dpZHRoOjgwcHg7fSAgXG5cbi53cC05MHt3aWR0aDo5MHB4O30gIFxuXG4ud3AtMTAwe3dpZHRoOjEwMHB4O30gIFxuXG4ubXctYXV0b3ttaW4td2lkdGg6aW5oZXJpdDt9ICBcblxuLmV4cGFuZC1yb3d7d2lkdGg6MTAwJTsgYm9yZGVyOnNvbGlkIDFweCAjNTk2MjY5OyBkaXNwbGF5OmlubGluZS1ibG9jazsgYm9yZGVyLXJhZGl1czozcHg7IHdpZHRoOjE2cHg7IGhlaWdodDoxNnB4OyB2ZXJ0aWNhbC1hbGlnbjp0b3A7IGJhY2tncm91bmQ6IzU5NjI2OTsgY29sb3I6I2ZmZmZmZiFpbXBvcnRhbnQ7fSAgXG5cbi5leHBhbmQtcm93IGltZ3t2ZXJ0aWNhbC1hbGlnbjp0b3A7IHBvc2l0aW9uOnJlbGF0aXZlOyB0b3A6MnB4O30gIFxuXG4uc3ViLXRhYmxlIHRoe2ZvbnQtd2VpZ2h0OjQwMDsgZm9udC1zaXplOjEycHg7fSAgXG5cbi5zdWItdGFibGUgdGR7YmFja2dyb3VuZDojZWZlZmVmO30gIFxuXG4ubm8tYmcgdGR7YmFja2dyb3VuZDppbmhlcml0O30gIFxuXG4ubXctMTAwe21heC13aWR0aDoxMDAlO30gIFxuXG5cbn0gICJdfQ== */"] });
class EventStatusDialogComponent {
    constructor(dialogRefx, data) {
        this.dialogRefx = dialogRefx;
        this.data = data;
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
    }
    doAction() {
        this.dialogRefx.close({ event: this.action, data: this.local_data });
    }
    closeDialogx() {
        this.dialogRefx.close({ event: 'Cancel' });
    }
}
EventStatusDialogComponent.ɵfac = function EventStatusDialogComponent_Factory(t) { return new (t || EventStatusDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"], 8)); };
EventStatusDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EventStatusDialogComponent, selectors: [["event-status-dialog"]], decls: 13, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "mat-flat-button", "", "color", "warn", 3, "click"], ["type", "text", "placeholder", "Estado", 3, "ngModel", "ngModelChange"], ["value", "agendado"], ["value", "confirmado"], ["value", "aguardando", "disabled", ""], ["value", "em_atendimento", "disabled", ""], ["value", "cancelado"]], template: function EventStatusDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Voc\u00EA vai :: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, EventStatusDialogComponent_mat_form_field_5_Template, 14, 1, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, EventStatusDialogComponent_ng_template_6_Template, 5, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventStatusDialogComponent_Template_button_click_9_listener() { return ctx.doAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventStatusDialogComponent_Template_button_click_11_listener() { return ctx.closeDialogx(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.action !== "Apagar")("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.action);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zknQ":
/*!*******************************************!*\
  !*** ./src/app/guards/reception.guard.ts ***!
  \*******************************************/
/*! exports provided: ReceptionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceptionGuard", function() { return ReceptionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/api.service */ "hD8V");




class ReceptionGuard {
    constructor(cookieService, router, apiService) {
        this.cookieService = cookieService;
        this.router = router;
        this.apiService = apiService;
    }
    canActivate(route, state) {
        let currentUser = this.cookieService.get('currentUser');
        if (currentUser == 'contato@digest.com' ||
            currentUser == 'mans@ufc.br') {
            return true;
        }
        else {
            this.router.navigate(['/auth']);
            return false;
        }
    }
}
ReceptionGuard.ɵfac = function ReceptionGuard_Factory(t) { return new (t || ReceptionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ReceptionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReceptionGuard, factory: ReceptionGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map