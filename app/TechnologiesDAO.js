class TechnologiesDAO{
    constructor(){
      this.URL = 'http://192.168.56.2/serveur/'
    }
  
    lister(action){
      fetch(this.URL + 'lister.php')
        .then(response => response.json())
        .then(data =>
          {
            console.log(data);
            let listeTech = [];
            for(let position in data){
              let technologie = new Technologie(data[position].titre,
                                      data[position].description,
                                      data[position].creation,
                                      data[position].performance,
                                      data[position].support,
                                      data[position].id);
  
              console.log(technologie);
              listeTech.push(cadeau);
            }
            action(listeCadeau);
          });
    }
}
