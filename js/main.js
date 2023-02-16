// where added
let mainSection = document.getElementById("main-sid");
// what added 
let sectionAdd= document.createElement("section");
// console.log(sectionAdd);
// what added 
let textAdd= document.createElement("h1");
// text added inside element 
textAdd.innerText="hi i can add";
// console.log(textAdd);
// added element to the position 
sectionAdd.appendChild(textAdd);
// console.log(sectionAdd);
mainSection.appendChild(sectionAdd);

let topBannar=document.getElementById("top-banner");
topBannar.classList.add("top-style");
let topBannerClass=document.querySelector(".top-banner");
// console.log(topBannar);
topBannerClass.style.color="red";
// create Element 
let newSection=document.createElement("section");

newSection.innerHTML=`
<section>
            <div>
                <ul>
                    <li>bannana</li>
                    <li>orange</li>
                    <li>aoole</li>
                </ul>
            </div>
        </section>
`
mainSection.appendChild(newSection);



