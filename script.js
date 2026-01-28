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


function unitaire() {
fetch('http://172.29.18.123/data.json', 
{ method: 'GET' })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Data fetched:', data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
}

unitaire();
test();