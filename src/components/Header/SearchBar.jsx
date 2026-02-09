import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/products?filter=${search}`);
    }
  };

  return (
    <div
      style={{
        width: "559px",
        height: "60px",
        borderRadius: "8px",
        backgroundColor: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        padding: "0 16px"
      }}
    >
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        style={{
          flex: 1,
          border: "none",
          background: "transparent",
          outline: "none",
          fontSize: "16px"
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "18px"
        }}
      >
        <FiSearch className="text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
