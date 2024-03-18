var voteEligible = function (age)
{
    if (age <= 0 || age > 130)
    {
        console.log(`Age is:${age} Invalid Data`);
    }
    else if (age < 18)
    {
       console.log(`Age is: ${age} not Eligible for vote`); 
    }
    else if (age >= 18)
    {
        console.log(`Age is:${age} eligible for vote`);
    }
       
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);