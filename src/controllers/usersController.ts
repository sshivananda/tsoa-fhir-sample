import {Route, Post, Body} from 'tsoa';
import {User, UserCreateRequest} from '../models/user';

@Route('Users')
export class UsersController {

    /** 
     * Create a user 
     * @param request This is a user creation request description 
     */
    @Post()
    public async Create(@Body() request: UserCreateRequest): Promise<User> {
        return {
            createdAt: new Date(),
            email: request.email,
            id: 666
        };
    }

}
