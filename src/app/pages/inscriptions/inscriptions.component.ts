import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Inscription } from 'src/app/core/models/inscriptions.model';
import { InscriptionsService } from '../../core/services/inscriptions.service';
import { AddInscriptionComponent } from '../../shared/dialogs-modals/add-inscription/add-inscription.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {

  spinnerLoading = true
  inscription$: Observable<Inscription[]>
  dataSource: MatTableDataSource<Inscription>
  inscriptions: Inscription[];
  inscriptionSubs: Subscription;

  displayedColumns: string[] = ['student', 'course', 'delete'];

  constructor(
    private inscriptionsService: InscriptionsService,
    private readonly dialogService: MatDialog,
    private InscriptionsService: InscriptionsService,
  ) { }

  ngOnInit(): void {
    this.inscription$ = this.inscriptionsService.inscriptions$

    setTimeout(() => {
      this.spinnerLoading = false
    }, 2000)
  }

  clickDeleteInscription(element: Inscription) {
    this.inscriptionsService.deleteInscription(element).subscribe(() => {
      this.inscription$ = this.inscriptionsService.getInscriptionsFromApi();
    })
  }

  // clickDeleteInscription(element: Inscription) {
  //   this.inscriptionsService.deleteInscription(element).subscribe()
  // }


  clickAddInscription() {
    const dialog = this.dialogService.open(AddInscriptionComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.InscriptionsService.addInscription({
          id: data.id,
          student: data.student,
          course: data.course
        })
      }
    })
  }

}
