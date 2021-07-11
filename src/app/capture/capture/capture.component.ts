import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { ApiService } from 'src/services/api.service';



@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit, AfterViewInit {

/* ################# CAPTURE START ################# */
WIDTH = 640;
HEIGHT = 480;

@ViewChild("video")
public video: ElementRef;

@ViewChild("canvas")
public canvas: ElementRef;

//  @ViewChild("mycanvas")
//  public mycanvas: ElementRef;

captures: string[] = [];
error: any;
isCaptured: boolean;

blobToForm: any;

photo = null;

/* ################# CAPTURE END ################# */

/* ######## https://www.freakyjolly.com/angular-input-file-image-file-upload-to-base64-tutorial-by-example/ ############ */

imageError: string;
isImageSaved: boolean;
cardImageBase64: string;

/* ######## END ############ */


  // BINDINGS

  /* ### Angular 2 how to make child component wait for async data to be ready 
    https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
  id = null;
    
  constructor(
    private renderer: Renderer2, private el: ElementRef,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.photo = document.getElementById('photo');

    /* ### Angular 2 how to make child component wait for async data to be ready 
    https://stackoverflow.com/questions/41389124/angular-2-how-to-make-child-component-wait-for-async-data-to-be-ready ### */
    //this._events.subscribe(x => {console.log('xxxx', x)});
    //console.log('_events', this._events);
    
  }

  /* ################# CAPTURE START ################# */

async ngAfterViewInit() {

  await this.setupDevices();

  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() not supported.");
      return;
    }
    
    // List cameras and microphones.
    navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
      devices.forEach(function(device) {
        console.log(device.kind + ": " + device.label +
                    " id = " + device.deviceId);
      });
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    }); 
}

async setupDevices() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true
      });

      if (stream) {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
        this.error = null;
      } else {
        this.error = "You have no output video device";
      }
    } catch (e) {
      this.error = e;
    }
  }
}
/*
addElement () {
  // create a new div element
  const newDiv = this.renderer.createElement("div");

  // and give it some content
  const newContent = this.renderer.createText("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  
  var cv = document.getElementById('mycanvas');
  console.log('cv', cv.id);

  // add the newly created element and its content into the DOM
  this.renderer.appendChild(cv, newDiv);
  
}*/

capture() {
  //console.log('chikdren', document.children);
  this.drawImageToCanvas(this.video.nativeElement);
  this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  var img = new Image();
  img.src = this.canvas.nativeElement.toDataURL("image/png");
  img.width = 480;

  //console.log('img cpatured', img)

  /*
  var byteStr = atob(this.captures[0].split(',')[1]);
  // problem here: ERROR DOMException: String contains an invalid character
  var mimeStr = this.captures[0].split(',')[0].split(':')[1].split(';')[0];
  var buffer = new ArrayBuffer(byteStr.length);
  var data = new DataView(buffer);
  console.log('vars to blob', mimeStr, byteStr);
  console.log('data from bufeer', data);

  for (var i = 0; i < byteStr.length; i++) {
    data.setUint8(i, byteStr.charCodeAt(i));
  }

  var newBlob = new Blob([buffer], { type: mimeStr });
  var newBlob2 = new Blob([data], { type: mimeStr });
  console.log('newBlob', newBlob, newBlob2);
  */

  this.photo.setAttribute('src', img.src);

  this.blobToForm = img.src;//newBlob;
  // ### trying to get the image
  /*
  var canvas = document.getElementById('mycanvas');
  const cxt = this.mycanvas.nativeElement
    .getContext("2d")
    .drawImage(Image, 0, 0, this.WIDTH, this.HEIGHT);
  cxt.toBlob(function(blob) {
    var newImg = document.createElement('img'),
        url = URL.createObjectURL(blob);
    newImg.onload = function() {
      URL.revokeObjectURL(url);
    }
    newImg.src = url;
    document.body.appendChild(newImg);
  });*/
  // ###########

  //console.log('cp', typeof(this.video.nativeElement), typeof(this.captures[0]));
  this.isCaptured = true;
}

endCamera() {
  this.video.nativeElement.srcObject.getVideoTracks().forEach(track => track.stop());
}

removeCurrent() {
  this.isCaptured = false;
}

setPhoto(idx: number) {
  this.isCaptured = true;
  var image = new Image();
  console.log('im', image);
  image.src = this.captures[idx];
  this.drawImageToCanvas(image);
}

drawImageToCanvas(image: any) {
  this.canvas.nativeElement
    .getContext("2d")
    .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
}

/* ################# CAPTURE END ################# */

}
