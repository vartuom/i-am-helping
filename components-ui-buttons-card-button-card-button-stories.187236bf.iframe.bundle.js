"use strict";(self.webpackChunki_am_helping=self.webpackChunki_am_helping||[]).push([[4215],{"./src/components/ui/buttons/card-button/card-button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AcceptAndBlockButton:function(){return AcceptAndBlockButton},ActiveApplicationButton:function(){return ActiveApplicationButton},ApplicationMapButton:function(){return ApplicationMapButton},CompletedApplicationButton:function(){return CompletedApplicationButton},CreateAndEditApplicationButton:function(){return CreateAndEditApplicationButton},StatisticsButton:function(){return StatisticsButton},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return card_button_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),_excluded=["icon","display","children","onClick","isVolunteer"],CardButton=function CardButton(_ref){var icon=_ref.icon,display=_ref.display,children=_ref.children,onClick=_ref.onClick,isVolunteer=_ref.isVolunteer,props=(0,objectWithoutProperties.Z)(_ref,_excluded),displayType="web"===display?"card-button__web":"mobile"===display?"card-button__mobile":"card-button__mobile-wide",captionType="card-button__caption",captionWidthType=isVolunteer&&"mobile"===display?"card-button__caption-wide":"";return(0,jsx_runtime.jsxs)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:["card-button",displayType].join(" "),onClick:onClick},props),{},{children:[icon,(0,jsx_runtime.jsx)("p",{className:[captionType,captionWidthType].join(" "),children:children})]}))};try{CardButton.displayName="CardButton",CardButton.__docgenInfo={description:"",displayName:"CardButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},display:{defaultValue:null,description:"",name:"display",required:!0,type:{name:"enum",value:[{value:'"mobile"'},{value:'"web"'},{value:'"mobile-wide"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | ((e: SyntheticEvent<Element, Event>) => void)"}},isVolunteer:{defaultValue:null,description:"",name:"isVolunteer",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/buttons/card-button/card-button.tsx#CardButton"]={docgenInfo:CardButton.__docgenInfo,name:"CardButton",path:"src/components/ui/buttons/card-button/card-button.tsx#CardButton"})}catch(__react_docgen_typescript_loader_error){}var _ActiveApplicationBut,_ActiveApplicationBut2,_ActiveApplicationBut3,_ApplicationMapButton,_ApplicationMapButton2,_ApplicationMapButton3,_CompletedApplication,_CompletedApplication2,_CompletedApplication3,_AcceptAndBlockButton,_AcceptAndBlockButton2,_AcceptAndBlockButton3,_StatisticsButton$par,_StatisticsButton$par2,_StatisticsButton$par3,_CreateAndEditApplica,_CreateAndEditApplica2,_CreateAndEditApplica3,icons=__webpack_require__("./src/components/ui/icons/icons.tsx"),card_button_stories={title:"Card button",component:CardButton,tags:["autodocs"]},ActiveApplicationButton={args:{icon:(0,jsx_runtime.jsx)(icons.sU,{type:"white"}),display:"web",children:"Активные заявки",isVolunteer:!0}},ApplicationMapButton={args:{icon:(0,jsx_runtime.jsx)(icons.Vf,{type:"white"}),display:"web",children:"Карта заявок",isVolunteer:!0}},CompletedApplicationButton={args:{icon:(0,jsx_runtime.jsx)(icons.fN,{type:"white"}),display:"web",children:"Завершенные заявки",isVolunteer:!0}},AcceptAndBlockButton={args:{icon:(0,jsx_runtime.jsx)(icons.S6,{type:"white"}),display:"web",children:"Подтверждение / Блокировка"}},StatisticsButton={args:{icon:(0,jsx_runtime.jsx)(icons.tY,{type:"white"}),display:"web",children:"Статистика"}},CreateAndEditApplicationButton={args:{icon:(0,jsx_runtime.jsx)(icons.mv,{type:"white"}),display:"web",children:"Создание / Редактирование заявки"}};ActiveApplicationButton.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ActiveApplicationButton.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ActiveApplicationBut=ActiveApplicationButton.parameters)||void 0===_ActiveApplicationBut?void 0:_ActiveApplicationBut.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    icon: <ActiveApplicationIcon type="white" />,\n    display: "web",\n    children: "Активные заявки",\n    isVolunteer: true\n  }\n}'},null===(_ActiveApplicationBut2=ActiveApplicationButton.parameters)||void 0===_ActiveApplicationBut2||null===(_ActiveApplicationBut3=_ActiveApplicationBut2.docs)||void 0===_ActiveApplicationBut3?void 0:_ActiveApplicationBut3.source)})}),ApplicationMapButton.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ApplicationMapButton.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ApplicationMapButton=ApplicationMapButton.parameters)||void 0===_ApplicationMapButton?void 0:_ApplicationMapButton.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    icon: <ApplicationMapIcon type="white" />,\n    display: "web",\n    children: "Карта заявок",\n    isVolunteer: true\n  }\n}'},null===(_ApplicationMapButton2=ApplicationMapButton.parameters)||void 0===_ApplicationMapButton2||null===(_ApplicationMapButton3=_ApplicationMapButton2.docs)||void 0===_ApplicationMapButton3?void 0:_ApplicationMapButton3.source)})}),CompletedApplicationButton.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CompletedApplicationButton.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CompletedApplication=CompletedApplicationButton.parameters)||void 0===_CompletedApplication?void 0:_CompletedApplication.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    icon: <CompletedApplicationIcon type="white" />,\n    display: "web",\n    children: "Завершенные заявки",\n    isVolunteer: true\n  }\n}'},null===(_CompletedApplication2=CompletedApplicationButton.parameters)||void 0===_CompletedApplication2||null===(_CompletedApplication3=_CompletedApplication2.docs)||void 0===_CompletedApplication3?void 0:_CompletedApplication3.source)})}),AcceptAndBlockButton.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},AcceptAndBlockButton.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_AcceptAndBlockButton=AcceptAndBlockButton.parameters)||void 0===_AcceptAndBlockButton?void 0:_AcceptAndBlockButton.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    icon: <AcceptBlockIcon type="white" />,\n    display: "web",\n    children: "Подтверждение / Блокировка"\n  }\n}'},null===(_AcceptAndBlockButton2=AcceptAndBlockButton.parameters)||void 0===_AcceptAndBlockButton2||null===(_AcceptAndBlockButton3=_AcceptAndBlockButton2.docs)||void 0===_AcceptAndBlockButton3?void 0:_AcceptAndBlockButton3.source)})}),StatisticsButton.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},StatisticsButton.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_StatisticsButton$par=StatisticsButton.parameters)||void 0===_StatisticsButton$par?void 0:_StatisticsButton$par.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    icon: <StatisticsIcon type="white" />,\n    display: "web",\n    children: "Статистика"\n  }\n}'},null===(_StatisticsButton$par2=StatisticsButton.parameters)||void 0===_StatisticsButton$par2||null===(_StatisticsButton$par3=_StatisticsButton$par2.docs)||void 0===_StatisticsButton$par3?void 0:_StatisticsButton$par3.source)})}),CreateAndEditApplicationButton.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CreateAndEditApplicationButton.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CreateAndEditApplica=CreateAndEditApplicationButton.parameters)||void 0===_CreateAndEditApplica?void 0:_CreateAndEditApplica.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    icon: <CreateEditIcon type="white" />,\n    display: "web",\n    children: "Создание / Редактирование заявки"\n  }\n}'},null===(_CreateAndEditApplica2=CreateAndEditApplicationButton.parameters)||void 0===_CreateAndEditApplica2||null===(_CreateAndEditApplica3=_CreateAndEditApplica2.docs)||void 0===_CreateAndEditApplica3?void 0:_CreateAndEditApplica3.source)})});var __namedExportsOrder=["ActiveApplicationButton","ApplicationMapButton","CompletedApplicationButton","AcceptAndBlockButton","StatisticsButton","CreateAndEditApplicationButton"]}}]);