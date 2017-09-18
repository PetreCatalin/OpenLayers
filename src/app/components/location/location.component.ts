import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  moduleId: module.id,
  selector: 'locationComp',
  templateUrl: `location.component.html`,
  styleUrls: ['location.component.css'],
})

export class LocationComponent implements OnInit{
    ol: any;
    
        ngOnInit() {
        var mousePosition = new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(2),
            projection: 'EPSG:4326',
            target: document.getElementById('myposition'),
            undefinedHTML: '&nbsp;'
        });
    
        var myScaleLine = new ol.control.ScaleLine({
            units: 'metric', // 'degrees', 'imperial', 'nautical', 'metric', 'us'
            minWidth: 150
        });
    
    
        var starting_pos = ol.proj.transform([18.000, 56.00000], 'EPSG:4326', 'EPSG:900913');
        //var zoomslider = new ol.control.ZoomSlider();
    
        var map = new ol.Map({
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }).
            extend([
                new ol.control.ZoomSlider(),
                mousePosition,
                myScaleLine
            ]),
            layers: [
                new ol.layer.Tile({
                    source:  new ol.source.Stamen({
                        layer: 'watercolor'
                    })
                })
            ],
            target: 'map',
            view: new ol.View({
                projection: 'EPSG:900913',
                center: starting_pos,
                zoom: 5
            })
        });
       
        //map.addControl(myScaleLine);
    
     /*   var vessels = [];
    
        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([18.0704, 57.678], 'EPSG:4326',
                'EPSG:900913')),
            name: 'Speed vessel',
            speed: 40,
            course: 350
        });
    
        var iconFeature1 = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([18.1234, 55.678], 'EPSG:4326',
                'EPSG:900913')),
            name: 'Large Vessel',
            speed: 30,
            course: 20
        });
    
        vessels.push(iconFeature);
        vessels.push(iconFeature1);
    
        var vectorSource = new ol.source.Vector({
            features: vessels //add an array of vessels
        });
    
        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                anchor: [0.85, 0.5],
                opacity: 0.85,
                src: 'img/vessel_red.png'
            }))
        });
    
    
        var vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: iconStyle
        });
        map.addLayer(vectorLayer); */
    
        } 
}