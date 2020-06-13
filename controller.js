
'use strict';

var response = require('./res');
var connection = require('./koneksi');

 
//tambahan
var telegram = require('telegram-bot-api');
var util = require('util');

//Change telegraf
const { Telegraf } = require('telegraf')
const BOT_TOKEN = '1050692602:AAHAMWp1JLMyiwpeF7XK4lmFEKwTykPor-E';
const bot = new Telegraf(BOT_TOKEN);
//Change telegraf

var api = new telegram({
	token: '1050692602:AAHAMWp1JLMyiwpeF7XK4lmFEKwTykPor-E'
});

var nama_sensor;
//tambahan

exports.sensor = function(req, res) {
    connection.query('INSERT INTO sensor (id_sensor, value_sensor, id_dev) VALUES (?,?,?)', [req.params.id_sensor, req.params.value_sensor, req.params.id_dev ], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true(rows, res)
            
    });
};

const moment = require('moment');

exports.sensor_post = function(req, res) {
    const day = moment().format('YYYY-MM-DD HH:mm:ss');
    const today = moment().format('HH:mm:ss');
    connection.query('INSERT INTO sensor (id_sensor, value_sensor, id_dev, time, waktu) VALUES (?,?,?,?,?)', [req.body.id_sensor, req.body.value_sensor, req.body.id_dev, day, today], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true(rows, res)

            var keterangan;

            if (req.body.id_sensor == 1) {
                if (req.body.value_sensor > 200) {
                    keterangan = day + 

                    "\nHarap waspada air pada saluran air telah melewati batas normal. "+

                    "\nStatistik dan lokasi dapat dilihat pada https://cekflood.herokuapp.com/show_sensor_dev/"+req.body.id_dev+"";
                }
                
            }

            if (req.body.id_sensor == 2) {

                if (req.body.value_sensor > 3) {
                keterangan = day + 
                
                "\nHarap waspada banjir telah mencapai jalan raya dengan ketinggian " + req.body.value_sensor + " cm , Mohon mencari jalan alternatif lain." +

                "\nStatistik dan lokasi dapat dilihat pada https://cekflood.herokuapp.com/show_sensor_dev/"+req.body.id_dev+"";
                }
            }

            connection.query("SELECT * FROM telegram", function (err, result, fields) {
                if (err) throw err;
             
                let l= result.length;  
                console.log(l);
             
                 let i = 0;
                 while (i<l) {
                     let f=result[i].id_telegram;  
                     console.log(f);
             
                     bot.telegram.sendMessage(f, keterangan);
                 
                     i++;
                 }
             
                 });
           
    });
};



exports.show_sensor = function(req, res) {
    
    connection.query('SELECT * FROM sensor where id_sensor = ?', [req.params.id_sensor], function (error, rows, fields){
        if(error){
            console.log(error)
        } else if(rows.length > 0){
            response.true(rows, res);
        }
        else{
            response.false(rows, res)
        }
    });
};

//TRIAL TGL 9 MEI
// exports.show_sensor_dev = function(req, res) {
    
//     connection.query('SELECT * FROM sensor where id_sensor = ? and id_dev = ?', [req.params.id_sensor, req.params.id_dev], function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else if(rows.length > 0){
//             response.true_sensor_dev(rows, res);
//         }
//         else{
//             response.false(rows, res)
//         }
//     });
// };
//TRIAL

exports.show_sensor_dev = function(req, res) {
    
    connection.query('SELECT*FROM(SELECT * FROM sensor where id_sensor = ? and id_dev = ? ORDER BY auto_inc DESC LIMIT 24)var1 ORDER BY auto_inc ASC', [req.params.id_sensor, req.params.id_dev], function (error, rows, fields){
        if(error){
            console.log(error)
        } else if(rows.length > 0){
            response.true_sensor_dev(rows, res);
        }
        else{
            response.false(rows, res)
        }
    });
};

//tambahan
exports.add_maps = function(req, res) {
    connection.query('INSERT INTO maps (lat, longi, id_dev) VALUES (?,?,?)', [req.params.lat, req.params.longi, req.params.id_dev ], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true_maps(rows, res)
            
    });
};

exports.post_add_maps = function(req, res) {
    connection.query('INSERT INTO maps (lat, longi, id_dev) VALUES (?,?,?)', [req.body.lat, req.body.longi, req.body.id_dev ], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true_maps(rows, res)
            
    });
};

exports.show_maps = function(req, res) {
    
    connection.query('SELECT * FROM maps', function (error, rows, fields){
        if(error){
            console.log(error)
        } else if(rows.length > 0){
            response.true_maps(rows, res);
        }
        else{
            response.false_maps(rows, res)
        }
    });
};
//samapai sini

exports.index = function(req, res) {
    response.true("Bisa", res)
};


exports.home = function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, 'web_coba.html'));
};

//tambahan telegram

exports.post_add_telegram = function(req, res) {
    connection.query('INSERT INTO telegram (id_telegram) VALUES (?)', [req.body.id_telegram], function (error, rows, fields){
        if(error){
            console.log(error)
        } 
            response.db_true_telegram(rows, res)
            
            
    });
   
};

exports.show_telegram = function(req, res) {
    
    connection.query('SELECT * FROM telegram', function (error, rows, fields){
        if(error){
            console.log(error)
        } else if(rows.length > 0){
            response.true_telegram(rows, res);
        }
    });
};


//Untuk export ke file geocoder
// exports.new_maps = function () {
//     var test1 = require('./exp_nomina');

//     test1.func();
// }



//TRIAL TGL 25 MEI
// exports.show_dev = function(req, res) {
    
//     connection.query('SELECT * FROM sensor where id_dev = ?', [req.params.id_dev], function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else if(rows.length > 0){
//             response.true_dev(rows, res);
//         }
//         else{
//             response.false(rows, res)
//         }
//     });
// };
//TRIAL

//UNTUK PAGE LOGIN 26 MEI 2020

exports.test = function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, '/views/page2.html'));
};


exports.auth = function (req, res) {
       var uname = req.body.uname;
       var pass = req.body.pass;
    

    connection.query('SELECT * FROM admin WHERE uname = ?',[uname], function (error, rows, fields) {
        if (error) {
            res.json({
              status:false,
              message:'there are some error with query'
              })
        }else{
         
          if(rows.length >0){
                 if(pass==rows[0].pass){
               
                connection.query('SELECT * FROM telegram', (err,rows) => {
                    if(err) throw err;
                
                    res.render('user',{
                        data : rows
                    });
                  });

              }else{
                  res.json({
                    status:false,
                    message:"Email and password does not match"
                   });
              }
            
          }
          else{
            res.json({
                status:false,    
              message:"Username does not exits"
            });
          }
        }
      });
}

exports.edit_telegram = function (req, res) {
 connection.query('SELECT * FROM telegram WHERE no = ?',[req.params.no], function (error, rows, fields) {
    if (error) throw err;
    res.render('edit', {
        data : rows[0]
    })

});
}

exports.save = function (req, res) {
    connection.query ('INSERT INTO telegram (no, id_telegram) VALUES (?,?)', [req.body.no,req.body.id_telegram], function (error, rows, fields){
        if(error) throw error;
        res.redirect('/auth');
    });
}

exports.update = function (req, res) {
    connection.query ('UPDATE telegram SET id_telegram ="'+ req.body.id_telegram +'" WHERE  no="'+req.body.no+'"', function (error, rows, fields){
        if(error) throw error;
        res.redirect('/auth');
    });
}

//PAGE LOGIN - END

//27 MEI 2020

exports.telp_list = function(req, res) {
    connection.query('SELECT * FROM sms', (err,rows) => {
        if(err) throw err;
    
        res.render('list_telp',{
            data : rows
        });
      });
};

exports.edit_notel = function (req, res) {
    connection.query('SELECT * FROM sms WHERE inc = ?',[req.params.inc], function (error, rows, fields) {
       if (error) throw err;
       res.render('edit_notel', {
           data : rows[0]
       })
   
   });
   }

exports.update_notel = function (req, res) {
    connection.query ('UPDATE sms SET nomor_telp ="'+ req.body.nomor_telp +'" WHERE  inc="'+req.body.inc+'"', function (error, rows, fields){
        if(error) throw error;
        res.redirect('/telp_list');
    });
}





// PUSH TO HOME STAT

exports.show_dev = function(req, res) {
    let param = req.params.id_dev;

    res.render('home_stat', {
        data : param
    })
};


//TEST NEW GEOCODER

var nodeGeocoder = require('node-geocoder');


var options = {
  provider: 'openstreetmap'
};

var geoCoder = nodeGeocoder(options);

const fs = require('fs');
const path = require('path');

exports.geo = function(req, res) {

    var lat = req.body.lat;
    var longi = req.body.longi;
    var dev = req.body.id_dev;

    geoCoder.reverse({lat:lat, lon:longi})
            .then(function(res) {
              
                console.log(res[0].city);
                console.log(res[0].latitude);
                console.log(res[0].longitude);
                // console.log(id_dev);
                
                let kota = res[0].city;
                let lat = res[0].latitude;
                let lon = res[0].longitude;

                    connection.query('INSERT INTO test (lat, longi, loc, id_dev) VALUES ("'+lat+'","'+lon+'","'+kota+'","'+dev+'")', function (error, result, fields) {
                      if(error){
                          console.log(error)
                      }
                      console.log("Database added"); 
                    });


                    connection.query('SELECT * FROM test', function (error, rows, fields){
                        if(error){
                            console.log(error)
                        } else if(rows.length > 0){
                          fs.writeFile(path.join(__dirname, '/json','test_maps.json'), [JSON.stringify(rows)], error => {
                          
                            if (error) throw error;
                            console.log('File Written to Test Maps');
                           
                        
                            })
                        }
                    });
            })
 

            res.end();
}


exports.show_geo = function (req, res) {
    connection.query('SELECT * FROM test', function (error, rows, fields){
        if(error){
            console.log(error)
        } else if(rows.length > 0){
          fs.writeFile(path.join(__dirname, '/json','test_maps.json'), [JSON.stringify(rows)], error => {
          
            if (error) throw error;
            console.log('File Written to Test Maps');

            res.json(rows);
            res.end();
           
        
            })
        }
    });


	

}
