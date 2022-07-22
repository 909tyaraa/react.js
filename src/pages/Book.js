import { useState, useEffect } from "react";
import BookList from "../components/Booklist";

export default function Book(props) {
    let [Book, setBooks] = useState([])

    useEffect(() => {
        // inisisasi state book
        let arrBooks = [
             {
                isbn: 1, title: `Marvel Comic`, creator: `Martin Goodman`,
                publisher: `Timely Pulbisher`, income: 4000, rating: 5,
                cover: `https://shop.line-scdn.net/themeshop/v1/products/b7/0c/dc/b70cdcf3-cc84-40d9-ad2d-4ac8a7924266/98/WEBSTORE/icon_198x278.png`,
                progress: 84
            },
            {
                isbn: 2, title: `Doraemon`, creator: `Fujiko F. Fujio`,
                publisher: `Kencana publisher`, income: 3000, rating: 4,
                cover: `https://cdn-japantimes.com/wp-content/uploads/2020/11/np_file_54029.jpeg`,
                progress: 78
            },
            {
                isbn: 3, title: `Spiderman`, creator: `Stan Lee`,
                publisher: `FF publisher`, income: 8000, rating: 5,
                cover: `https://i.annihil.us/u/prod/marvel/i/mg/9/b0/60afe2836f49b/clean.jpg`,
                progress: 80
            },
        ]

        setBooks(arrBooks)
    }, [])

    return (
        <div className="container-fluid">
            {Book.map(item => (
                <BookList 
                key={`key-${item.isbn}`}
                isbn={item.isbn}
                title={item.title}
                creator={item.creator}
                publisher={item.publisher}
                rating={item.rating}
                cover={item.cover}
                progress={item.progress}>
                </BookList>
            ))}
        </div>
    )
}