import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private data: DataServiceService,
              private router: Router){}
  todos: any;
  ngOnInit(){
    this.data.getAllTodos().subscribe((data)=>{
      this.todos=data;
    })
  }

  onUpdate(id: number){
    let data={id : id};
    this.router.navigate(['/update'],{state: data});
  }

  onCreateClicked(){
    this.router.navigate(['/create']);
  }

  onDeleteClicked(id: number){
    this.data.deleteATodo(id).subscribe((data)=>{
        alert("Deletion is successfull!");
        this.ngOnInit();
    })
  }
}
