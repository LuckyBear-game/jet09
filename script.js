document.addEventListener("DOMContentLoaded",()=>{
  const updated=document.querySelector("#updated");
  if(updated) updated.textContent=new Intl.DateTimeFormat("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date());
  const menu=document.querySelector(".menu-btn"), nav=document.querySelector(".desktop-nav");
  if(menu){
    menu.addEventListener("click",()=>{
      const open=menu.getAttribute("aria-expanded")==="true";
      menu.setAttribute("aria-expanded",String(!open));
      if(!open){nav.style.display="flex";nav.style.position="absolute";nav.style.top="62px";nav.style.left="14px";nav.style.right="14px";nav.style.padding="18px";nav.style.flexDirection="column";nav.style.background="#0b0f14";nav.style.border="1px solid #232c37";nav.style.borderRadius="16px";}
      else nav.removeAttribute("style");
    });
  }
  document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
  }));
});