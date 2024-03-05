import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rec-dialog',
  template: `<mat-dialog-content class="my-dialog">
    <h2 mat-dialog-title>Dialog Title</h2>
    <p>Reclamation enregistrée avec succès !</p>
    <div mat-dialog-actions>
      <button mat-button (click)="closeDialog()">OK</button>
    </div>
  </mat-dialog-content>`,
  styleUrls: ['./rec-dialog.component.css']
})
export class RecDialogComponent implements OnInit{
  constructor(private dialogRef: MatDialogRef<RecDialogComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
    this.router.navigateByUrl('/displayreclam');
  }
}






