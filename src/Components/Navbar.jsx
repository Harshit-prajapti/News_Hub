// import { useState } from "react"
// import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" to="/about">NewsHub</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a name={"home"} className="btn" href={"/"}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn" href="/business">Business</a>
                            </li>
                            <li className="nav-item">
                            <a className="btn" href="/science">Science</a>
                            </li>
                            <li className="nav-item">
                            <a className="btn" href="/sport">Sport</a>
                            </li>
                            <li className="nav-item">
                            <a className="btn" href="/entertainment">Entertainment</a>
                            </li>
                            <li className="nav-item">
                            <a className="btn" onClick={console.log("clicked")} href="/politics">Politics</a>
                            </li>
                            <li className="nav-item">
                                <Link className="btn" to="/about">About</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item">Business</a></li>
                                    <li><a className="dropdown-item">Games</a></li>
                                    <li><a className="dropdown-item">Science</a></li>
                                    <li><a className="dropdown-item">Politics</a></li>
                                    <li><a className="dropdown-item">Sports</a></li>
                                    <li><a className="dropdown-item">Entertainment</a></li>

                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        {/* <h1 className='heading my-3'>NewsHub - Top headlines</h1> */}
                        {/* <div className="container">
                            <div className="row gx-5">
                                {this.state.articles.map((element) => {
                                    return <div key={element.url} className="col my-3 mx-1">
                                        <NewsItem imgUrl={element.urlToImage ? element.urlToImage : "https://www.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg"} url={element.url} title={element.title ? element.title.slice(0, 44) + "..." : "title is not avaliable"} description={element.description ? element.description.slice(0, 85) + "..." : "descripition is not avaliable"} />
                                    </div>
                                })}
                            </div>
                            <div className="container my-3 d-flex justify-content-between">
                                <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                            </div> */}
                        {/* </div> */}
        </>
    )
}