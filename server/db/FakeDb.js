class FakeDb{
  
  Tanks = [{
    model: 'Mk.IV',
    name: 'Silverhand',
    class: 'Assault Tank',
    // TODO add for fun (Cannon: '40mm' && '68mm') 
  } , {
    model: '85K-b',
    name: 'Falchion',
    class: 'Assault Tank',
  }, {
    model:'85K-a',
    name:'Spatha',
    class:'Assault Tank',
  }, {
    model: '85V-g',
    name: 'Talos',
    class: 'Heavy Assault Tank',
  }


]

}

export const fakeDb = new FakeDb()