import fetch from '../utils/fetch'
import { isEmpty } from '../utils/common'
// import { daily } from './tempData'
//
// const setpromise = data => {
//   return new Promise((resolve, reject) => {
//     resolve(data)
//   })
// }
// export const fetchAnimeDetail = (mid) => setpromise(detail)
export const fetchAnimeDetail = (mid) => fetch('GET', '/torrent/info', {
  torrentId: mid
})
export const animeDaily = (keywords = null) => {
  if (keywords === null) {
    return fetch('GET', '/api/v1/anime/calendar')
  }
  return fetch('GET', '/api/v1/anime/calendar', {
    keywords: keywords
  })
}

// export const animeDaily = () => setpromise(daily)
export const fetchAnimeList = (offset, limit, keywords = null) => {
  if (isEmpty(keywords)) {
    return fetch('GET', '/api/v1/anime/list', {
      offset, limit
    })
  }

  return fetch('GET', '/api/v1/anime/list', {
    offset, limit, keywords
  })
}
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
}

export const fetchUpdatedBookshelf = (body) => fetch('POST', '/api/v1/novel/updateBookshelf', body)
export const _sendToKindle = (jsonBody) => fetch('POST', '/api/v1/novel/sendToKindle', jsonBody, 60000)
