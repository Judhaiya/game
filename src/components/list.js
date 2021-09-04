import React,{useState} from 'react'
import New from './New'
export default function List() {
 const[player1Value,setPlayer1Value]=useState()
 const[player2Value,setPlayer2Value]=useState()
 const[player3Value,setPlayer3Value]=useState()
 const[player4Value,setPlayer4Value]=useState()
 const[player1Score,setPlayer1Score]=useState(0)
 const[player2Score,setPlayer2Score]=useState(0)
 const[player3Score,setPlayer3Score]=useState(0)
 const[player4Score,setPlayer4Score]=useState(0)
 const[round,setRound]=useState(1)
 const[gameOver,setGameOver]=useState(false)
 const[start,setStart]=useState(true)
 const[winner,setWinner]=useState('')
 const updateWinner=()=>{
    if(player1Score>player2Score>player3Score>player4Score || player1Score>player3Score>player2Score>player4Score || 
        player1Score>player4Score>player2Score>player3Score){
        setWinner('player 2 is the winner')
    }
    if(player2Score>player1Score>player3Score>player4Score || player2Score>player3Score>player1Score>player4Score || 
        player2Score>player4Score>player1Score>player3Score){
        setWinner('player 2 is the winner')
    }
    if(player3Score>player1Score>player4Score>player2Score || player3Score>player2Score>player1Score>player4Score || 
        player3Score>player4Score>player1Score>player2Score){
        setWinner('player 3 is the winner')
    }
    if(player4Score>player1Score>player3Score>player2Score || player4Score>player2Score>player1Score>player3Score || 
        player4Score>player3Score>player1Score>player2Score){
        setWinner('player 4 is the winner')
    }
}
 if(round===8){
    setPlayer1Value('')
    setPlayer2Value('')
    setPlayer3Value('')
    setPlayer4Value('')
   
    updateWinner()
    
}

  const onSubmit=(e)=>{
    e.preventDefault()
    setRound(round+1)
   
    if(player1Value==Number(1)&& player2Value==Number(2)&& player3Value==Number(2)&& player4Value==Number(2)){
        setPlayer1Score(player1Score-25)
        setPlayer2Score(player1Score+25)
        setPlayer3Score(player1Score+25)
        setPlayer4Score(player1Score+25)
    }
    else if(player1Value==Number(2)&& player2Value==Number(1)&& player3Value==Number(2)&& player4Value==Number(2)){
        setPlayer1Score(player1Score+25)
        setPlayer2Score(player1Score-25)
        setPlayer3Score(player1Score+25)
        setPlayer4Score(player1Score+25)
    }
    else if(player1Value==Number(2)&& player2Value==Number(2)&& player3Value==Number(1)&& player4Value==Number(2)){
        setPlayer1Score(player1Score+25)
        setPlayer2Score(player1Score+25)
        setPlayer3Score(player1Score-25)
        setPlayer4Score(player1Score+25)
    }
    else if(player1Value==Number(2)&& player2Value==Number(2)&& player3Value==Number(2)&& player4Value==Number(1)){
        setPlayer1Score(player1Score+25)
        setPlayer2Score(player1Score+25)
        setPlayer3Score(player1Score+25)
        setPlayer4Score(player1Score-25)
    }
    else if(player1Value==Number(2)&& player2Value==Number(2)&& player3Value==Number(2)&& player4Value==Number(2)){
        setPlayer1Score(player1Score-25)
        setPlayer2Score(player1Score-25)
        setPlayer3Score(player1Score-25)
        setPlayer4Score(player1Score-25)
    }
    else if(player1Value==Number(1)&& player2Value==Number(1)&& player3Value==Number(1)&& player4Value==Number(2)){
        setPlayer1Score(player1Score+50)
        setPlayer2Score(player1Score-25)
        setPlayer3Score(player1Score-25)
        setPlayer4Score(player1Score-25)
    }
    else if(player1Value==Number(1)&& player2Value==Number(1)&& player3Value==Number(1)&& player4Value==Number(2)){
        setPlayer1Score(player1Score-25)
        setPlayer2Score(player1Score-25)
        setPlayer3Score(player1Score-25)
        setPlayer4Score(player1Score+50)
    }
    else if(player1Value==Number(2)&& player2Value==Number(1)&& player3Value==Number(1)&& player4Value==Number(1)){
        setPlayer1Score(player1Score+50)
        setPlayer2Score(player1Score-25)
        setPlayer3Score(player1Score-25)
        setPlayer4Score(player1Score-25)
    }
    else if(player1Value==Number(1)&& player2Value==Number(2)&& player3Value==Number(1)&& player4Value==Number(1)){
        setPlayer1Score(player1Score-25)
        setPlayer2Score(player1Score+50)
        setPlayer3Score(player1Score-25)
        setPlayer4Score(player1Score-25)
    }
    else if(player1Value==Number(1)&& player2Value==Number(1)&& player3Value==Number(2)&& player4Value==Number(1)){
        setPlayer1Score(player1Score-25)
        setPlayer2Score(player1Score-25)
        setPlayer3Score(player1Score+50)
        setPlayer4Score(player1Score-25)
    }
    else if(player1Value==Number(1)&& player2Value==Number(1)&& player3Value==Number(1)&& player4Value==Number(2)){
        setPlayer1Score(player1Score-25)
        setPlayer2Score(player1Score-25)
        setPlayer3Score(player1Score-25)
        setPlayer4Score(player1Score+50)
    }
    setPlayer1Value('')
    setPlayer2Value('')
    setPlayer3Value('')
    setPlayer4Value('')
    
  }
  const reStart=(e)=>{
     e.preventDefault()
     setGameOver(false)
     setStart(true)
  }
    return (
        <>
        <div className="master-list">
            
       <div className="List">
           <p className="game-round">  Round: <span className="round">{round}</span></p>
           {start &&
   <form action="">
      <div>
          <p className="player-1">Player 1</p>
          <input type="number" value={player1Value} onChange={(e)=>setPlayer1Value(e.target.value)} /></div> 
          <button className="submit"  onClick={onSubmit}>submit</button>
      <div>
          <p className="player-2">Player 2</p>
          <input type="number" value={player2Value}  onChange={(e)=>setPlayer2Value(e.target.value)} /></div>
          <button className="submit" onClick={onSubmit}>submit</button> <br />
      <div>
          <p className="player-3">Player 3</p>
          <input type="number" value={player3Value} onChange={(e)=>setPlayer3Value(e.target.value)} /></div> 
          <button className="submit" onClick={onSubmit}>submit</button> <br />
      <div>
          <p className="player-4">Player 4</p>
          <input type="number" value={player4Value} onChange={(e)=>setPlayer4Value(e.target.value)}/></div> 
          <button  className="submit"onClick={onSubmit}>submit</button> 
   </form>
        }
   {gameOver &&
   <div className="play-again">
       <button onClick={reStart}>playAgain</button>
   </div>}
  <div className="score-board">
     <p>Player 1 <span className="scores">score:{player1Score}</span></p>
         
     <p>Player 2 <span className="scores">score:{player1Score}</span> </p>
     <p>Player 3 <span className="scores">score:{player1Score}</span></p>
     <p>Player 4 <span className="scores">score:{player1Score}</span></p>

     <p>{winner}</p>

  </div>

        
       </div>
       </div>
       </>
       
    )
}
