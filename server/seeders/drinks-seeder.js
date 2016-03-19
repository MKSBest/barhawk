'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('drinks', [{
      name: 'Anchor Steam',
      type: 'beer',
      price: 5,
      alcohol: 13,
      sugar: 0,
      calories: 153,
      carbs: 16,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340234/AnchorSteam_guuduk.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Heineken',
      type: 'beer',
      price: 7,
      alcohol: 13,
      sugar: 0,
      calories: 148,
      carbs: 11,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340235/Heineken_flwye6.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sam Adams',
      type: 'beer',
      price: 7,
      alcohol: 13,
      sugar: 0,
      calories: 150,
      carbs: 12,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340241/SamAdams_ccxrqz.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Corona Extra',
      type: 'beer',
      price: 7,
      alcohol: 13,
      sugar: 0,
      calories: 148,
      carbs: 13,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340234/CoronaExtra_xjkylu.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Corona Light',
      type: 'beer',
      price: 7,
      alcohol: 12,
      sugar: 0,
      calories: 99,
      carbs: 5,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340234/CoronaLight_zjsopw.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Miller Lite',
      type: 'beer',
      price: 7,
      alcohol: 13,
      sugar: 1,
      calories: 110,
      carbs: 7,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340237/MillerLight_j1ruh9.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Budweiser',
      type: 'beer',
      price: 4,
      alcohol: 14,
      sugar: 0,
      calories: 145,
      carbs: 11,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340233/Budweiser_zlogch.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bud Light',
      type: 'beer',
      price: 4,
      alcohol: 12,
      sugar: 0,
      calories: 110,
      carbs: 7,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340233/BudLight_f6igfc.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Guinness',
      type: 'beer',
      price: 8,
      alcohol: 14,
      sugar: 18,
      calories: 215,
      carbs: 18,
      volume: 16,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340235/Guiness_ar02xi.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Merlot',
      type: 'wine',
      price: 10,
      alcohol: 14,
      sugar: 1,
      calories: 123,
      carbs: 4,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340237/Merlot_wovvwh.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chardonnay',
      type: 'wine',
      price: 10,
      alcohol: 13,
      sugar: 1,
      calories: 123,
      carbs: 3,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340234/Chardonnay_ggh31x.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pinot Grigio',
      type: 'wine',
      price: 10,
      alcohol: 14,
      sugar: 1,
      calories: 114,
      carbs: 4,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340239/PinotGrigio_cf5d98.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pinot Noir',
      type: 'wine',
      price: 11,
      alcohol: 14,
      sugar: 1,
      calories: 123,
      carbs: 3,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340239/PinotNoir_fkapmk.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Syrah',
      type: 'wine',
      price: 13,
      alcohol: 13,
      sugar: 1,
      calories: 124,
      carbs: 4,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340240/Syrah_qxa8zv.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cabernet Sauvignon',
      type: 'wine',
      price: 11,
      alcohol: 14,
      sugar: 1,
      calories:  115,
      carbs: 4,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340233/Cabernet_gmkg0a.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Zinfandel',
      type: 'wine',
      price: 9,
      alcohol: 14,
      sugar: 0,
      calories: 160,
      carbs: 5,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340240/Zinfandel_pvonrf.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Prosecco',
      type: 'wine',
      price: 9,
      alcohol: 12,
      sugar: 0,
      calories: 150,
      carbs: 12,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340239/Prosecco_gsbdmg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Champagne',
      type: 'wine',
      price: 8,
      alcohol: 8,
      sugar: 1,
      calories: 87,
      carbs: 3,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340234/Champagne_tahig2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Long Island Iced Tea',
      type: 'mixed',
      price: 10,
      alcohol: 21,
      sugar: 9,
      calories: 180,
      carbs: 10,
      volume: 8,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340237/LIIT_cv6m9c.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Gin & Tonic',
      type: 'mixed',
      price: 10,
      alcohol: 15,
      sugar: 15,
      calories: 171,
      carbs: 16,
      volume: 8,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340236/GandT_wrn28m.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mojito',
      type: 'mixed',
      price: 14,
      alcohol: 10,
      sugar: 23,
      calories: 217,
      carbs: 8,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340241/mojito_a9i7d3.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'RedBull Vodka',
      type: 'mixed',
      price: 12,
      alcohol: 14,
      sugar: 26,
      calories: 181,
      carbs: 27,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340240/RBvodka_vavndw.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cosmo',
      type: 'mixed',
      price: 11,
      alcohol: 18,
      sugar: 11,
      calories: 213,
      carbs: 13,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340235/cosmo_arv1eh.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Vodka Soda',
      type: 'mixed',
      price: 7,
      alcohol: 14,
      sugar: 0,
      calories: 96,
      carbs: 0,
      volume: 5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340241/vodkaSoda_klhbpf.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'White Russian',
      type: 'mixed',
      price: 15,
      alcohol: 18,
      sugar: 16,
      calories: 257,
      carbs: 16,
      volume: 8,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340242/whiteRussian_xep5vd.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Moscow Mule',
      type: 'mixed',
      price: 14,
      alcohol: 12,
      sugar: 21,
      calories: 320,
      carbs: 34,
      volume: 10,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340240/moscowMule_oedpyy.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jack and Coke',
      type: 'mixed',
      price: 15,
      alcohol: 14,
      sugar: 32,
      calories: 255,
      carbs: 32,
      volume: 12,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340236/jackAndCoke_w8w9uj.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Crown Royal',
      type: 'liquor',
      price: 6,
      alcohol: 14,
      sugar: 0,
      calories: 96,
      carbs: 0,
      volume: 1.5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340266/Crown_qmpagz.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Captain Morgan',
      type: 'liquor',
      price: 7,
      alcohol: 9,
      sugar: 0,
      calories: 86,
      carbs: 0,
      volume: 1.5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340234/captain_jzoin5.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Admiral Nelson',
      type: 'liquor',
      price: 2,
      alcohol: 9,
      sugar: 0,
      calories: 69,
      carbs: 0,
      volume: 1.5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340234/admiralNelson_tqkzkd.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jagermeister',
      type: 'liquor',
      price: 8,
      alcohol: 8.7,
      sugar: 0,
      calories: 103,
      carbs: 0,
      volume: 1.5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340235/jager_fpmsam.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jose Cuervo',
      type: 'liquor',
      price: 8,
      alcohol: 13,
      sugar: 0,
      calories: 96,
      carbs: 0,
      volume: 1.5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340237/jose_rqawqi.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jameson',
      type: 'liquor',
      price: 8,
      alcohol: 14,
      sugar: 0,
      calories: 69,
      carbs: 0,
      volume: 1.5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340236/jameson_eqndeh.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Makers Mark',
      type: 'liquor',
      price: 8,
      alcohol: 14,
      sugar: 0,
      calories: 69,
      carbs: 0,
      volume: 1.5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340237/makers_k5btno.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Grey Goose',
      type: 'liquor',
      price: 8,
      alcohol: 13,
      sugar: 0,
      calories: 70,
      carbs: 0,
      volume: 1.5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340235/greygoose_xgqpre.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jack Daniels',
      type: 'liquor',
      price: 7,
      alcohol: 14,
      sugar: 0,
      calories: 100,
      carbs: 0,
      volume: 1.5,
      imageurl: 'http://res.cloudinary.com/hidgkk5lm/image/upload/v1458340237/jackD_i8oysl.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};