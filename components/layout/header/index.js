import classnames from "classnames";
import { get } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./header.module.css";
export default function Header() {
  const router = useRouter();

  const menus = [
    {
      title: "The Rarest",
      link: "/the-rarest",
    },
    {
      title: "The Octave Premium",
      link: "/the-octave-premium",
    },
  ];

  return (
    <nav className={classnames(styles.navBar, "bg-black flex items-center justify-around mt-[17px] mb-[24px] sm:h-[84px] h-[76px]")}>
      <Link href="/the-rarest">
        <span className={`${get(router, "pathname") === "/the-rarest" ? styles.active : ""}`}> the rarest </span>
      </Link>

      <div className="cursor-pointer">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="Logo" width={103} height={56} />
        </Link>
      </div>

      <Link href="/the-octave-premium">
        <span className={`${get(router, "pathname") === "/the-octave-premium" ? styles.active : ""}`}> the octave premium </span>
      </Link>
    </nav>
  );
}
