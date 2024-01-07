
import { Entity, Property, PrimaryKey, ManyToOne, ManyToMany, Collection } from "@mikro-orm/core";
import { User } from './User'
import { People } from './People'

@Entity()
export class Group {

    @PrimaryKey()
    id!: number;
    
    @Property()
    name!: string;
  
    @ManyToOne() // plain decorator is enough, type will be sniffer via reflection!
    user!: User;

    @ManyToMany(() => People, 'groups', { owner: true })
    people = new Collection<People>(this);

}

//mikro-orm migration:up 
// mikro-orm migration:create