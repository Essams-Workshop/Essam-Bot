#!/usr/bin/env bash

# README
# *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
# This script automated the setup for multiple
# postgres databases and users within a single
# instance (check compose.yml for more context).
# The intention of this script is to remove all
# manual configuration steps documented within the
# root "README.md".
#
# Requirements:
# - Docker container must be running (active state with docker
#   compose up -d).
# - .env file with all required environment variables.
#
# Current File: setup-dcrdb.sh
# *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

set -e

ESSAM_BOT_USER="${ESSAM_BOT_USER:-essam-bot}"
ESSAM_BOT_PASS="${ESSAM_BOT_PASS:-essam-bot}"
ESSAM_BOT_DB=${ESSAM_BOT_DB:-essam-bot}

# LANGFUSE_USER="${LANGFUSE_USER:-langfuse}"
# LANGFUSE_PASS="${LANGFUSE_PASSWORD:-langfuse}"
# LANGFUSE_DB="${LANGFUSE_DB:-langfuse}"

POSTGRES_SUPERUSER="${POSTGRES_USER}"

setup_dbu() {
  local db_name="$1"
  local db_user="$2"
  local db_pass="$3"

  echo "Setting up database '$db_name' with user '$db_user'"

  echo "Creating new user: '$db_user'"
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_SUPERUSER" --dbname "$POSTGRES_DB" <<-EOSQL
    DO \$\$
    BEGIN
      IF NOT EXISTS (SELECT FROM pg_catalog.pg_user WHERE usename = '$db_user') THEN
        CREATE USER $db_user WITH PASSWORD '$db_pass';
        RAISE NOTICE 'User $db_user created successfully';
      ELSE
        RAISE NOTICE 'User $db_user already exists, skipping';
      END IF;
    END
    \$\$;
EOSQL

  echo "Creating database: '$db_name'"
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_SUPERUSER" --dbname "$POSTGRES_DB" <<-EOSQL
    SELECT 'CREATE DATABASE $db_name OWNER $db_user'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$db_name')\gexec
EOSQL

  # NOTE: Database Privileges
  echo "Granting ALL privileges on database: '$db_name' to: '$db_user'"
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_SUPERUSER" --dbname "$POSTGRES_DB" <<-EOSQL
    GRANT ALL PRIVILEGES ON DATABASE $db_name TO $db_user;
EOSQL

  # NOTE: Schema Privileges
  echo "Granting schema privileges on: '$db_name' to: '$db_user'"
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_SUPERUSER" --dbname "$db_name" <<-EOSQL
    GRANT USAGE ON SCHEMA public TO $db_user;
    GRANT CREATE ON SCHEMA public TO $db_user;
EOSQL

  echo "Database '$db_name' setup has been successfully completed."
}

setup_dbu "$ESSAM_BOT_DB" "$ESSAM_BOT_USER" "$ESSAM_BOT_PASS"

echo "Database configuration has been completed successfully."