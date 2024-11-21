let v = new Date(); // Current date and time
let expr = "datetime(".concat(stringify(v), ")");

console.log(expr); // Outputs something like "datetime(Sun Jun 24 2024 15:00:00 GMT+0300 (East Africa Time))"
