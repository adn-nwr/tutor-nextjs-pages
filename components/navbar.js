import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <h1>Beranda</h1>
      <ul>
        <li>
          <Link href={"/"}>Halaman Utama</Link>
        </li>
        <li>
          <Link href={"/tentang"}>Tentang</Link>
        </li>
        <li>
          <Link href={"/pengaturan"}>Pengaturan</Link>
        </li>
      </ul>
    </>
  );
}
