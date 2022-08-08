
h1 = document.getElementsByTagName("h1")[0]

function delay(seconds){
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}

async function title() {
    let final = "<Jordan Checkoff />";
    h1.innerText = "<";
    await delay(0.7);
    let space = false
    for (let i=1; i < final.length; i++) {
        await delay(0.1);
        if (final[i] == ' ') {
            space = true
            continue
        }
        if (space) {
            h1.innerText += ' ' + final[i];
            space = false;
        } else {
            h1.innerText += final[i];
        }
    }
}

title()