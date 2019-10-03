// DATA

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

function listOrg(orgData,targetUL) {
  var i;
  for (i = 0; i < orgData.length; i++) {
    if (orgData[i].hasOwnProperty('name')) {
      // Take out the text from the .name property
      var nameText = document.createTextNode(orgData[i].name);
      // Define a new <li> tag
      var newLI = document.createElement('li');
      // Append text to new <li> tage - newLI
      newLI.appendChild(nameText);
      // Append element to <ul> tag
      targetUL.appendChild(newLI);
    }

    if (orgData[i].hasOwnProperty('children')) {
      // Define new <ul> tag
      var newUL = document.createElement('ul');
      // Append new <ul> tag
      var lowUl = targetUL.appendChild(newUL);
      // Select new lower level <ul> tag
      var lowUL = targetUL.querySelector('ul');
      // Recurse
      listOrg(orgData[i].children,lowUL );
    }
  }
}

// CALL FUNCTION
PrintDepts(org1_depts,document.getElementById("org1"));
PrintDepts(org2_depts,document.getElementById("org2"));

  