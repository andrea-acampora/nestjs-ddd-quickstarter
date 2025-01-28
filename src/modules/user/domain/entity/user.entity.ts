import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity({
  tableName: 'Users',
})
export class User {
  @PrimaryKey()
  id: string = v4();

  @Property({ unique: true })
  email!: string;

  @Property()
  password!: string;

  @Property({ nullable: true })
  firstname?: string;

  @Property({ nullable: true })
  lastname?: string;

  @Property({ onCreate: () => new Date() })
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
