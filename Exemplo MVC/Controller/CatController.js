class CatController{


    fazMagia(){
        let catModel = new CatModel;
        catModel.requereDados();
        let catView = new CatView(catModel);
        catView.updateView();
    }


}