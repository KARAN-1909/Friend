window.onload = function() {
    var playbackPosition = sessionStorage.getItem('playbackPosition');
    var audio = document.getElementById('backgroundMusic');

    if (playbackPosition) {
        audio.currentTime = parseFloat(playbackPosition);
    }

    audio.play().catch((error) => {
        console.error('Error playing audio:', error);
    });

    audio.addEventListener('timeupdate', function() {
        sessionStorage.setItem('playbackPosition', audio.currentTime.toString());
    });

    // Add butterfly animations
    var butterfly1 = document.createElement('div');
    butterfly1.className = 'butterfly butterfly1';
    document.body.appendChild(butterfly1);

    var butterfly2 = document.createElement('div');
    butterfly2.className = 'butterfly butterfly2';
    document.body.appendChild(butterfly2);

    var butterfly3 = document.createElement('div');
    butterfly3.className = 'butterfly butterfly3';
    document.body.appendChild(butterfly3);

    var butterfly4 = document.createElement('div');
    butterfly4.className = 'butterfly butterfly4';
    document.body.appendChild(butterfly4);

    var butterfly5 = document.createElement('div');
    butterfly5.className = 'butterfly butterfly5';
    document.body.appendChild(butterfly5);

    var butterfly6 = document.createElement('div');
    butterfly6.className = 'butterfly butterfly6';
    document.body.appendChild(butterfly6);

    // Handle click on welcome message in index.html
    var welcomeContainer = document.getElementById('welcomeContainer');
    if (welcomeContainer) {
        welcomeContainer.addEventListener('click', function() {
            window.location.href = 'wishes.html';
        });
    }

    // Handle click on next button in wishes.html
    var nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            window.location.href = 'more_wishes.html';
        });
    }
};