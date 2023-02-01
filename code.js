const elements = document.querySelectorAll(".one");
const rezTwo = document.querySelector(".rezTwo");
const rezOne = document.querySelector(".rezOne");
const operators = document.querySelectorAll(".operator");
const number = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const ac = document.querySelector('.ac');
const izbrisi = document.querySelector('.delete');


let zadnjiOperator=0;
let rezultat;
let praviRacun = [''];
let brojac = 0;
praviRacun[1] = 0;
let screenChecker = 0;
let waiter = 0;

number.forEach((item) => {
    item.addEventListener('click', ()=> rez(item))
});

elements.forEach((item) => {
    item.addEventListener('click', () => writer(item));
});


operators.forEach((item) =>{
    item.addEventListener('click', ()=> operatori(item))
});

equal.addEventListener('click', (x) => check());

ac.addEventListener('click', () => allClear());

izbrisi.addEventListener('click', () => dell());


const check = (x) =>{
    kojiOperator();
    rezOne.textContent = praviRacun[1];
    ans = praviRacun[1].toString();
    praviRacun[1] = 0;
    screenChecker = 1;
};

const rez = (x) => praviRacun [0] += x.textContent;


let plusbrojac=0;
const writer = (x) => {
    if(screenChecker === 1){
        rezTwo.textContent = '';
        rezOne.textContent = '';
        screenChecker = 0;
    }
    
 
    if(x.textContent == "+" || x.textContent == '-' || x.textContent == 'x' || x.textContent == '/') plusbrojac = plusbrojac +1;
    else if(x.textContent > -1) plusbrojac = 0;
    if(plusbrojac > 1 ){
        rezTwo.textContent = rezTwo.textContent.slice(0,rezTwo.textContent.length-1) + x.textContent;

    }else{
    rezTwo.textContent += x.textContent;
    }    
}

const plus = (broj) => broj.reduce((a,b) => a + b,0);
    
const minus = (broj) => broj.reduce((a,b) => b-a ,0);

const puta = (broj) => broj.reduce((a,b) => a*b );
const pod = (broj) => broj.reduce((a,b) => b/a );

const operatori = (x) => {

    switch(x.textContent){

    case "+":
        kojiOperator();
        zadnjiOperator = 1;

        console.log("Pravi racun je: ",praviRacun)
        break;
    case "-":
        kojiOperator();
        waiter = 1;
        zadnjiOperator = 2;

        console.log("Pravi racun je: ",praviRacun)
        break;
    case "x":
        kojiOperator(x);
        zadnjiOperator = 3;
        
        console.log("Pravi racun je: ",praviRacun)
        break;
    case "/":
        kojiOperator();
        zadnjiOperator = 4;     

        console.log("Pravi racun je: ",praviRacun)
        break;
    };

};

const kojiOperator = (x) =>{
    if(waiter === 1 ){
        praviRacun[0] = praviRacun[0]*1;
        praviRacun[1] = minus(praviRacun);
        zadnjiOperator = 0;
        praviRacun[0] = "";
        waiter = 0;
    }
    else if(praviRacun[1] === 0){
        praviRacun[1] = praviRacun[0]*1; 
        praviRacun[0] = "";
        return;
    }
    else if (plusbrojac<2){
        praviRacun[0] = praviRacun[0]*1;
        praviRacun[1] =  (zadnjiOperator == 1)? plus(praviRacun): (zadnjiOperator == 2) ? minus(praviRacun): (zadnjiOperator == 3)? puta(praviRacun):(zadnjiOperator == 4)? pod(praviRacun): "jej" ;
        zadnjiOperator = 0;
        praviRacun[0] = "";
    }
}

const allClear = () =>{
    praviRacun[0] = "";
    praviRacun[1] = 0;
    zadnjiOperator = 0;
    brojac = 0;
    rezTwo.textContent = '';
    rezOne.textContent = '';
    plusbrojac = 0;
}

const dell = () =>{
    rezTwo.textContent = rezTwo.textContent.slice(0,rezTwo.textContent.length-1);
    praviRacun[0] = praviRacun[0].slice(0,praviRacun[0].length-1);
}

const anss = () =>{
    if(screenChecker === 1){
        rezTwo.textContent = '';
        rezOne.textContent = '';
        screenChecker = 0;
    }
    praviRacun[0] += ans;
    rezTwo.textContent += ans;
    
}
