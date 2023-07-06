import PaginationItem from "./PaginationItem";
const range = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};
const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }) => {
  const ceiling = Math.ceil(pagesCutCount / 2);
  const floor = Math.floor(pagesCutCount / 2);
  // number of pages is shorter than range
  if (pagesCount < pagesCutCount) {
    return { start: 1, end: pagesCount + 1 };
    // first page is 1 but we need a range to show
  } else if (currentPage >= 1 && currentPage <= ceiling) {
    return { start: 1, end: pagesCutCount + 1 };
    // last page is current page
  } else if (currentPage + floor >= pagesCount) {
    return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
  } else {
    return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
  }
};
// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, total, limit, onPageChanage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 5, currentPage });
  const pages = range(pagesCut.start, pagesCut.end);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  return (
    <ul className="pagination">
      <PaginationItem
        page="first"
        currentPage={currentPage}
        onPageChanage={() => onPageChanage(1)}
        isDisabled={isFirstPage}
      />
      <PaginationItem
        page="prev"
        currentPage={currentPage}
        onPageChanage={() => onPageChanage(currentPage - 1)}
        isDisabled={isFirstPage}
      />

      {pages.map((page) => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={currentPage}
          onPageChanage={onPageChanage}
        />
      ))}
      <PaginationItem
        page="next"
        currentPage={currentPage}
        onPageChanage={() => onPageChanage(currentPage + 1)}
        isDisabled={isLastPage}
      />
      <PaginationItem
        page="last"
        currentPage={currentPage}
        onPageChanage={() => onPageChanage(pagesCount)}
        isDisabled={isLastPage}
      />
    </ul>
  );
};

export default Pagination;
