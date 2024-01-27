import { useContext, useRef } from "react";
import { BookData } from "../store/Book-store";

function AddBook() {
    const {addBook}=useContext(BookData);
    const {ntd}=useContext(BookData);
    const {setNtd}=useContext(BookData);

    const isbnele=useRef();
    const bookele=useRef();
    const authorele=useRef();
    const summaryele=useRef();
    const ratingele=useRef();

    const handleSubmit=()=>{
        const isbn=isbnele.current.value;
        const book=bookele.current.value;
        const author=authorele.current.value;
        const summary=summaryele.current.value;
        const rate=ratingele.current.value;

        isbnele.current.value="";
        bookele.current.value="";
        authorele.current.value="";
        summaryele.current.value="";
        ratingele.current.value="";
        
        addBook(isbn,book,author,summary,rate);
    }

    const handleChange = (e) => {
        setNtd({
            ...ntd,
            [e.target.name]: e.target.value
        })
    }

    return <>
        <form className="farm" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">ISBN Number</label>
                <input name="isbn_no" type="text" onChange={handleChange} ref={isbnele} placeholder="Enter the isbn number of the book" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Book Name</label>
                <input type="text" name="book_name" onChange={handleChange} ref={bookele} placeholder="Enter the book name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Author's Name</label>
                <input type="text" name="author_name" onChange={handleChange} ref={authorele}  placeholder="Enter the author's name" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Summary</label>
                <textarea rows={3} ref={summaryele} name="summary" onChange={handleChange}  type="text" placeholder="Summarise the book" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Rating</label>
                <input type="text" name="rating" ref={ratingele} onChange={handleChange} placeholder="Give rating on the scale of 10" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-success">Post</button>
        </form>
    </>
}

export default AddBook;