import Realm from "realm";

// Define your object model
class Stunting extends Realm.Object<Stunting> {
  _id!: Realm.BSON.ObjectId;
  nama!: string;
  umur!: number;
  berat!: number;
  tinggi!: number;
  kelamin!: string;
  konBeratUmur!: string;
  konTinggiUmur!: string;
  konBeratTinggi!: string;
  rekBeratUmur!: number;
  rekTinggiUmur!: number;
  rekBeratTinggi!: number;

  static schema = {
    name: "Stunting",
    properties: {
      _id: "objectId",
      nama: "string",
      umur: "double",
      berat: "double",
      tinggi: "double",
      kelamin: "string",
      konBeratUmur: "string",
      konTinggiUmur: "string",
      konBeratTinggi: "string",
      rekBeratUmur: "double",
      rekTinggiUmur: "double",
      rekBeratTinggi: "double",
    },
    primaryKey: "_id",
  };
}

export { Stunting };
