import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyService } from '../../Services/artists.service';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  myData:any;
  constructor(private fb: FormBuilder,private myService:MyService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.form = this.fb.group({
     
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
     


    });


   
  }

  saveDetails(form: any) {
    alert('Send To API !! :-)\n\n' + JSON.stringify(form.value, null, 4));
    this.myService.getFromBackEndApi(form.value).subscribe(data => 
      {
        alert('Return Value :-)\n\n' + JSON.stringify(data.emailWithServerTime));
          this.myData = data.data;
        
      });
  }
}
