(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var a=n(0),r=n.n(a),o=n(14),i=n(1),l=n(36),c=n(214),s=n(215),u=n(5),m=n.n(u),g=n(31),b="#181818",f="#1D1D1D",d="#8C8C8C",y="#0DFDD7",h="#FC2054",p="#D26BD5",E="#2A2A2A",j="#AAAAAA",O=n(24),v=n(4),x=v.a.create({customButtonView:{width:"189px",height:"44px",borderColor:y,borderWidth:1,backgroundColor:f,justifyContent:"center",alignItems:"center"},customButtonViewHover:{width:"189px",height:"44px",backgroundColor:y,justifyContent:"center",alignItems:"center"},buttonText:{color:y,alignSelf:"center",justifyContent:"center",fontWeight:"bold"},buttonTextHover:{alignSelf:"center",justifyContent:"center",color:f,fontWeight:"bold"}}),w=function(e){var t=e.title,n=e.buttonStyle,i=e.onPressButton,l=Object(a.useState)(!1),c=m()(l,2),s=c[0],u=c[1];return r.a.createElement(O.a,{onPress:i,onHoverIn:function(){return u(!0)},onHoverOut:function(){return u(!1)},style:s?[x.customButtonViewHover,n]:[x.customButtonView,n]},r.a.createElement(o.a,{style:s?x.buttonTextHover:x.buttonText},t))},H=n(6),S=function(){return r.a.createElement(i.a,{style:{flex:1,maxHeight:Object(H.a)(.1),backgroundColor:"#282828"}})},k=n(42),T=n(216),C=n(212),B=n(211),I=v.a.create({sideBarLogo:{},sideBarLogoView:{position:"absolute",top:Object(H.a)(0),marginBottom:Object(H.a)(10)},headerView:{backgroundColor:b,flexDirection:"column",flex:9.5},headerBarText:{color:"gray",fontWeight:"600",fontSize:15,alignSelf:"center"},headerBarTextHovered:{color:y,fontWeight:"600",fontSize:15,alignSelf:"center"},headerBarTextView:{flex:4,flexDirection:"column",justifyContent:"space-evenly"},logoView:{flexDirection:"row",justifyContent:"space-around"}}),L=function(e){var t=e.navigation,c=(Object(B.a)(),Object(l.a)()),s=c.height,u=c.width,b=(c.scale,Object(a.useState)(!1)),f=m()(b,2),d=f[0],h=f[1],p=Object(a.useState)(!1),E=m()(p,2),j=(E[0],E[1],Object(a.useState)(!1)),v=m()(j,2),x=v[0],w=v[1],H=Object(a.useState)(!1),L=m()(H,2),D=L[0],W=L[1],R=Object(a.useState)(!1),z=m()(R,2),A=z[0],P=z[1],V=Object(a.useState)(!1),M=m()(V,2),U=M[0],N=M[1],F=Object(a.useState)(!1),J=m()(F,2),K=J[0],Y=J[1],q=Object(a.useState)(!1),G=m()(q,2),Q=G[0],X=G[1];return r.a.createElement(i.a,{style:I.headerView},r.a.createElement(i.a,{style:{flex:2}}),r.a.createElement(O.a,{onPress:function(){t.navigate("Home")},style:I.sideBarLogoView},r.a.createElement(k.a,{source:n(184),style:{width:.1*u,height:.1*s}})),r.a.createElement(i.a,{style:I.headerBarTextView},r.a.createElement(S,null),r.a.createElement(O.a,{onHoverIn:function(){return W(!0)},onHoverOut:function(){return W(!1)},onPress:function(){t.navigate("About")}},r.a.createElement(o.a,{style:D?I.headerBarTextHovered:I.headerBarText},"About")),r.a.createElement(S,null),r.a.createElement(O.a,{onHoverIn:function(){return h(!0)},onHoverOut:function(){return h(!1)},onPress:function(){t.navigate("Skills")}},r.a.createElement(o.a,{style:d?I.headerBarTextHovered:I.headerBarText},"My Skills")),r.a.createElement(S,null),r.a.createElement(O.a,{onHoverIn:function(){return w(!0)},onHoverOut:function(){return w(!1)},onPress:function(){t.navigate("Blog")}},r.a.createElement(o.a,{style:x?I.headerBarTextHovered:I.headerBarText},"Blog")),r.a.createElement(S,null)),r.a.createElement(i.a,{style:I.logoView},r.a.createElement(O.a,{onHoverIn:function(){return P(!0)},onHoverOut:function(){return P(!1)},onPress:function(){return g.a.openURL("https://www.linkedin.com/in/kubilay-albayrak-193892149/")}},r.a.createElement(T.a,{name:"linkedin-in",size:20,color:A?y:"gray"})),r.a.createElement(O.a,{onHoverIn:function(){return N(!0)},onHoverOut:function(){return N(!1)},onPress:function(){return g.a.openURL("https://github.com/KubilayAlbayrak")}},r.a.createElement(C.a,{name:"github",size:20,color:U?y:"gray"})),r.a.createElement(O.a,{onHoverIn:function(){return Y(!0)},onHoverOut:function(){return Y(!1)},onPress:function(){return g.a.openURL("https://twitter.com/kubilayalbyrk")}},r.a.createElement(C.a,{name:"twitter",size:20,color:K?y:"gray"})),r.a.createElement(O.a,{onHoverIn:function(){return X(!0)},onHoverOut:function(){return X(!1)},onPress:function(){return g.a.openURL("https://instagram.com/kubilayalbyrk")}},r.a.createElement(C.a,{name:"instagram",size:20,color:Q?y:"gray"}))),r.a.createElement(i.a,{style:{flex:2}}))},D=n(213),W=function(e){var t=e.setToggleHeaderContent,n=e.toggleHeaderContent,o=Object(a.useState)(!1),l=m()(o,2),c=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{style:R.toggleHeaderView},r.a.createElement(O.a,{onPress:function(){s(!c),t(!n)}},c?r.a.createElement(C.a,{name:"close",size:40,color:"white"}):r.a.createElement(D.a,{name:"three-bars",size:40,color:"white"}))))},R=v.a.create({toggleHeaderView:{position:"absolute",top:Object(H.a)(2),right:Object(H.b)(2),zIndex:6e3}}),z=n(151),A=n.n(z),P=function(){var e=Object(a.useState)(!1),t=m()(e,2),n=t[0],i=t[1];return r.a.createElement(A.a,{isFlipped:n,flipDirection:"vertical"},r.a.createElement(O.a,{onHoverIn:function(){return i(!0)},style:{backgroundColor:E,width:"288px",height:"146px",justifyContent:"space-evenly",alignItems:"flex-start",borderRadius:"15px"}},r.a.createElement(o.a,{style:{color:j,fontSize:Object(H.a)(2),fontWeight:"bold",alignSelf:"center"}},"React / React-Native","\n","\n"," ","       "," Developer")),r.a.createElement(O.a,{onHoverOut:function(){return i(!1)},style:{backgroundColor:E,width:"288px",height:"146px",justifyContent:"space-evenly",alignItems:"flex-start",borderRadius:"15px"}},r.a.createElement(o.a,{style:{color:j,fontSize:Object(H.a)(3),fontWeight:"300",marginLeft:Object(H.b)(1)}},"Ete Solutions"),r.a.createElement(o.a,{style:{color:j,fontSize:Object(H.a)(2),fontWeight:"200",marginLeft:Object(H.b)(1)}},"2021 -"),r.a.createElement(o.a,{style:{color:j,fontSize:Object(H.a)(1.5),fontWeight:"500",marginLeft:Object(H.b)(1)}},"Working on Web / Mobile side in Security & Military Applications Project")))},V=v.a.create({sideBarLogoView:{justifyContent:"center",alignItems:"center"},headerView:{backgroundColor:b,flexDirection:"column",flex:9.5},headerBarText:{color:"gray",fontWeight:"bold",fontSize:20,alignSelf:"center",marginBottom:Object(H.a)(2),marginTop:Object(H.a)(2)},headerBarTextHovered:{color:y,fontWeight:"bold",fontSize:20,alignSelf:"center",marginBottom:Object(H.a)(2),marginTop:Object(H.a)(2)},headerBarTextView:{flex:4,flexDirection:"column",justifyContent:"space-evenly"},logoView:{flexDirection:"row",justifyContent:"space-around"}}),M=function(e){var t=e.navigation,n=e.setToggleHeaderContent,c=Object(a.useState)(!1),s=m()(c,2),u=s[0],b=s[1],d=Object(a.useState)(!1),h=m()(d,2),p=h[0],E=h[1],j=Object(a.useState)(!1),v=m()(j,2),x=(v[0],v[1],Object(a.useState)(!1)),w=m()(x,2),k=w[0],B=w[1],I=Object(a.useState)(!1),L=m()(I,2),D=L[0],W=L[1],R=Object(a.useState)(!1),z=m()(R,2),A=z[0],P=z[1],M=Object(a.useState)(!1),U=m()(M,2),N=U[0],F=U[1],J=Object(a.useState)(!1),K=m()(J,2),Y=K[0],q=K[1],G=Object(a.useState)(!1),Q=m()(G,2),X=Q[0],Z=Q[1],$=Object(l.a)(),_=$.height,ee=$.width;$.scale;return r.a.createElement(i.a,{style:{width:ee,height:_,backgroundColor:f,flexDirection:"column",justifyContent:"center",flex:1}},r.a.createElement(i.a,{style:{flex:1}}),r.a.createElement(i.a,{style:{flex:3,justifyContent:"center"}},r.a.createElement(S,null),r.a.createElement(O.a,{onHoverIn:function(){return E(!0)},onHoverOut:function(){return E(!1)},onPress:function(){t.navigate("Home"),n(!0)}},r.a.createElement(o.a,{style:p?V.headerBarTextHovered:V.headerBarText},"Home")),r.a.createElement(S,null),r.a.createElement(O.a,{onHoverIn:function(){return W(!0)},onHoverOut:function(){return W(!1)},onPress:function(){t.navigate("About"),n(!0)}},r.a.createElement(o.a,{style:D?V.headerBarTextHovered:V.headerBarText},"About")),r.a.createElement(S,null),r.a.createElement(O.a,{onHoverIn:function(){return b(!0)},onHoverOut:function(){return b(!1)},onPress:function(){t.navigate("Skills"),n(!0)}},r.a.createElement(o.a,{style:u?V.headerBarTextHovered:V.headerBarText},"My Skills")),r.a.createElement(S,null),r.a.createElement(O.a,{onHoverIn:function(){return B(!0)},onHoverOut:function(){return B(!1)},onPress:function(){t.navigate("Blog"),n(!0)}},r.a.createElement(o.a,{style:k?V.headerBarTextHovered:V.headerBarText},"Blog")),r.a.createElement(S,null)),r.a.createElement(i.a,{style:{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"flex-end"}},r.a.createElement(O.a,{onHoverIn:function(){return P(!0)},onHoverOut:function(){return P(!1)},onPress:function(){return g.a.openURL("https://www.linkedin.com/in/kubilay-albayrak-193892149/")},style:{marginLeft:Object(H.b)(3)}},r.a.createElement(T.a,{name:"linkedin-in",size:20,color:A?y:"gray"})),r.a.createElement(O.a,{onHoverIn:function(){return F(!0)},onHoverOut:function(){return F(!1)},onPress:function(){return g.a.openURL("https://github.com/KubilayAlbayrak")},style:{marginLeft:Object(H.b)(3)}},r.a.createElement(C.a,{name:"github",size:20,color:N?y:"gray"})),r.a.createElement(O.a,{onHoverIn:function(){return q(!0)},onHoverOut:function(){return q(!1)},onPress:function(){return g.a.openURL("https://twitter.com/kubilayalbyrk")},style:{marginLeft:Object(H.b)(3)}},r.a.createElement(C.a,{name:"twitter",size:20,color:Y?y:"gray"})),r.a.createElement(O.a,{onHoverIn:function(){return Z(!0)},onHoverOut:function(){return Z(!1)},onPress:function(){return g.a.openURL("https://instagram.com/kubilayalbyrk")},style:{marginLeft:Object(H.b)(3)}},r.a.createElement(C.a,{name:"instagram",size:20,color:X?y:"gray"}))))},U=v.a.create({text:{color:"white",fontSize:70,fontWeight:"bold"},mainScreenLogo:{position:"absolute",right:Object(H.b)(5),top:Object(H.a)(20),width:Object(H.b)(20),height:Object(H.b)(20)}}),N=n(68),F=function(e){var t=e.navigation,n=Object(l.a)(),o=n.height,c=n.width,s=(n.scale,Object(a.useState)(!0)),u=m()(s,2),b=u[0],d=u[1];return r.a.createElement(i.a,{style:{width:c,height:o,flexDirection:"row",backgroundColor:f}},c>=1045&&b?r.a.createElement(L,{navigation:t}):r.a.createElement(W,{setToggleHeaderContent:d,toggleHeaderContent:b}),b?r.a.createElement(i.a,{style:{flex:90.5,backgroundColor:f,marginTop:o>=670?Object(H.a)(10):Object(H.a)(0)}},r.a.createElement(i.a,{style:{marginTop:c>=1045?Object(H.a)(20):Object(H.a)(0),marginLeft:Object(H.b)(5)}},r.a.createElement(N.a,{style:U.text,typing:1,fixed:!0},"Hi,\nI'm Kubilay,\nReact / React-Native Developer")),r.a.createElement(i.a,{style:{marginTop:o>=1045||o>670?Object(H.a)(5):Object(H.a)(0),marginLeft:Object(H.b)(5),justifyContent:"center"}},r.a.createElement(w,{title:"C o n t a c t   M e !",onPressButton:function(){g.a.openURL("mailto:skubilayalbayrak@gmail.com")}}))):r.a.createElement(M,{navigation:t,setToggleHeaderContent:d}))},J=function(e){var t=e.navigation,n=Object(l.a)(),c=(n.height,n.width),s=(n.scale,Object(a.useState)(!0)),u=m()(s,2),b=u[0],d=u[1];return r.a.createElement(i.a,{style:{flex:1,flexDirection:"row"}},c>=1045&&b?r.a.createElement(L,{navigation:t}):r.a.createElement(W,{setToggleHeaderContent:d,toggleHeaderContent:b}),b?r.a.createElement(i.a,{style:{flex:90.5,backgroundColor:f}},r.a.createElement(i.a,{style:{marginTop:Object(H.a)(20),marginLeft:Object(H.b)(5)}}),r.a.createElement(o.a,{style:{color:j,fontWeight:"700",fontSize:Object(H.a)(1.5),maxWidth:c>=1515?"650px":.8*c,marginTop:Object(H.a)(3),marginLeft:Object(H.b)(5)}},"There is no blog post yet.I will start blogging.","\n","\n","If you want to stay tuned, you can follow my"," ",r.a.createElement(o.a,{onPress:function(){return g.a.openURL("https://medium.com/@skubilayalbayrak")},style:{color:y}},"Medium")," ","account.")):r.a.createElement(M,{navigation:t,setToggleHeaderContent:d}))},K=n(78),Y=function(e){var t=e.navigation,n=Object(l.a)(),c=n.height,s=n.width;n.scale;console.log("WIDTH",s);var u=Object(a.useState)(!0),b=m()(u,2),E=b[0],j=b[1],O=Object(a.useState)(!0),v=m()(O,2),x=v[0],w=v[1];return Object(a.useEffect)((function(){setTimeout((function(){j(!1)}),1e3)}),[]),r.a.createElement(i.a,{style:{flex:1,flexDirection:"row",backgroundColor:f}},s>=1045&&x?r.a.createElement(L,{navigation:t}):r.a.createElement(W,{setToggleHeaderContent:w,toggleHeaderContent:x}),x?r.a.createElement(i.a,{style:{flex:90.5,backgroundColor:f}},r.a.createElement(i.a,{style:{marginTop:s>=1045&&c>670?Object(H.a)(20):Object(H.a)(10),marginLeft:s>=1045?Object(H.b)(5):Object(H.b)(0)}}),r.a.createElement(i.a,{style:s>=1515?{flex:1,flexDirection:"row",marginLeft:Object(H.b)(5)}:{flex:1,flexDirection:"column",marginLeft:Object(H.b)(4)}},r.a.createElement(i.a,{style:{flex:1}},r.a.createElement(N.a,{style:{color:y,fontWeight:"bold",fontSize:s>=1045?Object(H.a)(8):Object(H.a)(4)},typing:1,fixed:!0},"Skills &\nExperience"),r.a.createElement(i.a,{style:{width:Object(H.a)(80)}},r.a.createElement(o.a,{style:{color:"white",fontWeight:"700",fontSize:Object(H.a)(1.5),maxWidth:s>=1515?"650px":.8*s,marginTop:Object(H.a)(3)}},"\n","My adventure started in 2020.I started learning Html,Css,Js then I started learning React/React-Native.I started doing clone and personal projects to improve myself in my spare time.","\n","\n","At my current job, we develop security and military applications and I work on both mobile and web sides.In these projects, I had the opportunity to focus more on redux and typescript and to improve myself.","\n","\n","My future goals are to dig deeper into algorithms, to fully implement clean code,to write great tests.","\n","\n","Visit my"," ",r.a.createElement(o.a,{onPress:function(){return g.a.openURL("https://www.linkedin.com/in/kubilay-albayrak-193892149/")},style:{color:y}},"Linkedin")," ","profile for more details or just"," ",r.a.createElement(o.a,{onPress:function(){return g.a.openURL("mailto:skubilayalbayrak@gmail.com")},style:{color:y}},"contact"," "),"me."))),r.a.createElement(i.a,{style:{flex:1,marginTop:Object(H.a)(0)}},r.a.createElement(o.a,{style:{color:"white",fontWeight:"bold"}},"React JS"),r.a.createElement(K.a,{animated:!0,indeterminate:E,indeterminateAnimationDuration:1e3,animationType:"spring",progress:.7,width:s>621?600:.8*s,height:2.5,color:y,unfilledColor:d,borderWidth:0,style:{marginBottom:Object(H.a)(2)}}),r.a.createElement(o.a,{style:{color:"white",fontWeight:"bold"}},"React Native"),r.a.createElement(K.a,{animated:!0,indeterminate:E,indeterminateAnimationDuration:1e3,animationType:"spring",progress:.9,width:s>621?600:.8*s,height:2.5,color:h,unfilledColor:d,borderWidth:0,style:{marginBottom:Object(H.a)(2)}}),r.a.createElement(o.a,{style:{color:"white",fontWeight:"bold"}},"TypeScript"),r.a.createElement(K.a,{animated:!0,indeterminate:E,indeterminateAnimationDuration:1e3,animationType:"spring",progress:.85,width:s>621?600:.8*s,height:2.5,color:p,unfilledColor:d,borderWidth:0,style:{marginBottom:Object(H.a)(2)}}),r.a.createElement(o.a,{style:{color:"white",fontWeight:"bold"}},"Redux"),r.a.createElement(K.a,{animated:!0,indeterminate:E,indeterminateAnimationDuration:1e3,animationType:"spring",progress:.8,width:s>621?600:.8*s,height:2.5,color:y,unfilledColor:d,borderWidth:0}),r.a.createElement(i.a,{style:{marginTop:Object(H.a)(4),marginLeft:Object(H.b)(0)}},r.a.createElement(P,null))))):r.a.createElement(M,{navigation:t,setToggleHeaderContent:w}))},q=function(e){var t=e.navigation,n=Object(l.a)(),c=(n.height,n.width),s=(n.scale,Object(a.useState)(!0)),u=m()(s,2),g=u[0],b=u[1];return r.a.createElement(i.a,{style:{flex:1,flexDirection:"row",backgroundColor:f}},c>=1045&&g?r.a.createElement(L,{navigation:t}):r.a.createElement(W,{setToggleHeaderContent:b,toggleHeaderContent:g}),g?r.a.createElement(i.a,{style:{flex:90.5,backgroundColor:f,marginTop:c>=1045?Object(H.a)(0):Object(H.a)(10)}},r.a.createElement(i.a,{style:{marginTop:c>=1045?Object(H.a)(20):Object(H.a)(0),marginLeft:c>=1045?Object(H.b)(5):Object(H.b)(0)}}),r.a.createElement(i.a,{style:{flex:1,flexDirection:"row",marginLeft:Object(H.b)(5)}},r.a.createElement(i.a,{style:{flex:1}},r.a.createElement(N.a,{style:{color:y,fontWeight:"bold",fontSize:c>=1045?Object(H.a)(8):Object(H.a)(5)},typing:1,fixed:!0},"My, Myself & I"),r.a.createElement(i.a,{style:{maxWidth:2*c/3}},r.a.createElement(o.a,{style:{color:"white",fontWeight:"700",fontSize:Object(H.a)(2)}},"\n","I\u2019m a Mobile & Front-End Developer located in Izmir,Turkey.","\n","\n","\n","Actually, I graduated from Y\u0131ld\u0131z Technical University, Electrical Engineering.After working in electrical engineering for 2 years, my passion for programming has not left me so i started learning React/React-Native and started making personal projects.When I felt competent enough,I started to apply for job postings and I started working as a software engineer in 2021. In my current job, I work on web and mobile projects.","\n","\n","\n","I\u2019m eager to learn new technologies, self-motivated, problem solving and result oriented team player.","\n","\n","Interested in the entire frontend / mobile spectrum and working on ambitious projects with positive people."))))):r.a.createElement(M,{navigation:t,setToggleHeaderContent:b}))},G=Object(s.a)(),Q=function(){return r.a.createElement(G.Navigator,{initialRouteName:"MainScreen",screenOptions:{headerShown:!1}},r.a.createElement(G.Screen,{name:"Home",component:F}),r.a.createElement(G.Screen,{name:"About",component:q}),r.a.createElement(G.Screen,{name:"Skills",component:Y}),r.a.createElement(G.Screen,{name:"Blog",component:J}))};function X(){var e=Object(l.a)(),t=e.height,n=e.width;e.scale;return r.a.createElement(i.a,{style:{height:t,width:n}},r.a.createElement(c.a,{linking:{prefixes:["https://localhost:19006"],config:{screens:{Root:{path:"/",initialRouteName:"/",screens:{MainScreen:"/",AboutMeScreen:"/About",SkillsScreen:"/Skills",BlogScreen:"/Blog"}}}}},fallback:r.a.createElement(o.a,null,"Loading...")},r.a.createElement(Q,null)))}},164:function(e,t,n){e.exports=n(203)},184:function(e,t,n){e.exports=n.p+"static/media/kLogo.d881410b.png"}},[[164,1,2]]]);
//# sourceMappingURL=app.5c979a3f.chunk.js.map