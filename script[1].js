// Event Listener für das Laden der Seite
document.addEventListener("DOMContentLoaded", function() {
    // Standardmäßig das erste Formular anzeigen
    showSection('register-truck');
});

// Funktion zum Anzeigen eines Abschnitts und Ausblenden der anderen
function showSection(sectionId) {
    // Alle Abschnitte ausblenden
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Den ausgewählten Abschnitt anzeigen
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Den aktiven Link im Header markieren
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    var activeLink = document.querySelector('nav ul li a[href="#' + sectionId + '"]');
    activeLink.classList.add('active');
}

// Event Listener für die Navigation links oben
var navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Standardverhalten des Links verhindern
        var sectionId = this.getAttribute('href').substring(1); // ID des Abschnitts extrahieren
        showSection(sectionId); // Funktion zum Anzeigen des Abschnitts aufrufen
    });
});

// Funktion zum Hinzufügen von Daten zur Tabelle für die Stornierung
function addToCancelTable(truckNumber) {
    var table = document.getElementById('cancelTable');
    var row = table.insertRow(-1); // Neue Zeile am Ende der Tabelle einfügen
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = truckNumber;
    var cancelButton = document.createElement('button');
    cancelButton.textContent = 'Stornieren';
    cancelButton.onclick = function() {
        // Hier die Funktion zum Stornieren aufrufen
    };
    cell2.appendChild(cancelButton);
}

// Funktion zum Hinzufügen von Daten zur Tabelle für alle angem
