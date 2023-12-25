const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const accountSid = "AC8cb91eba53c888ea8f40002738bb9081";
const authToken = "c6c4260a2d4d24d349b98fa611b3b1e4";
const client = require("twilio")(accountSid, authToken);
var http = require("http");
const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios");
var fetch = require("node-fetch"); // npm install node-fetch
var util = require("util");
var Publishable_Key =
  "pk_live_51N3AdHF9Mz6wZpcuYpAACAhDPXZt4NjIGZjquaaf2YQyZYB2AKK2w6rnMTyREyIEYfV9gvOMOSmXnmXFw8D3hDAS00wA6hPbmm";
var Secret_Key =
  "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";
const stripe = require("stripe")(Secret_Key);
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.all("*", function (req, res, next) {
  /**
   * Response settings
   * @type {Object}
   */
  var responseSettings = {
    AccessControlAllowOrigin: req.headers.origin,
    AccessControlAllowHeaders:
      "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
    AccessControlAllowMethods: "POST, GET, PUT, DELETE, OPTIONS",
    AccessControlAllowCredentials: true,
  };

  /**
   * Headers
   */
  res.header(
    "Access-Control-Allow-Credentials",
    responseSettings.AccessControlAllowCredentials
  );
  res.header(
    "Access-Control-Allow-Origin",
    responseSettings.AccessControlAllowOrigin
  );
  res.header(
    "Access-Control-Allow-Headers",
    req.headers["access-control-request-headers"]
      ? req.headers["access-control-request-headers"]
      : "x-requested-with"
  );
  res.header(
    "Access-Control-Allow-Methods",
    req.headers["access-control-request-method"]
      ? req.headers["access-control-request-method"]
      : responseSettings.AccessControlAllowMethods
  );

  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

//connecting to Order database
const mc2 = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "V5Kp1LkOgxLn220aTwTgetcx",
  database: "uzetae_orders",
  port: "3306",
  multipleStatements: true,
});

//connecting to Order database
const mc = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "V5Kp1LkOgxLn220aTwTgetcx",
  database: "uzetae_uzet_payment_getaway",
  port: "3306",
  multipleStatements: true,
});

const https = require("https");
const path = require("path");

var port = process.env.PORT || 4111;
console.log("Running on port:" + port);
app.listen(port);

const Tesseract = require("tesseract.js");
function checkpassport() {
  Tesseract.recognize("./passport.jpeg", "eng", {
    logger: (m) => console.log(m),
  }).then(({ data: { text } }) => {
    console.log(text);
    console.log(text.includes("MUSTAFA"));
    console.log(text.includes("AHMED"));
    console.log(text.includes("KHAYOON"));
    console.log(text.includes("A11809425"));
  });
}

function makeid(length) {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
console.log(makeid(5));


/////  ******** SILA ORDER *******  ////////////
app.post("/api/v1/add/order", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  if (origin == "https://admin.amwaly.io") {
    var data = {
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Business_Name: req.body.Business_Name,
      Email: req.body.Email,
      Website: req.body.Website,
      Country: req.body.Country,
      Phone_Number: req.body.Phone_Number,
      ATV: req.body.ATV, //Average transaction value
      MEV: req.body.MEV, // Monthly Expected Volumes
      MNT: req.body.MNT, //Monthly number of transactions
      Date2: req.body.Date2,
      Time2: req.body.Time2,
    };

    mc2.query(
      "INSERT INTO orders SET ?",
      data,
      async function (error, results, fields) {
        if (error) {
          res.send({
            code: 400,
            failed: "error in sending data",
          });

          try {
          } catch (err) {
            if (err.code === "ER_DUP_ENTRY") {
              //handleHttpErrors(SYSTEM_ERRORS.USER_ALREADY_EXISTS);
            } else {
              //handleHttpErrors(err.message);
            }
          }
        } else {
          console.log("The solution is: ", results);
          if (error) throw error;
          res.send({
            code: 200,
            success: "data registered sucessfully",
          });

          let transporter = nodemailer.createTransport({
            host: "mail.uzet.ae",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "info@uzet.ae", // generated ethereal user
              pass: "1997223mnmn@S", // generated ethereal password
            },
          });

          let info3 = await transporter.sendMail({
            from: '"UZET Payment Gateway" <info@uzet.ae>', // sender address
            to: `ashurmustafaahmed@gmail.com`, // list of receivers ${emailid}
            subject: `New Order - ${data.UZET_Package}`, // Subject line
            text: `New Order - ${data.UZET_Package} `, // plain text body
            html: `
        
      
     
        New Order in UZET: ${data.FULL_NAME} ${data.time2} ${data.UZET_Package}
        
        `, // html body
          });

          console.log(info3.messageId);

          let info4 = await transporter.sendMail({
            from: '"UZET Payment Gateway" <info@uzet.ae>', // sender address
            to: `munaf9998@gmail.com`, // list of receivers ${emailid}
            subject: `New Order - ${data.UZET_Package}`, // Subject line
            text: `New Order - ${data.UZET_Package} `, // plain text body
            html: `
      
    
   
      New Order in UZET: ${data.FULL_NAME} ${data.time2} ${data.UZET_Package}
      
      `, // html body
          });

          console.log(info4.messageId);
        }
      }
    );
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});

/////  ******** SILA LOGIN *******  ///////////
app.post("/api/v1/platform/login", function (request, response) {
  var email = request.body.email;
  var password = request.body.password;

  var origin = request.get("origin");
  console.log(origin);
  if (origin == "https://admin.amwaly.io") {
    mc.query(
      "SELECT Merchant_ID,First_Name,Last_Name,Business_Name,Email,Website,Country,Phone_Number,Ticket_Size,Registration_Date,Registration_Time,Status,Rate FROM users WHERE EMAIL = ?",
      [email],
      function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          response.send({
            code: 400,
            failed: error,
          });
        } else {
          // console.log('The solution is: ', results);
          if (results.length > 0) {
            if (results[0].PASSWORD == password) {
              console.log(results[0]);
              // console.log(results.id);
              response.send({
                code: 200,
                success: "login sucessfull",
                results: results[0],
              });
            } else {
              response.send({
                code: 204,
                success: "Email and password does not match",
              });
            }
          } else {
            response.send({
              code: 204,
              success: "Email does not exits",
            });
          }
        }
      }
    );
  } else {
    response.send({
      code: 400,
      failed: "Access",
    });
  }
});

/////  ******** SILA OTP *******  ///////////
app.post("/api/v1/send/otp", async function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  if (origin == "https://admin.amwaly.io") {
    let otp_code = makeid(5);
    let transporter = nodemailer.createTransport({
      host: "mail.uzet.ae",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "info@uzet.ae", // generated ethereal user
        pass: "1997223mnmn@S", // generated ethereal password
      },
    });

    let info3 = await transporter.sendMail({
      from: '"UZET Payment Gateway" <info@uzet.ae>', // sender address
      to: `ashurmustafaahmed@gmail.com`, // list of receivers ${emailid}
      subject: `New Order - ${data.UZET_Package}`, // Subject line
      text: `New Order - ${data.UZET_Package} `, // plain text body
      html: `


    ${otp_code}



`, // html body
    });

    console.log(info3.messageId);
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});

/////  ******** SILA Transactions *******  ///////////
app.post("/api/v1/get/transactions", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  if (origin == "https://admin.amwaly.io") {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM transactions where MID =  '${data.UZ_IDSK}'  `;
    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        console.log(data);
        return res.send(results.reverse());
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});
app.post('/api/v1/add/transactions', function (req, res) {

  
  var data = {

 "Payment_ID":req.body.Payment_ID,
 "Amount":req.body.Amount,
 "Currency":req.body.Currency,
 "Status":req.body.Status,
 "Client_City":req.body.Client_City,
 "Client_Country":req.body.Client_Country,
 "Client_Line1":req.body.Client_Line1,
 "Client_Line2":req.body.Client_Line2,
 "Client_Email":req.body.Client_Email,
 "Client_name":req.body.Client_name,
 "Payment_Type":req.body.Payment_Type,
 "Payment_Risk_level":req.body.Payment_Risk_level,
 "Card_Brand":req.body.Payment_Reason,
 "Card_Country":req.body.Payment_Reason,
 "Card_Exp_month":req.body.Payment_Reason,
 "Card_Exp_year":req.body.Payment_Reason,
 "Card_Last4":req.body.Payment_Reason,
 "MID":req.body.Payment_Reason,
 "SILA_ID	":req.body.Payment_Reason,
 "Date2":req.body.Payment_Reason,
 "Date2":req.body.Payment_Reason,
 "Time2":req.body.Payment_Reason,


 

}



mc.query('INSERT INTO transactions SET ?', data, function (error, results, fields) {
 if (error) {

     res.send({
         "code": 400,
         "failed": error
     });

     try {
         
     } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            //handleHttpErrors(SYSTEM_ERRORS.USER_ALREADY_EXISTS);
        } else {
            //handleHttpErrors(err.message);
         }
     }

 } else {
     console.log('The solution is: ', results);
     if (error) throw error;
     res.send({
         "code": 200,
         "success": "answers registered sucessfully"
     });
 }
});





});

/////  ******** SILA payment links *******  ///////////
app.post("/api/v1/get/links", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  if (origin == "https://admin.amwaly.io") {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM payment_links where MID =  '${data.UZ_IDSK}'  `;
    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        console.log(data);
        return res.send(results.reverse());
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});
app.post('/api/v1/add/links', function (req, res) {

  
  var data = {

 "MID":req.body.MID,
 "Token":req.body.Token,
 "Products_Price":req.body.Products_Price,
 "Products_Name":req.body.Products_Name,
 "Client_Email":req.body.Client_Email,
 "Date2":req.body.Date2,
 "Time2":req.body.Time2,
 "Status":req.body.Status,



 

}



mc.query('INSERT INTO payment_links SET ?', data, function (error, results, fields) {
 if (error) {

     res.send({
         "code": 400,
         "failed": error
     });

     try {
         
     } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            //handleHttpErrors(SYSTEM_ERRORS.USER_ALREADY_EXISTS);
        } else {
            //handleHttpErrors(err.message);
         }
     }

 } else {
     console.log('The solution is: ', results);
     if (error) throw error;
     res.send({
         "code": 200,
         "success": "answers registered sucessfully"
     });
 }
});





});

/////  ******** SILA Refunds *******  ///////////
app.post("/api/v1/get/refunds", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  if (origin == "https://admin.amwaly.io") {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM refunds where MID =  '${data.UZ_IDSK}'  `;
    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        console.log(data);
        return res.send(results.reverse());
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});
app.post('/api/v1/add/refunds', function (req, res) {

  
  var data = {

 "MID":req.body.MID,
 "SILA_ID":req.body.SILA_ID,
 "Payment_ID":req.body.Payment_ID,
 "Card_Brand":req.body.Card_Brand,
 "Card_Country":req.body.Card_Country,
 "Card_Exp_month":req.body.Card_Exp_month,
 "Card_Exp_year":req.body.Card_Exp_year,
 "Card_Last4":req.body.Card_Last4,
 "Payment_Date":req.body.Payment_Date,
 "Payment_Time":req.body.Payment_Time,
 "Client_Full_Name":req.body.Client_Full_Name,
 "Client_Email":req.body.Client_Email,
 "Refund_Date":req.body.Refund_Date,
 "Refund_Time":req.body.Refund_Time,
 "Refund_Reason":req.body.Refund_Reason,





 

}



mc.query('INSERT INTO refunds SET ?', data, function (error, results, fields) {
 if (error) {

     res.send({
         "code": 400,
         "failed": error
     });

     try {
         
     } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            //handleHttpErrors(SYSTEM_ERRORS.USER_ALREADY_EXISTS);
        } else {
            //handleHttpErrors(err.message);
         }
     }

 } else {
     console.log('The solution is: ', results);
     if (error) throw error;
     res.send({
         "code": 200,
         "success": "answers registered sucessfully"
     });
 }
});





});

/////  ******** SILA Settlements *******  ///////////
app.post("/api/v1/get/Settlements", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  if (origin == "https://admin.amwaly.io") {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM withdrawls where MID =  '${data.UZ_IDSK}'  `;
    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        console.log(data);
        return res.send(results.reverse());
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});
app.post('/api/v1/add/Settlements', function (req, res) {

  
  var data = {

 "MID":req.body.MID,
 "Amount":req.body.Amount,
 "Payout_Type":req.body.Payout_Type,
 "Date2":req.body.Date2,
 "Time2":req.body.Time2,
 "SBP":req.body.SBP,
 "Status":req.body.Status,
 "Note":req.body.Note,






 

}



mc.query('INSERT INTO Settlements SET ?', data, function (error, results, fields) {
 if (error) {

     res.send({
         "code": 400,
         "failed": error
     });

     try {
         
     } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            //handleHttpErrors(SYSTEM_ERRORS.USER_ALREADY_EXISTS);
        } else {
            //handleHttpErrors(err.message);
         }
     }

 } else {
     console.log('The solution is: ', results);
     if (error) throw error;
     res.send({
         "code": 200,
         "success": "answers registered sucessfully"
     });
 }
});





});


/////  ******** SILA Clients *******  ///////////
app.post("/api/v1/get/clients", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  if (origin == "https://admin.amwaly.io") {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT Client_Email,Amount  FROM transactions where MID =  '${data.UZ_IDSK}' GROUP BY Client_Email `;
    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        console.log(data);
        return res.send(results.reverse());
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});

