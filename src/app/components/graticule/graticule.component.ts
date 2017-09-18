import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  moduleId: module.id,
  selector: 'graticuleComp',
  templateUrl: `graticule.component.html`,
  styleUrls: ['graticule.component.css'],
})

export class GraticuleComponent implements OnInit{
    ol: any;

    ngOnInit() {
        var map = new ol.Map({
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM({
                  wrapX: false
                })
              })
            ],
            target: 'map',
            view: new ol.View({
              center: ol.proj.fromLonLat([4.8, 47.75]),
              extent: ol.proj.get('EPSG:3857').getExtent(),
              zoom: 5
            })
          });
    
          // Create the graticule component
          var graticule = new ol.Graticule({
            // the style to use for the lines, optional.
            strokeStyle: new ol.style.Stroke({
              color: 'rgba(255,120,0,1)',
              width: 2,
              lineDash: [10, 5]
            }),
            showLabels: true
          });
    
          graticule.setMap(map);
    }

}