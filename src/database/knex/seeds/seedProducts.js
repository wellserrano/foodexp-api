exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').truncate()
  await knex('products').insert([
  {
    "name": "Salada Ravanello",
    "price": 49.97,
    "image": "f6e65577b33c1ea234d7-salada_ravanello.png",
    "description": "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
    "category": "principal"
  },
  {
    "name": "Torradas de Parma",
    "price": 25.97,
    "image": "ebd75c6249716a3a38fe-torradas_de_parma.png",
    "description": "Presunto de parma e rúcula em um pão com fermentação natural.",
    "category": "principal"
  },
  {
    "name": "Prugna Pie",
    "price": 49.97,
    "image": "c23435c251f27c972b83-prugna_pie.png",
    "description": "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
    "category": "sobremesa"
  },
  {
    "name": "Peachy pastrie",
    "price": 32.97,
    "image": "ae2f1c082305e75e24cb-peachy_pastrie.png",
    "description": "Delicioso folheado de pêssego com folhas de hortelã.",
    "category": "sobremesa"
  },
  {
    "name": "Macarons",
    "price": 79.97,
    "image": "e4507a2eb679b0a78d11-macarons.png",
    "description": "Farinha de amêndoas, manteiga, claras e açúcar.",
    "category": "sobremesa"
  },
  {
    "name": "Bolo de damasco",
    "price": 19.97,
    "image": "2248cb1ecd5b35b45a95-bolo_de_damasco.png",
    "description": "Damascos frescos em uma massa sem glúten.",
    "category": "sobremesa"
  }, 
  {
    "name": "Suco de maracujá",
    "price": 32.97,
    "image": "40887171a9121181c678-suco_de_maracuja.png",
    "description": "Suco de maracujá gelado, cremoso, docinho.",
    "category": "bebida"
  }, 
  {
    "name":"Espresso",
    "price":49.97,
    "image":"ac03f13e0f3378d3586c-espresso.png",
    "description":"Café cremoso feito na temperatura e pressões perfeitas.",
    "category":"bebida"
  }, 
  {
    "name":"Tè d'autunno",
    "price":19.97,
    "image":"b22554aad1caa7da14ba-te_dautunno.png",
    "description":"Chá de anis, canela e limão. Sinta o outono italiano.",
    "category":"bebida"  
  }, 
  {
    "name":"Pomo bourbon",
    "price":79.97,
    "image":"53f9f92d589a1623f1cb-pomo_bourbon.png",
    "description":"Maçã, whisky, canela. On the rocks.",
    "category":"bebida"
  }, 
  {
    "name":"Spaguetti Gambe",
    "price":79.97,
    "image":"8de9bfa325b954beffcc-spaguetti_gambe.png",
    "description":"Massa fresca com camarões e pesto.",
    "category":"principal"
  },
  {
    "name":"Salada Molla",
    "price":19.97,
    "image":"67ca1f34f82e378e6d9b-salada_molla.png",
    "description":"Tomates, coentro, pepino, cebola roxa. Frescos e temperados.",
    "category":"principal"
  }
  ]);
};
