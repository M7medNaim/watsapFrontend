// send message sendIcon or voiceIcon
let messageInput = document.getElementById('inputMassege');
    let voiceIcon = document.getElementById('voiceIcon');
    let sendIcon = document.getElementById('sendIcon');

    messageInput.addEventListener('input', function() {
        if (messageInput.value.trim() !== '') {
            voiceIcon.style.display = 'none';
            sendIcon.style.display = 'block';
            sendIcon.style.position = 'relative';
        } else {
            voiceIcon.style.display = 'block';
            sendIcon.style.display = 'none';
        }
    });

//     let chat = document.querySelector('.chat');
//     let boxChat = document.querySelector('.boxChat');         
//     let chatResponsive = document.querySelector('.chatResponsive');         


// chat.addEventListener('click', function() {
//     chatResponsive.classList.remove('col-12');
    
//     boxChat.classList.add('col-12');


// });