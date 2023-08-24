import dbPool from "../../lib/db";
import { ambilListBarang } from "../../lib/barang";
import { useRouter } from "next/router";

export default function Artikel({
  detail_artikel = {
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
      <h3>Halaman Artikel</h3>
      <h4>Kode: {detail_artikel.brgKode}</h4>
      <h4>Nama: {detail_artikel.brgNama}</h4>
      <h4>Paket: {detail_artikel.brgPaket}</h4>
      <h4>Satuan: {detail_artikel.brgSatuan}</h4>
      <h4>Harga: {detail_artikel.brgHarga}</h4>
    </>
  );
}

export async function getStaticPaths() {
  const DATA = await ambilListBarang();
  return {
    paths: DATA.map((row) => ({ params: { artikel_id: row.brgKode } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [DATA] = await dbPool.query(
    `SELECT * FROM tb_barang WHERE brgKode="${params.artikel_id}"`
  );
  return {
    props: {
      detail_artikel: DATA[0],
    },
    revalidate: 60,
  };
}
