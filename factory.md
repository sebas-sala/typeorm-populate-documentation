# Factory Class

The factory class is an abstract class that extends multiple methods.
Factories are reusable throughout your application within tests, seeding and more!

## Usage

```js
// entity.factory.ts
import { Factory } from "typeorm-populate"
import type { DataSource } from "typeorm"

export class EntityFactory extends Factory<Entity> {
  constructor(dataSource: DataSource) {
		super(dataSource, Entity);
	}

	protected defaultData(): Partial<Entity> {
		return {};
	}
}

// seed.ts
import { DataSource } from "typeorm"
import { Factory } from "typeorm-populate"

import { Entity } from "@entities/entity"
import { EntityFactory } from "@factories/entity.factory"

function main(){
	const dataSource = new DataSource({
		type: "sqlite",
		database: ":memory:",
		synchronize: true,
		entities: [Entity],
	});

	const entityFactory = new EntityFactory(dataSource)

	await entityFactory.createOne({})
	await entityFactory.createMany()
}
```

::: warning
Replace Entity Word with your Entity Class.

You must implement the defaultData method.
:::

## Hooks

#### Before Create

```js
import { Factory } from "typeorm-populate";
import type { DataSource } from "typeorm";

export class EntityFactory extends Factory<Entity> {
  constructor(dataSource: DataSource) {
    super(dataSource, Entity);

    this.beforeCreate(async (user) => {
      user.name = user.name.toUpperCase();
    });
  }
}
```

#### After Create

```js
import { v4 as uuidv4 } from "uuid";
import { Factory } from "typeorm-populate";
import type { DataSource } from "typeorm";

export class EntityFactory extends Factory<Entity> {
  constructor(dataSource: DataSource) {
    super(dataSource, Entity);

    this.afterCreate(async (user) => {
      user.id = uuidv4();
    });
  }
}
```

## More

Check out more samples at the repository [full list of examples](https://github.com/sebas-sala/typeorm-populate/tree/main/examples).
