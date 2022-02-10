class VuePrincipale{
    constructor(){
      this.html = document.getElementById("html-vue-principale").innerHTML;
    //   console.log(this.html);
      this.listeTechDonnee = null;
    }
  
    initialiserListeTech(listeTechDonnee){
        //  console.log(listeTechDonnee);
      this.listeTechDonnee = listeTechDonnee;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      let listeTech = document.getElementById("liste-tech");
      const listeTechItemHTML = listeTech.innerHTML;
      let listeTechHTMLRemplacement = "";
  
      for(var numeroTech in this.listeTechDonnee){
        let listeTechItemHTMLRemplacement = listeTechItemHTML;
        listeTechItemHTMLRemplacement = listeTechItemHTMLRemplacement.replace("{Tech.id}",this.listeTechDonnee[numeroTech].id);
        listeTechItemHTMLRemplacement = listeTechItemHTMLRemplacement.replace("{Tech.titre}",this.listeTechDonnee[numeroTech].titre);
        listeTechItemHTMLRemplacement = listeTechItemHTMLRemplacement.replace("{Tech.desc}",this.listeTechDonnee[numeroTech].description);
        // listeTechHTMLRemplacement = listeTechHTMLRemplacement.replace("{Jeu.note}",this.listeJeuDonnee[numeroJeu].note);
        listeTechHTMLRemplacement += listeTechItemHTMLRemplacement;
      }
  
      listeTech.innerHTML = listeTechHTMLRemplacement;
    }
  
  }