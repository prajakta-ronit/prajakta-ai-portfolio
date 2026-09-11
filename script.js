const body=document.body, themeBtn=document.getElementById("themeBtn");
const saved=localStorage.getItem("theme");
if(saved==="light"){body.classList.add("light");themeBtn.textContent="☀";}
themeBtn.addEventListener("click",()=>{body.classList.toggle("light");const light=body.classList.contains("light");localStorage.setItem("theme",light?"light":"dark");themeBtn.textContent=light?"☀":"☾";});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
window.addEventListener("scroll",()=>{const h=document.documentElement;document.querySelector(".progress").style.width=((h.scrollTop)/(h.scrollHeight-h.clientHeight)*100)+"%";});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const el=document.querySelector(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}}));
