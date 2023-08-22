export default ({ DATA }) => {
  return (
    <>
      <h3>Daftar Pengguna</h3>
      <table border="1" cellPadding={2} cellSpacing={2}>
        <thead>
          <tr>
            <th>userId</th>
            <th>userNama</th>
            <th>userLastLogin</th>
          </tr>
        </thead>
        <tbody>
          <PenggunaTBodyChildren listPengguna={DATA} />
        </tbody>
      </table>
    </>
  );
};

export async function getServerSideProps() {
  const DATA = [
    { userId: "adnan", userNama: "Adnan", userLastLogin: "2023-08-22 21:25" },
    {
      userId: "admin",
      userNama: "Administrator",
      userLastLogin: "2019-06-22 01:25",
    },
    {
      userId: "auditjkt",
      userNama: "Audit Jakarta",
      userLastLogin: "2023-01-13 12:49",
    },
  ];
  return { props: { DATA } };
}

function PenggunaTBodyChildren({ listPengguna }) {
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
