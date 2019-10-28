class Paginate {
  constructor(currentPage, pagesArray) {
    this.currentPage = currentPage;
    this.pagesArray = pagesArray;
    this.pageIndex = this.currentPage - 1;
    this.firstPage = this.pageIndex - 5;
    this.lastPage = this.pageIndex + 4;
    this.paginatedPages = [];
  }

  getPages() {
    if (this.pagesArray.length <= 10) {
      return this.pagesArray;
    }
    this.validateEndPages();
    return this.pagesArray.slice(this.firstPage, this.lastPage + 1);
  }

  validateEndPages() {
    if (this.firstPage < 0) {
      // Will convert any negative number into a positive one
      this.modifyEndPages(this.firstPage * -1);
    } else if (this.lastPage > this.pagesArray.length) {
      const modifier = this.pagesArray.length - this.lastPage;
      this.modifyEndPages(modifier);
    }

    return;
  }

  modifyEndPages(modifier = 0) {
    this.firstPage = this.firstPage + modifier;
    this.lastPage = this.lastPage + modifier;
  }
}

export default Paginate;
