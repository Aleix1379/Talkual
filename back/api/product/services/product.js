'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   *
   * @param params
   * page: Por defecto 0
   * size: Por defecto 2 elementos por pagina
   * @param populate
   * @returns {Promise<{size: number, numberOfElements: null, data: {}, totalPages: null, totalElements: null}>}
   */
  async find(params, populate) {
    const start = (params.page || 0) * (params.size || 2)
    const limit = params.size || 2

    const response = {
      totalElements: null,
      size: Number(limit),
      numberOfElements: null,
      totalPages: null,
      items: {}
    };

    response.totalElements = await strapi.query("product").count().then(count => count);

    response.items = await strapi.query('product').find({_start: start, _limit: limit}, populate);
    response.numberOfElements = response.items.length;
    response.totalPages = Math.round(response.totalElements / response.size);

    return response;
  },
};
