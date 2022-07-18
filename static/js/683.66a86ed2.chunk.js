"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[683],{78233:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var o=a(1413),r=a(15671),n=a(43144),s=a(60136),i=a(48347),l=a(47313),c=a(85942),d=a(57400),u=a(17739),h=a(46417),p=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(t){var o;return(0,r.Z)(this,a),(o=e.call(this,t)).myRef=l.createRef(),o.state={height:"",padding:"",error:"",hideHotspot:!1,width:"100"},o}return(0,n.Z)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.ImageClass;document.querySelector(".".concat(e))&&document.querySelector(".".concat(e)).clientWidth>100?this.setState({hideHotspot:!1}):this.setState({hideHotspot:!0}),new ResizeObserver((function(e){window.dispatchEvent(new Event("resize")),t.getMarginTop()})).observe(document.querySelector(".taggshopContainer"))}},{key:"getMarginTop",value:function(){setTimeout((function(){return window.isEditor?(0,u.ll)(99):""}),100)}},{key:"componentWillMount",value:function(){var t=this,e=this.props.ImageUrl;(0,c.Z)(e).then((function(e){var a=e.width,o=e.height;return t.setState({height:100*o/a,width:100*a/o})})).catch((function(e){return t.setState({height:100,width:100,error:e})}))}},{key:"render",value:function(){var t=this,e=this.props,a=e.ImageClass,o=e.ImageUrl,r=e.item,n=e.ugc_products,s=e.wall,i=this.state,l=(i.width,i.height,i.hideHotspot),c={backgroundImage:"url(".concat(o,")")},p={height:r.hotspot?"100%":"auto",width:r.hotspot?"auto":"100%",margin:"0px auto"};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"ts_ms_image_blur_bg",style:c,children:(0,h.jsx)("div",{})}),(0,h.jsxs)("div",{className:a,style:p,children:[(0,h.jsx)("img",{"data-src":o,src:u.j6?r.optmizedImg:o,"data-is-optmized":"0",style:p,"data-link":r.link,"data-load":"0","data-wall-id":s.Wall.id,"data-item-id":r.id,onLoad:this.onLoadImage,"data-filter-id":r.filterId,"data-stories":r.stories,"data-network":r.networkId,height:"100",width:"100",onError:function(t){(0,u.bO)(t)},alt:"image"}),!l&&r.hotspot&&r.ugc_products&&Object.keys(r.ugc_products).length>0?n.map((function(e,a){return(0,h.jsx)(d.Z,{customClass:"tb_post_hotspot_tooltip_",parentID:t.myRef,isIndex:a,product:e,item:r},a)})):""]})]})}}]),a}(l.PureComponent),m=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,n.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,o=(0,u.HS)(e.ugc_products);document.querySelector(".ts_p_".concat(e.id))&&document.querySelector(".ts_p_".concat(e.id)).clientWidth;return(0,h.jsx)("div",{className:"ts_ms_post_image",children:(0,h.jsx)("div",{className:"ts_ms_media_wrap",children:(0,h.jsx)(p,{ImageClass:"ts_ms_image",ImageUrl:e.postFileNew,ugc_products:o,item:e,wall:a})})})}}]),a}(l.PureComponent),f=a(24387),_=a(7284),g=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,n.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.wall,a=t.item,o={fontFamily:e.ThemeRule.css_font,fontSize:e.ThemeRule.fontSize,color:"#000000"===e.ThemeRule.cardColor&&"#000000"===e.ThemeRule.fontColor?"#ffffff":"#ffffff"===e.ThemeRule.cardColor&&"#ffffff"===e.ThemeRule.fontColor?"#000000":e.ThemeRule.fontColor};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"ts_ms_card_content",style:o,children:[" ",a.content," "]})})}}]),a}(l.PureComponent),v=a(98501),w=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,n.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,o=t.network,r=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),n=a.ThemeRule.hideContent,s=505==a.ThemeRule.iconType?o.color:a.ThemeRule.iconColor,i=""==a.ThemeRule.postHover||1!=a.ThemeRule.postHover,l={backgroundColor:i?"rgb(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},c={fontFamily:a.ThemeRule.css_font,backgroundColor:i?"rgba(0, 0, 0, 1)":"rgb(255, 255, 255, 0)",borderColor:i?"#000":"#fff"},d=o.icon.replace("fa-","");return(0,h.jsx)("div",{className:"ts_ms_Post_hover",children:(0,h.jsxs)("div",{className:"ts_card_hover_in",children:[(0,h.jsx)("div",{className:"ts_ms_card_hover_overlay",style:l,children:(0,h.jsx)("div",{})}),(0,h.jsxs)("div",{className:"ts_ms_card_hover_content",children:[(0,h.jsx)("div",{className:"ts_ms_slider-social-icon",children:null!=e.rating&&0!=e.rating?(0,h.jsx)("div",{className:"ts_ms_social_rating",style:{backgroundImage:"url(".concat(v.KA).concat(e.networkId,"/").concat(e.rating,".png)")},children:(0,h.jsx)("div",{})}):(0,h.jsx)("div",{className:"tb__icon tb-".concat(d),style:{color:s},children:(0,h.jsx)("div",{})})}),(0,h.jsx)("div",{className:"ts_ms_card_content_00",style:{fontFamily:"Inter",fontSize:13,color:"rgb(0, 0, 0)"},children:r?0==n?(0,h.jsx)(g,{wall:a,item:e}):(0,h.jsx)("div",{className:"ts_ms_card_shop_btn",children:(0,h.jsx)(_.Z,{shoppingText:a.ThemeRule.shoppingText,ctaClass:"ts_ms_shop_btn",styleCta:c})}):(0,h.jsx)(g,{wall:a,item:e})})]}),a.ThemeRule.socialAction?(0,h.jsx)(f.Z,{item:e,wall:a,network:o}):""]})})}}]),a}(l.PureComponent),x=a(42417),j=a(8354),D=a(73763),y=a(7675),b=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,r.Z)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).onLoadPopup=function(e){var a=t.props,o=a.itemData,r=a.wall,n=(a.appendData,a.postData),s=(a.itemId,a.languageSetting),i=a.completeDataObject,l=a.wallId,c=a.webFilters,d=a.itemIndex,h=n.map((function(t){return i[t]})),p=h.filter((function(t){return!String(t.id).includes("free_add_")})),m=(0,u.E6)(p,o.id,d);1===r.Personalization.postFeatured&&((0,u.st)("add"),t.props.showPopUP({type:"post",card:o,idArray:p,index:m,viewOnText:s.viewOnText,shareText:s.shareText,personalization:r.Personalization,ThemeRule:r.ThemeRule,webFilters:c,UserRule:r.UserRule,wall:r})),(0,D.S5)({action:2,wall:l,feed:o.feedId,post:o.referenceId})},t}return(0,n.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.itemData,a=t.wall,o=t.webFilters,r=(t.cardWidth,e.highlight,a.ThemeRule.shareOption,a.ThemeRule.hideContent,(0,u.EH)(e.networkId,o)),n={backgroundColor:a.ThemeRule.cardColor,borderRadius:a.ThemeRule.roundEdge},s={width:"100%",height:"auto",padding:a.Personalization.padding/2},i=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),l=3===e.type||5===e.type;return(0,h.jsx)("div",{className:"ts_ms_post_wrapper ".concat(e&&e.id?"ts_p_"+e.id:""),style:s,children:(0,h.jsx)("div",{className:"ts_ms_post_in ".concat(e.hotspot?"":"ts_ms_post_in_hostpot_hover"),onClick:e.isPost?null:this.onLoadPopup,style:n,children:e.isPost?(0,h.jsx)(y.Z,{}):(0,h.jsxs)(h.Fragment,{children:[i||l?(0,h.jsx)(x.Z,{item:e,wall:a}):"",(0,h.jsx)(m,{item:e,wall:a}),e.hotspot?null:(0,h.jsx)(w,{item:e,wall:a,network:r})]})})})}}]),a}(l.PureComponent),k=(0,j.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,D.Bm)(e))}}}))(b),T=(a(16231),function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,n.Z)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.dataArr,r=(e.indexNo,e.completeDataObject),n=(e.wall,e.webFilters,e.languageSetting,e.cardWidth);e.largeDiv,e.smallDiv;return(0,h.jsx)("div",{className:"ts_ms_post_row",children:a&&a.length>0?a&&a.length>0?a.map((function(e,a){var s=r[e];return(0,h.jsx)(k,(0,o.Z)({itemData:s,cardWidth:n,fullWidth:!1,itemId:s.id},t.props),"post_idMs_".concat(a))})):null:""})}}]),a}(l.PureComponent)),R=(a(1598),a(11774)),Z=function(t){(0,s.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,r.Z)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={data:[],cardWidth:null,loadMore:!1},t.onUpdateData=function(){setTimeout((function(){return t.requestData()}),1e3)},t.requestData=function(){var e=t.props,a=e.wall,o=(e.postData,e.appendData),r=e.hasMoreData,n=e.loaderData,s=a.ThemeRule.numberOfPosts,i=Math.floor(Date.now()/1e3);r&&!n.isShowMoreLoading&&t.props.getDataNextSteps(a.Wall.id,i,s,o.networkID,o.after,o.heightEvent)},t.onSliderDataFormation=function(e){var a=e.wall,o=e.postData,r=a.ThemeRule.multiRow,n=(0,u.td)(o,r);t.setState({data:n})},t}return(0,n.Z)(a,[{key:"componentDidMount",value:function(){var t=this;this.props.wall;setTimeout((function(){return t.setState({loadMore:!0})}),500),this.onSliderDataFormation(this.props)}},{key:"render",value:function(){var t=this,e=this.props,a=(e.appendData,e.postData),r=(e.completeDataObject,e.adjustWidth,e.hasMoreData),n=e.wall,s=(e.webFilters,e.languageSetting,e.loaderData),i=e.newPostData,l=this.state,c=(l.data,l.loadMore,l.cardWidth,a.length,n.Personalization.columnCount),d=n.ThemeRule.mobileColumn,p={type:"loop",autoplay:1==n.ThemeRule.slidePost,perPage:"".concat(0==c?6:c),interval:1==n.ThemeRule.slidePost?1e3*parseInt(n.ThemeRule.slideDuration):5e3,perMove:"".concat(1==n.ThemeRule.slidePost?1:0==c?6:c),updateOnMove:!0,pagination:!1,breakpoints:{480:{perPage:"".concat(0==d?1:d),perMove:"".concat(1==n.ThemeRule.slidePost||0==d?1:d)}}};return(0,h.jsx)("div",{className:"ts_ms_post_container",id:"ts_theme_container ",children:(0,h.jsxs)(R.tv,{hasTrack:!1,options:p,children:[(0,h.jsx)(R.Gj,{children:i&&i.length>0?i.map((function(e,a){return u.j6&&i&&i.length-1==a&&setTimeout((function(){var t=document.querySelectorAll("img[data-is-optmized='0']");t&&t.length>0&&t.forEach((function(t){t.setAttribute("src",t.getAttribute("data-src")),t.setAttribute("data-is-optmized","1")}))}),1300),(0,h.jsx)(R.jw,{children:(0,h.jsx)(T,(0,o.Z)((0,o.Z)({dataArr:e,indexNo:a},t.props),{},{evenRow:a%2=="0"}),"post_id_ms".concat(a))})})):null}),(0,h.jsxs)("div",{className:"splide__arrows",children:[(0,h.jsx)("div",{className:" splide__arrow--next tb_ms_slider_next_arrow-next",onClick:this.onUpdateData,children:r&&s.isShowMoreLoading?(0,h.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,h.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,h.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,h.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,h.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,h.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,h.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,h.jsx)("div",{})})}),(0,h.jsx)("div",{className:" splide__arrow--prev tb_ms_slider_pre_arrow-prev",children:(0,h.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,h.jsx)("div",{})})})]})]})})}}]),a}(l.PureComponent),C=(0,j.$j)((function(t){var e=t.appData;return{appData:e,loaderData:t.loaderData,newPostData:e.newPostData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(function(t){return{getDataNextSteps:function(e,a,o,r,n,s,i){return t((0,D.Sx)(e,a,o,r,n,s,i))}}}))(Z)}}]);