export interface UserDto {
    id: string;
    role: string;
    old_name: string;
    transformed_surname: string;
    date_of_birth: string;
    address: {
        post_code: string;
        sreet_name: string;
        house_num: string
    }
}

export interface User {
    id: string;
    role: string;
    name: string;
        surname: string;
        dateOfBirth: string;
        address: {
    postcode: string;
    street: string;
    houseNum: string
    }
    }
    

