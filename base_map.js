var width = 960,
	height = 670;

var projection = d3.geo.transverseMercator()
	.scale(600)
	.rotate([-20, -30])
	.translate([width / 2, height / 2])
	.precision(.1);

var path = d3.geo.path()
	.projection(projection);

var graticule = d3.geo.graticule();

var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height);

svg.append("path")
	.datum(graticule)
	.attr("class", "graticule")
	.attr("d", path);

// Draw routes on the map
//ROUTE 1
var i = 0;
svg.append("path")
	.datum(route1_0)
	.attr("class", "route")
	.attr("d", path)
	.attr('id', function () {
		return "line_1_" + i++;
	});

svg.append("path")
	.datum(route1_1)
	.attr("class", "route")
	.attr("d", path)
	.attr('id', function () {
		return "line_1_" + i++;
	});

//ROUTE 2
var l = 0;
svg.append("path")
	.datum(route2_1)
	.attr("class", "route")
	.attr("d", path)
	.attr('id', function () {
		return "line_2_" + l++;
	});

svg.append("path")
	.datum(route2_2)
	.attr("class", "route")
	.attr("d", path)
	.attr('id', function () {
		return "line_2_" + l++;
	});

svg.append("path")
	.datum(route2_3)
	.attr("class", "route")
	.attr("d", path)
	.attr('id', function () {
		return "line_2_" + l++;
	});

svg.append("path")
	.datum(route2_4)
	.attr("class", "route")
	.attr("d", path)
	.attr('id', function () {
		return "line_2_" + l++;
	});

svg.append("path")
	.datum(route2_5)
	.attr("class", "route")
	.attr("d", path)
	.attr('id', function () {
		return "line_2_" + l++;
	});

svg.append("path")
	.datum(route2_6)
	.attr("class", "route")
	.attr("d", path)
	.attr('id', function () {
		return "line_2_" + l++;
	});

svg.append("path")
	.datum(route2_7)
	.attr("class", "route")
	.attr("d", path)
	.attr('id', function () {
		return "line_2_" + l++;
	});
//End draw routes on the map	

var point = svg.append("g")
	.attr("class", "points")
	.selectAll("g")
	.data(d3.entries(places))
	.enter().append("g")
	.attr("transform", function (d) {
		return "translate(" + projection(d.value) + ")";
	})
	.attr("id", function (d) {
		return "point_" + d.key;
	});

point.append("circle")
	.attr("r", 4.5);

point.append("text")
	.attr("y", 10)
	.attr("dy", ".71em")
	.text(function (d) {
		if (d.key == "AL_KUFRAH") {
			return "AL KUFRAH";
		}
		return d.key;
	});

d3.json("world-110m.json", function (error, world) {
	if (error) throw error;

	svg.insert("path", ".graticule")
		.datum(topojson.feature(world, world.objects.land))
		.attr("class", "land")
		.attr("d", path);

	svg.insert("path", ".graticule")
		.datum(topojson.mesh(world, world.objects.countries, function (a, b) {
			return a !== b;
		}))
		.attr("class", "boundary")
		.attr("d", path);
});

d3.select(self.frameElement).style("height", height + "px");