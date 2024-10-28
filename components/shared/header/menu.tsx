// import { ShoppingCart } from "lucide-react";

import UserButton from "./user-button";
import CartButton from "./cart-button";

const Menu = () => {
  return (
    <>
      <div className="flex lg:justify-end gap-3">
        <nav className="grid grid-cols-1 sm:flex flex-e w-full max-w-xs gap-1 text-white">
          <CartButton />
          <UserButton />
        </nav>
      </div>
    </>
  );
};

export default Menu;
