const vendas = [

    { cliente: "Rafael", valor: 50 },
    
    { cliente: "Maria", valor: 150 },
    
    { cliente: "Joao", valor: 559.9 },
    
    { cliente: "Jessica", valor: -50 },
    
    { cliente: "Roberto", valor: -59.9 },
    
    ];

  
        const ClientesAT = vendas.reduce(function (accumulator,object){
            return accumulator + object.valor
        },0);
            console.log (ClientesAT)