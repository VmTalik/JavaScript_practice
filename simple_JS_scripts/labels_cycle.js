let res = '';
const lenght = 7;

first: for (let i = 0; i < lenght; i++){
    
    for (let j = 0; j < i; j++){
        if (j==3) break first;
        res += '*';
    }
        
    res += '\n';
}

console.log(res);