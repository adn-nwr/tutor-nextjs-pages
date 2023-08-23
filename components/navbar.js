import Link from "next/link";
import { useEffect } from "react";

export default function Navbar({ listBarang = [] }) {
  return (
    <>
      <h1>Beranda</h1>
      <ul>
        <li>
          <Link href="/">Halaman Utama</Link>
        </li>
        <li>
          <Link href="/tentang">Tentang</Link>
        </li>
        <li>
          <Link href="/pengaturan">Pengaturan</Link>
          <ul>
            <li>
              <Link href="/pengaturan/pengguna">Pengguna</Link>
            </li>
            <li>
              <Link href="/pengaturan/umum">Umum</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/login">Login Pengguna</Link>
        </li>
        <li>
          <Link href="/artikel">Artikel</Link>
          <ul>
            {listBarang.map((row, idx) => (
              <li key={idx}>
                <Link href={"/artikel/" + row.brgKode}>{row.brgNama}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
