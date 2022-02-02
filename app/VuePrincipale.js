class VuePrincipale{
    constructor(){
      this.html = document.getElementById("html-vue-principale").innerHTML;
      this.listeTechDonnee = null;
    }
  
    initialiserListeJeu(listeTechDonnee){
      this.listeTechDonnee = listeTechDonnee;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
  
      let listeTech = document.getElementById("liste-tech");
      const listeTechItemHTML = listeTech.innerHTML;
      let listeTechHTMLRemplacement = "";
  
      for(var numeroTech in this.listeTechDonnee){
        let listeTechHTMLRemplacement = listeTechItemHTML;
        listeTechHTMLRemplacement = listeTechHTMLRemplacement.replace("{Tech.id}",this.listeTechDonnee[numeroTech].id);
        listeTechHTMLRemplacement = listeTechHTMLRemplacement.replace("{Tech.titre}",this.listeTechDonnee[numeroTech].titre);
        listeTechHTMLRemplacement = listeTechHTMLRemplacement.replace("{Tech.desc}",this.listeTechDonnee[numeroTech].description);
        // listeTechHTMLRemplacement = listeTechHTMLRemplacement.replace("{Jeu.note}",this.listeJeuDonnee[numeroJeu].note);
        listeTechHTMLRemplacement += listeTechHTMLRemplacement;
      }
  
      listeTech.innerHTML = listeTechHTMLRemplacement;
    }
  
  }