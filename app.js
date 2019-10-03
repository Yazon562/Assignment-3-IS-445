const outputDiv = document.getElementById('output')

const org1_depts = [
  {
    name: 'accounting',
    children: [
      { name: 'accounting payable', children: [] },
      { name: 'accounting receivable', children: [] },
    ],
  },
  {
    name: 'finance', 
    children: [],
  },
]

const org2_depts = [
  {
    name: 'accounting',
    children: [
      { name: 'accounting payable', children: [] },
      {
        name: 'accounting receivable',
        children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
      },
    ],
  },
  {
    name: 'finance',
    children: [{ name: 'investment', children: [] }],
  },
]

// FUNCTION 

function PrintDepts(depts, parent) { 

  var listyaz = document.createElement('ul')

  for(let i = 0; i < depts.length; i++){ 
    let currentItem = depts[i]
    var listItemyaz = document.createElement('li')
    listItemyaz.innerHTML = currentItem.name
    listyaz.appendChild(listItemyaz)
    if (currentItem.children.length) {
      PrintDepts(currentItem.children, listItemyaz)
    }
  }

  if(parent) { 
    parent.appendChild(listyaz)
  }
  else {
outputDiv.appendChild(listyaz)
  }
  
}
var h2 = document.createElement('h2')
h2.innerHTML = 'Organization 1';
outputDiv.appendChild(h2)
PrintDepts(org1_depts)

var h2 = document.createElement('h2')
h2.innerHTML = 'Organization 2';
outputDiv.appendChild(h2)
PrintDepts(org2_depts)
