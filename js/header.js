// literally just checks if a header exists and if not it will add the header

const header = document.querySelector("header");

async function loadHeader() {
  const newHeaderText = await fetch("/header.html", () => {
    method: "GET";
  });

  const res = await newHeaderText.text();

  const div = document.createElement("div");

  const css = document.createElement("style");

  css.innerHTML = `
        .testMobileHeader {
            display: none;
        }

        @media (orientation: portrait) {
            .MainHeader {
                display: none;
            }
            
            .testMobileHeader {
                display: flex;
                flex-direction: row;
                justify-content: end;
                align-items: center;
                height: 100px;
            }

            .openButton {
                max-height: 100%;
                max-width: 90px;
                width: 90px;
                margin-right: 20px;
                height: 90px;
                background-color: rgba(1,1, 1, 0);
                border: none;
                font-size: xx-large;
                transition: all 0.2s ease;
                z-index: 25;

            }

            .openButton:hover {
                
                /* transform: rotateZ(90deg); */
            }


        }

        .mobileMenu {
            background-color: white;
            position: absolute;
            z-index: 10;
            width: 100%;
            height: 0px;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.2s ease;
        }

        .defaultLink {
            color: black;
            text-decoration: none;
            font-size: xx-large;

        }
`;

  document.head.appendChild(css);

  const mobileHeader = document.createElement("div");

  mobileHeader.className = "testMobileHeader";

  mobileHeader.innerHTML += `
                <button title="Open Options" class="openButton">
                =
            </button>
    
    `;

  const mobilePanel = document.createElement("div");

  mobilePanel.className = "mobileMenu";

  mobilePanel.innerHTML =
    '            <a href="/tools" class="defaultLink">Tools</a>';

  div.innerHTML += res;

  document.prepend(div);

  const btnScriptFetch = await fetch("s/js/pages.js", {
    method: "GET",
  });

  const btnScript = await btnScriptFetch.text();

  const scriptInHTML = document.createElement("script");

  scriptInHTML.innerText = btnScript;

  scriptInHTML.innerText += `
        let open = false

        document.querySelector('.openButton').addEventListener('click', () => {
            if (!open) {
                document.querySelector('.mobileMenu').style.display = 'flex'
                document.querySelector('.mobileMenu').style.opacity = '1'
                document.querySelector('.openButton').style.transform = 'rotateZ(90deg)'
                open = true
                console.log('Open Now')
                return
            }

            if (open) {
                document.querySelector('.mobileMenu').style.display = 'none'
                              document.querySelector('.mobileMenu').style.opacity = '0'
                document.querySelector('.openButton').style.transform = 'rotateZ(0deg)'
                open = false
                console.log('Closed Now')
                return
            }
        });`;
}

document.addEventListener("DOMContentLoaded", () => {
  if (!header) {
    loadHeader();
    return;
  }

  if (!document.querySelector(".testMobileHeader")) {
  }
});
