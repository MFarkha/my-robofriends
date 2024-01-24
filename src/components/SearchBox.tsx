import { ChangeEventHandler } from "react";

type SearchBoxProps = {
    searchChange: ChangeEventHandler<HTMLInputElement>
};

const SearchBox = ({ searchChange }: SearchBoxProps) => {
    return (
        <div className="pa2">
            <input 
                aria-label="search robots"
                className="pa3 ba b--green bg-lightest-blue" 
                type='search' 
                name="searchBox"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;