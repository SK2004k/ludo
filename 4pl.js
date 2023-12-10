 console.log("inside 4pl");
var r_path = ["cell-6-1","cell-6-2","cell-6-3","cell-6-4","cell-6-5",
    "cell-5-6","cell-4-6","cell-3-6","cell-2-6","cell-1-6","cell-0-6",
    "cell-0-7",
    "cell-0-8","cell-1-8","cell-2-8","cell-3-8","cell-4-8","cell-5-8",
    "cell-6-9","cell-6-10","cell-6-11","cell-6-12","cell-6-13","cell-6-14",
    "cell-7-14",
    "cell-8-14","cell-8-13","cell-8-12","cell-8-11","cell-8-10","cell-8-9",
    "cell-9-8","cell-10-8","cell-11-8","cell-12-8","cell-13-8","cell-14-8",
    "cell-14-7",
    "cell-14-6","cell-13-6","cell-12-6","cell-11-6","cell-10-6","cell-9-6",
    "cell-8-5","cell-8-4","cell-8-3","cell-8-2","cell-8-1","cell-8-0",
    "cell-7-0",
    
    
    "cell-7-1","cell-7-2","cell-7-3","cell-7-4","cell-7-5","cell-7-7"
    ];
    var b_path = ["cell-13-6","cell-12-6","cell-11-6","cell-10-6","cell-9-6",
    "cell-8-5","cell-8-4","cell-8-3","cell-8-2","cell-8-1","cell-8-0",
    "cell-7-0",
    "cell-6-0","cell-6-1","cell-6-2","cell-6-3","cell-6-4","cell-6-5",
    "cell-5-6","cell-4-6","cell-3-6","cell-2-6","cell-1-6","cell-0-6",
    "cell-0-7",
    "cell-0-8","cell-1-8","cell-2-8","cell-3-8","cell-4-8","cell-5-8",
    "cell-6-9","cell-6-10","cell-6-11","cell-6-12","cell-6-13","cell-6-14",
    "cell-7-14",
    "cell-8-14","cell-8-13","cell-8-12","cell-8-11","cell-8-10","cell-8-9",
    "cell-9-8","cell-10-8","cell-11-8","cell-12-8","cell-13-8","cell-14-8",
    "cell-14-7",
    
    
    "cell-13-7","cell-12-7","cell-11-7","cell-10-7","cell-9-7","cell-7-7"
    
    ];
    var g_path = ["cell-1-8","cell-2-8","cell-3-8","cell-4-8","cell-5-8",
    "cell-6-9","cell-6-10","cell-6-11","cell-6-12","cell-6-13","cell-6-14",
    "cell-7-14",
    "cell-8-14","cell-8-13","cell-8-12","cell-8-11","cell-8-10","cell-8-9",
    "cell-9-8","cell-10-8","cell-11-8","cell-12-8","cell-13-8","cell-14-8",
    "cell-14-7",
    "cell-14-6","cell-13-6","cell-12-6","cell-11-6","cell-10-6","cell-9-6",
    "cell-8-5","cell-8-4","cell-8-3","cell-8-2","cell-8-1","cell-8-0",
    "cell-7-0",
    "cell-6-0","cell-6-1","cell-6-2","cell-6-3","cell-6-4","cell-6-5",
    "cell-5-6","cell-4-6","cell-3-6","cell-2-6","cell-1-6","cell-0-6",
    "cell-0-7",
    
    
    "cell-1-7","cell-2-7","cell-3-7","cell-4-7","cell-5-7","cell-7-7"
    ];
    var y_path = ["cell-8-13","cell-8-12","cell-8-11","cell-8-10","cell-8-9",
    "cell-9-8","cell-10-8","cell-11-8","cell-12-8","cell-13-8","cell-14-8",
    "cell-14-7",
    "cell-14-6","cell-13-6","cell-12-6","cell-11-6","cell-10-6","cell-9-6",
    "cell-8-5","cell-8-4","cell-8-3","cell-8-2","cell-8-1","cell-8-0",
    "cell-7-0",
    "cell-6-0","cell-6-1","cell-6-2","cell-6-3","cell-6-4","cell-6-5",
    "cell-5-6","cell-4-6","cell-3-6","cell-2-6","cell-1-6","cell-0-6",
    "cell-0-7",
    "cell-0-8","cell-1-8","cell-2-8","cell-3-8","cell-4-8","cell-5-8",
    "cell-6-9","cell-6-10","cell-6-11","cell-6-12","cell-6-13","cell-6-14",
    "cell-7-14",
    
    "cell-7-13","cell-7-12","cell-7-11","cell-7-10","cell-7-9","cell-7-7"
    ];
    
    var r=[-1,-1,-1,-1];
    var b=[-1,-1,-1,-1];
    var g=[-1,-1,-1,-1];
    var y=[-1,-1,-1,-1];
    var  array= [r,b,y,g];
    var tokenclass=["RED","BLUE","YELLOW","GREEN"];

    var dice_image = ["diceimg/one.jpeg","diceimg/two.jpeg","diceimg/three.jpeg","diceimg/four.jpeg","diceimg/five.jpeg","diceimg/six.jpeg"];
    var path_length = r_path.length;
    var redinhome=["cell-2-2","cell-2-3","cell-3-2","cell-3-3"];
    var blueinhome=["cell-11-2","cell-11-3","cell-12-2","cell-12-3"];
    var yellowinhome=["cell-11-11","cell-11-12","cell-12-11","cell-12-12"];
    var greeninhome=["cell-2-11","cell-2-12","cell-3-11","cell-3-12"];

var background_color = ["rgb(247 197 186)","rgb(205, 255, 255)","rgba(251, 214, 4, 0.96)","#c2f9c2"];


var turn = 1;
document.querySelector(".container").style.backgroundColor = background_color[turn];
function changeturn()
{
    turn = ((turn + 1)%4);
    document.querySelector(".container").style.backgroundColor = background_color[turn];

}
function Valid(a,i,num)
{
    if(a[i]==-1)
    return false;
    if(a[i]+num<path_length)
    return true;
return false;
}
function check(gridid,classname)
{
    const gridContainer = document.getElementById(gridid);
    console.log(gridContainer.className);
    if(gridContainer.classList.contains("safe"))
    {
        console.log("We are leaving check function now");
        return;
    }

        const spanElements = gridContainer.querySelectorAll("span");
    if(spanElements.length>1)
    {
        spanElements.forEach((spanElement, index) => {
            console.log("still inside check function");
            const spanId = spanElement.id;
            const spanClass = spanElement.className;
            if(spanClass!=classname)
            {
                const [row, num] = spanId.split("-").slice(1).map(Number);

                const element = document.getElementById(spanId);
                element.remove();
            const span = document.createElement("span");
            span.className = spanClass;
            span.textContent = "chess";
             span.id=spanId;
             var a,i;
             if(spanElement.classList.contains("RED"))
             {
                a=redinhome;
                i=0;
             }
            else
            if(spanElement.classList.contains("BLUE"))
              {
                a=blueinhome;
                i=1;
              }
              else
              if(spanElement.classList.contains("YELLOW"))
            {
                a = yellowinhome;
                i=2;
            }
            else{
                 a=greeninhome;
                 i=3;
            }
             const cell = document.getElementById(a[num-1]);
             console.log(a[num-1]," ",num, " cell: ",cell);
            array[i][num-1]=-1;
             cell.appendChild(span);
            console.log(`Span ${index + 1}: id=${spanId}, class=${spanClass}`);

            return;
            }
          });
    }

}

function increasetoken(a,l,number,p_path)
{
    console.log("inside increase function");
    const gamepices =  Array.from(document.querySelectorAll(`.${tokenclass[turn]}`));
   function move(e){
          const id = e.target.id;
          const [row, num] = e.target.id.split("-").slice(1).map(Number);
          console.log("id -> ",id);
          var f=0;
          for(var i=0;i<l.length;i++)
          if(l[i]==num-1)
          {
            f=1;
            break;
          }
          if(f==0)
          {
            alert("This piece cannot move");
          }
          else
          {

         const element = document.getElementById(id);
         element.remove();
            const span = document.createElement("span");
            span.className = `material-symbols-outlined ${tokenclass[turn]}`;
            span.textContent = "chess";
        span.id=id;
        console.log(span.id);
        if(a[num-1]!=-1)
        {
            a[num-1] += number;
        }
        else
        {
            a[num-1]=0;

        }
        console.log(a[num-1]," ",id);
         const cell = document.getElementById(p_path[a[num-1]]);

        cell.appendChild(span);
        check(p_path[a[num-1]],span.className);
        if(number!=6)
        changeturn();
        gamepices.forEach((element) => {
            element.removeEventListener('click', move);
        });
          }
        }

        gamepices.forEach((element)=>{
            element.addEventListener('click',move);
            
        });

}
function canmove(a,num)
{
    if(num==6)
     return [0,1,2,3];
    l=[];
     for(var i=0;i<4;i++)
     if(Valid(a,i,num))
     l.push(i);
return l;
}
var num=6,ni=0;
function dicethrow()
{
    
        num = Math.floor((Math.random()*6)) + 1;
        // var t=[6,6,6,6,6,2,6,4,4];
        // num = t[ni++];
        const diceImage = document.querySelector("#dice-image"); // Select the img element
        diceImage.src = dice_image[num - 1]; // Set the src attribute
        diceImage.alt = num; // Set the alt attribute
       console.log(num," ",dice_image[num-1]," -> ",turn);
var l = canmove( array[turn],num);
for(var i=0;i<l.length;i++)
console.log(l[i]);
console.log("Over");
if(l.length>0)
{
    console.log("increase function is called");
    var p_path;
    if(turn==0)
    p_path=r_path;
   else
   if(turn==1)
   p_path=b_path;
else
   if(turn==2)
   p_path = y_path;
else
p_path=g_path;
    increasetoken( array[turn],l,num,p_path);
}
else
changeturn();


}

let diceRollInterval_2pl;
let rollCount_2pl = 0;
document.querySelector(".dice").addEventListener("click",()=>{
        if (diceRollInterval_2pl) {
            // If already rolling, do nothing
            return;
        }

        rollCount_2pl = 0;
        const diceImage = document.querySelector("#dice-image");
        diceRollInterval_2pl = setInterval(() => {
            // Change the dice image at regular intervals
            diceImage.src = dice_image[rollCount_2pl];
            rollCount_2pl++;

            if (rollCount_2pl >= dice_image.length) {
                // Stop the interval when all images have been shown
                clearInterval(diceRollInterval_2pl);
                diceRollInterval_2pl = null;

                dicethrow();
               
            }
        }, 200); 
        
    });
    




