let total = 0;
let html = 1000;
let css = 2000;
let js = 1500;
let py = 2500;
let sql = 900;

total = 0;
htmlAdded = false;
cssAdded = false;
jsAdded = false;
pyAdded = false;
sqlAdded = false;

function clearValues() {
  total = 0;
  htmlAdded = false;
  cssAdded = false;
  jsAdded = false;
  pyAdded = false;
  sqlAdded = false;

  document.getElementById("display_html").innerHTML = "";
  document.getElementById("display_css").innerHTML = "";
  document.getElementById("display_js").innerHTML = "";
  document.getElementById("display_py").innerHTML = "";
  document.getElementById("display_sql").innerHTML = "";

  updateTotal();
}

function add_html() {
  if (!htmlAdded) {
    document.getElementById("display_html").innerHTML = "HTML :" + html;
    total += html;
    htmlAdded = true;
  }
  updateTotal();
}

function remove_html() {
  if (htmlAdded) {
    document.getElementById("display_html").innerHTML = "";
    total -= html;
    htmlAdded = false;
  }
  updateTotal();
}

function add_css() {
  if (!cssAdded) {
    document.getElementById("display_css").innerHTML = "CSS :" + css;
    total += css;
    cssAdded = true;
  }
  updateTotal();
}

function remove_css() {
  if (cssAdded) {
    document.getElementById("display_css").innerHTML = "";
    total -= css;
    cssAdded = false;
  }
  updateTotal();
}

function add_js() {
  if (!jsAdded) {
    document.getElementById("display_js").innerHTML = "JavaScript :" + js;
    total += js;
    jsAdded = true;
  }
  updateTotal();
}

function remove_js() {
  if (jsAdded) {
    document.getElementById("display_js").innerHTML = "";
    total -= js;
    jsAdded = false;
  }
  updateTotal();
}

function add_py() {
  if (!pyAdded) {
    document.getElementById("display_py").innerHTML = "Python :" + py;
    total += py;
    pyAdded = true;
  }
  updateTotal();
}

function remove_py() {
  if (pyAdded) {
    document.getElementById("display_py").innerHTML = "";
    total -= py;
    pyAdded = false;
  }
  updateTotal();
}

function add_sql() {
  if (!sqlAdded) {
    document.getElementById("display_sql").innerHTML = "Sql :" + sql;
    total += sql;
    sqlAdded = true;
  }
  updateTotal();
}

function remove_sql() {
  if (sqlAdded) {
    document.getElementById("display_sql").innerHTML = "";
    total -= sql;
    sqlAdded = false;
  }
  updateTotal();
}

function updateTotal() {
  if (total >= 0) {
    document.getElementById("result").innerHTML = total;
  } else {
    document.getElementById("result").innerHTML = Math.abs(total);
  }
  checkDisplay();
}

function checkDisplay() {
  if (total === 0) {
    document.getElementById("shopping").style.display = "none";
  } else {
    document.getElementById("shopping").style.display = "block";
  }
}

function clickclose() {
  clearValues();
  document.getElementById("shopping").style.display = "none";
}
