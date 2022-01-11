type Props = {
  onChangeInputValue: React.FormEventHandler<HTMLInputElement>;
  searchValue: string;
};

export const SearchBar: React.FC<Props> = ({ onChangeInputValue, searchValue }) => {
  return (
    <div className="bg-amber-500 basis-1/12 flex items-center justify-center">
      <form action="" className="">
        <div className="relative text-gray-700">
          <input
            className="w-full h-14 pl-10 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Search"
            onChange={onChangeInputValue}
            value={searchValue}
          />
          <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};
