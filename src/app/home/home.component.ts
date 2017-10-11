import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft, moveInRight} from '../router.animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft(), moveInRight()]
  //host: {'[@moveIn]': ''}
})
export class HomeComponent implements OnInit {
 

  constructor(private router: Router) { }

five_chrst_per(){
  this.router.navigate(['five_christain_persuasions']);
}
abraham_factor(){
  this.router.navigate(['abraham_factor'])
}
  ngOnInit() {
  }


about_us()
  {
this.router.navigate(['/about_us']);
  }
 
  members()
  {
    this.router.navigate(['/members']);
  }
  faqs()
{
    this.router.navigate(['/faqs']);
  }
  donations()
  {
    this.router.navigate(['/donations']);
  }
  achieving_growth()
  {
    this.router.navigate(['/acheving_growth_ict']);
  }
  
  how_i_grow()
  {
    this.router.navigate(['/how_i_grow']);
  }
  God_rubric()
  {
    this.router.navigate(['/Gods_rubric']);
  }
  
 the_abraham_factor()
  {
    this.router.navigate(['/the_abraham_factor']);
  }
  
  biblical_assumption()
  {
    this.router.navigate(['/biblical_assumption_of_giving']);
  }
  
  five_christian()
  {
    this.router.navigate(['/five_christain_persuasions']);
  }
  the_God_factor()
  {
    this.router.navigate(['/the_God_factor']);
  }
  
  the_growth_factor()
  {
    this.router.navigate(['/the_growth_factor']);
  }
  

}
