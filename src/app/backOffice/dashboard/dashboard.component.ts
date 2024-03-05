import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pendingRequestsCount = 0;
  nonTraiteeReclamations: any[] = [];
  reclamations: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchReclamations();


    this.loadJsFile('assets/back/vendor/jquery/jquery.min.js');
    this.loadJsFile('assets/back/vendor/bootstrap/js/bootstrap.bundle.min.js');
    this.loadJsFile('assets/back/vendor/jquery-easing/jquery.easing.min.js');
    this.loadJsFile('assets/back/js/sb-admin-2.min.js');
    this.loadJsFile('assets/back/vendor/chart.js/Chart.min.js');
    this.loadJsFile('assets/back/js/demo/chart-area-demo.js');
    this.loadJsFile('assets/back/js/demo/chart-pie-demo.js');
    this.loadJsFile('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js');
    this.loadJsFile('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');
  }
  private fetchReclamations(): void {
    this.http.get<any[]>('http://localhost:8089/reclamation/displayreclamation')
      .subscribe((reclamations) => {
        this.reclamations = reclamations;

        // Filter reclamations that have the status "non_traitée"
        this.nonTraiteeReclamations = reclamations.filter((reclamation) => reclamation.status === 'non_traitée');
        console.log("test_test",this.nonTraiteeReclamations);
        // Get the count of non-traitée reclamations
        this.pendingRequestsCount = this.nonTraiteeReclamations.length;
      });
  }

  onReclamationCreated(): void {
    this.fetchReclamations();
  }
  public loadJsFile(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
