function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("4CFr7"),a=o("eWCmQ"),l=o("fZKcF");const s={form:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery")};let c=40,f=!1;const u=new(0,i.default);function d(){f=!0,u.fetchImages().then((({totalHits:n,hits:t})=>{if(c>n)e(a).Notify.failure("We're sorry, but you've reached the end of search results.");else if(0!==t.length){e(a).Notify.success(`Hooray! We found ${c} images.`),function(e){const n=e.map((e=>`<div class="photo-card">\n  <a href="${e.largeImageURL}" class="gallery__item">\n    <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />\n  </a>\n  <div class="info">\n    <p class="info-item"><b>Likes</b>${e.likes}</p>\n    <p class="info-item"><b>Views</b>${e.views}</p>\n    <p class="info-item"><b>Comments</b>${e.comments}</p>\n    <p class="info-item"><b>Downloads</b>${e.comments}</p>\n  </div>\n</div>`)).join("");s.galleryContainer.insertAdjacentHTML("beforeend",n)}(t);new(e(l))(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),c+=t.length,f=!1}else e(a).Notify.failure("Sorry, there are no images matching your search query. Please try again.")}))}s.form.addEventListener("submit",(function(n){if(n.preventDefault(),u.query=n.currentTarget.elements.searchQuery.value,!u.query)return void e(a).Notify.failure("Search box cannot be empty. Please enter the word.");u.resetPage(),s.galleryContainer.innerHTML="",d(),s.form.reset()})),window.addEventListener("scroll",(function(){const e=document.documentElement.getBoundingClientRect(),n=s.galleryContainer.firstElementChild.getBoundingClientRect();if(f)return;e.bottom<2*n.height&&d()}));
//# sourceMappingURL=02-infinite-scroll.1c5ec586.js.map
