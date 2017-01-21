"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/retry');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var book_factory_1 = require('./book-factory');
var BookStoreService = (function () {
    function BookStoreService(http) {
        this.http = http;
        this.api = 'https://book-monkey2-api.angular-buch.com';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    BookStoreService.prototype.getAll = function () {
        return this.http
            .get(this.api + "/books")
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBooks) { return rawBooks
            .map(function (rawBook) { return book_factory_1.BookFactory.fromObject(rawBook); }); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.getSingle = function (isbn) {
        return this.http
            .get(this.api + "/book/" + isbn)
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBook) { return book_factory_1.BookFactory.fromObject(rawBook); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.create = function (book) {
        return this.http
            .post(this.api + "/book", JSON.stringify(book), { headers: this.headers })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.update = function (book) {
        return this.http
            .put(this.api + "/book/" + book.isbn, JSON.stringify(book), { headers: this.headers })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.remove = function (isbn) {
        return this.http
            .delete(this.api + "/book/" + isbn)
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.errorHandler = function (error) {
        return Observable_1.Observable.throw(error);
    };
    BookStoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookStoreService);
    return BookStoreService;
}());
exports.BookStoreService = BookStoreService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vay1zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUduQyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUc3QztJQUlFLDBCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUh0QixRQUFHLEdBQVcsMkNBQTJDLENBQUM7UUFDMUQsWUFBTyxHQUFZLElBQUksY0FBTyxFQUFFLENBQUM7UUFHdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUksSUFBSSxDQUFDLEdBQUcsV0FBUSxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDUixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVE7YUFDdEIsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsMEJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQS9CLENBQStCLENBQUMsRUFEakMsQ0FDaUMsQ0FDakQ7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUksSUFBSSxDQUFDLEdBQUcsY0FBUyxJQUFNLENBQUM7YUFDL0IsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsMEJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQS9CLENBQStCLENBQUM7YUFDL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLElBQVU7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQUksSUFBSSxDQUFDLEdBQUcsVUFBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3pFLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFJLElBQUksQ0FBQyxHQUFHLGNBQVMsSUFBSSxDQUFDLElBQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNyRixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sSUFBWTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixNQUFNLENBQUksSUFBSSxDQUFDLEdBQUcsY0FBUyxJQUFNLENBQUM7YUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sdUNBQVksR0FBcEIsVUFBcUIsS0FBa0I7UUFDckMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFqREg7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQWtEYix1QkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUFqRFksd0JBQWdCLG1CQWlENUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3JldHJ5JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5pbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rJztcclxuaW1wb3J0IHsgQm9va0ZhY3RvcnkgfSBmcm9tICcuL2Jvb2stZmFjdG9yeSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCb29rU3RvcmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFwaTogc3RyaW5nID0gJ2h0dHBzOi8vYm9vay1tb25rZXkyLWFwaS5hbmd1bGFyLWJ1Y2guY29tJztcclxuICBwcml2YXRlIGhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxBcnJheTxCb29rPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGAke3RoaXMuYXBpfS9ib29rc2ApXHJcbiAgICAgIC5yZXRyeSgzKVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLm1hcChyYXdCb29rcyA9PiByYXdCb29rc1xyXG4gICAgICAgIC5tYXAocmF3Qm9vayA9PiBCb29rRmFjdG9yeS5mcm9tT2JqZWN0KHJhd0Jvb2spKVxyXG4gICAgICApXHJcbiAgICAgIC5jYXRjaCh0aGlzLmVycm9ySGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGUoaXNibjogc3RyaW5nKTogT2JzZXJ2YWJsZTxCb29rPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoYCR7dGhpcy5hcGl9L2Jvb2svJHtpc2JufWApXHJcbiAgICAgIC5yZXRyeSgzKVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLm1hcChyYXdCb29rID0+IEJvb2tGYWN0b3J5LmZyb21PYmplY3QocmF3Qm9vaykpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmVycm9ySGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoYm9vazogQm9vayk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KGAke3RoaXMuYXBpfS9ib29rYCwgSlNPTi5zdHJpbmdpZnkoYm9vayksIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pXHJcbiAgICAgIC5jYXRjaCh0aGlzLmVycm9ySGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoYm9vazogQm9vayk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5wdXQoYCR7dGhpcy5hcGl9L2Jvb2svJHtib29rLmlzYm59YCwgSlNPTi5zdHJpbmdpZnkoYm9vayksIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pXHJcbiAgICAgIC5jYXRjaCh0aGlzLmVycm9ySGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaXNibjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmRlbGV0ZShgJHt0aGlzLmFwaX0vYm9vay8ke2lzYm59YClcclxuICAgICAgLmNhdGNoKHRoaXMuZXJyb3JIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXJyb3JIYW5kbGVyKGVycm9yOiBFcnJvciB8IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==