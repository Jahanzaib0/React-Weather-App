import React, {useState} from 'react'

const Nav = (props) => {
    // console.log(props.search)
    const [search, setSearch] = useState("");
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-info" href="/">Weather App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        onChange={ (e) => {
            setSearch(e.target.value)
        } }
        />
        <button className="btn btn-outline-info" type="submit" onClick={(e)=>{
            
            e.preventDefault();
            props.SearchFunc(search.toLocaleLowerCase());
        }}
       >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
