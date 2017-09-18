import { Component, OnInit } from '@angular/core';
//import * as $ from "jquery";

declare var ol: any;

@Component({
  moduleId: module.id,
  selector: 'layergroupsComp',
  templateUrl: `layergroups.component.html`,
  styleUrls: ['layergroups.component.css'],
})

export class LayergroupsComponent implements OnInit{
    ol: any;
    
        ngOnInit() {

            var map = new ol.Map({
                layers: [
                  new ol.layer.Tile({
                    source: new ol.source.OSM()
                  }),
                  new ol.layer.Group({
                    layers: [
                      new ol.layer.Tile({
                        source: new ol.source.TileJSON({
                          url: 'https://api.tiles.mapbox.com/v3/mapbox.20110804-hoa-foodinsecurity-3month.json?secure',
                          crossOrigin: 'anonymous'
                        })
                      }),
                      new ol.layer.Tile({
                        source: new ol.source.TileJSON({
                          url: 'https://api.tiles.mapbox.com/v3/mapbox.world-borders-light.json?secure',
                          crossOrigin: 'anonymous'
                        })
                      })
                    ]
                  })
                ],
                target: 'map',
                view: new ol.View({
                  center: ol.proj.fromLonLat([37.40570, 8.81566]),
                  zoom: 4
                })
              });

              function bindInputs(layerid:any, layer:any) {
                var visibilityInput =  $(layerid + ' input.visible');
                visibilityInput.on('change', function() {
                  layer.setVisible((this as HTMLInputElement).checked);
                });
                visibilityInput.prop('checked', layer.getVisible());
        
                var opacityInput = $(layerid + ' input.opacity');
                opacityInput.on('input change', function() {
                  layer.setOpacity(parseFloat((this as HTMLInputElement).value));
                });
                opacityInput.val(String(layer.getOpacity()));
              }

              map.getLayers().forEach(function(layer:any, i:any) {
                bindInputs('#layer' + i, layer);
                if (layer instanceof ol.layer.Group) {
                  layer.getLayers().forEach(function(sublayer:any, j:any) {
                    bindInputs('#layer' + i + j, sublayer);
                  });
                }
              });
        
              $('#layertree li > span').click(function() {
                $(this).siblings('fieldset').toggle();
              }).siblings('fieldset').hide();

        }

}