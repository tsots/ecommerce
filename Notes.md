1. lib/constants/index.ts

```ts
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Amazona";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "An Amazon clone built with Next.js, Postgres, Shadcn";
```

2. components/shared/header/index.tsx

```ts
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { getAllCategories } from "@/lib/actions/product.actions";
import Search from "./search";

const Header = async () => {
  const categories = await getAllCategories();

  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline">
                <MenuIcon />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Select a category</DrawerTitle>
                <div className="space-y-1">
                  {categories.map((category: { name: string }) => (
                    <Button
                      className="w-full justify-start"
                      variant="ghost"
                      key={category.name}
                      asChild
                    >
                      <DrawerClose asChild>
                        <Link href={`/search?category=${category.name}`}>
                          {category.name}
                        </Link>
                      </DrawerClose>
                    </Button>
                  ))}
                </div>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/logo.svg"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            {APP_NAME}
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
      <div className="md:hidden block   px-5 pb-2">
        <Search />
      </div>
    </header>
  );
};

export default Header;
```

3. components/shared/footer.tsx

```ts
import { APP_NAME } from "@/lib/constants";
const Footer = () => {
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        2024 {APP_NAME}. All Rights Reserved.
      </div>
    </footer>
  );
};
```

4. app/(root)/layout.tsx

```ts
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import React from "react";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      {modal}
      <Footer />
    </div>
  );
}
```

5. npx shadcn@latest add card
6. components/shared/product/product-card.tsx

```ts
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            alt={product.name}
            className="aspect-square object-cover rounded"
            height={300}
            src={product.images![0]}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="grid gap-1.5 text-sm leading-4">
          <p className="text-xs leading-3">{product.brand}</p>
        </div>
        <div className="grid gap-1.5 text-sm leading-4">
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm font-medium">{product.name}</h2>
          </Link>
        </div>
        <div className="flex-between gap-4">
          <p>{product.rating} stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">${product.price}</p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
```

7. components/shared/product/product-list.tsx

```ts
import React from "react";

import ProductCard from "./product-card";

const ProductList = ({ data }: { data: any }) => {
  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((product: any) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </>
  );
};

export default ProductList;
```
