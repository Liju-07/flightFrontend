import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  constructor(private api:ApiService) {
    this.fetch()
   }

  fetch=()=>{this.api.view().subscribe(
    (data)=>{this.Data=data }
  
  )
 
  this.status=true

  }

status:boolean=false
Data:any=[]
  ngOnInit(): void {
  }

}
