import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Person } from "./utils/Person";
import { Client } from "./Client";


@Entity('banker')
export class Banker extends Person {

    @Column({
        unique: true,
        length: 10
    })
    employee_number: string;

    @ManyToMany(
        () => Client
    )
    @JoinTable({
        name: 'bankers_clients',
        joinColumn: {
            name: 'banker',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {  // defines the things for the client
            name: 'client',
            referencedColumnName: 'id'
        }
    })
    clients: Client[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
