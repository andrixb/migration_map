var places = {
  NADOR: [-2.9275835999999344, 35.1686165],  //[lat, long]
  MALI: [-3.9961660000000165, 17.570692],
  SPAIN: [ -3.7492200000000366, 40.46366700000001],
  DOVER: [ 1.3134026999999833, 51.1278758],
  CALAIS: [ 1.8586860000000345, 50.95129000000001],
  VENTIMIGLIA: [ 7.607586399999946, 43.7912366],
  ROME: [12.496365500000024, 41.9027835],
  NAPLES: [ 14.268124400000033, 40.8517746],
  ZARZIS: [11.08814940000002, 33.5041035],
  AL_KUFRAH: [21.85685860000001, 23.3112389],
  AJDABIYA: [20.14025939999999, 30.214647],
  TRIPOLI: [13.1913185, 32.888669],
  RAS_JEDIR: [11.5630674, 33.1493014],
  MOGADISHU:[45.3168869, 2.0560619],
  AFGHANISTAN:[67.9394531, 34.1618182],
  PAKISTAN:[69.3017578, 31.0905741],
  IRAN:[53.3935547, 33.3580616],
  IRAQ:[43.6157227, 33.4864355],
  SYRIA:[39.0344238, 35.0569804],
  TURKEY:[35.3320313, 39.1811753],
  LESVOS:[26.2834167, 39.2790419],
  KOS:[27.2845459, 36.8922522],
  ATHENS:[23.7296104, 37.9857455],
  SOFIA:[23.3900121, 42.66722200000001], //BULGARIA
  BELGRADE:[20.517061, 44.6757359], //SERBIA
  ZAGREB:[16.20578, 45.8773377], //CROATIA
  SLOVENIA:[15.0238037, 46.221652500000005],
  BERLIN:[13.3917946, 52.5132601], //GERMANY
  ROSARNO:[15.975580200000001, 38.4883977],
  LAMPEDUSA:[12.592907, 35.511828],
  ZWARA:[12.5614716, 32.7405138],
  KHARTOUM:[32.55989939999995, 15.5006544],
  ASMARA:[38.92505170000004, 15.3228767],
  SAHARA_DESERT:[25.7887893, 21.2243785],
  MELILLA_NADOR:[-2.9223802, 35.2364584],
  CAIRO:[30.871582000000004, 30.088107800000003],
  MALAGA:[-4.4165039, 36.8620427],
  CEUTA:[-5.3668213, 35.8935003],
  ALESSANDRIA:[29.918738699999945, 31.2000924],
  SABHA:[14.436035200000001, 27.000408],
  OUJDA:[-1.8511963, 34.7325842],
  AGADEZ:[7.9865350000000035, 16.9741689],
  ABUJA:[7.426757800000001, 8.9936005], //NIGERIA
  ADDIS_ABABA:[38.7487793, 9.0044516],
  SANAA:[44.0771484, 15.2841851],
  CAMEROON:[12.3706055, 5.3644597],
  ACCRA:[-0.0878906, 5.5722498],
  CHAD:[15.073242200000001, 12.2111802], //NDJAMENA
  DAHAR:[-17.3693848, 14.7642592], //SENEGAL
  RABAT:[-6.9433594, 34.0162419], //MOROCCO
  FES:[-4.9658203, 34.0344526], //MOROCCO
  LONDON:[-0.2636719, 51.4540069],
  BARI:[16.8640137, 41.1207456],
  UDINE:[13.2165527, 46.0808517],
  ISTANBUL:[29.025842900000004, 41.1454069],
  PATRAS:[21.730957, 38.2381801],
  BRINDISI:[17.9077148, 40.6306301],
  SKOPJE:[21.4232998, 41.9959592],
  PRESEVO:[21.64986859999999, 42.3091712],
  TORINO:[7.686856499999977, 45.07031200000001],
  PARIS:[2.4169922, 48.9224993]
};

// Define routes
// ROUTE 1
//starting Mali
//ending Spain
var route1_0 = {
  type: "LineString",
  coordinates: [
    places.MALI,
	places.NADOR
  ]
};

var route1_1 = {
  type: "LineString",
  coordinates: [
	places.NADOR,
    places.SPAIN
  ]
};
// ROUTE 2
// starting
// ending
var route2_1 = {
  type: "LineString",
  coordinates: [
    places.AL_KUFRAH,
    places.AJDABIYA
  ]
};

var route2_2 = {
  type: "LineString",
  coordinates: [
    places.AJDABIYA,
    places.ZARZIS
  ]
};

var route2_3 = {
  type: "LineString",
  coordinates: [
    places.ZARZIS,
    places.NAPLES
  ]
};

var route2_4 = {
  type: "LineString",
  coordinates: [
    places.NAPLES,
    places.ROME
  ]
};

var route2_5 = {
  type: "LineString",
  coordinates: [
    places.ROME,
    places.VENTIMIGLIA
  ]
};

var route2_6 = {
  type: "LineString",
  coordinates: [
    places.VENTIMIGLIA,
    places.CALAIS
  ]
};

var route2_7 = {
  type: "LineString",
  coordinates: [
    places.CALAIS,
    places.DOVER
  ]
};
//End define routes