function Greeting() 
{
    let T = new Date().getHours();
    let msg="";
    if (T>=5 && T<=11)
        {
            msg="Good Morning";
        }
    else if (T>=12 && T<=17)
        {
            msg="Good Afternoon";
        }
        else if (T>=18 && T<=21)
        {
            msg="Good Evening";
        }
        else if (T>=22 && T<=4)
        {
            msg="Good Night";
        }
 return (
   <h1>This Is A Heading React + Vite<br/><br/>{msg} : {T}</h1>
 )
}
export default Greeting;