import { SQLiteDatabase } from "expo-sqlite";
import { IStunting } from "../hooks/useDataStunting";

const execTable = async (db: SQLiteDatabase) => {
  db.execAsync(
    `CREATE TABLE IF NOT EXISTS stunting (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        nama TEXT, 
        tanggal_lahir TEXT, 
        jenis_kelamin TEXT, 
        berat INTEGER, 
        tinggi INTEGER, 
        status TEXT, 
        created_at TEXT);"`
  );
};

const insertData = async (db: SQLiteDatabase, data: IStunting) => {
  const ress = await db.runAsync(
    `INSERT INTO stunting (
        nama, 
        tanggal_lahir, 
        jenis_kelamin, 
        berat, 
        tinggi, 
        status, 
        created_at) 
            VALUES (
        ?, ?, ?, ?, ?, ?, ?)`,
    data.nama,
    data.tanggal_lahir,
    data.jenis_kelamin,
    data.berat,
    data.tinggi,
    data.status,
    data.created_at
  );
  console.log(ress);
};

const getAllData = async (db: SQLiteDatabase) => {
  const result = await db.getAllAsync("SELECT * FROM stunting");
  console.log(result);
  return result;
};

export { execTable, insertData, getAllData };
