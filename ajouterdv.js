// Initialisation de Flatpickr pour le calendrier
flatpickr("#appointmentDate", {
    enableTime: false, // Seule la sélection de la date est autorisée
    dateFormat: "Y-m-d", // Format de date : Année-Mois-Jour
    minDate: "today", // Désactiver les dates passées
    defaultDate: "today", // Définit la date par défaut comme la date d'aujourd'hui
    locale: {
        firstDayOfWeek: 0 // Commence la semaine le dimanche
    },
    onReady: () => {
        generateTimeSlots(); // Génère les créneaux dès que Flatpickr est prêt
    }
});

// Fonction pour générer les créneaux horaires
function generateTimeSlots() {
    const timeSlots = document.querySelector(".slots");
    timeSlots.innerHTML = ""; // Effacer les créneaux précédents

    // Créneaux horaires disponibles
    const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"];

    // Création des boutons pour chaque créneau
    times.forEach((time) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = time;

        // Ajouter un événement de clic pour mettre en surbrillance le créneau sélectionné
        button.addEventListener("click", () => {
            document.querySelectorAll(".slots button").forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        });

        timeSlots.appendChild(button);
    });
}

// Ajout de l'événement au changement de date
document.getElementById("appointmentDate").addEventListener("change", generateTimeSlots);

// Gestion de la soumission du formulaire
document.getElementById("rdv").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêcher la soumission par défaut

    const date = document.getElementById("appointmentDate").value;
    const selectedTime = document.querySelector(".slots button.selected");

    if (!date || !selectedTime) {
        alert("Veuillez sélectionner une date et un créneau horaire.");
        return;
    }

    alert(`Rendez-vous confirmé !\nDate : ${date}\nHeure : ${selectedTime.textContent}`);
});
