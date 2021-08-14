import { UilBars, UilBell } from "@iconscout/react-unicons";
export const Header = () => {
  return (
    <div className="w-full flex flex-wrap px-5 pt-3">
      <div className="flex justify-between w-full mb-3">
        <div>
          <button className="text-primary ">
            <UilBars className="w-7 h-7" />
          </button>
        </div>
        <div>
          <button className="text-primary">
            <UilBell className="w-7 h-7" />
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-around">
        <div>
          <button className="font-medium text-gray-dark pb-1">Library</button>
          <div className="h-1">
            <div className="h-full w-full bg-primary rounded-full"></div>
          </div>
        </div>
        <div>
          <button className="font-medium text-gray pb-1">Favorits</button>
          <div className="h-1">
            <div className="h-full w-full bg-primary rounded-full hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
