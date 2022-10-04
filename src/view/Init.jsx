import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import MindElixir, { E } from "mind-elixir";
import { Menu, MenuView } from './plugin/menu/Init';
import { constructTypes } from './plugin/settings/constructTypes';
import { handleKeyboardEvent } from './plugin/settings/handleKeyboardEvent';



class App extends React.Component {
  componentDidMount() {
    let select = document.getElementById("selectAction");
    const handler = new handleKeyboardEvent();
    document.body.addEventListener('keydown', handler.emit);
    document.body.addEventListener('keypress', handler.emit);
    document.body.addEventListener('keyup', handler.emit);
    this.ME = new MindElixir({
      el: "#map",
      direction: MindElixir.LEFT,
      draggable: true, // default true
      allowUndo: false, // default true
      allowRedo: false, // default true
      contextMenu: true, // default true
      toolBar: true, // default true
      keypress: true, // default true // default 65
      nodeMenu: false, // default true // default 65
      contextMenuOption: {
        focus: true,
        link: true,
        insertParent: false,
        extend: constructTypes
      },
      before: {
        insertSibling(el, obj) {
          console.log("el, obj")
          console.log(el, obj)
          return false;
          if (this.currentNode.nodeObj.parent.root) {
            return false
          }
        },
        async addChild(el, obj) {
          console.log("el, obj")
          console.log(el, obj)
          // await sleep()
          return false
          if (this.currentNode.nodeObj.parent.root) {
            return false
          }
        },
      }
    });
    this.ME.RinsertParent = this.ME.insertParent;
    window.ME = this.ME;
    this.ME.install(Menu);
    // this.ME.bus.addListener('selectNode', function(nodeObj, clickEv){
    //     console.log(nodeObj, clickEv);
    // })
    this.ME.init(MindElixir.new("New Intent"));
    this.ME.nodeData.dataRoot = true;
    globalThis.ME = this.ME;
    globalThis.EE = E;
    console.log(globalThis.ME);
    this.ME.insertParent = function () {
      let par = globalThis.ME.currentNode.getAttribute('data-nodeid');
      let parEl = document.querySelector('[data-nodeid="' + par + '"]');
      let me = E(par.replace('me', ''));
      console.log(me);
      if (me.hasAttribute('parent') && me.parent.hasAttribute('dataRoot')) {
        return window.ME.RinsertParent();
      }
      else
        globalThis.showTooltip(globalThis.ME.currentNode, { notConditioned: true, tooltipText: "You can't add parents here.." });
    }
    console.log("did mount");
    globalThis.replacer = () => {
      const visited = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (visited.has(value)) {
            return;
          }
          visited.add(value);
        }
        return value;
      };
    };
    globalThis.generateJSON = (nodeObj) => {
      return JSON.stringify(nodeObj, globalThis.replacer());
    }
    globalThis.exportData = async () => {
      let mind = globalThis.ME;
      let data = (mind.getAllData()).nodeData;
      // console.log(data);
      globalThis.exportedData = {};
      globalThis.exportedData[data.id + '-' + data.topic] = {};
      await addProcessToData(mind, data).then((e)=>{
        console.log(e);
        alert("data is ready!");
      });
      return true;
    };
    globalThis.addProcessToData = async (mind, data) => {
      // console.log(data.children);
      // return;
      await data.children.forEach((e) => {
        globalThis.exportedData[data.id + '-' + data.topic][e.id + '-' + e.topic] = {};
        globalThis.exportedData[data.id + '-' + data.topic][e.id + '-' + e.topic].id = e.id;
        globalThis.exportedData[data.id + '-' + data.topic][e.id + '-' + e.topic].type = e.type;
        let keys = Object.keys(e.data);
        keys.forEach((key) => {
          if (key.charAt(0) != "_") {
            globalThis.exportedData[data.id + '-' + data.topic][e.id + '-' + e.topic][key] = e.data[key];
          }
        });
        if(e.children != undefined){
          let processes = [];
          e.children.forEach((f)=> {
            if(f.hasOwnProperty('dataRoot')){
              processes.push(f);
            } else {
              let step = addStepsToProcess(data, globalThis.exportedData[data.id + '-' + data.topic][e.id + '-' + e.topic],f , globalThis.exportedData);
              globalThis.exportedData[data.id + '-' + data.topic][e.id + '-' + e.topic][step.id + '-' + step.topic] = step.data;
            }
          });
          if(processes.length > 0){
            addProcessToData(mind, data, globalThis.exportedData);
          }
        }
      });
      return globalThis.exportedData;
    }
    globalThis.addStepsToProcess = (data, process, stepData) => {
      let step = {};
      step.topic = stepData.topic;
      step.data = stepData.data || {};
      step.id = step.data.id = stepData.id;
      step.data.type = stepData.type;
      return step;
    }
    
  }
  render() {
    return <>
      <div id="map" />
      <div id="plugins">
        <MenuView />
      </div>
    </>
  }
}

let root = createRoot(document.getElementById("root"));
root.render(<App />);
