import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities.service';

declare var ol: any;

@Component({
  moduleId: module.id,
  selector: 'citiesComp',
  templateUrl: `cities.component.html`,
  styleUrls: ['cities.component.css'],
  providers: [CitiesService]
})

export class CitiesComponent implements OnInit {
    ol: any;
    citiesJson: any;

    constructor(private citiesService : CitiesService) {}

    normalStyle:any = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 4,
            fill: new ol.style.Fill({
                color: 'rgba(20,150,200,0.3)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(20,130,150,0.8)',
                width: 1
            })
        })
    });

    selectedStyle:any = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 40,
            fill: new ol.style.Fill({
                color: 'rgba(150,150,200,0.6)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(20,30,100,0.8)',
                width: 3
            })
        })
    });

    selectedTextStyleFunction() : void {
        return new ol.style.Style({
            text: new ol.style.Text({
                font: '14px helvetica,sans-serif',
                text: name,
                fill: new ol.style.Fill({
                    color: '#000'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        });
    };

    vectorLayer:any = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'app/data/world_cities.json',
            format: new ol.format.GeoJSON({
                defaultDataProjection :'EPSG:4326',
                projection: 'EPSG:3857'
            })
        }),
        style: this.normalStyle
    });

    map:any = new ol.Map({
        renderer: 'canvas', // Force the renderer to be used
        layers: [
            // Add a new Tile layer getting tiles from OpenStreetMap source
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            this.vectorLayer
        ],
        // Create a view centered on the specified location and zoom level
        view: new ol.View({
            center: ol.proj.transform([2.1833, 41.3833], 'EPSG:4326', 'EPSG:3857'),
            zoom: 4
        })
    });

    selectedFeatures :any[] = [];

    unselectPreviousFeatures() :void {
        let i;
        for(i=0; i< this.selectedFeatures.length; i++) {
            this.selectedFeatures[i].setStyle(null);
        }
        this.selectedFeatures = [];
    } 

    movePointer(event:any) :void {
        //this.unselectPreviousFeatures();

       /* var feature = this.map.forEachFeatureAtPixel(event.pixel, function(feature:any, layer:any) {
            this.selectedFeatures.push(feature);
            return feature;
          }, null, function(layer:any) {
            return layer === this.vectorLayer;
        }); 

        console.log(feature);
        */
        
        console.log(event);
    }  


    ngOnInit() {
        this.map.setTarget('map');
    }

}