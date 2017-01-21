"use strict";
var core_1 = require('@angular/core');
var router_1 = require("nativescript-angular/router");
var home_component_1 = require('./home/home.component');
var book_list_component_1 = require('./book-list/book-list.component');
var book_details_component_1 = require('./book-details/book-details.component');
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'books',
        component: book_list_component_1.BookListComponent
    },
    {
        path: 'books/:isbn',
        component: book_details_component_1.BookDetailsComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsdUJBQXlDLDZCQUE2QixDQUFDLENBQUE7QUFFdkUsK0JBQThCLHVCQUF1QixDQUFDLENBQUE7QUFDdEQsb0NBQWtDLGlDQUFpQyxDQUFDLENBQUE7QUFDcEUsdUNBQXFDLHVDQUF1QyxDQUFDLENBQUE7QUFFN0UsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsdUNBQWlCO0tBQzdCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixTQUFTLEVBQUUsNkNBQW9CO0tBQ2hDO0NBQ0YsQ0FBQztBQU9GO0lBQUE7SUFBZ0MsQ0FBQztJQUxqQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztZQUNuQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O3dCQUFBO0lBQzhCLHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQix3QkFBZ0IsbUJBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcyAgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm9va0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm9va0RldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgcmVkaXJlY3RUbzogJ2hvbWUnLFxyXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdob21lJyxcclxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2Jvb2tzJyxcclxuICAgIGNvbXBvbmVudDogQm9va0xpc3RDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdib29rcy86aXNibicsXHJcbiAgICBjb21wb25lbnQ6IEJvb2tEZXRhaWxzQ29tcG9uZW50XHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19