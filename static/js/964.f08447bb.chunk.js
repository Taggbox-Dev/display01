"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[964],{12268:function(t,e,a){var r=a(4942),i=a(15671),n=a(43144),s=a(60136),o=a(48347),l=a(47313),d=a(73763),c=a(46417),h=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).onShareFacebook=function(e){var a=t.props,r=a.item,i=(a.wall,"https://www.facebook.com/sharer/sharer.php?display=popup&u="+r.share.facebook);window.open(i,"sharer","toolbar=0,status=0,resizable=1,width=626,height=436")},t.onTwitterClick=function(e){var a=t.props,r=a.item,i=a.wall;e&&(0,d.S5)({type:2,action:2,wall:i.Wall.id,feed:r.feedId,post:r.referenceId})},t.linkedinShareCount=function(e){var a=t.props,r=a.item,i=a.wall;(0,d.S5)({type:2,action:2,wall:i.Wall.id,feed:r.feedId,post:r.referenceId})},t}return(0,n.Z)(a,[{key:"componentDidMount",value:function(){var t=this;window.twttr&&window.twttr.ready((function(e){window.twttr.events.bind("tweet",t.onTwitterClick)}))}},{key:"render",value:function(){var t,e=this.props,a=e.network,i=e.item;e.wall;return(0,c.jsx)(c.Fragment,{children:0!==i.share.status&&7!==a.id?(0,c.jsxs)("div",{className:"ts__share-icon_wrapper",style:{fontSize:40,color:"rgb(112, 112, 112)"},children:[(0,c.jsx)("a",{herf:"",target:"_blank",children:(0,c.jsx)("div",{className:"tb__icon tb-share-alt",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("a",{onClick:this.onShareFacebook,children:(0,c.jsx)("div",{className:"tb__icon tb-facebook-f",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("a",{onClick:this.onTwitterClick,href:i.share.twitter,target:"_blank",children:(0,c.jsx)("div",{className:"tb__icon tb-twitter",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("a",(t={onClick:this.linkedinShareCount},(0,r.Z)(t,"onClick",this.linkedinShareCount),(0,r.Z)(t,"href",i.share.linkedin),(0,r.Z)(t,"target","_blank"),(0,r.Z)(t,"children",(0,c.jsx)("div",{className:"tb__icon tb-linkedin",children:(0,c.jsx)("div",{})})),t))]}):null})}}]),a}(l.Component);e.Z=h},85604:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var r=a(1413),i=a(15671),n=a(43144),s=a(60136),o=a(48347),l=a(47313),d=(a(16231),a(24387)),c=a(7284),h=a(98501),u=a(46417),p=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,i.Z)(this,a),e.apply(this,arguments)}return(0,n.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,r=t.network,i=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),n=505==a.ThemeRule.iconType?r.color:a.ThemeRule.iconColor,s=(""==a.ThemeRule.postHover||a.ThemeRule.postHover,{fontFamily:a.ThemeRule.css_font}),o=r.icon.replace("fa-","");return(0,u.jsxs)("div",{className:"ts_gs_social_warpper",children:[(0,u.jsxs)("div",{className:"ts_gs_social_wrappeer_in",children:[(0,u.jsx)("div",{className:"ts_gs_social_",style:{color:"rgb(255,255,255)"},children:null!=e.rating&&0!=e.rating?(0,u.jsx)("div",{className:"ts_gs_social_rating",style:{backgroundImage:"url(".concat(h.KA).concat(e.networkId,"/").concat(e.rating,".png)")},children:(0,u.jsx)("div",{})}):(0,u.jsx)("div",{className:"tb__icon tb-".concat(o),style:{color:n},children:(0,u.jsx)("div",{})})}),(0,u.jsx)("div",{className:"ts_gs_btn_wrapper",children:i&&(0,u.jsx)(c.Z,{shoppingText:a.ThemeRule.shoppingText,ctaClass:"ts_gs_button",styleCta:s})})]}),a.ThemeRule.socialAction?(0,u.jsx)(d.Z,{item:e,wall:a,network:r}):""]})}}]),a}(l.PureComponent),m=(a(57400),a(17739)),g=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,i.Z)(this,a),e.apply(this,arguments)}return(0,n.Z)(a,[{key:"componentDidMount",value:function(){(0,m.ll)(94)}},{key:"render",value:function(){var t=this.props,e=t.ImageClass,a=t.ImageUrl,r=t.item,i=(t.ugc_products,t.width),n=t.height,s=(t.hideHotspot,t.wall),o=(t.isImageloded,{backgroundImage:"url(".concat(a,")")}),l={height:r.hotspot?i>n?"auto":"100%":"auto",width:r.hotspot?i>n?"100%":"auto":"100%"};r.hotspot,r.hotspot;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"ts_gs_image_blur_bg",style:o,children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:e,style:l,children:(0,u.jsx)("img",{"data-src":a,src:r.optmizedImg,"data-is-optmized":"0",style:l,"data-link":r.link,"data-load":"0","data-wall-id":s.Wall.id,"data-item-id":r.id,onLoad:this.onLoadImage,"data-filter-id":r.filterId,"data-stories":r.stories,"data-network":r.networkId,height:"100",width:"100",onError:function(t){(0,m.bO)(t)},alt:"image"})})]})}}]),a}(l.PureComponent),w=a(85942),_=a(29335),v=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(t){var r;return(0,i.Z)(this,a),(r=e.call(this,t)).state={height:"",padding:"",error:"",hideHotspot:!1,isImageloded:!1,width:"100"},r}return(0,n.Z)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.item;(0,w.Z)(e.postFileNew).then((function(e){var a=e.width,r=e.height;return t.setState({height:100*r/a,width:100*a/r})})).then(setTimeout((function(){return t.setState({isImageloded:!0})}),1500)).catch((function(e){return t.setState({height:100,width:100,error:e})})),document.querySelector(".ts_gs_media_wrap")&&document.querySelector(".ts_gs_media_wrap").clientWidth>200?this.setState({hideHotspot:!1}):this.setState({hideHotspot:!0})}},{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,r=this.state,i=r.width,n=r.height,s=r.hideHotspot,o=r.isImageloded,l=(0,m.HS)(e.ugc_products);document.querySelector(".ts_p_".concat(e.id))&&document.querySelector(".ts_p_".concat(e.id)).clientWidth;return(0,u.jsxs)("div",{className:"ts_gs_media_wrap",children:[(0,u.jsx)(g,{ImageClass:"ts_gs_image",ImageUrl:e.postFileNew,ugc_products:l,item:e,width:i,height:n,hideHotspot:s,wall:a,isImageloded:o}),e.hotspot?(0,u.jsx)(_.Z,{ugc_products:l,UgcSetting:e.ugc_personalizaion.UgcSetting,item:e}):null]})}}]),a}(l.PureComponent),f=a(42417),x=(a(12268),a(8354)),D=a(73763),j=a(7675),k=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).onLoadPopup=function(e){var a=t.props,r=a.itemData,i=a.wall,n=(a.appendData,a.postData),s=a.itemId,o=a.languageSetting,l=a.completeDataObject,d=a.wallId,c=a.webFilters,h=n.map((function(t){return l[t]})),u=h.filter((function(t){return!String(t.id).includes("free_add_")})),p=(0,m.E6)(u,r.id,n.indexOf(s));1===i.Personalization.postFeatured&&((0,m.st)("add"),t.props.showPopUP({type:"post",card:r,idArray:u,index:p,viewOnText:o.viewOnText,shareText:o.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:c,UserRule:i.UserRule,wall:i})),(0,D.S5)({action:2,wall:d,feed:r.feedId,post:r.referenceId})},t}return(0,n.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.itemData,a=(t.itemId,t.wall),r=t.webFilters,i=(t.adjustWidth,t.cardWidth,t.fullWidth,e.highlight,a.ThemeRule.shareOption,a.ThemeRule.hideContent,(0,m.EH)(e.networkId,r)),n={backgroundColor:a.ThemeRule.cardColor,borderRadius:a.ThemeRule.roundEdge},s=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),o=3===e.type||5===e.type;return(0,u.jsx)("div",{className:"ts_gs_post_wrapper ".concat(e&&e.id?"ts_p_"+e.id:""),style:{width:"100%",padding:3},children:(0,u.jsx)("div",{className:"ts_gs_post_in ".concat(e.hotspot?"":"ts_gs_post_in_hostpot_hover"),onClick:e.isPost?null:this.onLoadPopup,style:n,children:e.isPost?(0,u.jsx)(j.Z,{}):(0,u.jsxs)(u.Fragment,{children:[s||o?(0,u.jsx)(f.Z,{item:e,wall:a}):"",(0,u.jsx)(v,{item:e,wall:a}),e.hotspot?null:(0,u.jsx)(p,{wall:a,item:e,network:i})]})})})}}]),a}(l.PureComponent),b=(0,x.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,D.Bm)(e))}}}))(k),y=a(50519),Z=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,i.Z)(this,a),e.apply(this,arguments)}return(0,n.Z)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.dataArr,i=e.indexNo,n=e.completeDataObject,s=e.wall,o=e.onSiteUploadShow,l=e.cardWidth,d=e.largeDiv,c=e.smallDiv,h=s.ThemeRule.highlightPosition,p=i<3?"1":"0",m={width:d+"%",float:"0"==p?"right"==h?"right":"left":"right"==h?"left":"right"},g={width:c+"%",float:"right"==h?"left":"right"};return(0,u.jsx)("div",{className:"ts_gs_post_row",children:a&&a.length>0?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"ts_gs_post_large",style:m,children:[" ",(0,u.jsx)(b,(0,r.Z)({itemData:n[a[0]],cardWidth:l,itemId:n[a[0]].id,fullWidth:!0},this.props))," "]}),(0,u.jsxs)("div",{className:"ts_gs_post_small",style:g,children:[o?(0,u.jsx)(y.Z,{isGalleryTheme:!1,wall:s}):"",a&&a.length>0?a.map((function(e,a){var i=n[e];return 0==a?"":(0,u.jsx)(b,(0,r.Z)({itemData:i,cardWidth:l,fullWidth:!1,itemId:i.id},t.props),"post_id_".concat(i.id))})):null," "]})]}):""})}}]),a}(l.PureComponent),S=(a(1598),a(11774)),C=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={cardWidth:null,largeDiv:null,smallDiv:null},t.requestData=function(){var e=t.props,a=e.wall,r=(e.postData,e.appendData),i=e.hasMoreData,n=e.loaderData,s=a.ThemeRule.numberOfPosts,o=Math.floor(Date.now()/1e3);i&&!n.isShowMoreLoading&&t.props.getDataNextSteps(a.Wall.id,o,s,r.networkID,r.after,r.heightEvent)},t.onCollageDataFormation=function(e){var a=e.wall,r=(e.postData,document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:""),i=a.ThemeRule.numberOfCoumn,n=(0,m.nf)(r,i,a.Personalization.commerceTheme),s=n.cardWidth,o=n.largeDiv,l=n.smallDiv;t.setState({cardWidth:s,largeDiv:o,smallDiv:l})},t.onUpdateData=function(){setTimeout((function(){return t.requestData()}),1e3)},t.requestData=function(){var e=t.props,a=e.wall,r=(e.postData,e.appendData),i=e.hasMoreData,n=e.loaderData,s=a.ThemeRule.numberOfPosts,o=Math.floor(Date.now()/1e3);i&&!n.isShowMoreLoading&&t.props.getDataNextSteps(a.Wall.id,o,s,r.networkID,r.after,r.heightEvent)},t}return(0,n.Z)(a,[{key:"componentDidMount",value:function(){var t=this;this.onCollageDataFormation(this.props);var e=this.props,a=e.wall,r=(e.postData,e.appendData);document.getElementById("scrlBarComanW");r&&a.Personalization.autoScrollStatus&&window.addEventListener("scroll",(function(e){var a=document.getElementById("scrlBarComanW"),r=(document.body.scrollHeight,window.innerHeight+window.scrollY);a.scrollHeight-10<r&&setTimeout((function(){return t.requestData()}),1e3)}))}},{key:"render",value:function(){var t=this,e=this.state,a=(e.data,e.cardWidth),i=(e.largeDiv,e.smallDiv,this.props),n=(i.postData,i.completeDataObject,i.adjustWidth,i.wall),s=(i.webFilters,i.languageSetting,i.newPostData),o=i.loaderData,l=i.hasMoreData,d=n.UserRule.on_site_upload&&(!window.isEditor||(0,m.G)()),c={type:"loop",autoplay:1==n.ThemeRule.slidePost,interval:1==n.ThemeRule.slidePost?1e3*parseInt(n.ThemeRule.slideDuration):5e3,speed:1300,perPage:2.5,perMove:2,focus:0,waitForTransition:!1,updateOnMove:!0,breakpoints:{480:{perPage:1.5,perMove:1}}};return(0,u.jsx)("div",{className:"tb_gst_post_container",id:"ts_theme_container",children:(0,u.jsxs)(S.tv,{hasTrack:!1,options:c,children:[(0,u.jsx)(S.Gj,{children:s&&s.length>0?s.map((function(e,i){m.j6&&s&&s.length-1==i&&setTimeout((function(){var t=document.querySelectorAll("img[data-is-optmized='0']");t&&t.length>0&&t.forEach((function(t){t.setAttribute("src",t.getAttribute("data-src")),t.setAttribute("data-is-optmized","1")}))}),1400);var n=0==i&&d&&2==e.length;return 3==e.length||n?(0,u.jsx)(S.jw,{children:(0,u.jsx)(Z,(0,r.Z)((0,r.Z)({dataArr:e,onSiteUploadShow:n,indexNo:i<6?i:"0"},t.props),{},{cardWidth:a,largeDiv:66.66,smallDiv:33.33}),"post_id_".concat(i))},"splide_Id".concat(i)):""})):null}),(0,u.jsxs)("div",{className:"splide__arrows",children:[(0,u.jsx)("div",{className:" splide__arrow--next tb_gs_slider_next_arrow-next",onClick:this.onUpdateData,children:l&&o.isShowMoreLoading?(0,u.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,u.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,u.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,u.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,u.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,u.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,u.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,u.jsx)("div",{})})}),(0,u.jsx)("div",{className:" splide__arrow--prev tb_gs_slider_pre_arrow-prev",children:(0,u.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,u.jsx)("div",{})})})]})]})})}}]),a}(l.PureComponent),I=(0,x.$j)((function(t){var e=t.appData;return{appData:e,loaderData:t.loaderData,newPostData:e.newPostData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(function(t){return{getDataNextSteps:function(e,a,r,i,n,s,o){return t((0,D.Sx)(e,a,r,i,n,s,o))}}}))(C)}}]);