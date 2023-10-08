import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any[] = [];

  constructor(private apiService: ImagenService ){}

  ngOnInit(): void {
    this.llenarData()
  };

  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.apiService);
    })
  }



}
