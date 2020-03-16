const getters = {
  // home page
  // end of home page
  // book page
  book: state => state.currentBook,
  recentReadingChapterList: state => state.recentReadingChapterList,
  // end of book page

  // bookshelf page
  bookshelfList: state => state.bookshelfList
  // end of bookshelf page
  // reader page

}
export default getters
