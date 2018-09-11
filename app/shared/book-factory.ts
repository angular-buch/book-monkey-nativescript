import { Book } from './book';

export class BookFactory {

  static empty(): Book {
    return {
      isbn: '',
      title: '',
      authors: [''],
      published: new Date(),
      subtitle: '',
      rating: 0,
      thumbnails: [{url: '', title: ''}],
      description: ''
    };
  }

  static fromObject(b: Book | any): Book {
    return {
      isbn: b.isbn,
      title: b.title,
      authors: b.authors,
      published: typeof(b.published) === 'string' ?
        new Date(b.published) : b.published,
      subtitle: b.subtitle,
      rating: b.rating,
      thumbnails: b.thumbnails,
      description: b.description
    };
  }
}
