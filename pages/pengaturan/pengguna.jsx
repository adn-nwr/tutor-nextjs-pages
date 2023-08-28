import { useRouter } from "next/router";
import dbPool from "../../lib/db";
import styles from "../../styles/Pengguna.module.css";

export default function Pengguna({ listPengguna }) {
  const router = useRouter();
  return (
    <>
      <h3 className={styles.ChartreuseOnBlueViolet}>Daftar Pengguna</h3>
      <button onClick={() => router.reload()}>Refresh Halaman</button>
      <button onClick={() => router.push("/pengaturan/pengguna")}>
        Refresh Data
      </button>
      <br />
      <br />
      <TablePengguna listPengguna={listPengguna} />
      <br />
    </>
  );
}

export async function getServerSideProps() {
  const [DATA] = await dbPool.query(`SELECT * FROM sys_user LIMIT 5`);
  return { props: { listPengguna: JSON.parse(JSON.stringify(DATA)) } };
}

function TablePengguna({ listPengguna }) {
  return (
    <table border={1} cellPadding={2} cellSpacing={2}>
      <thead>
        <tr>
          <th>userId</th>
          <th>userNama</th>
          <th>userLastLogin</th>
        </tr>
      </thead>
      <tbody>
        <TableBodyPengguna listPengguna={listPengguna} />
      </tbody>
    </table>
  );
}

function TableBodyPengguna({ listPengguna }) {
  if (listPengguna.length == 0)
    return (
      <tr>
        <td colSpan="3" align="center">
          Data tidak ditemukan !
        </td>
      </tr>
    );
  else
    return (
      <>
        {listPengguna.map((pengguna, idx) => (
          <tr key={idx}>
            <td>{pengguna.userId}</td>
            <td>{pengguna.userNama}</td>
            <td>{pengguna.userLastLogin}</td>
          </tr>
        ))}
      </>
    );
}
