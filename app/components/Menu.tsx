"use client";

import Image from "next/image";
import React, { useState } from "react";
import type { MenuTypes } from "../types";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links: MenuTypes[] = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const user: boolean = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 w-full top-24 h-[calc(100vh-6rem)] flex items-center flex-col gap-8 z-10 justify-center">
          {links.map((link) => (
            <Link key={link.id} href={link.url} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link onClick={() => setOpen(false)} href="/login">
              Login
            </Link>
          ) : (
            <Link onClick={() => setOpen(false)} href="/orders">
              Orders
            </Link>
          )}
          <Link onClick={() => setOpen(false)} href="/cart">
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
