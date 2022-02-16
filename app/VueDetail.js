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
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      // console.log(document.getElementsByTagName("body")[0].innerHTML);
      document.getElementById("tech-item-titre").innerHTML = "this.techDonnee.titre";
      document.getElementById("tech-item-desc").innerHTML = "this.techDonnee.description";
      document.getElementById("tech-item-creation").innerHTML = "this.techDonnee.creation";
      document.getElementById("tech-item-perf").innerHTML = "this.techDonnee.performance";
      document.getElementById("tech-item-support").innerHTML = "this.techDonnee.support";
    }
  
  }