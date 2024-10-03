import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    readonly shippingAddress: string;

    @IsNotEmpty()
    @IsNumber()
    readonly totalAmount: number;
}
