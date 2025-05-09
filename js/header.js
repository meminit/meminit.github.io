// literally just checks if a header exists and if not it will add the header

async function loadHeader() {
  const newHeaderText = await fetch("https://meminit.github.io/header.html", {
    method: "GET",
  });

  const newHeaderCSS = await fetch("https://meminit.github.io/css/header.css", {
    method: "GET",
  });

  try {
    document.querySelector('.MainHeader').remove()
  } catch (err) {
    console.warn('Attempted to delete main header, may not have class name. Falling Back')

    document.querySelectorAll('header').forEach(element => {

      if (!element.className) {
        element.remove()
        console.log('Removing classless header')
      } 

      
      
      

    });
  }

  try {
    document.querySelector('.mobiletitleheader').remove()
  } catch (err) {
    console.log(`error? ${err}`)
    console.log('No outdated header 👍')
  }
  

  

  const css2output = await newHeaderCSS.text();

  const res = await newHeaderText.text();

  const div = document.createElement("div");

  const css = document.createElement("style");

  css.innerHTML += css2output;

  document.head.appendChild(css);

  const mobileHeader = document.createElement("div");

  mobileHeader.className = "testMobileHeader";

  mobileHeader.innerHTML += `
                <button title="Open Options" class="openButton">
                =
            </button>
    
    `;

  document.body.prepend(mobileHeader);

  const mobilePanel = document.createElement("div");

  mobilePanel.className = "mobileMenu";

  mobilePanel.innerHTML = `
        <a href="/home" class="defaultLink">Home</a>
        <a href="/tools" class="defaultLink">Tools</a>
        <a href="/faq" class="defaultLink">FAQ</a>
        <a href="/aboutme" class="defaultLink">About Me</a>
        <a href="/suggestions" class="defaultLink">Suggestions</a>
        <a href="/helpers" class="defaultLink">Helpers</a>
        <a href="/discord" class="defaultLink">Discord</a>

    `;

  document.body.prepend(mobilePanel);

  div.className = "mainHeader"

  div.innerHTML += res;

  document.body.prepend(div);

  const btnScriptFetch = await fetch("https://meminit.github.io/js/pages.js", {
    method: "GET",
  });

  const btnScript = await btnScriptFetch.text();

  const scriptInHTML = document.createElement("script");

  scriptInHTML.innerText = btnScript;

  scriptInHTML.textContent += `
        let open = false

        document.querySelector('.openButton').addEventListener('click', () => {
            if (!open) {
                document.querySelector('.mobileMenu').style.display = 'flex'
                document.querySelector('.openButton').style.transform = 'rotateZ(90deg)'
                open = true
                console.log('Open Now')
                return
            }

            if (open) {
                document.querySelector('.mobileMenu').style.display = 'none'
                document.querySelector('.openButton').style.transform = 'rotateZ(0deg)'
                open = false
                console.log('Closed Now')
                return
            }
        });`;

  document.body.appendChild(scriptInHTML);
}

document.addEventListener("DOMContentLoaded", () => {
  const headerLoaded = document.querySelector(".MainHeader");

  console.log(headerLoaded) 


  if (!headerLoaded) {
    loadHeader();
    return;
  }

  if (!document.querySelector(".testMobileHeader")) {
    loadHeader();
    return
  }
});
