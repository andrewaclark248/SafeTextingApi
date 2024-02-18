
import { Entity, Property, PrimaryKey, ManyToOne, ManyToMany, Collection } from "@mikro-orm/core";
import { User } from './User'
import { People } from './People'

@Entity()
export class Phone {

    @PrimaryKey()
    id!: number;
    
    @Property()
    number!: string;

    @ManyToOne(() => User)
    user?: User;


}

//mikro-orm migration:up 
// mikro-orm migration:create