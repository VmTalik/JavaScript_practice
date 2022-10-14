//*
//**
//***
//**** 
//*****
//****** 


let res = '';
const lenght = 7;

for (let i = 0; i < lenght; i++){
    
    for (let j = 0; j < i; j++){
        res += '*';
    }
        
    res += '\n';
}

console.log(res);
