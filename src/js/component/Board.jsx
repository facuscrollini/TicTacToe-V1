import PropTypes from "prop-types";
import React from "react";

const Board = () => {
    return (

        <div className="container-fluid rounded-3">
            <div className="board">
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">

                    </div>
                    <div className="piece col-md-4 ">

                    </div>
                    <div className="piece col-md-4 ">

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
                <div className="d-flex flex-row justify-content-center">
                    <div className="piece col-md-4 ">

                    </div>
                    <div className="piece col-md-4 ">

                    </div>
                    <div className="piece col-md-4 ">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Board;