import { useContext } from "react";
import Book from "./Book";
import { BookData } from "../store/Book-store";

function BookList()
{
    const {bookList}=useContext(BookData);
    if(bookList.length===0)
    {
        return <center>
            <h3 className="err">There are no books added!!</h3>
        </center>
    }
    return <div className="bCont">
    {bookList.map(item=><Book key={item.isbn_no} book={item}/>)}
    </div>
}

export default BookList;