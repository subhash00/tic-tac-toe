import React, { Component } from 'react';
import Button from '../components/button';
import Board from '../components/board';
import { handleCheck } from '../handlers/handleCheck';
import Display from '../components/display';
import './assemble.css';
import { handleDraw } from '../handlers/handleDraw';

class assemble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardArray: ['', '', '', '', '', '', '', '', ''],
            gameActive: true,
            gameIndex: true,
            winner: "",
            turn: "X",
            draw:""

        }
        this.handleClick = this.handleClick.bind(this);
        this.formHandler = this.formHandler.bind(this);
    }


    formHandler = (e) => {
        e.preventDefault();
        this.setState({
            boardArray: ['', '', '', '', '', '', '', '', ''],
            gameActive: true,
            gameIndex: true,
            winner: "",
            turn: "X",
            draw:""
        })
    }

    handleClick = (index) => {
        const boardKeys = [...this.state.boardArray];
        //this.handleWinner();

        if (boardKeys[index] || this.state.winner) {
           
            return;
        } 

        boardKeys[index] = this.state.gameIndex ? "X" : "O";
        const turn = boardKeys[index] === "X" ? "O" : "X";
       
        this.setState({
            boardArray: boardKeys,
            gameIndex: !this.state.gameIndex,
            turn: turn,
            
        })
        
                if (!this.state.winner) {
                    console.log("I working")
                    const win = handleCheck(boardKeys);
                    const draw = handleDraw(boardKeys);
                    if (win) {
                        this.setState({
                            winner: win,
                        })
                       // console.log("I win")
                    }
                    if (draw) {
                        console.log("its a draw");
                        this.setState({
                            draw: "draw",
                        })
                    }
                }
        
    }
    
    render() {
        return (
            <div className="mainAssemble">
                <Display winner={this.state.winner} turn={this.state.turn} draw={this.state.draw}/>
                <Board>
                    {
                        this.state.boardArray.map((value, index) => (
                            <Button key={index} handleClick={() => this.handleClick(index)} value={this.state.boardArray[index]} />
                        ))
                    }
                </Board>  
                <>
                    {
                        this.state.winner ?
                            <form className="inputForm" onClick={(e) => this.formHandler(e)}>
                                <input className="inputButton" type="button" value="New Game" />
                            </form> :
                            this.state.draw ?
                                <form className="inputForm" onClick={(e) => this.formHandler(e)}>
                                    <input className="inputButton" type="button" value="New Game" />
                                </form> :
                            <p className="footerMessage">Tic-Tac-Toe</p>
                    }
                </>
            </div>
        );
    }
}

export default assemble;
