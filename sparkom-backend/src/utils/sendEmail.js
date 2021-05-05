var api_key = "3d16c91a2304846f31dd68be5189f2f5-4b1aa784-ba84b741";
var domain =
  "https://api.mailgun.net/v3/sandbox00d1d2716c5e41adb5ebf18caea88363.mailgun.org";
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

var data = {
  from: "Sparkom <sparkit.sparkom@gmail.com>",
  to: "aziz.arfaou.98@gmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomeness!",
};

const sendEmail = async () => {
  const response = await mailgun.messages().send(data);
  console.log(response);
};

module.exports = sendEmail;
