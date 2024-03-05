import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pendingRequestsCount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8089/reclamation/displayreclamation')
      .subscribe((reclamations) => {
        // Filter reclamations that have the status "non_traitée"
        const nonTraiteeReclamations = reclamations.filter((reclamation) => reclamation.status === 'non_traitée');

        // Get the count of non-traitée reclamations
        this.pendingRequestsCount = nonTraiteeReclamations.length;
      });
  }
}
