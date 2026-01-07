/*Exercice 1*/

/*Somme*/

function add (values)
{
    let sum = values[0];              
    for (let i = 1; i < values.length; i++) 
    {
         sum += values[i];
    }
    
    return sum;
}

let values = [21,21];
console.log(add(values));




/*Différence*/

function sub (values2)
{
    let diff = values2[0];
    
    for(let i = 1; i < values2.length; i++) 
    {
        diff -= values2[i];
    }
    
    return diff;
}

let values2 = [63,21];
console.log(sub(values2));



/*Produit*/

function mult (values3)
{
    let product = values3[0];
    
    for(let i = 1; i < values3.length; i++) 
    {
        product *= values3[i];
    }
    
    return product;
}

let values3 = [21,2];
console.log(mult(values3));




/*Quotient*/

function div (values4)
{
    let quotient = values4[0];
    
    for(let i = 1; i < values4.length; i++) 
    {
        quotient /= values4[i];
    }
    
    return quotient;
}

let values4 = [42,2];
console.log(div(values4));

