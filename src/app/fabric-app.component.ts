import { Component } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'fab-app',
  templateUrl: './fabric-app.component.html',
  styleUrls: ['./fabric-app.component.css']
})
export class FabricAppComponent {
    canvas: any;

    ngOnInit() {
        this.canvas = new fabric.Canvas("DrawingCanvas");
        this.canvas.add(new fabric.IText('Hello Fabric!!'));
    }

}
