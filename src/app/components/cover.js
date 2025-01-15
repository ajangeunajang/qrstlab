import Image from "next/image";

export default function Cover() {
    return (
      <div className="flex flex-col w-full px-10">
        <div className="flex justify-start mb-10">
          <Image
            src="/img/homeType1.svg"
            alt="Design Convergence"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[25vh] w-auto"
          />
        </div>
        <div className="flex justify-end ">
          <Image
            src="/img/homeType2.svg"
            alt="Collective QrST"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[25vh] w-auto"
          />
        </div>

       
      </div>
    );
}