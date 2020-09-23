import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  // run the migration before
  await orm.getMigrator().up();
  // const post = orm.em.create(Post, { title: "title" });
  // await orm.em.persistAndFlush(post);
  /*  console.log("--------------------------------sql2");
  await orm.em.nativeInsert(Post, { title: "title 2" }); */

  // const post = await orm.em.find(Post, { title: "title" });
  // console.log("post: ", post);
};
console.log("hello");
main().catch((e) => {
  console.log(e?.message);
});
