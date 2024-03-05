import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs";


@Component({
  selector: 'app-display-reclam',
  templateUrl: './display-reclam.component.html',
  styleUrls: ['./display-reclam.component.css']
})
export class DisplayReclamComponent implements OnInit {
  reclamations!: any[];
  currentPage = 1;
  pageSize = 10;


  constructor(private http: HttpClient ) { }

  ngOnInit() {


    this.http.get<any[]>('http://localhost:8089/reclamation/displayreclamation').pipe(
      map((reclamations) => reclamations.sort((a, b) => {
        // Sort by status
        if (a.status < b.status) {
          return -1;
        } else if (a.status > b.status) {
          return 1;
        } else {
          // If status is the same, sort by date (latest first)
          return b.date.localeCompare(a.date);
        }
      }))
    ).subscribe((res) => {
      this.reclamations = res;
    });


  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'traitée':
        return 'lightgreen';
      case 'encours':
        return 'lightgray';
      default:
        return 'none';
    }
  }

  deleteReclamation(reclamationId: number) {
    this.ngOnInit();
    this.http.delete(`http://localhost:8089/reclamation/deleteReclamation/${reclamationId}`).subscribe((res) => {
      console.log(`Reclamation with id ${reclamationId} deleted successfully`);
      this.reclamations = this.reclamations.filter((reclamation) => reclamation.id !== reclamationId);
      this.ngOnInit();
    });
  }

  closeReclamation(reclamationId: number) {
    const endpoint = `http://localhost:8089/reclamation/ended/${reclamationId}`;
    this.http.put(endpoint, {}).subscribe((res) => {
      console.log(`Reclamation with id ${reclamationId} closed successfully`);
      const index = this.reclamations.findIndex((reclamation) => reclamation.id === reclamationId);
      if (index !== -1) {
        this.reclamations[index].status = 'terminée';
      }

    });
    window.location.reload();
  }

}
