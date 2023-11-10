import "./SearchInput.scss"
import { SearchIcon } from "@/components/icons/IconSearch";

export default function SearchInput() {
  return (
    <div className="search-input">
      <SearchIcon alt="Search Icon" className="search-icon"/>
      <input className="input-field" placeholder="Enter restaurant name..." />
    </div>
  );
}
