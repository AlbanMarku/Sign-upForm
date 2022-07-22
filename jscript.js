const form = document.querySelector("#form");
const errorArea = document.querySelector("#errorArea");

form.addEventListener("submit", (e) => {
    const pasVal = document.querySelector("#password").value;
    const confVal = document.querySelector("#confirmPassword").value;

    let messages =[];
    if (pasVal !== confVal) {
        messages.push("Passwords do not match.");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorArea.textContent = messages.join(", ");
        errorArea.classList.add("shakeMe");
        setTimeout(() => {
            errorArea.classList.remove("shakeMe");

        }, 1000);
    }   
});