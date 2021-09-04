import React,{useState} from "react";
import { BrowserRouter, Route, Link,useParams,Switch } from "react-router-dom";

import List from "./components/list";

const App = ()=>{

 const data = [
  { id: 1, name: 'Hong Kong DisneyLand', category: 'Enterytainment' },
  { id: 2, title: 'Repulse Bay', category: 'Outdoor' },
  { id: 3, title: 'Happy Bay', category: 'outlook' },
]
/*
const[playerInput,setPlayerInput]=useState()
const[score,setScore]=useState(0)
const[player1Value,setPlayer1Value]=useState()
const[player1Score,setPlayer1Score]=useState(0)
const[player2Score,setPlayer2Score]=useState(0)
const[player3Score,setPlayer3Score]=useState(0)
const[player4Score,setPlayer4Score]=useState(0)
const[showWin,setShowWin]=useState(false)
 const checkAnswer=()=>{
   
   if(playerInput==Number(2)){
    setScore(score+10)
  }
  if(playerInput==Number(2)&&player1Value==Number(2)){
    setScore(0)
  }
  if(playerInput==Number(4)&&player1Value==Number(2)){
    setScore(score+20)
    setShowWin(true)
  }
 }
 */
 
return (
 /* <BrowserRouter>
   <main>
      <div className="container">
        <h3>hello</h3>
       {/* <Route path="/question/:id" component={Question} />*/
      /* <Route exact path="/post/:id" render={({match})=>(
         <List post={posts.find(p=>p.id===match.params.id)}/>
       )}>
         <Question question={}/>
       </Route>
    
      </div>
    </main>
    </BrowserRouter>
      */
    /*
     <BrowserRouter>
     <main>
       <h2>Accounts</h2>
       <ul>
         <li>
           <Link to="/netflix">netflix</Link>

         </li>
         <li>
           <Link to="/zillow-group">Zillow group</Link>
           
         </li>
         <li>
           <Link to="/yahoo">Yahoo</Link>
           
         </li>
         <li>
           <Link to="/crimson">Crimson</Link>
           
         </li>
       </ul>
       <Switch>
       <Route exact path='/explore'>
    		<List data={ data } />
    	</Route>
      <Route exact path='/explore/:name'>
    		<Question data={ data } />
    	</Route>
       </Switch>
     </main>

     </BrowserRouter>
     */
     <BrowserRouter>
    <div className="App">
     
     
      <div className="option-buttons">
        <div className="game-explanation">
        <p>You can catch one or two fish </p>
        <p>Please choose between number one or two</p>
        </div>
       {/* <input type="number"onChange={(e)=>setPlayerInput(e.target.value)} value={playerInput} />
        <input type="number" onChange={(e)=>setPlayer1Value(e.target.value)} value={player1Value} />
      <button onClick={()=>{checkAnswer()}}>Submit</button>
        <p>{playerInput}</p>
      {showWin && <p>You won!! congrats</p>}*/}
        <Switch>
        
                <Route exact path="/game" component={List} />
                
        </Switch>
        <button className="start-game"><Link to="/game">Start game</Link></button>  
      </div>
   </div>
  
</BrowserRouter>
)
}

  


export default App