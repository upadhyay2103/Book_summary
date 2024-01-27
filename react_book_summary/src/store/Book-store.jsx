import { createContext,useEffect,useState} from "react";
import axios from "axios";

export const BookData = createContext({
    bookList: [],
    addBook: () => { },
    ntd: {},
    setNtd: ()=>{},
});

function BookProvider({ children }) {
    const [bookList,setBookList]=useState([]);
    const [ntd,setNtd]=useState({});

    useEffect(()=>{
        const response=axios.get("http://localhost:3000/")
        .then(response=>setBookList(response.data))
        .catch(err=>console.log(err));
    })

    const addBook=async(isbn,book,author,summ,rate)=>{
        // const ntd= {
        // isbn_no:isbn,
        // book_name:book,
        // author_name:author,
        // summary:sum,
        // rating:rate
        // };

        console.log(ntd);
           
        await axios.post("http://localhost:3000/",ntd)
    }

    return <BookData.Provider value={{
        bookList,
        addBook,
        ntd,
        setNtd,
    }}>
        {children}
    </BookData.Provider>
}

const DEFAULT_BOOK_LIST=
[
    {
        isbn_no:'9780141032009',
        book_name:'The Diary of Young Girl',
        author_name:'Anne Frank',
        summary:"The Diary of a Young Girl is the poignant account of her life in hiding during the Holocaust. Written between 1942 and 1944, Anne, a Jewish teenager, expresses her thoughts, fears, and dreams in her diary, addressing it to an imaginary friend named Kitty. Trapped in the Secret Annex with her family and others, Anne grapples with the challenges of confinement, the fear of discovery, and the complex dynamics of living in close quarters. Her writing reflects her intelligence, resilience, and optimism, offering a powerful testament to the human spirit even in the face of unimaginable adversity. Her diary provides a vivid and intimate portrayal of a young girls experiences during one of the darkest periods in history, making it a timeless and compelling work.",
        rating:'7.5'
    },
    {
        isbn_no:'9780333352403',
        book_name:'Jungle Book',
        author_name:'Rudyard Kipling',
        summary:"The Jungle Book by Rudyard Kipling is an adventure story about a man-cub named Mowgli. Mowgli is hunted by an evil tiger named Shere Khan. Mowgli tries to live a peaceful life with other humans, but is too wild for them and too human for the wolves. Eventually Mowgli finds a home in the jungle with a pack of his own.",
        rating:'8.5'
    },
    {
        isbn_no:'9780520266124',
        book_name:'The Adventures of Tom sawyer',
        author_name:'Mark Twain',
        summary:"The Adventures of Tom Sawyer follows mischievous Tom in a 19th-century American town. His escapades, including whitewashing a fence, treasure hunting, and attending his own funeral, showcase his lively spirit. The novel explores friendship, romance, and the contrast between societal expectations and individual freedom. His journey is a timeless tale of youth and adventure.",
        rating:'8.1'
    },
    {
        isbn_no:'9780140430226',
        book_name:"Gulliver's Travel",
        author_name:'Jonathan Swift',
        summary:"Gullivers Travels is a satirical novel by Jonathan Swift. Lemuel Gulliver, a ship surgeon, embarks on four voyages to strange lands. In Lilliput, he encounters tiny people, in Brobdingnag, giants. Laputa is a flying island inhabited by impractical intellectuals, and the Houyhnhnms in the last voyage are rational horses. Through Gullivers adventures, Swift critiques human nature, society, and politics, using satire to expose flaws and vices. The novel explores themes of power, arrogance, and the absurdities of humanity, providing a critical commentary on 18th-century society.",
        rating:'6.0'
    },
]

export default BookProvider;
