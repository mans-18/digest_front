import {Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import { ApiService } from '../../../services/api.service';
import { Persona } from '../../models/persona';


// export interface DialogData {
//   animal: string;
//   name: string;
// }

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'persona-form-modal',
  templateUrl: 'persona-form-modal.component.html',
  styleUrls: ['persona-form-modal.component.css'],
  //providers inject service and allow the view to show via url
  providers: [
    //## This was preventing the dialog to close
    //## witn saying close() was not a function i MatDialogRef.
    //## In fact it wasnt in its provide:
    //{ provide: MatDialogRef, useValue: {} }
  ]
})
export class PersonaFormModalComponent implements OnInit {

//   animal: string;
//   name: string;
    hide: boolean = true;

    form: FormGroup;
    // id: number;
    name!: string;

    constructor(
        private apiService: ApiService,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<PersonaFormModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Persona
        // // id,
        // name,
        // mobile,
        // whatsapp,
        // telephone,
        // email, 
        // street,
        // complement,
        // postalcode,
        // dob,
        // registerdate,
        // comment,
        // }
        ) {

        // this.name = name;

        this.form = fb.group({
            // id: [id],
            name: [name, Validators.required],
            mobile: [, Validators.required],
            whatsapp: [, Validators.required],
            telephone: [, Validators.required],
            email: [, Validators.required],
            street: [],
            complement: [],
            postalcode: [],
            dob: [],
            registerdate: [moment(), Validators.required],
            comment: [, Validators.required]
      });
    }

    ngOnInit() {
        // this.form = fb.group({
        //     description: [description, []],
        //     ...
        // });
    }

    save() {

      try {
        if (this.form.value.name == '') { throw alert('Por favor, informe o nome do cliente!')};
        if (this.form.value.dob == null) { throw alert('Por favor, informe a data de nascimento do cliente!')};
        if (this.form.value.mobile == null) { throw alert('Por favor, informe o celular do cliente!')};
        console.log('dob and mob', this.form.value.dob,this.form.value.mobile);
        //this.dialogRef.close(this.form.value);
        this.apiService.createPersona(
        this.form.value.name.toLowerCase(),
        this.form.value.mobile,
        this.form.value.whatsapp,
        this.form.value.telephone,
        this.form.value.email,
        this.form.value.street,
        this.form.value.complement,
        this.form.value.postalcode,
        this.form.value.dob,
        this.form.value.registerdate,
        this.form.value.comment).subscribe(
          // Above is sufficient to write on the db. Below shall refresh yhe list
          // (result: Event) => this.eventCreated.emit(result),
          // error => console.log(error)
          );
        console.log(this.form)
        //location.reload();
        // this.router.navigate(['event-form'],);
        console.log('dob: ', this.form.value.dob);
      }
      
      catch(err) {err}
      
    }

    close() {
        this.dialogRef.close();
    }

    getErrorMessage() {}
  
}

//   openDialog(): void {
//     const dialogRef = this.dialog.open(PersonaFormModalDialog, {
//       width: '250px',
//       data: {name: this.name, animal: this.animal}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }

// }



// @Component({
//   selector: 'persona-form-modal-dialog',
//   templateUrl: 'persona-form-modal-dialog.html',
// })
// export class PersonaFormModalDialog {

//   constructor(
//     public dialogRef: MatDialogRef<PersonaFormModalDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }


//   ngOnInit(): void {
//   }

// }
