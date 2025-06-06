
export default {
    entities: ['./src/models/*'], 
    type: 'postgresql',
    //user: "aclark",
    //host: "localhost"
    //dbName: 'safe_texting_api_development',
    clientUrl: process.env.DATABASE_URL || "postgres://aclark:@localhost:5432/safe_texting_api_development", //,
    driverOptions: {
        connection: { ssl: (process.env.DB_ENABLE_SSL == "true" ? { rejectUnauthorized: false } : false) },
    },
    migrations: { disableForeignKeys: false }
 }





