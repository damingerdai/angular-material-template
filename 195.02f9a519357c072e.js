"use strict";(self.webpackChunkangular_material_template=self.webpackChunkangular_material_template||[]).push([[195],{6195:(Q,u,i)=>{i.r(u),i.d(u,{CustomersModule:()=>b});var p=i(6895),c=i(8996),h=i(6797),a=i(6308),m=i(7155),t=i(4650),C=i(945),f=i(1645),g=i(1481),r=i(1576),d=i(3546);function y(o,e){1&o&&(t.TgZ(0,"th",11),t._uU(1," No. "),t.qZA())}function x(o,e){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.position," ")}}function T(o,e){1&o&&(t.TgZ(0,"th",11),t._uU(1," Name "),t.qZA())}function Z(o,e){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function v(o,e){1&o&&(t.TgZ(0,"th",11),t._uU(1," Weight "),t.qZA())}function w(o,e){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.weight," ")}}function L(o,e){1&o&&(t.TgZ(0,"th",11),t._uU(1," Symbol "),t.qZA())}function N(o,e){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const n=e.$implicit;t.xp6(1),t.hij(" ",n.symbol," ")}}function Y(o,e){1&o&&t._UZ(0,"tr",13)}function A(o,e){1&o&&t._UZ(0,"tr",14)}const B=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}],S=[{path:"",component:h.$,children:[{path:"",component:(()=>{class o{constructor(n,s,l){this.logger=n,this.notificationService=s,this.titleService=l,this.displayedColumns=["position","name","weight","symbol"],this.dataSource=new m.by(B),this.sort=new a.YE}ngOnInit(){this.titleService.setTitle("angular-material-template - Customers"),this.logger.log("Customers loaded"),this.notificationService.openSnackBar("Customers loaded"),this.dataSource.sort=this.sort}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(C.Kf),t.Y36(f.g),t.Y36(g.Dx))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-customer-list"]],viewQuery:function(n,s){if(1&n&&t.Gf(a.YE,7),2&n){let l;t.iGM(l=t.CRH())&&(s.sort=l.first)}},decls:21,vars:3,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","weight"],["matColumnDef","symbol"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card")(3,"mat-card-content")(4,"h2"),t._uU(5,"Customers"),t.qZA(),t.TgZ(6,"table",2),t.ynx(7,3),t.YNc(8,y,2,0,"th",4),t.YNc(9,x,2,1,"td",5),t.BQk(),t.ynx(10,6),t.YNc(11,T,2,0,"th",4),t.YNc(12,Z,2,1,"td",5),t.BQk(),t.ynx(13,7),t.YNc(14,v,2,0,"th",4),t.YNc(15,w,2,1,"td",5),t.BQk(),t.ynx(16,8),t.YNc(17,L,2,0,"th",4),t.YNc(18,N,2,1,"td",5),t.BQk(),t.YNc(19,Y,1,0,"tr",9),t.YNc(20,A,1,0,"tr",10),t.qZA()()()()()),2&n&&(t.xp6(6),t.Q6J("dataSource",s.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns))},dependencies:[r.xw,r.Wh,r.yH,d.a8,d.dn,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,a.YE,a.nU],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}"]}),o})()}]}];let U=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(S),c.Bz]}),o})();var M=i(3927);let b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,U,M.m]}),o})()}}]);