import Time from "./Classes/Time.js";
import Jogo from "./Classes/Jogo.js";
import Estadio from "./Classes/Estadio.js";
import Arbitro from "./Classes/Arbitro.js";
import Participacao from "./Classes/Participacao.js";
import Tecnico from "./Classes/Tecnico.js";

let tec1 = new Tecnico("Adilso Batista", 1, "22 anos")
let tec2 = new Tecnico("Odair Hellmann", 2, "8 anos")
let tec3 = new Tecnico("Carlos vitor", 2, "23 anos")
let tec4 = new Tecnico("Vagner Mancini", 2, "19 anos")


let t1 = new Time(1, "Botafogo-SP", "BOT", tec1);
let t2 = new Time(2, "Santos", "SAN", tec2);
let t3 = new Time(3, "Nova iguaçu-RJ", "NIG", tec3);
let t4 = new Time(4, "América-MG", "AME", tec3);
console.log(t1, t2, t3, t4);

//Os árbitros foram escolhidos de forma aleatória, pois não estão definidos.

let arb1 = new Arbitro(1, "Wilton Pereira", "41 anos", "10 anos FIFA");
let arb2 = new Arbitro(2, "Raphael Claus", "43 anos", "8 anos FIFA");


let j1 = new Jogo(1, t1, t2, arb1);
let j2 = new Jogo(2, t3, t4, arb2);
console.log(j1, j2);
let e1 = new Estadio(j1, "Maracanã", "rio de janeiro", 78.838
);
console.log(e1);










