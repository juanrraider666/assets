// JavaScript Document
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
google.charts.setOnLoadCallback(drawChart6);




                  
$(window).resize(function(){
    drawChart();
	drawChart2();
	drawChart3();
	drawChart4();
    drawChart5();
    drawChart6();
				
});







/** Grafica  1**/
 function drawChart() {
        var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['',    1],
		  ['',      99],
		]);

        // Set chart options
        var options = {
						'chartArea': {'width': '90%', 'height': '90%', left: "4.55%",
            top: "4.55%",},
						width: '100%',
        				height: '100%',
           
						pieHole: 0.88,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#fd8c71', '#37d0c7', '#435461'],
           
			pieSliceBorderColor:"#ffffff",
			pieSliceText: "none", 
             animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },


};


        var chart = new google.visualization.PieChart(document.getElementById('ob_1'));
        chart.draw(data, options);
      }


/** Grafica  2**/
  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['',      21],
		  ['',  79],
		]);

       var options = {
						'chartArea': {'width': '90%', 'height': '90%', left: "4.55%",
            top: "4.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.88,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#fd8c71', '#37d0c7', '#435461'],
           
			pieSliceBorderColor:"#ffffff",
			pieSliceText: "none", 
            animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },


};


    var chart = new google.visualization.PieChart(document.getElementById('ob_2'));
    chart.draw(data, options);
  } 
/** Grafica  3**/ 
  function drawChart3() {
    var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['',      63],
		  ['',  37],
		]);

       var options = {
						'chartArea': {'width': '90%', 'height': '90%', left: "4.55%",
            top: "4.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.88,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#fd8c71', '#37d0c7', '#435461'],
           
			pieSliceBorderColor:"#ffffff",
			pieSliceText: "none",
            animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },





};

    var chart = new google.visualization.PieChart(document.getElementById('ob_3'));
    chart.draw(data, options);
  }

/** Grafica rendir 4**/
  

/** Grafica  4**/ 
  function drawChart4() {
    var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['',      3],
		  ['',  97],
		]);

       var options = {
						'chartArea': {'width': '90%', 'height': '90%', left: "4.55%",
            top: "4.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.88,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#fd8c71', '#37d0c7', '#435461'],
           
			pieSliceBorderColor:"#ffffff",
			pieSliceText: "none", 
            animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },

};

    var chart = new google.visualization.PieChart(document.getElementById('ob_4'));
    chart.draw(data, options);
  }




///////////////////////////////////////////


/** Grafica  5**/ 
  function drawChart5() {
    var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['', 50],
		  ['',  40],
         ['',  10],
		]);

       var options = {
						'chartArea': {'width': '90%', 'height': '90%', left: "4.55%",
            top: "4.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.88,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#fd8c71', '#37d0c7', '#435461'],
           
			pieSliceBorderColor:"#ffffff",
			pieSliceText: "none",  animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },

};

    var chart = new google.visualization.PieChart(document.getElementById('ob_5'));
    chart.draw(data, options);
  }



////////////////////////////////////////////////////////

/** Grafica  6**/ 
  function drawChart6() {
    var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['', 50],
		  ['',  40],
         ['',  10],
		  
		]);

       var options = {
						'chartArea': {'width': '90%', 'height': '90%', left: "4.55%",
            top: "4.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.88,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#fd8c71', '#37d0c7', '#435461'],
           
			pieSliceBorderColor:"#ffffff",
			pieSliceText: "none",  animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },

};

    var chart = new google.visualization.PieChart(document.getElementById('ob_6'));
    chart.draw(data, options);
  }





