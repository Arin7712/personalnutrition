"use client";

import Image from "next/image";
import React from "react";
import { navItems } from "@/constants";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const path = usePathname();

  return (
    <div
      className={`flex items-center justify-between md:px-[6rem] px-6 pt-10 ${
        path == "/blog" || "/"  ? "absolute" : "relative"
      } w-full z-20`}
    >
      <div className="md:order-[-1] order-1">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <div className="md:block hidden">
        <ul className="flex gap-[3rem] items-center pl-8">
          {navItems.map((item, index) => (
            <li key={index} className="hover:cursor-pointer">
              {item.name === "Products" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none hover:cursor-pointer">
                    {item.name}
                    <ChevronDown className="size-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className="itailic">
                      <Link href="/product">Personalized Guide</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuLabel className="itailic">
                      <Link href="/product-2">Product 2</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuItem>Assisting Journey</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                
                <a href={item.href} className={`text-md ${item.name === 'About' ? '' : ''}`}>
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:block hidden">
        <Button className="gradient-green-1 text-sm rounded-full px-10 py-5 hover:cursor-pointer">
          Start the Quiz
        </Button>
      </div>
      <div className="md:hidden block">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Image src="/logo.png" alt="logo" width={80} height={80} />
              </SheetTitle>
            </SheetHeader>
            <div>
              <ul className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="hover:cursor-pointer border-t-[1px] px-4 pt-4"
                  >
                    {item.name === "Products" ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none hover:cursor-pointer">
                          {item.name}
                          <ChevronDown className="size-3" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel className="itailic">
                            <Link href="/product">Personalized Guide</Link>
                          </DropdownMenuLabel>
                          <DropdownMenuLabel className="itailic">
                            <Link href="/product-2">Product 2</Link>
                          </DropdownMenuLabel>
                          <DropdownMenuItem>Assisting Journey</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <a href={item.href} className="text-md">
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
