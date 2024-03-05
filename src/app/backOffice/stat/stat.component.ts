import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent {
  stats: any = [];
  reclamations!: any[];

  constructor(private http: HttpClient ) { }
  ngOnInit() {
    this.http.get<any[]>('http://localhost:8089/reclamation/displayreclamation').subscribe((res) => {
      this.reclamations = res;
    });

    this.http.get<any[]>('http://localhost:8089/reclamation/statistiques').subscribe((res) => {
      this.stats = res;

      const data = {
        labels: ['Traitées', 'Encours', 'Non-traitée'],
        datasets: [{
          data: [this.stats['Nombre des reclamations traitées '].body, this.stats['Nombre des reclamations en cours de traitement'].body, this.stats['Nombre des reclamations non traitées'].body],
          backgroundColor: [
            'rgba(4,183,50,0.83)',
            'rgba(255,134,0,0.82)',
            'rgba(126,126,126,0.5)'
          ]
        }]
      };
      console.log(data);
      const options = {
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false
      };

      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: data,
        options: options
      });

    });



  }
}
