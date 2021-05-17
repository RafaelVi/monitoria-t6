class CatModel{
    constructor(){
        this.img = "";
    }
    requereDados(){
        let request = new XMLHttpRequest;
        request.open("GET",`
        https://api.thecatapi.com/v1/images/search`,false);

        request.addEventListener("load",() =>{
            if(request.status == 200){
                let response = JSON.parse(request.responseText);
                this.img = response[0].url;
                console.log(response);              
            }
            else{
                console.log(`Algo deu errado :/ Erro:[${request.status}] ${request.statusText}`);
            }
        })        
        
        request.send();
    }

}