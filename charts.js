const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        datasets: [{
            label: 'USA',
            data: [15, 30, 56, 62, 60, 80, 96],
            backgroundColor: [
                'rgb(81, 139, 178)'
            ],
            borderWidth: 1
        }, {
            label: 'UK',
            data: [17, 38, 42, 58, 65, 75, 78],
            backgroundColor: [
                'rgb(147, 204, 216)'
            ],
            borderWidth: 1
        }, {
            label: 'AU',
            data: [19, 33, 46, 48, 62, 69, 60],
            backgroundColor: [
                'rgb(146, 180, 247)'
            ],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Line chart

const lcx = document.getElementById('line-chart').getContext('2d');

new Chart(lcx, {
    type: 'line',
    data: {
        labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        datasets: [{
            label: 'Salse',
            data: [25, 42, 56, 62, 67, 80, 96],
            fill: true,
            backgroundColor: [
                'rgba(15, 83, 128, 0.2)'
            ],
            borderWidth: 1
        }, {
            label: 'Revenue',
            data: [15, 32, 42, 52, 57, 70, 80],
            fill: true,
            backgroundColor: [
                'rgba(54, 120, 224, 0.2)'
            ],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Calendar

// JS 
var months = [ 
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ]; 
  var dateRange = [ 
      new Date('1/1/2010'), 
      new Date('12/31/2030') 
    ], 
    curDate = new Date(), 
    titleAnnotation = undefined; 
    
  var chart = JSC.chart( 
    'chartDiv', 
    { 
      debug: true, 
      type: 'calendar month solid', 
      yAxis_visible: false, 
      legend_visible: false, 
      defaultTooltip: { enabled: false }, 
      xAxis_defaultTick_label_color: '#BDBDBD', 
      calendar: { 
        range: dateRange, 
        initial: curDate, 
        defaultEdgePoint: { 
          label_color: '#E0E0E0', 
          color: 'white'
        } 
      }, 
      defaultSeries: { 
        shape_innerPadding: 0.2, 
        pointSelection: 'single', 
        defaultPoint: { 
          outline_width: 0, 
          label_text: '%name', 
          focusGlow: false
        } 
      }, 
      events_pointSelectionChanged: function( 
        points 
      ) { 
        updateDateLabel( 
          points[0].options('attributes_date') 
        ); 
      }, 
      toolbar_items: { 
        backward: { 
          position: 'top left', 
          fill: 'none', 
          outline_visible: false, 
          margin: 5, 
          icon: { 
            name: 'linear/arrows/left', 
            fill: '#757575'
          }, 
          events_click: function() { 
            var d = new Date(curDate); 
            zoomTo(d.setMonth(d.getMonth() - 1)); 
          } 
        }, 
        forward: { 
          position: 'top right', 
          fill: 'none', 
          outline_visible: false, 
          margin: 5, 
          icon: { 
            name: 'linear/arrows/right', 
            fill: '#757575'
          }, 
          events_click: function() { 
            var d = new Date(curDate); 
            zoomTo(d.setMonth(d.getMonth() + 1)); 
          } 
        }, 
        month: { 
          type: 'select', 
          position: 'top', 
          margin_bottom: 8, 
          boxVisible: false, 
          icon_visible: false, 
          items: months.join(','), 
          label_align: 'right', 
          itemsBox_label_align: 'right', 
          value: JSC.formatDate(curDate, 'MMMM'), 
          events_change: function(val) { 
            var d = new Date(curDate); 
            zoomTo(d.setMonth(months.indexOf(val))); 
          } 
        }, 
        year: { 
          type: 'select', 
          position: 'top', 
          margin_bottom: 8, 
          boxVisible: false, 
          icon_visible: false, 
          items: makeYearsList(dateRange).join(','), 
          value: JSC.formatDate(curDate, 'yyyy'), 
          events_change: function(val) { 
            var d = new Date(curDate); 
            zoomTo(d.setFullYear(val)); 
          } 
        } 
      } 
    }, 
    function(c) { 
      // Select today. 
      c.series() 
        .points(curDate.getTime()) 
        .options({ selected: true }); 
    } 
  ); 
    
  function zoomTo(d) { 
    d = new Date(d); 
    if (d >= dateRange[0] && d <= dateRange[1]) { 
      chart 
        .uiItems('month') 
        .options({ 
          value: JSC.formatDate(d, 'MMMM') 
        }); 
      chart 
        .uiItems('year') 
        .options({ 
          value: JSC.formatDate(d, 'yyyy') 
        }); 
      chart.zoom(d); 
      curDate = d; 
    } 
  } 
    
  function updateDateLabel(date) { 
    document.getElementById( 
      'dateLabel'
    ).textContent = 
      'Selected Date: ' + JSC.formatDate(date, 'd'); 
  } 
    
  function makeYearsList(range) { 
    var years = []; 
    for ( 
      var i = new Date(range[0]).getFullYear(); 
      i <= new Date(range[1]).getFullYear(); 
      i++ 
    ) { 
      years.push(i); 
    } 
    return years; 
  } 