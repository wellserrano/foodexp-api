exports.up = knex => knex.schema.createTable("orders", table => {
  table.increments("id");
  table.string("status").notNullable().defaultTo("Preparando");
  table.float("total").notNullable();
  table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());

});


exports.down = knex => knex.schema.dropTable("orders");
  