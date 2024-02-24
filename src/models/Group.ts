
import { Entity, Property, PrimaryKey, ManyToOne, ManyToMany, Collection } from "@mikro-orm/core";
import { User } from './User'
import { People } from './People'
import { Message } from './Message'

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

    @ManyToMany(() => Message, message => message.groups, { owner: true })
    messages = new Collection<Message>(this);
}

//mikro-orm migration:up 
// mikro-orm migration:create