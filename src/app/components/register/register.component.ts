import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CreateUser } from '../../class_objects/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor(private userService: UserService, private router: Router) {}

	ngOnInit() {
	}

	register(value: any): void {
		if (!value['user']) { return; }
		this.userService.createUser(value as CreateUser)
		.subscribe(response => {
			if(response['message'] == "Created") {
				localStorage.setItem('change-password-message', 'Usuario creado correctamente. Le hemos enviado un correo con su contraseña, la cual debe cambiar aquí');
				this.router.navigate(['/change-password']);
			}
		});
	}
}
