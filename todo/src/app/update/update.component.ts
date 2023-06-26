import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  title!: string;
  desc!: string;

  constructor(private data: DataServiceService,
              private route: ActivatedRoute,
              private router: Router) {}

  todo: any;

  ngOnInit(){
    const data = history.state;
    if (data && data.id) {
      const id = data.id;
      this.data.getASpecificTodo(id).subscribe((data)=>{
        this.todo=data;
        this.title=this.todo.title;
        this.desc=this.todo.description;
      })
    }
  }

  onSubmit(){
    this.todo.title=this.title;
    this.todo.description=this.desc;
    this.data.updateATodo(this.todo.id, this.todo).subscribe((data)=>{
      if(data){
        alert('Updation was succesfull!');
        setTimeout(()=>{
          this.router.navigate(['/'],{state: data});
        },4000)
      }
    })
  }

}
