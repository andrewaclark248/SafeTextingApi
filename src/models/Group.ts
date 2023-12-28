
import { Entity, Property, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Group {

    @PrimaryKey()
    id!: number;
    
    @Property()
    name!: string;
  
}

//mikro-orm migration:up 
// mikro-orm migration:create