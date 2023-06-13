import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src="data:image/png;base64,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
            ia+YjbZyUFulqbDsFhFp
            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" alt="" />
            {/* <img src={logo} alt='' /> */}
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search