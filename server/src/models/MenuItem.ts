import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import {
  ObjectType,
  Field,
  ID,
  Resolver,
  Query,
  Mutation,
  Arg,
  InputType
} from "type-graphql";

@Entity()
@ObjectType()
export class MenuItem extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  // @ts-ignore
  id: string;

  @Field(() => String)
  @Column()
  // @ts-ignore
  name: string;

  @Field(() => String)
  @Column()
  // @ts-ignore
  description: string;

  @Field(() => String)
  @Column()
  // @ts-ignore
  slug: string;
}

@InputType()
class CreateMenuItemInput {
  @Field()
  // @ts-ignore
  name: string;

  @Field()
  // @ts-ignore
  description: string;

  @Field()
  // @ts-ignore
  slug: string;
}

@Resolver()
export class MenuItemResolver {
  @Query(() => [MenuItem])
  getMenuItems() {
    return MenuItem.find();
  }

  @Mutation(() => MenuItem)
  async createMenuItem(@Arg("data") data: CreateMenuItemInput) {
    const item = MenuItem.create(data);
    await item.save();
    return item;
  }
}
