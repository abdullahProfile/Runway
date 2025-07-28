window.addEventListener("scroll", function()  {
  const btn=document.getElementById("backBtn");

  if(window.scrollY >500){
    btn.style.display="block";
  }else {
    btn.style.display="none"
  }
}
);

function scrollTop () {
  window.scrollTo(
    {
      top:0,
      behavior: "smooth"
    }
  )
}

document.addEventListener("DOMContentLoaded", function()
{
  const btn=document.getElementById("backBtn");
  btn.addEventListener("click",scrollTop);
}
)