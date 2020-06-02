const fs = require('fs');
const path = require('path');

'use strict';

exports.true = function(values, res) {
  var data = {
      'status': 1,
      'values': values
  };
  fs.writeFile(path.join(__dirname, '/json','hasil.json'), [JSON.stringify(values)], err => {
    if (err) throw err;
    console.log('File Written to hasil');

    })
  res.json(values);
  res.end();
};

// TRIAL TGL 9 MEI
exports.true_sensor_dev = function(values, res) {
  var data = {
      'status': 1,
      'values': values
  };
  fs.writeFile(path.join(__dirname, '/json','sensor_filter.json'), [JSON.stringify(values)], err => {
    if (err) throw err;
    console.log('File Written to Sensor Filter 1');

    })
  res.json(values);
  res.end();
};
//TRIAL



exports.db_true = function(values, res) {
  var data = {
      'status': 1,
      'values': values.affectedRows
  };
  res.json(data);
  res.end();
};


exports.false = function(values, res) {
  var data = {
      'status': 0
  };
  res.json(data);
  res.end();
};

//tambahan
exports.true_maps = function(values, res) {
  var data = {
      'status': 1,
      'values': values
  };
  fs.writeFile(path.join(__dirname, '/json','maps.json'), [JSON.stringify(values)], err => {
    if (err) throw err;
    console.log('File Written to maps');

    })
  res.json(data);
  res.end();
};


exports.db_true_maps = function(values, res) {
  var data = {
      'status': 1,
      'values': values.affectedRows
  };
  res.json(data);
  res.end();
};


exports.false_maps = function(values, res) {
  var data = {
      'status': 0
  };
  res.json(data);
  res.end();
};

//sampai sini

//tambah telegram
exports.true_telegram = function(values, res) {
  var data = {
      'status': 1,
      'values': values
  };
  fs.writeFile(path.join(__dirname, '/json','telegram.json'), [JSON.stringify(values)], err => {
    if (err) throw err;
    console.log('File Written to telegram');

    })
  res.json(values);
  res.end();
};


exports.db_true_telegram = function(values, res) {
  var data = {
      'status': 1,
      'values': values.affectedRows
  };
  //tambahan 23-4-20
  res.redirect('/home');
  console.log(data);
  // res.json(data);
  res.end();
};



// TRIAL TGL 25 MEI
exports.true_dev = function(values, res) {
  var data = {
      'status': 1,
      'values': values
  };
  fs.writeFile(path.join(__dirname, '/json','sensor_filter2.json'), [JSON.stringify(values)], err => {
    if (err) throw err;
    console.log('File Written to Sensor Filter 2');

    })
  res.json(values);
  res.end();
};
//TRIAL