export const navLinks = [
  {
    link: 'about',
    name: '01.About'
  },
  {
    link: 'projects',
    name: '02.Projects'
  },
  {
    link: 'contact',
    name: '03.Contact'
  }
]

export const h1 = {
  nameTop: [
    {name:'H', id:'1'},{name:'i', id:'2'},{name:',', id:'3'},
  ],

  nameLeft: [
    {name:'I', id:'4'},{name:'m', id:'5'},{name:'S', id:'6'},{name:'a', id:'7'},{name:'e', id:'8'},{name:'e', id:'9'},{name:'d', id:'10'},{name:'.', id:'11'}
  ],
  
  nameRight: [
    {name:'W', id:'1'},{name:'e', id:'2'},{name:'b', id:'3'},{name:'D', id:'4'},{name:'e', id:'5'},{name:'v', id:'6'},{name:'e', id:'7'},{name:'l', id:'8'},{name:'o', id:'9'},{name:'p', id:'10'},{name:'e', id:'11'},{name:'r', id:'12'}
  ]

}

import AjorPlus from './images/Ajorplushdash.png'
import amashop from './images/amashop.png'

export const projects = [
  {
    id: '1',
    img: amashop,
    name: 'AMASHOP',
    dis: 'This is my newest project a private website its a brick factory witch has some forges and we are able to edit our forges delete or add more mouths for those. you can also make users for login and access',
    Link : [
      {
        name: 'Github',
        path: ''
      },
      {
        name: 'view Demo',
        path: '/shop'
      }
    ],
    skill : [
      'Reactjs', 'Restapi', 'Express', 'Tailwind' 
    ]
  },
  {
    id: '2',
    img: AjorPlus,
    name: 'AjorPlus',
    dis: 'This is my newest project a private website its a brick factory witch has some forges and we are able to edit our forges delete or add more mouths for those. you can also make users for login and access',
    Link : [
      {
        name: 'Github',
        path: ''
      },
      {
        name: 'view Demo',
        path: ''
      }
    ],
    skill : [
      'Reactjs', 'Redux', 'Mysql', 'Tailwind' 
    ]
  }
]

import express from './images/express.png'
import html5 from './images/html5.png'
import css3 from './images/css3.png'
import javascript from './images/javascript.png'
import react from './images/react.png'
import redux from './images/redux.png'
import tailwind from './images/tailwind.png'
import restapi from './images/restapi.png'
import next from './images/next.png'
import node from './images/node.png'

export const skill = [
  {
   name: 'Html5',
   img: html5 
  },
  {
   name: 'Css3',
   img: css3 
  },
  {
   name: 'Tailwind',
   img: tailwind 
  },
  {
   name: 'Javascript',
   img: javascript 
  },
  {
   name: 'ReactJs',
   img: react 
  },
  {
   name: 'Redux',
   img: redux 
  },
  {
   name: 'NodeJs',
   img: node 
  },
  {
   name: 'ExpressJs',
   img: express 
  },
  {
   name: 'Rest-api',
   img: restapi 
  },
  {
   name: 'NextJs',
   img: next 
  }
]