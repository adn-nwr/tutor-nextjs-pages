import dbPool from "../../lib/db";
import { useRouter } from "next/router";

export default function Sapuan({
  detail_halaman = {
    brgKode: null,
    brgNama: null,
    brgPaket: null,
    brgSatuan: null,
    brgHarga: null,
  },
}) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  return (
    <>
      <h3>Halaman Sapuan</h3>
      <h4>Kode: {detail_halaman.brgKode}</h4>
      <h4>Nama: {detail_halaman.brgNama}</h4>
      <h4>Paket: {detail_halaman.brgPaket}</h4>
      <h4>Satuan: {detail_halaman.brgSatuan}</h4>
      <h4>Harga: {detail_halaman.brgHarga}</h4>
    </>
  );
}

export async function getStaticProps() {
  const [DATA] = await dbPool.query(
    `SELECT * FROM tb_barang WHERE brgKode="BSWSAPUAN"`
  );
  return {
    props: {
      detail_halaman: DATA[0],
    },
    revalidate: 1,
  };
}
