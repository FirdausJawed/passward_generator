const passwordBox = document.getElementById("passward");
const len = 12;
const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lower = "qwertyuiopasdfghjklzxcvbnm";
const num = "1234567890";
const sym = "!@#$%^&*()_+=-{}[]|\?/><:;~";
const allchar = upper + lower + num + sym;

function createrpassward() {
      let passward = "";
      while (len > passward.length) {
            passward += allchar[Math.floor(Math.random() * allchar.length)];
      }
      passwordBox.value = passward;
}

function copypassword() {
      passwordBox.select();
      document.execCommand("copy");

}
