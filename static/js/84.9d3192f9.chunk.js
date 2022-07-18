"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[84],{52084:function(t,e,a){a.r(e),a.d(e,{default:function(){return N}});var o=a(1413),n=a(15671),r=a(43144),s=a(60136),i=a(48347),l=a(47313),c=(a(16231),a(70658)),u=a(17739),d=a(73763),h=a(50175),p=(a(2956),a(46417)),m=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={isAuthorImageValid:!0},t.onCtaClick=function(e){var a=t.props,o=a.wall,n=a.item;(0,d.S5)({type:1,action:2,wall:o.Wall.id,feed:n.feedId,post:n.referenceId})},t}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){var t=this.props.item,e=(0,u.uB)(t.author.picture);this.setState({isAuthorImagevalid:e})}},{key:"render",value:function(){var t,e=this.props,a=e.wall,o=e.item,n=e.network,r=(this.state.isAuthorImagevalid,a.Personalization.postTime),s=null!=(t=o.cta)&&""!==t&&0!==t,i=a.Personalization.postAuthor,l=505==a.ThemeRule.iconType?n.color:a.ThemeRule.iconColor,u=("url(".concat(o.author.picture,")"),{backgroundColor:a.ThemeRule.authorColor}),d={color:a.ThemeRule.authorColor},m=n.icon.replace("fa-","");return(0,p.jsxs)(p.Fragment,{children:[s?(0,p.jsxs)("span",{onClick:this.onCtaClick,children:[" ",(0,c.K)(o.cta)]}):null,(0,p.jsxs)("div",{className:"tb_sc_author_wrapper",children:[o.author.isInstaUser?null:(0,p.jsxs)("div",{className:"tb_sc_author",children:[(0,p.jsxs)("div",{className:"tb_sc_author_profile",children:[(0,p.jsx)("img",{src:o.author.picture,onError:function(t){t.target.onerror=null,t.target.src=o.author.errorPic},height:44,width:44,alt:"image"})," "]}),(0,p.jsxs)("div",{className:"tb_sc_author_info",children:[i?(0,p.jsx)("div",{className:"tb_sc_authorname",style:d,children:o.author.name}):"",(0,p.jsxs)("div",{className:"tb_sc_post_info",children:[i?(0,p.jsxs)("div",{className:"tb_sc_username",style:d,children:["@",o.author.username]}):"",r&&i?(0,p.jsx)("div",{className:"tb_sc_seprator",style:u,children:(0,p.jsx)("div",{})}):"",r?(0,p.jsx)(h.Z,{postTime:o.createdAt,timeClass:"tb_sc_time",timeStyle:d}):""]})]})]}),(0,p.jsx)("div",{className:"tb_sc_social_",children:(0,p.jsx)("div",{className:"tb__icon tb-".concat(m),style:{color:l},children:(0,p.jsx)("div",{})})})]})]})}}]),a}(l.PureComponent),f=a(85942),_=a(57400),g=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(t){var o;return(0,n.Z)(this,a),(o=e.call(this,t)).state={height:"100",padding:"100",hideHotspot:!1,error:""},o}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){var t=this.props.ImageClass;(0,u.ll)(94),document.querySelector(".".concat(t))&&document.querySelector(".".concat(t)).clientWidth>175?this.setState({hideHotspot:!1}):this.setState({hideHotspot:!0})}},{key:"componentWillMount",value:function(){var t=this,e=this.props.ImageUrl;(0,f.Z)(e).then((function(e){var a=e.width,o=e.height;return t.setState({height:100*o/a,width:100*a/o})})).catch((function(e){return t.setState({height:100,width:100,error:e})}))}},{key:"render",value:function(){var t=this,e=this.props,a=e.ImageClass,o=e.ImageUrl,n=e.item,r=e.ugc_products,s=e.wall,i=this.state,l=(i.width,i.height,i.hideHotspot);i.isImageloded;return(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("img",{src:o,"data-src":o,"data-is-optmized":"0","data-link":n.link,"data-load":"0","data-wall-id":s.Wall.id,"data-item-id":n.id,onLoad:this.onLoadImage,"data-filter-id":n.filterId,"data-stories":n.stories,"data-network":n.networkId,width:"100%",onError:function(t){(0,u.bO)(t)},alt:"image"}),!l&&n.hotspot&&n.ugc_products&&Object.keys(n.ugc_products).length>0?r.map((function(e,a){return(0,p.jsx)(_.Z,{customClass:"tb_post_hotspot_tooltip_",parentID:t.myRef,isIndex:a,product:e,item:n},a)})):""]})}}]),a}(l.PureComponent),v=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={isLoadImage:!0},t.ON_LOAD_IMAGE_HEIGHT=function(e){t.setState({isLoadImage:!1})},t}return(0,r.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,o=(this.state.isLoadImage,(0,u.HS)(e.ugc_products));document.querySelector(".ts_p_".concat(e.id))&&document.querySelector(".ts_p_".concat(e.id)).clientWidth;return(0,p.jsx)("div",{className:"ts_cp_media_wrap",children:(0,p.jsx)(g,{ImageClass:"tb_sc_image",ImageUrl:e.postFileNew,ugc_products:o,item:e,wall:a})})}}]),a}(l.PureComponent),w=a(12268),D=a(42417),x=a(8354),y=a(98501),j=a(16390),b=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){return(0,n.Z)(this,a),e.apply(this,arguments)}return(0,r.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.wall,a=t.item,o={fontFamily:e.ThemeRule.css_font,fontSize:1==a.type?1===e.Personalization.textDecorate?e.ThemeRule.fontSizeDecorate:e.ThemeRule.fontSizeNormal:e.ThemeRule.fontSize,color:"#000000"===e.ThemeRule.cardColor&&"#000000"===e.ThemeRule.fontColor?"#ffffff":"#ffffff"===e.ThemeRule.cardColor&&"#ffffff"===e.ThemeRule.fontColor?"#000000":e.ThemeRule.fontColor},n={backgroundImage:"url(".concat(y.KA).concat(a.networkId,"/").concat(a.rating,".png)")},r={color:e.Personalization.hashtag_color,fontWeight:"bold"},s=(0,u.Fx)(a.content);return(0,p.jsxs)(p.Fragment,{children:[a.rating?(0,p.jsx)("div",{className:"tb_post_rating",style:n,children:(0,p.jsx)("div",{})}):"",(0,p.jsx)("div",{className:"tb_sc_content ".concat(1===e.Personalization.textDecorate&&1===a.type?a.textDecoClass:""),style:o,children:0!==e.Personalization.hashtag_highlight?1===e.Personalization.hashtag_all?(0,y.uz)((0,j.ZP)(s),/#(\w+)/g,(function(t,e){return(0,p.jsxs)("div",{className:"tb_sc_hash_tag",style:r,children:["#",t]},t+e)})):1===e.Personalization.hashtag_feed?(0,y.uz)((0,j.ZP)(s),a.hash.hashString,(function(t,e){return(0,p.jsx)("div",{className:"tb_sc_hash_tag",style:r,children:t},t+e)})):(0,j.ZP)(s):(0,j.ZP)(s)})]})}}]),a}(l.PureComponent),I=a(7675),k=a(1278),C=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onLoadPopup=function(e){var a=t.props,o=a.itemData,n=a.wall,r=(a.appendData,a.postData),s=a.itemIndex,i=a.languageSetting,l=a.completeDataObject,c=a.wallId,h=a.webFilters,p=r.map((function(t){return l[t]})),m=p.filter((function(t){return!String(t.id).includes("free_add_")})),f=(0,u.E6)(m,o.id,s);1===n.Personalization.postFeatured&&((0,u.st)("add"),t.props.showPopUP({type:"post",card:o,idArray:m,index:f,viewOnText:i.viewOnText,shareText:i.shareText,personalization:n.Personalization,ThemeRule:n.ThemeRule,webFilters:h,UserRule:n.UserRule,wall:n})),(0,d.S5)({action:2,wall:c,feed:o.feedId,post:o.referenceId})},t}return(0,r.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.itemData,a=(t.itemIndex,t.wall),o=t.webFilters,n=t.adjustWidth,r=e.highlight,s=a.ThemeRule.shareOption,i=a.ThemeRule.hideContent,l=a.ThemeRule.socialAction,c=(0,u.EH)(e.networkId,o),d={backgroundColor:a.ThemeRule.cardColor},h={width:1==r?2*n:n,padding:a.Personalization.padding/2},f=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),_=3===e.type||5===e.type;return(0,p.jsxs)("div",{className:"tb_sc_post_wrapper ".concat(e&&e.id?"ts_p_"+e.id:""),style:h,children:[(0,p.jsx)("div",{className:"tb_sc_post_in tb__post_in",onClick:e.isPost?null:this.onLoadPopup,style:d,children:e.isPost?(0,p.jsx)(I.Z,{}):(0,p.jsxs)(p.Fragment,{children:["1"==e.type?"":(0,p.jsx)(v,{item:e,wall:a}),(0,p.jsxs)("div",{className:"tb_sc_contant_wrapper",children:[f||_?(0,p.jsx)(D.Z,{item:e,wall:a}):"",(0,p.jsx)(m,{wall:a,item:e,network:c}),i?"":(0,p.jsx)(b,{wall:a,item:e})]})]})}),!e.isPost&&s?(0,p.jsx)(w.Z,{item:e,wall:a,network:c}):"",(0,p.jsx)("div",{style:d,children:!e.isPost&&l?(0,p.jsx)(k.Z,{item:e,wall:a,network:c}):null})]})}}]),a}(l.PureComponent),Z=(0,x.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,d.Bm)(e))}}}))(C),P=a(61395),T=a.n(P),S={background:!0},z=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).requestData=function(){var e=t.props,a=e.wall,o=(e.postData,e.appendData),n=e.hasMoreData,r=e.loaderData,s=a.ThemeRule.numberOfPosts,i=Math.floor(Date.now()/1e3);n&&!r.isShowMoreLoading&&t.props.getDataNextSteps(a.Wall.id,i,s,o.networkID,o.after,o.heightEvent)},t}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props,a=e.wall,o=(e.postData,e.appendData);e.hasMoreData,e.loaderData,document.getElementById("scrlBarComanW");new ResizeObserver((function(t){window.dispatchEvent(new Event("resize"))})).observe(document.querySelector(".taggshopContainer")),o&&a.Personalization.autoScrollStatus&&window.addEventListener("scroll",(function(e){var a=document.getElementById("scrlBarComanW"),o=(document.body.scrollHeight,window.innerHeight+window.scrollY);a.scrollHeight-10<o&&setTimeout((function(){return t.requestData()}),1e3)}))}},{key:"render",value:function(){var t=this,e=this.props,a=e.postData,n=e.completeDataObject,r=e.adjustWidth,s=e.wall;e.webFilters,e.languageSetting;return(0,p.jsx)("div",{className:"tb_sc_post_container",id:"ts_theme_container",children:(0,p.jsx)(T(),{className:"tb_sc_post_container theme".concat(s.Personalization.commerceTheme),elementType:"div",options:{transitionDuration:0,itemSelector:".tb_sc_post_wrapper",columnWidth:0},disableImagesLoaded:!1,updateOnEachImageLoad:!0,imagesLoadedOptions:S,enableResizableChildren:!0,children:a&&a.length>0?a.map((function(e,s){u.j6&&a&&a.length-1==s&&setTimeout((function(){var t=document.querySelectorAll("img[data-is-optmized='0']");t&&t.length>0&&t.forEach((function(t){t.setAttribute("src",t.getAttribute("data-src")),t.setAttribute("data-is-optmized","1")}))}),1300);var i=n[e];return(0,p.jsx)(Z,(0,o.Z)({itemData:i,itemIndex:s,adjustWidth:r},t.props),"post_id_".concat(s))})):null})})}}]),a}(l.PureComponent),N=(0,x.$j)((function(t){var e=t.appData;return{appData:e,loaderData:t.loaderData,postData:e.postData.postData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(function(t){return{getDataNextSteps:function(e,a,o,n,r,s,i){return t((0,d.Sx)(e,a,o,n,r,s,i))}}}))(z)}}]);