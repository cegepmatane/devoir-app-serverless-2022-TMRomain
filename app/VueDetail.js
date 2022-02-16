class VueDetail{
    constructor(){
      this.html = document.getElementById("html-vue-detail").innerHTML;
    //   console.log(this.html);
      this.techDonnee = null;
    }
  
    initialiserTech(techDonnee){
        //  console.log(listeTechDonnee);
      this.techDonnee = techDonnee;
    }
  
    afficher(technologie){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      // console.log(document.getElementsByTagName("body")[0].innerHTML);
      document.getElementById("tech-item-titre").innerHTML = technologie.titre;
      document.getElementById("tech-item-desc").innerHTML = technologie.description;
      document.getElementById("tech-item-creation").innerHTML = technologie.creation;
      document.getElementById("tech-item-perf").innerHTML = technologie.performance;
      document.getElementById("tech-item-support").innerHTML = technologie.support;
    }
  
  }