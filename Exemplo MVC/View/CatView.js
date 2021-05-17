class CatView{
    constructor(model){
        this.src = model.img;
        this.img = document.getElementById('imgCat');

    }
    updateView(){
        this.img.src = this.src;
    }
}