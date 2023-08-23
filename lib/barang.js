const dbPool = require("./db");

module.exports.ambilListBarang = async function () {
  const [DATA] = await dbPool.query(`SELECT * FROM tb_barang LIMIT 2`);
  return DATA;
};
