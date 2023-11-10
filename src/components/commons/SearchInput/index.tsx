import { useFoodsManageContext } from "@/contexts/FoodsManageContext";
import "./SearchInput.scss";
import { SearchIcon } from "@/components/icons/IconSearch";

export default function SearchInput() {

  const { setText } = useFoodsManageContext();

  const handleSearch = (text: string) => {
    const searchValue = text.length > 0 ? text : "";
    setText(searchValue);
  };

  return (
    <div className="search-input">
      <SearchIcon alt="Search Icon" className="search-icon" />
      <input
        className="input-field"
        placeholder="Enter restaurant name..."
        onKeyUp={(ev: React.KeyboardEvent<HTMLInputElement>) => {
          if (ev.keyCode === 13) {
            handleSearch((ev.currentTarget as HTMLInputElement).value);
          }
        }}
      />
    </div>
  );
}
