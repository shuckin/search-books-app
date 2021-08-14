import { UilSearch } from "@iconscout/react-unicons";
export const Search = ({ ...rest }) => {
  return (
    <div className="w-full px-5 pt-8 ">
      <div className="w-full flex items-center rounded-md bg-white">
        <input
          className="w-full h-12 outline-none border-none
        text-gray text-sm mr-3 pl-3"
          {...rest}
        />
        <button>
          <UilSearch className="w-7 h-7 text-gray  transition-all mr-3" />
        </button>
      </div>
    </div>
  );
};
