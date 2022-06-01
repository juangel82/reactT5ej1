import React, {useState}from 'react';

const ComponenteEventos = () => {
    const[texto,setText] = useState('');
    const[resultado,setResultado]=useState('');
    
    function manejarPulsacionesTeclado(key){
        setText(texto+key);
       
        
    }

function manejarDown(e){
    //borrar solo llama a esta función
    var key = e.keyCode || e.charCode;
    if(key === 8){ 
        console.log('manejado ',e.keyCode);
    setText(texto.substring(0,texto.length-1));
    }
    console.log('cpiando texto',texto);
    setResultado(`${texto}`);
    

}

    return (
        <div>
            <input 
            onKeyPress={(e)=>manejarPulsacionesTeclado(e.key)}
             onKeyDown={(e)=>manejarDown(e)}
             


            />
            <strong>{resultado}</strong>
        </div>
    );
}

export default ComponenteEventos;
