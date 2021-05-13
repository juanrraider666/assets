// JavaScript Document
google.charts.load("current", {packages:["corechart"]});

 google.charts.setOnLoadCallback(drawVisualization);
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart_pg_r);
google.charts.setOnLoadCallback(drawChart_bs_o);
google.charts.setOnLoadCallback(drawChart_eq_m);
google.charts.setOnLoadCallback(drawChart_eq_m_dbm);
google.charts.setOnLoadCallback(drawChart_qtb);
google.charts.setOnLoadCallback(drawChart_tu_p);
google.charts.setOnLoadCallback(drawChart_ut_d);


                  
/*$(window).resize(function(){
    drawChart1();
	drawChart2();
	drawVisualization();
    drawChart_pg_r();
    drawChart_bs_o();
    drawChart_eq_m();
    drawChart_eq_m_dbm();
    drawChart_qtb();
    drawChart_tu_p();
    drawChart_ut_d();
});*/



///////////////////////////////////////////


/** Grafica  ob_p1**/ 
  function drawChart1() {
    var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['', 18],
		  ['',  82],
        
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

    var chart = new google.visualization.PieChart(document.getElementById('ob_p1'));
    chart.draw(data, options);
  }



////////////////////////////////////////////////////////

/** Grafica  ob_p2**/ 
  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['', 42],
		  ['',  58],
        
		  
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

    var chart = new google.visualization.PieChart(document.getElementById('ob_p2'));
    chart.draw(data, options);
  }


//////////////////////////////////////////////




function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Hybrid IT', 'PointNext', 'Aruba',    'Average1' , 'Average2'],
    ['Jan',  165,      938, 220, 614.6 , 400],
    ['Feb',  135,      1120, 200,  682 , 500],
    ['Mar',  157,      1167, 220,  623, 600],
    ['Apr',  139,      1110, 420,  609.4, 450],
    ['May',  136,      691, 320,   569.6 , 700],
    ['Jun',  165,      938, 102, 614.6 , 400],
    ['Jul',  135,      1120, 2,  682 , 500],
    ['Aug',  157,      1167, 320,  623, 600],
    ['Sep',  139,      1110, 700,  609.4, 450],
    ['Oct',  136,      691, 100,   569.6 , 700],
    ['Nov',  136,      691, 800,   569.6 , 700],
    ['Dic',  136,      691, 520,   569.6 , 700]  
  ]);

  var options = {
      with:"100%",
       chartArea:{left:"5%",top:"5%",width:'90%',height:'80%'},
        title : '',
        vAxis: {title: ""},
        isStacked: true,
        fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
        colors: ['#fd8c71', '#37d0c7', '#435461', '#5f7a76', '#80746e' ],
        legend: { position: 'none' },
        hAxis : { title: "",
            textStyle : {
                fontName: 'MetricWeb_regular', fontSize: 15,
            }
        },
      
        bar:{groupWidth:"15%"},
        seriesType: "bars",
    
    series: {
         0: {targetAxisIndex: 0},
        3: {type: "line", lineDashStyle: [4, 4]},
        4: {type: "line", targetAxisIndex: 1},
    },
      
      
      
      vAxes: {
            // Adds titles to each axis.
            0: {title: ''},
            3: {title: ''}
          },
   
      animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },

  };
    
    
   

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

//////////////////////////////////////////


function drawChart_pg_r() {
        var data = google.visualization.arrayToDataTable([
            ['Month', 'Redeemed', 'Generated'],
            ['Jan',  0,      1000000],
            ['Feb',  0,      15000000],
            ['Mar',  1000000,      38000000],
            ['Apr',  7000000,      50000000],
            ['May',  12000000,      72000000],
            ['Jun',  25000000,      85000000],
            ['Jul',  38000000,      98000000],
            ['Aug',  50000000,      102000000],
            ['Sep',  65000000,      120000000],
            ['Oct',  80000000,      132000000],
            ['Nov',  120000000,     145000000],
            ['Dic',  140000000,     145000000]  
        ]);

        var options = {
           with:"100%",
       chartArea:{left:"5%",top:"5%",width:'94%',height:'80%'},
        title : '',
        vAxis: {title: ""},
        isStacked: true,
        fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
        colors: ['#37d0c7', '#425563'],
        legend: { position: 'none' },
        hAxis : { title: "",
            textStyle : {
                fontName: 'MetricWeb_regular', fontSize: 15,
            }
        },
         series: {
         0: {areaOpacity: 1},
        1: {areaOpacity: 1},
        
        },    
            
         animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },    
            
    };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_pg_r'));
        chart.draw(data, options);
      }


////////////////////////////////////////////


function drawChart_bs_o() {
        var data = google.visualization.arrayToDataTable([
    ['Month', 'Best Seller', 'Other'],
    ['Jan',  300,      300],
    ['Feb',  300,      300],
    ['Mar',  300,      300],
    ['Apr',  300,      300],
    ['May',  300,      300],
    ['Jun',  300,      300],
    ['Jul',  300,      300],
    ['Aug',  300,      300],
    ['Sep',  300,      300],
    ['Oct',  300,      300],
    ['Nov',  300,      300],
    ['Dic',  300,      300]  
  ]);

  var options = {
      with:"100%",
       chartArea:{left:"5%",top:"5%",width:'94%',height:'80%'},
        title : '',
        vAxis: {title: "", format: 'decimal'
               },
        isStacked: "relative",
        fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
        colors: ['#37d0c7', '#425563'],
        legend: { position: 'none' },
        hAxis : { title: "",
            textStyle : {
                fontName: 'MetricWeb_regular', fontSize: 15,
            }
        },
      
        bar:{groupWidth:"15%"},
       animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },

  };
    

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_bs_o'));
        chart.draw(data, options);
      }



///////////////////////////////////////////////


function drawChart_eq_m() {
        var data = google.visualization.arrayToDataTable([
    ['Month', 'Exported Quotes', 'average'],
    ['Jan',  6100,    5500 ],
    ['Feb',  6000,     5500],
    ['Mar',  5500,     5500 ],
    ['Apr',  5000,     5500 ],
    ['May',  5200,     5500 ],
    ['Jun',  5000,     5500 ],
    ['Jul',  5050,     5500 ],
    ['Aug',  5100,     5500 ],
    ['Sep',  5000,     5500 ],
    ['Oct',  7220,     5500 ],
    ['Nov',  5200,     5500 ],
    ['Dic',  4500,     5500 ]  
  ]);

  var options = {
      with:"100%",
       chartArea:{left:"10%",top:"5%",width:'80%',height:'80%'},
        title : '',
        vAxis: {title: "", format: 'decimal', viewWindow: {max:8000, min:0}, ticks: [0,1000,2000,3000,4000,5000,6000,7000,8000]
               },
        //isStacked: "relative",
        fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
        colors: ['#37d0c7', '#425563'],
        legend: { position: 'none' },
        hAxis : { title: "",
            textStyle : {
                fontName: 'MetricWeb_regular', fontSize: 15,
            }
        },
        bar:{groupWidth:"25%"},
      series: {
        1: {type: "line", lineDashStyle: [4, 4]},
       
    },
      
       animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },
     

  };
    

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_eq_m'));
        chart.draw(data, options);
      }

/////////////////////////////////////////////////////


function drawChart_eq_m_dbm() {
        var data = google.visualization.arrayToDataTable([
    ['Month', 'Exported Quotes', ],
    ['Jan',  520000,     ],
    ['Feb',  450000,    ],
    ['Mar',  510000,      ],
    ['Apr',  420000,      ],
    ['May',  420000,     ],
    ['Jun',  430000,      ],
    ['Jul',  380000,      ],
    ['Aug',  390000,      ],
    ['Sep',  400000,     ],
    ['Oct',  495000,      ],
    ['Nov',  475000,      ],
    ['Dic',  350000,     ]  
  ]);

  var options = {
      with:"100%",
       chartArea:{left:"10%",top:"5%",width:'80%',height:'80%'},
        title : '',
        vAxis: {title: "", format: 'decimal', viewWindow: {max:600000, min:0}, ticks: [0,100000,200000,300000,400000,500000,600000,700000,800000]
               },
        //isStacked: "relative",
        fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
        colors: ['#37d0c7', '#425563'],
        legend: { position: 'none' },
        hAxis : { title: "",
            textStyle : {
                fontName: 'MetricWeb_regular', fontSize: 15,
            }
        },
        bar:{groupWidth:"25%"},
      series: {
        1: {type: "line", lineDashStyle: [4, 4]},
       
    },
      
       animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },
     

  };
    

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_eq_m_dbm'));
        chart.draw(data, options);
      }
















///////////////////////////////////////////////////

/** Grafica  ob_qtb**/ 
  function drawChart_qtb() {
    var data = google.visualization.arrayToDataTable([
            ['', ''],
            ['', 18],
            ['',  72],
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
			pieSliceText: "none", 
            animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },

};
      
      

    var chart = new google.visualization.PieChart(document.getElementById('ob_qtb'));
    chart.draw(data, options);
  }



////////////////////////////////////////////////////////



function drawChart_tu_p() {
        var data = google.visualization.arrayToDataTable([
    ['Users', 'Count User'],
    ['Users EG',  44,    ],
    ['Users Attending',  42,    ],
    ['Users Attending Phase #1',  28,      ],
    ['Users Attending Phase #2',  17.5,     ],
    ['Users Attending Phase #3',  8,     ],
      
  ]);

  var options = {
      with:"100%",
       chartArea:{left:"17%", height:'80%', top:'4%'},
        title : '',
        vAxis: {title: "", format: 'decimal',  minTextLines:'3',
               },
        //isStacked: "relative",
        fontName: 'MetricWeb_regular',
        fontSize: 14,
        colors: ['#37d0c7', '#425563'],
        legend: { position: 'none' },
        hAxis : { title: "",
            textStyle : {
                fontName: 'HPESimpleWeb-Regular', fontSize: 12, 
            }, viewWindow: {max:120, min:0}, ticks: [0,20,40,60,80,100,120], 
        },
        bar:{groupWidth:"34%"},
      
       animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },

  };
    

        var chart = new google.visualization.BarChart(document.getElementById('chart_tu_p'));
        chart.draw(data, options);
      }

///////////////////////////////////////////////

function drawChart_ut_d() {
        var data = google.visualization.arrayToDataTable([
    ['User Trainned by Distributor', 'Distributor Users', 'Partners Users'],
    ['Dist 10',  28,   72 ],
    ['Dist 9',  40,  60   ],
    ['Dist 8',  28, 50      ],
    ['Dist 7',  35, 50     ],
    ['Dist 6',  30,   40   ],
    ['Dist 5',  27,   45   ],
    ['Dist 4',  25,   40   ],
    ['Dist 3',  20,   35   ],
    ['Dist 2',  12,   20   ],
    ['Dist 1',  8,   15   ],
            
      
  ]);

  var options = {
      with:"100%",
       chartArea:{left:"5%", height:'80%', top:'4%', width: '90%'},
        title : '',
        vAxis: {title: "", format: 'decimal',  
               },
        isStacked: true,
        fontName: 'MetricWeb_regular',
        fontSize: 14,
        colors: ['#37d0c7', '#425563'],
        legend: { position: 'none' },
        hAxis : { title: "",
            textStyle : {
                fontName: 'HPESimpleWeb-Regular', fontSize: 12, 
            }, viewWindow: {max:120, min:0}, ticks: [0,20,40,60,80,100,120], 
        },
        bar:{groupWidth:"34%"},
      
       animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },

  };
    

        var chart = new google.visualization.BarChart(document.getElementById('chart_ut_d'));
        chart.draw(data, options);
      }


