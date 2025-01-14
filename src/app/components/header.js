import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-1">
 
        <Image
          src="/img/qrst_logo.svg"
          alt="QRST Logo"
          width={70}
          height={50}
          className="mb-6 invert m-10 cursor-pointer"
        />

    </div>
  );
}