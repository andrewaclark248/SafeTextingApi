import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core";

import { User } from './models/User'


import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package

import { TsMorphMetadataProvider } from '@mikro-orm/reflection';



export async function initOrm() {
  if (process.env.NODE_ENV == "development") {
    const TextingAppOrm = await MikroORM.init({
      entitiesTs: ['./src/models'], // path to our JS entities (dist), relative to `baseDir`
      entities: ['./models'], // path to our TS entities (src), relative to `baseDir`
      dbName: 'safe_texting_api_development',
      type: 'postgresql',
      user: "aclark",
      host: "localhost",
      metadataProvider: TsMorphMetadataProvider,
      clientUrl: ""
    });
    return TextingAppOrm;
  } else {
    const TextingAppOrm = await MikroORM.init({
      entitiesTs: ['./src/models'], // path to our JS entities (dist), relative to `baseDir`
      entities: ['./models'], // path to our TS entities (src), relative to `baseDir`
      dbName: 'safe_texting_api_development',
      type: 'postgresql',
      //user: "aclark",
      //host: "localhost",
      metadataProvider: TsMorphMetadataProvider,
      clientUrl: process.env.DATABASE_URL
    });


    return TextingAppOrm;

  }



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


