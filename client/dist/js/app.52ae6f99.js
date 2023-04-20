(function(){"use strict";var a={5757:function(a,t,e){var o=e(9242),r=e(3396);const i={class:"navbar navbar-light bg-light"};function n(a,t,e,o,n,l){const s=(0,r.up)("router-link"),d=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("nav",i,[(0,r.Wm)(s,{to:"/Board",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(s,{to:"/ListaParticipante",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Participantes")])),_:1}),(0,r.Wm)(s,{to:"/ListaBoard",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Boards")])),_:1})]),(0,r.Wm)(d)])}var l={name:"App"},s=e(89);const d=(0,s.Z)(l,[["render",n]]);var c=d,u=e(3494),m=e(7749),p=e(8539),h=e(70),g=e(6423),b=e(2483),f=e(7139);const v={class:"col-2",style:{"margin-bottom":"30px"}},y=(0,r._)("option",{selected:""},null,-1),w=["value"],_={id:"divBoard"},C=["onDrop"],P={class:"card-body board"},k={class:"card-title secondaryColor"},B=["onDblclick","onContextmenu","onDragstart"],x={id:"teste"},E=(0,r._)("br",null,null,-1);function D(a,t,e,i,n,l){const s=(0,r.up)("font-awesome-icon"),d=(0,r.up)("h8"),c=(0,r.up)("h9"),u=(0,r.up)("MenuCard"),m=(0,r.up)("ModalCard");return(0,r.wg)(),(0,r.iD)("div",{align:"center",onClick:t[4]||(t[4]=a=>l.fecharMenu())},[(0,r._)("div",v,[(0,r.wy)((0,r._)("select",{class:"form-select","onUpdate:modelValue":t[0]||(t[0]=a=>n.boardSelecionado=a),onChange:t[1]||(t[1]=a=>l.carregarColunas())},[y,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.boards,(a=>((0,r.wg)(),(0,r.iD)("option",{value:a.id,key:a.id},(0,f.zw)(a.nome),9,w)))),128))],544),[[o.bM,n.boardSelecionado]])]),n.primeiraColunaId?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn btn-secondary insere primaryColorBtn",onClick:t[2]||(t[2]=a=>l.abrirModal(0,n.primeiraColunaId))},[(0,r.Uk)("Inserir Task "),(0,r.Wm)(s,{icon:"fa-solid fa-plus"})])):(0,r.kq)("",!0),(0,r._)("div",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.colunas,(a=>((0,r.wg)(),(0,r.iD)("div",{class:"card colunm drop-zone",onDrop:t=>l.soltou(a.id),onDragover:t[3]||(t[3]=(0,o.iM)((()=>{}),["prevent"])),key:a.id},[(0,r._)("div",P,[(0,r._)("h5",k,(0,f.zw)(a.nome),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.cards,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"card cardTask",onDblclick:a=>l.edit(t.id),style:(0,f.j5)([l.style(a),{"margin-bottom":"20px"}]),onContextmenu:(0,o.iM)((a=>l.abrirMenu(a,t)),["prevent"]),key:t.id,draggable:"true",onDragstart:e=>l.moveu(t.id,a.id)},[(0,r._)("div",x,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,f.zw)(t.titulo),1)])),_:2},1024),E,t.autorId>0?((0,r.wg)(),(0,r.j4)(c,{key:0},{default:(0,r.w5)((()=>[(0,r.Uk)((0,f.zw)("Autor: "+t.nomeAutor),1)])),_:2},1024)):(0,r.kq)("",!0)])],44,B)))),128))])],40,C)))),128))]),(0,r.Wm)(u,{ref:"menu"},null,512),(0,r.Wm)(m,{ref:"modal",onRefresh:l.carregarColunas},null,8,["onRefresh"])])}const $=(0,r._)("button",{id:"abrir","data-bs-toggle":"modal","data-bs-target":"#modal",hidden:""},null,-1),M={class:"modal fade",id:"modal",tabindex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true"},S={class:"modal-dialog"},Z={class:"modal-content"},I=(0,r._)("div",{class:"modal-header"},[(0,r._)("h5",{class:"modal-title",id:"modalLabel"},"Criação de Card"),(0,r._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),q={class:"modal-body",style:{"padding-top":"40px"}},V={class:"form-group col-10"},L={class:"col-12"},T=(0,r._)("option",{value:"",selected:""},null,-1),U=["value"],W=(0,r._)("span",{name:"autorId",class:"spanErro"},null,-1),A={class:"form-group col-10"},j={class:"col-12"},O=(0,r._)("span",{name:"titulo",class:"spanErro"},null,-1),z={class:"form-group col-10"},F={style:{"margin-top":"50px"}},H=(0,r._)("button",{id:"fechar",type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",style:{"margin-right":"10px"},hidden:""},"Cancelar",-1),K=(0,r._)("button",{type:"submit",class:"btn btn-primary primaryColorBtn"},"Salvar",-1);function R(a,t,e,i,n,l){const s=(0,r.up)("ValidationForm"),d=(0,r.up)("ModalPergunta");return(0,r.wg)(),(0,r.iD)(r.HY,null,[$,(0,r._)("div",M,[(0,r._)("div",S,[(0,r._)("div",Z,[I,(0,r._)("div",q,[(0,r.Wm)(s,{model:n.card,ref:"validation",onSave:t[4]||(t[4]=a=>l.salvar(n.card))},{default:(0,r.w5)((()=>[(0,r._)("div",V,[(0,r._)("div",L,[(0,r.wy)((0,r._)("select",{name:"autorId",class:"form-select","onUpdate:modelValue":t[0]||(t[0]=a=>n.card.autorId=a)},[T,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.autores,(a=>((0,r.wg)(),(0,r.iD)("option",{value:a.id,key:a.id},(0,f.zw)(a.nome),9,U)))),128))],512),[[o.bM,n.card.autorId]]),W])]),(0,r._)("div",A,[(0,r._)("div",j,[(0,r.wy)((0,r._)("input",{placeholder:"Título",name:"titulo","onUpdate:modelValue":t[1]||(t[1]=a=>n.card.titulo=a),type:"text",class:"form-control"},null,512),[[o.nr,n.card.titulo]]),O])]),(0,r._)("div",z,[(0,r.wy)((0,r._)("textarea",{placeholder:"Descrição",name:"descricao","onUpdate:modelValue":t[2]||(t[2]=a=>n.card.descricao=a),class:"form-control"},null,512),[[o.nr,n.card.descricao]])]),(0,r._)("div",F,[H,n.card.id>0?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",class:"btn btn-secondary",style:{"margin-right":"10px"},onClick:t[3]||(t[3]=a=>l.excluir(n.card.id))},"Excluir")):(0,r.kq)("",!0),K])])),_:1},8,["model"]),(0,r.Wm)(d,{ref:"modalPergunta"},null,512)])])])])],64)}function N(a,t,e,i,n,l){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[0]||(t[0]=(0,o.iM)(((...a)=>l.submit&&l.submit(...a)),["prevent"]))},[(0,r.WI)(a.$slots,"default")],32)}e(7658);var Y={name:"ValidationForm",props:{model:null},data(){return{erros:0,submitted:!1,validations:[],newValidations:{}}},methods:{submit(){this.submitted=!0,this.validar()&&this.$emit("save")},insereChangeEventInput(){let a=document.querySelectorAll("input,select");a.forEach((a=>{a.addEventListener("change",(()=>{this.validar()}))}))},insereErrorMessageRequired(a,t){document.querySelectorAll("span[name="+a+"]")[0].innerHTML=t+" é obrigatório"},insereErrorMessageEmail(a,t){document.querySelectorAll("span[name="+a+"]")[0].innerHTML=t+" inválido"},insereErrorMessageMinlength(a,t,e){document.querySelectorAll("span[name="+a+"]")[0].innerHTML=t+" deve conter pelo menos "+e+" digitos"},insereErrorMessageEqual(a,t){document.querySelectorAll("span[name="+a+"]")[0].innerHTML=t+" não conferem"},insereErrorMessage(a,t){document.querySelectorAll("span[name="+a+"]")[0].innerHTML=t},limparErros(){let a=document.querySelectorAll("span");a.forEach((a=>{a.innerHTML=""}))},required(a,t){this.validations.push({field:a,validation:"required",label:t})},email(a,t){this.validations.push({field:a,validation:"email",label:t})},minLength(a,t,e){this.validations.push({field:a,validation:"minLength",label:t,length:e})},equal(a,t,e){this.validations.push({field:a,field2:t,validation:"equal",label:e})},customValidation(a,t=(a=>!0),e){this.validations.push({field:a,validation:"custom",msg:e,func:t})},newValidation(a,t=(a=>!0),e){this.newValidations[a]={func:t,msg:e}},applyValidation(a,t){this.validations.push({field:a,validation:"new",msg:this.newValidations[t].msg,func:this.newValidations[t].func})},insereErro(a,t){this.erros++,this.insereErrorMessage(a,t)},validar(){if(this.limparErros(),this.erros=0,this.submitted)return this.validations.forEach((a=>{if("required"===a.validation)this.model[a.field]||(this.erros++,this.insereErrorMessageRequired(a.field,a.label));else if("email"===a.validation){const t=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;t.test(this.model[a.field])||(this.erros++,this.insereErrorMessageEmail(a.field,a.label))}else"minLength"===a.validation?(!this.model[a.field]||this.model[a.field].length<a.length)&&(this.erros++,this.insereErrorMessageMinlength(a.field,a.label,a.length)):"equal"===a.validation?this.model[a.field]!=this.model[a.field2]&&(this.erros++,this.insereErrorMessageEqual(a.field,a.label,a.length)):("custom"===a.validation||"new"===a.validation)&&(a.func(this.model)||(this.erros++,this.insereErrorMessage(a.field,a.msg)))})),!(this.erros>0)}},mounted(){this.insereChangeEventInput()}};const J=(0,s.Z)(Y,[["render",N]]);var G=J;const X={style:{"margin-top":"0"}},Q={class:"btns"};function aa(a,t,e,o,i,n){const l=(0,r.up)("popup-modal");return(0,r.wg)(),(0,r.j4)(l,{ref:"popup"},{default:(0,r.w5)((()=>[(0,r._)("h2",X,(0,f.zw)(a.title),1),(0,r._)("p",null,(0,f.zw)(a.message),1),(0,r._)("div",Q,[(0,r._)("button",{onClick:t[0]||(t[0]=(...a)=>n._cancel&&n._cancel(...a)),type:"button",class:"btn btn-secondary primaryColorBtn"},(0,f.zw)(a.cancelButton),1),(0,r._)("button",{onClick:t[1]||(t[1]=(...a)=>n._confirm&&n._confirm(...a)),type:"button",class:"btn btn-danger secondaryColorBtn"},(0,f.zw)(a.okButton),1)])])),_:1},512)}const ta={key:0,class:"popup-modal"},ea={class:"window"};function oa(a,t,e,i,n,l){return(0,r.wg)(),(0,r.j4)(o.uT,{name:"fade"},{default:(0,r.w5)((()=>[a.isVisible?((0,r.wg)(),(0,r.iD)("div",ta,[(0,r._)("div",ea,[(0,r.WI)(a.$slots,"default",{},void 0,!0)])])):(0,r.kq)("",!0)])),_:3})}var ra={name:"PopupModal",data:()=>({isVisible:!1}),methods:{open(){this.isVisible=!0},close(){this.isVisible=!1}}};const ia=(0,s.Z)(ra,[["render",oa],["__scopeId","data-v-149dd4a0"]]);var na=ia,la={name:"ModalPergunta",components:{PopupModal:na},data:()=>({title:void 0,message:void 0,okButton:void 0,cancelButton:"Cancelar",resolvePromise:void 0,rejectPromise:void 0}),methods:{show(a={}){return this.title=a.title,this.message=a.message,this.okButton=a.okButton,a.cancelButton&&(this.cancelButton=a.cancelButton),this.$refs.popup.open(),new Promise(((a,t)=>{this.resolvePromise=a,this.rejectPromise=t}))},_confirm(){this.$refs.popup.close(),this.resolvePromise(!0)},_cancel(){this.$refs.popup.close(),this.resolvePromise(!1)}}};const sa=(0,s.Z)(la,[["render",aa],["__scopeId","data-v-7052fe33"]]);var da=sa,ca=e(9589),ua={name:"ModalCard",components:{ValidationForm:G,ModalPergunta:da},data(){return{card:{id:0,titulo:"",descricao:"",autorId:0,colunaId:0},autores:[],edit:!1}},methods:{limparCampos(){this.card.titulo="",this.card.descricao=""},enviarEmail(a){var t=this.autores.filter((function(t){return t.id==a.autorId}))[0];if(null!=t)try{ca.ZP.send("service_7twc9ul","template_317p5b5",{to_name:t.nome,message:a.titulo,send_to:t.email,link:window.location.pathname},"NakJZ8PgA-LMP8Imr")}catch(e){console.log(e)}},salvar(a){this.enviarEmail(a),this.edit?h.ZP.post("http://localhost:8000/card/edit",a).then((()=>{this.fechar(),this.$emit("refresh"),this.limparCampos()})).catch((a=>{this.fechar(),console.log(a)})):h.ZP.post("http://localhost:8000/card/add",a).then((()=>{this.fechar(),this.$emit("refresh"),this.limparCampos()})).catch((a=>{this.fechar(),console.log(a)}))},abrir(a,t){this.card.id=a,this.card.colunaId=t,a>0?(this.edit=!0,this.carregarCard(a)):this.edit=!1,this.carregarAutores(),document.getElementById("abrir").click()},fechar(){document.getElementById("fechar").click()},carregarAutores(){h.ZP.post("http://localhost:8000/autor").then((a=>{this.autores=a.data}))},carregarCard(a){h.ZP.post("http://localhost:8000/card/carregarRegistro",{id:a}).then((a=>{this.card.titulo=a.data[0].titulo,this.card.descricao=a.data[0].descricao,this.card.autorId=a.data[0].autorId,this.$refs.validation.validar()}))},async excluir(a){const t=await this.$refs.modalPergunta.show({title:"Excluir card",message:"Tem certeza que gostaria de excluir o card?",okButton:"Sim"});t&&h.ZP.post("http://localhost:8000/card/delete",{id:a}).then((()=>{this.fechar(),this.$emit("refresh"),this.limparCampos()}))}},mounted(){this.$refs.validation.required("titulo","Título")}};const ma=(0,s.Z)(ua,[["render",R]]);var pa=ma;const ha={id:"menu",class:"list-group"};function ga(a,t,e,o,i,n){return(0,r.wg)(),(0,r.iD)("ul",ha,[(0,r._)("li",{class:"list-group-item menuItem",onClick:t[0]||(t[0]=a=>n.abrirModal())},"Abrir"),(0,r._)("li",{class:"list-group-item menuItem",onClick:t[1]||(t[1]=t=>n.excluir(a.idCardSelecionado))},"Excluir")])}var ba={name:"MenuCard",data:()=>({idCardSelecionado:0,idColunaSelecionada:0}),methods:{abrir(a,t,e){this.idCardSelecionado=a.id,this.idColunaSelecionada=a.colunaId;const o=document.getElementById("menu");o.style.visibility="visible",o.style.top=`${e}px`,o.style.left=`${t}px`},fechar(){const a=document.getElementById("menu");a.style.visibility="hidden"},abrirModal(){this.$parent.$refs.modal.abrir(this.idCardSelecionado,this.idColunaSelecionada)},excluir(){this.$parent.excluir(this.idCardSelecionado)}}};const fa=(0,s.Z)(ba,[["render",ga]]);var va=fa,ya={name:"BoardView",components:{ModalCard:pa,MenuCard:va},data(){return{idCardSelecionado:0,idColunaOrigem:0,boards:[],colunas:[],boardSelecionado:null,primeiraColunaId:null}},methods:{style(a){return{backgroundColor:a.cor}},abrirMenu(a,t){this.$refs.menu.abrir(t,a.clientX,a.clientY)},fecharMenu(){this.$refs.menu.fechar()},abrirModal(a,t){this.$refs.modal.abrir(a,t)},carregarBoards(){h.ZP.post("http://localhost:8000/board").then((a=>{this.boards=a.data}))},carregarColunas(){h.ZP.post("http://localhost:8000/board/carregarBoard",{boardId:this.boardSelecionado}).then((a=>{this.colunas=a.data,this.primeiraColunaId=this.colunas[0].id}))},moveu(a,t){this.fecharMenu(),this.idColunaOrigem=t,this.idCardSelecionado=a},soltou(a){h.ZP.post("http://localhost:8000/moverCard",{colunaId:a,id:this.idCardSelecionado}).then((()=>{this.carregarColunas()}))},edit(a){this.$refs.modal.abrir(a)},excluir(a){h.ZP.post("http://localhost:8000/card/delete",{id:a}).then((()=>{this.carregarColunas()}))}},mounted(){this.carregarBoards()}};const wa=(0,s.Z)(ya,[["render",D]]);var _a=wa;const Ca={align:"center"},Pa=(0,r._)("h3",{class:"secondaryColor",style:{"margin-bottom":"40px"}},"Lista Participantes",-1);function ka(a,t,e,o,i,n){const l=(0,r.up)("font-awesome-icon"),s=(0,r.up)("DataTable"),d=(0,r.up)("ModalPergunta");return(0,r.wg)(),(0,r.iD)("div",Ca,[Pa,(0,r._)("button",{class:"btn btn-primary primaryColorBtn",onClick:t[0]||(t[0]=(...a)=>n.inserir&&n.inserir(...a)),style:{"margin-bottom":"20px"}},[(0,r.Uk)("Inserir Participante "),(0,r.Wm)(l,{icon:"fa-solid fa-plus"})]),((0,r.wg)(),(0,r.j4)(s,{ref:"dataTable",colLabels:i.colLabels,dataFields:i.dataFields,dataUrl:"http://localhost:8000/autor",showEditButton:!0,showRemoveButton:!0,onEditar:n.editar,onExcluir:n.excluir,key:i.dataTableKey,id:"id"},null,8,["colLabels","dataFields","onEditar","onExcluir"])),(0,r.Wm)(d,{ref:"modalPergunta"},null,512)])}const Ba={class:"table",style:{"margin-top":"20px"}},xa={key:0,style:{width:"20%"}},Ea={key:0,align:"center"},Da=["onClick"],$a=["onClick"],Ma=["onClick"];function Sa(a,t,e,o,i,n){const l=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("table",Ba,[(0,r._)("thead",null,[(0,r._)("tr",null,[e.showEditButton||e.showRemoveButton||e.showAddButton?((0,r.wg)(),(0,r.iD)("th",xa)):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.colLabels,((a,t)=>((0,r.wg)(),(0,r.iD)("th",{key:t,class:"secondaryColor",scope:"col"},(0,f.zw)(a),1)))),128))])]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.filteredData,((t,o)=>((0,r.wg)(),(0,r.iD)("tr",{key:o},[e.showEditButton||e.showRemoveButton||e.showAddButton?((0,r.wg)(),(0,r.iD)("td",Ea,[e.showEditButton?((0,r.wg)(),(0,r.iD)("button",{key:0,title:"Editar",style:{"margin-left":"10px"},type:"button",onClick:e=>a.$emit("editar",t),class:"btn btn-primary primaryColorBtn"},[(0,r.Wm)(l,{icon:"fa-solid fa-pen"})],8,Da)):(0,r.kq)("",!0),e.showAddButton?((0,r.wg)(),(0,r.iD)("button",{key:1,style:{"margin-left":"10px"},type:"button",onClick:o=>a.$emit("addItem",t[e.id]),class:"btn btn-primary primaryColorBtn"},[(0,r.Wm)(l,{icon:"fa-solid fa-plus"})],8,$a)):(0,r.kq)("",!0),e.showRemoveButton?((0,r.wg)(),(0,r.iD)("button",{key:2,title:"Excluir",style:{"margin-left":"10px"},type:"button",onClick:e=>a.$emit("excluir",t),class:"btn btn-secondary secondaryColorBtn"},[(0,r.Wm)(l,{icon:"fa-solid fa-trash"})],8,Ma)):(0,r.kq)("",!0)])):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.dataFields,((a,e)=>((0,r.wg)(),(0,r.iD)("td",{key:e},(0,f.zw)(t[a]),1)))),128))])))),128))])])}var Za={name:"DataTable",props:{colLabels:null,dataFields:null,showEditButton:null,showRemoveButton:null,showAddButton:null,dataUrl:null,paramsUrl:null,id:null},data(){return{filteredData:null,originalData:null}},methods:{filter(a,t){this.filteredData=this.originalData,t&&(this.filteredData=this.filteredData.filter((function(e){return e[a].toLowerCase().includes(t.toLowerCase())})))}},async created(){this.paramsUrl?await h.ZP.post(this.dataUrl,this.paramsUrl).then((a=>{this.originalData=a.data,this.filteredData=this.originalData})):await h.ZP.post(this.dataUrl).then((a=>{this.originalData=a.data,this.filteredData=this.originalData}))}};const Ia=(0,s.Z)(Za,[["render",Sa]]);var qa=Ia,Va={name:"ListaParticipanteView",components:{DataTable:qa,ModalPergunta:da},data(){return{colLabels:["Nome","E-mail"],dataFields:["nome","email"],dataTableKey:0}},methods:{inserir(){this.$router.push({name:"CadastroEdicaoParticipante",params:{codigoParticipante:0}})},editar(a){this.$router.push({name:"CadastroEdicaoParticipante",params:{codigoParticipante:a.id}})},async excluir(a){const t=await this.$refs.modalPergunta.show({title:"Excluir Participante",message:"Tem certeza que gostaria de excluir o participante?",okButton:"Sim"});t&&h.ZP.post("http://localhost:8000/autor/delete",{id:a.id}).then((a=>{a.data.podeExcluir?(this.$swal("Sucesso","Participante excluído com sucesso!","success"),this.dataTableKey++):this.$swal("Erro","Participante possui vínculo com algum Card!","error")}))}}};const La=(0,s.Z)(Va,[["render",ka]]);var Ta=La;const Ua={align:"center",id:"content"},Wa=(0,r._)("h3",{class:"primaryColor"},"Cadastro Participante",-1),Aa={align:"center"},ja={class:"card"},Oa={class:"card-body",style:{"padding-top":"35px","padding-bottom":"30px"}},za={class:"form-group col-10"},Fa=(0,r._)("label",{class:"form-label col-2",style:{"margin-right":"20px"}},"Nome",-1),Ha={class:"col-10"},Ka=(0,r._)("span",{name:"nome",class:"spanErro"},null,-1),Ra={class:"form-group col-10"},Na=(0,r._)("label",{class:"form-label col-2",style:{"margin-right":"20px"}},"E-mail",-1),Ya={class:"col-10"},Ja=(0,r._)("span",{name:"email",class:"spanErro"},null,-1),Ga={id:"actionButtons",style:{"margin-top":"50px"}},Xa=(0,r._)("button",{type:"submit",class:"btn btn-success secondaryColorBtn"},"Salvar",-1);function Qa(a,t,e,i,n,l){const s=(0,r.up)("ModalPergunta"),d=(0,r.up)("ValidationForm");return(0,r.wg)(),(0,r.iD)("div",Ua,[Wa,(0,r._)("div",Aa,[(0,r._)("div",ja,[(0,r._)("div",Oa,[(0,r.Wm)(d,{model:n.participante,ref:"validation",onSave:t[3]||(t[3]=a=>l.salvar(n.participante))},{default:(0,r.w5)((()=>[(0,r._)("div",za,[Fa,(0,r._)("div",Ha,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>n.participante.nome=a),id:"nome",class:"form-control"},null,512),[[o.nr,n.participante.nome]]),Ka])]),(0,r._)("div",Ra,[Na,(0,r._)("div",Ya,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>n.participante.email=a),id:"email",class:"form-control"},null,512),[[o.nr,n.participante.email]]),Ja])]),(0,r._)("div",Ga,[n.participante.id>0?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[2]||(t[2]=a=>l.excluir(n.participante)),type:"button",style:{"margin-right":"5px"},class:"btn btn-secondary primaryColorBtn"},"Excluir")):(0,r.kq)("",!0),Xa,(0,r.Wm)(s,{ref:"modalPergunta"},null,512)])])),_:1},8,["model"])])])])])}var at={name:"CadastroEdicaoParticipanteView",components:{ModalPergunta:da,ValidationForm:G},data(){return{participante:{id:this.$route.params.codigoParticipante,nome:null,email:null}}},methods:{salvar(a){a.id>0?h.ZP.post("http://localhost:8000/autor/update",a).then(this.$swal("Sucesso","Paciente registrado com sucesso!","success"),this.$router.back()):h.ZP.post("http://localhost:8000/autor/add",a).then((a=>{a.data.emailValido?(this.$swal("Sucesso","Participante registrado com sucesso!","success"),this.$router.back()):this.$refs.validation.insereErro("email","E-mail já está sendo utilizado.")}));try{ca.ZP.send("service_7twc9ul","template_ny5eji9",{from_name:"Serviço de E-mail Board APP",to_name:a.nome,message:"Sua conta foi criada/alterada com sucesso!",reply_to:a.email},"NakJZ8PgA-LMP8Imr")}catch(t){console.log(t)}},async excluir(a){const t=await this.$refs.modalPergunta.show({title:"Excluir Participante",message:"Tem certeza que gostaria de excluir o participante?",okButton:"Sim"});t&&h.ZP.post("http://localhost:8000/autor/delete",{id:a.id}).then((()=>{this.$swal("Sucesso","Participante excluído com sucesso!","success"),this.$router.back()}))},recuperarDados(){h.ZP.post("http://localhost:8000/autor/carregarRegistro",{id:this.participante.id}).then((a=>{this.participante.email=a.data[0].email,this.participante.nome=a.data[0].nome}))}},mounted(){this.participante.id>0&&this.recuperarDados(),this.$refs.validation.required("nome","Nome"),this.$refs.validation.required("email","E-mail"),this.$refs.validation.email("email","E-mail")}};const tt=(0,s.Z)(at,[["render",Qa]]);var et=tt;const ot={align:"center",id:"content"},rt=(0,r._)("h3",{class:"primaryColor"},"Cadastro Board",-1),it={align:"center"},nt={class:"card"},lt={class:"card-body",style:{"padding-top":"35px","padding-bottom":"30px"}},st={class:"form-group col-10"},dt=(0,r._)("label",{class:"form-label col-2",style:{"margin-right":"20px"}},"Nome",-1),ct={class:"col-10"},ut=(0,r._)("span",{name:"nome",class:"spanErro"},null,-1),mt={id:"actionButtons",style:{"margin-top":"50px"}},pt=(0,r._)("button",{type:"submit",class:"btn btn-success secondaryColorBtn"},"Salvar",-1);function ht(a,t,e,i,n,l){const s=(0,r.up)("ModalPergunta"),d=(0,r.up)("ValidationForm");return(0,r.wg)(),(0,r.iD)("div",ot,[rt,(0,r._)("div",it,[(0,r._)("div",nt,[(0,r._)("div",lt,[(0,r.Wm)(d,{model:n.board,ref:"validation",onSave:t[2]||(t[2]=a=>l.salvar(n.board))},{default:(0,r.w5)((()=>[(0,r._)("div",st,[dt,(0,r._)("div",ct,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>n.board.nome=a),id:"nome",class:"form-control"},null,512),[[o.nr,n.board.nome]]),ut])]),(0,r._)("div",mt,[n.board.id>0?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[1]||(t[1]=a=>l.excluir(n.board)),type:"button",style:{"margin-right":"5px"},class:"btn btn-secondary primaryColorBtn"},"Excluir")):(0,r.kq)("",!0),pt,(0,r.Wm)(s,{ref:"modalPergunta"},null,512)])])),_:1},8,["model"])])])])])}var gt={name:"CadastroEdicaoBoardView",components:{ModalPergunta:da,ValidationForm:G},data(){return{board:{id:this.$route.params.codigoBoard,nome:null,colunas:[]},coluna:{nomeColuna:null,ordemColuna:null}}},methods:{insereColuna(a,t){let e={nome:a,ordem:t,idBoard:this.board.id};h.ZP.post("http://localhost:8000/coluna/add",e)},salvar(a){a.id>0?h.ZP.post("http://localhost:8000/board/update",a).then(this.$swal("Sucesso","Board registrado com sucesso!","success"),this.$router.back()):h.ZP.post("http://localhost:8000/board/add",a).then(this.$swal("Sucesso","Board registrado com sucesso!","success"),this.$router.back())},async excluir(a){const t=await this.$refs.modalPergunta.show({title:"Excluir Board",message:"Tem certeza que gostaria de excluir o board?",okButton:"Sim"});t&&h.ZP.post("http://localhost:8000/board/delete",{id:a.id}).then((()=>{this.$swal("Sucesso","Board excluído com sucesso!","success"),this.$router.back()}))},recuperarDados(){h.ZP.post("http://localhost:8000/board/carregarRegistro",{id:this.board.id}).then((a=>{this.board.nome=a.data[0].nome}))}},mounted(){this.board.id>0&&this.recuperarDados(),this.$refs.validation.required("nome","Nome")}};const bt=(0,s.Z)(gt,[["render",ht]]);var ft=bt;const vt={align:"center"},yt=(0,r._)("h3",{class:"secondaryColor",style:{"margin-bottom":"40px"}},"Lista Boards",-1);function wt(a,t,e,o,i,n){const l=(0,r.up)("font-awesome-icon"),s=(0,r.up)("DataTable"),d=(0,r.up)("ModalPergunta");return(0,r.wg)(),(0,r.iD)("div",vt,[yt,(0,r._)("button",{class:"btn btn-primary primaryColorBtn",onClick:t[0]||(t[0]=(...a)=>n.inserir&&n.inserir(...a)),style:{"margin-bottom":"20px"}},[(0,r.Uk)("Inserir Board "),(0,r.Wm)(l,{icon:"fa-solid fa-plus"})]),((0,r.wg)(),(0,r.j4)(s,{ref:"dataTable",colLabels:i.colLabels,dataFields:i.dataFields,dataUrl:"http://localhost:8000/board",showEditButton:!0,showRemoveButton:!0,showAddButton:!0,onEditar:n.editar,onExcluir:n.excluir,onAddItem:n.coluna,key:i.dataTableKey,id:"id"},null,8,["colLabels","dataFields","onEditar","onExcluir","onAddItem"])),(0,r.Wm)(d,{ref:"modalPergunta"},null,512)])}var _t={name:"ListaBoardView",components:{DataTable:qa,ModalPergunta:da},data(){return{colLabels:["Nome"],dataFields:["nome"],dataTableKey:0}},methods:{inserir(){this.$router.push({name:"CadastroEdicaoBoard",params:{codigoBoard:0}})},editar(a){this.$router.push({name:"CadastroEdicaoBoard",params:{codigoBoard:a.id}})},async excluir(a){const t=await this.$refs.modalPergunta.show({title:"Excluir Board",message:"Tem certeza que gostaria de excluir o board?",okButton:"Sim"});t&&h.ZP.post("http://localhost:8000/board/delete",{id:a.id}).then(this.$swal("Sucesso","Board excluído com sucesso!","success"),this.dataTableKey++)},coluna(a){this.$router.push({name:"CadastroEdicaoColuna",params:{codigoBoard:a}})}}};const Ct=(0,s.Z)(_t,[["render",wt]]);var Pt=Ct;const kt={align:"center"},Bt=(0,r._)("h3",{class:"primaryColor"},"Cadastro Coluna",-1),xt={class:"card cardColuna"},Et={class:"card-body",style:{"margin-top":"20px"}},Dt={class:"form-group col-10"},$t=(0,r._)("label",{class:"form-label col-2"},"Colunas",-1),Mt={class:"col-3",style:{"margin-left":"20px"}},St=(0,r._)("span",{name:"nome",class:"spanErro"},null,-1),Zt={class:"col-2",style:{"margin-left":"20px"}},It=(0,r._)("span",{name:"ordem",class:"spanErro"},null,-1),qt={class:"col-1",style:{"margin-left":"20px"}},Vt=(0,r._)("span",{name:"cor",class:"spanErro"},null,-1),Lt={type:"submit",class:"btn btn-primary primaryColorBtn",style:{"margin-left":"40px",height:"40px"}},Tt={class:"col-12"},Ut={class:"table table-bordered"},Wt=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col",style:{width:"10%"}}),(0,r._)("th",{scope:"col",style:{width:"70%"}},"Nome"),(0,r._)("th",{scope:"col",style:{width:"10%"}},"Ordem"),(0,r._)("th",{scope:"col",class:"tdColor",style:{width:"10%"}},"Cor")])],-1),At={style:{display:"flex","justify-content":"center"}},jt=["onClick"],Ot=["value","onChange"];function zt(a,t,e,i,n,l){const s=(0,r.up)("font-awesome-icon"),d=(0,r.up)("ValidationForm");return(0,r.wg)(),(0,r.iD)("div",kt,[Bt,(0,r.Wm)(d,{model:n.coluna,ref:"validation",onSave:t[3]||(t[3]=a=>l.insere(n.coluna.nome,n.coluna.ordem,n.coluna.cor))},{default:(0,r.w5)((()=>[(0,r._)("div",xt,[(0,r._)("div",Et,[(0,r._)("div",Dt,[$t,(0,r._)("div",Mt,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>n.coluna.nome=a),placeholder:"nome",class:"form-control"},null,512),[[o.nr,n.coluna.nome]]),St]),(0,r._)("div",Zt,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>n.coluna.ordem=a),placeholder:"ordem",type:"number",min:"0",class:"form-control"},null,512),[[o.nr,n.coluna.ordem]]),It]),(0,r._)("div",qt,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>n.coluna.cor=a),type:"color",class:"form-control inputColor"},null,512),[[o.nr,n.coluna.cor]]),Vt]),(0,r._)("button",Lt,[(0,r.Wm)(s,{icon:"fa-solid fa-plus"})])]),(0,r._)("div",Tt,[(0,r._)("table",Ut,[Wt,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.colunas,(a=>((0,r.wg)(),(0,r.iD)("tr",{key:a.nome},[(0,r._)("td",At,[(0,r._)("button",{type:"button",class:"btn btn-primary primaryColorBtn",onClick:t=>l.excluir(a.id)},[(0,r.Wm)(s,{icon:"fa-solid fa-trash"})],8,jt)]),(0,r._)("td",null,(0,f.zw)(a.nome),1),(0,r._)("td",null,(0,f.zw)(a.ordem),1),(0,r._)("td",null,[(0,r._)("input",{class:"form-control inputColor",type:"color",value:a.cor,onChange:t=>l.alteraCor(a,t.target.value)},null,40,Ot)])])))),128))])])])])])])),_:1},8,["model"])])}var Ft={name:"CadastroEdicaoColunaView",components:{ValidationForm:G},data(){return{colunas:[],coluna:{nome:null,ordem:null,cor:null}}},methods:{alteraCor(a,t){h.ZP.post("http://localhost:8000/coluna/alteraCor",{colunaId:a.id,cor:t})},limpar(){this.coluna.nome=null,this.coluna.ordem=null},insere(a,t,e){console.log;let o={nome:a,ordem:t,boardId:this.$route.params.codigoBoard,cor:e};h.ZP.post("http://localhost:8000/coluna/add",o).then((()=>{this.carregarColunas(),this.limpar()}))},carregarColunas(){h.ZP.post("http://localhost:8000/coluna/carregarPorBoard",{boardId:this.$route.params.codigoBoard}).then((a=>{this.colunas=a.data}))},excluir(a){h.ZP.post("http://localhost:8000/coluna/delete",{id:a}).then((()=>{this.carregarColunas()}))}},mounted(){this.$refs.validation.required("nome","Nome"),this.$refs.validation.required("ordem","Ordem"),this.carregarColunas()}};const Ht=(0,s.Z)(Ft,[["render",zt]]);var Kt=Ht;const Rt=[{path:"/Board",name:"Board",component:_a},{path:"/ListaParticipante",name:"ListaParticipante",component:Ta},{path:"/Participante/CadastroEdicao/:codigoParticipante",name:"CadastroEdicaoParticipante",component:et},{path:"/Board/CadastroEdicao/:codigoBoard",name:"CadastroEdicaoBoard",component:ft},{path:"/ListaBoard",name:"ListaBoard",component:Pt},{path:"/Board/CadastroEdicaoColuna/:codigoBoard",name:"CadastroEdicaoColuna",component:Kt}],Nt=(0,b.p7)({history:(0,b.PO)(),routes:Rt});var Yt=Nt,Jt=e(6553),Gt=e.n(Jt),Xt=e(3526),Qt=e(4429);e(5654);u.vI.add(p.r8p),u.vI.add(p.IwR),u.vI.add(p.$aW),(0,o.ri)(c).component("font-awesome-icon",m.GN).use(Qt.ZP).use(Xt.ZP).use(Gt()).use(g.Z,h.ZP).use(Yt).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return a[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}e.m=a,function(){e.amdO={}}(),function(){var a=[];e.O=function(t,o,r,i){if(!o){var n=1/0;for(c=0;c<a.length;c++){o=a[c][0],r=a[c][1],i=a[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||n>=i)&&Object.keys(e.O).every((function(a){return e.O[a](o[s])}))?o.splice(s--,1):(l=!1,i<n&&(n=i));if(l){a.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=a.length;c>0&&a[c-1][2]>i;c--)a[c]=a[c-1];a[c]=[o,r,i]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var o in t)e.o(t,o)&&!e.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(a){return a=Object.create(a),a.children||(a.children=[]),Object.defineProperty(a,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+a.id)}}),a}}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,o){var r,i,n=o[0],l=o[1],s=o[2],d=0;if(n.some((function(t){return 0!==a[t]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(s)var c=s(e)}for(t&&t(o);d<n.length;d++)i=n[d],e.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return e.O(c)},o=self["webpackChunkboard"]=self["webpackChunkboard"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(5757)}));o=e.O(o)})();
//# sourceMappingURL=app.52ae6f99.js.map