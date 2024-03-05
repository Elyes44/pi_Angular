import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myreclamation',
  templateUrl: './myreclamation.component.html',
  styleUrls: ['./myreclamation.component.css']
})
export class MyreclamationComponent implements OnInit {
  reclamations: any[] = [];
  id: number = 2;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getReclamationsByUser();
  }

  getReclamationsByUser() {
    this.http.get<any[]>(`http://localhost:8089/reclamation/recByUser/${this.id}`).subscribe(
      data => {
        this.reclamations = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
