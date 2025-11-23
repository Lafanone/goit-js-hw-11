import{a as u,S as d,i as a}from"./assets/vendor-MgecxatS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(i){const s="https://pixabay.com/api/",o={key:"53374557-3f57f89b9c540f2869ff2907f",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(s,{params:o}).then(e=>e.data)}let p=new d(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery"),f=document.querySelector(".loader");function g(i){const s=i.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span class="info-item-value">${t.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span class="info-item-value">${t.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span class="info-item-value">${t.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span class="info-item-value">${t.downloads}</span>
          </div>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",s),p.refresh()}function y(){c.innerHTML=""}function h(){f.classList.remove("is-hidden")}function v(){f.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const s=i.target.elements["search-text"].value.trim();if(!s){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}y(),h(),m(s).then(t=>{if(t.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(t=>{console.error(t),a.error({title:"Error",message:"Something went wrong! Please try again later.",position:"topRight"})}).finally(()=>{v(),l.reset()})});
//# sourceMappingURL=index.js.map
