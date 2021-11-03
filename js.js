let btnNext = document.querySelectorAll('body button#next')
let btnBefore = document.querySelectorAll('body button#before')

var sonido = new Audio();
sonido.src="";

let transicionAuto = false
let click = false


let transitionNext = (name, nextName) => {

    // btnNext = document.querySelectorAll('body button#next')
    // btnBefore = document.querySelectorAll('body button#before')
    // console.log(btnNext[8])
    
    // desplazamiento inicial
    switch (name) {
        case "start":
            // elimino las transicones anteriores del retorno
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            // agrego clases de seguir dos presentaciones
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP');
            break;

         //normalizado horizontal adyecten inmediatamente anterior de la 15
        case "proof15":
            // if(!click)
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before');
            document.getElementById(`${nextName}`).classList.remove('before2');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2');
            click = true
            if(!transicionAuto){
                setTimeout(() => {
                    document.getElementById(`proof16`).style.left = "0%";
                    document.getElementById(`proof16`).classList.remove('beforeUP');
                    document.getElementById(`proof16`).classList.add('next2');
                    document.getElementById(`proof16`).classList.add('nextUP');


                    document.getElementById(`proof17`).classList.remove('beforeUP');
                    document.getElementById(`proof17`).classList.remove('before2UP');
                    document.getElementById(`proof17`).classList.add('next2UP');
                    transicionAuto = true
                }, 5000);
            } else {
                document.getElementById(`${name}`).classList.remove('beforeUP');
                document.getElementById(`${nextName}`).classList.remove('before');
                document.getElementById(`${nextName}`).classList.remove('before2');
                document.getElementById(`${name}`).classList.remove('next2UP');
                document.getElementById(`${name}`).classList.add('nextUP');
                document.getElementById(`${nextName}`).classList.add('next2');
            }
    
            break;
    

        //normalizado horizontal adyecten inmediatamente anterior
        case "proof1" :
        case "proof4" : 
        case "proof8" :
        case "proof15":
        case "proof18":
        case "proof26":
        case "proof30":
        case "proof33":
        case "proof36":
        case "proof32":
        case "proof43":
        case "proof50":
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before');
            document.getElementById(`${nextName}`).classList.remove('before2');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2');
    
            break;

        //normalizado horizontal
        case "proof2":
        case "proof6":
        case "proof13":
        case "proof16":
        case "proof21":
        case "proof29":
        case "proof31":
        case "proof34":
        case "proof37":
        case "proof41":
        case "proof44":
        case "proof51":
            document.getElementById(`${name}`).style.left = "0%";
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('next2');
            document.getElementById(`${nextName}`).classList.remove('next');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP'); 
            break;
    
        case "proof3":
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP'); 
            break;
        
        case "proof3a":
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP'); 
            break;
        
        // case "proof4": 
        //     document.getElementById(`${name}`).classList.remove('beforeUP');
        //     document.getElementById(`${nextName}`).classList.remove('before');
        //     document.getElementById(`${nextName}`).classList.remove('before2');
        //     document.getElementById(`${name}`).classList.remove('next2UP');
        //     document.getElementById(`${name}`).classList.add('nextUP');
        //     document.getElementById(`${nextName}`).classList.add('next2');
        //     break;

        //depzplazaminto default vertical
        default:
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            // document.getElementById(${name}).style.left = "0%"
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP');
            break;
    }

}

btnNext.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        transitionNext(event.target.name, btnNext[index+1].name)
    })
})

let click17 = false

let transitionBefore = (name, beforeName) => {
    switch (name) {
        case "proof1":
            document.getElementById(`${beforeName}`).classList.remove('nextUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            break;

        //nuevas paginas before
        case "proof17":  
            if (!click17) {

                document.getElementById(`${beforeName}`).classList.remove('next2');
                document.getElementById(`${name}`).classList.remove('next2');
                document.getElementById(`${beforeName}`).classList.remove('nextUP');  

                document.getElementById(`${name}`).classList.remove('next2UP');
                document.getElementById(`${name}`).classList.add('before2UP');
       
                document.getElementById(`proof16`).classList.remove('beforeUP');
                document.getElementById(`proof16`).classList.remove('before2');
                document.getElementById(`proof16`).classList.remove('next2UP');
                document.getElementById(`proof16`).classList.add('next2');

            } else {
                document.getElementById(`proof17`).classList.remove('before2UP');
            }
    
            break;
    
  



        case "proof2":
        case "proof6":
            
        case "proof13":
        case "proof16":
        case "proof21":

        case "proof29":
        case "proof31":
        case "proof34":
        case "proof37":
        case "proof41":
        case "proof44":
        case "proof51":
            document.getElementById(`${name}`).classList.remove('next');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');
            document.getElementById(`${name}`).classList.add('before2');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            break;
        
        case "proof3" :
        case "proof8":
        case "proof23":

        case "proof17":
        case "proof18":

        case "proof24":
        case "proof26":
        case "proof30":
        case "proof33":    
        case "proof36":    
        case "proof32":    
        case "proof43":
        case "proof50":
            document.getElementById(`${name}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2');
            document.getElementById(`${beforeName}`).classList.remove('next2');
            document.getElementById(`${name}`).classList.remove('next2');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');   
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            break;

        case "proof3a":
            document.getElementById(`${name}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');   
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            break;

        // case "proof4":
        //     document.getElementById(`${name}`).classList.remove('next2UP');
        //     document.getElementById(`${name}`).classList.add('before2UP');
        //     document.getElementById(`${beforeName}`).classList.add('beforeUP');
        //     document.getElementById(`${name}`).classList.remove('next2UP');
        //     break;
    
    
        default:
            document.getElementById(`${name}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');   
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
        break;
    }

    
    document.getElementById(`pagina${name}`).style.display ="none"
    document.getElementById(`pagina${beforeName}`).style.display ="block"
        
}

btnBefore.forEach((button, index) => {
    button.addEventListener('click', (event) => {
            transitionBefore(event.target.name, btnBefore[index-1].name)
    })
})


const elements = document.getElementsByName("proof9")


const saltos =() => {
    console.log()

}





