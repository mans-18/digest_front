import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { FormGroup, FormControl } from '@angular/forms';

import { Event } from '../models/event';
import { Persona } from '../models/persona';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  status: 'Agendado' | 'Confirmado' | 'Aguardando' | 'Em Atendimento' | 'Finalizado' | 'Cancelado';
}

export interface ProcedureIni {
  idIni: string;
  stTime: number;
}

@Component({
  selector: 'app-traceboard',
  templateUrl: './traceboard.component.html',
  styleUrls: [ './traceboard.component.css' ]
})
export class TraceboardComponent implements OnInit {
  events: Event[] = [];
  eventos: Event[] = [];
  personas: Persona[] = [];
  todayEvents: Event[] = [];
  today: number = Date.now();
  evv: Event[] = [];
  bt1Status = false;
  bt2Status = true;
  bt2Color = 'rgb(150, 2,4)'
  bt1Color = 'rgb(0, 79, 10)'
  procedureDuration: number;
  public procedureIni = [];
  durBadge: number;

  emailForm = new FormGroup({
    kolName: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    ) { }

  openDialog() {
    this.dialog.open(StatusDialogComponent, {});
  }

  ngOnInit() {
    this.getEvents();
    this.getPersonas();
    // this.getKollegen();
    this.getTodayEvents();
    this.changeVar();
  }

  getEvents(): void {
    this.apiService.getEvents()
      .subscribe(arg => this.events = arg.slice(0, 15));
  }

  // Get today events that are confirmed
  getTodayEvents() {
    this.apiService.getEvents()
      .subscribe(arg => this.todayEvents = arg.filter(
                    /*    r => (r.status=='Finalizado' ||
                        r.status=='Confirmado' ||
                        r.status=='Em Atendimento' ||
                        r.status=='Aguardando')
                        && (r.color!=='#FFFFFF')))*/
                        r => //r.color=='#008000'
                        (new Date(r.start).getTime() > Date.now()-30000)
                        && (new Date(r.start).getTime() < Date.now()+86400000)))
  }


  changeVar() {
    this.todayEvents = this.evv;
  }

  getPersonas(): void {
    this.apiService.getPersonas()
      .subscribe(data => this.personas = data)
      console.log('personass: ', this.personas)
  }

  // Name the element according to the event id so we have a different element for each event
  nameBt1(arg: Event) {
    let name = `bt${arg.id}`
    return name
  }

  nameBt2(arg: Event) {
    let name = `bt${arg.id}+1`
    return name
  }

  // Need to have a completed status in the BD
  // nameFinalizado(arg: Event) {
  //   let name = `Finalizado${arg.id}+1`
  //   return name
  // }

  nameStatusIn(arg: Event) {
    let name = `inStatus${arg.id}+1`
    return name
  }

  nameStatusOut(arg: Event) {
    let name = `outStatus${arg.id}+1`
    return name
  }

  // Makes the key for the dic: idIni<string>:stTime<number> 
  // nameProcedureIni(arg: Event) {
  //   let name = `procedureIni${arg.id}`
  //   return name
  // }


  activateEvent(event: Event) {
    for (let evt of this.todayEvents) {
      if (evt.id == event.id) {
        event.status = 'Aguardando';
        this.apiService.putEventConf(event.id, event.title, event.partner, event.start,
                                    event.color, event.status, event.addtitle2, event.persona,
                                    event.kollege, event.genericChar1, event.genericNumber1).subscribe();
      }
    }
  }

  enableBt2(event: Event) {

    for (let evt of this.todayEvents) {
      if (evt.id == event.id) {
        // ERROR: procedureIni must be unique for each event attendance
        // We can keep the procedureIni value in a dic where each key is the event.id
        // let stTime = Date.now();
        // console.log('stTime at def', stTime, this.procedureIni)
        // let idIni = this.nameProcedureIni(evt);
        // let pIni = [];
        // this.procedureIni.push({idIni, stTime});
        // this.procedureIni["stTime"] = stTime
        // this.procedureIni["idIni"] = idIni

        // procedureIni is array of objects with key = name of the event, and value = stTime
        // this.procedureIni.push({"idIni": stTime});
        // this.procedureIni.push({"abc":1234});
        // Object.assign(this.procedureIni, pIni)
        // for (let x of this.procedureIni) {
          // console.log('idIni at enablebt2', idIni)
        // }
        // if (idIni in this.procedureIni) {
        //   console.log('if in', 'yes', this.nameProcedureIni(evt).valueOf)
        // }
         

        // let p = this.procedureIni;
      
        // let sttt = this.getObjStTime(p);
        // let iddd = this.getObjIdIni(p);
        // console.log('this.procedureIni', typeof(p), p[0].idIni, this.procedureIni)
        evt.genericChar1 = ''; // resets the badge when one entra again.
                                // But does not sums the first entry and the followings
        evt.status = 'Em Atendimento';
        evt.genericNumber1 = Date.now();
        console.log(evt.genericNumber1, evt.id);
        this.apiService.putEventConf(evt.id, evt.title, evt.partner, evt.start,
                                    evt.color, evt.status, evt.addtitle2, evt.persona,
                                    evt.kollege, evt.genericChar1, evt.genericNumber1).subscribe();
   
        let name1 = this.nameBt1(event)
        let el1 = document.getElementById(name1)
        el1.style.backgroundColor = 'rgb(55, 255, 45)'
        el1.hidden = true

        let name2 = this.nameBt2(event)
        let el2 = document.getElementById(name2)
        el2.hidden = false
      }
        // location.reload()
        // this.bt2Status = false
        // this.bt1Status = true
        // document.write(Date())
      }
    // }
  }

  disableBt2(event) {
    if (event) {
    for (let evt of this.todayEvents) {
      console.log(evt, event);
      if (evt.id == event.id) {
        let endTime = Date.now();
        // let idIni = this.nameProcedureIni(evt);

        // When reload, stTime gets null. That's because it depends on the event triggered on the html (click on "sai")
        let stTime = evt.genericNumber1;
        console.log('end', endTime, 'st', stTime);
        // for (let x of this.procedureIni) {
        //   x.stTime = this.procedureIni["stTime"];
        //   console.log('xxxx', x, this.procedureIni);
        // }
        
        // Value is wrong for the specific event
        if (stTime !== null) {
          evt.genericChar1 = String(Math.round((endTime - stTime)/60000));
        }
        
        
        evt.status = 'Finalizado';
        
        this.apiService.putEventConf(evt.id, evt.title, evt.partner, evt.start,
                                    evt.color, evt.status, evt.addtitle2, evt.persona,
                                    evt.kollege, evt.genericChar1, evt.genericNumber1).subscribe();

        if (event.status == 'Finalizado') {
          let name = this.nameBt2(event)
          let el = document.getElementById(name)
          el.hidden = true
        }

        // if (event.status == 'Finalizado') {
        //   let nameFinal = this.nameFinalizado(event)
        //   var elFinal = document.getElementById(nameFinal)
        //   elFinal.hidden = false
        // }

        let eStatus =  this.nameStatusIn(event)
        let eleStatus = document.getElementById(eStatus)
        eleStatus.hidden = true
        
        console.log('disablebt2',this.procedureIni)
        //TODO
        // this.nameBadge(event, this.procedureDuration)

      }
    }
  }
  }
}

  @Component({
    selector: 'app-status-dialog',
    templateUrl: './status-dialog.html',
  })

  export class StatusDialogComponent implements OnInit {

    events: Event[] = [];
    personas: Persona[] = [];
    todayEvents: Event[] = [];
    today: number = Date.now();
    index;
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
                private apiService: ApiService) {}
    
    // trackByFn(iev) {
    //   iev = iev+1
    //   this.index = iev
    //   console.log('track', iev, this.index)
    //   return this.index; 
    // } 
             
    ngOnInit() {
      this.getEvents();
      this.getPersonas();
      this.getTodayEvents();
      // this.changeVar();
    }

    getEvents(): void {
      this.apiService.getEvents()
        .subscribe(arg => this.events = arg.slice(0, 15));
    }

    getTodayEvents() {
      this.apiService.getEvents()
        .subscribe(arg => this.todayEvents = arg.filter(r => new Date(r.start).getTime() > Date.now()-60300000))
    }
  
    // changeVar() {
    //   this.todayEvents = this.evv;
    // }
  
    getPersonas(): void {
      this.apiService.getPersonas()
        .subscribe(data => this.personas = data)
    }

    setStatusInOnDB(event) {
      // this.data = data
      // console.log('set', event.status, this.data) // this.data and data are undefined
      event.status = "Em Atendimento"
      this.apiService.putEventConf(event.id, event.title, event.partner, event.start, event.color,
                                  event.status, event.addtitle2, event.persona, event.kollege, event.genericChar1, event.genericNumber1).subscribe();
      location.reload()
    }
    setStatusOutOnDB(event) {
      event.status = "Aguardando"
      this.apiService.putEventConf(event.id, event.title, event.partner, event.start, event.color,
                                  event.status, event.addtitle2, event.persona, event.kollege, event.genericChar1, event.genericNumber1).subscribe();
      location.reload()
    }
    setStatusOffOnDB(event) {
      event.status = "Cancelado"
      this.apiService.putEventConf(event.id, event.title, event.partner, event.start, event.color,
                                  event.status, event.addtitle2, event.persona, event.kollege, event.genericChar1, event.genericNumber1).subscribe();
      location.reload()
    }
  }


// TO the BADGE value
// Here's a generic function you can use to apply a "decelerating" timeout for ANY function call.

// function setDeceleratingTimeout(callback, factor, times)
// {
//     var internalCallback = function(tick, counter) {
//         return function() {
//             if (--tick >= 0) {
//                 window.setTimeout(internalCallback, ++counter * factor);
//                 callback();
//             }
//         }
//     }(times, 0);

//     window.setTimeout(internalCallback, factor);
// };

// // console.log() requires firebug    
// setDeceleratingTimeout(function(){ console.log('hi'); }, 10, 10);
// setDeceleratingTimeout(function(){ console.log('bye'); }, 100, 10);

// Badge solution:
// Create an number variable on the BD to hold procedureDuration at Event
// On badge: {{ev.procedureDuration}}

// Create generic vars on BD for time and number

