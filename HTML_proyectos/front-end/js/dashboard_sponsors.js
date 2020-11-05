//google.charts.load('current', {packages: ['corechart']});
google.charts.load('current', {packages: ['geochart'], 'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'});


 /*-------grafica SKU ranking----*/


function initChart() {
   var data = google.visualization.arrayToDataTable([
    ['SKU', 'Oppoprtunities', { role: 'annotation' }],
    ['SKU 1',  8130661, '$8,130,661/4,567 Units' ],
    ['SKU 2',  8098812, '$8,098,812/23,800 Units' ],
    ['SKU 3',  7625900, '$7,625,900/18,900 Units'  ],
    ['SKU 4',  7536122, '$7,536,122/3,678 Units'  ],
    ['SKU 5',  4900713, '$4,900,713/56,891 Units'  ],
    ['SKU 6',  4541221, '$4,541,221/7,892 Units'   ],
    ['SKU 7',  3423771, '$3,423,771/3,892 Units'   ],
    ['SKU 8',  2936464, '$2,936,464/26,892 Units'   ],
    ['SKU 9',  2836645, '$2,836,645/45,678 Units'  ],
    ['SKU 10',  2581361, '$2,581,361/90,342 Units'  ],
  ]);
    

    
    
    var options = {
      width: '100%',
        height: '100%',
       chartArea:{left: "15%", 
            top: "0%",
            height: "90%",
            width: "65%"},
        title : '',
        
        isStacked: false,
        fontName: 'MetricWeb_regular',
        fontSize: 13,
        backgroundColor: 'transparent',
        colors: ['#f68c70'],
        textStyle:{color: '#adabab'},
        legend: { position: 'none' },
        vAxis: { title: "", textStyle : {
                fontName: 'MetricWeb_regular', fontSize: 13, color:'#adabab'
    
}
               },
        hAxis : { title: "", format: 'short'  , gridlines: {color: '#818181'},
            textStyle : {
                fontName: 'HPESimpleWeb-Regular', fontSize: 12, color:'adabab'
            }, //viewWindow: {max:100, min:0}, ticks: [0,20,40,60,80,100], 
        },
        bar:{groupWidth:"50%"},
        annotations: {
    textStyle: {
      /*fontSize: 18,
      italic: true,*/
      color: '#ffffff',
      /*auraColor: '#d799ae',*/
    
    }
  }

  };
 
 drawChartO(data, options);
}

function drawChartO(data, options) {
    var chart = new google.visualization.BarChart(document.getElementById('chart_sku_rank'));
    chart.draw(data, options);
}





//function initChart() {
//   var data = google.visualization.arrayToDataTable([
//    ['SKU', 'Oppoprtunities'],
//    ['SKU 1',  8.21 ],
//    ['SKU 2',  8.00  ],
//    ['SKU 3',  2.8     ],
//    ['SKU 4',  3.5     ],
//    ['SKU 5',  3.0  ],
//    ['SKU 6',  2.7   ],
//    ['SKU 7',  2.5   ],
//    ['SKU 8',  2.0   ],
//    ['SKU 9',  1.2  ],
//    ['SKU 10',  0.8  ],
//            
      
//  ]);
//    
//     var groupData = google.visualization.data.group(
//    data,
//    [{column: 0, modifier: function () {return 'total'}, type:'string'}],
//    [{column: 1, aggregation: google.visualization.data.sum, type: 'number'}]
//  );
//
//     var formatPercent = new google.visualization.NumberFormat({
//    pattern: '#,##0.0%'
//  });
//    
//    var formatShort = new google.visualization.NumberFormat({
//    pattern: 'short'
//  });
//    
//    var view = new google.visualization.DataView(data);
//      view.setColumns([0, 1,
//                       { calc: function (dt, row) {
//      var amount =  formatShort.formatValue(dt.getValue(row, 1));
//      var percent = formatPercent.formatValue(dt.getValue(row, 1) / groupData.getValue(0, 1));
//      return amount + '%' /*+ ' (' + percent + ')'*/;
//    },
//    type: 'string',
//    role: 'annotation',
//    
//  }]);
//    
//    
//    var options = {
//      width: '100%',
//        height: '100%',
//       chartArea:{left: "15%", 
//            top: "0%",
//            height: "100%",
//            width: "70%"},
//        title : '',
//        
//        isStacked: false,
//        fontName: 'MetricWeb_regular',
//        fontSize: 13,
//        backgroundColor: 'transparent',
//        colors: ['#f68c70'],
//        textStyle:{color: '#adabab'},
//        legend: { position: 'none' },
//        vAxis: { title: "", textStyle : {
//                fontName: 'MetricWeb_regular', fontSize: 13, color:'#adabab'
//    
//}
//               },
//        hAxis : { title: "", format: '#\'%\''  , gridlines: {color: '#818181'},
//            textStyle : {
//                fontName: 'HPESimpleWeb-Regular', fontSize: 12, color:'adabab'
//            }, //viewWindow: {max:100, min:0}, ticks: [0,20,40,60,80,100], 
//        },
//        bar:{groupWidth:"40%"},
//        annotations: {
//    textStyle: {
//      /*fontSize: 18,
//      italic: true,*/
//      color: '#adabab',
//      /*auraColor: '#d799ae',*/
//    
//    }
//  }
//
//  };
// drawChartO(view, options)
//}
//
//function drawChartO(view, options) {
//    var chart = new google.visualization.BarChart(document.getElementById('chart_sku_rank'));
//    chart.draw(view, options);
//}
//
       
       
       
///*-------fin  grafica SKU ranking----*/

function drawChart_ogd() {
       var data = google.visualization.arrayToDataTable([
   ['SKUs', 'SKU Number'],
    ['1 SKU',  6485 ],
   ['2 SKU',  5580 ],
   ['3 SKU',  3800 ],
   ['4 SKU',  2659 ],
    ['5 SKU',  1500 ]
    
  ]);
    
    
    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" }]);

  var options = {
      with:"100%",
       chartArea:{left:"10%",top:"5%",width:'85%',height:'80%'},
        title : '',
        vAxis: {title: "", gridlines: {color: '#818181'}, textStyle : { color:'#adabab'}, format: 'decimal', viewWindow: {max:8000, min:0}, ticks: [0,1000,2000,3000,4000,5000,6000,7000,8000]
               },
        //isStacked: "relative",
        fontName: 'HPESimpleWeb-Regular',
      backgroundColor: 'transparent',
        fontSize: 12,
        colors: ['#f68c70'],
        legend: { position: 'none' },
        hAxis : { title: "", 
            textStyle : {
                fontName: 'MetricWeb_regular', fontSize: 15, color:'#adabab'
            }
        },
        bar:{groupWidth:"50%"},
        annotations: { alwaysOutside: true,
                        textStyle: {color: '#adabab' , /*auraColor: '#d799ae'*/ },
                    }

  };
    

    
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_ogd'));
        chart.draw(view, options);
      }



/////////////////////////////////////////////////////////////////

  function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
          ['Country',   'Denity'],
					/*['BM', ''], 
					['CA', ''], 
                    ['GL', ''], 
					['PM', 1000], 
					['US', 1000], 
					['AG', 1000], 
					['AI', 1000], 
					['AN', 1000], 
					['AW', 1000], 
					['BB', 1000], 
					['BL', 1000], 
					['BS', 1000], 
					['CU', 1000], 
					['DM', 1000], 
					['DO', 1000], 
					['GD', 1000],
					['GP', 1000], 
					['HT', 1000], 
					['JM', 1000], 
					['KN', 1000], 
					['KY', 1000], 
					['LC', 1000], 
					['MF', 1000], 
					['MQ', 1000], 
					['MS', 1000], 
					['PR', 1000], 
					['TC', 1000], 
					['TT', 1000], 
					['VC', 1000], 
					['VG', 1000], 
					['VI', 1000], 
					['BZ', 1000], 
					['CR', 1000], 
					['GT', 1000], 
					['HN', 1000], 
					['MX', 1000], 
					['NI', 1000], 
					['PA', 1000], 
					['SV', 1000], */
					['AR', 6800], 
					['BO', 1000], 
					//['BR', 1000], 
					['CL', 1000], 
					['CO', 1056], 
					['EC', 2000], 
					['FK', 1000], 
					['GF', 3000], 
					['GY', 1000], 
					['PE', 1000], 
					//['PY', 1000], 
					['SR', 1500], 
					['UY', 1000], 
					['VE', 1000], 
					
         
        ]);
         
      

        var options = { with:"100%", height:"100px", keepAspectRatio: true ,
        region: '005', 
          colorAxis: {colors: ['#ffffff', '#f68c70']},  resolution: 'countries',
          backgroundColor: 'transparent',
          datalessRegionColor: 'transparent', 
          defaultColor: '#444444', legend:{ 
            textStyle : {
                fontName: 'MetricWeb_regular', fontSize: 15, color:'#adabab', auraColor: 'transparent'
            }
        },   };
    
   

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }



///////////////////////////////////////////////////////////////



function drawChart_op_m() {
        var data = google.visualization.arrayToDataTable([
            ['Month', 'Redeemed'],
            ['Jan',  0],
            ['Feb',  1800],
            ['Mar',  8300],
            ['Apr',  13900],
            ['May',  12100],
            ['Jun',  9800],
            ['Jul',  6100],
            ['Aug',  4200],
            ['Sep',  3000],
            ['Oct',  2100],
            ['Nov',  500],
            ['Dic',  900]  
        ]);

        var options = {
           with:"100%",
       chartArea:{left:"10%",top:"3%",width:'85%',height:'80%'},
        title : '',
        vAxis: {title: "", gridlines: {color: '#818181'}, textStyle : {
                fontName: 'HPESimpleWeb-Regular', fontSize: 13, color:'adabab'
            }
               },
        //isStacked: true,
        backgroundColor: 'transparent',    
        fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
        textStyle:{color: '#adabab'},    
        colors: ['#f68c70', '#425563'],
        legend: { position: 'none' },
        hAxis : { title: "", gridlines: {color: '#818181'},
            textStyle : {
                fontName: 'MetricWeb_regular', fontSize: 15, color:'adabab'
            }
        },
            
         
            
            
            
            
         series: {
         0: {areaOpacity: 0.5},
       
        
        },    
            
      
            
    };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_op_m'));
        chart.draw(data, options);
      }














/////////////////////////////////////////////////////////////////

$(window).resize(function(){
    
  initChart();
   drawChart_ogd();
   drawRegionsMap();    
  drawChart_op_m();
});










