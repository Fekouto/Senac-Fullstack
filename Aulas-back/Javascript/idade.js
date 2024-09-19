let idade=0;

do{

    idade = prompt('Coloque sua idade: ')

    if(idade>100 || idade<0){
        idade=0;
        alert('Idade invalida tem que ser uma idade entre 0 a 100')
    }

}while(idade==0)

document.write(idade)