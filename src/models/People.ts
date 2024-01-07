
import { Entity, Property, PrimaryKey, ManyToMany, Collection, ManyToOne } from "@mikro-orm/core";

import { Group } from './Group'
import { Organization } from './Organization'

@Entity()
export class People {

    @PrimaryKey()
    id!: number;
    
    @Property()
    email: string;

    @Property()
    firstName: string;

    @Property()
    lastName: string;

    @Property()
    phoneNumber: string;

    @ManyToMany(() => Group, group => group.people)
    groups = new Collection<Group>(this);

    @ManyToOne(() => Organization)
    organization?: Organization;

  
}
//mikro-orm migration:up 
// mikro-orm migration:create