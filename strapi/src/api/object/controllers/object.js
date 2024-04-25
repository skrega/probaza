'use strict';

/**
 * object controller
 */
// find by slug
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::object.object', ({strapi})=>({

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::object.object').findOne({
        where: {slug},
        populate: ['images','categories', 'ownerContacts', 'createdBy']
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity)
  }
}));



