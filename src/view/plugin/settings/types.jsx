  
  export let tCondition = {};
  export let  tIf = {};
  export let  tElseIf = {};
  export let  tElse = {};
  export let  tLoop = {};
  export let  tEvent = {};
  export let  tEventEmitter = {};
  export let  tEventReceiver = {};
  export let  tExpression ={};
  export let  type2 = {};
  tCondition.name = "condition";
  tIf.name = "if";
  tElseIf.name = "else if";
  tElse.name = "else";
  tEventEmitter.name = "event emitter";
  tEventReceiver.name = "event receiver";
  tExpression.name = "expression";
  tLoop.name = "loop";
  type2.name = "process";
  tEventEmitter.description = "Event emitters send notifications to event receivers whenever you use them. Note that you need to first create the event receiver before you can emit the event, else your event receiver will not receive your event until it is defined.";
  tCondition.fields = [
      {name : "comment", type: "textbox", title : "Comment", placeholder : " explain what it does..", id : Math.random()*90000000000, value:"",},
    //   {name : "packageInstallerCommand", type: "text", title :  "installer command", placeholder :  "npm install ", id : Math.random()*90000000000, value:"",},
    // {name : "logger", type: "text", title :  "logger function", placeholder :  "console.log", id : Math.random()*90000000000, value:"",}
  ];
  tIf.fields = [
    {name : "customCommandsDir", type: "text", title : "command Dir", placeholder : "Path/to/custom/commands/folder", id : Math.random()*90000000000, value:"",},
    {name : "packageInstallerCommand", type: "text", title :  "installer command", placeholder :  "npm install ", id : Math.random()*90000000000, value:"",},
    {name : "logger", type: "text", title :  "logger function", placeholder :  "console.log", id : Math.random()*90000000000, value:"",}
  ];
  tElseIf.fields = [
    {name : "customCommandsDir", type: "text", title : "command Dir", placeholder : "Path/to/custom/commands/folder", id : Math.random()*90000000000, value:"",},
    {name : "packageInstallerCommand", type: "text", title :  "installer command", placeholder :  "npm install ", id : Math.random()*90000000000, value:"",},
    {name : "logger", type: "text", title :  "logger function", placeholder :  "console.log", id : Math.random()*90000000000, value:"",}
  ];
  tElse.fields = [
    {name : "customCommandsDir", type: "text", title : "command Dir", placeholder : "Path/to/custom/commands/folder", id : Math.random()*90000000000, value:"",},
    {name : "packageInstallerCommand", type: "text", title :  "installer command", placeholder :  "npm install ", id : Math.random()*90000000000, value:"",},
    {name : "logger", type: "text", title :  "logger function", placeholder :  "console.log", id : Math.random()*90000000000, value:"",}
  ];
  tLoop.fields = [
    {name : "customCommandsDir", type: "text", title : "command Dir", placeholder : "Path/to/custom/commands/folder", id : Math.random()*90000000000, value:"",},
    {name : "packageInstallerCommand", type: "text", title :  "installer command", placeholder :  "npm install ", id : Math.random()*90000000000, value:"",},
    {name : "logger", type: "text", title :  "logger function", placeholder :  "console.log", id : Math.random()*90000000000, value:"",}
  ];
  tEvent.fields = [
    {name : "customCommandsDir", type: "text", title : "command Dir", placeholder : "Path/to/custom/commands/folder", id : Math.random()*90000000000, value:"",},
    {name : "packageInstallerCommand", type: "text", title :  "installer command", placeholder :  "npm install ", id : Math.random()*90000000000, value:"",},
    {name : "logger", type: "text", title :  "logger function", placeholder :  "console.log", id : Math.random()*90000000000, value:"",}
  ];
  tEventEmitter.fields = [
    {name : "customCommandsDir", type: "text", title : "command Dir", placeholder : "Path/to/custom/commands/folder", id : Math.random()*90000000000, value:"",},
    {name : "packageInstallerCommand", type: "text", title :  "installer command", placeholder :  "npm install ", id : Math.random()*90000000000, value:"",},
    {name : "logger", type: "text", title :  "logger function", placeholder :  "console.log", id : Math.random()*90000000000, value:"",}
  ];
  tEventReceiver.fields = [
    {name : "customCommandsDir", type: "text", title : "command Dir", placeholder : "Path/to/custom/commands/folder", id : Math.random()*90000000000, value:"",},
    {name : "packageInstallerCommand", type: "text", title :  "installer command", placeholder :  "npm install ", id : Math.random()*90000000000, value:"",},
    {name : "logger", type: "text", title :  "logger function", placeholder :  "console.log", id : Math.random()*90000000000, value:"",}
  ];
  type2.fields = [
    {name : "customCommandsDir", type: "text", title : "command Dir", placeholder : "Path/to/custom/commands/folder", id : Math.random()*90000000000, value:"",},
    {name : "packageInstallerCommand", type: "text", title :  "installer command", placeholder :  "npm install ", id : Math.random()*90000000000, value:"",},
    {name : "logger", type: "text", title :  "logger function", placeholder :  "console.log", id : Math.random()*90000000000, value:"",}
  ];