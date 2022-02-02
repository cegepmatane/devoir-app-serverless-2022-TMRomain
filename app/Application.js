class Application {
    constructor(window, vuePrincipale,technologiesDAO){
  
      this.window = window;


      this.vuePrincipale = vuePrincipale;
  
      this.technologiesDAO = technologiesDAO;
  
      // C'est l'équivalent de function(){this.naviguer()}
      this.window.addEventListener("hashchange", () =>this.naviguer());
  
      this.naviguer();
    }
  
    naviguer(){
      let hash = window.location.hash;
  
      if(!hash){
        //On est dans la vue principale 
        this.vuePrincipale.initialiserListeTech(this.technologiesDAO.lister());
        this.vuePrincipale.afficher();
  
      }else{
  
        // let navigation = hash.match(/^#jeu\/([0-9]+)/);
        // let idJeu = navigation[1];
  
        // let jeu = this.jeuDAO.chercher(parseInt(idJeu))
        // this.vueJeu.initialiserJeu(jeu);
        // this.vueJeu.afficher();
  
      }
    }
  
  }
  
  new Application(window, new VuePrincipale(),new TechnologiesDAO());
  