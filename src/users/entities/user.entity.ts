import { Order } from "src/orders/entities/order.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => Order, order => order.user)
    orders: Order[]
}