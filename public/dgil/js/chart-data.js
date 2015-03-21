
		
	var barChartData1 = {
			labels : ["JAVA","XML","XQuery","JavaScript","PL/SQL","WLST"],
			datasets : [
				{

					label:"Years",
					fillColor : "rgba(0,0,0,1)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(218,165,32,1)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [3,5,5,1,5,2]
				}
			]
	
		}

	var barChartData2 = {
			labels : ["WebLogic","SoapUI","SVN","Eclipse","Linux","Windows","ANT","Visio"],
			datasets : [
				{

					label:"Years",
					fillColor : "rgba(0,0,0,1)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(218,165,32,1)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [4,4,5,6,14,14,2,3]
				}
			]
	
		}	

	var barChartData3 = {
			labels : ["OSM","Jira","Order Management","HP-QC","Middleware", "Hi-Availability"],
			datasets : [
				{

					label:"Years",
					fillColor : "rgba(0,0,0,1)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(218,165,32,1)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [4,1,5,2,4,2]
				}
			]
	
		}		

	var radarChartData = {
    labels: ["Development", "Testing", "Architecture", "Project Management", "Agile Methodologies", "Delivery", "Customer Facing"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(218,165,32,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [70, 70, 70, 30, 50, 80, 80]
        },
        {
            label: "scale",
            fillColor: "rgba(218,165,32,0)",
            strokeColor: "rgba(220,220,220,0)",
            pointColor: "rgba(220,220,220,0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,0)",
            data: [100, 100, 100, 100, 100, 100, 100]
        }
    ]
};

window.onload = function(){

	var chart1 = document.getElementById("bar-chart-1").getContext("2d");
	window.myBar1 = new Chart(chart1).Bar(barChartData1, {
		responsive : true	
	});

	var chart2 = document.getElementById("bar-chart-2").getContext("2d");
	window.myBar2 = new Chart(chart2).Bar(barChartData2, {
		responsive : true	
	});
	var chart3 = document.getElementById("bar-chart-3").getContext("2d");
	window.myBar3 = new Chart(chart3).Bar(barChartData3, {
		responsive : true	
	});

	var chart4 = document.getElementById("radar-chart").getContext("2d");
	window.myRadar = new Chart(chart4).Radar(radarChartData, {
		pointDot: true,
		scaleShowLine : true,
		scaleShowLabels : false	
	});	
	
};