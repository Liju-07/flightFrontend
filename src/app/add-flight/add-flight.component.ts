import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private api:ApiService) { }

  fname=""
  destination=""
  origin=""
  capacity=""


read()
  {
    let data={

      "fname":this.fname,
      "destination":this.destination,
      "origin":this.origin,
      "capacity":this.capacity,
    }
    console.log(data)
    this.api.add(data).subscribe()
        alert("Data Added")
       this.fname=""
       this.destination=""
       this.origin=""
       this.capacity=""
      
  
      }
    
  



  ngOnInit(): void {
  }

}
