import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  moduleId: module.id,
  selector: 'moveComp',
  templateUrl: `movearound.component.html`,
  styleUrls: ['movearound.component.css']
})

export class MovearoundComponent implements OnInit {
    ol:any;
    center: any;
    zoom: number = 6;

    layer = new ol.layer.Tile({
          source: new ol.source.OSM()
    })

    view = new ol.View({
      center: ol.proj.transform([2.1833, 41.3833], 'EPSG:4326', 'EPSG:3857'),
      zoom: this.zoom
    })

    map = new ol.Map({
      layers: [this.layer],
      view: this.view
    });

    ngOnInit() {
       this.map.setTarget('map');
    }

    centerLondon() :void {
        this.center =  [-0.12755, 51.507222];
        this.map.getView().setCenter(ol.proj.transform(this.center, 'EPSG:4326', 'EPSG:3857'));
    }

    centerMoscow() :void {
      this.center = [37.6178, 55.7517];
      this.map.getView().setCenter(ol.proj.transform(this.center, 'EPSG:4326', 'EPSG:3857'));
    }

    centerRome() :void {
      this.center = [12.5, 41.9];
      this.map.getView().setCenter(ol.proj.transform(this.center, 'EPSG:4326', 'EPSG:3857'));
    }

    centerBern() :void {
      this.center = [7.4458, 46.95];
      this.map.getView().setCenter(ol.proj.transform(this.center, 'EPSG:4326', 'EPSG:3857'));
    }

    changeZoom(value:any) :void {
      console.log(value);
      this.map.getView().setZoom(value);
    }

}