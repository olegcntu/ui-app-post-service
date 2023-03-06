import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPage, page, changePage}) => {
    let pagesArray = getPagesArray(totalPage)
    return (
        <div className="page__wrapper" style={{marginTop: 30}}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page_current' : 'page'}>{p}</span>
            )}
        </div>
    );
};

export default Pagination;