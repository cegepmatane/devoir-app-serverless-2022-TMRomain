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
}
