import { MikroORM } from "@mikro-orm/core";

import { User } from './models/User'


import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package

export async function initOrm() {

  const TextingAppOrm = await MikroORM.init({
    //entities: ['./entities'], // path to our JS entities (dist), relative to `baseDir`
    entities: [User], // path to our TS entities (src), relative to `baseDir`
    dbName: 'safe_texting_api_development',
    type: 'postgresql',
    user: "aclark",
    host: "localhost"
  });

  return TextingAppOrm;

}




export async function createDatase() {
  const orm = await MikroORM.init({
    entities: [],
    dbName: 'safe_texting_api_development',
    user: "aclark",
    type: 'postgresql',
    host: "localhost"
  });

  orm.em
}


