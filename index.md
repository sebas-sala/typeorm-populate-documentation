---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
---

# Quick Start

TypeORM populate is a lightweight library that helps seeding your database. It works for testing aswell.

Here's an example how to use it:

---

```bash
# Initialize the files
npx typeorm-populate init

# Create a factory
npx typeorm-populate factory
```

Your factory should look something like this:

```js
export class EntityFactory extends Factory<Entity> {
  constructor(dataSource: DataSource) {
		super(dataSource, Entity);
	}

	protected defaultData(): Partial<Entity> {
		return {};
	}
}
```

Add the factory within the seed.ts file, and define some methdos.

```js
import factories from "@factories";

function main() {
  const dataSource = new DataSource({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: [Entity],
  });

  const typeormPopulate = new TypeormPopulate({
    dataSource,
    factories,
  });

  await typeormPopulate.initialize()
  await typeormPopulate.createMany("EntityFactory", 5)
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Run the seed command

```bash
npx typeorm-populate seed
```

> [!NOTE]
> That't it! Your database is seeded.

## More

Check out more samples at the repository [full list of examples](https://github.com/sebas-sala/typeorm-populate/tree/main/examples).
