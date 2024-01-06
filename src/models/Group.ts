
import { Entity, Property, PrimaryKey, ManyToOne } from "@mikro-orm/core";
import { User } from './User'

@Entity()
export class Group {

    @PrimaryKey()
    id!: number;
    
    @Property()
    name!: string;
  
    @ManyToOne() // plain decorator is enough, type will be sniffer via reflection!
    user!: User;

}

//mikro-orm migration:up 
// mikro-orm migration:create