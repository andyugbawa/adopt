const repFacts = 'https://api.publicapis.org/entries'

async function traceData(){
    const response = await fetch(repFacts);
    const data  =  await response.json();
    console.log(data.entries)
    for(let i=0;i<1;i++ ){
        console.log('HELLO')
        let kind = document.createElement('h1');
        kind.classList.add('bang')
        kind.innerHTML = data.entries[i].API;
        document.body.appendChild(kind)
    }
    for(let i=0; i<30;i++){
        console.log('will')
        let guard = document.createElement('p')
        guard.classList.add('flow');
        guard.innerHTML = data.entries[i].Description;
        document.body.appendChild(guard)
    }

}

traceData();

const dogImage = 'https://dog.ceo/api/breeds/image/random'

async function dogData(){
    const response = await fetch(dogImage);
    const data = await response.json();
    console.log(data)
    for(let i= 0; i<2; i++){
        let dogflag = document.createElement('img');
        dogflag.classList.add('dash')
        dogflag.src = data.message;
        document.body.appendChild(dogflag)

    }
}
dogData();
