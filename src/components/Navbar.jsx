import React, { useState } from 'react'

const Navbar = (props) => {

    const category_list = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];
    const [categoryIndex, setCategoryIndex] = useState(0)
    const { toggleCategory } = props;

    const toggleCategories = (index) => {
        setCategoryIndex(index)
        toggleCategory(category_list[index])
    }

    return (
        <div className='div-nav'>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">News-Monkey</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {category_list.map((category, index) => {
                                return <li className="nav-item" key={index}>
                                    <button onClick={() => toggleCategories(index)} className={`p-2 bg-dark border-0 text-${(categoryIndex === index) ? "success" : "light"}`} aria-current="page">{category}</button>
                                </li>
                            })}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
