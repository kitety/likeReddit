import path from "path";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

console.log('__dirname: ', __dirname);
const bb = {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "postgres",
  user: "postgres",
  password: "123456",
  debug: !__prod__,
  type: "postgresql",
  // 函数的第一个参数
} as Parameters<typeof MikroORM.init>[0];
export default bb;
