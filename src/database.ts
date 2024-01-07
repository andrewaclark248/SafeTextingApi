import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core";
import { User } from './models/User'
import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';


export async function initOrm() {

    const TextingAppOrm = await MikroORM.init({
      entitiesTs: ['./src/models'], // path to our JS entities (dist), relative to `baseDir`
      entities: ['./src/models'], // path to our TS entities (src), relative to `baseDir`
      type: 'postgresql',
      metadataProvider: TsMorphMetadataProvider,
      clientUrl: process.env.DATABASE_URL,
      driverOptions: {
        connection: { ssl: (process.env.DB_ENABLE_SSL == "true" ? { rejectUnauthorized: false } : false) },
      },
      migrations: { disableForeignKeys: false }

    });
    return TextingAppOrm;

}

