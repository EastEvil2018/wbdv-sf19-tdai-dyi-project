import React from 'react';

const PaginationFooter = ({pagination}) => {
    console.log(pagination);
    return (
        <ul class="pagination mx-auto my-auto justify-content-center">
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
            <li class={pagination.curPage === i ? "page-item active" : "page-item"}
                style={{cursor: "pointer"}}>
                <span class="page-link">
                    {i}
                </span>
            </li> 
        );
    }
    return items;
}

const PreviousButton = ({curPage}) => {
    return (
        <li class={"page-item" + (curPage === 1 ? " disabled" : "")}
            style={{cursor: "pointer"}}>
            <span class="page-link">
                Previous
            </span>
        </li>
    );
}

const NextButton = ({curPage, pageCount}) => {
    return (
        <li class={"page-item" + (curPage === pageCount ? " disabled" : "")}
            style={{cursor: "pointer"}}>
            <span class="page-link" >
                Next
            </span>
        </li>
    );
}
export default PaginationFooter;