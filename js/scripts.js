(function(){var __sections__={};(function(){for(var i=0,s=document.getElementById("sections-script").getAttribute("data-sections").split(",");i<s.length;i++)__sections__[s[i]]=!0})(),function(){if(__sections__["advertorial-by-turbo"])try{let removeDisable2=function(){document.querySelectorAll(".ymp-buy-button").forEach(button=>{button.disabled=!1,button.classList.remove("disabled")})},defaultVariant2=function(){document.querySelector('input[value="P\xE1prica"]').click(),document.querySelector('input[value="2"]').click()};var removeDisable=removeDisable2,defaultVariant=defaultVariant2;setInterval(removeDisable2(),1e3),defaultVariant2()}catch(e){console.error(e)}}(),function(){if(!(!__sections__["header-by-turbo"]&&!window.DesignMode))try{class StickyHeader extends HTMLElement{constructor(){super()}connectedCallback(){this.header=document.querySelector(".section-header"),this.headerIsAlwaysSticky=this.getAttribute("data-sticky-type")==="always"||this.getAttribute("data-sticky-type")==="reduce-logo-size",this.headerBounds={},this.setHeaderHeight(),window.matchMedia("(max-width: 990px)").addEventListener("change",this.setHeaderHeight.bind(this)),this.headerIsAlwaysSticky&&this.header.classList.add("shopify-section-header-sticky"),this.currentScrollTop=0,this.preventReveal=!1,this.predictiveSearch=this.querySelector("predictive-search"),this.onScrollHandler=this.onScroll.bind(this),this.hideHeaderOnScrollUp=()=>this.preventReveal=!0,this.addEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.addEventListener("scroll",this.onScrollHandler,!1),this.createObserver()}setHeaderHeight(){document.documentElement.style.setProperty("--header-height",`${this.header.offsetHeight}px`)}disconnectedCallback(){this.removeEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.removeEventListener("scroll",this.onScrollHandler)}createObserver(){new IntersectionObserver((entries,observer2)=>{this.headerBounds=entries[0].intersectionRect,observer2.disconnect()}).observe(this.header)}onScroll(){const scrollTop=window.pageYOffset||document.documentElement.scrollTop;if(!(this.predictiveSearch&&this.predictiveSearch.isOpen)){if(scrollTop>this.currentScrollTop&&scrollTop>this.headerBounds.bottom){if(this.header.classList.add("scrolled-past-header"),this.preventHide)return;requestAnimationFrame(this.hide.bind(this))}else scrollTop<this.currentScrollTop&&scrollTop>this.headerBounds.bottom?(this.header.classList.add("scrolled-past-header"),this.preventReveal?(window.clearTimeout(this.isScrolling),this.isScrolling=setTimeout(()=>{this.preventReveal=!1},66),requestAnimationFrame(this.hide.bind(this))):requestAnimationFrame(this.reveal.bind(this))):scrollTop<=this.headerBounds.top&&(this.header.classList.remove("scrolled-past-header"),requestAnimationFrame(this.reset.bind(this)));this.currentScrollTop=scrollTop}}hide(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-hidden","shopify-section-header-sticky"),this.closeMenuDisclosure(),this.closeSearchModal())}reveal(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-sticky","animate"),this.header.classList.remove("shopify-section-header-hidden"))}reset(){this.headerIsAlwaysSticky||this.header.classList.remove("shopify-section-header-hidden","shopify-section-header-sticky","animate")}closeMenuDisclosure(){this.disclosures=this.disclosures||this.header.querySelectorAll("header-menu"),this.disclosures.forEach(disclosure=>disclosure.close())}closeSearchModal(){this.searchModal=this.searchModal||this.header.querySelector("details-modal"),this.searchModal.close(!1)}}customElements.define("sticky-header",StickyHeader)}catch(e){console.error(e)}}(),function(){if(__sections__.header)try{class StickyHeader extends HTMLElement{constructor(){super()}connectedCallback(){this.header=document.querySelector(".section-header"),this.headerIsAlwaysSticky=this.getAttribute("data-sticky-type")==="always"||this.getAttribute("data-sticky-type")==="reduce-logo-size",this.headerBounds={},this.setHeaderHeight(),window.matchMedia("(max-width: 990px)").addEventListener("change",this.setHeaderHeight.bind(this)),this.headerIsAlwaysSticky&&this.header.classList.add("shopify-section-header-sticky"),this.currentScrollTop=0,this.preventReveal=!1,this.predictiveSearch=this.querySelector("predictive-search"),this.onScrollHandler=this.onScroll.bind(this),this.hideHeaderOnScrollUp=()=>this.preventReveal=!0,this.addEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.addEventListener("scroll",this.onScrollHandler,!1),this.createObserver()}setHeaderHeight(){document.documentElement.style.setProperty("--header-height",`${this.header.offsetHeight}px`)}disconnectedCallback(){this.removeEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.removeEventListener("scroll",this.onScrollHandler)}createObserver(){new IntersectionObserver((entries,observer2)=>{this.headerBounds=entries[0].intersectionRect,observer2.disconnect()}).observe(this.header)}onScroll(){const scrollTop=window.pageYOffset||document.documentElement.scrollTop;if(!(this.predictiveSearch&&this.predictiveSearch.isOpen)){if(scrollTop>this.currentScrollTop&&scrollTop>this.headerBounds.bottom){if(this.header.classList.add("scrolled-past-header"),this.preventHide)return;requestAnimationFrame(this.hide.bind(this))}else scrollTop<this.currentScrollTop&&scrollTop>this.headerBounds.bottom?(this.header.classList.add("scrolled-past-header"),this.preventReveal?(window.clearTimeout(this.isScrolling),this.isScrolling=setTimeout(()=>{this.preventReveal=!1},66),requestAnimationFrame(this.hide.bind(this))):requestAnimationFrame(this.reveal.bind(this))):scrollTop<=this.headerBounds.top&&(this.header.classList.remove("scrolled-past-header"),requestAnimationFrame(this.reset.bind(this)));this.currentScrollTop=scrollTop}}hide(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-hidden","shopify-section-header-sticky"),this.closeMenuDisclosure(),this.closeSearchModal())}reveal(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-sticky","animate"),this.header.classList.remove("shopify-section-header-hidden"))}reset(){this.headerIsAlwaysSticky||this.header.classList.remove("shopify-section-header-hidden","shopify-section-header-sticky","animate")}closeMenuDisclosure(){this.disclosures=this.disclosures||this.header.querySelectorAll("header-menu"),this.disclosures.forEach(disclosure=>disclosure.close())}closeSearchModal(){this.searchModal=this.searchModal||this.header.querySelector("details-modal"),this.searchModal.close(!1)}}customElements.define("sticky-header",StickyHeader)}catch(e){console.error(e)}}(),function(){if(__sections__["main-blog"])try{let clickLabels2=function(label){const alltabs=document.querySelectorAll(".blog-articles .article"),showtab=label.getAttribute("for"),tabs=document.querySelectorAll(`.${showtab}`);showtab=="Todas"?alltabs.forEach(taball=>{taball.style.display="flex"}):(alltabs.forEach(taball=>{taball.style.display="none"}),tabs.forEach(tab=>{tab.style.display="flex"}))};var clickLabels=clickLabels2;Array.from(document.querySelectorAll(".main-blog .tabs__label")).forEach(label=>{label.addEventListener("click",()=>clickLabels2(label))});const selectedInput=document.querySelector('input[type="radio"][name="tabs-receitas"]:checked'),selectedLabel=document.querySelector(`label[for="${selectedInput.id}"]`);clickLabels2(selectedLabel)}catch(e){console.error(e)}}(),function(){if(!(!__sections__["main-product-old"]&&!window.DesignMode))try{let variantChanges2=function(){const selectedFlavor=document.querySelector('input[name="Sabores"]:checked');console.log("flavor",selectedFlavor.value);const selectedUnity=document.querySelector('input[name="Unidades"]:checked').value,bg=document.querySelector(".product-bg-gradient"),lineMB=document.querySelector(".product-wave svg:last-child path:last-child"),line=document.querySelector(".product-wave svg:first-child path:last-child"),variantTitle=document.querySelector(".title--variant"),labelArr=Array.from(document.querySelectorAll("label.product-input__label")),input1=document.querySelector('input[value="1"]'),label1=document.querySelector(`label[for="${input1.id}"]`);function clickPaprica(){document.querySelector('input[value="P\xE1prica"]').click()}selectedFlavor.value=="Ambos"?label1?.addEventListener("click",clickPaprica):label1?.removeEventListener("click",clickPaprica),labelArr.forEach(label=>{let labelInText=label.children[0].innerText.normalize("NFD").replace(/[\u0300-\u036f]/g,"").split(" ")[0].toLowerCase().trim();if(labelInText==="paprica"){if(!label.children[1]){const div=document.createElement("div");div.textContent="Mais vendido",div.classList.add("mais-vendido-sticker"),label.appendChild(div)}label.children[0].innerText=`P\xE1prica ${selectedUnity}x`}else labelInText==="original"?label.children[0].innerText=`Original ${selectedUnity}x`:labelInText==="ambos"&&(selectedUnity==1?label.style.display="none":label.style.display="flex")}),selectedFlavor.value=="Ambos"?(bg.style.background="linear-gradient(180deg, #000000 0%, #7F4127 100%)",lineMB.style.stroke="#7F4127",line.style.stroke="#7F4127",variantTitle.innerText=selectedFlavor.value):(variantTitle.innerText=`${selectedFlavor.value} ${selectedUnity}x`,selectedFlavor.value=="Original"?(bg.style.background="linear-gradient(180deg, #1E1E1E 0%, #ED6F4E 100%)",lineMB.style.stroke="#8C3628",line.style.stroke="#8C3628"):selectedFlavor.value=="P\xE1prica"&&(bg.style.background="linear-gradient(180deg, #1E1E1E 0%, #8C3628 100%)",lineMB.style.stroke="#ED6F4E",line.style.stroke="#ED6F4E"));const mediaImages2=Array.from(document.querySelectorAll(".product-media-item")),mainImage2=document.querySelector(".main-product__media-image");mediaImages2.forEach(mediaImage=>{if(mediaImage.classList.remove("current-media"),mediaImage.id.indexOf(window.location.href.split("variant=")[1])>-1){const img=mediaImage.querySelector("img");mainImage2.src=img.src,mainImage2.srcset=img.srcset,mediaImage.classList.add("current-media")}})},setSelected2=function(i){let current=mediaImages.findIndex(image=>image.classList.contains("current-media"));current+i>=mediaImages.length?mediaImages[0].click():current+i<0?mediaImages[mediaImages.length-1].click():mediaImages[current+i].click()};var variantChanges=variantChanges2,setSelected=setSelected2;window.onload=()=>{const unity_2=document.querySelector('input[value="2"]');window.location.href.split("=").length==1&&unity_2.click(),variantChanges2();let previousUrl="";const observer=new MutationObserver(function(mutations){window.location.href!==previousUrl&&(previousUrl=window.location.href,variantChanges2())}),config={subtree:!0,childList:!0};observer.observe(document,config)};const mainImage=document.querySelector(".main-product__media-image");let initialX,initialY,timerId=null;mainImage.addEventListener("touchmove",event=>{const deltaX=event.touches[0].clientX-initialX;deltaX>0?(clearTimeout(timerId),timerId=setTimeout(()=>setSelected2(-1),500)):deltaX<0&&(clearTimeout(timerId),timerId=setTimeout(()=>setSelected2(1),500))}),mainImage.addEventListener("touchstart",event=>{initialX=event.touches[0].clientX,clearTimeout(timerId)},!1);const mediaImages=Array.from(document.querySelectorAll(".product-media-item")),mediaImagesList=document.querySelector(".main-product__media-items");mediaImages.length>0&&(mediaImages[0].classList.add("current-media"),mediaImages.forEach(mediaImage=>{mediaImage.addEventListener("click",()=>{const img=mediaImage.querySelector("img");mainImage.src=img.src,mainImage.srcset=img.srcset,mediaImages.forEach(mediaImage2=>mediaImage2.classList.remove("current-media")),mediaImage.classList.add("current-media")})}));const prevButton=document.querySelector(".media-item-prev"),nextButton=document.querySelector(".media-item-next");prevButton?.addEventListener("click",()=>setSelected2(-1)),nextButton?.addEventListener("click",()=>setSelected2(1)),mediaImagesList&&new Glider(document.querySelector(".main-product__media-items"),{slidesToShow:"auto",slidesToScroll:1,scrollLock:!0,itemWidth:45,arrows:{prev:".media-item-prev",next:".media-item-next"}});const modalSabor=document.getElementById("modal-novo-sabor"),modalPrimMao=document.getElementById("modal-primeira-mao"),btn=document.getElementById("newProductOptionsButton");btn.addEventListener("click",()=>{modalSabor.style.display="flex"});const queryString=window.location.search;new URLSearchParams(queryString).get("modalOpen")==!0&&btn.click();const sugestaoSaborInput=document.querySelector("#sugestao-sabor"),sendButton=document.querySelector("#novo-sabor-button");sugestaoSaborInput&&sugestaoSaborInput.addEventListener("input",e=>{const options=document.querySelectorAll('input[type="radio"][name="contact[tags]"]:checked');sugestaoSaborInput.value.length>0?(options[0].value=`outro, ${e.target.value}`,sendButton.disabled=!1):sendButton.disabled=!0}),sendButton&&sendButton.addEventListener("click",event=>{if(document.querySelectorAll('input[type="radio"][name="contact[tags]"]:checked')[0].id==="novo-sabor-opcao3"){const sugestaoTexto=sugestaoSaborInput.value;modalSabor.style.display="none",modalPrimMao.style.display="flex"}else modalSabor.style.display="none",modalPrimMao.style.display="flex";event.stopPropagation()});const fechaModalSabor=document.getElementById("novo-sabor-body"),fechaModalPrim=document.getElementById("primeira-mao-body");window.onclick=function(event){(event.target==fechaModalSabor||event.target==fechaModalPrim)&&(modalSabor.style.display="none",modalPrimMao.style.display="none")},Array.from(document.querySelectorAll('input[name="contact[tags]"]')).forEach(input=>{input.addEventListener("click",event=>{var checked=document.querySelectorAll('input[name="contact[tags]"]:checked');sendButton.disabled=!0,sugestaoSaborInput.disabled=!0,checked.length>0&&(event.target.id==="novo-sabor-opcao3"?sugestaoSaborInput.disabled=!1:sendButton.disabled=!1)})}),document.querySelector("#primeira-mao-email").addEventListener("keyup",()=>{document.getElementById("primeira-mao-email").value!==""?document.querySelector("#primeira-mao-button").disabled=!1:document.querySelector("#primeira-mao-button").disabled=!0})}catch(e){console.error(e)}}(),function(){if(!(!__sections__["modo-de-preparo"]&&!window.DesignMode))try{let clickLabel2=function(label){const alltabs=document.querySelectorAll(".tabs__content__card"),showtab=label.getAttribute("for"),tabs=document.querySelectorAll(`.${showtab}`);alltabs.forEach(taball=>{taball.style.display="none"}),tabs.forEach(tab=>{tab.style.display="flex"})};var clickLabel=clickLabel2;Array.from(document.querySelectorAll(".tabs__label")).forEach(label=>{label.addEventListener("click",()=>clickLabel2(label))});const selectedInput=document.querySelector('input[type="radio"][name="tabs-preparo"]:checked'),selectedLabel=document.querySelector(`label[for="${selectedInput.id}"]`);clickLabel2(selectedLabel)}catch(e){console.error(e)}}(),function(){if(!(!__sections__.multicolumn&&!window.DesignMode))try{const modalSabor=document.getElementById("modal-novo-sabor"),modalPrimMao=document.getElementById("modal-primeira-mao"),btn=document.getElementById("newProductOptionsButton");btn.addEventListener("click",()=>{modalSabor.style.display="flex"});const queryString=window.location.search;new URLSearchParams(queryString).get("modalOpen")==!0&&btn.click();const sugestaoSaborInput=document.querySelector("#sugestao-sabor"),sendButton=document.querySelector("#novo-sabor-button");sugestaoSaborInput.addEventListener("input",e=>{const options=document.querySelectorAll('input[type="radio"][name="contact[tags]"]:checked');sugestaoSaborInput.value.length>0?(options[0].value=`outro, ${e.target.value}`,sendButton.disabled=!1):sendButton.disabled=!0}),sendButton.addEventListener("click",event=>{if(document.querySelectorAll('input[type="radio"][name="contact[tags]"]:checked')[0].id==="novo-sabor-opcao3"){const sugestaoTexto=sugestaoSaborInput.value;modalSabor.style.display="none",modalPrimMao.style.display="flex"}else modalSabor.style.display="none",modalPrimMao.style.display="flex";event.stopPropagation()});const fechaModalSabor=document.getElementById("novo-sabor-body"),fechaModalPrim=document.getElementById("primeira-mao-body");window.onclick=function(event){(event.target==fechaModalSabor||event.target==fechaModalPrim)&&(modalSabor.style.display="none",modalPrimMao.style.display="none")},Array.from(document.querySelectorAll('input[name="contact[tags]"]')).forEach(input=>{input.addEventListener("click",event=>{var checked=document.querySelectorAll('input[name="contact[tags]"]:checked');sendButton.disabled=!0,sugestaoSaborInput.disabled=!0,checked.length>0&&(event.target.id==="novo-sabor-opcao3"?sugestaoSaborInput.disabled=!1:sendButton.disabled=!1)})}),document.querySelector("#primeira-mao-email").addEventListener("keyup",()=>{document.getElementById("primeira-mao-email").value!==""?document.querySelector("#primeira-mao-button").disabled=!1:document.querySelector("#primeira-mao-button").disabled=!0})}catch(e){console.error(e)}}(),function(){if(!(!__sections__["reviews-by-turbo"]&&!window.DesignMode))try{document.querySelectorAll(".review-card").forEach(card=>{const order3=card.querySelector(".order-3"),order2=card.querySelector(".order-2");order3&&(order3.classList.contains("client-review")&&order2.classList.contains("client-info")||order3.classList.contains("client-info")&&order2.classList.contains("client-review"))?order2.style.marginTop="auto":order3&&!order3.classList.contains("client-message")?order3.style.marginTop="auto":order2.classList.contains("client-message")||(order2.style.marginTop="auto")});const child=document.querySelector(".swiper-slide-active"),parent=child.parentNode,children=Array.from(parent.children),index=Array.prototype.indexOf.call(children,child);children.forEach(child2=>{const childIndex=Array.prototype.indexOf.call(children,child2);childIndex>index?child2.style.alignItems="end":childIndex<index?child2.style.alignItems="start":child2.style.alignItems="center"})}catch(e){console.error(e)}}()})();
//# sourceMappingURL=/cdn/shop/t/80/compiled_assets/scripts.js.map?47052=
