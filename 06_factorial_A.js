function factorialOfNum( num)
{
    if (num === null || num === undefined ||num<0)  
    {
       console.log(`${num} is :Invalid Input`);   
    }  
    else
    {
      let fact = 1;
        for (let i = 1; i <= num; i++)
        {
         fact = fact * i;
        }
        console.log(`factorial of ${num} is:${fact}`);
    }  
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);


