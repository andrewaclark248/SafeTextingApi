
import { Entity, Property, PrimaryKey, ManyToOne, OneToMany, Collection } from "@mikro-orm/core";
import { User } from './User'
import { People } from './People'

@Entity()
export class Organization {

    @PrimaryKey()
    id!: number;
    
    @Property()
    name!: string;

    @OneToMany(() => User, user => user.organization)
    books1 = new Collection<User>(this);


    @OneToMany(() => People, people => people.organization)
    people = new Collection<People>(this);

}

// mikro-orm migration:up 
// mikro-orm migration:create