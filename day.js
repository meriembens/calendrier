const urlParams = new URLSearchParams(window.location.search);
const day = parseInt(urlParams.get('day')); // urlparams tmed les données en string nhwlhom int
const monthName = urlParams.get('month');  
const year = parseInt(urlParams.get('year')); 

const monthsMap = {
    Janvier: 0, Février: 1, Mars: 2, Avril: 3, Mai: 4, Juin: 5,
    Juillet: 6, Août: 7, Septembre: 8, Octobre: 9, Novembre: 10, Décembre: 11
};

const monthIndex = monthsMap[monthName]; 

// la date li 3bzna eliha
const date = new Date(year, monthIndex, day);


const dayNames = [
    'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
];

// taffichili les infos tae la date
document.getElementById('day').textContent = day; 
document.getElementById('month').textContent = `${monthName}`; 
document.getElementById('year').textContent = year; 
document.getElementById('weekday').textContent = dayNames[date.getDay()]; 

// fonction tgenereli swaya3
function populateHours() {
    const hoursGrid = document.getElementById('hours');
    for (let hour = 8; hour < 15; hour++) { // mel 08:00 lel 14:00
        const hourLine = document.createElement('div'); //pour chaque heure ndiro div
        hourLine.classList.add('hour-line'); //chaque div nsmpha hourline
        
        let startHour;
        if (hour < 10) {
            startHour = '0' + hour; // nzidou 0 lel 8 w 9
        } else {
            startHour = hour;
        }
        
        // dirlek lwe9t w line
        hourLine.innerHTML = `
            <div class="hour">${startHour}:00</div>
            <div class="line"></div>
            <div class="rdvs"></div>
        `;
        //t7otlek lwe9t w line mea koul sa3a
        hoursGrid.appendChild(hourLine);
    }
}

// tgeneri swaya3
populateHours();
