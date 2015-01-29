
		
	var barChartData = {
			labels : ["OSM", "JAVA", "WebLogic","SoapUI","SOA","Eclipse","Order Managment","XML","OSB","Middleware","Linux","Windows","Groovy","Xquery"],
			datasets : [
				{

					label:"Years",
					fillColor : "rgba(0,0,0,1)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(218,165,32,1)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [4,10,6,4,5,7,6,10,3,6,10,10,3,6]
				}
			]
	
		}

	var radarChartData = {
    labels: ["Development", "Testing", "Proposals", "Architecture", "Project Managent", "Agile Methodologies", "Delivery", "Customer Facing"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(218,165,32,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [90, 70, 60, 80, 40, 80, 70, 80]
        }
    ]
};

window.onload = function(){

	var chart2 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData, {
		responsive : true	
	});


	var chart4 = document.getElementById("radar-chart").getContext("2d");
	window.myRadar = new Chart(chart4).Radar(radarChartData, {
		pointDot: false	
	});	
	
};