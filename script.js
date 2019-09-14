let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let networks = {
        mtn: ["0703", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906"],
        glo: ["0705", "0805", "0807", "0811", "0815", "0905"],
        airtel: ["0701", "0708", "0802", "0808", "0812", "0902"],
        etisalat: ["0809", "0817", "0818", "0908", "0909"]
    }

    let allNetworks = Object.values(networks);
    let input = document.querySelector("input").value;
    let networkResult = document.querySelector("span");
    let result = document.querySelector("div.provider");


    allNetworks.forEach(network => {
        if (input == "" || isNaN(input)) {
            result.textContent = "Please input a valid phone number";
            result.classList.add("error")
            result.style.display = "flex";
        } else if (input.length > 11) {
            result.textContent = "Number is too long, and must not include '+234'";
            result.classList.add("error")
            result.style.display = "flex";
        } else if (input.length < 11) {
            result.textContent = "Number is too short";
            result.classList.add("error")
            result.style.display = "flex";
        } else if (input.includes(network)) {
            networkResult.textContent = " MTN"
            result.style.display = "flex";
        }

        console.log(network)
    })

})