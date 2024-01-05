
export default {
    entities: ['./src/models/*'], 
    //dbName: 'safe_texting_api_development',
    type: 'postgresql',
    //user: "aclark",
    //host: "localhost"
    clientUrl: process.env.DATABASE_URL,
    driverOptions: {
        connection: { ssl: (process.env.DB_ENABLE_SSL == "true"), rejectUnauthorized: false },
    }

 }

