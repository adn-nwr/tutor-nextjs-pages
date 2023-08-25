import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ listBarang = [] }) {
  const router = useRouter();
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
            <Link href="/artikel/BSWSAPUAN">Semen Sapuan</Link>
            <li key={-1}>
              <button onClick={() => router.push("/artikel/BSWSAPUAN")}>
                Semen Sapuan
              </button>
            </li>
            <Link href="/halaman/sapuan">Halaman Sapuan</Link>
            <li key={-2}>
              <button onClick={() => router.push("/halaman/sapuan")}>
                Halaman Sapuan
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
