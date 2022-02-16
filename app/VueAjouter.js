class VueAjouter{
  
    constructor(){
      this.html = document.getElementById("html-vue-ajouter").innerHTML;

      //console.log(this.html);
      this.techDonnee = null;
    }
  
    initialiserTech(techDonnee){
      //console.log(listeTechDonnee);
      this.techDonnee = techDonnee;
    }
    
    afficher(techDao){
      function retour(){
        window.location.hash ="#";
      }
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      let boutonAjouter =document.getElementById("bouton-ajouter");


      let techTitre =document.getElementById("titre");
      let techDesc =document.getElementById("description");
      let techCreation =document.getElementById("creation");
      let techPerf =document.getElementById("performance");
      let techSupport =document.getElementById("support");

      boutonAjouter.addEventListener("click",
      function(event){
        event.preventDefault();
        let technologie = new Technologie();
        technologie.titre = techTitre.value;
        technologie.description = techDesc.value;
        technologie.creation = techCreation.value;
        technologie.performance = techPerf.value;
        technologie.techSupport = techSupport.value;
        techDao.ajouter(technologie,retour);
        }
      );


      // console.log(document.getElementsByTagName("body")[0].innerHTML);
    }

  }