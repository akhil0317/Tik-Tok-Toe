/* selecting  each cell divs */

var cellDivs = document.querySelectorAll(".board .cell");

var  turn = document.querySelector(".action .turn");

var  reset = document.querySelector(".action .reset");


var inform = document.querySelector(".container .inform");



/* Game Variables*/

var xTurn = true;

var count=0;

var arr =[];

var win = false;

isGameFinish = false;

var temp = 0;

     Array.from(cellDivs).forEach((div)=>{
         
         div.addEventListener("click",function(e){
            eventFunction(e,div);
         })
          /*  if(xTurn)
            {
            xTurn = !xTurn;
            div.innerHTML="X";
            turn.innerHTML= "O TURN";
            
            count = count+1;
            if(e.target.classList[1]!="X"&&e.target.classList[1]!="O")
            e.target.classList.add("X");
             win = isWinner(div);
             if(win === true)
             temp = false;
             else
             temp = true;
            /*if(isGameFinish ===true)
            return false;
            else
            return true;
            }
            else
            {
                
                xTurn = !xTurn; 
            div.innerHTML = "O";
            div.style.color = "white";
            turn.innerHTML= "X TURN";
            
            count = count+1;
            if(e.target.classList[1]!="X"&&e.target.classList[1]!="O")
            console.log(div);
            e.target.classList.add("O");
             win = isWinner(div);
             
             if(win === true)
             temp = false;
             else
             temp = true;
            /*if(isGameFinish ===true)
            return false;
            else
            return true;
            }
            console.log(win);*/
         })
         /*console.log(win);
         
         if(isGameFinish===true)
         return false;
         else
         return true;
         
         
         })*/

    
/*Function to check winner*/ 
var isWinner = (div)=>{
    var arr =[];
Array.from(cellDivs).forEach((div)=>{
    arr.push(div.classList[1])
    
})

if(arr[0]==div.innerHTML&&arr[1]==div.innerHTML &&arr[2]==div.innerHTML)
{
turn.innerHTML=div.innerHTML+" WIN";
isGameFinish = true;
inform.innerHTML="Play again->click Reset";
return true;
}

else if(arr[3]==div.innerHTML&&arr[4]==div.innerHTML &&arr[5]==div.innerHTML)
{
turn.innerHTML=div.innerHTML+" WIN";
isGameFinish = true;
inform.innerHTML="Play again->click Reset";
return true;
}

else if(arr[6]==div.innerHTML&&arr[7]==div.innerHTML &&arr[8]==div.innerHTML)
{
turn.innerHTML=div.innerHTML+" WIN";
isGameFinish = true;
inform.innerHTML="Play again->click Reset";
return true;
}

else if(arr[0]==div.innerHTML&&arr[3]==div.innerHTML&&arr[6]==div.innerHTML)
{
turn.innerHTML=div.innerHTML+" WIN";
isGameFinish = true;
inform.innerHTML="Play again->click Reset";
return true;
}

else if(arr[1]==div.innerHTML&&arr[4]==div.innerHTML &&arr[7]==div.innerHTML)
{
turn.innerHTML=div.innerHTML+" WIN";
isGameFinish = true;
inform.innerHTML="Play again->click Reset";
return true;
}

else if(arr[2]==div.innerHTML&&arr[5]==div.innerHTML &&arr[8]==div.innerHTML)
{
turn.innerHTML=div.innerHTML+" WIN";
isGameFinish = true;
inform.innerHTML="Play again->click Reset";
return true;
}

else if(arr[0]==div.innerHTML&&arr[4]==div.innerHTML &&arr[8]==div.innerHTML)
{
turn.innerHTML=div.innerHTML+" WIN";
isGameFinish = true;
inform.innerHTML="Play again->click Reset";
return true;
}

else if(arr[2]==div.innerHTML&&arr[4]==div.innerHTML &&arr[6]==div.innerHTML)
{
turn.innerHTML=div.innerHTML+" WIN";
isGameFinish = true;
inform.innerHTML="Play again->click Reset";
return true;
}


else if(arr[0]&&arr[1]&&arr[2]&&arr[3]&&arr[4]&&arr[5]&&arr[6]&&arr[7]&&arr[8])
{
turn.innerHTML="GAME IS TIED!!!";
inform.innerHTML="Play again->click Reset";
inform.innerHTML="Play again->click Reset";
isGameFinish = true;
return true;
}


else
{
    isGameFinish= false;
return false;
}
}
    
/* resetting the board at the end of the game */
reset.addEventListener("click",(e)=>{
    inform.innerHTML="";

   console.log(isGameFinish);
   
   //console.log(count);
   
   if(isGameFinish==true)
   {
       count=0;
    //inform.innerHTML="Play again->click Reset";
    Array.from(cellDivs).forEach((d)=>{
        
        if(d.classList[1]=="X")
        d.classList.remove("X");
        else
        d.classList.remove("O")
        d.innerHTML="";
        d.style.color="black";
       
    })
   }
   temp=0;
   
    if(count<9 && isGameFinish==false)
    {
        temp=0;
        if(count==0)
        inform.innerHTML="Please start the Game";
        else
        {
            temp = 1;
        console.log(inform);
        inform.innerHTML="Please finish the game to start new Game";
        }
        
    }
    if(temp!=1)
    {
    isGameFinish = false;
    turn.innerHTML= "X TURN";
    xTurn = true;
    }

    /*else
    {
    Array.from(cellDivs).forEach((d)=>{
       // inform.innerHTML="Play again->click Reset";
        if(d.classList[1]=="X")
        d.classList.remove("X");
        else
        d.classList.remove("O")
        d.innerHTML="";
    })*/
}
)






function eventFunction(e,div){
    console.log(div);
    console.log(isGameFinish)
    if(isGameFinish === false&&div.classList[1]!="X"&&div.classList[1]!="O")
    {
        if(xTurn)
        {

        xTurn = !xTurn;
        div.innerHTML="X";
        turn.innerHTML= "O TURN" ;
        
        count = count+1;
        if(e.target.classList[1]!="X"&&e.target.classList[1]!="O")
        e.target.classList.add("X");
         win = isWinner(div);
         console.log(isGameFinish);
         /*if(win === true)
         temp = false;
         else
         temp = true;*/
        /*if(isGameFinish ===true)
        return false;
        else
        return true;*/
        }
        else
        {
            
            xTurn = !xTurn; 
        div.innerHTML = "O";
        div.style.color = "white";
        turn.innerHTML= "X TURN";
        
        count = count+1;
        if(e.target.classList[1]!="X"&&e.target.classList[1]!="O")
        console.log(div);
        e.target.classList.add("O");
         win = isWinner(div);
         console.log(isGameFinish);
         
         /*if(win === true)
         temp = false;
         else
         temp = true;*/
        /*if(isGameFinish ===true)
        return false;
        else
        return true;*/
        }
       // console.log(win);
        
    }
}