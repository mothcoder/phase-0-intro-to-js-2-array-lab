const cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {

    cats.unshift("Bob");
};

function destructivelyAppendCat(name) {
    
    cats.push("Ralph");
};

function destructivelyRemoveLastCat(name) {
    cats.splice(2);
    
};

function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
};

function prependCat(name) {
   
    let newCat = name;
    return  [ newCat, ...cats];
    
   

    
};

function appendCat(name) {

    let newCat= name;
    return [...cats, newCat];

    
    
};

function removeLastCat() {
   
  
    return cats.slice(0,2);
    
    
    
    
    
};

function removeFirstCat() {

    return cats.slice(1);
    
    
};
