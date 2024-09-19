let entrada = 5;
let count = 0;
let fibonacci=1;
let valor1=0,valor2=1;

while(count<=entrada){

    console.log(fibonacci)
    fibonacci = valor1 + valor2;
    
    valor1=valor2;
    valor2=fibonacci;
    count++;
    
}
