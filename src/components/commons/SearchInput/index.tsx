import IconSearch from "@/assets/icons/icon-search.svg";
import "./SearchInput.scss"

export default function SearchInput() {
  return (
    <div className="search-input">
      <img src={IconSearch} alt="Search Icon" className="search-icon" />
      <input className="input-field" placeholder="Enter restaurant name..." />
    </div>
  );
}
