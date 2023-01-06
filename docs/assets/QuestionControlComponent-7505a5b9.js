import{_ as q,u as C,A as N,Q as g,a as R,s as I,i as y,d as s,o as c,c as _,b as d,t as v,n as x,F as Q,j,f as M,r as A,w as B,v as L,e as k,p as O,h as U}from"./index-37c8787a.js";const D={class:"but-text"},V={class:"but-text"},E={class:"but-text"},J={__name:"AnswerComponent",props:["questionId","answerId"],setup(u){const e=u,t=C(N),i=C(g),p=R(),{viewMode:f}=I(p),m=y(t.where("id",e.answerId).first());y(i.where("id",e.questionId).first());function b(){t.save({id:e.answerId,isSelected:!t.find(e.answerId).isSelected}),t.find(e.answerId).isSelected&&t.find(e.answerId).correct||!t.find(e.answerId).isSelected&&!t.find(e.answerId).correct?i.save({id:e.questionId,score:Number(i.find(e.questionId).score)+1}):i.save({id:e.questionId,score:Number(i.find(e.questionId).score)-1})}return(S,l)=>s(i).find(e.questionId).showResults?s(f)?(c(),_("button",{key:2,class:x(["button",{correct:s(t).find(e.answerId).correct,light:!s(t).find(e.answerId).correct}]),onClick:l[2]||(l[2]=w=>b()),disabled:""},[d("span",E,v(m.value.text),1)],2)):(c(),_("button",{key:1,class:x(["button",{light:!s(t).find(e.answerId).isSelected,correct:s(t).find(e.answerId).correct&&s(t).find(e.answerId).isSelected,incorrect:s(t).find(e.answerId).correct&&!s(t).find(e.answerId).isSelected||!s(t).find(e.answerId).correct&&s(t).find(e.answerId).isSelected}]),onClick:l[1]||(l[1]=w=>b()),disabled:""},[d("span",V,v(m.value.text),1)],2)):(c(),_("button",{key:0,class:x(["button",{selected:s(t).find(e.answerId).isSelected,light:!s(t).find(e.answerId).isSelected}]),onClick:l[0]||(l[0]=w=>b())},[d("span",D,v(m.value.text),1)],2))}},F=q(J,[["__scopeId","data-v-230ebf54"]]);const T={class:"question"},z={class:"title"},P={class:"answers"},G={__name:"QuestionComponent",props:["question"],setup(u){const e=u;return(t,i)=>(c(),_("div",T,[d("div",z,v(e.question.number)+". "+v(e.question.question),1),d("div",P,[(c(!0),_(Q,null,j(e.question.answers,p=>(c(),M(F,{questionId:e.question.id,answerId:p.id,key:e.number+"-"+p.text},null,8,["questionId","answerId"]))),128))])]))}},ue=q(G,[["__scopeId","data-v-dc97e874"]]);const h=u=>(O("data-v-a95ddb0d"),u=u(),U(),u),H={class:"question-control"},K={class:"controls-container"},W=h(()=>d("span",{class:"but-text"},"Previous",-1)),X=[W],Y={class:"slider-container"},Z=["max","disabled"],ee={class:"slider-index"},te=h(()=>d("span",{class:"but-text"},"Next",-1)),se=[te],ne={key:0,class:"data-container"},oe=h(()=>d("span",{class:"but-text"},"Results",-1)),de=[oe],ie=h(()=>d("span",{class:"but-text"},"Download stats",-1)),re=[ie],ae={__name:"QuestionControlComponent",setup(u){const e=C(g),t=R(),{index:i}=I(t),{viewMode:p}=I(t),{questions:f}=I(t);e.all().length===0&&A.push("/");function m(){const o=f.value[i.value].id;e.save({id:o,showResults:!0}),p.value||(e.find(o).score===e.find(o).maxScore?e.save({id:o,numCorrect:Number(e.find(o).numCorrect)+1}):e.save({id:o,numIncorrect:Number(e.find(o).numIncorrect)+1}))}function b(){const o=f.value[i.value].id;e.find(o).showResults?t.next():m()}function S(){t.previous()}function l(){let o=JSON.parse(JSON.stringify(e.all()));o.forEach(function(n,r){o[r]={number:n.number,numCorrect:n.numCorrect,numIncorrect:n.numIncorrect}}),o=o.sort((n,r)=>n.number-r.number),w(JSON.stringify(o,null,2),"text/json","stats.json")}function w(o,n,r){var $=new Blob([o],{type:n}),a=document.createElement("a");a.download=r,a.href=URL.createObjectURL($),a.dataset.downloadurl=[n,a.download,a.href].join(":"),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(function(){URL.revokeObjectURL(a.href)},1500)}return(o,n)=>(c(),_("div",H,[d("div",K,[d("button",{class:"button",onClick:n[0]||(n[0]=r=>S())},X),d("div",Y,[B(d("input",{class:"slider",type:"range",min:"0",max:s(f).length-1,step:"1","onUpdate:modelValue":n[1]||(n[1]=r=>s(t).index=r),disabled:!s(t).viewMode},null,8,Z),[[L,s(t).index]]),d("div",ee,v(1+Number(s(i)))+"/"+v(s(f).length),1)]),d("button",{class:"button",onClick:n[2]||(n[2]=r=>b())},se)]),s(p)?k("",!0):(c(),_("div",ne,[s(e).find(s(f)[s(i)].id).showResults?k("",!0):(c(),_("button",{key:0,class:"button data",onClick:n[3]||(n[3]=r=>m())},de)),d("button",{class:"button data",onClick:n[4]||(n[4]=r=>l())},re)]))]))}},le=q(ae,[["__scopeId","data-v-a95ddb0d"]]);export{ue as Q,le as a};
