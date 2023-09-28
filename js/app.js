/*
REQUERIMIENTOS 

- tipografía para sus nombres: *proba alguna cursiva como embassy BT *  
- tipografía para las letras de toda la invitación: javanese text  
- nombres completos ? O abreviados ? Denise y Gabriel
- fecha de la fiesta: 12.11.23 
- dirección del lugar: Lorenza  Zenavilla 443, Canning, Provincia de Buenos Aires
- Dress code: elegante 
- 6 fotos suyas

*/ 

// VARIABLES
//===
const DATE_TARGET = new Date('11/12/2023 12:30 PM');
// DOM for render
const SPAN_DAYS = document.querySelector('#c-dias');
const SPAN_HOURS = document.querySelector('#c-horas');
const SPAN_MINUTES = document.querySelector('#c-minutos');
const SPAN_SECONDS = document.querySelector('#c-segundos');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

//===
// FUNCTIONS
//===

/**
 * Method that updates the countdown and the sample
 */
function updateCountdown() {
    // Calcs
    const NOW = new Date();
    const DURATION = DATE_TARGET - NOW;
    
    // Check if countdown is completed
    if (DURATION <= 0) {
        SPAN_DAYS.textContent = '00';
        SPAN_HOURS.textContent = '00';
        SPAN_MINUTES.textContent = '00';
        SPAN_SECONDS.textContent = '00';
        return; // Exit the function early
    }

    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS.toString().padStart(2, '0');
    SPAN_HOURS.textContent = REMAINING_HOURS.toString().padStart(2, '0');
    SPAN_MINUTES.textContent = REMAINING_MINUTES.toString().padStart(2, '0');
    SPAN_SECONDS.textContent = REMAINING_SECONDS.toString().padStart(2, '0');
}

//===
// INIT
//===
updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);





function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "flex";
    setTimeout(function() {
        modal.classList.add('active');
        document.addEventListener('click', outsideClick); // Agregar evento de clic en todo el documento
    }, 10);
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.classList.remove('active');
    setTimeout(function() {
        modal.style.display = "none";
        document.removeEventListener('click', outsideClick); // Remover evento de clic del documento al cerrar el modal
    }, 300);
}

// Función para verificar si se hizo clic fuera del contenido del modal
function outsideClick(event) {
    var modal = document.getElementById('myModal');
    if (!event.target.closest('.modal-content')) {
        closeModal();
    }
}


const musicPlayer = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause-btn');
musicPlayer.volume = 0.5;

playPauseBtn.addEventListener('click', () => {
  if (musicPlayer.paused) {
    musicPlayer.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    console.log("play")
  } else {
    musicPlayer.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    console.log("pausado")
  }
});




function closeModalBienvenida() {
  const modalContainer = document.getElementById('modalBienvenidaContainer');
  modalContainer.classList.remove('show');
  document.body.style.overflow = 'auto';
  document.body.style.position = 'static';
  setTimeout(()=>{modalContainer.style.display = 'none';},1000)
  musicPlayer.muted = false;
  musicPlayer.play();
}


  