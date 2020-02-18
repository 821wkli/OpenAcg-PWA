import fetch from '../config/fetch'
import * as book from './tempdata/books'
import * as chapterList from './tempdata/chapterlist'
import * as chapter from './tempdata/content'

const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}
export const fetchBook = (id) => fetch('GET', '/api/v1/novel/getBook', {
  id: id
});
export const latestBook = (offset,limit)=>fetch('GET','/api/v1/novel/latest',{
  offset:offset,
  limit:limit
})

//export const latestBook = (offset, limit) => setpromise(book.books);
export const fetchChapterList = (bookId)=>fetch('GET','/api/v1/novel/chapterList',{
  bid:bookId
})
export const getChapterList = (bookId) => setpromise(chapterList.chapterList);
//export const getChapterContent = (cid)=>setpromise(chapter.content);
export const getChapterContent = (cid) => fetch("GET", '/api/v1/novel/getChapter', {
  chapterid: cid
})
