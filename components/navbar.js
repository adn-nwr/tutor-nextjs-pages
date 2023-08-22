import Link from "next/link";

export default function Navbar() {
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
      </ul>
    </>
  );
}
