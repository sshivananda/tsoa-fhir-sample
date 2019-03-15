import {Route, Post, Body} from 'tsoa';

@Route('Users')
export class UsersController {

    /** 
     * Create a user 
     * @param request This is a user creation request description 
     */
    @Post()
    public async Create(@Body() request: fhir.Patient): Promise<void> {
        return;
    }

}
