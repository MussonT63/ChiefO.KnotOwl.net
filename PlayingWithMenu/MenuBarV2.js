function addElement() {
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
  logoImg.setAttribute("src","img/OwlWoodBadgePatrol.svg");

  logoLink.appendChild(logoImg);				//        </img>
  logoDiv.appendChild(logoLink);				//      </a>
  Nav.appendChild(logoDiv);					//    </div>

  let titleDiv = document.createElement("div");			//    <div>	//      <!-- Page title (pulled in from file in local dir) -->
  let titleH2   = document.createElement("h2");			//      <h2 id="siteTitle">
  logoImg.setAttribute("id","siteTitle");
  let titleScript = document.createElement("script");		//        <script type="text/javascript" src="./pageTitle.js">
  logoImg.setAttribute("type","text/javascript");
  logoImg.setAttribute("src","./pageTitle.js");

  titleH2.appendChild(titleScript);				//        </script>
  titleDiv.appendChild(titleH2);				//      </h2>
  Nav.appendChild(titleDiv);					//    </div>

  let menuDiv  = document.createElement("div");			//    <div>	//      <!-- Hamburger button using semantic HTML -->
  let menuButton = document.createElement("button");		//      <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
	string.setAttribute( );
	string.setAttribute( );
	string.setAttribute( );
	string.setAttribute( );
  let menuBarSpan1 = document.createElement("span");		//        <span class="bar">&nbsp;
	string.setAttribute( );
	//        </span> 
  let menuBarSpan2 = document.createElement("span");		//        <span class="bar">&nbsp;
	string.setAttribute( );
	//        </span> 
  let menuBarSpan3 = document.createElement("span");		//        <span class="bar">&nbsp;
	string.setAttribute( );
	//        </span>
	//      </button>
  let menuList = document.createElement("ul");			//      <ul class="nav-menu" id="nav-menu">
	string.setAttribute( );
	string.setAttribute( );
  let menuItem1 = document.createElement("li");			//        <li class="nav-item">
	string.setAttribute( );
  let menuItem1Link = document.createElement("a");		//          <a class="nav-link" href="/">Home
	string.setAttribute( );
	string.setAttribute( );
	//          </a>
	//        </li>
  let menuItem2 = document.createElement("li");			//        <li class="nav-item" onclick="mySubMenu(1)">Advancement
	string.setAttribute( );
	string.setAttribute( );
  let menuListSub1 = document.createElement("ul");		//          <ul id="sub-menu-1" class="sub-menu">
	string.setAttribute( );
	string.setAttribute( );
  let menuItem2Sub1 = document.createElement("li");		//            <li class="sub-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Eagle/">Eagle
	string.setAttribute( );
	string.setAttribute( );
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/MBCinfo/">MBC Info
	string.setAttribute( );
	string.setAttribute( );
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Reports/">Reports
	string.setAttribute( );
	string.setAttribute( );
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Venturing/">Venturing
	string.setAttribute( );
	string.setAttribute( );
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Misc/">Miscellaneous
	string.setAttribute( );
	string.setAttribute( );
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/FAQ/">FAQ
	string.setAttribute( );
	string.setAttribute( );
	//              </a>
	//            </li>
	//          </ul>
	//        </li>
  let menu-Item = document.createElement("li");			//        <li class="nav-item" onclick="mySubMenu(2)">Chief Okemos
	string.setAttribute( );
	string.setAttribute( );
  let menu-List = document.createElement("ul");			//          <ul id="sub-menu-2" class="sub-menu">
	string.setAttribute( );
	string.setAttribute( );
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Laurels/">Laurels
	string.setAttribute( );
	string.setAttribute( );
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/Calendar/">Calendar
	string.setAttribute( );
	string.setAttribute( );
	//              </a>
	//            </li>
  let menu-Item = document.createElement("li");			//            <li class="sub-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//              <a class="nav-link" href="/FAQ/">FAQ
	string.setAttribute( );
	string.setAttribute( );
	//              </a>
	//            </li>
	//          </ul>
	//        </li>
  let menu-Item = document.createElement("li");			//        <li class="nav-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//          <a class="nav-link" href="/about.html">About
	string.setAttribute( );
	string.setAttribute( );
	//          </a>
	//        </li>
  let menu-Item = document.createElement("li");			//        <li class="nav-item">
	string.setAttribute( );
  let menu-Link = document.createElement("a");			//          <a class="nav-link" href="/PlayingWithMenu/">PlayingWithMenu
	string.setAttribute( );
	string.setAttribute( );
	//          </a>
	//        </li>
	//      </ul>
	//    </div>
	//  </nav>

  Header.appendChild(Nav);					//</header>
}
addElement(); // run the addElement function created above




//document.write( "  <header>" )
//document.write( "    <nav class='navbar'>" )
//document.write( "      <div> <!-- Site Logo -->" )
//document.write( "        <a href='.' class='nav-branding'><img alt='Wood Badge Owl' width='35' src='/img/OwlWoodBadgePatrol.svg'></a>" )
//document.write( "      </div>" )
//document.write( "      <div> <!-- Page title (pulled in from file in local dir) -->" )
//document.write( "        <h2 id='siteTitle'>" )
//document.write( "        <script type='text/javascript' src='./pageTitle.js'></script></h2>" )
//document.write( "      </div>" )
//document.write( "      <div> <!-- Hamburger button using semantic HTML -->" )
//document.write( "        <button class='hamburger' id='hamburger' aria-label='Toggle navigation' aria-expanded='false'> <span class='bar'>&nbsp;</span> <span class='bar'>&nbsp;</span> <span class='bar'>&nbsp;</span></button>" )
//document.write( "        <ul class='nav-menu' id='nav-menu'>" )
//document.write( "          <li class='nav-item'> <a class='nav-link' href='/'>Home</a> </li>" )
//document.write( "          <li class='nav-item' onclick='mySubMenu(1)'>Advancement" )
//document.write( "            <ul id='sub-menu-1' class='sub-menu'>" )
//document.write( "              <li class='sub-item'> <a class='nav-link' href='/Eagle/'>Eagle</a> </li>" )
//document.write( "              <li class='sub-item'> <a class='nav-link' href='/MBCinfo/'>MBC Info</a> </li>" )
//document.write( "              <li class='sub-item'> <a class='nav-link' href='/Reports/'>Reports</a> </li>" )
//document.write( "              <li class='sub-item'> <a class='nav-link' href='/Venturing/'>Venturing</a> </li>" )
//document.write( "              <li class='sub-item'> <a class='nav-link' href='/Misc/'>Miscellaneous</a> </li>" )
//document.write( "              <li class='sub-item'> <a class='nav-link' href='/FAQ/'>FAQ</a> </li>" )
//document.write( "            </ul>" )
//document.write( "          </li>" )
//document.write( "          <li class='nav-item' onclick='mySubMenu(2)'>Chief Okemos" )
//document.write( "            <ul id='sub-menu-2' class='sub-menu'>" )
//document.write( "              <li class='sub-item'> <a class='nav-link' href='/Laurels/'>Laurels</a> </li>" )
//document.write( "              <li class='sub-item'> <a class='nav-link' href='/Calendar/'>Calendar</a> </li>" )
//document.write( "              <li class='sub-item'> <a class='nav-link' href='/FAQ/'>FAQ</a> </li>" )
//document.write( "            </ul>" )
//document.write( "          </li>" )
//document.write( "          <li class='nav-item'> <a class='nav-link' href='/about.html'>About</a> </li>" )
//document.write( "          <li class='nav-item'> <a class='nav-link' href='/PlayingWithMenu/'>PlayingWithMenu</a> </li>" )
//document.write( "        </ul>" )
//document.write( "      </div>" )
//document.write( "    </nav>" )
//document.write( "  </header>" )

document.write( "        <script type='text/javascript' src='/js/menuFunction.js'></script> <!-- Load the menu Function -->" )
/*
*/

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


