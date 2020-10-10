import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  // run the migration before
  await orm.getMigrator().up();
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver,UserResolver],
      validate: false,
    }),
    // 所有的resolver都可以访问到
    context: () => ({ em: orm.em }),
  });
  apolloServer.applyMiddleware({ app });
  app.get("/", (_: any, res) => {
    res.send("hello");
  });
  app.listen(4000, () => {
    console.log(`server started on localhost:4000`);
  });
};
main().catch((e) => {
  console.log(e?.message);
});
