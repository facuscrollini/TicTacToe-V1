import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import FichasX from "./FichasX";

const Board = () => {
    const [playerOne, setPlayerOne] = useState(false);
    const [playerTwo, setPlayerTwo] = useState(false);
    const [matriz, setMatriz] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
    const [fichaP1, setFichaP1] = useState("")
    const [fichaP2, setFichaP2] = useState("")
    const fichas = ["X", "O"];

    
    useEffect = () => {
    }


    //estado para que inicie el juego
    const PlayerVsPlayer = () => {
        setPlayerOne(true)
        setPlayerTwo(false)
    };


    //intercambiando jugador

    const turnPlayerOne = () => {
        setPlayerOne(true)
        setPlayerTwo(false)
    }
    
    const turnPlayerTwo = () => {
        setPlayerOne(false)
        setPlayerTwo(true)
    }
    
    const getRandomPiece = () => {
       return fichas[Math.floor(Math.random() * fichas.length)]
    }
    
    const onGame = (fila,celda) => {
        let turnOne = "";
        let turnTwo = "";
        if (playerOne) {
            turnOne = getRandomPiece()
            matriz[fila][celda] = turnOne;
            turnPlayerTwo()
        } else if (turnOne === fichas[0]) {
            turnTwo = fichas[1]
            return setPlayerTwo(false)
        } else if (turnOne === fichas[1]) {
            turnTwo = fichas[0]
            return setPlayerTwo(false)
        }else {
        return turnOne}
    };

   

    return (

        <div className="container-fluid rounded-3">
            <div className="board">
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matriz[0][0] != "" ? <FichasX ficha={matriz[0][0]} /> : <div onClick={onGame(0,0)}></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matriz[0][1] != "" ? <FichasX ficha={matriz[0][1]} /> : <div onClick={onGame(0,1)}></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matriz[0][2] != "" ? <FichasX ficha={matriz[0][2]} /> : <div onClick={onGame(0,2)}></div>}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matriz[1][0] != "" ? <FichasX ficha={matriz[1][0]} /> : <div onClick={onGame(1,0)}></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matriz[1][1] != "" ? <FichasX ficha={matriz[1][1]} /> : <div onClick={onGame(1,1)}></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matriz[1][2] != "" ? <FichasX ficha={matriz[1][2]} /> : <div onClick={onGame(1,2)}></div>}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        {matriz[2][0] != "" ? <FichasX ficha={matriz[2][0]} /> : <div onClick={onGame(2,0)}></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matriz[2][1] != "" ? <FichasX ficha={matriz[2][1]} /> : <div onClick={onGame(2,1)}></div>}
                    </div>
                    <div className="piece col-md-4 ">
                        {matriz[2][2] != "" ? <FichasX ficha={matriz[2][2]} /> : <div onClick={onGame(2,2)}></div>}
                    </div>
                </div>
            </div>

            <div className="Select_Game">
                <button onClick={PlayerVsPlayer} type="button">Start Game</button>
                <button onClick={getRandomPiece} type="button">Choose Piece</button>
                <p>The player 1 piece is: {fichaP1}</p>
                <p>The player 2 piece is: {fichaP2}</p>
            </div>
        </div>


    )
}

export default Board;