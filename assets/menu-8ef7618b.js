import{aj as r,a7 as k,f as y,t as L,H as U,z as b,x as l,y as o,I as W,af as m,ae as v,ag as E,ah as F,ab as s,ai as z,ac as A,ad as $,aa as P}from"./index-7cad0716.js";import{E as T}from"./el-pagination-ebbc9937.js";import{c as I}from"./cloneDeep-76dc5467.js";const q=e=>r.request({url:"/api/menu-rule/add",method:"post",data:e}),B=e=>r.request({url:`/api/menu-rule/del/${e}`,method:"get"}),D=e=>r.request({url:"/api/menu-rule/edit",method:"post",data:e}),N=e=>r.request({url:"/api/menu-rule/page",method:"post",data:e}),j=y({data(){return{adCates:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,adCate:{component:"",createTime:"",extend:"",icon:"",id:0,keepalive:0,menuType:"",name:"",path:"",pid:0,remark:"",status:"",title:"",type:"",updateTime:"",url:"",weigh:0},formLabelWidth:80}},mounted(){this.getAdCatesPage(1)},methods:{getAdCatesPage(e){N({columns:[],current:e,size:2}).then(u=>{console.log(u);const f=u.data.page;this.adCates=f.records,this.page=f}).catch(u=>{console.log(u)})},save(){const e=this.adCate;e.id===0?q(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getAdCatesPage(this.page.current),m(a.msg);else return m(a.msg),!1}).catch(()=>{m("网络错误联系管理员")}):D(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getAdCatesPage(this.page.current),m(a.msg);else return m(a.msg),!1}).catch(()=>{m("网络错误联系管理员")})},toEdit(e){console.log(e),this.dialogFormVisible=!0,this.adCate=I(e)},currentChange(e){this.getAdCatesPage(e),this.page.current=e},del(e){console.log(e),B({id:e}).then(u=>{if(u.success)this.getAdCatesPage(this.page.current);else return console.log(u.msg),!1}).catch(()=>{})},toAdd(){this.dialogFormVisible=!0}}}),H={class:"adCates"},M={class:"adcate-tools"},G={class:"dialog-footer"};function J(e,a,u,f,K,O){const p=v,d=z,h=E,g=T,i=A,n=$,C=P,V=F;return L(),U(W,null,[b("div",H,[b("div",M,[l(p,{type:"warning",onClick:e.toAdd},{default:o(()=>[s("添加")]),_:1},8,["onClick"])]),l(h,{data:e.adCates,style:{width:"100%"}},{default:o(()=>[l(d,{fixed:"",prop:"id",label:"ID",width:""}),l(d,{prop:"pid",label:"pid"}),l(d,{prop:"type",label:"type",width:""}),l(d,{prop:"title",label:"title",width:""}),l(d,{prop:"name",label:"name",width:""}),l(d,{prop:"path",label:"path",width:""}),l(d,{prop:"icon",label:"icon",width:""}),l(d,{prop:"menu_type",label:"menu_type",width:""}),l(d,{prop:"url",label:"url",width:""}),l(d,{prop:"component",label:"component",width:""}),l(d,{prop:"keepalive",label:"keepalive",width:""}),l(d,{prop:"extend",label:"extend",width:""}),l(d,{prop:"remark",label:"remark",width:""}),l(d,{prop:"weight",label:"weight",width:""}),l(d,{prop:"status",label:"status",width:""}),l(d,{prop:"update_time",label:"update_time",width:""}),l(d,{prop:"create_time",label:"create_time",width:""}),l(d,{fixed:"right",label:"right",width:"120"},{default:o(t=>[l(p,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(t.row)},{default:o(()=>[s("更新")]),_:2},1032,["onClick"]),l(p,{link:"",type:"primary",size:"small",onClick:w=>e.del(t.row.id)},{default:o(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(g,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentChange},null,8,["page-size","total","onCurrentChange"])]),l(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[18]||(a[18]=t=>e.dialogFormVisible=t),title:"导航栏信息编辑"},{footer:o(()=>[b("span",G,[l(p,{onClick:a[17]||(a[17]=t=>e.dialogFormVisible=!1)},{default:o(()=>[s("Cancel")]),_:1}),l(p,{type:"primary",onClick:e.save},{default:o(()=>[s("保存")]),_:1},8,["onClick"])])]),default:o(()=>[l(C,{model:e.adCate},{default:o(()=>[l(n,{label:"ID","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.id,"onUpdate:modelValue":a[0]||(a[0]=t=>e.adCate.id=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"pid","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.pid,"onUpdate:modelValue":a[1]||(a[1]=t=>e.adCate.pid=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"type","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.type,"onUpdate:modelValue":a[2]||(a[2]=t=>e.adCate.type=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"title","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.title,"onUpdate:modelValue":a[3]||(a[3]=t=>e.adCate.title=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"name","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.name,"onUpdate:modelValue":a[4]||(a[4]=t=>e.adCate.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"path","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.path,"onUpdate:modelValue":a[5]||(a[5]=t=>e.adCate.path=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"icon","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.icon,"onUpdate:modelValue":a[6]||(a[6]=t=>e.adCate.icon=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"menu_type","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.menu_type,"onUpdate:modelValue":a[7]||(a[7]=t=>e.adCate.menu_type=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"url","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.url,"onUpdate:modelValue":a[8]||(a[8]=t=>e.adCate.url=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"component","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.component,"onUpdate:modelValue":a[9]||(a[9]=t=>e.adCate.component=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"keepalive","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.keepalive,"onUpdate:modelValue":a[10]||(a[10]=t=>e.adCate.keepalive=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"extend","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.extend,"onUpdate:modelValue":a[11]||(a[11]=t=>e.adCate.extend=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"remark","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.remark,"onUpdate:modelValue":a[12]||(a[12]=t=>e.adCate.remark=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"weight","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.weight,"onUpdate:modelValue":a[13]||(a[13]=t=>e.adCate.weight=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"status","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.status,"onUpdate:modelValue":a[14]||(a[14]=t=>e.adCate.status=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"update_time","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.update_time,"onUpdate:modelValue":a[15]||(a[15]=t=>e.adCate.update_time=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(n,{label:"create_time","label-width":e.formLabelWidth},{default:o(()=>[l(i,{modelValue:e.adCate.create_time,"onUpdate:modelValue":a[16]||(a[16]=t=>e.adCate.create_time=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const X=k(j,[["render",J]]);export{X as default};
