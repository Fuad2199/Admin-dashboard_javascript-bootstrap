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