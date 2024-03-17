import { useEffect, useState } from "react";
import "./Home.css";
import Data from "../../assets/Components/Data/Data";
import StarRating from "../../assets/Components/StarRating/StarRating";

const Home = () => {
  const [sort, setSort] = useState("by best rate");
  const [movieData, setMovieData] = useState(Data);

  useEffect(() => {
    movieData.sort((a, b) => {
      if (sort === "by date ascending") {
        return a.year - b.year;
      } else if (sort === "by date descending") {
        return b.year - a.year;
      } else if (sort === "by best rate") {
        return b.rate - a.rate;
      } else if (sort === "a to z") {
        return ("" + a.title).localeCompare(b.title);
      } else if (sort === "z to a") {
        return ("" + b.title).localeCompare(a.title);
      }
    });
    if (sort == "by date ascending") {
      document.documentElement.style.setProperty(
        "--translate-bar",
        "translateX(-310%)"
      );
    } else if (sort === "by date descending") {
      document.documentElement.style.setProperty(
        "--translate-bar",
        "translateX(-163%)"
      );
    } else if (sort === "by best rate") {
      document.documentElement.style.setProperty(
        "--translate-bar",
        "translateX(-28%)"
      );
    } else if (sort === "a to z") {
      document.documentElement.style.setProperty(
        "--translate-bar",
        "translateX(86%)"
      );
    } else if (sort === "z to a") {
      document.documentElement.style.setProperty(
        "--translate-bar",
        "translateX(199%)"
      );
    }
  }, [sort]);

  return (
    <div className="home">
      <div class="bar">
        <div class="bar_inner"></div>
      </div>
      <main>
        <section className="filter_section">
          <h2>HOLLYWOOD MOVIES</h2>
          <p>Select your Movie in our Movies Database</p>
          <div className="filter_wrapper">
            <button
              className={sort === "by date ascending" && "white"}
              onClick={() => setSort("by date ascending")}
            >
              Date Ascending
            </button>
            <button
              className={sort === "by date descending" && "white"}
              onClick={() => setSort("by date descending")}
            >
              Date Descending
            </button>
            <button
              className={sort === "by best rate" && "white"}
              onClick={() => setSort("by best rate")}
            >
              Best Rate
            </button>
            <button
              className={sort === "a to z" && "white"}
              onClick={() => setSort("a to z")}
            >
              From A-Z
            </button>
            <button
              className={sort === "z to a" && "white"}
              onClick={() => setSort("z to a")}
            >
              From Z-A
            </button>
            <div class="empty_bar"></div>
            <div class="bar_selector"></div>
          </div>
        </section>
        <section className="movies_grid">
          {movieData.map((movie, index) => (
            <article key={index}>
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
              <p>{movie.director}</p>
              <p>{movie.duration}</p>
              <div>
                {movie.genre.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
              <StarRating rate={movie.rate} />
              <p>{movie.rate}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
