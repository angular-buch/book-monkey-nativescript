"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require('@angular/forms');
var http_1 = require('nativescript-angular/http'); // NEW
var home_component_1 = require('./home/home.component');
var book_list_component_1 = require('./book-list/book-list.component');
var book_list_item_component_1 = require('./book-list-item/book-list-item.component');
var book_details_component_1 = require('./book-details/book-details.component');
var book_store_service_1 = require('./shared/book-store.service');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                book_list_component_1.BookListComponent,
                book_list_item_component_1.BookListItemComponent,
                book_details_component_1.BookDetailsComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.FormsModule,
                http_1.NativeScriptHttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                book_store_service_1.BookStoreService
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxvQ0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QyxxQkFBd0MsMkJBQTJCLENBQUMsQ0FBQSxDQUFDLE1BQU07QUFFM0UsK0JBQThCLHVCQUF1QixDQUFDLENBQUE7QUFDdEQsb0NBQWtDLGlDQUFpQyxDQUFDLENBQUE7QUFDcEUseUNBQXNDLDJDQUEyQyxDQUFDLENBQUE7QUFDbEYsdUNBQXFDLHVDQUF1QyxDQUFDLENBQUE7QUFFN0UsbUNBQWlDLDZCQUE2QixDQUFDLENBQUE7QUFDL0QsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFFeEQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFzQi9DO0lBQUE7SUFBeUIsQ0FBQztJQXBCMUI7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsdUNBQWlCO2dCQUNqQixnREFBcUI7Z0JBQ3JCLDZDQUFvQjthQUN2QjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsbUJBQVc7Z0JBQ1gsNkJBQXNCO2dCQUN0QixxQ0FBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AscUNBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSAgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwJzsgLy8gTkVXXG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9va0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2tMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYm9vay1saXN0LWl0ZW0vYm9vay1saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2tEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9ib29rLWRldGFpbHMvYm9vay1kZXRhaWxzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEJvb2tTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9ib29rLXN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogWyAgXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQm9va0xpc3RDb21wb25lbnQsXG4gICAgICAgIEJvb2tMaXN0SXRlbUNvbXBvbmVudCxcbiAgICAgICAgQm9va0RldGFpbHNDb21wb25lbnRcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLCAvLyBORVdcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJvb2tTdG9yZVNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=