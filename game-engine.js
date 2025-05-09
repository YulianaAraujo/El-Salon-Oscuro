// DOM Elements
const startBtn = document.getElementById('start-btn');
const storyTitle = document.getElementById('story-title');
const passageContainer = document.getElementById('passage-container');
const passageContent = document.getElementById('passage-content');
const passageChoices = document.getElementById('passage-choices');
const playerNameInput = document.getElementById('player-name');
const friendNameInput = document.getElementById('friend-name');
const ghostScream = document.getElementById('ghost-scream');
const ghostScream2 = document.getElementById('ghost-scream2');
const ghostScream3 = document.getElementById('ghost-scream3');
const stepSound = document.getElementById('step-sound');
const criyingsound = document.getElementById('criying-sound');
const runsound = document.getElementById('run-sound');
const moansound = document.getElementById('moan-sound');
const heartsound = document.getElementById('heart-sound');
const breatsound = document.getElementById('breat-sound');
const voicesound = document.getElementById('voice-sound');
const callsound = document.getElementById('call-sound');
// Game state
let currentPassage = null;
let gameHistory = [];
let playerName = '';
let friendName = '';

// Sound effects (optional - can be implemented later)
const soundEffects = {
    // Add sound effects here if you want to implement them
    // Example: 
    // buttonClick: new Audio('sounds/button-click.mp3'),
    // scream: new Audio('sounds/scream.mp3'),
};

// Event listeners
startBtn.addEventListener('click', startGame);

// Validate input fields and enable/disable start button
playerNameInput.addEventListener('input', validateInputs);
friendNameInput.addEventListener('input', validateInputs);

// Validate inputs and enable/disable start button
function validateInputs() {
    if (playerNameInput.value.trim() !== '' && friendNameInput.value.trim() !== '') {
        startBtn.removeAttribute('disabled');
    } else {
        startBtn.setAttribute('disabled', true);
    }
}

// Start the game
function startGame() {
    // Get player and friend names
    playerName = playerNameInput.value.trim();
    friendName = friendNameInput.value.trim();
    
    // Hide title screen, show game
    storyTitle.classList.add('hidden');
    passageContainer.classList.remove('hidden');
    
    // Play background music (optional)
    // const bgMusic = new Audio('sounds/horror-ambience.mp3');
    // bgMusic.loop = true;
    // bgMusic.volume = 0.3;
    // bgMusic.play();
    
    // Load the first passage
    loadPassage(storyData.startPassage);
}

// Load a passage by its name
function loadPassage(passageName) {
    // Save current passage to history if not null
    if (currentPassage) {
        gameHistory.push(currentPassage);
    }
    
    // Get the new passage data
    const passage = storyData.passages[passageName];
    currentPassage = passageName;
    
    // Clear current content
    passageContent.innerHTML = '';
    passageChoices.innerHTML = '';
    
    // Add fade transition
    passageContainer.classList.add('fade-transition');
    
    // Add text content
    if (passage.text) {
        const textDiv = document.createElement('div');
        let modifiedText = passage.text;
        
        // Replace character names with player-provided names
        if (playerName && friendName) {
            modifiedText = replaceCharacterNames(modifiedText);
        }
        
        textDiv.innerHTML = modifiedText;
        passageContent.appendChild(textDiv);
    }
    
    // Add image if present
    if (passage.image) {
        const img = document.createElement('img');
    img.src = passage.image;
    img.alt = passage.imageAlt || '';
    img.classList.add('zoom-toggle');
    img.addEventListener('click', () => {
        img.classList.toggle('zoomed');
    });
    passageContent.appendChild(img);
    }
    
    // Add additional text content if present
    if (passage.text2) {
        const text2Div = document.createElement('div');
        let modifiedText2 = passage.text2;
        
        // Replace character names with player-provided names
        if (playerName && friendName) {
            modifiedText2 = replaceCharacterNames(modifiedText2);
        }
        
        text2Div.innerHTML = modifiedText2;
        passageContent.appendChild(text2Div);
    }
    
    // Add second image if present
    if (passage.image2) {
        const img2 = document.createElement('img');
        img2.src = passage.image2;
        img2.alt = passage.image2Alt || '';
        passageContent.appendChild(img2);
    }
    
    // Add third text content if present
    if (passage.text3) {
        const text3Div = document.createElement('div');
        let modifiedText3 = passage.text3;
        
        // Replace character names with player-provided names
        if (playerName && friendName) {
            modifiedText3 = replaceCharacterNames(modifiedText3);
        }
        
        text3Div.innerHTML = modifiedText3;
        passageContent.appendChild(text3Div);
    }
    
    // Add choices
    if (passage.choices && passage.choices.length > 0) {
        passage.choices.forEach(choice => {
            const choiceBtn = document.createElement('button');
            choiceBtn.classList.add('choice-btn');
            
            // Replace character names in choice text
            let choiceText = choice.text;
            if (playerName && friendName) {
                choiceText = replaceCharacterNames(choiceText);
            }
            
            choiceBtn.innerHTML = choiceText;
            choiceBtn.addEventListener('click', () => {
                // Play click sound (optional)
                // soundEffects.buttonClick.play();
                
                // Remove transition class
                passageContainer.classList.remove('fade-transition');
                

                // Short delay for effect
                setTimeout(() => {
                    loadPassage(choice.passage);
                }, 200);
            });
            passageChoices.appendChild(choiceBtn);
        });
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    // Reproducir pasos si el pasaje es de caminar


    // Special effects for certain passages
    // You can add passage-specific effects here if needed
    handleSpecialPassageEffects(passageName);
    
}
document.body.style.backgroundImage = ""; // limpia cualquier fondo
// Handle special effects for specific passages
function handleSpecialPassageEffects(passageName) {
    document.body.style.backgroundImage = "";runsound.pause();
runsound.currentTime = 0;
stepSound.pause();
stepSound.currentTime = 0;
criyingsound.pause();
criyingsound.currentTime = 0;
runsound.pause();
runsound.currentTime = 0;
moansound.pause();
moansound.currentTime = 0;
heartsound.pause();
heartsound.currentTime = 0;
voicesound.pause();
voicesound.currentTime = 0;
breatsound.pause();
breatsound.currentTime = 0;
voicesound.pause();
voicesound.currentTime = 0;

    // Example:
    switch(passageName) {
        
        case "Intentar hablar con la figura":
            // Reproducir el grito después de 5 segundos
            setTimeout(() => {
                ghostScream.volume = 0.7; // Ajustar volumen (valor entre 0 y 1)
                ghostScream.play();
            }, 1000); // 1 segundos de retraso
            break;
        case "Correr hacia la puerta":
            // Add screen shake effect
            document.body.classList.add('shake');
            setTimeout(() => {
                document.body.classList.remove('shake');
            }, 2000);
            
            // También reproducir el grito después de 5 segundos
            setTimeout(() => {
                runsound.volume = 0.7;
                run.play();
            }, 2000);
            break;
            case "Salir inmediatamente del salón":
            // Add screen shake effect
            document.body.classList.add('shake');
            setTimeout(() => {
                document.body.classList.remove('shake');
            }, 2000);
        case "Intentar esquivar corriendo por el lado":
            // Reproducir el grito después de 4 segundos
            setTimeout(() => {
                ghostScream3.volume = 0.7;
                ghostScream3.play();
            }, 3000);
            break;
             case "Investigar el origen del llanto":
            // Reproducir el grito después de 4 segundos
            setTimeout(() => {
                moansound.volume = 0.7;
                moansound.play();
            }, 3000);
            break;
        case "Buscar a un profesor o guardia":
            // Reproducir el grito después de 3 segundos
            setTimeout(() => {
                ghostScream.volume = 0.7;
                ghostScream.play();
            }, 3000);
            break;
        // Add more special cases as needed
        case "periódico":
    document.body.style.backgroundImage = "url('imagenes/Fondo.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    break;
    case "Continuar con la historia":
    // Inicia la llamada
    callsound.currentTime = 0;
    callsound.volume = 0.6;
    callsound.play();

    // Cortar llamada a los 1.5 segundos
    setTimeout(() => {
        callsound.pause();
        callsound.currentTime = 0;
    }, 1500);

    // Reproducir la voz a los 2.5 segundos
    setTimeout(() => {
        voicesound.currentTime = 0;
        voicesound.volume = 0.6;
        voicesound.play();
    }, 2500);
    break;
    case "Noticia": // Cambia "Noticia" por el pasaje que tú quieras
    stepSound.currentTime = 0;
    stepSound.volume = 0.6;
    stepSound.play();
    break;
    case "Entrar al salón": // Cambia "Noticia" por el pasaje que tú quieras
    criyingsound.currentTime = 0; 
    criyingsound.volume = 0.6;
    criyingsound.play();
    break;
    case "Ignorar el marcador": // Cambia "Noticia" por el pasaje que tú quieras
    runsound.currentTime = 0; 
    runsound.volume = 0.6;
    runsound.play();
    break;
    case "Salir inmediatamente del salón": // Cambia "Noticia" por el pasaje que tú quieras
    runsound.currentTime = 0; 
    runsound.volume = 0.6;
    runsound.play();
    break;
    case "Entrar al salón":
    setTimeout(() => {
        const lightFlash = document.getElementById('light-flash');
        lightFlash.style.animation = "flashLight 1s ease";
        lightFlash.classList.remove('hidden');

        // Limpia la animación después de que se reproduzca
        setTimeout(() => {
            lightFlash.style.animation = "none";
            lightFlash.classList.add('hidden');
        }, 1000);
    }, 1000); // Espera de 1 segundo antes de iluminar
    break;
    case "Correr hacia la puerta": // Cambia "Noticia" por el pasaje que tú quieras
    breatsound.currentTime = 0; 
    breatsound.volume = 0.6;
    breatsound.play();
    }
}

// Add keyboard navigation (optional)
document.addEventListener('keydown', (e) => {
    // Number keys 1-9 can select choices
    if (e.key >= '1' && e.key <= '9') {
        const choiceIndex = parseInt(e.key) - 1;
        const choices = passageChoices.querySelectorAll('.choice-btn');
        
        if (choiceIndex < choices.length) {
            choices[choiceIndex].click();
        }
    }
});

// Function to replace character names in the text
function replaceCharacterNames(text) {
    // Replace all instances of "Gabriel" with the player's name
    let modifiedText = text.replace(/Gabriel/g, playerName)
                           .replace(/GABRIEL/g, playerName.toUpperCase())
                           .replace(/Jugador/g, playerName);
    
    // Replace all instances of "Edward" with the friend's name
    modifiedText = modifiedText.replace(/Edward/g, friendName)
                              .replace(/EDWARD/g, friendName.toUpperCase());
    
    return modifiedText;
}