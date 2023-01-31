exports.up = knex => knex.schema.createTable("order_items", table => {
  table.increments("id");
  table.integer("order_id").references("id").inTable("orders").onDelete("CASCADE");
  table.integer("product_id").references("id").inTable("products");
  table.integer("quantity").notNullable();
  table.timestamp("created_at").default(knex.fn.now());

});


exports.down = knex =>  knex.schema.dropTable("order_items");
