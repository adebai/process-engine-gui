import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import MindElixir, { E } from "mind-elixir";
import { Menu, MenuView } from './plugin/menu/Init'



class App extends React.Component {
  componentDidMount() {
    let select = document.getElementById("selectAction");
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
        extend: [
          {
            name: "Condition",
            onclick: () => {
              let node = this.ME.currentNode;
              let before = this.ME.newTopicName;
              if(node.nodeObj.type && (node.nodeObj.type == PE_CONDITION)){
                console.log("Conditional node that has conditional parent encountered;;;")
                document.getElementsByTagName("cmenu").item(0).click();
                globalThis.showTooltip(node, { notConditioned : true, tooltipText : "conditions can only be grandchild"});
                return true;
              }
              // node.style.backgroundImage = `url(${select.value})`;
              document.getElementsByTagName("cmenu").item(0).click();
              let nodeId = ('b' + (Math.random()*9999999999)).replace('.', '');
              let nodeId2 = ('b' + (Math.random()*9999999999)).replace('.', '');
              let nodeId3 = ('b' + (Math.random()*9999999999)).replace('.', '');
              // console.log(E(nodeId)); return;
              globalThis.ME.selectNode(node);
              this.ME.newTopicName = "Condition";
              this.ME.addChild(E(nodeId));
              globalThis.ME.selectNode(E(nodeId));
              globalThis.curNode.dataRoot = true;
              globalThis.curNode.style = globalThis.curNode.style ?? {};
              globalThis.curNode.style.background = `#ffd600`;
              this.ME.updateNodeStyle(globalThis.curNode);
              globalThis.curNode.type = globalThis.PE_CONDITION;
              nodeId = globalThis.curNode.id;
              this.ME.newTopicName = "If";
              this.ME.addChild(E(nodeId2));
              globalThis.curNode.style = globalThis.curNode.style ?? {};
              globalThis.curNode.style.background = `#38f938`;
              this.ME.updateNodeStyle(globalThis.curNode);
              globalThis.curNode.type = globalThis.PE_CONDITIONCHILD;
              nodeId2 = globalThis.curNode.id;
              this.ME.selectNode(E(nodeId));
              this.ME.newTopicName = "Else";
              this.ME.addChild(E(nodeId3));
              this.ME.selectNode(E(nodeId3));
              globalThis.curNode.type = globalThis.PE_CONDITIONCHILD;
              globalThis.curNode.style = globalThis.curNode.style ?? {};
              globalThis.curNode.style.background = `#fc3737`;
              globalThis.curNode.style.color = `#e6e6e6`;
              this.ME.updateNodeStyle(globalThis.curNode);
              nodeId3 = globalThis.curNode.id;
              this.ME.newTopicName = before;
              return true;
            }
          },
          {
            name: "Loop",
            onclick: () => {
              let node = this.ME.currentNode;
              let before = this.ME.newTopicName;
              if(node.nodeObj.type && (node.nodeObj.type == PE_CONDITION)){
                console.log("Loop node that has looped parent encountered;;;")
                document.getElementsByTagName("cmenu").item(0).click();
                globalThis.showTooltip(node, { notConditioned : true, tooltipText : "Loops can only be a grandchild"});
                return true;
              }
              document.getElementsByTagName("cmenu").item(0).click();
              let nodeId = ('b' + (Math.random()*9999999999)).replace('.', '');
              let nodeId2 = ('b' + (Math.random()*9999999999)).replace('.', '');
              let nodeId3 = ('b' + (Math.random()*9999999999)).replace('.', '');
              globalThis.ME.selectNode(node);
              this.ME.newTopicName = "Loop";
              this.ME.addChild(E(nodeId));
              globalThis.ME.selectNode(E(nodeId));
              globalThis.curNode.dataRoot = true;
              globalThis.curNode.style = globalThis.curNode.style ?? {};
              globalThis.curNode.style.background = `#7e00fe`;
              globalThis.curNode.style.color = `#e6e6e6`;
              globalThis.curNode.type = globalThis.PE_LOOP;
              this.ME.newTopicName = before;
              this.ME.updateNodeStyle(globalThis.curNode);
              return true;
            }
          },
          {
            name: "Event Emitter",
            onclick: () => {
              let node = this.ME.currentNode;
              let before = this.ME.newTopicName;
              if(node.nodeObj.type && (node.nodeObj.type == PE_EVENTEMITTER || node.nodeObj.type == PE_EVENTRECEIVER)){
                console.log("Event emitter node that has event parent encountered;;;")
                document.getElementsByTagName("cmenu").item(0).click();
                globalThis.showTooltip(node, { notConditioned : true, tooltipText : "Events can only be a grandchild"});
                return true;
              }
              document.getElementsByTagName("cmenu").item(0).click();
              let nodeId = ('b' + (Math.random()*9999999999)).replace('.', '');
              globalThis.ME.selectNode(node);
              this.ME.newTopicName = "Event Emitter";
              this.ME.addChild(E(nodeId));
              globalThis.ME.selectNode(E(nodeId));
              globalThis.curNode.dataRoot = true;
              globalThis.curNode.style = globalThis.curNode.style ?? {};
              globalThis.curNode.style.background = `#fe9d00`;
              globalThis.curNode.type = globalThis.PE_EVENTEMITTER;
              this.ME.newTopicName = before;
              this.ME.updateNodeStyle(globalThis.curNode);
              return true;
            }
          },
          {
            name: "Event Receiver",
            onclick: () => {
              let node = this.ME.currentNode;
              let before = this.ME.newTopicName;
              if(node.nodeObj.type && (node.nodeObj.type == PE_EVENTEMITTER || node.nodeObj.type == PE_EVENTRECEIVER)){
                console.log("Event receiver node that has event parent encountered;;;")
                document.getElementsByTagName("cmenu").item(0).click();
                globalThis.showTooltip(node, { notConditioned : true, tooltipText : "Events can only be a grandchild"});
                return true;
              }
              document.getElementsByTagName("cmenu").item(0).click();
              let nodeId = ('b' + (Math.random()*9999999999)).replace('.', '');
              globalThis.ME.selectNode(node);
              this.ME.newTopicName = "Event Receiver";
              this.ME.addChild(E(nodeId));
              globalThis.ME.selectNode(E(nodeId));
              globalThis.curNode.dataRoot = true;
              globalThis.curNode.style = globalThis.curNode.style ?? {};
              globalThis.curNode.style.background = `#0022fe`;
              globalThis.curNode.style.color = `#e6e6e6`;
              this.ME.currentNode.style.backgroundColor = `#0022fe`;
              this.ME.currentNode.style.color = `#e6e6e6`;
              globalThis.curNode.type = globalThis.PE_EVENTRECEIVER;
              this.ME.newTopicName = before;
              this.ME.updateNodeStyle(globalThis.curNode);
              return true;
            }
          },
          {
            name: "Process Block",
            onclick: () => {
              let node = this.ME.currentNode;
              let before = this.ME.newTopicName;
              document.getElementsByTagName("cmenu").item(0).click();
              let nodeId = ('b' + (Math.random()*9999999999)).replace('.', '');
              globalThis.ME.selectNode(node);
              this.ME.newTopicName = "Process Block";
              this.ME.addChild(E(nodeId));
              globalThis.ME.selectNode(E(nodeId));
              globalThis.curNode.dataRoot = true;
              globalThis.curNode.style = globalThis.curNode.style ?? {};
              globalThis.curNode.style.background = `#fe00d5`;
              globalThis.curNode.style.color = `#e6e6e6`;
              globalThis.curNode.type = globalThis.PE_EXPRESSION;
              this.ME.newTopicName = before;
              this.ME.updateNodeStyle(globalThis.curNode);
              return true;
            }
          },
        ]
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
          if (this.currentNode.nodeObj.parent.root ) {
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
      this.ME.insertParent = function(){
        let par = globalThis.ME.currentNode.getAttribute('data-nodeid');
        let parEl = document.querySelector('[data-nodeid="'+ par+'"]');
        let me = E(par.replace('me', ''));
        console.log(me);
        if(me.hasAttribute('parent') && me.parent.hasAttribute('dataRoot')){
          return window.ME.RinsertParent();
        }
        else 
        globalThis.showTooltip(globalThis.ME.currentNode, { notConditioned : true, tooltipText : "You can't add parents here.."});
      }
    console.log("did mount");
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
