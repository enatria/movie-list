/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Pagination = ({query, totalPage, currentPage, action}) => {

  const pages = []
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i)
  }

  return (
    <div className="d-flex justify-content-center" style={{width: '100%'}}>
      <nav aria-label="...">
        <ul className="pagination">
          {currentPage > 1 ? 
          <li className="page-item">
            <a href='#'
              className="page-link"
              onClick={() => action(query, currentPage - 1)}>Previous</a>
          </li> : null}

          {pages.map((page) => {
            if (page === currentPage) {
              return (
                <li key={page} className="page-item active" aria-current="page">
                  <span className="page-link">{page}</span>
                </li>
              )
            }

            return (
              <li key={page} className="page-item">
                <a href='#'
                  className="page-link"
                  onClick={() => action(query, page)}>{page}</a>
              </li>
            )
          })}

          {totalPage !== currentPage ? 
          <li className="page-item">
            <a href='#'
              className="page-link"
              onClick={() => action(query, currentPage + 1)}>Next</a>
          </li> : null}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;
