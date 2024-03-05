import {Component, EventEmitter, Output} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  objet: string = '';
  description: string = '';
  isButtonDisabled: boolean = true;
  @Output() reclamationCreated = new EventEmitter<void>();

  constructor(private http: HttpClient, private dialog: MatDialog , private router: Router) {}

  submitReclamation() {
    const id = 2;
    const data = { objet: this.objet, description: this.description, id: id };
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    this.http
      .post(
        'http://localhost:8089/reclamation/createReclamation/' + id,
        data,
        options
      )
      .subscribe({
          next: (response) => {
            console.log('Reclamation created successfully:', response);
            this.reclamationCreated.emit();
          },
          error: (error) => {
            console.log('Error creating reclamation:', error);
          },
        }

      );
    this.router.navigate(['/dashFront']);
  }


  checkForm() {
    const objet = this.objet.trim();
    const description = this.description.trim();
    this.isButtonDisabled = !objet || !description;
  }


}

