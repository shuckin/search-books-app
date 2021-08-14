import { UilBars, UilBell, UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Logo from "../../assets/img/logo.svg";

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full flex flex-wrap px-5 pt-3 bg-white">
      <div className="flex items-center justify-between w-full mb-3">
        <div>
          <button
            className="text-primary "
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            <UilBars className="w-7 h-7" />
          </button>
        </div>
        <div className="w-[173px] h-[20px] lg:w-[274px] lg:h-[40px]">
          <Image src={Logo} alt="Picture of the author" />
        </div>
        <div>
          <button className="text-primary">
            <UilBell className="w-7 h-7" />
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-around">
        <div>
          <button
            className="font-medium text-gray-dark pb-1"
            onClick={() => router.push("/")}
          >
            Library
          </button>
          <div className="h-1">
            <div
              className={
                router.pathname == "/"
                  ? "h-full w-full bg-primary rounded-full"
                  : "h-full w-full bg-primary rounded-full hidden"
              }
            ></div>
          </div>
        </div>

        <div>
          <button
            className="font-medium text-gray pb-1"
            onClick={() => router.push("/favorites")}
          >
            Favorits
          </button>
          <div className="h-1">
            <div
              className={
                router.pathname == "/favorites"
                  ? "h-full w-full bg-primary rounded-full"
                  : "h-full w-full bg-primary rounded-full hidden"
              }
            ></div>
          </div>
        </div>
      </div>
      <div
        className={
          hidden
            ? "fixed top-0 left-0 w-4/5 h-full bg-primary p-4 transition-all lg:w-auto lg:gap-x-1 lg:h-auto lg:bg-none z-50"
            : "fixed top-0 -left-full w-full h-full bg-primary p-4 transition-all lg:w-auto lg:gap-x-1 lg:h-auto lg:bg-none z-50"
        }
      >
        <div className="mt-3 px-2.5 lg:hidden"></div>

        <UilTimes
          className="w-8 h-8 absolute top-3.5 right-3 text-white"
          onClick={() => {
            setHidden(!hidden);
          }}
        />
      </div>
    </div>
  );
};
