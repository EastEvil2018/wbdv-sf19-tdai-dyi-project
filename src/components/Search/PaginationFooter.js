import React from 'react';

const PaginationFooter = ({pagination}) => {
    console.log(pagination);
    return (
        <ul className="pagination mx-auto my-auto justify-content-center">
            <PreviousButton curPage={pagination.curPage}/>
            <PaginationItems pagination={pagination} />
            <NextButton curPage={pagination.curPage} pageCount={pagination.pageCount}/>
        </ul>
    );
}

const PaginationItems = ({pagination}) => {
    var items = [];

    for (let i = 1; i <= pagination.pageCount; i++) {
        items.push(
            <li className={pagination.curPage === i ? "page-item active" : "page-item"}
                style={{cursor: "pointer"}}>
                <span className="page-link">
                    {i}
                </span>
            </li> 
        );
    }
    return items;
}

const PreviousButton = ({curPage}) => {
    return (
        <li className={"page-item" + (curPage === 1 ? " disabled" : "")}
            style={{cursor: "pointer"}}>
            <span className="page-link">
                Previous
            </span>
        </li>
    );
}

const NextButton = ({curPage, pageCount}) => {
    return (
        <li className={"page-item" + (curPage === pageCount ? " disabled" : "")}
            style={{cursor: "pointer"}}>
            <span className="page-link" >
                Next
            </span>
        </li>
    );
}
export default PaginationFooter;