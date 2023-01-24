import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(true);

  return (
    <>
      <div
        className={
          isMenuActive
            ? "h-18 flex items-center p-2 w-screen bg-[#FF6961] text-white justify-between font-quicksand z-20 sticky top-0 "
            : "h-screen absolute flex items-start p-4 w-screen bg-[#FF6961] text-white  font-quicksand z-20  top-0 flex-wrap "
        }
      >
        <div className="flex w-screen justify-between">
          <Link href="/" className="p-2">
            American Legion Post #240
          </Link>

          <div className=" justify-evenly w-1/2 hidden md:flex items-center ">
            <Link href="/">Home</Link>
            <Link href="/Calendar">Calendar</Link>
            <Link href="/Gallery">Gallery</Link>
            <Link href="/Contact">Contact</Link>
          </div>
          <div className="flex md:hidden text-3xl z-20">
            <button onClick={() => setIsMenuActive(!isMenuActive)}>
              {isMenuActive ? <RxHamburgerMenu /> : <h1>X</h1>}
            </button>
          </div>
        </div>
        <div
          className={
            !isMenuActive
              ? "w-screen flex flex-col items-center h-screen justify-evenly absolute top-0 z-10 left-0"
              : "hidden"
          }
        >
          <Link href="/Calendar">Calendar</Link>
          <Link href="/Home">Home</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
