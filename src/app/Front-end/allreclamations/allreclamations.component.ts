import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs";
@Component({
  selector: 'app-allreclamations',
  templateUrl: './allreclamations.component.html',
  styleUrls: ['./allreclamations.component.css']
})
export class AllreclamationsComponent implements OnInit {
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

  deleteReclamation(reclamationId: number) {
    this.ngOnInit();
    this.http.delete(`http://localhost:8089/reclamation/deleteReclamation/${reclamationId}`).subscribe((res) => {
      console.log(`Reclamation with id ${reclamationId} deleted successfully`);
      this.reclamations = this.reclamations.filter((reclamation) => reclamation.id !== reclamationId);
      this.ngOnInit();
    });
  }

}
