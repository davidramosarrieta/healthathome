export class LoginUser {
	user: string;
	password: string;
}

export class CreateUser{
	age: number;
	gender: string;
	lasName: string;
	name: string;
	password: string;
	type: string;
	user: string;
	workingHours: string;
}

export class ChangePassword{
	newPassword: string;
	oldPassword: string;
	user: string;
}