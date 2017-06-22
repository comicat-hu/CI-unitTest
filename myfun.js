function myfun(code, input){
    var output = [];
    var data = [0];
    var dp = 0;
    var inp = 0;
    var bracketMatch = findFuckingBracket(code);

    for(var ip = 0; ip < code.length; ip++){

        switch(code[ip]){
            case '>':
                dp++;
                if(!data[dp])
                    data[dp] = 0;
                break;
            case '<':
                dp--;
                if(!data[dp])
                    data[dp] = 0;
                break;
            case '+':
                if(!data[dp])
                    data[dp] = 0;
                data[dp]++;
                if(data[dp] > 255)
                    data[dp] = 0;
                break;
            case '-':
                if(!data[dp])
                    data[dp] = 0;
                data[dp]--;
                if(data[dp] < 0)
                    data[dp] = 255;
                break;
            case '.':
                output.push(String.fromCharCode(data[dp]));
                break;
            case ',':
                data[dp] = input[inp].charCodeAt(0);
                inp++;
                break;
            case '[':
                if(data[dp] === 0)
                    ip = bracketMatch[ip];
                break;
            case ']':
                if(data[dp] !== 0)
                    ip = bracketMatch[ip];
                break;
        }
    }
    return output.join('');
}

function findFuckingBracket(code){
    var bracketMatch = [];
    var stack = [];
    for(let i = 0; i < code.length; i++){
        if(code[i] === '[')
            stack.push(i);
        if(code[i] === ']'){
            let temp = stack.pop();
            bracketMatch[i] = temp;
            bracketMatch[temp] = i;
        }
    }
    return bracketMatch;
}

module.exports = myfun;