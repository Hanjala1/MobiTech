import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs'
import "../desing/Navbar.css"

const Navbar = ({ setData, cart }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")

  // Debounce effect: update debouncedSearchTerm 500ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 500)

    return () => clearTimeout(timer) // cleanup previous timer
  }, [searchTerm])

  // Trigger navigation when debouncedSearchTerm changes
  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      navigate(`/search/${debouncedSearchTerm}`)
    }
  }, [debouncedSearchTerm, navigate])

  const filterByCategory = (category) => {
    const element = items.filter(
      (product) => product.category === category
    )
    setData(element)
  }

  const filterByPrice = (price) => {
    const element = items.filter(
      (product) => product.price >= price
    )
    setData(element)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Optional: keep this for Enter key press
    setDebouncedSearchTerm(searchTerm)
    setSearchTerm("")
  }

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          {/* Brand */}
          <Link to="/" className="brand">MobiTech</Link>

          {/* 🔽 Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Resources
            </button>

            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/dropdown/news">News</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dropdown/blogs">Blogs</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dropdown/infographics">Infographics</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dropdown/testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          {/* Cart */}
          <Link to="/cart" className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill style={{ fontSize: '1.5rem' }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </button>
          </Link>
        </div>

        {/* Filters only on Home Page */}
        {location.pathname === '/' && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter by →</div>

            <div onClick={() => setData(items)} className="items">
              No Filter
            </div>

            <div onClick={() => filterByCategory('mobiles')} className="items">
              Mobiles
            </div>

            <div onClick={() => filterByCategory('laptops')} className="items">
              Laptops
            </div>

            <div onClick={() => filterByCategory('tablets')} className="items">
              Tablets
            </div>

            <div onClick={() => filterByPrice(29999)} className="items">
              ≥29999
            </div>

            <div onClick={() => filterByPrice(49999)} className="items">
              ≥49999
            </div>

            <div onClick={() => filterByPrice(69999)} className="items">
              ≥69999
            </div>

            <div onClick={() => filterByPrice(89999)} className="items">
              ≥89999
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar
