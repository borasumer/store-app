(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/logo.9f7e506d.svg"},40:function(e,t,a){e.exports=a(68)},45:function(e,t,a){},46:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),o=(a(45),a(2)),m=a(10),i=(a(46),a(47),a(8)),s=a(32),u=a.n(s),d=a(9);function p(){var e=Object(i.a)(["\ntext-transform: capitalize;\nfont-size: 1.4rem;\nbackground: transparent;\nborder:0.05rem solid var(--lightBlue);\nborder-color:",";\ncolor: ",";\nborder-radius: 0.5rem;\npadding: 0.2rem 0.5rem;\ncursor:pointer:\nmargin: 0.2rem 0.5 rem;\ntransition:all 0.5s ease-in-out;\nfont-family: 'Oswald', sans-serif !important;\n&:hover{\n  background: ",";\n  color: var(--mainBlue);\n  }\n&:focus{\n    outline:none;\n}\n"]);return p=function(){return e},e}var E=d.a.button(p(),function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"},function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"},function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"});function f(){var e=Object(i.a)(["\nbackground: var(--mainBlue);\n.nav-link{\n  color:var(--mainWhite) !important;\n  font-size:1.3rem;\n  text-transform: capitalize;\n}\n"]);return f=function(){return e},e}var b=d.a.nav(f()),v=function(){return r.a.createElement(b,{className:"navbar navbar-expand-sm navbar-dark px-sm-5"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:u.a,alt:"store",className:"navbar-brand"})),r.a.createElement("ul",{className:"navbar-nav align-items-center"},r.a.createElement("li",{className:"nav-item ml-5"},r.a.createElement(o.b,{to:"/",className:"nav-link"},"Products"))),r.a.createElement(o.b,{to:"/cart",className:"ml-auto"},r.a.createElement(E,null,r.a.createElement("span",{className:"mr-2"},r.a.createElement("i",{className:"fas fa-cart-plus"}),"my cart"))))},g=function(e){var t=e.name,a=e.title;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-capitalize font-weight-bold"},t,r.a.createElement("strong",{className:"text-blue"},a))))},x=a(7),N=a(13),h={id:1,title:"Google Pixel - Black",img:"img/product-1.png",price:10,company:"google",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},O=a(37),j=a.n(O),k=Object(n.createContext)(),w=function(e){var t=Object(n.useState)([]),a=Object(N.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),m=Object(N.a)(o,2),i=m[0],s=m[1],u=Object(n.useState)([]),d=Object(N.a)(u,2),p=d[0],E=d[1],f=Object(n.useState)({cartSubTotal:0,cartTax:0,cartTotal:0}),b=Object(N.a)(f,2),v=b[0],g=b[1];Object(n.useEffect)(function(){j.a.get("https://phone-app-new.herokuapp.com/products/").then(function(e){e?l(e.data):console.log("there is no response")}).catch(function(e){return console.log(e)})},[]),Object(n.useEffect)(function(){!function(){var e=0;p.map(function(t){return e+=t.total});var t=parseFloat((.1*e).toFixed(2));g({cartSubTotal:e,cartTax:t,cartTotal:e+t})}()},[p]);var O=Object(n.useState)({modelProduct:h,modelOpen:!1}),w=Object(N.a)(O,2),y=w[0],C=w[1],T=function(e){var t=Object(x.a)(c),a=Object(x.a)(p);a=a.filter(function(t){return t._id!==e});var n=t.indexOf(S(e)),r=t[n];r.inCart=!1,r.count=0,r.total=0,E(Object(x.a)(a)),l(Object(x.a)(t))},S=function(e){return c.find(function(t){return t._id===e})};return r.a.createElement(k.Provider,{value:{resStore:function(){var e=Object(x.a)(c);e.forEach(function(e){return e.inCart=!1}),l(e)},products:c,cart:p,details:i,addCart:function(e){console.log("first",c);var t=Object(x.a)(c),a=t.indexOf(S(e)),n=t[a];n.inCart=!0,n.count=1;var r=n.price;n.total=r,E([].concat(Object(x.a)(p),[n]))},handleDetails:function(e){var t=S(e);s(t)},model:y,openModel:function(e){var t=S(e);C({modelOpen:!0,modelProduct:t})},closeModel:function(){C({modelOpen:!1,modelProduct:h})},increment:function(e){var t=Object(x.a)(p),a=t.find(function(t){return t._id===e}),n=t.indexOf(a),r=t[n];r.count=r.count+1,r.total=r.count*r.price,E(t)},decrement:function(e){var t=Object(x.a)(p),a=t.find(function(t){return t._id===e}),n=t.indexOf(a),r=t[n];r.count=r.count-1,0===r.count?T(e):(r.total=r.count*r.price,E(t))},removeItem:T,clearCart:function(){E([]),g({cartSubTotal:0,cartTax:0,cartTotal:0})},cartValue:v,addTotals:function(){var e=0;p.map(function(t){return e+=t.total});var t=parseFloat((.1*e).toFixed(2));g({cartSubTotal:e,cartTax:t,cartTotal:e+t})}}},e.children)};function y(){var e=Object(i.a)(["\n  .card {\n    border-color: transparent;\n    transition: all 1s linear;\n  }\n  .card-footer {\n    background: transparent;\n    border-top: transparent;\n    transition: all 1s linear;\n  }\n  &:hover {\n    .card {\n      border: 0.04rem solid rgba(0, 0, 0, 0.2);\n      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);\n    }\n    .card-footer {\n      background: rgba(247, 247, 247);\n    }\n  }\n  .img-container {\n    position: relative;\n    overflow: hidden;\n  }\n  .card-img-top {\n    transition: all 1s linear;\n  }\n  .img-container:hover .card-img-top {\n    transform: scale(1.2);\n  }\n  .cart-btn {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 0.2rem 0.4rem;\n    background: var(--lightBlue);\n    border: none;\n    color: var(--mainWhite);\n    font-size: 1.4rem;\n    border-radius: 0.5rem 0 0 0;\n    transform: translate(100%, 100%);\n    transition: all 1s ease-in-out;\n  }\n  .img-container:hover .cart-btn {\n    transform: translate(0, 0);\n  }\n  .cart-btn:hover {\n    color: var(--mainBlue);\n    cursor: pointer;\n  }\n"]);return y=function(){return e},e}var C=function(e){var t=e.product,a=Object(n.useContext)(k),c=a.handleDetails,l=a.addCart,m=a.openModel,i=t._id;return r.a.createElement(T,{className:"col-9 mx-auto col-md-6 col-lg-3 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container p-5",onClick:function(){return c(i)}},r.a.createElement(o.b,{to:"/details"},r.a.createElement("img",{src:t.img,alt:"",className:"card-img-top"})),r.a.createElement("button",{onClick:function(){l(i),m(i)},className:"cart-btn",disabled:!!t.inCart},t.inCart?r.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0},"in cart"):r.a.createElement("i",{className:"fas fa-cart-plus"}))),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("p",{className:"align-self-center mb-0"},t.title),r.a.createElement("h5",{className:"text-blue font-italic mb-0"},r.a.createElement("span",{className:"mr-1"},"$"),t.price))))},T=d.a.div(y()),S=function(){var e=Object(n.useContext)(k).products;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(g,{name:"our",title:"products"}),r.a.createElement("div",{className:"row"},e.map(function(e){return r.a.createElement(C,{product:e,key:e._id})}))))},z=function(){var e=Object(n.useContext)(k),t=e.details,a=e.addCart,c=e.openModel,l=t._id,m=t.company,i=t.img,s=t.info,u=t.price,d=t.title,p=t.inCart;return r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},r.a.createElement("h1",null,d))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{src:i,className:"img-fluid",alt:"product detail img"})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},r.a.createElement("h2",null,"model: ",d),r.a.createElement("h4",{className:"text-title text-uppercase text-muted mt-3 mb-2"},"made by : ",r.a.createElement("span",{className:"text-uppercase"},m)),r.a.createElement("h4",{className:"text-blue"},r.a.createElement("strong",null,"price : ",r.a.createElement("span",null,"$"),u)),r.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"some info about the product:"),r.a.createElement("p",{className:"text-muted lead"},s),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"ml-2 mr-2"},r.a.createElement(o.b,{to:"/"},r.a.createElement(E,null,"back to products"))),r.a.createElement("div",{className:"ml-2"},r.a.createElement(E,{cart:!0,onClick:function(){a(l),c(l)},disabled:!!p},p?"inCart":"add to cart"))))))},B=function(){return r.a.createElement("div",{className:"container-fluid text-center d-none d-lg-block"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"products")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"name of the product")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))},$=function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title"},r.a.createElement("h1",null,"your cart is currently empty"))))},_=function(e){var t=e.item,a=Object(n.useContext)(k),c=a.increment,l=a.decrement,o=a.removeItem,m=a.addTotals,i=t._id,s=t.title,u=t.img,d=t.price,p=t.total,E=t.count;return r.a.createElement("div",{className:"row my-2 text-capitalize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:u,style:{width:"5rem",height:"5rem"},className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"product :"),s),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"price : $"),d),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){l(i),m()}},"-"),r.a.createElement("span",{className:"btn btn-black mx-1"},E),r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){c(i),m()}},"+")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("div",{className:"cart-icon",onClick:function(){o(i),m()}},r.a.createElement("i",{className:"fas fa-trash"}))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("strong",null,"item total : $ ",p)))},F=function(e){var t=e.cart;return r.a.createElement("div",{className:"container-fluid"},t.map(function(e){return r.a.createElement(_,{key:e._id,item:e})}))},P=function(){var e=Object(n.useContext)(k),t=e.clearCart,a=e.cartValue,c=e.resStore,l=a.cartSubTotal,m=a.cartTotal,i=a.cartTax;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"},r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-danger text-uppercase mb-3 px-5",type:"button",onClick:function(){t(),c()}},"clear cart")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"subtotal :"),r.a.createElement("strong",null,"$ ",l)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"tax :"),r.a.createElement("strong",null,"$ ",i)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"total :"),r.a.createElement("strong",null,"$ ",m))))))},M=function(){var e=Object(n.useContext)(k).cart;return e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{name:"Your",title:"Cart"}),r.a.createElement(B,null),r.a.createElement(F,{cart:e}),r.a.createElement(P,{cart:e})):r.a.createElement($,null)},I=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"page not found"))};function W(){var e=Object(i.a)(["\nposition:fixed;\ntop:0;\nleft:0;\nright:0;\nbottom:0;\nbackground:rgba(0,0,0,0.3);\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n#model{\n  background:var(--mainWhite);\n}\n\n"]);return W=function(){return e},e}var Y=function(){var e=Object(n.useContext)(k),t=e.closeModel,a=e.model,c=a.modelOpen,l=a.modelProduct,m=l.img,i=l.title,s=l.price;return c?r.a.createElement(D,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"model",className:"col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"},r.a.createElement("h5",null,"Item has added to the cart"),r.a.createElement("img",{className:"img-fluid",src:m,alt:"Model"}),r.a.createElement("h5",null,i),r.a.createElement("h5",{className:"text-muted"},"price: $ ",s),r.a.createElement(o.b,{to:"/"},r.a.createElement(E,{onClick:function(){return t()}},"store")),r.a.createElement(o.b,{to:"/cart"},r.a.createElement(E,{cart:!0,onClick:function(){return t()}},"go to cart")))))):null},D=d.a.div(W());var V=function(){return r.a.createElement(w,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(v,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:S}),r.a.createElement(m.a,{path:"/details",component:z}),r.a.createElement(m.a,{path:"/cart",component:M}),r.a.createElement(m.a,{component:I})),r.a.createElement(Y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.a77a76c1.chunk.js.map