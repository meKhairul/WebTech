import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [{id:1,name:"Twilight",year:2004,availability:true},
                  {id:2,name:"Debi",year:2003,availability:true},
                  {id:3,name:"Web",year:2005,availability:true}]
  constructor() { }

  getBooks(): Book[]{
    return this.books;
  }
}
