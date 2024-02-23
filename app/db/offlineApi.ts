import { offlineDbName, openDatabase } from "./offlineDb";
import * as SQLite from "expo-sqlite";

const pathToDbFile = "./" + offlineDbName;

const selectDrugNamesQuery = `SELECT DISTINCT drug.trade_name FROM drug WHERE drug.country_code LIKE (?);`;

export function cleanTrialDataString(trialData: string) {
  let regex = /\d{1,4}\-TRIAL\-(.*)\s\d{1,4}/;

  let match = trialData.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return trialData;
}

export async function getCountryDrugNamesOffline(countryCode: string): Promise<string[]> {
  const db = await openDatabase(pathToDbFile);
  console.log("db_opened");
  const readOnly = true;
  let result: string[] = [];
  try {
    await db.transactionAsync(async (tx) => {
      const queryResult = await tx.executeSqlAsync(selectDrugNamesQuery, [countryCode]);
      console.log("SQLite result:", queryResult.rows);
      result = queryResult.rows.map((row) => cleanTrialDataString(row.trade_name));
    }, readOnly);
  } catch (e) {
    console.error("Error executing SQL:", e);
  } finally {
    await db.closeAsync();
    console.log("db_closed");
  }
  console.log(result);
  return result;
}

//-- sourceCountryCode = POL
//-- sourceDrugName = Fervex
const selectATCCodeQuery = `SELECT DISTINCT active_ingredient.atc_code FROM drug
         JOIN active_ingredient_drug ON drug.id = active_ingredient_drug.drug_id
         JOIN active_ingredient ON active_ingredient.atc_code = active_ingredient_drug.active_ingredients_atc_code
WHERE drug.country_code LIKE (?) AND drug.trade_name LIKE (?);`;

//FOR ALL ATC CODE RESULTS
//-- destianationCountry = GBR
//-- atcCode = N02BE51
const selectAlternativeDrugListQuery = `SELECT DISTINCT drug.id, active_ingredient.name, drug.country_code, drug.trade_name, drug.pharmaceutical_form, drug.route_of_administration, drug.dosage
FROM drug
         JOIN active_ingredient_drug ON drug.id = active_ingredient_drug.drug_id
         JOIN active_ingredient ON active_ingredient.atc_code = active_ingredient_drug.active_ingredients_atc_code
WHERE drug.country_code = (?) AND active_ingredient.atc_code = (?);`;

export async function getAlternativeDrugListOffline(sourceCountryCode: string, sourceDrugName: string) {
  const db = await openDatabase(pathToDbFile);
  console.log("db_opened");
  const readOnly = true;
  try {
    await db.transactionAsync(async (tx) => {
      const result = await tx.executeSqlAsync(selectATCCodeQuery, [sourceCountryCode, sourceDrugName]);
      console.log("executed SQL");
      console.log("SQLite result:", result.rows);
    }, readOnly);
  } catch (e) {
    console.log("Error executing SQL:", e);
    await db.closeAsync();
  } finally {
    await db.closeAsync();
    console.log("db_closed");
  }
}
