"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var book_factory_1 = require('../shared/book-factory');
var book_store_service_1 = require('../shared/book-store.service');
var BookDetailsComponent = (function () {
    function BookDetailsComponent(bs, router, route) {
        this.bs = bs;
        this.router = router;
        this.route = route;
        this.book = book_factory_1.BookFactory.empty();
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        this.bs.getSingle(params['isbn'])
            .subscribe(function (b) { return _this.book = b; });
    };
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent.prototype.removeBook = function () {
        if (confirm('Buch wirklich löschen?')) {
            console.log("book deleted: " + this.book.isbn);
        }
    };
    BookDetailsComponent = __decorate([
        core_1.Component({
            selector: 'bm-book-details',
            templateUrl: './book-details/book-details.component.html'
        }), 
        __metadata('design:paramtypes', [book_store_service_1.BookStoreService, router_1.Router, router_1.ActivatedRoute])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());
exports.BookDetailsComponent = BookDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2stZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUd6RCw2QkFBNEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNyRCxtQ0FBaUMsOEJBQThCLENBQUMsQ0FBQTtBQU1oRTtJQUdFLDhCQUNVLEVBQW9CLEVBQ3BCLE1BQWMsRUFDZCxLQUFxQjtRQUZyQixPQUFFLEdBQUYsRUFBRSxDQUFrQjtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFML0IsU0FBSSxHQUFTLDBCQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFNN0IsQ0FBQztJQUVMLHVDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUNFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHakQsQ0FBQztJQUNILENBQUM7SUE3Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNENBQTRDO1NBQzFELENBQUM7OzRCQUFBO0lBMkJGLDJCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSw0QkFBb0IsdUJBMEJoQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBCb29rIH0gZnJvbSAnLi4vc2hhcmVkL2Jvb2snO1xyXG5pbXBvcnQgeyBCb29rRmFjdG9yeSB9IGZyb20gJy4uL3NoYXJlZC9ib29rLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBCb29rU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2Jvb2stc3RvcmUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JtLWJvb2stZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29rRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYm9vazogQm9vayA9IEJvb2tGYWN0b3J5LmVtcHR5KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBiczogQm9va1N0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IHBhcmFtcyA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zO1xyXG4gICAgdGhpcy5icy5nZXRTaW5nbGUocGFyYW1zWydpc2JuJ10pXHJcbiAgICAgIC5zdWJzY3JpYmUoYiA9PiB0aGlzLmJvb2sgPSBiKTtcclxuICB9XHJcblxyXG4gIGdldFJhdGluZyhudW06IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShudW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQm9vaygpIHtcclxuICAgIGlmIChjb25maXJtKCdCdWNoIHdpcmtsaWNoIGzDtnNjaGVuPycpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYm9vayBkZWxldGVkOiBcIiArIHRoaXMuYm9vay5pc2JuKTtcclxuICAgICAgLyp0aGlzLmJzLnJlbW92ZSh0aGlzLmJvb2suaXNibilcclxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSkpOyovXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==