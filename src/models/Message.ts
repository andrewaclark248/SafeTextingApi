
import { Entity, Property, PrimaryKey, ManyToOne, ManyToMany, Collection, OneToMany } from "@mikro-orm/core";
import { User } from './User'
import { Group } from './Group'
import { Organization } from "./Organization";

@Entity()
export class Message {

    @PrimaryKey()
    id!: number;
    
    @Property()
    name!: string;

    @Property()
    message!: string;

    @Property()
    messageType!: string;
  
    @ManyToOne(() => User)
    user!: User;

    //@ManyToMany(() => Group, group => group.messages, { mappedBy: group => group.messages })
    @ManyToMany(() => Group)
    groups = new Collection<Group>(this);

}

//mikro-orm migration:up 
// mikro-orm migration:create