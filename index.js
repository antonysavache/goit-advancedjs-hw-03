import{S as f,i}from"./assets/vendor-5ObWk2rO.js";/* empty css                      */(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const m="24514938-64e9aafcd379537f737cf2780",p="https://pixabay.com/api/";function d(e){const s=new URLSearchParams({key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${p}?${s}`;return fetch(o).then(n=>{if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return n.json()})}function h(e){return`
    <a href="${e.largeImageURL}" class="gallery-item">
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
  `}function g(e){return e.map(h).join("")}function y(e){e.innerHTML=""}function b(e){e.style.display="block"}function l(e){e.style.display="none"}const L=document.querySelector("#search-form"),w=document.querySelector("#search-input"),u=document.querySelector(".gallery"),c=document.querySelector(".loader");let S=new f(".gallery a",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",P);function P(e){e.preventDefault();const s=w.value.trim();if(s===""){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}y(u),b(c),d(s).then(o=>{if(l(c),o.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=g(o.hits);u.innerHTML=n,S.refresh(),i.success({title:"Success",message:`Found ${o.hits.length} images!`,position:"topRight"})}).catch(o=>{l(c),console.error("Error fetching images:",o),i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})})}
//# sourceMappingURL=index.js.map
