function olwsAdvancementMenu() {
  let Header   = document.createElement("header");		//<header>
  let Nav      = document.createElement("nav");			//  <nav class="navbar">
      Nav.setAttribute("class","navbar");

  let logoDiv  = document.createElement("div");			//    <div>	//      <!-- Site Logo -->
  let logoLink = document.createElement("a");			//      <a href="." class="nav-branding">
      logoLink.setAttribute("href",".");
      logoLink.setAttribute("class","nav-branding");

  let logoImg  = document.createElement("img");			//        <img alt="Wood Badge Owl" width="35" src="/img/OwlWoodBadgePatrol.svg">
      logoImg.setAttribute("alt","Wood Badge Owl");
      logoImg.setAttribute("width","35");
      logoImg.setAttribute("src","/img/OwlWoodBadgePatrol.svg"); //        </img> not needed...

  logoLink.appendChild(logoImg);				//      </a>
  logoDiv.appendChild(logoLink);				//    </div>
  Nav.appendChild(logoDiv);					//  </nav> appending a first div to nav

  let titleDiv = document.createElement("div");			//    <div>	//      <!-- Page title (pulled in from file in local dir) -->
  let titleH2   = document.createElement("h2");			//      <h2 id="siteTitle">
      titleH2.setAttribute("id","siteTitle");
  let titleScript = document.createElement("script");		//        <script type="text/javascript" src="./pageTitle.js">
      titleScript.setAttribute("type","text/javascript");
      titleScript.setAttribute("src","./pageTitle.js");

  titleH2.appendChild(titleScript);				//      </h2>
  titleDiv.appendChild(titleH2);				//    </div>
  Nav.appendChild(titleDiv);					//  </nav> appending a second div to nav

  let menuDiv  = document.createElement("div");			//    <div>	//      <!-- Hamburger button using semantic HTML -->
  let menuButton = document.createElement("button");		//      <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
      menuButton.setAttribute("class","hamburger");
      menuButton.setAttribute("id","hamburger");
      menuButton.setAttribute("aria-label","Toggle navigation");
      menuButton.setAttribute("aria-expanded","false");

  let menuBar1Span = document.createElement("span");		//        <span class="bar">&nbsp;
      menuBar1Span.setAttribute("class","bar");		// &nbsp;

  menuButton.appendChild(menuBar1Span);				//      </button> first bar

  let menuBar2Span = document.createElement("span");		//        <span class="bar">&nbsp;
      menuBar2Span.setAttribute("class","bar");		// &nbsp;

  menuButton.appendChild(menuBar2Span);				//      </button> second bar

  let menuBar3Span = document.createElement("span");		//        <span class="bar">&nbsp;
      menuBar3Span.setAttribute("class","bar");		// &nbsp;

  menuButton.appendChild(menuBar3Span);				//      </button> third bar
  menuDiv.appendChild(menuButton);				//    </div>
  Nav.appendChild(menuDiv);					//  </nav> appending a third div to nav

  let menuList = document.createElement("ul");			//      <ul class="nav-menu" id="nav-menu">
      menuList.setAttribute( "class","nav-menu");
      menuList.setAttribute( "id","nav-menu");

  let menuHome = document.createElement("li");			//        <li class="nav-item">
      menuHome.setAttribute( "class","nav-item");
  let menuHomeLink = document.createElement("a");		//          <a class="nav-link" href="/">Home
      menuHomeLink.setAttribute( "class","nav-link");
      menuHomeLink.setAttribute( "href","/");			// Home

  let menuHomeLinkText = document.createTextNode("Home");	// and give it some content
	
  menuHomeLink.appendChild(menuHomeLinkText);
  menuHome.appendChild(menuHomeLink);
  menuList.appendChild(menuHome);
	//          </a>
	//        </li>
  let menuAdvancement = document.createElement("li");			//        <li class="nav-item" onclick="mySubMenu(1)">Advancement
      menuAdvancement.setAttribute( "class","nav-item");
      menuAdvancement.setAttribute( "onclick","mySubMenu(1)"); // Advancement

  let menuAdvancementText = document.createTextNode("Advancement");	// and give it some content

  menuAdvancement.appendChild(menuAdvancementText);
  menuList.appendChild(menuAdvancement);
  menuDiv.appendChild(menuList);				//    </div> at the same level as <button>...

  let menuAdvancementList = document.createElement("ul");		//          <ul id="sub-menu-1" class="sub-menu">
      menuAdvancementList.setAttribute( "id","sub-menu-1");
      menuAdvancementList.setAttribute( "class","sub-menu");
  let menuAdvancementEagle = document.createElement("li");		//            <li class="sub-item">
      menuAdvancementEagle.setAttribute( "class","sub-item");
  let menuAdvancementEagleLink = document.createElement("a");			//              <a class="nav-link" href="/Eagle/">Eagle
      menuAdvancementEagleLink.setAttribute( "class","nav-link");
      menuAdvancementEagleLink.setAttribute( "href","/Eagle/");		 // Eagle
	//              </a>
	//            </li>
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/*
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
      menu-Item.setAttribute( "class","sub-item");
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/MBCinfo/">MBC Info
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/MBCinfo/");	// MBC Info
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
      menu-Item.setAttribute( "class","sub-item");
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Reports/">Reports
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/Reports/");	// Reports
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
      menu-Item.setAttribute( "class","sub-item");
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Venturing/">Venturing
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/Venturing/">);	// Venturing
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
      menu-Item.setAttribute( "class","sub-item");
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Misc/">Miscellaneous
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/Misc/");		// Miscellaneous
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
      menu-Item.setAttribute( "class","sub-item");
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/FAQ/">FAQ
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/FAQ/");		// FAQ
	//              </a>
	//            </li>
	//          </ul>
	//        </li>
  let menu-Item = document.createElement("li");			//        <li class="nav-item" onclick="mySubMenu(2)">Chief Okemos
      menu-Item.setAttribute( "class","nav-item");
      menu-Item.setAttribute( "onclick","mySubMenu(2)");	// Chief Okemos
  let menu-List = document.createElement("ul");			//          <ul id="sub-menu-2" class="sub-menu">
      menu-List.setAttribute( "id","sub-menu-2");
      menu-List.setAttribute( "class","sub-menu");
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
      menu-Item.setAttribute( "class","sub-item");
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Laurels/">Laurels
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/Laurels/");	// Laurels
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
      menu-Item.setAttribute( "class","sub-item");
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Calendar/">Calendar
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/Calendar/");	// Calendar
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
      menu-Item.setAttribute( "class","sub-item");
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/FAQ/">FAQ
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/FAQ/");		// FAQ
	//              </a>
	//            </li>
	//          </ul>
	//        </li>
  let menu-Item = document.createElement("li");			//        <li class="nav-item">
      menu-Item.setAttribute( "class","nav-item");
  let menu-Link = document.createElement("a");			//          <a class="nav-link" href="/about.html">About
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/about.html");	// About
	//          </a>
	//        </li>
  let menu-Item = document.createElement("li");			//        <li class="nav-item">
      menu-Item.setAttribute( "class","nav-item");
  let menu-Link = document.createElement("a");			//          <a class="nav-link" href="/PlayingWithMenu/">PlayingWithMenu
      menu-Link.setAttribute( "class","nav-link");
      menu-Link.setAttribute( "href","/PlayingWithMenu/"); // PlayingWithMenu
	//          </a>
	//        </li>
	//      </ul>
	//    </div>
	//  </nav>
*/
  Header.appendChild(Nav);					//</header> - make Nav a child of Header...

  let domMenu = document.getElementById("Menu");		// add the newly created element and its content into the DOM
  document.body.insertBefore(Header, domMenu);			// add the newly created element and its content into the DOM
} olwsAdvancementMenu(); // run the olwsAdvancementMenu function created above


document.write( "<br><hr><br>" )



/*
document.write( "  <header>" )
document.write( "    <nav class='navbar'>" )
document.write( "      <div> <!-- Site Logo -->" )
document.write( "        <a href='.' class='nav-branding'><img alt='Wood Badge Owl' width='35' src='/img/OwlWoodBadgePatrol.svg'></a>" )
document.write( "      </div>" )
document.write( "      <div> <!-- Page title (pulled in from file in local dir) -->" )
document.write( "        <h2 id='siteTitle'>" )
document.write( "        html in js <!--script type='text/javascript' src='./pageTitle.js'></script!--></h2>" )
document.write( "      </div>" )
document.write( "      <div> <!-- Hamburger button using semantic HTML -->" )
document.write( "        <button class='hamburger' id='hamburger' aria-label='Toggle navigation' aria-expanded='false'>" )
document.write( "          <span class='bar'></span>" )
document.write( "          <span class='bar'>&nbsp;</span>" )
document.write( "          <span class='bar'>&nbsp;</span>" )
document.write( "        </button>" )
document.write( "        <ul class='nav-menu' id='nav-menu'>" )
document.write( "          <li class='nav-item'> <a class='nav-link' href='/'>Home</a> </li>" )
document.write( "          <li class='nav-item' onclick='mySubMenu(1)'>Advancement" )
document.write( "            <ul id='sub-menu-1' class='sub-menu'>" )
document.write( "              <li class='sub-item'> <a class='nav-link' href='/Eagle/'>Eagle</a> </li>" )
document.write( "              <li class='sub-item'> <a class='nav-link' href='/MBCinfo/'>MBC Info</a> </li>" )
document.write( "              <li class='sub-item'> <a class='nav-link' href='/Reports/'>Reports</a> </li>" )
document.write( "              <li class='sub-item'> <a class='nav-link' href='/Venturing/'>Venturing</a> </li>" )
document.write( "              <li class='sub-item'> <a class='nav-link' href='/Misc/'>Miscellaneous</a> </li>" )
document.write( "              <li class='sub-item'> <a class='nav-link' href='/FAQ/'>FAQ</a> </li>" )
document.write( "            </ul>" )
document.write( "          </li>" )
document.write( "          <li class='nav-item' onclick='mySubMenu(2)'>Chief Okemos" )
document.write( "            <ul id='sub-menu-2' class='sub-menu'>" )
document.write( "              <li class='sub-item'> <a class='nav-link' href='/Laurels/'>Laurels</a> </li>" )
document.write( "              <li class='sub-item'> <a class='nav-link' href='/Calendar/'>Calendar</a> </li>" )
document.write( "              <li class='sub-item'> <a class='nav-link' href='/FAQ/'>FAQ</a> </li>" )
document.write( "            </ul>" )
document.write( "          </li>" )
document.write( "          <li class='nav-item'> <a class='nav-link' href='/about.html'>About</a> </li>" )
document.write( "          <li class='nav-item'> <a class='nav-link' href='/PlayingWithMenu/'>PlayingWithMenu</a> </li>" )
document.write( "        </ul>" )
document.write( "      </div>" )
document.write( "    </nav>" )
document.write( "  </header>" )

*/
document.write( "        <script type='text/javascript' src='/js/menuFunction.js'></script> <!-- Load the menu Function -->" )

/*
// Sub Menu bits
function mySubMenu(i) {
  let subMenu = document.getElementById(`sub-menu-${i}`);
  subMenu.style.display = subMenu.style.display == "block" ? "none" : "block";
}

// Hamburger Menu bits
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on both the hamburger and the menu
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');

  // Toggle the aria-expanded attribute for accessibility
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !isExpanded);
});
*/


/*
function exampleAddElement() {
  let newH2 = document.createElement("h2");			// create a new h2 element
  let newH2Content = document.createTextNode("js example");	// and give it some content
  newH2.appendChild(newH2Content);				// add the text node to the newly created div
  let currentDiv = document.getElementById("div1");		// add the newly created element and its content into the DOM
  document.body.insertBefore(newH2, currentDiv);		// add the newly created element and its content into the DOM
} exampleAddElement();
 */
