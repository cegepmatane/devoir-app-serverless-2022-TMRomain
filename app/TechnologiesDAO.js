class TechnologiesDAO{
    constructor(){
      this.URLLister = 'https://0804819aud.execute-api.us-east-1.amazonaws.com/default/lister'
    }
  
    lister(action){

      fetch(this.URLLister,{mode:"cors"})
        .then(response => response.json())
        .then(data =>
          {
            // console.log(data);
            let listeTech = [];
            for(let position in data){
              let technologie = new Technologie(data[position].titre,
                                      data[position].description,
                                      data[position].creation,
                                      data[position].performance,
                                      data[position].support,
                                      data[position].id);
  
              //console.log(technologie);
              listeTech.push(technologie);
            }
            action(listeTech);
          });
    }


    ajouter(technologie,action){
      console.log(JSON.stringify(technologie));
      fetch("https://h7pucgg5ii.execute-api.us-east-1.amazonaws.com/default/ajouter",{
        method:'POST',
        headers:{
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: 'technologiejson=' +JSON.stringify(technologie),
        mode:'cors',
      }).then(response => response.text())
      .then(data=>{
        console.log('Detail:',data);
        action();
      })
    }

    chercher(id,action){
      fetch("https://y3zxsi699a.execute-api.us-east-1.amazonaws.com/default/chercher-par-id"+'?id='+id,{mode:"cors"})
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        let technologie = new Technologie(data.titre,data.description,data.creation,data.performance,data.support,data.id);
        action(technologie);
      });
      
    }
}
