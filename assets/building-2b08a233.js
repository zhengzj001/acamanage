import{aj as m,a7 as _,f as w,t as C,H as k,z as p,x as i,y as a,I as E,af as s,ae as F,ag as I,ah as y,ab as u,ai as P,ac as v,ad as $,aa as z}from"./index-7cad0716.js";import{c as L}from"./cloneDeep-76dc5467.js";const U=e=>m.request({url:"api/building/page",method:"post",data:e}),W=e=>m.request({url:"api/building/delete",params:e}),q=e=>m.request({url:"api/building/add",method:"post",data:e}),A=e=>m.request({url:"api/building/edit",method:"post",data:e}),B=w({data(){return{buildings:[],building:{colums:[],current:0,size:0},dialogFormVisible:!1,building:{chager:0,id:0,name:"",schoolId:0},formLabelWidth:80}},mounted(){this.getbuildingsPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.building=L(e)},getbuildingsPage(e){U({current:e,size:10}).then(o=>{console.log(o);const b=o.data.page;this.buildings=b.records,this.page=b}).catch(o=>{console.log(o)})},currentchange(e){this.getbuildingsPage(e),this.page.current=e},del(e){console.log(e),W({id:e}).then(o=>{if(o.success)this.getbuildingsPage(this.page.current),this.page.total%this.page.size==1?this.getAdCatesPage(this.page.current-1):this.getAdCatesPage(this.page.current);else return console.log(o.msg),!1}).catch(o=>{})},toAdd(){this.dialogFormVisible=!0,this.building={chager:0,id:0,name:"",schoolId:0}},save(){const e=this.building;e.id==0?q(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getbuildingsPage(this.page.current),s(l.msg);else return s(l.msg),!1}).catch(l=>{s("网络错误联系管理员")}):A(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getbuildingsPage(this.page.current),s(l.msg);else return s(l.msg),!1}).catch(l=>{s("网络错误联系管理员")})}}}),N={class:"buildings"},T={class:"building-tools"},D={class:"dialog-footer"};function S(e,l,o,b,j,H){const n=F,d=P,h=I,r=v,g=$,c=z,f=y;return C(),k(E,null,[p("div",N,[p("div",T,[i(n,{type:"warning",onClick:e.toAdd},{default:a(()=>[u("添加")]),_:1},8,["onClick"])]),i(h,{data:e.buildings,style:{width:"100%"}},{default:a(()=>[i(d,{fixed:"",prop:"id",label:"序号",width:"50"}),i(d,{prop:"chager",label:"楼管"}),i(d,{prop:"id",label:"宿舍楼编号"}),i(d,{prop:"name",label:"宿舍楼名称"}),i(d,{prop:"schoolId",label:"SchoolId"}),i(d,{fixed:"right",label:"操作",width:"120"},{default:a(t=>[i(n,{link:"",type:"primary",size:"small",onClick:V=>e.toEdit(t.row)},{default:a(()=>[u("更新")]),_:2},1032,["onClick"]),i(n,{link:"",type:"primary",size:"small",onClick:V=>e.del(t.row.id)},{default:a(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),i(f,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[5]||(l[5]=t=>e.dialogFormVisible=t),title:"楼栋编辑"},{footer:a(()=>[p("span",D,[i(n,{onClick:l[4]||(l[4]=t=>e.dialogFormVisible=!1)},{default:a(()=>[u("Cancel")]),_:1}),i(n,{type:"primary",onClick:e.save},{default:a(()=>[u("保存")]),_:1},8,["onClick"])])]),default:a(()=>[i(c,{model:e.building},{default:a(()=>[i(g,{label:"SchoolId","label-width":e.formLabelWidth},{default:a(()=>[i(r,{modelValue:e.building.schoolId,"onUpdate:modelValue":l[0]||(l[0]=t=>e.building.schoolId=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),i(g,{label:"楼管","label-width":e.formLabelWidth},{default:a(()=>[i(r,{modelValue:e.building.chager,"onUpdate:modelValue":l[1]||(l[1]=t=>e.building.chager=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),i(g,{label:"宿舍楼编号","label-width":e.formLabelWidth},{default:a(()=>[i(r,{modelValue:e.building.id,"onUpdate:modelValue":l[2]||(l[2]=t=>e.building.id=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),i(g,{label:"宿舍楼名称","label-width":e.formLabelWidth},{default:a(()=>[i(r,{modelValue:e.building.name,"onUpdate:modelValue":l[3]||(l[3]=t=>e.building.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const J=_(B,[["render",S]]);export{J as default};
