import { SQLiteDatabase } from "expo-sqlite";
import { IAnak, IStunting } from "../hooks/useDataStunting";

const execTable = async (db: SQLiteDatabase) => {
  await db.runAsync(
    `CREATE TABLE IF NOT EXISTS anak (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nik TEXT,
        nama TEXT, 
        tanggal_lahir TEXT, 
        jenis_kelamin TEXT,
        created_at TEXT);" 
    `
  );

  await db.runAsync(
    `CREATE TABLE IF NOT EXISTS stunting (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nik TEXT,
        berat INTEGER, 
        tinggi INTEGER, 
        status TEXT, 
        created_at TEXT);"    
    `
  );
};

const insertDataAnak = async (db: SQLiteDatabase, data: IAnak) => {
  const ress = await db.runAsync(
    `INSERT INTO anak (
        nik,
        nama,
        tanggal_lahir, 
        jenis_kelamin,
        created_at) 
            VALUES (
        ?, ?, ?, ?, ?)`,
    data.nik,
    data.nama,
    data.tanggal_lahir,
    data.jenis_kelamin,
    data.created_at
  );
  console.log("insert data anak : ", ress);
};

const insertDataStunting = async (db: SQLiteDatabase, data: IStunting) => {
  const ress = await db.runAsync(
    `INSERT INTO stunting (
          nik,
          berat,
          tinggi, 
          status,
          created_at) 
              VALUES (
          ?, ?, ?, ?, ?)`,
    data.nik,
    data.berat,
    data.tinggi,
    data.status,
    data.created_at
  );
  console.log("insert data stunting : ", ress);
};

const deleteDataStunting = async (db: SQLiteDatabase, id: number) => {
  const ress = await db.runAsync(`Delete from stunting where id = ?`, id);
  console.log("delete data stunting : ", ress);
};

const getAllDataAnak = async (db: SQLiteDatabase) => {
  const result = await db.getAllAsync("SELECT * FROM anak");
  return result;
};

const getDataAnakByNik = async (db: SQLiteDatabase, nik: string) => {
  const result = await db.getAllAsync(`SELECT * FROM anak where nik='${nik}'`);
  return result;
};

const getAllDataStunting = async (db: SQLiteDatabase, nik: string) => {
  const result = await db.getAllAsync(
    `SELECT * FROM stunting where nik='${nik}'`
  );
  return result;
};

export {
  execTable,
  insertDataAnak,
  insertDataStunting,
  getAllDataAnak,
  getDataAnakByNik,
  getAllDataStunting,
  deleteDataStunting,
};
