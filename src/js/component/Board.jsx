import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import FichasX from "./FichasX";

const Board = () => {
    const [playerOne, setPlayerOne] = useState(false);
    const [playerTwo, setPlayerTwo] = useState(false);
    const [matrix, setMatrix] = useState([["", "", ""],["","",""],["","",""]]);
    

    useEffect = () =>{
        if(playerOne){
            if(playerTwo){

            }
            
        }
    }

    
//estado para que inicie el juego
        const PlayerVsPlayer = ()=>{
            setPlayerOne(true)
            setPlayerTwo(false)
        };


//Elegir pieza al azar
/*const choosePiece = ["X", "O"]
    
let chooseRandom = ()=>{
    return choosePiece[Math.floor(Math.random() * choosePiece.length)]   
};*/

  
//intercambiando jugador
const onGame = ()=>{
    let turnOne = ""
    let turnTwo = ""
    if(playerOne){
        turnOne = "X"
       return setPlayerOne(false)
    }else{
        turnTwo = "O"
        return setPlayerTwo(false)
    }
    return turnOne
};

console.log(playerOne);



//console.log(chooseRandom());





     const turnPlayerOne = ()=>{
        setPlayerOne(true)
        setPlayerTwo(false)
        setPlayerCpu(false)
    }

    const turnPlayerTwo = ()=>{
        setPlayerOne(false)
        setPlayerTwo(true)
    }

    const turnCpu = ()=>{
        setPlayerOne(false)
        setPlayerTwo(false)
    }



    return (

        <div className="container-fluid rounded-3">
            <div className="board">
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matrix[0][0] !="" ? <FichasX ficha={matrix[0][0]}/> : <div onClick={onGame}></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[0][1] !="" ? <FichasX ficha={matrix[0][1]}/> : <div></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[0][2] !="" ? <FichasX ficha={matrix[0][2]}/> : <div></div>}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matrix[1][0] !="" ? <FichasX ficha={matrix[1][0]}/> : <div></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[1][1] !="" ? <FichasX ficha={matrix[1][1]}/> : <div></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[1][2] !="" ? <FichasX ficha={matrix[1][2]}/> : <div></div>}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matrix[2][0] !="" ? <FichasX ficha={matrix[2][0]}/> : <div></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[2][1] !="" ? <FichasX ficha={matrix[2][1]}/> : <div></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matrix[2][2] !="" ? <FichasX ficha={matrix[2][2]}/> : <div></div>}
                    </div>
                </div>
            </div>
            
            <div className="Select_Game">
                <button onClick={PlayerVsPlayer} type="button">Start Game</button>
                {/*<button onClick={chooseRandom} type="button">Choose Piece</button>*/}
            </div>
        </div>


    )
}

export default Board;