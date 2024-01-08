
import { Entity, Property, PrimaryKey, OneToMany, Collection, ManyToOne } from "@mikro-orm/core";

import { Group } from './Group'
import { Organization } from './Organization'

@Entity()
export class User {

    @PrimaryKey()
    id!: number;
    
    @Property()
    email!: string;

    @OneToMany(() => Group, group => group.user)
    groups = new Collection<Group>(this);
 
    @ManyToOne()
    organization: Organization;

  
}
//mikro-orm migration:up 
// mikro-orm migration:create