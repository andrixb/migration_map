var containerMALIChecker = false;
var containerNADORChecker =  false;
var containerAL_KUFRAHChecker = false;

// ROUTE 1
d3.select('#point_MALI')
	.on('mouseover', function () {
		this.style.cursor = "pointer";
	})
	.on('click', function () {

		hidePoints('route1');

		var baseTimer = 2500;
		var totalLength = document.getElementById('line_1_0').getTotalLength();
		var line = d3.select('#line_1_0')
			.style('opacity', 1)
			.attr("stroke-dasharray", totalLength)
			.attr("stroke-dashoffset", totalLength)
			.transition()
			.duration(baseTimer)
			.ease("linear")
			.attr("stroke-dashoffset", 0);

		d3.select('#point_NADOR')
			.transition()
			.duration(500)
			.ease("linear")
			.style('visibility', 'visible')
			.delay(baseTimer + 250)
			.style('opacity', 1);
	})
	.on('dblclick', function () {

		
	  if(!containerMALIChecker){
		  d3.select('#container_MALI')
			.transition()
			.duration(500)
			.style('opacity', 0.7)
			.style('z-index', 100);
	
	     containerMALIChecker = true;
	  }
//	else{
//		   d3.select('#container_MALI')
//				.transition()
//				.duration(500)
//				.style('opacity', 0)
//				.style('z-index', -1);
//			
//			containerMALIChecker = false;
//	}

	});

d3.select('#contanier_MALI').on('dblclick', function(){console.log('dbl');});

d3.select('#point_NADOR')
.on('mouseover', function () {this.style.cursor = "pointer";})
.on('click', function () {

	var baseTimer = 2000;
	var totalLength = document.getElementById('line_1_1').getTotalLength();
	var line = d3.select('#line_1_1')
		.style('opacity', 1)
		.attr("stroke-dasharray", totalLength)
		.attr("stroke-dashoffset", totalLength)
		.transition()
		.duration(baseTimer)
		.ease("linear")
		.attr("stroke-dashoffset", 0);

	d3.select('#point_SPAIN')
		.transition()
		.duration(500)
		.ease("linear")
		.style('visibility', 'visible')
		.delay(baseTimer + 250)
		.style('opacity', 1);
}).on('dblclick', function () {

		 if(!containerNADORChecker){
		  d3.select('#container_NADOR')
			.transition()
			.duration(500)
			.style('opacity', 0.7)
			.style('z-index', 100);
	
	     containerNADORChecker = true;
	  }

});

// ROUTE 2
d3.select('#point_AL_KUFRAH')
.on('mouseover', function () {
	this.style.cursor = "pointer";
})
.on('click', function () {

	hidePoints('route2');

	var totalLength = document.getElementById('line_2_0').getTotalLength();
	var line = d3.select('#line_2_0')
		.style('opacity', 1)
		.attr("stroke-dasharray", totalLength)
		.attr("stroke-dashoffset", totalLength)
		.transition()
		.duration(2000)
		.ease("linear")
		.attr("stroke-dashoffset", 0);

	d3.select('#point_AJDABIYA')
		.transition()
		.duration(500)
		.ease("linear")
		.style('visibility', 'visible')
		.delay(2250)
		.style('opacity', 1);
})
.on('dblclick', function () {



});
//----- UTILS FUNCTIONS -----

function hidePoints(route_number) {

	switch (route_number) {

	case 'route1':
		document.getElementById('point_AJDABIYA').style.opacity = 0;
		document.getElementById('point_AJDABIYA').style.visbility = 0;

		document.getElementById('line_2_0').style.opacity = 0;
		document.getElementById('line_2_1').style.opacity = 0;

		break;

	case 'route2':
		document.getElementById('point_NADOR').style.opacity = 0;
		document.getElementById('point_NADOR').style.visbility = 0;
		document.getElementById('point_SPAIN').style.opacity = 0;
		document.getElementById('point_SPAIN').style.visbility = 0;

		document.getElementById('line_1_0').style.opacity = 0;
		document.getElementById('line_1_1').style.opacity = 0;

		break;

	case 'route3':
		//		    document.getElementById().style.opacity = 0;
		//			document.getElementById().style.visbility = 0;
		break;

	case 'route4':
		//		    document.getElementById().style.opacity = 0;
		//			document.getElementById().style.visbility = 0;
		break;


	}

}


function createContainer(id) {
	d3.select('body')
		.append("div")
		.attr('class', 'contentHolder')
		.attr('id', id)
		.style('z-index', -1);
}

createContainer('container_MALI'); 
createContainer('container_NADOR');


function closeContainer(id){
	
	d3.select(id)
		.on('dblclick', function () {
		
		 d3.select('#container_MALI')
				.transition()
				.duration(500)
				.style('opacity', 0)
				.style('z-index', -1);
	});
	
}