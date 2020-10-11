import {model} from "../model/model.js";
import {view} from "../view/view.js";

export class controller {
    constructor() {
        this.active = false;
        this.eersteBeurt=false;
        this.beurtNum = 0;
        this.model = new model();
        this.view = new view(this, this.model);
    }

    // for-loop begint beneden en gaat naar boven, zodat het lijkt op zwaartekracht simuleert. Als de vakje "leeg" is dan wordt het "vol"

    plaatsFiche = (kolom) =>
    {
        console.log("plaatsfiche denkt: " + this.active)
        if(this.active) {
            for(let rij=5;rij>=0;rij--)
            {
                if(this.model.vakjes[rij][kolom]==="leeg")
                {
                    if(this.beurtNum === 0) {
                        this.model.vakjes[rij][kolom]="blauw";
                    }
                    else {
                        this.model.vakjes[rij][kolom]="rood";
                    }
                    this.view.actueelBeurt();
                    this.view.beurtViewUpdate(this.beurtNum);

                    return;
                }
            }
        }
        else {
            alert("typ eerst de namen in!")
        }
    }

    // Koppelt de model aan de view
    toonModel = () =>
    {
        // Gaat door alle divs en maakt alles wit
        let teller=0;
        const vakjesHTML=document.querySelectorAll('.container > div');
        vakjesHTML.forEach(element=>{
            element.style.backgroundColor = "white";
        })
        // Gaat door alle divs en zoekt naar de divs die "vol" zijn. Als het vol is dan wordt het rood
        vakjesHTML.forEach(element => {
            let rij=Math.floor(teller/7);
            let kolom=teller%7;
            if(this.model.vakjes[rij][kolom]==="blauw"){
                element.style.backgroundColor = "blue";
            }
            else if (this.model.vakjes[rij][kolom] === "rood") {
                element.style.backgroundColor = "red";
            }
            teller++;
        })
    }

    checkWinnaar() {

    }
}