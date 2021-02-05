import { Component } from '@angular/core';
import { fabric } from 'fabric';
import { Color } from 'fabric/fabric-impl';

@Component({
  selector: 'fab-app',
  templateUrl: './fabric-app.component.html',
  styleUrls: ['./fabric-app.component.css']
})
export class FabricAppComponent {
    canvas: any;
    color: Color;

    ngOnInit() {
        this.canvas = new fabric.Canvas("DrawingCanvas");
        this.canvas.isDrawingMode = true;   
    }

    ColorChange() {
      this.canvas.freeDrawingBrush.color = this.color;
    }
}
