import{S as d,i as c}from"./assets/vendor-5ObWk2rO.js";/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m="24514938-64e9aafcd379537f737cf2780",p="https://pixabay.com/api/";function h(e){const n=new URLSearchParams({key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${p}?${n}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return o.json()})}function g(e){return`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <div class="photo-card">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${e.likes}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${e.views}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${e.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${e.downloads}
            </p>
          </div>
        </div>
      </a>
    </li>
  `}function y(e){return e.map(g).join("")}function b(e){e.innerHTML=""}function L(e){e.style.display="block"}function u(e){e.style.display="none"}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".form"),n=document.querySelector(".search-input"),s=document.querySelector(".gallery"),o=document.querySelector(".loader");let t=new d(".gallery a",{captionsData:"alt",captionDelay:250});e.addEventListener("submit",r);function r(i){i.preventDefault();const l=n.value.trim();if(l===""){c.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}b(s),L(o),h(l).then(a=>{if(u(o),a.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const f=y(a.hits);s.innerHTML=f,t.refresh(),c.success({title:"Success",message:`Found ${a.hits.length} images!`,position:"topRight"})}).catch(a=>{u(o),console.error("Error fetching images:",a),c.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})})}});
//# sourceMappingURL=index.js.map
