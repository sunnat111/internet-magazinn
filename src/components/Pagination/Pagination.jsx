import React from 'react'
import s from './Pagination.module.scss'

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className={s.pagination}>
            {pages.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>{page}</button>
            })}
        </div>
    )
}

export default Pagination