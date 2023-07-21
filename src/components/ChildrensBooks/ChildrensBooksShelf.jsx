import shelf from "../images/shelf.png";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api-handlers";
import { Link } from "react-router-dom";

function ChildrensBooksShelf({averageScores}) {
    const [childrensBooks, setChildrensBooks] = useState([]);

    useEffect(() => {
        async function fetchchildrensBooks() {
            try {
                const response = await fetch(`${BASE_URL}/childrens-books`);
                const data = await response.json();
          
                setChildrensBooks(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchchildrensBooks();
    }, []);

    const firstFiveBooks = childrensBooks.slice(0, 5);

    return (
        <div>
          <div className="flex justify-between">
            <h2 className="underline underline-offset-1 font-bold">Children's Books</h2>
            <Link className="underline underline-offset-1 font-bold" to="/childbooks">View All</Link>
          </div>

          <div className="flex bg-contain justify-around py-4 px-2 shadow-xl"
          style={{ backgroundImage: `url(${shelf})`}}>
            {firstFiveBooks.map((book) => (
              <div key={book.isbn} className="px-2">
                <Link to={`/books/${book.isbn}`}>
                  <img src={book.bookCover} alt="Image of Book cover" />
                </Link>
                {averageScores && averageScores[book.isbn] && (
                  <p className="font-bold">Rating: {averageScores[book.isbn].toFixed(2)}/5</p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

export default ChildrensBooksShelf;
