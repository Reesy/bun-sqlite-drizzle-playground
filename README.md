# bun-sqlite-drizzle-playground

A small repository for experimenting with Drizzle ORM and SQLite in Bun.

## Example from Drizzle Documentation

Follow this guide for detailed instructions: [Get Started with Bun and SQLite](https://orm.drizzle.team/docs/get-started/bun-sqlite-new)

## Usage

### Generate Migration Files
Generates migration files based on changes in your schema definitions. Use this command when you have modified your schema, and you want Drizzle to generate SQL migration files to reflect these changes.

```
bun db:generate
```

### Apply Pending Migrations
Applies all pending migrations to update the database schema. This command is used to bring your database up-to-date with the latest schema changes by executing the migration files.

```
bun db:migrate
```

### Start the Development Server
Runs the development server with Bun. This command typically runs your application, so you can interact with it and test out database queries or API endpoints.

```
bun dev
```

## Caveats

There is currently a limitation with Bun that requires an additional SQLite driver (`@libsql/client`) for handling migrations in Drizzle ORM. See the relevant issue for more details: [drizzle-team/drizzle-orm#1520](https://github.com/drizzle-team/drizzle-orm/issues/1520). Install the driver with:

```
bun add @libsql/client
```