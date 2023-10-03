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

import AjorPlus from '../assets/images/Ajorplushdash.png'
import amashop from '../assets/images/amashop.jpg'

export const projects = [
  {
    id: '1',
    img: amashop,
    name: 'AMASHOP',
    dis: 'این یک نسخه از فروشگاه هست که کاملا ریسپانسیوه صفحه های خانه و سبد خرید رو تو این نسخه قرار دادم که میتونید برسی کنید پیشنهاد می کنم حتمی مقداری با سبد خرید کار کنید چون نسخه تقریبا کاملش رو قرار دادم  ',
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
      'Reactjs', 'Redux', 'Restapi', 'Express', 'Tailwind'
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

import express from '../assets/images/express.png'
import html5 from '../assets/images/html5.png'
import css3 from '../assets/images/css3.png'
import javascript from '../assets/images/javascript.png'
import react from '../assets/images/react.png'
import redux from '../assets/images/redux.png'
import tailwind from '../assets/images/tailwind.png'
import restapi from '../assets/images/restapi.png'
import next from '../assets/images/next.png'
import node from '../assets/images/node.png'

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