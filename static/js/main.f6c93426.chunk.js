(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{59:function(e,t,a){e.exports=a.p+"static/media/prolap-logo.96c2a273.jpg"},65:function(e,t,a){e.exports=a(79)},70:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},71:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),l=a.n(c),i=a(36),o=a(24),s=a(9),d=(a(70),a(71),a(59)),m=a.n(d),p=a(60);var u=function(e){var t=e.open,a=e.setOpen;return n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navbar_logo"},n.a.createElement(o.b,{to:"/"}," ",n.a.createElement("img",{className:"nav_logo",src:m.a,alt:""})),n.a.createElement(p.a,{id:"nav_toggle",onClick:function(){return a(!t)},active:t,burger:"slider",color:t?"#7f9eb5":"#003e6b"}),n.a.createElement("div",{className:"navbar_navlinks_container",style:{transform:t?"translateX(0) ":"translateX(200%)"}},n.a.createElement("span",{className:"navlink"},n.a.createElement(o.b,{to:"/products"}," Products")),n.a.createElement("span",{className:"navlink"},n.a.createElement(o.b,{to:"/cart"}," Cart")),n.a.createElement("span",{className:"navlink"},n.a.createElement(o.b,{to:"/about"}," About")))))},v=a(16),h=a(17),b=a(19),g=a(18),f=a(55),E={desktops:[{id:1,brand:"Acer ",model:"Nitro50 ",purpose:"( Gaming )",price:"RF 11,900",cpu:"8th Gen Intel Core i5",cpu_model:"-8400",gpu:"AMD Radeon RX 580",ram:"8GB DDR4 ",ram_speed:"2666MHz RAM",vram:"4GB GDDR5",hdd:"1TB",hdd_speed:"7200RPM",SSD:"",optical_drive:"8X DVD-Writer",optical_drive_details:"Double-Layer Drive (DVD-RW)",img:"img/Acer-Nitro50-N50-600.jpg"},{id:2,brand:"Hp",model:"Pavilion TP01-0034",purpose:"( Media )",price:"RF 12,990",cpu:"Intel\xae Core\u2122 i7",cpu_model:"-8700",gpu:"Intel\xae UHD Graphics 630",ram:"8GB DDR4 ",ram_speed:"2666MHz RAM",vram:"",hdd:"1TB",hdd_speed:"7200RPM",SSD:"",optical_drive:"8X DVD-Writer",optical_drive_details:"Double-Layer Drive (DVD-RW)",img:"img/Hp-Pavilion-TP01-0034.jpg"},{id:3,brand:"Acer ",model:"Nitro50 ",purpose:"( Gaming )",price:"RF 11,900",cpu:"8th Gen Intel Core i5",cpu_model:"-8400",gpu:"AMD Radeon RX 580",ram:"8GB DDR4 ",ram_speed:"2666MHz RAM",vram:"4GB GDDR5",hdd:"1TB",hdd_speed:"7200RPM",SSD:"",optical_drive:"8X DVD-Writer",optical_drive_details:"Double-Layer Drive (DVD-RW)",img:"img/Acer-Nitro50-N50-600.jpg"},{id:4,brand:"Hp",model:"Pavilion TP01-0034",purpose:"( Media )",price:"RF 12,990",cpu:"Intel\xae Core\u2122 i7",cpu_model:"-8700",gpu:"Intel\xae UHD Graphics 630",ram:"8GB DDR4 ",ram_speed:"2666MHz RAM",vram:"",hdd:"1TB",hdd_speed:"7200RPM",SSD:"",optical_drive:"8X DVD-Writer",optical_drive_details:"Double-Layer Drive (DVD-RW)",img:"img/Hp-Pavilion-TP01-0034.jpg"}],laptops:[{id:1,brand:"Lenovo",model:"Ideapad 330-15IGM (81D1)",purpose:"( Media )",price:"RF 7,900",cpu:"Intel Celeron Dual Core",cpu_model:"-N4000 / 1.1 Ghz",gpu:"Intel HD Graphics 500",ram:"4GB DDR4 ",ram_speed:"2666MHz RAM",vram:"2GB DDR4",hdd:"512GB",hdd_speed:"SSD",SSD:"",optical_drive:"8X DVD-Writer",optical_drive_details:"Double-Layer Drive (DVD-RW)",img:"img/Lenovo-Ideapad-330-15IGM-81D1-image-1-720x720.jpg"},{id:2,brand:"Asus",model:"F510QA-DS99",purpose:"( Media )",price:"RF 9,200",cpu:"Intel Celeron Dual Core",cpu_model:"-N4000 / 1.1 Ghz",gpu:"Intel HD Graphics 500",ram:"4GB DDR4 ",ram_speed:"2666MHz RAM",vram:"2GB DDR4",hdd:"512GB",hdd_speed:"SSD",SSD:"",optical_drive:"8X DVD-Writer",optical_drive_details:"Double-Layer Drive (DVD-RW)",img:"img/Asus-F510QA-DS99-image-2-720x720.jpg"},{id:3,brand:"Asus",model:"ROG Hero Edition GL503GE-US72",purpose:"( Gaming )",price:"RF 18,500",cpu:"Intel Core i7",cpu_model:"-8750H Processor 2.2GHz",gpu:"NVIDIA GeForce GTX 1050 Ti",ram:"8GB DDR4 ",ram_speed:"3000MHz RAM",vram:"6GB DDR4",hdd:"128GB",hdd_speed:"SSD",SSD:"",optical_drive:"8X DVD-Writer",optical_drive_details:"Double-Layer Drive (DVD-RW)",img:"img/Asus-ROG-Hero-Edition-GL503GE-US72-image-1-720x720.jpg"}]},D=n.a.createContext(),_=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={productData:E,detailProduct:!1},e.setProductDetail=function(t,a){var r=e.getItem(t,a);console.log(r),e.setState((function(){return{detailProduct:r}}))},e.getItem=function(t,a){return e.state.productData[a].find((function(e){return e.id===t}))},e}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement(D.Provider,{value:Object(f.a)(Object(f.a)({},this.state),{},{setProductDetail:this.setProductDetail})},this.props.children)}}]),a}(r.Component),N=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleDetails=function(t){e.props.setProductDetails(t,e.props.filter),e.props.history.push("details")},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.id,r=t.brand,c=t.model,l=t.price,i=t.img,o=t.purpose,s=t.cpu,d=t.ram,m=t.cpu_model,p=t.hdd,u=t.hdd_speed,v=t.ram_speed,h=t.gpu,b=t.vram,g=t.optical_drive,f=t.optical_drive_details;return n.a.createElement("div",{className:"product-card"},n.a.createElement("img",{className:"product-card_img",src:"/simple-todo-app/"+i,alt:"product image"}),n.a.createElement("div",{className:"product-card_content"},n.a.createElement("h2",{className:"product-card_brand"},r),n.a.createElement("h3",{className:"product-card_model"},c),n.a.createElement("span",{className:"badge"},o),n.a.createElement("div",{className:"spec_container"},n.a.createElement("h4",{className:"spec_title"},"CPU"),n.a.createElement("span",{className:"spec_details"},s),n.a.createElement("span",{className:"spec_details-sub"},m)),n.a.createElement("div",{className:"spec_container"},n.a.createElement("h4",{className:"spec_title"},"HDD"),n.a.createElement("span",{className:"spec_details"},p),n.a.createElement("span",{className:"spec_details-sub"}," ",u)),n.a.createElement("div",{className:"spec_container"},n.a.createElement("h4",{className:"spec_title"},"RAM"),n.a.createElement("span",{className:"spec_details"},d),n.a.createElement("span",{className:"spec_details-sub"},v)),n.a.createElement("div",{className:"spec_container"},n.a.createElement("h4",{className:"spec_title"},"GPU"),n.a.createElement("span",{className:"spec_details"},h),n.a.createElement("span",{className:"spec_details-sub"}," ",b)),n.a.createElement("div",{className:"spec_container"},n.a.createElement("h4",{className:"spec_title"},"Optical Drive"),n.a.createElement("span",{className:"spec_details"},g),n.a.createElement("span",{className:"spec_details-sub"}," ",f))),n.a.createElement("div",{className:"product-card_footer-container"},n.a.createElement("button",{className:"card-btn",onClick:function(){return e.handleDetails(a)}},"Learn More"),n.a.createElement("span",{className:"product-card_price"},l)))}}]),a}(r.Component),R=Object(s.g)(N),O=a(54),j=a(115),y=a(118),C=a(123),G="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",S=Object(j.a)({root:{color:"#3880ff",width:300,height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:G,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:G}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}}),x=[{value:5e3,label:"5K"},{value:1e4,label:"10K"},{value:15e3,label:"15K"},{value:2e4,label:"20K"},{value:25e3,label:"25K"},{value:3e4,label:"30K"}];function k(e){return"RF".concat(e)}function w(e){var t=S();return console.log(e),n.a.createElement("div",{className:t.root},n.a.createElement(y.a,{id:"discrete-slider",gutterBottom:!0},"Buget Range"),n.a.createElement(C.a,{defaultValue:3e4,getAriaValueText:k,"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:5e3,marks:x,min:5e3,max:3e4,onChangeCommitted:e.onChangeCommitted}))}var P=a(124),M=a(122),A=a(120),L=a(121),B=Object(j.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function H(e){var t=B(),a=n.a.useState(1),r=Object(i.a)(a,2),c=r[0],l=r[1];return n.a.createElement("div",null,n.a.createElement(A.a,{variant:"outlined",className:t.formControl},n.a.createElement(P.a,{id:"demo-simple-select-outlined-label"},"Sort"),n.a.createElement(L.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:c,onChange:function(t){l(t.target.value),e.onChange(c)},label:"Sort"},n.a.createElement(M.a,{value:1},"High to Low prices"),n.a.createElement(M.a,{value:2},"Low to High Prices"))))}var V=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(v.a)(this,a),(r=t.call(this,e)).state={filter:"laptops",current:!1,max_value:3e4,sort_filter:2},r.setFilter=function(e,t){var a=e.target;"BUTTON"!==a.tagName&&(a=a.parentNode),r.state.current?r.state.current.classList.remove("active"):r.myRef.current.classList.remove("active"),a.classList.add("active"),r.state.current=a,r.setState({filter:t})},r.setProductDetails=function(e,t){r.context.setProductDetail(e,t)},r.setMaxValue=function(e){r.setState({max_value:e})},r.setSortFilter=function(e){r.setState({sort_filter:e})},r.myRef=n.a.createRef(),r}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.context.productData[this.state.filter].filter((function(t){return t.price.slice(2).replace(",","")<e.state.max_value}));return 1===this.state.sort_filter?t.sort((function(e,t){return e.price.slice(2).replace(",","")-t.price.slice(2).replace(",","")})):t.sort((function(e,t){return t.price.slice(2).replace(",","")-e.price.slice(2).replace(",","")})),n.a.createElement("div",{className:"product-list"},n.a.createElement("div",{className:"product-tab_container"},n.a.createElement("button",{className:"tab-btn",onClick:function(t){return e.setFilter(t,"desktops")},ref:this.myRef},n.a.createElement(O.a,{icon:["fas","desktop"],className:"lg"}),"Desktops"),n.a.createElement("button",{className:"tab-btn active",onClick:function(t){return e.setFilter(t,"laptops")},ref:this.myRef},n.a.createElement(O.a,{icon:["fas","laptop"],className:"lg"}),"Laptops")),n.a.createElement("div",{className:"filter-controls_container"},n.a.createElement("div",null,n.a.createElement(w,{onChangeCommitted:function(t,a){return e.setMaxValue(a)}})),n.a.createElement("div",null,n.a.createElement(H,{onChange:function(t){return e.setSortFilter(t)}}))),n.a.createElement("h2",{className:"product-list_heading"},"Recommended ",n.a.createElement("span",{className:"weak"},"Products")),0===t.length?n.a.createElement("div",{className:"no_items"},n.a.createElement("div",{className:"no_items_content"},n.a.createElement("h2",{className:"no_items_heading"},"Sorry no ",this.state.filter," availabe in RF"," ",this.state.max_value," buget range"),n.a.createElement("p",{className:"no_items_text"},"Please consider increasing your buget"))):n.a.createElement("div",{className:"product-card_container"},t.map((function(t){return n.a.createElement(R,{filter:e.state.filter,id:t.id,data:t,setProductDetails:e.setProductDetails})}))))}}]),a}(r.Component);V.contextType=D;var I=V,T=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Cart section"))}}]),a}(r.Component),W=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"about-us"},n.a.createElement("img",{className:"frame",src:"/simple-todo-app/img/prolap-shop.jpg",alt:""}),n.a.createElement("div",{className:"content-container"},n.a.createElement("h1",null,"About Prolap"),n.a.createElement("h2",null,"Who We Are "),n.a.createElement("p",null,"Prolap is considered as the trendsetter of \u201cOnly Originals\u201d in the Maldives. All products sold are 100% genuine originals and are imported directly from the United States. Our showroom provides the customer with hands on experience of the laptops while maintaining a wide variety of designs and models to fit the individual customer\u2019s needs."),n.a.createElement("h3",null,"Our Vision"),n.a.createElement("blockquote",null,"To be a distinguished laptop showroom with computer accessories known for the quality of products, setting new trends at the best prices"),n.a.createElement("h3",null,"Our Mission"),n.a.createElement("blockquote",null,"To offer continuous value added products to our customers"),n.a.createElement("p",null,"To accomplish this, we focus on import products known for their exceptional design,innovation, quality and ease of use.")))}}]),a}(r.Component),F=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).isNotValid=function(e,t){return""===t||"price"===e.toLowerCase()||"img"===e.toLowerCase()||"id"===e.toLowerCase()},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.context.detailProduct,a=(t.id,t.brand),r=t.model,c=(t.price,t.img),l=t.purpose;t.cpu,t.ram,t.cpu_model,t.hdd,t.hdd_speed,t.ram_speed,t.gpu,t.vram,t.optical_drive,t.optical_drive_details;return n.a.createElement("div",null,n.a.createElement("h2",null,"Product Details"),n.a.createElement(o.b,{className:"card-btn",to:"/"},"Back to Products"),n.a.createElement("div",{id:"details"},n.a.createElement("img",{className:"frame",src:"/simple-todo-app/"+c,alt:"product image"}),n.a.createElement("div",{className:"content-container"},n.a.createElement("h2",{className:"product-card_brand"},a),n.a.createElement("h3",{className:"product-card_model"},r),n.a.createElement("span",{className:"badge"},l),Object.entries(t).map((function(t){var a=Object(i.a)(t,2),r=a[0],c=a[1];if(!e.isNotValid(r,c))return n.a.createElement("div",{className:"spec_container"},n.a.createElement("span",{className:"spec_title"},n.a.createElement("strong",null,t[0]," ")),n.a.createElement("span",{className:"spec_details"},t[1]?t[1]:"None"))})))))}}]),a}(r.Component);F.contextType=D;var X=F,z=a(34),U=a(44);z.b.add(U.d,U.c,U.a,U.b);var K=function(){var e,t,a=Object(r.useState)(!1),c=Object(i.a)(a,2),l=c[0],d=c[1],m=Object(r.useRef)();return e=m,t=function(){return d(!1)},Object(r.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[e,t]),n.a.createElement("div",{className:"App"},n.a.createElement(_,null,n.a.createElement(o.a,{basename:"/"},n.a.createElement("div",{ref:m},n.a.createElement(u,{open:l,setOpen:d})),n.a.createElement(s.d,null,n.a.createElement(s.b,{exact:!0,path:"/"},n.a.createElement(s.a,{to:"/products"})),n.a.createElement(s.b,{path:"/products",component:I}),n.a.createElement(s.b,{path:"/cart",component:T}),n.a.createElement(s.b,{path:"/about",component:W}),n.a.createElement(s.b,{path:"/details",component:X})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.f6c93426.chunk.js.map