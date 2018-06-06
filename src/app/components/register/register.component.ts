import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CreateUser } from '../../class_objects/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor(private userService: UserService, private router: Router, private toastr: ToastrService) {}

	ngOnInit() {
	}

	register(value: any): void {
		if (!value['user']) { return; }
		this.userService.createUser(value as CreateUser)
		.subscribe(response => {
			
			if(response['message'] == "Created") {
				localStorage.setItem('change-password-message', 'Usuario creado correctamente. Su contraseña ha sido enviada a su correo.');
				this.toastr.success('Usuario creado correctamente. Consulte en su correo la contraseña temporal asignada.');
				this.router.navigate(['/home']);
			}
		});
	}
}
