import Link from "next/link";

const Catalog = () => {
  return (
    <div className="min-h-screen bg-white fixed top-[75px] left-0 right-0">
      <ul className="flex flex-col gap-6 w-[300px] bg-white-300  items-end">
        <li className="w-[200px]">
          <Link className="text-cyan-500 " href="#">
            Smartfonlar va gadjetlar
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            Noutbuklar, kompyuterlar
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            TV va proektorlar{" "}
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            Audiotexnikalar
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            Uy uchun texnika
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            Asboblar va bog' texnoikasi{" "}
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            O'yin uchun texnika
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            Aqlli uy
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            {" "}
            Avtotovarlar
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            Sport tovarlari
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            Smartfonlar va gadjetlar
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            Bolalar buyumlari
          </Link>
        </li>
        <li className="w-[200px]">
          <Link className="text-cyan-500" href="#">
            Qurilish
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Catalog;
