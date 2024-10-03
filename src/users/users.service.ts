import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    create(createUserDto: CreateUserDto) {
        return { message: 'User created', data: createUserDto };
    }

    findAll() {
        return;
    }

    findOne(id: number) {
        return;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return { message: 'User updated', data: updateUserDto };
    }

    remove(id: number) {
        return;
    }
}
