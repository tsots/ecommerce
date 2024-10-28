import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = async () => {
  return (
    <header className="w-full border-b bg-foreground">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/logo.svg"
              width={200}
              height={200}
              alt={`${APP_NAME} logo`}
            />
            {/* <h1 className="text-3xl pl-3">Tsotetsi Mosala</h1> */}
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
