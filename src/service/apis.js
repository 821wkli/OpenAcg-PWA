import fetch from '../config/fetch'
import * as book from './tempdata/books'

const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

export const latestBook = (offset,limit)=>setpromise(book.books);
