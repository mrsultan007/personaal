function revealSurprise(buttonNumber) {
    const messageDiv = document.getElementById("surpriseMessage");
    messageDiv.classList.remove("hidden");

    let surpriseMessage;
    switch (buttonNumber) {
        case 1:
            surpriseMessage = "YAWR TUM TO PYARI HO🥺💝";
            break;
        case 2:
            surpriseMessage = "GIAN KI BEHEN JAISA MU HAI TUMHARA🙄";
            break;
        case 3:
            surpriseMessage = "IS BUTTON PE CLICK Q KIYA MERE SE PUCHA THA? AB KHOL LIA TO CHALO I LOVE YOU PARHNAY HE AYI HOGI BOL DETA HU😒 I HATE YOU CUTIE💝";
            break;
        default:
            surpriseMessage = "Surprise!";
    }
    
    messageDiv.innerText = surpriseMessage;
    messageDiv.style.display = "block";
}