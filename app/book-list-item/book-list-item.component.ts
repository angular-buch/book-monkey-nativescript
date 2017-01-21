import { Component, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'StackLayout.bm-book-list-item',
  templateUrl: './book-list-item/book-list-item.component.html'
})

export class BookListItemComponent {
  @Input() book: Book;
}
