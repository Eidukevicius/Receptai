import Logo from "../../svg/Vector(2).svg"
import Search from "../../svg/search-line(1).svg"
import User from "../../svg/user-line(1).svg"
import "./nav.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([])

	useEffect(() => {
		async function fetchAPI() {
			let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
			response = await response.json()
			setCategories(response.categories)
		}

		fetchAPI()
	}, [])
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
    <img src={Logo}/>
  <a className="navbar-brand mx-2" href="#">Recipedia</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <ul className="list-reset gap-3 d-none d-md-flex">
				  <Link className="nav-link" to="/">Home</Link>
					<a className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
					<ul className="dropdown-menu">
						{categories.map(category => <li key={category.idCategory}><Link className="dropdown-item nav-link" to={`/category/${category.strCategory}`}>{category.strCategory}</Link></li>)}
					</ul>
			</ul>  
      <li className="nav-item mx-3">
        <a className="nav-link" href="#">Community</a>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link" href="#">About Us</a>
      </li>
    </ul>
  </div>
    <div className="justify-content-end">
        <img src={Search}/>
        <img src={User}/>
    </div>
  </div>
</nav>
    );
}

export default Nav