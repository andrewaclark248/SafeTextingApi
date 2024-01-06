
import { Entity, Property, PrimaryKey, OneToMany, Collection } from "@mikro-orm/core";

import { Group } from './Group'

@Entity()
export class User {

    @PrimaryKey()
    id!: number;
    
    @Property()
    email!: string;

    @OneToMany(() => Group, group => group.user)
    groups = new Collection<Group>(this);

  
}
//mikro-orm migration:up 
// mikro-orm migration:create