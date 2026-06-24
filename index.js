/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//state
const listWorkers = Array.from({ length: NUM_FREELANCERS}, getFreelancer);
const averageRate = getAverage();

function getFreelancer(){
        const Name = Math.floor(Math.random() * NAMES.length); 
        const Occ = Math.floor(Math.random() * OCCUPATIONS.length);
        const Rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;

        const Freelancer = {
            name: NAMES[Name],
            occupation: OCCUPATIONS[Occ],
            rate: Rate
    };

        return {name: NAMES[Name], occupation: OCCUPATIONS[Occ], rate: Rate};
}
//console.log(getFreelancer())


//for(let i = 0; i < NUM_FREELANCERS; i++){
    //listWorkers.push(getFreelancer())}

console.log(listWorkers)


function getAverage(){
    let total = 0;
    let average = 0;
    for(let i = 0; i < listWorkers.length; i++){
        total += listWorkers[i]["rate"];
        
    }
    average = (total / listWorkers.length)
    return average
}

console.log(getAverage(listWorkers));


function freelancerCard({name, occupation, rate}){
    const $card = document.createElement("tr")
    //$card.classList.add("worker")
    $card.innerHTML = `
     <td>${name}</td>
     <td>${occupation}</td>
     <td>${rate}</td>
      `

     return $card;
}


function freelancerCards(workerCard){
    const $cards = document.createElement("tbody");
    //$cards.classList.add("workers")

    const allWorkers = listWorkers.map(freelancerCard) 

    $cards.replaceChildren(...allWorkers)

    return $cards;
}

function AverageRate() {
    $AV = document.createElement("p");
    $AV.textContent = `The average rate is $${averageRate.toFixed(2)}.`;
    return $AV
}

function render(){
    const $app = document.querySelector("#app");
    $app.innerHTML = `
        <h1>Available Worker</h1>
        <article id="rate"></article>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Occupation</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody id="tableRows"></tbody>
        </table>
    `;
    $app.querySelector("#rate").replaceWith(AverageRate());
    $app.querySelector("#tableRows").replaceWith(freelancerCards(freelancerCard));
    }

    render();
