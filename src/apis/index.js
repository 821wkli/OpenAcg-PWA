import fetch from '../utils/fetch'
import { daily, list } from './tempData'

const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

export const animeDaily = () => setpromise(daily)
export const animeList = (offset, limit) => setpromise(list)
export const fetchBook = (id) => fetch('GET', '/api/v1/novel/getBook', {
  id: id
})
export const latestBook = (offset, limit) => fetch('GET', '/api/v1/novel/latest', {
  offset: offset,
  limit: limit
})

export const hotBook = (limit) => fetch('GET', '/api/v1/novel/search/hot', {
  limit: limit
})

export const searchBook = (offset, limit, keywords) => fetch('GET', '/api/v1/novel/search', {
  offset: offset,
  limit: limit,
  keywords: keywords
})
// export const latestBook = (offset, limit) => setpromise(book.books);
export const fetchChapterList = (bookId) => fetch('GET', '/api/v1/novel/chapterList', {
  bid: bookId
})
// export const getChapterContent = (cid)=>setpromise(chapter.content);
export const getChapterContent = (cid) => fetch('GET', '/api/v1/novel/getChapter', {
  chapterid: cid
})

export const fetchUpdatedBookshelf = (body) => fetch('POST', '/api/v1/novel/updateBookshelf', body)
