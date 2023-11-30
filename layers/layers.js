var wms_layers = [];

var format_PETAGEOLOGI_0 = new ol.format.GeoJSON();
var features_PETAGEOLOGI_0 = format_PETAGEOLOGI_0.readFeatures(json_PETAGEOLOGI_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETAGEOLOGI_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETAGEOLOGI_0.addFeatures(features_PETAGEOLOGI_0);
var lyr_PETAGEOLOGI_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETAGEOLOGI_0, 
                style: style_PETAGEOLOGI_0,
                interactive: true,
    title: 'PETA GEOLOGI<br />\
    <img src="styles/legend/PETAGEOLOGI_0_0.png" /> Aluvial<br />\
    <img src="styles/legend/PETAGEOLOGI_0_1.png" /> Batuan Gunungapi<br />\
    <img src="styles/legend/PETAGEOLOGI_0_2.png" /> Batuan Terobosan<br />\
    <img src="styles/legend/PETAGEOLOGI_0_3.png" /> Batugamping<br />\
    <img src="styles/legend/PETAGEOLOGI_0_4.png" /> Hasil Gunungapi Tua<br />\
    <img src="styles/legend/PETAGEOLOGI_0_5.png" /> Tuff dengan Kandungan Utama Tuf<br />\
    <img src="styles/legend/PETAGEOLOGI_0_6.png" /> <br />'
        });

lyr_PETAGEOLOGI_0.setVisible(true);
var layersList = [lyr_PETAGEOLOGI_0];
lyr_PETAGEOLOGI_0.set('fieldAliases', {'ET_ID': 'ET_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'map_id': 'map_id', 'theme_id': 'theme_id', 'map_indeks': 'map_indeks', 'map_name': 'map_name', 'scale_id': 'scale_id', 'regi_pv_id': 'regi_pv_id', 'regi_ds_id': 'regi_ds_id', 'map_acyear': 'map_acyear', 'map_puyear': 'map_puyear', 'map_inst': 'map_inst', 'cc_id_load': 'cc_id_load', 'map_com': 'map_com', 'filename': 'filename', 'filepath': 'filepath', 'OBJECTID_1': 'OBJECTID_1', 'FCODE': 'FCODE', 'SIMOBJ': 'SIMOBJ', 'NAMOBJ': 'NAMOBJ', 'UMUROBJ': 'UMUROBJ', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'layer': 'layer', 'path': 'path', });
lyr_PETAGEOLOGI_0.set('fieldImages', {'ET_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'map_id': 'TextEdit', 'theme_id': 'TextEdit', 'map_indeks': 'TextEdit', 'map_name': 'TextEdit', 'scale_id': 'TextEdit', 'regi_pv_id': 'TextEdit', 'regi_ds_id': 'TextEdit', 'map_acyear': 'TextEdit', 'map_puyear': 'TextEdit', 'map_inst': 'TextEdit', 'cc_id_load': 'TextEdit', 'map_com': 'TextEdit', 'filename': 'TextEdit', 'filepath': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'FCODE': 'TextEdit', 'SIMOBJ': 'TextEdit', 'NAMOBJ': 'TextEdit', 'UMUROBJ': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PETAGEOLOGI_0.set('fieldLabels', {'ET_ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'map_id': 'no label', 'theme_id': 'no label', 'map_indeks': 'no label', 'map_name': 'no label', 'scale_id': 'no label', 'regi_pv_id': 'no label', 'regi_ds_id': 'no label', 'map_acyear': 'no label', 'map_puyear': 'no label', 'map_inst': 'no label', 'cc_id_load': 'no label', 'map_com': 'no label', 'filename': 'no label', 'filepath': 'no label', 'OBJECTID_1': 'no label', 'FCODE': 'no label', 'SIMOBJ': 'no label', 'NAMOBJ': 'no label', 'UMUROBJ': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PETAGEOLOGI_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});