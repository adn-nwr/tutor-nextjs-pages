import dbPool from "../../lib/db";
import styles from "../../styles/Umum.module.css";

export default function Umum({ detailPengguna }) {
  return (
    <>
      <h3 className={styles.ChartreuseOnBlueViolet}>Pengaturan Umum</h3>
      userId: {detailPengguna.userId}
      <br />
      userNama: {detailPengguna.userNama}
      <br />
      userLastLogin: {detailPengguna.userLastLogin}
      <br />
      <hr />
    </>
  );
}

export async function getStaticProps() {
  const [DATA] = await dbPool.query(
    `SELECT * FROM sys_user WHERE userId='adnan'`
  );
  return { props: { detailPengguna: JSON.parse(JSON.stringify(DATA[0])) } };
}
