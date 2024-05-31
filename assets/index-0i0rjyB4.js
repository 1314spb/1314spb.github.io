import{p as x,m as L,a as P,g as $,u as W,b as z,c as s,d as k,e as w,f as T,h as V,o as u,i as g,w as c,j as t,k as v,F as h,l as q,r as b,n as C,t as p,_ as Q}from"./index-D_3d3duE.js";const Y=x({fluid:{type:Boolean,default:!1},...L(),...P()},"VContainer"),S=$()({name:"VContainer",props:Y(),setup(e,o){let{slots:n}=o;const{rtlClasses:i}=W();return z(()=>s(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},i.value,e.class],style:e.style},n)),{}}}),D=k.reduce((e,o)=>(e[o]={type:[Boolean,String,Number],default:!1},e),{}),B=k.reduce((e,o)=>{const n="offset"+w(o);return e[n]={type:[String,Number],default:null},e},{}),H=k.reduce((e,o)=>{const n="order"+w(o);return e[n]={type:[String,Number],default:null},e},{}),N={col:Object.keys(D),offset:Object.keys(B),order:Object.keys(H)};function X(e,o,n){let i=e;if(!(n==null||n===!1)){if(o){const a=o.replace(e,"");i+=`-${a}`}return e==="col"&&(i="v-"+i),e==="col"&&(n===""||n===!0)||(i+=`-${n}`),i.toLowerCase()}}const Z=["auto","start","end","center","baseline","stretch"],ee=x({cols:{type:[Boolean,String,Number],default:!1},...D,offset:{type:[String,Number],default:null},...B,order:{type:[String,Number],default:null},...H,alignSelf:{type:String,default:null,validator:e=>Z.includes(e)},...L(),...P()},"VCol"),f=$()({name:"VCol",props:ee(),setup(e,o){let{slots:n}=o;const i=T(()=>{const a=[];let l;for(l in N)N[l].forEach(m=>{const _=e[m],A=X(l,m,_);A&&a.push(A)});const r=a.some(m=>m.startsWith("v-col-"));return a.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return V(e.tag,{class:[i.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),I=["start","end","center"],G=["space-between","space-around","space-evenly"];function j(e,o){return k.reduce((n,i)=>{const a=e+w(i);return n[a]=o(),n},{})}const te=[...I,"baseline","stretch"],R=e=>te.includes(e),U=j("align",()=>({type:String,default:null,validator:R})),ne=[...I,...G],F=e=>ne.includes(e),K=j("justify",()=>({type:String,default:null,validator:F})),ae=[...I,...G,"stretch"],J=e=>ae.includes(e),O=j("alignContent",()=>({type:String,default:null,validator:J})),M={align:Object.keys(U),justify:Object.keys(K),alignContent:Object.keys(O)},se={align:"align",justify:"justify",alignContent:"align-content"};function oe(e,o,n){let i=se[e];if(n!=null){if(o){const a=o.replace(e,"");i+=`-${a}`}return i+=`-${n}`,i.toLowerCase()}}const ie=x({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:R},...U,justify:{type:String,default:null,validator:F},...K,alignContent:{type:String,default:null,validator:J},...O,...L(),...P()},"VRow"),d=$()({name:"VRow",props:ie(),setup(e,o){let{slots:n}=o;const i=T(()=>{const a=[];let l;for(l in M)M[l].forEach(r=>{const m=e[r],_=oe(l,r,m);_&&a.push(_)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return V(e.tag,{class:["v-row",i.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),le="/assets/linkedin-CYid3wTX.png",re="/assets/github-DKjN4UJL.png",ce="/assets/programming-BYuzbK61.png",de="/assets/frontend-DQr0dw8W.png",ue="/assets/backend-g5NjGqc-.png",ge="/assets/database-DJqdZSPG.png",me="/assets/mobile-DUqO4vpW.png",pe="/assets/ml-D1BMe_m6.png",he="/assets/development-BsQ2Hq4E.png",_e="/assets/os-DRXpVULS.png",fe="/assets/methodologies-DYPGA31r.png";let y={name:"Sin Chung Ho",description:["I am a year 4 Information Engineering student at The Chinese University of Hong Kong with an academic background in programming, data analytics, security, and cloud development, including building scalable systems, and seeking valuable opportunities related to my interest and professional.","I am an innovative and collaborative individual who keeps goals and tasks organized to maintain productivity. A broad spectrum of software skills, ranging from design and development to diagnosing and resolving root causes of issues, would be invaluable in a work environment. I believe that the abilities I have acquired from my academic and professional experiences define me, and I am eager to apply and refine them in any opportunity that comes my way."],links:{linkedin:"https://www.linkedin.com/in/sinchungho/",github:"https://github.com/1314spb",resume:"adad"},education:[{name:"The Chinese University of Hong Kong",place:"Hong Kong",date:"September 2021 - Present",degree:"Bachelor of Engineering in Information Engineering",skills:["Data Structure","Algorithm","C","Python","HTML","CSS","Javascript","C#","PHP","Node.js","Express.js","Nginx","Flask","Vue.js","React.js","Database","SQL","React Native","Docker","Linux","Git","Github","LangChain","AWS","AWS auto scaling","Google Cloud Platform"]}],experiences:[{name:"Fortune Information Technology Ltd",position:"Software Programmer (Part time)",date:"Nov 2023 - May 2024",description:"During my tenure in full-stack development, I collaborated on a project with two public hospitals. My role focused on ensuring system quality and security through system development tasks. Leveraging my expertise, I contributed to creating robust, secure, and user-friendly applications, ensuring seamless operations critical to healthcare services.",skills:["Linux","Node.js","Vue.js","MariaDB","Python","HTML","CSS","Javascript"]},{name:"The Chinese University of Hong Kong - AIoT Lab",position:"Junior Research Assistant (Part time) (Student Helper)",date:"September 2021 - Present",description:"I provided technical support for healthcare research, focusing on system development, data processing and analysis, and embedded AI. Additionally, I engaged in a Smart Mobile Health System project aimed at addressing the global health issue of Alzheimer's Disease, collaborating closely with PhD students to develop innovative solutions.",skills:["Linux","Python","Linux","Shell","Jumpserver"]},{name:"MeriSKILL",position:"Data Analyst (Internship)",date:"November 2023 - December 2023",description:"I utilized statistical techniques and Machine Learning modules such as Sklearn to uncover insights and trends from data related to HR attrition, diabetes prediction, and sales data analysis. By analyzing and visualizing this data, I provided actionable recommendations that informed decision-making processes and helped drive strategic initiatives.",skills:["Python","PowerBI","Scikit-Learn","Numpy","Pandas","Seaborn","PyTorch","Pipeline"]},{name:"Alcodes International Limited",position:"Project Executive (Internship)",date:"July 2023 - August 2023",description:"I operated and managed an innovative NFT platform with integrated social media features, ensuring it met the evolving needs of clients through active engagement and liaison. Additionally, I was responsible for AI data collection from the internet to support and enhance business operations.",skills:["Microsoft suite","AI data collection","NFT platform","Social media features","Business operations"]},{name:"The Chinese University of Hong Kong",position:"Education Mentor (Student Helper)",date:"July 2022 - November 2022",description:"I supported practical projects where students transformed their STEM ideas into prototypes and products, providing hands-on guidance in technical coding and engineering. Through this, I shared my knowledge and expertise, helping students bring their innovative concepts to life.",skills:["Linux","Python","App Inventor","Mentorship"]}],skills:[{title:"Programming Languages",data:["C","C++","Python","C#","Java","Go","PHP","Javascript"],icon:ce,hue:0},{title:"Front-End Technologies",data:["HTML","CSS","Vue.js","React.js"],icon:de,hue:40},{title:"Back-End Technologies",data:["Node.js","Express.js","Flask","Nginx"],icon:ue,hue:80},{title:"Databases",data:["SQL","MySQL","MariaDB","MongoDB","Redis"],icon:ge,hue:120},{title:"Mobile Development",data:["Flutter","React Native"],icon:me,hue:160},{title:"Data Analysis and Machine Learning",data:["PowerBI","Scikit-Learn","Numpy","Pandas","Seaborn","Pytorch","Pipeline"],icon:pe,hue:200},{title:"Development Tools",data:["Git","Docker","LangChain","Shell","AWS","AWS auto scaling","Google Cloud Platform"],icon:he,hue:240},{title:"Operating Systems",data:["Kali Linux","Ubuntu Linux","Amazon Linux","MacOs","Windows"],icon:_e,hue:280},{title:"Development Methodologies",data:["Agile","Scrum","Waterfall"],icon:fe,hue:320}]};const ye={class:"wrapper"},ve=["href"],be=t("div",{class:"button"},[t("div",{class:"icon"},[t("img",{src:le,alt:"LinkedIn-Icon"})]),t("span",{class:"button_text"},"LinkedIn")],-1),ke=[be],Se=["href"],Ce=t("div",{class:"button"},[t("div",{class:"icon"},[t("img",{src:re,alt:"Github-Icon"})]),t("span",{class:"button_text"},"Github")],-1),xe=[Ce],Le=t("div",{class:"copyright"},[t("span",null,"© 2024 Copyright: Sin Chung Ho"),t("br"),t("span",null,"Built by Vue.js")],-1),Pe={__name:"Contact",props:{name:{type:String,default:"Contact"}},setup(e){const o=y.links;return console.log(o),(n,i)=>(u(),g(h,null,[s(d,{id:"contact"}),s(d,{class:"padding-navbar"}),s(S,{class:"contact"},{default:c(()=>[s(d,null,{default:c(()=>[t("div",ye,[t("a",{href:v(o).linkedin,target:"_blank",class:"link"},ke,8,ve),t("a",{href:v(o).github,target:"_blank",class:"link"},xe,8,Se)])]),_:1}),s(d,null,{default:c(()=>[Le]),_:1})]),_:1})],64))}},$e=t("div",{class:"text-center","data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"},[t("span",{class:"title text-center"},"Skills"),t("hr",{class:"title_line"})],-1),we={class:"icon_container"},Ie=["src"],je={class:"skill_category"},Ae=t("hr",{class:"centered-hr"},null,-1),Ne={class:"title3"},Me={__name:"Skills",props:{name:{type:String,default:"Skills"}},setup(e){const o={title:"Skills",data:y.skills};return q(()=>{document.querySelectorAll(".card").forEach(i=>{i.addEventListener("mousemove",function(a){let l=i.getBoundingClientRect(),r=a.clientX-l.left-200,m=a.clientY-l.top-200;i.style.setProperty("--x",r+"px"),i.style.setProperty("--y",m+"px")})})}),(n,i)=>(u(),g(h,null,[s(d,{id:"skills"}),s(d,{class:"padding-navbar"}),s(S,null,{default:c(()=>[s(d,null,{default:c(()=>[s(f,{class:"title"},{default:c(()=>[$e]),_:1})]),_:1}),s(d,{class:"flex_container"},{default:c(()=>[(u(!0),g(h,null,b(o.data,(a,l)=>(u(),g("div",{class:"text-center flex_item","data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30",style:C({"transition-delay":l/8+"s"}),"data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"},[t("div",{class:"card",style:C(`--clr:hsl(${a.hue}, 100%, 50%)`)},[t("div",we,[t("img",{src:a.icon,alt:"Skill-Icon"},null,8,Ie)]),t("div",je,p(a.title),1),Ae,t("span",Ne,p(a.data.join(", ")),1)],4)],4))),256))]),_:1})]),_:1})],64))}},Ee={name:"Timeline",props:{data:{type:Object}}},Te={class:"timelineBox_container"},Ve={class:"title1","data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"},De={class:"info_box"},Be={class:"title2"},He={class:"title3"},Ge={class:"date"},Re={class:"description"},Ue={class:"span_box"};function Fe(e,o,n,i,a,l){return u(),g("div",Te,[t("p",Ve,p(n.data.title),1),(u(!0),g(h,null,b(n.data.data,(r,m)=>(u(),g("ul",{class:"timeline",key:r.name,style:C({"transition-delay":m/8+"s"}),"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"},[t("li",null,[t("div",De,[t("div",Be,p(r.name)+", "+p(r.place),1),t("div",He,p(r.degree||r.position),1),t("div",Ge,p(r.date),1),t("div",Re,p(r.description),1),t("div",Ue,[(u(!0),g(h,null,b(r.skills,_=>(u(),g("span",{class:"badge",key:_},p(_),1))),128))])])])],4))),128))])}const E=Q(Ee,[["render",Fe]]),Ke=t("span",{"data-aos":"fade"},"About me",-1),Je=t("hr",{class:"title_line"},null,-1),Oe={id:"education_container"},We={id:"edu_timeline",class:"edu_display_box"},ze={class:"working"},qe={id:"edu_timeline",class:"edu_display_box"},Qe={__name:"About",props:{name:{type:String,default:"About"}},setup(e){const o={title:"Education",data:y.education},n={title:"Working Experience",data:y.experiences};return(i,a)=>(u(),g(h,null,[s(d,{id:"about"}),s(d,{class:"padding-navbar"}),s(S,null,{default:c(()=>[s(d,null,{default:c(()=>[s(f,{class:"title"},{default:c(()=>[Ke,Je]),_:1})]),_:1}),s(d,{class:"mobile-view"},{default:c(()=>[s(f,{cols:"12",md:"6"},{default:c(()=>[t("div",Oe,[t("div",We,[s(E,{data:o})])])]),_:1}),s(f,{cols:"12",md:"6",class:"experience-container"},{default:c(()=>[t("div",ze,[t("div",qe,[s(E,{data:n})])])]),_:1})]),_:1})]),_:1})],64))}},Ye="/assets/myphoto-ThoWkq9z.png",Xe={class:"image-container"},Ze=["src"],et=t("h1",null,"Introduction",-1),tt={class:"introduction"},nt=t("br",null,null,-1),at={__name:"Home",setup(e){const o=Ye;return(n,i)=>(u(),g(h,null,[s(d,{id:"home"}),s(d,{class:"padding-navbar"}),s(S,null,{default:c(()=>[s(d,{class:"mobile-view"},{default:c(()=>[s(f,{cols:"12",md:"6"},{default:c(()=>[t("div",Xe,[t("img",{src:v(o),alt:"MyPhoto"},null,8,Ze)])]),_:1}),s(f,{cols:"12",md:"6",class:"introduction-container"},{default:c(()=>[et,(u(!0),g(h,null,b(v(y).description,(a,l)=>(u(),g("div",{key:l},[t("p",tt,p(a),1),nt]))),128))]),_:1})]),_:1})]),_:1})],64))}},ot={__name:"index",setup(e){return(o,n)=>{const i=at,a=Qe,l=Me,r=Pe;return u(),g(h,null,[s(i),s(a),s(l),s(r)],64)}}};export{ot as default};
