let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    // let networks = {
    //     mtn: ["0703", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906"],
    //     glo: ["0705", "0805", "0807", "0811", "0815", "0905"],
    //     airtel: ["0701", "0708", "0802", "0808", "0812", "0902"],
    //     etisalat: ["0809", "0817", "0818", "0908", "0909"]
    // }

    // let allNetworks = Object.values(networks);
    let input = document.querySelector("input").value;
    let networkResult = document.querySelector("span");
    let result = document.querySelector("div.provider");



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
    } else if (input.length == 11 && !isNaN(input)) {

        //if block for MTN
        if (input.includes("0703") || input.includes("0706") || input.includes("0803") || input.includes("0806") || input.includes("0810") || input.includes("0813") || input.includes("0814") || input.includes("0816") || input.includes("0903") || input.includes("0906")) {
            result.textContent = "Your Network Provider is MTN";
            result.classList.add("provider");
            result.style.display = "flex";
        }

        //if block for glo
        if (input.includes("0705") || input.includes("0805") || input.includes("0807") || input.includes("0811") || input.includes("0815") || input.includes("0905")) {
            result.textContent = "Your Network Provider is GLO";
            result.classList.add("provider");
            result.style.display = "flex";
        }

        //if block for airtel
        if (input.includes("0701") || input.includes("0708") || input.includes("0802") || input.includes("0808") || input.includes("0812") || input.includes("0902")) {
            result.textContent = "Your Network Provider is AIRTEL";
            result.classList.add("provider");
            result.style.display = "flex";
        }

        //if block for etisalat
        if (input.includes("0809") || input.includes("0817") || input.includes("0818") || input.includes("0908") || input.includes("0909")) {
            result.textContent = "Your Network Provider is 9MOBILE";
            result.classList.add("provider");
            result.style.display = "flex";
        }

    }




})