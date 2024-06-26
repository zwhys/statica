#!/bin/bash

# Database credentials
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="synergy_prod"
MIGRATIONS_DIR="./migrations"

# Function to check if the database exists
check_db_exists() {
  psql -h $DB_HOST -p $DB_PORT -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname='$DB_NAME'"
}

# Optionally drop the database if it exists (Uncomment to enable)
echo "Checking if database needs to be dropped..."
DB_EXISTS=$(check_db_exists)
if [ ! -z "$DB_EXISTS" ]; then
  echo "Database $DB_NAME exists. Dropping..."
  dropdb -h $DB_HOST -p $DB_PORT $DB_NAME
  if [ $? -ne 0 ]; then
    echo "Failed to drop database $DB_NAME."
    exit 1
  fi
fi

# Create the database if it doesn't exist
echo "Checking if database needs to be created..."
DB_EXISTS=$(check_db_exists)
if [ -z "$DB_EXISTS" ]; then
  echo "Database $DB_NAME does not exist. Creating..."
  createdb -h $DB_HOST -p $DB_PORT $DB_NAME
  if [ $? -ne 0 ]; then
    echo "Failed to create database $DB_NAME."
    exit 1
  fi
else
  echo "Database $DB_NAME already exists."
fi

# Run migration scripts from the migrations directory
echo "Running migration scripts..."
for sql_file in $(ls $MIGRATIONS_DIR/*.sql | sort -V); do
  echo "Applying migration: $sql_file"
  psql -h $DB_HOST -p $DB_PORT -d $DB_NAME -f $sql_file
  if [ $? -ne 0 ]; then
    echo "Migration failed on script: $sql_file"
    exit 1
  fi
done

echo "All migrations applied successfully."
