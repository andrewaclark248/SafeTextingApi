import { DataSource } from "typeorm"

const MyDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "aclark",
    password: "",
    database: "safe_texting_development",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true
})

export default MyDataSource;