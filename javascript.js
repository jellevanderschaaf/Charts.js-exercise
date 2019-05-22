
let firstChart = document.getElementById('firstChart').getContext('2d');

let barChart = new Chart(firstChart, {
    type: 'pie',
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
            ],
            backgroundColor: ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink', 'grey']
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Largest cities in the Netherlands',
            fontSize: 15,
        },
        legend: {
            display: true,
        }
    }
});