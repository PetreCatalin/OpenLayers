import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  moduleId: module.id,
  selector: 'drawComp',
  templateUrl: `draw.component.html`,
  styleUrls: ['draw.component.css']
})

export class DrawComponent implements OnInit {
    ol: any;
    valueSelected = 'Point';
    types = ['Point','LineString','Polygon','Circle','None'];
    selectedColor: any;
    changedColorVector: any;

    draw :any;
    snap :any;
        
    raster = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    source = new ol.source.Vector();

    vector = new ol.layer.Vector({
        source: this.source,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
              color: 'rgba(255, 0, 0, 0.35)'
            }),
            stroke: new ol.style.Stroke({
              color: 'black',
              width: 5
            }),
            image: new ol.style.Circle({
              radius: 7,
              fill: new ol.style.Fill({
                color: 'black'
              })
            })
          })
    });
  
    layers = [this.raster,this.vector];

    view = new ol.View({
        center: [-11000000, 4600000],
        zoom: 4
    })

    map = new ol.Map({
        layers: this.layers,
        view: this.view
    });

    modify = new ol.interaction.Modify({source: this.source});

   // typeSelect = document.getElementById('select');

    ngOnInit(): void {
        console.log('OnInit');
        console.log(this.valueSelected);
        this.map.setTarget('map');

        this.map.addInteraction(this.modify);
        this.addInteraction();
    }

    change(value:any) :void {
        this.valueSelected=value;
        console.log(this.valueSelected);
        this.map.removeInteraction(this.draw);
        this.map.removeInteraction(this.snap);
        this.map.removeInteraction(this.modify);
        this.addInteraction();
    }

    changeColor(color:any) :void {
        console.log(color);
        this.selectedColor=color;

        this.map.removeLayer(this.vector);

            this.changedColorVector  = new ol.layer.Vector({
                source: this.source,
                style: new ol.style.Style({
                    fill: new ol.style.Fill({
                    color: 'rgba(255, 0, 0, 0.35)'
                    }),
                    stroke: new ol.style.Stroke({
                    color:  this.selectedColor,
                    width: 5
                    }),
                    image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                        color: this.selectedColor
                    })
                    })
                })
            });
        
        this.map.addLayer(this.changedColorVector); 

    }

    addInteraction() : void {
        let value = this.valueSelected;

        if (value !== 'None') {
            this.draw = new ol.interaction.Draw({
              source: this.source,
              type: /** @type {ol.geom.GeometryType} */ value
            });
            this.map.addInteraction(this.draw);
            this.snap = new ol.interaction.Snap({source: this.source});
            this.map.addInteraction(this.snap);

            this.map.addInteraction(this.modify);
          }
          else
          this.map.removeInteraction(this.modify);
    
    }

}