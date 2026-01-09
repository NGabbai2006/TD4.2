function test() {
    fetch(
        "http://172.29.18.123/data.json",
        { method: "GET" }
    ).then(
        (response) => response.json()
    ).then(
        rep2 => {
            console.log(JSON.stringify(rep2));
            const info = document.getElementById('recup');

            info.innerHTML = rep2.nom + " " + rep2.prenom + " " + rep2.age;
        })
        .catch(error => console.log('Erreur:', error));

}

function testContenu1() {
    test();
    const info = document.getElementById('recup');
    setTimeout(() => {
    if (info.innerHTML === 'Je dors 19'){
        console.log('Test 1 réussi ');
    } else {
        console.log('Test 1 échoué');
    }
}, 1000);
}
function testAvantFonction() {
    const info = document.getElementById('recup');
    info.innerHTML = "";
    if (info.innerHTML === "") {
        console.log("Test 2 réussi ");
    } else {
        console.log("Test 2 échoué");
    }
}


function testContenu2() {
    test();
    const info = document.getElementById('recup');
    setTimeout(() => {
    if (info.innerHTML === "Martin Sophie 25") {
        console.log("Test 3 réussi ");
    } else {
        console.log("Test 3 échoué");
    }
}, 1000);
}


testAvantFonction();
testContenu1();
testContenu2();  