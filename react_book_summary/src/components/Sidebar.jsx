function Sidebar({site,handleClick}) {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side">
                <br />
                <br />
                <br />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className={`nav-link text-white ${site==="Home"?'active':''}`}  onClick={handleClick}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className={`nav-link text-white ${site!=="Home"?'active':''}`} onClick={handleClick}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Add-Book
                    </a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar;