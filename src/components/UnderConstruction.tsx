import construction from "../../public/construction.png";
import Image from "next/image";

function UnderConstruction() {
  return (
    <>
      <h1 className="text-center text-4xl text-blue-300 mt-10">
        This Page is Currently Under Construction Come back Soon
      </h1>
      <Image src={construction} alt="" />
    </>
  );
}

export default UnderConstruction;
