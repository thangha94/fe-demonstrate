import { useRef } from "react";
import "./search-name.css";

interface SearchProps {
  searchHandler: (value: string) => void;
}

const SearchName: React.FC<SearchProps> = ({ searchHandler }) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className="header__container">
      <input
        className="header__input"
        ref={searchRef}
        type="text"
        name="search-name"
        id=""
        placeholder="Search by name"
      />
      <button
        className="header__button"
        onClick={() => {
          console.log(searchRef.current?.value);
          searchHandler(searchRef.current!.value);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchName;
