class Application {
    constructor(window, vuePrincipale,vueDetail,VueAjouter,technologiesDAO){
  
      this.window = window;


      this.vuePrincipale = vuePrincipale;

      this.vueDetail = vueDetail;

      this.VueAjouter = VueAjouter; 
  
      this.technologiesDAO = technologiesDAO;
  
      // C'est l'équivalent de function(){this.naviguer()}
      this.window.addEventListener("hashchange", () =>this.naviguer());
  
      this.naviguer();
    }
  
    naviguer(){
      let hash = window.location.hash;
  
      if(!hash){
        //On est dans la vue principale 
        this.technologiesDAO.lister((listeTech) => this.afficherNouvelleListeTechnologie(listeTech));
        // this.technologiesDAO.lister(this.vuePrincipale.initialiserListeTech());
        // this.vuePrincipale.afficher();
        
      }else if (hash.match(/^#ajouter/)) {
        this.VueAjouter.afficher(this.technologiesDAO);
      }else{
  
        let navigation = hash.match(/^#tech\/([0-9]+)/);
        //let idItem = navigation[1];
  
        //this.vueDetail.initialiserItem(this.technologiesDAO.lister()[idItem]);
        this.vueDetail.afficher();
  
      }
    }



    afficherNouvelleListeTechnologie(listeTech){
        this.vuePrincipale.initialiserListeTech(listeTech);
        this.vuePrincipale.afficher();
    }
  }
  
  new Application(window, new VuePrincipale(),new VueDetail(),new VueAjouter(),new TechnologiesDAO());
  