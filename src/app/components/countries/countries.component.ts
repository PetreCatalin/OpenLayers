import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var ol: any;

@Component({
  moduleId: module.id,
  selector: 'countriesComp',
  templateUrl: `countries.component.html`,
  styleUrls: ['countries.component.css'],
})

export class CountriesComponent implements OnInit {
    
    ol: any;
    selectedCountry : any = 'No country selected';
    selectedFeatures : any;
    url :string ="initial";

    vectorSource = new ol.source.Vector({
        url: 'https://openlayers.org/en/v4.3.2/examples/data/geojson/countries.geojson',
        format: new ol.format.GeoJSON()
    });

    map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.Stamen({
                layer: 'terrain'
            })
          }),
          new ol.layer.Vector({
            source: this.vectorSource
          })
        ],
        view: new ol.View({
          center: [0, 0],
          zoom: 2
        })
    });

    select = new ol.interaction.Select();
    dragBox = new ol.interaction.DragBox({
        condition: ol.events.condition.platformModifierKeyOnly
    });

    ngOnInit() {
        this.map.setTarget('map');  
        this.map.addInteraction(this.select); 
        this.selectedFeatures = this.select.getFeatures();
        this.map.addInteraction(this.dragBox);
    }

    clickMap() 
    {
        { // -- IIFE ES6
        setTimeout(() => {  //folosesc setTimeout pentru ca dureaza sa faca conturul hartii, dupa care o poate selecta cum trebuie    
                var names = this.selectedFeatures.getArray().map(function(feature:any) {
                    return feature.get('name');
                });
                if (names.length > 0) {
                    this.selectedCountry = names;
                    this.url = "https://www.countries-ofthe-world.com/flags-normal/flag-of-"  + this.selectedCountry +".png";
                }
                else {
                    this.selectedCountry = 'No country selected';
                    this.url="initial";
                }
            }        
        , 300);
        }
        //this.selectedFeatures = this.select.getFeatures();      
    } 

}