import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { Kollege } from 'src/app/models/kollege';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { KollegeFormModalComponent } from '../../mainforms/kollege-form-modal/kollege-form-modal.component';

@Component({
  selector: 'app-kollege',
  templateUrl: './kollege.component.html',
  styleUrls: ['./kollege.component.css']
})
export class KollegeComponent implements OnInit {
  new_kollege = "Novo Médico";

  kollegen: Kollege[] = [];

  faEdit = faEdit;
  faTrash = faTrash;
  hideme = [];
  eventInformation: any = [];
  Index: any;

  newKollege(){
    this.router.navigate(['kollege-form'],);
  }
  /*
  public showEventInfo(index,productId) {
    this.apiService.eventInfo(productId).subscribe((res:any)=>{
      this.eventInformation[index] = res;
    })
    this.hideme[index] = !this.hideme[index];
    this.Index = index;  
  }
*/
  eventClicked(arg: Kollege) {}

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private dialog: MatDialog,
    private router: Router)  { }

  ngOnInit(): void {
    const mrToken = this.cookieService.get('mr-token');
    console.log('mrToken on kollege:', mrToken);
    if (!mrToken) {
      this.router.navigate(['/auth']);
    } else {
      this.getKollegen();
    }
  }

  getKollegen(): void {
    this.apiService.getKollegen()
    .subscribe(data => this.kollegen = data);
  }

  // update(persona: Persona) {
  //   this.personas = this.personas.filter(h => h !== persona);
  //   this.apiService.updatePersona(persona).subscribe();
  // }

  // update(id: number, name: string, mobile: number,
  //   whatsapp: number, telephone: number, email: string,
  //   street: string, complement: string, postalcode: string,
  //   dob: Date, registerdate: Date, comment: string) {
  //   // this.personas = this.personas.filter(h => h !== persona);
  //   this.apiService.updatePersona(id, name, mobile, whatsapp, telephone, email, street,
  //                                 complement, postalcode, dob, registerdate, comment).subscribe();
  // }

  delete(kollege: Kollege): void {
    if (confirm(`Are you sure you want to delete this kollege '${kollege.name}'`)) {
    this.kollegen = this.kollegen.filter(h => h !== kollege);
    this.apiService.deleteKollege(kollege.id).subscribe();
    }
  }

  createKollege() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.maxHeight = '400px';
    // dialogConfig.width = '600px';

    const dialogRef = this.dialog.open(KollegeFormModalComponent, // TO PASS DATA to the dialog: { data: { id: 1 }});
        dialogConfig);


    dialogRef.afterClosed().subscribe(
      // This returns a plain object { k: v, ...}
        val => console.log("Dialog output:", val)
        // This returns an object Object
        // val => {console.log(`Dialog output: , ${val}`)
        // });
      );
  }

}

