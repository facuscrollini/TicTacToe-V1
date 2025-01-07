//Esta es la copia de Board en la cual practico para llegar a la solución más lentamente

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import FichasX from "./FichasX";


const Board2 = () => {

    const [square, setSquare] = useState("")
    const [circle, setCircle] = useState("")
    const [matriz, setMatriz] = useState(Array(9).fill(""))
    const [playerX, setPlayerX] = useState(false)
    const [playerO, setPlayerO] = useState(false)



    useEffect(() => {
        if (playerX) {
            setSquare("X")
        }
        if (playerO) {
            setSquare("O")
        }
    }), [square]



    const handleSquare = (index) => {
        matriz[index] = "X"
    }


    const handlePlayerX = () => {
        setPlayerX(true)
        setPlayerO(false)
    }

    const handlePlayerO = () => {
        setPlayerO(true)
        setPlayerX(false)
    }

    return (
        <div className="container-fluid rounded-3">
            <div className="board">
                <div onClick={() => handleSquare(0)} className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        <p style={{ color: "white" }}>{matriz[0]}</p>
                    </div>
                    <div className="piece col-md-4 ">
                        <p style={{ color: "white" }}>{matriz[1]}</p>
                    </div>
                    <div className="piece col-md-4 ">
                        <p style={{ color: "white" }}>{matriz[2]}</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">
                        <p style={{ color: "white" }}> {circle}</p>
                    </div>
                    <div className="piece col-md-4 ">
                        <p style={{ color: "white" }}> {circle}</p>
                    </div>
                    <div className="piece col-md-4 ">
                        <p style={{ color: "white" }}> {circle}</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">

                    </div>
                    <div className="piece col-md-4 ">

                    </div>
                    <div className="piece col-md-4 ">

                    </div>
                </div>
            </div>

            <div className="Select_Game">
                <button onClick={handlePlayerX} type="button">Player X Turn</button>
                <button onClick={handlePlayerO} type="button">Player O Turn</button>

            </div>
        </div>


    )
}

export default Board2
