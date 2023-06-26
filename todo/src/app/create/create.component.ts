import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  title!:string;
  desc!:string;

  constructor(private data: DataServiceService,
              private router: Router) {}

  onSubmit(){
    let todo={
      title: this.title,
      description: this.desc
    }
    this.data.createATodo(todo).subscribe((data)=>{
      if(data){
        alert("Todo creation successful!!");
        setTimeout(()=>{
          this.router.navigate(['/'],{state: data});
        },4000);
      }
    })
  }

}
