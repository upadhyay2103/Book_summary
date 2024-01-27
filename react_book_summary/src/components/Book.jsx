function Book({book}) {
    return <>
        <div className="karad">
            <div className="">
            <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn_no}-M.jpg`} className="" alt="image"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{book.book_name} by {book.author_name}</h5>
                <br />      
                <p className="card-text">{book.summary}</p>
                <button type="button" className="btn btn-info">Rating : {book.rating}</button>
            </div>
        </div>
    </>
}

export default Book;