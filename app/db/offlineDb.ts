import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';

const dbAsset = require("./repositoryTRIAL.db");
export const offlineDbName = 'repositoryTRIAL.db';


export async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.SQLiteDatabase> {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }

  const asset = Asset.fromModule(dbAsset).uri;
  console.log(asset);

  if ((await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite/' + offlineDbName)).exists) {
    console.log("return existing db");
    return SQLite.openDatabase(offlineDbName);
  }

  await FileSystem.downloadAsync(
    Asset.fromModule(dbAsset).uri,
    FileSystem.documentDirectory + 'SQLite/' + offlineDbName
  );
  console.log("db_downloaded");
  return SQLite.openDatabase(offlineDbName);
}