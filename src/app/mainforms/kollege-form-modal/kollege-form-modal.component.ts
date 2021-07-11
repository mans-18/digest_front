
import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import { ApiService } from '../../../services/api.service';
import { Kollege } from '../../models/kollege';


/**
 * @title Dialog
 */
@Component({
  selector: 'kollege-form-modal',
  templateUrl: 'kollege-form-modal.component.html',
  styleUrls: ['kollege-form-modal.component.css'],
  providers: [
    //{ provide: MAT_DIALOG_DATA, useValue: {}},
    //{ provide: MatDialogRef, useValue: {} }
]
})
export class KollegeFormModalComponent implements OnInit {

    form: FormGroup;
    // id: number;
    name!: string;

    constructor(
        private apiService: ApiService,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<KollegeFormModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Kollege
        ) {
        this.form = fb.group({
            // id: [id],
            name: [''],
            crm: [''],
            email: [''],
      });
    }

    ngOnInit() {}

    save() {
      //this.dialogRef.close(this.form.value);
      console.log(this.form.value);
      //this.dialogRef.close(this.form.value);
      try {
        if (this.form.value.name == '') { throw alert('Por favor, informe o nome do médico!')};
        if (this.form.value.dob == '') { throw alert('Por favor, informe o CRM do médico!')};
        if (this.form.value.mobile == '') { throw alert('Por favor, informe o celular do médico!')};

      this.apiService.createKollege(
      this.form.value.name,
      this.form.value.crm,
      this.form.value.email).subscribe(
        // Above is sufficient to write on the db. Below shall refresh yhe list
        // (result: Event) => this.eventCreated.emit(result),
        // error => console.log(error)
        );
      //close();
      //location.reload();
      console.log(this.form)
      // this.router.navigate(['event-form'],);
      // console.log('dob: ', this.form.value.dob);
      }
      catch(err) {err}
    }

    onNoAction() {
        this.dialogRef.close();
    }
  
}