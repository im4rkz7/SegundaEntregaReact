

let items = [
  
  {
    "id": "Denise",
    "material": "Caucho",
    "genero": "dama",
    "talles": [
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
},
  
  
  
 
  {
      "id": "Malva",
      "material": "EVA",
      "genero": "dama",
      "talles": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "",
          "",
          "",
          "",
          "",
          ""
      ]
  },
  {
      "id": "Mujica dama",
      "material": "EVA",
      "genero": "dama",
      "talles": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "",
          "",
          "",
          "",
          "",
          ""
      ]
  },
  {
      "id": "Beppo",
      "material": "EVA",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  },
 
  {
      "id": "Bruno",
      "material": "EVA",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  },
  {
      "id": "Cameron",
      "material": "EVA",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  },
  
  
  
  
  

  
  {
      "id": "Pirlo",
      "material": "EVA",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  },
 
   
  {
      "id": "Szifron dama",
      "material": "EVA",
      "genero": "dama",
      "talles": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "",
          "",
          "",
          "",
          "",
          ""
      ]
  },
  
  
  
  {
      "id": "Donato",
      "material": "Caucho",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  },
  {
      "id": "Giraldo",
      "material": "Caucho",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  },
  {
      "id": "Iacovo",
      "material": "Caucho",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  },
 
  

  

 
  {
    "id": "Brava",
    "material": "EVA-Caucho",
    "genero": "dama",
    "talles": [
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
},
  
  {
      "id": "Milo",
      "material": "EVA-Caucho",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  },
  {
      "id": "Oliver",
      "material": "EVA-Caucho",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  },
  {
      "id": "Puma",
      "material": "EVA-Caucho",
      "genero": "hombre",
      "talles": [
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "",
          "",
          "",
          "",
          ""
      ]
  }
]

export function fetchData(material, genero){
    
    const data = new Promise((resolve, reject)=>{

        if(material&&genero){
            setTimeout(()=>{
                resolve(items.filter(modelo => modelo.material === material && modelo.genero === genero))
            }, 2000);
            ;

        

        } else {
            setTimeout(()=>{
                reject({error: "error en resolver"})
            }, 2000)
        }
        
    })
    
    return data
     
}




export function fetchItemData(id){
    const ItemData = new Promise((resolve, reject)=>{

        if(id){
            setTimeout(()=>{
                resolve(items.find(modelo => modelo.id=== id))
            }, 2000);
            ;

        

        } else {
            setTimeout(()=>{
                reject({error: "error en resolver"})
            }, 2000)
        }
        
    })
    
    return ItemData
     
}

export function fullData(){
    
    const data = new Promise((resolve, reject)=>{

        if(items){
            setTimeout(()=>
                resolve(items), 2000);
          ;

        

        } else {
            setTimeout(()=>{
                reject({error: "error en resolver"})
            }, 2000)
        }
        
    })
    
    return data
     
}





