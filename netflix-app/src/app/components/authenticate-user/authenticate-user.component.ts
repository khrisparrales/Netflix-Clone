import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../services/User/authenticate.service';
import { hash } from '../../utils/password-encrypt';

@Component({
  selector: 'app-authenticate-user',
  templateUrl: './authenticate-user.component.html',
  styleUrls: [
    './authenticate-user.component.sass',
    '../../global-style-sheets/forms.sass',
    '../../global-style-sheets/landing-elements.sass',
  ],
})
export class AuthenticateUserComponent implements OnInit {
  //We declare the global properties of this class.
  errorFeedback: string;

  ngOnInit(): void {}

  //We declare the angular services we are gonna use.
  constructor(
    private router: Router,
    private authService: AuthenticateService
  ) {}

  //This function is executed when the user submits the form of the login, with the email and password. Sends it to the server using the 'getToken' function from the auth service. If there's an error, the errorFeedback property value is going to be this
  onSubmit(event): void {
    event.preventDefault();

    let email: string = event.target.email.value;
    let password: string = event.target.password.value;

    password = hash(password);

    this.authService
      .getToken(email, password)
      .then(({ token, error }: { token: string; error: string }) => {
        if (token) {
          sessionStorage.token = token;
          this.router.navigate(['welcome']);
        } else {
          this.errorFeedback = error;
        }
      });
  }

  routeToRegister() {
    this.router.navigate(['register']);
  }
}
