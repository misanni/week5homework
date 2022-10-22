

const minions = [
                "bob",
				"kelvin",
				"staurt",
				"dave",
				"jerry",
				"mark",
				"tim",
				"phil",
				"carl"
				];
				
				
				//forEach to print out each of the element in the array minions


				minions.forEach(imPresent)
				
				//document.getElementById("demo").innerHTML = staffsDetails;
				
                    function imPresent(sent){
					let sentence = `I am ${sent} present.`;
					console.log(sentence);
					}
					
					
					//function to capitalize element in the array minions except kelvin
					
					
						

							function capitalizedWord(capitalizedMinions) {
       capitalizedMinions.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
	
  });
}
capitalizedWord(minions);


//capitalizedMinions print out
console.log(capitalizedMinions=[
	            "bob",
				"staurt",
				"dave",
				"jerry",
				"mark",
				"tim",
				"phil",
				"carl"]);
//filter method

actuallyCapitalized(minions);

function actuallyCapitalized(actuallyCapitalizedMinions) {
  return actuallyCapitalizedMinions.filter(element => {
    console.log(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
  });
}


//every Capitalize

function everyCapitalized(everyMinions) {
  return everyMinions.every(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
}
everyCapitalized(minions);
//find method

findMinions(capitalizedMinions);
function findMinions(unCapitalized){
return unCapitalized.find(element => {

    return element.charAt(0).toLowerCase() + element.slice(1).toLowerCase()
});
}




capitalizedWord(minions);

//find index of kelvin
findIndexKelvin(minions);

function findIndexKelvin(arr){
console.log("kelvin",arr);
}


//reduceMethod

sumLength(minions);

function sumLength(reduceM){

return reduceM.reduce +=minions.length;
}

	