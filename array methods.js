var req=new XMLHttpRequest();
req.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
console.log(data);

// Regions in Asia:

var result=data.filter((element)=>{
    return element.region==="Asia";
})
console.log(result);


// Countries with population of less than 200000:

var population=data.filter((countries)=>{
    return countries.population<200000;
})
console.log(population);

// print name,capital,flag using FOREACH function:

data.forEach(function(countries){
    console.log(`The Name of the country is ${countries.name} whose capital is 
    ${countries.capital} and its flag is ${countries.flag}`);
})



// Total population of countries using REDUCE function:

var totpopulation=data.reduce((accu,curr)=> 
    accu+curr.population,0);
console.log(totpopulation);



// Countries which using US dollars:

for(let i=0; i<data.length; i++){
    let isCurrency=data[i].currencies;
    if(isCurrency){
        let currencyArr=data[i].currencies;
        for(let i=0; i<currencyArr.length; i++){
           if(currencyArr[i].code==="USD"){
                console.log("Countries with USD:" ,data[i].name);
            }
        }
    }
}

}
