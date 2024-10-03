import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    shippingAddress: string

    @Column()
    totalAmount: number

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({ name: 'id' })
    user: User

    @ManyToMany(() => Product, product => product.orders)
    @JoinTable(
        {
            name: "order_products"
        }
    )
    products: Product[]
}
