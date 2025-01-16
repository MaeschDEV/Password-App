function generatePassword(event) {
    let password = "";
    
    const length = document.getElementById('length');
    const smallLetters = document.getElementById('smallLetters');
    const largeLetters = document.getElementById('largeLetters');
    const numbers = document.getElementById('numbers');
    const specialCharacters = document.getElementById('specialCharacters');
    
    event.preventDefault();
    
    let characters = [];
    
    let smallLettersString = "abcdefghijklmnopqrstuvwxyz";
    let smallLettersChar = smallLettersString.split('');
    let largeLettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let largeLettersChar = largeLettersString.split('');
    let numbersString = "0123456789";
    let numbersChar = numbersString.split('');
    let specialCharactersString = "!#$%&'()*+,-./:;=>?@[]^_`{|}~"
    let specialCharactersChar = specialCharactersString.split('');
    
    if (smallLetters.checked) {
        characters.push(...smallLettersChar);
    }
    if (largeLetters.checked) {
        characters.push(...largeLettersChar);
    }
    if (numbers.checked) {
        characters.push(...numbersChar);
    }
    if (specialCharacters.checked) {
        characters.push(...specialCharactersChar);
    }    
    for (let i = 0; i < length.value; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }

    if (!smallLetters.checked && !largeLetters.checked && !numbers.checked && !specialCharacters.checked) {
        password = "Wählen Sie eine Option!";
    }
    if (length.value <= 0) {
        password = "Länge darf nicht 0 sein!"
    }
    
    console.log(password);
    
    document.getElementById('PasswordDisplay').innerHTML = password;
}

function copyPassword(event) {
    event.preventDefault();
    
    if (document.getElementById('PasswordDisplay').innerHTML === "Wählen Sie eine Option!" || document.getElementById('PasswordDisplay').innerHTML === "Länge darf nicht 0 sein!") {
        
    }
    else {
        navigator.clipboard.writeText(document.getElementById('PasswordDisplay').innerHTML).then(() => {
            alert('Kopiert!');
        }).catch(err => {
            console.error("Fehler beim kopieren", err);
        });
    }
}