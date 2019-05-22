
let firstChart = document.getElementById('firstChart').getContext('2d');

let barChart = new Chart(firstChart, {
    type: 'bar',
    data: {
        labels:['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven', 'Tilburg', 'Almere', 'Groningen' ],
        datasets: [{
            label: 'Population',
            data: [
                859.732,
                641.326,
                534.158,
                349.234,
                229.637,
                215.946,
                205.058,
                203.954
            ]
        }],

    },
});