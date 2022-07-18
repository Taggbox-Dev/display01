"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[575],{7675:function(t,e,a){a.d(e,{Z:function(){return u}});var n=a(47313),r=a(98501),i=a(15671),s=a(43144),o=a(60136),l=a(48347),c=a(46417),d=function(t){(0,o.Z)(a,t);var e=(0,l.Z)(a);function a(t){return(0,i.Z)(this,a),e.call(this,t)}return(0,s.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.ImageClass,a=t.ImageUrl;return(0,c.jsx)("div",{className:e,children:(0,c.jsx)("img",{className:"ts_branding_card_image",src:a,width:"619",height:"619",alt:"image"})})}}]),a}(n.PureComponent),u=function(t){t.imgPath,t.link;return(0,c.jsx)("a",{href:"".concat(r.Xi,"?utm_source=").concat(r.Xi,"/&").concat(r.G7),target:"blank",children:(0,c.jsx)(d,{ImageClass:"ts_TaggshopAds_image",ImageUrl:"".concat(r.E,"embed-build/common/branding/br_card-01.svg")})})}},9415:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var n=a(1413),r=a(15671),i=a(43144),s=a(60136),o=a(48347),l=a(47313),c=a(7284),d=a(98501),u=a(46417),h=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,n=t.network,r=t.adjustWidth,i=!!(e.ugc_products&&e.ugc_products.length>0),s=505==a.ThemeRule.iconType?n.color:a.ThemeRule.iconColor,o=n.icon.replace("fa-",""),l={fontFamily:a.ThemeRule.css_font};return(0,u.jsx)("div",{className:"ts_cs_social_warpper",children:(0,u.jsxs)("div",{className:"ts_cs_social_wrappeer_in",children:[(0,u.jsx)("div",{className:"ts_cs_social_",style:{color:"rgb(255,255,255)"},children:null!=e.rating&&0!=e.rating?(0,u.jsx)("div",{className:"ts_cs_social_rating",style:{backgroundImage:"url(".concat(d.KA).concat(e.networkId,"/").concat(e.rating,".png)")}}):(0,u.jsx)("div",{className:"tb__icon tb-".concat(o),style:{color:s},children:(0,u.jsx)("div",{})})}),(0,u.jsx)("div",{className:"ts_cs_btn_wrapper",children:r>190&&i?(0,u.jsx)(c.Z,{shoppingText:a.ThemeRule.shoppingText,ctaClass:"ts_cs_button",styleCta:l}):""})]})})}}]),a}(l.PureComponent),p=a(85942),m=a(17739),f=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(t){var n;return(0,r.Z)(this,a),(n=e.call(this,t)).state={height:"",padding:"",isImageloded:!1,error:""},n}return(0,i.Z)(a,[{key:"componentWillMount",value:function(){var t=this,e=this.props.ImageUrl;(0,p.Z)(e).then((function(e){var a=e.width,n=e.height;return t.setState({height:100*n/a,width:100*a/n})})).then(setTimeout((function(){return t.setState({isImageloded:!0})}),100)).catch((function(e){return t.setState({height:100,width:100,error:e})}))}},{key:"componentDidMount",value:function(){var t=this;new ResizeObserver((function(e){window.dispatchEvent(new Event("resize")),t.getMarginTop()})).observe(document.querySelector(".taggshopContainer"))}},{key:"getMarginTop",value:function(){setTimeout((function(){return window.isEditor?(0,m.ll)(99):""}),100)}},{key:"render",value:function(){var t=this.props,e=t.ImageClass,a=t.ImageUrl,n=t.wall,r=t.item,i=this.state,s=i.width,o=i.height,l=i.isImageloded;"url(".concat(l?a:r.optmizedImg,")");return(0,u.jsx)("div",{className:e,children:(0,u.jsx)("img",{"data-src":a,className:"ts_cs_img__",src:r.optmizedImg,"data-is-optmized":"0","data-link":r.link,"data-load":"0","data-wall-id":n.Wall.id,"data-item-id":r.id,onLoad:this.onLoadImage,"data-filter-id":r.filterId,"data-stories":r.stories,"data-network":r.networkId,height:o,width:s,onError:function(t){(0,m.bO)(t)},alt:"image"})})}}]),a}(l.PureComponent),g=(a(29335),function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall;(0,m.HS)(e.ugc_products),document.querySelector(".ts_p_".concat(e.id))&&document.querySelector(".ts_p_".concat(e.id)).clientWidth;return(0,u.jsx)("div",{className:"ts_cs_media_wrap",children:(0,u.jsx)(f,{ImageClass:"ts_cs_image",ImageUrl:e.postFileNew,wall:a,item:e})})}}]),a}(l.PureComponent)),v=a(42417),w=a(8354),_=a(73763),x=a(7675),j=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){var t;(0,r.Z)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).onLoadPopup=function(e){var a=t.props,n=a.itemData,r=a.wall,i=a.postData,s=a.itemIndex,o=a.languageSetting,l=a.completeDataObject,c=a.wallId,d=a.webFilters,u=i.map((function(t){return l[t]})),h=u.filter((function(t){return!String(t.id).includes("free_add_")})),p=(0,m.E6)(h,n.id,s);1===r.Personalization.postFeatured&&((0,m.st)("add"),t.props.showPopUP({type:"post",card:n,idArray:h,index:p,viewOnText:o.viewOnText,shareText:o.shareText,personalization:r.Personalization,ThemeRule:r.ThemeRule,webFilters:d,UserRule:r.UserRule,wall:r})),(0,_.S5)({action:2,wall:c,feed:n.feedId,post:n.referenceId})},t}return(0,i.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.itemData,a=t.wall,n=t.webFilters,r=t.adjustWidth,i=(e.highlight,a.ThemeRule.shareOption,a.ThemeRule.hideContent,(0,m.EH)(e.networkId,n)),s={backgroundColor:a.ThemeRule.cardColor},o={width:"100%",height:"auto",padding:a.Personalization.padding/2};return(0,u.jsx)("div",{className:"ts_cs_post_wrapper ".concat(e&&e.id?"ts_p_"+e.id:""),style:o,children:(0,u.jsx)("div",{className:"ts_cs_post_in",onClick:e.isPost?null:this.onLoadPopup,style:s,children:e.isPost?(0,u.jsx)(x.Z,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v.Z,{item:e,wall:a}),(0,u.jsx)(g,{item:e,wall:a}),(0,u.jsx)(h,{item:e,wall:a,network:i,adjustWidth:r})]})})})}}]),a}(l.PureComponent),y=(0,w.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,_.Bm)(e))}}}))(j),b=(a(46425),a(11774)),D=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){var t;(0,r.Z)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={cardCount:null,widnowWidth:document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:""},t.onCardCountFormation=function(e){var a=t.props.wall,n=t.state.widnowWidth,r=a.Personalization.minimumPostWidth,i=parseInt(n/r);t.setState({cardCount:i})},t.onUpdateData=function(){setTimeout((function(){return t.requestData()}),1e3)},t.requestData=function(){var e=t.props,a=e.wall,n=(e.postData,e.appendData),r=e.hasMoreData,i=e.loaderData,s=a.ThemeRule.numberOfPosts,o=Math.floor(Date.now()/1e3);r&&!i.isShowMoreLoading&&t.props.getDataNextSteps(a.Wall.id,o,s,n.networkID,n.after,n.heightEvent)},t}return(0,i.Z)(a,[{key:"componentDidMount",value:function(){this.onCardCountFormation(this.props)}},{key:"render",value:function(){var t=this,e=this.props,a=(e.appendData,e.postData),r=e.completeDataObject,i=e.adjustWidth,s=e.hasMoreData,o=(e.wall,e.webFilters,e.languageSetting,e.loaderData),l=this.state.cardCount,c={perPage:"".concat(l),perMove:1,pagination:!1};return(0,u.jsx)("div",{className:"ts_cs_post_container",id:window.isEditor?"isEditorCls ts_theme_container":"ts_theme_container",children:(0,u.jsxs)(b.tv,{hasTrack:!1,options:c,children:[(0,u.jsx)(b.Gj,{children:a&&a.length>0?a.map((function(e,s){m.j6&&a&&a.length-1==s&&setTimeout((function(){var t=document.querySelectorAll("img[data-is-optmized='0']");t&&t.length>0&&t.forEach((function(t){t.setAttribute("src",t.getAttribute("data-src")),t.setAttribute("data-is-optmized","1")}))}),1300);var o=r[e];return(0,u.jsx)(b.jw,{children:(0,u.jsx)(y,(0,n.Z)({itemData:o,itemIndex:s,adjustWidth:i},t.props),"post_Id_".concat(s))})})):null}),(0,u.jsxs)("div",{className:"splide__arrows",children:[(0,u.jsx)("div",{className:"splide__arrow--next tb_cs_slider_next_arrow-next",onClick:this.onUpdateData,children:s&&o.isShowMoreLoading?(0,u.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,u.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,u.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,u.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,u.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,u.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,u.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,u.jsx)("div",{})})}),(0,u.jsx)("div",{className:"splide__arrow--prev tb_cs_slider_pre_arrow-prev",children:(0,u.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,u.jsx)("div",{})})})]})]})})}}]),a}(l.PureComponent),Z=(0,w.$j)((function(t){var e=t.appData;return{appData:e,loaderData:t.loaderData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(function(t){return{getDataNextSteps:function(e,a,n,r,i,s,o){return t((0,_.Sx)(e,a,n,r,i,s,o))}}}))(D)},42417:function(t,e,a){a.d(e,{Z:function(){return c}});var n=a(15671),r=a(43144),i=a(60136),s=a(48347),o=a(47313),l=(a(89800),a(46417)),c=function(t){(0,i.Z)(a,t);var e=(0,s.Z)(a);function a(){return(0,n.Z)(this,a),e.apply(this,arguments)}return(0,r.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,n=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),r=3===e.type||5===e.type,i=a&&a.User&&31724!==a.User.id;return(0,l.jsx)("div",{className:"ts_post_iocn",children:(0,l.jsxs)("div",{className:"ts_social-icon",style:{fontSize:40,color:"rgb(112, 112, 112)"},children:[r?(0,l.jsx)("div",{className:"ts_video_icon",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23.872",height:"13.05",viewBox:"0 0 23.872 13.05",children:(0,l.jsxs)("g",{id:"Group_29","data-name":"Group 29",transform:"translate(0 0)",children:[(0,l.jsx)("path",{id:"Path_35","data-name":"Path 35",d:"M25.492,40.55H12.378A1.881,1.881,0,0,1,10.5,38.672V29.378A1.881,1.881,0,0,1,12.378,27.5H25.46a1.881,1.881,0,0,1,1.878,1.878V38.64A1.862,1.862,0,0,1,25.492,40.55Z",transform:"translate(-10.5 -27.5)",fill:"#fff"}),(0,l.jsx)("path",{id:"Path_36","data-name":"Path 36",d:"M67.5,32.692v5.666l5.252,2.96a.317.317,0,0,0,.477-.286V30.019a.327.327,0,0,0-.477-.286Z",transform:"translate(-49.357 -29)",fill:"#fff"})]})})}):"",n&&i?(0,l.jsx)("div",{className:"ts_shop_icon",children:31665===a.User.id?(0,l.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,l.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:(0,l.jsxs)("g",{id:"Group_3921","data-name":"Group 3921",transform:"translate(3142 -3611)",children:[(0,l.jsx)("rect",{id:"Rectangle_1916","data-name":"Rectangle 1916",width:"20",height:"20",transform:"translate(-3142 3611)",fill:"none",opacity:"0"}),(0,l.jsx)("path",{id:"Path_5284","data-name":"Path 5284",d:"M-159.773,450.575c-.067-2.016-.218-4.029-.339-6.043a13.691,13.691,0,0,0-.158-1.783,2.739,2.739,0,0,0-2.761-2.249h-1.653a4.11,4.11,0,0,0-1.231-2.982,4.11,4.11,0,0,0-3-1.174,4.073,4.073,0,0,0-2.868,1.247,4.073,4.073,0,0,0-1.139,2.913c-.651,0-1.279-.011-1.906,0a2.762,2.762,0,0,0-2.7,2.607c-.051.842-.11,1.683-.159,2.525-.1,1.758-.255,3.515-.29,5.274a5.294,5.294,0,0,0,1.517,3.841,5.294,5.294,0,0,0,3.814,1.583c2.488.014,4.976,0,7.464-.008a5.018,5.018,0,0,0,2.461-.61A5.346,5.346,0,0,0-159.773,450.575Zm-10.511-12.141a2.479,2.479,0,0,1,2.752-.114,2.25,2.25,0,0,1,1.21,2.167H-171.3a2.193,2.193,0,0,1,1.016-2.054Zm5.575,5.439a3.376,3.376,0,0,1-.314,1.323,3.84,3.84,0,0,1-.486.786,4.13,4.13,0,0,1-1.061.939,4.158,4.158,0,0,1-.426.23q-.147.069-.3.126-.077.029-.155.054-.157.051-.318.09c-.34.082-.692.113-1.039.167a4.343,4.343,0,0,1-2.4-.758q-.145-.1-.281-.212t-.261-.234a3.965,3.965,0,0,1-.646-.824,3.829,3.829,0,0,1-.481-1.333,2.682,2.682,0,0,1-.031-.446.965.965,0,0,1,.087-.4.781.781,0,0,1,.231-.292.742.742,0,0,1,.126-.078.775.775,0,0,1,.3-.076.825.825,0,0,1,.39.068.754.754,0,0,1,.19.123.884.884,0,0,1,.281.571,2.377,2.377,0,0,0,.834,1.665,2.236,2.236,0,0,0,.306.2,2.909,2.909,0,0,0,.754.284,2.728,2.728,0,0,0,1.57-.1,2.611,2.611,0,0,0,.268-.117,2.432,2.432,0,0,0,.406-.259q.075-.059.145-.125a2.166,2.166,0,0,0,.255-.285q.057-.077.108-.159a2.476,2.476,0,0,0,.287-.751c.02-.088.036-.177.049-.264a.9.9,0,0,1,.618-.837.86.86,0,0,1,.256-.02.79.79,0,0,1,.314.084.727.727,0,0,1,.187.138.78.78,0,0,1,.1.123.927.927,0,0,1,.125.313,1.221,1.221,0,0,1,.024.283Z",transform:"translate(-2963.016 3174.658)",fill:"#fff"})]})})}):""]})})}}]),a}(o.PureComponent)},7284:function(t,e,a){a.d(e,{Z:function(){return d}});var n=a(15671),r=a(43144),i=a(60136),s=a(48347),o=a(47313),l=a(73763),c=a(46417),d=function(t){(0,i.Z)(a,t);var e=(0,s.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).onClickCtAButton=function(e){var a=t.props,n=a.item,r=a.wall;e&&(0,l.S5)({type:1,action:2,wall:r.Wall.id,feed:n.feedId,post:n.referenceId})},t}return(0,r.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.shoppingText,a=t.ctaClass,n=t.styleCta;return(0,c.jsxs)("div",{className:a,style:n,onClick:this.onClickCtAButton,children:[" ",e," "]})}}]),a}(o.PureComponent)},46425:function(){},45987:function(t,e,a){a.d(e,{Z:function(){return r}});var n=a(63366);function r(t,e){if(null==t)return{};var a,r,i=(0,n.Z)(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}},70885:function(t,e,a){a.d(e,{Z:function(){return r}});var n=a(40181);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,r,i=[],s=!0,o=!1;try{for(a=a.call(t);!(s=(n=a.next()).done)&&(i.push(n.value),!e||i.length!==e);s=!0);}catch(l){o=!0,r=l}finally{try{s||null==a.return||a.return()}finally{if(o)throw r}}return i}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);