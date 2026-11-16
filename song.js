
function notifyBirthdayMusic() {
    if (window.parent && window.parent !== window) {
        window.parent.postMessage(
            "birthday-song-user-action",
            "*"
        );
    }
}

document.addEventListener("click", notifyBirthdayMusic, { once: true });

document.addEventListener("keydown", notifyBirthdayMusic, { once: true });
