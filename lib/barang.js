const dbPool = require("./db");

module.exports.ambilListBarang = async function () {
  const [DATA] = await dbPool.query(`SELECT * FROM tb_barang`);
  return DATA;
};
