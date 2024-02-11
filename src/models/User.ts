
import { Entity, Property, PrimaryKey, OneToMany, Collection, ManyToOne } from "@mikro-orm/core";

import { Group } from './Group'
import { Organization } from './Organization'
import { Phone } from './Phone'

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

    @OneToMany(() => Phone, phone => phone.user)
    phones = new Collection<Phone>(this);
  
}
//mikro-orm migration:up 
// mikro-orm migration:create