import db from './db';

export const getDevices = async () => { //TODO: Configure this to work for traxer
  try {
    const devicesQuery = `
      SELECT 
        id AS "id", 
        serialnumber AS "serialNumber", 
        name AS "name", 
        brand AS "brand", 
        vendor AS "vendor", 
        type AS "type", 
        osversioncurrent AS "osVersionCurrent", 
        osversionlatest AS "osVersionLatest", 
        clsrating AS "clsRating", 
        remarks AS "remarks"
      FROM devices
      WHERE isCatalog = false;
    `;

    const { rows } = await db.query(devicesQuery);
    return rows;
  } catch (err) {
    console.error('Error fetching devices:', err);
    throw err;
  }
};


export const getCatalog = async () => {
  try {
    const catalogQuery = `
      SELECT 
        id AS "id", 
        serialnumber AS "serialNumber", 
        name AS "name", 
        brand AS "brand", 
        vendor AS "vendor", 
        type AS "type", 
        osversioncurrent AS "osVersionCurrent", 
        osversionlatest AS "osVersionLatest", 
        clsrating AS "clsRating", 
        remarks AS "remarks"
      FROM devices
      WHERE isCatalog = true;
    `;

    const { rows } = await db.query(catalogQuery);
    return rows;
  } catch (err) {
    console.error('Error fetching catalog:', err);
    throw err;
  }
};

export const getRecords = async () => {
  try {
    const recordsQuery = `
      SELECT 
        id AS "id", 
        bodypart AS "bodyPart", 
        recordtype AS "recordType", 
        datetimecreated AS "dateTimeCreated", 
        datetimeaccessed AS "dateTimeAccessed", 
        accesslocation AS "accessLocation", 
        accessterminal AS "accessTerminal", 
        accessaction AS "accessAction", 
        accessedby AS "accessedBy", 
        accessorrole AS "accessorRole"
      FROM records;
    `;

    const { rows } = await db.query(recordsQuery);
    return rows;
  } catch (err) {
    console.error('Error fetching medical records:', err);
    throw err;
  }
};
