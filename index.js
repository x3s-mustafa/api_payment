const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const accountSid = "AC8cb91eba53c888ea8f40002738bb9081";
const authToken = "c6c4260a2d4d24d349b98fa611b3b1e4";
const client = require("twilio")(accountSid, authToken);
var http = require("http");
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios");
var fetch = require("node-fetch"); // npm install node-fetch
var util = require("util");
var Publishable_Key = "#";
var Secret_Key = "#";
const stripe = require("stripe")(Secret_Key);
const DeviceDetector = require("node-device-detector");
const DeviceHelper = require("node-device-detector/helper");
const ClientHints = require("node-device-detector/client-hints");
var requestIp = require("request-ip");

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
  host: "44.202.12.148",
  user: "silasql",
  password: "1997223mnmn",
  database: "sila",
  multipleStatements: true,
});

const https = require("https");
const path = require("path");

var port = process.env.PORT || 80;
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

function maketoken(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const Cryptr = require("cryptr");
const cryptr = new Cryptr(
  "2a3260f5ac4754b8ee3021ad413ddbc11f04138d01fe0c5889a0dd7b4a97e342a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc9055f82cdc92a1fe735825af1f75cfb9c94ad765c06a8abe9668fca5c42d45a7ec233f0"
);

const encryptedString = cryptr.encrypt("4444");
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString);
console.log("===================");
console.log(decryptedString);

async function sendotp() {
  var user = "Devo";
  var otp_code = "231333";
  let transporter = nodemailer.createTransport({
    host: "mail.silapay.us",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "support@silapay.us", // generated ethereal user
      pass: "1997223mnmn@S", // generated ethereal password
    },
  });

  let info3 = await transporter.sendMail({
    from: '"SilaPay | Support" <support@silapay.us>', // sender address
    to: `ashurmustafaahmed@gmail.com`, // list of receivers ${emailid}
    subject: `New OTP `, // Subject line
    text: `New OTP `, // plain text body
    html: `


    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>SILA OTP</title>

  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
</head>
<body
  style="
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #ffffff;
    font-size: 14px;
  "
>
  <div
    style="
      max-width: 680px;
      margin: 0 auto;
      padding: 45px 30px 60px;
      background: #f4f7ff;
      background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
      background-repeat: no-repeat;
      background-size: 800px 452px;
      background-position: top center;
      font-size: 14px;
      color: #434343;
    "
  >
    <header>
      <center>
        <img
          alt=""
          src="https://getsila.net/email_otp.png"
          height="80px"
        />
      </center>
    </header>

    <main>
      <div
        style="
          margin: 0;
          margin-top: 70px;
          padding: 92px 30px 115px;
          background: #ffffff;
          border-radius: 30px;
          text-align: center;
        "
      >
        <div style="width: 100%; max-width: 489px; margin: 0 auto">
          <h1
            style="
              margin: 0;
              font-size: 24px;
              font-weight: 500;
              color: #1f1f1f;
            "
          >
            Your OTP
          </h1>
          <p
            style="
              margin: 0;
              margin-top: 17px;
              font-size: 16px;
              font-weight: 500;
            "
          >
            Hey ${user},
          </p>
          <p
            style="
              margin: 0;
              margin-top: 17px;
              font-weight: 500;
              letter-spacing: 0.56px;
            "
          >
            Thank you for choosing Sila Pay. Use the following OTP
            to complete login in your account. OTP is
            valid for
            <span style="font-weight: 600; color: #1f1f1f">5 minutes</span>.
            Do not share this code with others, including Sila
            employees.
          </p>
          <center>


          <p
            style="
              margin: 0;
              margin-top: 60px;
              font-size: 32px;
              font-weight: 600;
              letter-spacing: 25px;
              color: #01c0c8;
            "
          >
            ${otp_code}
          </p>

          </center>
        </div>
      </div>

      <p
        style="
          max-width: 400px;
          margin: 0 auto;
          margin-top: 90px;
          text-align: center;
          font-weight: 500;
          color: #8c8c8c;
        "
      >
        Need help? Ask at
        <a
          href="mailto:support@silapay.co"
          style="color: #499fb6; text-decoration: none"
          >Support@silapay.us</a
        >
        or visit our
        <a
          href=""
          target="_blank"
          style="color: #499fb6; text-decoration: none"
          >Help Center</a
        >
      </p>
    </main>

    <footer
      style="
        width: 100%;
        max-width: 490px;
        margin: 20px auto 0;
        text-align: center;
        border-top: 1px solid #e6ebf1;
      "
    >
      <p
        style="
          margin: 0;
          margin-top: 40px;
          font-size: 16px;
          font-weight: 600;
          color: #434343;
        "
      >
        SilaPay
      </p>
      <p style="margin: 0; margin-top: 8px; color: #434343"></p>
      <div style="margin: 0; margin-top: 16px">
        <a href="https://www.facebook.com/getsila" target="_blank" style="display: inline-block">
          <img
            width="36px"
            alt="Facebook"
            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/get_sila/"
          target="_blank"
          style="display: inline-block; margin-left: 8px"
        >
          <img
            width="36px"
            alt="Instagram"
            src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
        /></a>
        
       
      </div>
      <p style="margin: 0; margin-top: 16px; color: #434343">
        Copyright © 2022 Sila. All rights reserved.
      </p>
    </footer>
  </div>
</body>
</html>

    



    `, // html body
  });

  console.log(info3.messageId);
}

app.get("/", function (req, res) {
  res.send("Ruuning");
});

/////  ******** SILA ORDER *******  ////////////
app.post("/api/v1/add/order", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
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
      Sila_Product: req.body.Sila_Product,
    };

    mc.query(
      "INSERT INTO orders SET ?",
      data,
      async function (error, results, fields) {
        if (error) {
          res.send({
            code: 400,
            failed: error,
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
            host: "mail.silapay.us",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "support@silapay.us", // generated ethereal user
              pass: "1997223mnmn@S", // generated ethereal password
            },
          });

          let info3 = await transporter.sendMail({
            from: '"SilaPay | Support" <support@silapay.us>', // sender address
            to: `ashurmustafaahmed@gmail.com`, // list of receivers ${emailid}
            subject: `New Order - ${data.UZET_Package}`, // Subject line
            text: `New Order - ${data.UZET_Package} `, // plain text body
            html: `
        
      
     
        New Order in UZET: ${data.FULL_NAME} ${data.time2} ${data.UZET_Package}
        
        `, // html body
          });

          console.log(info3.messageId);

          let info4 = await transporter.sendMail({
            from: '"SilaPay | Support" <support@silapay.us>', // sender address
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
  //origin == "https://admin.amwaly.io"
  if (true) {
    mc.query(
      "SELECT * FROM users WHERE Email = ?",
      [email],
      function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          response.send({
            code: 400,
            failed: error,
          });
        } else {
          console.log("The solution is: ", results);
          if (results.length > 0) {
            const decryptedString = cryptr.decrypt(results[0].Password);
            if (decryptedString == password) {
              console.log(results);
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
  var token = req.body.token;
  var user = req.body.user;
  var email = req.body.email;
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let otp_code = makeid(6);
    localStorage.setItem(token, otp_code);
    console.log(localStorage.getItem(token));
    let transporter = nodemailer.createTransport({
      host: "mail.silapay.us",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "support@silapay.us", // generated ethereal user
        pass: "1997223mnmn@S", // generated ethereal password
      },
    });

    let info3 = await transporter.sendMail({
      from: '"SilaPay | Support" <support@silapay.us>', // sender address
      to: `${email}`, // list of receivers ${emailid}
      subject: `New OTP `, // Subject line
      text: `New OTP `, // plain text body
      html: `


      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>SILA OTP</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #ffffff;
      font-size: 14px;
    "
  >
    <div
      style="
        max-width: 680px;
        margin: 0 auto;
        padding: 45px 30px 60px;
        background: #f4f7ff;
        background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
        background-repeat: no-repeat;
        background-size: 800px 452px;
        background-position: top center;
        font-size: 14px;
        color: #434343;
      "
    >
      <header>
        <center>
          <img
            alt=""
            src="https://imageupload.io/ib/kjxuUbSoeM6z82D_1699396223.png"
            height="80px"
          />
        </center>
      </header>

      <main>
        <div
          style="
            margin: 0;
            margin-top: 70px;
            padding: 92px 30px 115px;
            background: #ffffff;
            border-radius: 30px;
            text-align: center;
          "
        >
          <div style="width: 100%; max-width: 489px; margin: 0 auto">
            <h1
              style="
                margin: 0;
                font-size: 24px;
                font-weight: 500;
                color: #1f1f1f;
              "
            >
              Your OTP
            </h1>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-size: 16px;
                font-weight: 500;
              "
            >
              Hey ${user},
            </p>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              Thank you for choosing Sila Pay. Use the following OTP
              to complete login in your account. OTP is
              valid for
              <span style="font-weight: 600; color: #1f1f1f">5 minutes</span>.
              Do not share this code with others, including Sila
              employees.
            </p>
            <p
              style="
                margin: 0;
                margin-top: 60px;
                font-size: 35px;
                font-weight: 600;
                letter-spacing: 25px;
                color: #01c0c8;
              "
            >
              ${otp_code}
            </p>
          </div>
        </div>

        <p
          style="
            max-width: 400px;
            margin: 0 auto;
            margin-top: 90px;
            text-align: center;
            font-weight: 500;
            color: #8c8c8c;
          "
        >
          Need help? Ask at
          <a
            href="mailto:archisketch@gmail.com"
            style="color: #499fb6; text-decoration: none"
            >Support@silapay.com</a
          >
          or visit our
          <a
            href=""
            target="_blank"
            style="color: #499fb6; text-decoration: none"
            >Help Center</a
          >
        </p>
      </main>

      <footer
        style="
          width: 100%;
          max-width: 490px;
          margin: 20px auto 0;
          text-align: center;
          border-top: 1px solid #e6ebf1;
        "
      >
        <p
          style="
            margin: 0;
            margin-top: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #434343;
          "
        >
          Sila Pay
        </p>
        <p style="margin: 0; margin-top: 8px; color: #434343"></p>
        <div style="margin: 0; margin-top: 16px">
          <a href="" target="_blank" style="display: inline-block">
            <img
              width="36px"
              alt="Facebook"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
            />
          </a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px"
          >
            <img
              width="36px"
              alt="Instagram"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
          /></a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px"
          >
            <img
              width="36px"
              alt="Twitter"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
            />
          </a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px"
          >
            <img
              width="36px"
              alt="Youtube"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
          /></a>
        </div>
        <p style="margin: 0; margin-top: 16px; color: #434343">
          Copyright © 2022 Sila. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>

      



`, // html body
    });

    console.log(info3.messageId);
    res.send({
      code: 400,
      id: info3.messageId,
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});
app.post("/api/v1/check/otp", async function (req, res) {
  var origin = req.get("origin");
  var token = req.body.token;
  var otp = req.body.otp;
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    console.log(localStorage.getItem(token));
    console.log(otp);
    if (otp == localStorage.getItem(token)) {
      res.send({
        code: 200,
        results: "Verify",
      });
    } else {
      res.send({
        code: 400,
        results: "error",
      });
    }
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
  //  origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM transactions where MID =  '${data.MID}'  `;
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
app.post("/api/v1/add/transactions", function (req, res) {
  var data = {
    Payment_ID: req.body.Payment_ID,
    Amount: req.body.Amount,
    Currency: req.body.Currency,
    Status: req.body.Status,
    Client_City: req.body.Client_City,
    Client_Country: req.body.Client_Country,
    Client_Line1: req.body.Client_Line1,
    Client_Line2: req.body.Client_Line2,
    Client_Email: req.body.Client_Email,
    Client_name: req.body.Client_name,
    Payment_Type: req.body.Payment_Type,
    Payment_Risk_level: req.body.Payment_Risk_level,
    Card_Brand: req.body.Payment_Reason,
    Card_Country: req.body.Payment_Reason,
    Card_Exp_month: req.body.Payment_Reason,
    Card_Exp_year: req.body.Payment_Reason,
    Card_Last4: req.body.Payment_Reason,
    MID: req.body.Payment_Reason,
    "SILA_ID	": req.body.Payment_Reason,
    Date2: req.body.Payment_Reason,
    Date2: req.body.Payment_Reason,
    Time2: req.body.Payment_Reason,
  };

  mc.query(
    "INSERT INTO transactions SET ?",
    data,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: error,
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
          success: "answers registered sucessfully",
        });
      }
    }
  );
});

/////  ******** SILA payment links *******  ///////////
app.post("/api/v1/get/links", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM payment_links where MID =  '${data.MID}'  `;
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
app.post("/api/v1/add/links", function (req, res) {
  var data = {
    MID: req.body.MID,
    Token: maketoken(16),
    Products_Price: req.body.Products_Price,
    Business_Name: req.body.Business_Name,
    Products_Name: req.body.Products_Name,
    Client_Email: req.body.Client_Email,
    Date2: req.body.Date2,
    Time2: req.body.Time2,
    Status: "Active",
    Package: req.body.Package,
    TAX: req.body.Package,
  };

  mc.query(
    "INSERT INTO payment_links SET ?",
    data,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: error,
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
          success: "Sucessfully",
        });
      }
    }
  );
});

/////  ******** SILA Refunds *******  ///////////
app.post("/api/v1/get/refunds", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM refunds where MID =  '${data.MID}'  `;
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
app.post("/api/v1/add/refunds", function (req, res) {
  var data = {
    MID: "#" + req.body.MID,
    SILA_ID: req.body.SILA_ID,
    Payment_ID: req.body.Payment_ID,
    Payment_Amount: req.body.Payment_Amount,
    Card_Brand: req.body.Card_Brand,
    Card_Country: req.body.Card_Country,
    Card_Exp_month: req.body.Card_Exp_month,
    Card_Exp_year: req.body.Card_Exp_year,
    Card_Last4: req.body.Card_Last4,
    Payment_Date: req.body.Payment_Date,
    Payment_Time: req.body.Payment_Time,
    Client_Full_Name: req.body.Client_Full_Name,
    Client_Email: req.body.Client_Email,
    Refund_Date: req.body.Refund_Date,
    Refund_Time: req.body.Refund_Time,
    Refund_Reason: "non",
    Status: "in review",
  };

  mc.query(
    "INSERT INTO refunds SET ?",
    data,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: error,
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
          success: "sucessfully",
        });
      }
    }
  );
});

/////  ******** SILA Settlements *******  ///////////
app.post("/api/v1/get/Settlements", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM withdrawls where MID =  '${data.MID}'  `;
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
app.post("/api/v1/add/Settlements", function (req, res) {
  var data = {
    SID: maketoken(16),
    MID: req.body.MID,
    Amount: req.body.Amount,
    Payout_Type: req.body.Payout_Type,
    Date2: req.body.Date2,
    Time2: req.body.Time2,
    SBP: req.body.SBP,
    Status: "in Review",
    Note: "#",
  };

  mc.query(
    "INSERT INTO withdrawls SET ?",
    data,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: error,
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
          success: "answers registered sucessfully",
        });
      }
    }
  );
});

/////  ******** SILA Clients *******  ///////////
app.post("/api/v1/get/clients", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT Client_Email,Amount  FROM transactions where MID =  '${data.MID}' GROUP BY Client_Email `;
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

/////  ******** SILA Notification *******  ///////////
app.post("/api/v1/get/Notification", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM notifications where MID =  '${data.MID}' OR  MID =  '#'`;
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

/////  ******** SILA Logs *******  ///////////
app.post("/api/v1/get/Logs", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM logos where MID =  '${data.MID}'`;
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
app.post("/api/v1/add/Logs", function (req, res) {
  const detector = new DeviceDetector({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: false,
  });

  const clientHints = new ClientHints();
  const userAgent = req.headers["user-agent"];
  console.log(req.headers);

  const clientHintData = clientHints.parse(req.headers);
  console.log(clientHintData);
  // added for 2.0.4 version or later
  const result = detector.detect(userAgent, clientHintData);
  console.log(
    result["os"] + result["client"]["type"] + +result["client"]["name"]
  );

  var clientIp = requestIp.getClientIp(req);
  console.log(clientIp);
  var data = {
    MID: req.body.MID,
    Date2: req.body.Date2,
    Time2: req.body.Time2,
    Device:
      result["os"]["name"] +
      "OS | " +
      result["client"]["type"] +
      " | " +
      result["client"]["name"],
    IP: clientIp,
  };

  mc.query("INSERT INTO logos SET ?", data, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        failed: error,
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
        success: "Sucessfully",
      });
    }
  });
});

/////  ******** SILA Bank *******  ///////////
app.post("/api/v1/get/bank", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      MID: req.body.MID,
    };

    let sql1 = ` SELECT * FROM bank_account where MID =  '${data.MID}'`;
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

/////  ******** SILA Rest Password *******  ///////////
app.post("/api/v1/rest/password", async function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      email: req.body.email,
    };

    let sql1 = ` SELECT Email	FROM users where Email	 =  '${data.email}' `;
    mc.query(sql1, async function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        console.log(data);
        if (results.length > 0) {
          let email_token = maketoken(20);
          localStorage.setItem(email_token, data.email);
          console.log(localStorage.getItem(email_token));
          let transporter = nodemailer.createTransport({
            host: "mail.silapay.us",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "support@silapay.us", // generated ethereal user
              pass: "1997223mnmn@S", // generated ethereal password
            },
          });

          let info3 = await transporter.sendMail({
            from: '"SILA PAY" <support@silapay.us>', // sender address
            to: `${data.email}`, // list of receivers ${emailid}
            subject: `Reset Your Sila Pay Password`, // Subject line
            text: `Reset Your Sila Pay Password`, // plain text body
            html: `
      
            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>  Reset Your Sila Pay Password</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #ffffff;
      font-size: 14px;
    "
  >
    <div
      style="
        max-width: 680px;
        margin: 0 auto;
        padding: 45px 30px 60px;
        background: #f4f7ff;
        background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
        background-repeat: no-repeat;
        background-size: 800px 452px;
        background-position: top center;
        font-size: 14px;
        color: #434343;
      "
    >
      <header>
        <center>
          <img
            alt=""
            src="https://imageupload.io/ib/kjxuUbSoeM6z82D_1699396223.png"
            height="80px"
          />
        </center>
      </header>

      <main>
        <div
          style="
            margin: 0;
            margin-top: 70px;
            padding: 92px 30px 115px;
            background: #ffffff;
            border-radius: 30px;
            text-align: center;
          "
        >
          <div style="width: 100%; max-width: 489px; margin: 0 auto">
            <h1
              style="
                margin: 0;
                font-size: 20px;
                font-weight: 500;
                color: #1f1f1f;
              "
            >
            Reset Your Sila Pay Password
            </h1>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-size: 16px;
                font-weight: 500;
              "
            >
            Dear Merchant,
            </p>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
               We hope this email finds you well. It appears
              that you've requested to reset your password for Sila Pay. To proceed with the password reset, please
              follow the instructions below:
              <br>
              <span style="font-weight: 600; color: #1f1f1f">Click the following link to reset your password:</span>
             
            </p>

            <style>
              a {
  text-decoration: none;
}
            </style>
            <a href="./rest-password?t=${email_token}" type="button">
              <p
              style="
                margin: 0;
                margin-top: 60px;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 15px;
                color: #01c0c8;
              "
            >
              Press here
            </p>
            </a>
            
          </div>
        </div>

        <p
          style="
            max-width: 400px;
            margin: 0 auto;
            margin-top: 90px;
            text-align: center;
            font-weight: 500;
            color: #8c8c8c;
          "
        >
          Need help? Ask at
          <a
            href="mailto:archisketch@gmail.com"
            style="color: #499fb6; text-decoration: none"
            >Support@silapay.com</a
          >
          or visit our
          <a
            href=""
            target="_blank"
            style="color: #499fb6; text-decoration: none"
            >Help Center</a
          >
        </p>
      </main>

      <footer
        style="
          width: 100%;
          max-width: 490px;
          margin: 20px auto 0;
          text-align: center;
          border-top: 1px solid #e6ebf1;
        "
      >
        <p
          style="
            margin: 0;
            margin-top: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #434343;
          "
        >
          Sila Pay
        </p>
        <p style="margin: 0; margin-top: 8px; color: #434343"></p>
        <div style="margin: 0; margin-top: 16px">
          <a href="" target="_blank" style="display: inline-block">
            <img
              width="36px"
              alt="Facebook"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
            />
          </a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px"
          >
            <img
              width="36px"
              alt="Instagram"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
          /></a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px"
          >
            <img
              width="36px"
              alt="Twitter"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
            />
          </a>
          <a
            href=""
            target="_blank"
            style="display: inline-block; margin-left: 8px"
          >
            <img
              width="36px"
              alt="Youtube"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
          /></a>
        </div>
        <p style="margin: 0; margin-top: 16px; color: #434343">
          Copyright © 2022 Sila. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>

            
      
      
      
      `, // html body
          });
          return res.send({
            code: 200,
            id: info3.messageId,
          });
        } else {
          res.send({
            code: 550,
            failed: "User unknown",
          });
        }
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});
app.post("/api/v1/set/password", async function (req, res) {
  var origin = req.get("origin");
  var token = req.body.token;
  var password = req.body.password;
  //origin == "https://admin.amwaly.io"
  if (true) {
    //
    let sql1 = ` UPDATE users SET Password = '${password}' WHERE Email = '${token}';`;
    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send({
          code: 550,
          failed: "Access",
        });
      } else {
        if (results.affectedRows == 1) {
          return res.send({
            code: 200,
            dats: results,
            results: "successfully",
          });
        } else {
          return res.send({
            code: 550,
            failed: "Access",
          });
        }
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});

/////  ******** SILA Pay *******  ////////////
app.post("/pay", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    var data = {
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Email: req.body.Email,
      Amount: req.body.Amount,
      Title: req.body.Title,
    };

    const axios = require("axios");

    const options = {
      method: "POST",
      url: "https://business.mamopay.com/manage_api/v1/links",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer sk-b3c97293-c109-45df-a38e-60de456206f6",
      },
      data: {
        title: data.Title,
        description: "By Sila Pay",
        capacity: 1,
        active: true,
        return_url: "https://www.google.iq/?gws_rd=ssl",
        failure_return_url: "https://www.google.iq/?gws_rd=ssl",
        processing_fee_percentage: 3,
        amount: 4,
        first_name: data.First_Name,
        last_name: data.Last_Name,
        email: data.Email,
        amount_currency: "USD",
        is_widget: true,
        enable_tabby: false,
        enable_message: false,
        enable_tips: false,
        save_card: "off",
        enable_customer_details: true,
        enable_quantity: false,
        enable_qr_code: false,
        send_customer_receipt: false,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.payment_url);
        res.send({
          code: 200,
          payment_url: response.data.payment_url,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});
/////  ******** SILA token id *******  ///////////
app.post("/api/v1/get/token/id", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      Token: req.body.Token,
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Email: req.body.Email,
    };

    let sql1 = ` SELECT *  FROM payment_links where Token =  '${data.Token}'  `;
    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        console.log(data);
        const axios = require("axios");
        const options = {
          method: "POST",
          url: "https://business.mamopay.com/manage_api/v1/links",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "Bearer sk-b3c97293-c109-45df-a38e-60de456206f6",
          },
          data: {
            title: results[0].Products_Name,
            description: "By SilaPay",
            capacity: 1,
            active: true,
            return_url: `http://127.0.0.1:5501//success/?mid=${results[0].MID}`,
            failure_return_url: `http://127.0.0.1:5501//failed/?mid=${results[0].MID}`,
            processing_fee_percentage: 3,
            amount: parseFloat(results[0].Products_Price).toFixed(0),
            first_name: data.First_Name,
            last_name: data.Last_Name,
            email: data.Email,
            amount_currency: "USD",
            is_widget: true,
            enable_tabby: false,
            enable_message: false,
            enable_tips: false,
            save_card: "off",
            enable_customer_details: true,
            enable_quantity: false,
            enable_qr_code: false,
            send_customer_receipt: false,
          },
        };

        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            return res.send({
              code: 200,
              payment_url: response.data.payment_url,
            });
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});

const API_KEY = "b824922aaa6d46cd9a5ce983a2b68d6b";
const URL = "https://api.ipgeolocation.io/ipgeo?apiKey=" + API_KEY;
const sendAPIRequest = async (ipAddress) => {
  const apiResponse = await axios.get(URL + "&ip=" + ipAddress);
  return apiResponse.data;
};
/// posts

app.post("/payment", async function (req, res) {
  // Credit Card
  var cardnum = req.body.cardnum;
  var cardexp_month = req.body.cardexp_month;
  var cardexp_year = req.body.cardexp_year;
  var cardcvc = req.body.cardcvc;

  // Client Details
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var email = req.body.email;
  var phone_number = req.body.phone_number;
  var MID = req.body.MID;
  var Date2 = req.body.Date2;
  var Time2 = req.body.Time2;

  const ip = requestIp.getClientIp(req);
  console.log(ip); // ip address of the user
  const ipAddressInformation = await sendAPIRequest(ip);
  console.log(ipAddressInformation); // location of the user

  var Amount = req.body.Amount;
  var billing_country = ipAddressInformation.country_code2;
  var customer_givenName = first_name;
  var customer_surname = last_name;
  var billing_street1 = `${ipAddressInformation.country_name},${ipAddressInformation.city}`;
  var billing_city = ipAddressInformation.city;
  var billing_state = ipAddressInformation.city;
  var billing_postcode = makeid(5);
  var customer_phonenumber = phone_number;

  try {
    stripe.paymentMethods
      .create({
        type: "card",
        billing_details: {
          address: {
            city: billing_city,
            country: billing_country,
            line1: billing_street1,
            line2: "",
            postal_code: billing_postcode,
            state: billing_state,
          },
          email: email,
          name: customer_surname + " " + customer_givenName,
          phone: customer_phonenumber,
        },
        card: {
          number: cardnum,
          exp_month: cardexp_month,
          exp_year: cardexp_year,
          cvc: cardcvc,
        },
      })
      .then(async (paymentMethod) => {
        paymentIntent = await stripe.paymentIntents.create({
          payment_method: paymentMethod.id,
          amount: (parseFloat(Amount) * 100).toFixed(0), // USD*100
          currency: "usd",
          payment_method_types: ["card"],
        });

        var data = {
          Payment_ID: paymentIntent["client_secret"],
          Amount: Amount,
          Currency: "USD",
          Status: "Successfully",
          Client_City: billing_city,
          Client_Country: billing_country,
          Client_Line1: billing_street1,
          Client_Line2: "",
          Client_Email: email,
          Client_name: customer_surname + " " + customer_givenName,
          Payment_Type: "Purchase",
          Payment_Risk_level: "Normal",
          Card_Brand: "req.body.Payment_Reason",
          Card_Country: "req.body.Payment_Reason",
          Card_Exp_month: "req.body.Payment_Reason",
          Card_Exp_year: "req.body.Payment_Reason",
          Card_Last4: "req.body.Payment_Reason",
          MID: MID,
          SILA_ID: paymentIntent["id"].substring(3),
          Date2: Date2,
          Time2: Time2,
        };

        mc.query(
          "INSERT INTO transactions SET ?",
          data,
          function (error, results, fields) {
            if (error) {
              res.send({
                code: 400,
                failed: error,
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
                idp: paymentIntent,
                success: "sucessfully",
              });
            }
          }
        );
      })
      .catch(async (error) => {
        res.send({
          code: 400,
          failed: error,
        });
      });
  } catch (err) {
    res.send({
      code: 400,
      failed: err,
    });
  }
});

app.post("/api/v2/get/token/id", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      Token: req.body.Token,
    };

    let sql1 = ` SELECT *  FROM payment_links where Token =  '${data.Token}'  `;
    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        console.log(data);
        return res.send({
          code: 200,
          results: results,
        });
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});

app.post("/create", async (req, res) => {
  var Amount = req.body.Amount;

  console.log(Amount);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: (parseFloat(Amount) * 100).toFixed(0), // USD*100
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.post("/check", async function (req, res) {
  console.log("check req");
  var id = req.body.id;
  var MID = req.body.MID;
  var Date2 = req.body.Date2;
  var Time2 = req.body.Time2;
  let sild_id = maketoken(20);

  const paymentIntent = await stripe.paymentIntents.retrieve(id);
  console.log(paymentIntent);
  const charge = await stripe.charges.retrieve(paymentIntent["latest_charge"]);
  console.log(charge);
  var data = {
    Payment_ID: charge["payment_intent"],
    Amount: parseFloat(charge["amount"] / 100).toFixed(2),
    Currency: charge["currency"],
    Status: "Successfully",
    Client_City: charge["billing_details"]["address"]["city"],
    Client_Country: charge["billing_details"]["address"]["country"],
    Client_Line1: charge["billing_details"]["address"]["line1"],
    Client_Line2: charge["billing_details"]["address"]["line2"],
    Client_Email: charge["billing_details"]["email"],
    Client_name: charge["billing_details"]["name"],
    Payment_Type: charge["outcome"]["type"],
    Payment_Reason: "non",
    Payment_Risk_level:
      charge["outcome"]["risk_level"] + " - " + charge["outcome"]["risk_score"],
    Card_Brand: charge["payment_method_details"]["card"]["brand"],
    Card_Country: charge["payment_method_details"]["card"]["country"],
    Card_Exp_month: charge["payment_method_details"]["card"]["exp_month"],
    Card_Exp_year: charge["payment_method_details"]["card"]["exp_year"],
    Card_Last4: charge["payment_method_details"]["card"]["last4"],
    MID: MID,
    SILA_ID: charge["payment_intent"].substring(3),
    Date2: Date2,
    Time2: Time2,
  };

  mc.query(
    "INSERT INTO transactions SET ?",
    data,
    function (error, results, fields) {
      console.log(data);
      if (error) {
        res.send({
          code: 400,
          id: charge["payment_intent"].substring(3),
        });

        try {
        } catch (err) {
          if (err.code === "ER_DUP_ENTRY") {
            res.send({
              code: 400,
              id: charge["payment_intent"].substring(3),
            });
          } else {
            res.send({
              code: 400,
              id: charge["payment_intent"].substring(3),
            });
          }
        }
      } else {
        console.log("The solution is: ", results);
        if (error) throw error;
        res.send({
          code: 200,
          id: charge["payment_intent"].substring(3),
        });
      }
    }
  );
});

app.post("/v2/check", async function (req, res) {
  var MID = req.body.MID;
  var id = req.body.id;
  var Date2 = req.body.Date2;
  var Time2 = req.body.Time2;
  let sild_id = maketoken(20);

  const ip = requestIp.getClientIp(req);
  console.log(ip); // ip address of the user
  const ipAddressInformation = await sendAPIRequest(ip);
  console.log(ipAddressInformation); // location of the user

  var billing_country = ipAddressInformation.country_code2;
  var billing_street1 = `${ipAddressInformation.country_name},${ipAddressInformation.city}`;
  var billing_city = ipAddressInformation.city;
  var billing_state = ipAddressInformation.city;

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://business.mamopay.com/manage_api/v1/charges/" + id,
    headers: {
      accept: "application/json",
      Authorization: "Bearer sk-b3c97293-c109-45df-a38e-60de456206f6",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      var data = {
        Payment_ID: response.data.id,
        Amount: response.data.amount,
        Currency: response.data.amount_currency,
        Status: "Successfully",
        Client_City: billing_city,
        Client_Country: billing_country,
        Client_Line1: billing_street1,
        Client_Line2: billing_state,
        Client_Email: response.data.customer_details.email,
        Client_name: response.data.payment_method.card_holder_name,
        Payment_Type: response.data.status,
        Payment_Risk_level: "Normal",
        Card_Brand: response.data.payment_method.type,
        Card_Country: response.data.payment_method.origin,
        Card_Exp_month: "#",
        Card_Exp_year: "#",
        Card_Last4: response.data.payment_method.card_last4,
        MID: MID,
        SILA_ID: sild_id,
        Date2: Date2,
        Time2: Time2,
      };

      mc.query(
        "INSERT INTO transactions SET ?",
        data,
        function (error, results, fields) {
          if (error) {
            res.send({
              code: 400,
              failed: response.data.id,
            });

            try {
            } catch (err) {
              if (err.code === "ER_DUP_ENTRY") {
                res.send({
                  code: 400,
                  failed: response.data.id,
                });
              } else {
                res.send({
                  code: 400,
                  failed: response.data.id,
                });
              }
            }
          } else {
            console.log("The solution is: ", results);
            if (error) throw error;
            res.send({
              code: 200,
              id: sild_id,
            });
          }
        }
      );
    })
    .catch(function (error) {
      console.error(error);
    });
});
app.post("/partners/create", function (req, res) {
  const PASSWORD = cryptr.encrypt(req.body.PASSWORD);
  var data = {
    PROME_CODE: maketoken(5),
    FULL_NAME: req.body.FULL_NAME,
    EMAIL: req.body.EMAIL,
    PHONE_NUMBER: req.body.PHONE_NUMBER,
    COUNTRY: req.body.COUNTRY,
    CITY: req.body.CITY,
    SMAL: req.body.SMAL,
    PASSWORD: PASSWORD,
    TIME2: req.body.TIME2,
    DATE2: req.body.DATE2,
  };

  mc.query(
    "INSERT INTO partners SET ?",
    data,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: error,
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
          success: "Sucessfully",
        });
      }
    }
  );
});
app.post("/partners/login", function (request, response) {
  var email = request.body.email;
  var password = request.body.password;

  var origin = request.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    mc.query(
      "SELECT * FROM partners WHERE EMAIL = ?",
      [email],
      function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          response.send({
            code: 400,
            failed: error,
          });
        } else {
          console.log("The solution is: ", results);
          if (results.length > 0) {
            const decryptedString = cryptr.decrypt(results[0].PASSWORD);
            if (decryptedString == password) {
              console.log(results);
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
app.post("/partners/balance", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      ID: req.body.ID,
    };

    let sql1 = ` SELECT COUNT(promo_code) AS tusers
    FROM users
    WHERE promo_code = '${data.ID}'; `;
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
app.post("/partners/Visiters", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      ID: req.body.ID,
    };

    let sql1 = ` SELECT First_Name , Last_Name , Email , Country , Registration_Date , promo_code FROM users where promo_code =  '${data.ID}'`;
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

app.post("/Tiktok/create/transfer", function (req, res) {
  let stid = makeid(15);
  var data = {
    Full_name: req.body.Full_name,
    Email: req.body.Email,
    Phone_No: req.body.Phone_No,
    Country: req.body.Country,
    Amount: req.body.Amount,
    Passport: req.body.Passport,
    Tiktok_invoice: req.body.Tiktok_invoice,
    way: req.body.way,
    Date2: req.body.Date2,
    Time2: req.body.Time2,
    TID: req.body.TID,
    STID: stid,
  };

  mc.query(
    "INSERT INTO tiktok_transfer SET ?",
    data,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: error,
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
          STID: stid,
          success: "Sucessfully",
        });
      }
    }
  );
});

app.post("/Tiktok/pay", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    var data = {
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Email: req.body.Email,
      Amount: req.body.Amount,
      Title: req.body.Title,
      STID: req.body.STID,
    };

    const axios = require("axios");

    const options = {
      method: "POST",
      url: "https://business.mamopay.com/manage_api/v1/links",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer sk-b3c97293-c109-45df-a38e-60de456206f6",
      },
      data: {
        title: data.Title,
        description: "By Sila Pay",
        capacity: 1,
        active: true,
        return_url: `http://127.0.0.1:5501/success/?mid=${data.STID}`,
        failure_return_url: `http://127.0.0.1:5501/failed/?mid=${data.STID}`,
        processing_fee_percentage: 3,
        amount: data.Amount,
        first_name: data.First_Name,
        last_name: data.Last_Name,
        email: data.Email,
        amount_currency: "USD",
        is_widget: true,
        enable_tabby: false,
        enable_message: false,
        enable_tips: false,
        save_card: "off",
        enable_customer_details: true,
        enable_quantity: false,
        enable_qr_code: false,
        send_customer_receipt: false,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.payment_url);
        res.send({
          code: 200,
          payment_url: response.data.payment_url,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});
app.post("/Tiktok/v2/check", async function (req, res) {
  var MID = req.body.MID;
  var id = req.body.id;
  var Date2 = req.body.Date2;
  var Time2 = req.body.Time2;
  let sild_id = maketoken(20);

  const ip = requestIp.getClientIp(req);
  console.log(ip); // ip address of the user
  const ipAddressInformation = await sendAPIRequest(ip);
  console.log(ipAddressInformation); // location of the user

  var billing_country = ipAddressInformation.country_code2;
  var billing_street1 = `${ipAddressInformation.country_name},${ipAddressInformation.city}`;
  var billing_city = ipAddressInformation.city;
  var billing_state = ipAddressInformation.city;

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://business.mamopay.com/manage_api/v1/charges/" + id,
    headers: {
      accept: "application/json",
      Authorization: "Bearer sk-b3c97293-c109-45df-a38e-60de456206f6",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      var data = {
        Payment_ID: response.data.id,
        Amount: response.data.amount,
        Currency: response.data.amount_currency,
        Status: "Successfully",
        Client_City: billing_city,
        Client_Country: billing_country,
        Client_Line1: billing_street1,
        Client_Line2: billing_state,
        Client_Email: response.data.customer_details.email,
        Client_name: response.data.payment_method.card_holder_name,
        Payment_Type: response.data.status,
        Payment_Risk_level: "Normal",
        Card_Brand: response.data.payment_method.type,
        Card_Country: response.data.payment_method.origin,
        Card_Exp_month: "#",
        Card_Exp_year: "#",
        Card_Last4: response.data.payment_method.card_last4,
        MID: MID,
        SILA_ID: sild_id,
        Date2: Date2,
        Time2: Time2,
      };

      mc.query(
        "INSERT INTO transactions SET ?",
        data,
        function (error, results, fields) {
          if (error) {
            res.send({
              code: 400,
              failed: response.data.id,
            });

            try {
            } catch (err) {
              if (err.code === "ER_DUP_ENTRY") {
                res.send({
                  code: 400,
                  failed: response.data.id,
                });
              } else {
                res.send({
                  code: 400,
                  failed: response.data.id,
                });
              }
            }
          } else {
            console.log("The solution is: ", results);
            if (error) throw error;
            res.send({
              code: 200,
              id: sild_id,
            });
          }
        }
      );
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.post("/international/create/transfer", function (req, res) {
  var data = {
    Full_name: req.body.Full_name,
    Email: req.body.Email,
    Phone_No: req.body.Phone_No,
    Country: req.body.Country,
    Amount: req.body.Amount,
    Passport: req.body.Passport,
    Reason: req.body.Reason,
    Type: req.body.Type,
    Date2: req.body.Date2,
    Time2: req.body.Time2,
    TID: req.body.TID,
    STID: req.body.STID,
    Receiving_method: req.body.Receiving_method,
    Receiving_method_info: req.body.Receiving_method_info,
  };

  mc.query(
    "INSERT INTO international_transfer SET ?",
    data,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: error,
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
          success: "Sucessfully",
        });
      }
    }
  );
});

app.post("/international/pay", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    var data = {
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Email: req.body.Email,
      Amount: req.body.Amount,
      Title: req.body.Title,
      STID: req.body.STID,
    };

    const axios = require("axios");

    const options = {
      method: "POST",
      url: "https://business.mamopay.com/manage_api/v1/links",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer sk-b3c97293-c109-45df-a38e-60de456206f6",
      },
      data: {
        title: data.Title,
        description: "By Sila Pay",
        capacity: 1,
        active: true,
        return_url: `http://127.0.0.1:5501/success/?mid=${data.STID}`,
        failure_return_url: `http://127.0.0.1:5501/failed/?mid=${data.STID}`,
        processing_fee_percentage: 3,
        amount: data.Amount,
        first_name: data.First_Name,
        last_name: data.Last_Name,
        email: data.Email,
        amount_currency: "USD",
        is_widget: true,
        enable_tabby: false,
        enable_message: false,
        enable_tips: false,
        save_card: "off",
        enable_customer_details: true,
        enable_quantity: false,
        enable_qr_code: false,
        send_customer_receipt: false,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.payment_url);
        res.send({
          code: 200,
          payment_url: response.data.payment_url,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});

app.post("/virtual/cards/create/", function (req, res) {
  var data = {
    PROMO_CODE: req.body.PROMO_CODE,
    FULL_NAME: req.body.FULL_NAME,
    EMAIL: req.body.EMAIL,
    PHONE_NUMBER: req.body.PHONE_NUMBER,
    COUNTERY: req.body.COUNTERY,
    PASSPORT: req.body.PASSPORT,
    TIME2: req.body.TIME2,
    DATE2: req.body.DATE2,
    STATUS: "Processing",
    CARD_NUMBER: "#### #### #### ####",
  };

  mc.query(
    "INSERT INTO virtual_cards SET ?",
    data,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: error,
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
          success: "Sucessfully",
        });
      }
    }
  );
});

app.post("/virtual/cards/recharge/", function (req, res) {
  var data = {
    CARD_HOLDER: req.body.CARD_HOLDER,
    CARD_NUMBER: req.body.CARD_NUMBER,
    PROMOM_CODE: req.body.PROMOM_CODE,
    AMOUNT: req.body.AMOUNT,
    DATE2: req.body.DATE2,
    TIME2: req.body.TIME2,
    STATUS: "Processing",
  };

  mc.query(
    "INSERT INTO recharge_cards SET ?",
    data,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: error,
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
          success: "Sucessfully",
        });
      }
    }
  );
});

app.post("/partners/loc", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      COUNTRY: req.body.COUNTRY,
    };

    let sql1 = ` SELECT FULL_NAME , CITY , PHONE_NUMBER , COUNTRY  FROM partners where COUNTRY =  '${data.COUNTRY}'`;
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

/// developer v1
var moment = require("moment");
app.post("/v1/SilaPay/devloper/create", function (request, response) {
  var email = request.body.Email;
  var API_KEY = request.body.API_KEY;
  var Type = request.body.Type;
  console.log(API_KEY);
  const cryptr = new Cryptr(
    "2a3260f5ac4754b8ee3021ad413ddbc11f04138d01fe0c5889a0dd7b4a97e342a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc9055f82cdc92a1fe735825af1f75cfb9c94ad765c06a8abe9668fca5c42d45a7ec233f0"
  );
  const decryptedString232 = cryptr.decrypt(API_KEY);
  var CallBack_URL = request.body.CallBack_URL;
  let token = maketoken(16);
  localStorage.setItem(token, CallBack_URL);
  var origin = request.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    mc.query(
      "SELECT * FROM users WHERE Email = ?",
      [email],
      function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          response.send({
            code: 400,
            failed: error,
          });
        } else {
          console.log("The solution is: ", results);
          if (results.length > 0) {
            if (decryptedString232 == results[0].Access_Key) {
              console.log(results[0]);
              var data = {
                MID: results[0].Merchant_ID,
                Token: token,
                Products_Price: request.body.Price,
                Products_Name: request.body.Title,
                Client_Email: request.body.Client_Email,
                Date2: moment().format("l"),
                Time2: moment().format("LTS"),
                Status: "Active",
                Package: results[0].Package,
                TAX: results[0].Rate,
                Business_Name: results[0].Business_Name,
                CallBack_URL: CallBack_URL,
              };

              if (results[0].Package == "P1") {
                mc.query(
                  "INSERT INTO payment_links SET ?",
                  data,
                  function (error, results, fields) {
                    if (error) {
                      response.send({
                        code: 400,
                        failed: error,
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
                      if (Type == "3DS") {
                        response.send({
                          code: 200,
                          success: "Sucessfully",
                          link: "https://pay.silapay.co/v1/?token=" + token,
                        });
                      } else {
                        response.send({
                          code: 200,
                          success: "Sucessfully",
                          link: "https://pay.silapay.co/v2/?token=" + token,
                        });
                      }
                    }
                  }
                );
              } else if (results[0].Package == "P2") {
                mc.query(
                  "INSERT INTO payment_links SET ?",
                  data,
                  function (error, results, fields) {
                    if (error) {
                      response.send({
                        code: 400,
                        failed: error,
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
                      if (Type == "3DS") {
                        response.send({
                          code: 200,
                          success: "Sucessfully",
                          link: "https://pay.silapay.co/v1/?token=" + token,
                        });
                      } else {
                        response.send({
                          code: 200,
                          success: "Sucessfully",
                          link: "https://pay.silapay.co/v2/?token=" + token,
                        });
                      }
                    }
                  }
                );
              }
            } else {
              response.send({
                code: 204,
                success: "Email and API KEY does not match",
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

app.post("/v1/SilaPay/devloper/pay", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      Token: req.body.Token,
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Email: req.body.Email,
    };

    let sql1 = ` SELECT *  FROM payment_links where Token =  '${data.Token}'  `;
    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        if (results[0].Package == "P1") {
          console.log(data);
          const axios = require("axios");
          const options = {
            method: "POST",
            url: "https://business.mamopay.com/manage_api/v1/links",
            headers: {
              accept: "application/json",
              "content-type": "application/json",
              Authorization: "Bearer sk-b3c97293-c109-45df-a38e-60de456206f6",
            },
            data: {
              title: results[0].Products_Name,
              description: "By Sila Pay",
              capacity: 1,
              active: true,
              return_url: `http://payment.silapay.co/v1/success/?mid=${results[0].MID}&token=${data.Token}`,
              failure_return_url: `http://payment.silapay.co/v1/failed/?mid=${results[0].MID}&token=${data.Token}`,
              processing_fee_percentage: 3,
              amount: parseFloat(results[0].Products_Price).toFixed(0),
              first_name: data.First_Name,
              last_name: data.Last_Name,
              email: data.Email,
              amount_currency: "USD",
              is_widget: true,
              enable_tabby: false,
              enable_message: false,
              enable_tips: false,
              save_card: "off",
              enable_customer_details: true,
              enable_quantity: false,
              enable_qr_code: false,
              send_customer_receipt: false,
            },
          };

          axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
              return res.send({
                code: 200,
                payment_url: response.data.payment_url,
              });
            })
            .catch(function (error) {
              console.error(error);
            });
        } else {
          res.send({
            code: 422,
            failed: "Package invaild",
          });
        }
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});

app.post("/SilaPay/devloper/v2/check", async function (req, res) {
  var MID = req.body.MID;
  var id = req.body.id;
  var token = req.body.token;
  var Date2 = req.body.Date2;
  var Time2 = req.body.Time2;
  let sild_id = maketoken(20);
  var CallBack_URL = localStorage.getItem(token);

  const ip = requestIp.getClientIp(req);
  console.log(ip); // ip address of the user
  const ipAddressInformation = await sendAPIRequest(ip);
  console.log(ipAddressInformation); // location of the user

  var billing_country = ipAddressInformation.country_code2;
  var billing_street1 = `${ipAddressInformation.country_name},${ipAddressInformation.city}`;
  var billing_city = ipAddressInformation.city;
  var billing_state = ipAddressInformation.city;

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://business.mamopay.com/manage_api/v1/charges/" + id,
    headers: {
      accept: "application/json",
      Authorization: "Bearer sk-b3c97293-c109-45df-a38e-60de456206f6",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      var data = {
        Payment_ID: response.data.id,
        Amount: response.data.amount,
        Currency: response.data.amount_currency,
        Status: "Successfully",
        Client_City: billing_city,
        Client_Country: billing_country,
        Client_Line1: billing_street1,
        Client_Line2: billing_state,
        Client_Email: response.data.customer_details.email,
        Client_name: response.data.payment_method.card_holder_name,
        Payment_Type: response.data.status,
        Payment_Risk_level: "Normal",
        Card_Brand: response.data.payment_method.type,
        Card_Country: response.data.payment_method.origin,
        Card_Exp_month: "#",
        Card_Exp_year: "#",
        Card_Last4: response.data.payment_method.card_last4,
        MID: MID,
        SILA_ID: sild_id,
        Date2: Date2,
        Time2: Time2,
      };

      mc.query(
        "INSERT INTO transactions SET ?",
        data,
        function (error, results, fields) {
          if (error) {
            res.send({
              code: 400,
              failed: response.data.id,
            });

            try {
            } catch (err) {
              if (err.code === "ER_DUP_ENTRY") {
                res.send({
                  code: 400,
                  failed: response.data.id,
                });
              } else {
                res.send({
                  code: 400,
                  failed: response.data.id,
                });
              }
            }
          } else {
            console.log("The solution is: ", results);
            if (error) throw error;
            res.send({
              code: 200,
              id: sild_id,
              url: CallBack_URL,
            });
          }
        }
      );
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.post("/v1/SilaPay/devloper/pay/id", function (request, response) {
  var email = request.body.email;
  var API_KEY = request.body.API_KEY;
  const cryptr = new Cryptr(
    "2a3260f5ac4754b8ee3021ad413ddbc11f04138d01fe0c5889a0dd7b4a97e342a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc9055f82cdc92a1fe735825af1f75cfb9c94ad765c06a8abe9668fca5c42d45a7ec233f0"
  );
  const decryptedString232 = cryptr.decrypt(API_KEY);
  var PID = request.body.PID;
  var origin = request.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    mc.query(
      "SELECT * FROM users WHERE Email = ?",
      [email],
      function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          response.send({
            code: 400,
            failed: error,
          });
        } else {
          console.log("The solution is: ", results);
          if (results.length > 0) {
            if (decryptedString232 == results[0].Access_Key) {
              console.log(results[0]);

              let sql1 = ` SELECT SILA_ID,Amount,Currency,Status,Client_Country,Client_City,Client_Email,Client_name,Payment_Type,Card_Brand,Card_Last4,MID,Date2,Time2 FROM transactions where SILA_ID =  '${PID}'  `;
              mc.query(sql1, function (error, results, fields) {
                if (error) {
                  console.log(error);
                  return response.send(error);
                } else {
                  console.log(results);
                  if (results.length > 0) {
                    return response.send(results.reverse());
                  } else {
                    response.send({
                      code: 400,
                      error: "Error in PID",
                    });
                  }
                }
              });
            } else {
              response.send({
                code: 204,
                success: "Email and API KEY does not match",
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

/// developer v1

// developer v2

app.post("/v2/SilaPay/devloper/pay", function (req, res) {
  var origin = req.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    let data = {
      Token: req.body.Token,
    };

    let sql1 = ` SELECT *  FROM payment_links where Token =  '${data.Token}'  `;

    mc.query(sql1, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send(error);
      } else {
        console.log(data);
        localStorage.setItem(data.Token, results[0].CallBack_URL);
        return res.send({
          code: 200,
          results: results,
        });
      }
    });
  } else {
    res.send({
      code: 400,
      failed: "Access",
    });
  }
});

app.post("/SilaPay/check", async function (req, res) {
  console.log("check req");
  var id = req.body.id;
  var token = req.body.token;
  var MID = req.body.MID;
  var Date2 = req.body.Date2;
  var Time2 = req.body.Time2;
  let sild_id = maketoken(20);

  const paymentIntent = await stripe.paymentIntents.retrieve(id);
  console.log(paymentIntent);
  const charge = await stripe.charges.retrieve(paymentIntent["latest_charge"]);
  console.log(charge);
  var data = {
    Payment_ID: charge["payment_intent"],
    Amount: parseFloat(charge["amount"] / 100).toFixed(2),
    Currency: charge["currency"],
    Status: "Successfully",
    Client_City: charge["billing_details"]["address"]["city"],
    Client_Country: charge["billing_details"]["address"]["country"],
    Client_Line1: charge["billing_details"]["address"]["line1"],
    Client_Line2: charge["billing_details"]["address"]["line2"],
    Client_Email: charge["billing_details"]["email"],
    Client_name: charge["billing_details"]["name"],
    Payment_Type: charge["outcome"]["type"],
    Payment_Reason: "non",
    Payment_Risk_level:
      charge["outcome"]["risk_level"] + " - " + charge["outcome"]["risk_score"],
    Card_Brand: charge["payment_method_details"]["card"]["brand"],
    Card_Country: charge["payment_method_details"]["card"]["country"],
    Card_Exp_month: charge["payment_method_details"]["card"]["exp_month"],
    Card_Exp_year: charge["payment_method_details"]["card"]["exp_year"],
    Card_Last4: charge["payment_method_details"]["card"]["last4"],
    MID: MID,
    SILA_ID: charge["payment_intent"].substring(3),
    Date2: Date2,
    Time2: Time2,
  };

  mc.query(
    "INSERT INTO transactions SET ?",
    data,
    function (error, results, fields) {
      console.log(data);
      if (error) {
        res.send({
          code: 400,
          id: charge["payment_intent"].substring(3),
        });

        try {
        } catch (err) {
          if (err.code === "ER_DUP_ENTRY") {
            res.send({
              code: 400,
              id: charge["payment_intent"].substring(3),
            });
          } else {
            res.send({
              code: 400,
              id: charge["payment_intent"].substring(3),
            });
          }
        }
      } else {
        console.log("The solution is: ", results);
        if (error) throw error;
        res.send({
          code: 200,
          url: localStorage.getItem(token),
          id: charge["payment_intent"].substring(3),
        });
      }
    }
  );
});

// developer v2

app.post("/v1/SilaPay/wordpress/create", function (request, response) {

  var email = request.body.Email;
  var API_KEY = request.body.API_KEY;
  var Type = request.body.Type;
  console.log(API_KEY);
  const cryptr = new Cryptr(
    "2a3260f5ac4754b8ee3021ad413ddbc11f04138d01fe0c5889a0dd7b4a97e342a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc9055f82cdc92a1fe735825af1f75cfb9c94ad765c06a8abe9668fca5c42d45a7ec233f0"
  );
  const decryptedString232 = cryptr.decrypt(API_KEY);
  var CallBack_URL = request.body.CallBack_URL;
  let token = maketoken(16);
  localStorage.setItem(token, CallBack_URL);
  var origin = request.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    mc.query(
      "SELECT * FROM users WHERE Email = ?",
      [email],
      function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          response.send({
            code: 400,
            failed: error,
          });
        } else {
          console.log("The solution is: ", results);
          if (results.length > 0) {
            if (decryptedString232 == results[0].Access_Key) {
              console.log(results[0]);
              var data = {
                MID: results[0].Merchant_ID,
                Token: token,
                Products_Price: request.body.Price,
                Products_Name: request.body.Title,
                Client_Email: request.body.Client_Email,
                Date2: moment().format("l"),
                Time2: moment().format("LTS"),
                Status: "Active",
                Package: results[0].Package,
                TAX: results[0].Rate,
                Business_Name: results[0].Business_Name,
                CallBack_URL: CallBack_URL,
              };

              if (results[0].Package == "P1") {
                mc.query(
                  "INSERT INTO payment_links SET ?",
                  data,
                  function (error, results, fields) {
                    if (error) {
                      response.send({
                        code: 400,
                        failed: error,
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
                      if (Type == "3DS") {
                        response.send({
                          code: 200,
                          success: "Sucessfully",
                          link: "https://buy.silapay.co/v1/?token=" + token,
                        });
                      } else {
                        response.send({
                          code: 200,
                          success: "Sucessfully",
                          link: "https://buy.silapay.co/v2/?token=" + token,
                        });
                      }
                    }
                  }
                );
              } else if (results[0].Package == "P2") {
                mc.query(
                  "INSERT INTO payment_links SET ?",
                  data,
                  function (error, results, fields) {
                    if (error) {
                      response.send({
                        code: 400,
                        failed: error,
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
                      if (Type == "3DS") {
                        response.send({
                          code: 200,
                          success: "Sucessfully",
                          link: "https://pay.silapay.co/v1/?token=" + token,
                        });
                      } else {
                        response.send({
                          code: 200,
                          success: "Sucessfully",
                          link: "https://pay.silapay.co/v2/?token=" + token,
                        });
                      }
                    }
                  }
                );
              }
            } else {
              response.send({
                code: 204,
                success: "Email and API KEY does not match",
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

app.post("/v1/SilaPay/wordpress/pay/id", function (request, response) {
  var email = request.body.email;
  var API_KEY = request.body.API_KEY;
  const cryptr = new Cryptr(
    "2a3260f5ac4754b8ee3021ad413ddbc11f04138d01fe0c5889a0dd7b4a97e342a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc9055f82cdc92a1fe735825af1f75cfb9c94ad765c06a8abe9668fca5c42d45a7ec233f0"
  );
  const decryptedString232 = cryptr.decrypt(API_KEY);
  var PID = request.body.PID;
  var origin = request.get("origin");
  console.log(origin);
  //origin == "https://admin.amwaly.io"
  if (true) {
    mc.query(
      "SELECT * FROM users WHERE Email = ?",
      [email],
      function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          response.send({
            code: 400,
            failed: error,
          });
        } else {
          console.log("The solution is: ", results);
          if (results.length > 0) {
            if (decryptedString232 == results[0].Access_Key) {
              console.log(results[0]);

              let sql1 = ` SELECT SILA_ID,Amount,Currency,Status,Client_Country,Client_City,Client_Email,Client_name,Payment_Type,Card_Brand,Card_Last4,MID,Date2,Time2 FROM transactions where SILA_ID =  '${PID}'  `;
              mc.query(sql1, function (error, results, fields) {
                if (error) {
                  console.log(error);
                  return response.send(error);
                } else {
                  console.log(results);
                  if (results.length > 0) {
                    return response.send(results.reverse());
                  } else {
                    response.send({
                      code: 400,
                      error: "Error in PID",
                    });
                  }
                }
              });
            } else {
              response.send({
                code: 204,
                success: "Email and API KEY does not match",
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

