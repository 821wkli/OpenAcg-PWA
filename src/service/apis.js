import fetch from '../config/fetch'
import * as book from './tempdata/books'
import * as chapterList from './tempdata/chapterlist'
import * as chapter from './tempdata/content'
const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

export const latestBook = (offset,limit)=>setpromise(book.books);
export const getChapterList = (bookId)=>setpromise(chapterList.chapterList);
export const getChapterContent = (cid)=>setpromise(chapter.content);
