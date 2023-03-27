exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
  
    {"name":"alface","product_id":1},
    {"name":"rabanete","product_id":1},
    {"name":"tomate","product_id":1},
    {"name":"pão naan","product_id":1},
    {"name":"pão","product_id":2},
    {"name":"presunto","product_id":2},
    {"name":"rúcula","product_id":2},
    {"name":"ameixa","product_id":3},
    {"name":"farinha","product_id":3},
    {"name":"pêssego","product_id":4},
    {"name":"farinha","product_id":4},
    {"name":"amêndoas","product_id":5},
    {"name":"claras","product_id":5},
    {"name":"damasco","product_id":6},
    {"name":"farinha","product_id":6},
    {"name":"maracujá","product_id":7},
    {"name":"café","product_id":8},
    {"name":"anis","product_id":9},
    {"name":"canela","product_id":9},
    {"name":"limão","product_id":9},
    {"name":"canela","product_id":10},
    {"name":"maçã","product_id":10},
    {"name":"whiskey","product_id":10},
    {"name":"camarão","product_id":11},
    {"name":"massa","product_id":11},
    {"name":"pesto","product_id":11},
    {"name":"alface","product_id":13},
    {"name":"tomate","product_id":13},
    {"name":"pepino","product_id":13},
  
  ]);
};
