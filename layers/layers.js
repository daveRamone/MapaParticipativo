var wms_layers = [];


        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'Bing Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });
var format_fincas_ucr_1 = new ol.format.GeoJSON();
var features_fincas_ucr_1 = format_fincas_ucr_1.readFeatures(json_fincas_ucr_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fincas_ucr_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fincas_ucr_1.addFeatures(features_fincas_ucr_1);
var lyr_fincas_ucr_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fincas_ucr_1, 
                style: style_fincas_ucr_1,
                popuplayertitle: 'fincas_ucr',
                interactive: true,
                title: '<img src="styles/legend/fincas_ucr_1.png" /> fincas_ucr'
            });
var format_CartografiaParticipativareas_2 = new ol.format.GeoJSON();
var features_CartografiaParticipativareas_2 = format_CartografiaParticipativareas_2.readFeatures(json_CartografiaParticipativareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartografiaParticipativareas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartografiaParticipativareas_2.addFeatures(features_CartografiaParticipativareas_2);
var lyr_CartografiaParticipativareas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartografiaParticipativareas_2, 
                style: style_CartografiaParticipativareas_2,
                popuplayertitle: 'Cartografia Participativa — Áreas',
                interactive: true,
                title: '<img src="styles/legend/CartografiaParticipativareas_2.png" /> Cartografia Participativa — Áreas'
            });
var format_CartografiaParticipativareas_listas_3 = new ol.format.GeoJSON();
var features_CartografiaParticipativareas_listas_3 = format_CartografiaParticipativareas_listas_3.readFeatures(json_CartografiaParticipativareas_listas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartografiaParticipativareas_listas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartografiaParticipativareas_listas_3.addFeatures(features_CartografiaParticipativareas_listas_3);
var lyr_CartografiaParticipativareas_listas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartografiaParticipativareas_listas_3, 
                style: style_CartografiaParticipativareas_listas_3,
                popuplayertitle: 'Cartografia Participativa — Áreas_listas',
                interactive: true,
    title: 'Cartografia Participativa — Áreas_listas<br />\
    <img src="styles/legend/CartografiaParticipativareas_listas_3_0.png" /> Contamina<br />\
    <img src="styles/legend/CartografiaParticipativareas_listas_3_1.png" /> Disfrute<br />\
    <img src="styles/legend/CartografiaParticipativareas_listas_3_2.png" /> Inseguro<br />\
    <img src="styles/legend/CartografiaParticipativareas_listas_3_3.png" /> <br />' });

lyr_BingMap_0.setVisible(true);lyr_fincas_ucr_1.setVisible(true);lyr_CartografiaParticipativareas_2.setVisible(true);lyr_CartografiaParticipativareas_listas_3.setVisible(true);
var layersList = [lyr_BingMap_0,lyr_fincas_ucr_1,lyr_CartografiaParticipativareas_2,lyr_CartografiaParticipativareas_listas_3];
lyr_fincas_ucr_1.set('fieldAliases', {'ID': 'ID', 'NOMBRE_PRO': 'NOMBRE_PRO', 'UBICACION': 'UBICACION', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', 'CODIGO_REC': 'CODIGO_REC', 'CODIGO_SED': 'CODIGO_SED', 'ID_PROVINC': 'ID_PROVINC', 'ID_CANTON': 'ID_CANTON', 'ID_DISTRIT': 'ID_DISTRIT', 'LOCK_ID': 'LOCK_ID', 'ES_CON_USO': 'ES_CON_USO', 'CANTIDAD_C': 'CANTIDAD_C', 'IMAGEN': 'IMAGEN', 'ID_PROPIED': 'ID_PROPIED', 'EXISTE': 'EXISTE', 'FECHA_ULT_': 'FECHA_ULT_', 'NOMBRE_DIS': 'NOMBRE_DIS', 'NOMBRE_CAN': 'NOMBRE_CAN', 'NOMBRE_PR1': 'NOMBRE_PR1', 'FECHA_ACTU': 'FECHA_ACTU', });
lyr_CartografiaParticipativareas_2.set('fieldAliases', {'id': 'id', 'Categoria': 'Categoria', });
lyr_CartografiaParticipativareas_listas_3.set('fieldAliases', {'id': 'id', 'Categoria': 'Categoria', });
lyr_fincas_ucr_1.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE_PRO': 'TextEdit', 'UBICACION': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', 'CODIGO_REC': 'TextEdit', 'CODIGO_SED': 'TextEdit', 'ID_PROVINC': 'TextEdit', 'ID_CANTON': 'TextEdit', 'ID_DISTRIT': 'TextEdit', 'LOCK_ID': 'TextEdit', 'ES_CON_USO': 'CheckBox', 'CANTIDAD_C': 'TextEdit', 'IMAGEN': 'TextEdit', 'ID_PROPIED': 'TextEdit', 'EXISTE': 'CheckBox', 'FECHA_ULT_': 'DateTime', 'NOMBRE_DIS': 'TextEdit', 'NOMBRE_CAN': 'TextEdit', 'NOMBRE_PR1': 'TextEdit', 'FECHA_ACTU': 'TextEdit', });
lyr_CartografiaParticipativareas_2.set('fieldImages', {'id': '', 'Categoria': '', });
lyr_CartografiaParticipativareas_listas_3.set('fieldImages', {'id': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_fincas_ucr_1.set('fieldLabels', {'ID': 'no label', 'NOMBRE_PRO': 'no label', 'UBICACION': 'no label', 'AREA': 'no label', 'PERIMETRO': 'no label', 'CODIGO_REC': 'no label', 'CODIGO_SED': 'no label', 'ID_PROVINC': 'no label', 'ID_CANTON': 'no label', 'ID_DISTRIT': 'no label', 'LOCK_ID': 'no label', 'ES_CON_USO': 'no label', 'CANTIDAD_C': 'no label', 'IMAGEN': 'no label', 'ID_PROPIED': 'no label', 'EXISTE': 'no label', 'FECHA_ULT_': 'no label', 'NOMBRE_DIS': 'no label', 'NOMBRE_CAN': 'no label', 'NOMBRE_PR1': 'no label', 'FECHA_ACTU': 'no label', });
lyr_CartografiaParticipativareas_2.set('fieldLabels', {'id': 'no label', 'Categoria': 'no label', });
lyr_CartografiaParticipativareas_listas_3.set('fieldLabels', {'id': 'no label', 'Categoria': 'no label', });
lyr_CartografiaParticipativareas_listas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});