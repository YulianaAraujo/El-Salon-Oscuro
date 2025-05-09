// DOM Elements
const startBtn = document.getElementById('start-btn');
const storyTitle = document.getElementById('story-title');
const passageContainer = document.getElementById('passage-container');
const passageContent = document.getElementById('passage-content');
const passageChoices = document.getElementById('passage-choices');
const playerNameInput = document.getElementById('player-name');
const friendNameInput = document.getElementById('friend-name');
const ghostScream = document.getElementById('ghost-scream');
const stepSound = document.getElementById('step-sound');

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
if (passageName === "Noticia" || passageName === "Entrar al salón") {
    stepSound.currentTime = 0; // reinicia el sonido
    stepSound.volume = 0.6;    // ajusta volumen
    stepSound.play();
}
    // Special effects for certain passages
    // You can add passage-specific effects here if needed
    handleSpecialPassageEffects(passageName);
    
}

// Handle special effects for specific passages
function handleSpecialPassageEffects(passageName) {
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
                ghostScream.volume = 0.7;
                ghostScream.play();
            }, 5000);
            break;
        case "Intentar esquivar corriendo por el lado":
            // Reproducir el grito después de 4 segundos
            setTimeout(() => {
                ghostScream.volume = 0.7;
                ghostScream.play();
            }, 4000);
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