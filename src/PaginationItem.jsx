import classNames from "classnames";

// eslint-disable-next-line react/prop-types
const PaginationItem = ({ page, currentPage, onPageChanage, isDisabled }) => {
  const liClasses = classNames({
    "page-item": true,
    active: page === currentPage,
    disabled: isDisabled,
  });
  return (
    <li className={liClasses} onClick={() => onPageChanage(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

export default PaginationItem;
