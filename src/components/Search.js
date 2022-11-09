import { useState, useEffect, useRef } from "react";
import omdb from "../utils";
import SingleCard from "./SingleCard";
const Search = () => {

    const [apiData, setApiData] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    const inputRef = useRef();

    useEffect(() => {
        (async () => {
            const res = await omdb.get(`?s=${searchKeyword}`);
            const data = res.data.Search;
            setApiData(data);


        })();
    }, [searchKeyword])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchKeyword(inputRef.current.value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" className="inputBox" ref={inputRef} placeholder="Search any Movie" />
                <button className="searchBtn" onClick={handleSubmit}>Search</button>

            </form>
            <p className="para">Sharing a few of our favourites movies</p>

            <div className="cardContainer">
                {apiData?.map((single_element, idx) => {
                    return (
                        <SingleCard movieData={single_element} key={idx} />
                    )
                })}
            </div>
        </>
    )
}

export default Search;