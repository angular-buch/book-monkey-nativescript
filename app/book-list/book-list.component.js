"use strict";
var core_1 = require('@angular/core');
var book_store_service_1 = require('../shared/book-store.service');
var BookListComponent = (function () {
    function BookListComponent(bs) {
        this.bs = bs;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs.getAll().subscribe(function (res) {
            console.log(JSON.stringify(res));
            _this.books = res;
        });
    };
    BookListComponent = __decorate([
        core_1.Component({
            selector: 'bm-book-list',
            templateUrl: './book-list/book-list.component.html'
        }), 
        __metadata('design:paramtypes', [book_store_service_1.BookStoreService])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2stbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRCxtQ0FBaUMsOEJBQThCLENBQUMsQ0FBQTtBQU1oRTtJQUdFLDJCQUFvQixFQUFvQjtRQUFwQixPQUFFLEdBQUYsRUFBRSxDQUFrQjtJQUFJLENBQUM7SUFFN0Msb0NBQVEsR0FBUjtRQUFBLGlCQUtHO1FBSkQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQWRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxzQ0FBc0M7U0FDcEQsQ0FBQzs7eUJBQUE7SUFZRix3QkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFkseUJBQWlCLG9CQVc3QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJvb2sgfSBmcm9tICcuLi9zaGFyZWQvYm9vayc7XHJcbmltcG9ydCB7IEJvb2tTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYm9vay1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYm0tYm9vay1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2tMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBib29rczogQm9va1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJzOiBCb29rU3RvcmVTZXJ2aWNlKSB7IH1zXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5icy5nZXRBbGwoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgIHRoaXMuYm9va3MgPSByZXNcclxuICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==