'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    // app.route('/')
    //     .get(todoList.index);

    app.route('/sensor/:id_sensor/:value_sensor/:id_dev')
        .get(todoList.sensor);

    app.route('/sensor/id_sensor/value_sensor')
        .post(todoList.sensor_post);

    app.route('/show_sensor/:id_sensor')
        .get(todoList.show_sensor);

    app.route('/show_sensor/:id_sensor/:id_dev')
        .get(todoList.show_sensor_dev);  // TRIAL TGL 9 MEI

    //tambahan

    app.route('/add_maps/:lat/:longi/:id_dev')
        .get(todoList.add_maps);

    app.route('/add_maps')
        .post(todoList.post_add_maps);

    app.route('/show_maps')
        .get(todoList.show_maps);

    // app.route('/new_maps')
    //     .get(todoList.new_maps);

    //tambah home
      
    app.route ('/home')
        .get(todoList.home);

    app.route('/')
        .get(todoList.home);

     //tambah home -

     //tambah telegram
     app.route('/add_telegram')
        .post(todoList.post_add_telegram);

    app.route('/show_telegram')
        .get(todoList.show_telegram);
        
    
    //TEST 25 MEI 2020
    app.route('/show_sensor_dev/:id_dev')
        .get(todoList.show_dev);

    //BUAT PAGE LOGIN 26 MEI 2020

    app.route('/test')
    .get(todoList.test);

    app.route('/auth')
    .post (todoList.auth);

    app.route('/auth')
    .get (todoList.auth);

    app.route('/edit/:no')
    .get (todoList.edit_telegram);

    app.route('/save')
    .post (todoList.save);

    app.route('/update')
    .post (todoList.update);

      //BUAT PAGE LOGIN 27 MEI 2020 - ADD PAGE NOMOR TELEPON
    app.route('/telp_list')
      .get (todoList.telp_list);

      app.route('/edit_notel/:inc')
    .get (todoList.edit_notel);

    app.route('/update_notel')
    .post (todoList.update_notel);

    //BUAT HOME STATISTIK


    //TEST NEW GEOCODER
    app.route('/geo')
    .post (todoList.geo);

    app.route('/show_geo')
    .get (todoList.show_geo);

    };

    

    

    



