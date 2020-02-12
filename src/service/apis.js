import fetch from '../config/fetch'
import * as book from './tempdata/books'
import * as chapter from './tempdata/chapterlist'

const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

export const latestBook = (offset,limit)=>setpromise(book.books);
export const getChapterList = (bookId)=>setpromise(chapter.chapterList);
