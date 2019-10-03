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
  var listEl = document.createElement('ul')

  for(let i= 0; i < depts.length; i++){ 
    let currentItem = depts[i]
    var listItemEl = document.createElement('li')
    listItemEl.innerHTML = currentItem.name
    listEl.appendchild(listItemEl)

    if (currentItem.children.length) {
      PrintDepts(currentItem.children, listItemEl)
    }
  }

  if(parent) { 
    parent.appendChild(listEl)
  }
  else{
outputDiv.appendChild(listEl)
  }