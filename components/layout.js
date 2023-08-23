import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const listBarang = [
    { brgKode: "BSWABU40KG", brgNama: "PCC UK 40 KG" },
    { brgKode: "BSWABU50KG", brgNama: "PCC UK 50 KG" },
    { brgKode: "BSWCURAHOPC", brgNama: "CURAH - OPC BULK" },
    { brgKode: "BSWCURAHPCC", brgNama: "CURAH - PCC BULK" },
    { brgKode: "BSWJUMBOBAG2TOPC", brgNama: "JUMBO BAG 2 TON OPC" },
    { brgKode: "BSWJUMBOBAG2TPCC", brgNama: "JUMBO BAG 2 TON PCC" },
  ];
  return (
    <>
      <Navbar listBarang={listBarang} />
      {children}
      <Footer />
    </>
  );
}
