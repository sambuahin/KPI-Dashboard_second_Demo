import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';


@Component({
  selector: 'app-email-auth',
  templateUrl: './email-auth.component.html',
  styleUrls: ['./email-auth.component.css'],
   animations: [moveIn(), fallIn()]
})
export class EmailAuthComponent implements OnInit {
    state: string = '';
    error: any;

     constructor(public af: AngularFire,private router: Router) {
      this.af.auth.subscribe(auth => { 
        if(auth) {
          this.router.navigateByUrl('/members');
        }
      });
  }
   resetpassword()
  {
    //console.log('reset password button');
    // send to componet reset password
    this.router.navigate(['/reset_password']);
  }

onSubmit(formData) {
    if(formData.valid) {
     // console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
       // console.log(success);
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  ngOnInit() {
  }
}
