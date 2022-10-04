import { handleKeyboardEvent } from "./handleKeyboardEvent";

globalThis.handler = new handleKeyboardEvent();
globalThis.handler.register('keypress', 'C+O+D', createCondition);

  /**
   * Creates condition node with node type `process` and an if and else node also with node type `process`. Additional child to the condition node will modify the children to make them if, else if(s) and else respectively.
   * 
   * @returns bool
   */
  function createCondition() {
  let node = globalThis.ME.currentNode;
  let before = globalThis.ME.newTopicName;
  if (node.nodeObj.type && (node.nodeObj.type == PE_CONDITION)) {
    console.log("Conditional node that has conditional parent encountered;;;");
    document.getElementsByTagName("cmenu").item(0).click();
    globalThis.showTooltip(node, { notConditioned: true, tooltipText: "conditions can only be grandchild" });
    return true;
  }
  // node.style.backgroundImage = `url(${select.value})`;
  document.getElementsByTagName("cmenu").item(0).click();
  let nodeId = ('b' + (Math.random() * 9999999999)).replace('.', '');
  let nodeId2 = ('b' + (Math.random() * 9999999999)).replace('.', '');
  let nodeId3 = ('b' + (Math.random() * 9999999999)).replace('.', '');
  // console.log(E(nodeId)); return;
  globalThis.ME.selectNode(node);
  globalThis.ME.newTopicName = "Condition";
  globalThis.ME.addChild(E(nodeId));
  globalThis.ME.selectNode(E(nodeId));
  globalThis.curNode.dataRoot = true;
  globalThis.curNode.data = globalThis.curNode.data ?? {};
  globalThis.curNode.data.nodeType = "process";
  globalThis.curNode.style = globalThis.curNode.style ?? {};
  globalThis.curNode.style.background = `#ffd600`;
  globalThis.ME.updateNodeStyle(globalThis.curNode);
  globalThis.curNode.type = globalThis.PE_CONDITION;
  nodeId = globalThis.curNode.id;
  globalThis.ME.newTopicName = "If";
  globalThis.ME.addChild(E(nodeId2));
  globalThis.curNode.style = globalThis.curNode.style ?? {};
  globalThis.curNode.style.background = `#38f938`;
  globalThis.ME.updateNodeStyle(globalThis.curNode);
  globalThis.curNode.type = globalThis.PE_CONDITIONCHILD;
  nodeId2 = globalThis.curNode.id;
  globalThis.ME.selectNode(E(nodeId));
  globalThis.ME.newTopicName = "Else";
  globalThis.ME.addChild(E(nodeId3));
  globalThis.ME.selectNode(E(nodeId3));
  globalThis.curNode.type = globalThis.PE_CONDITIONCHILD;
  globalThis.curNode.style = globalThis.curNode.style ?? {};
  globalThis.curNode.style.background = `#fc3737`;
  globalThis.curNode.style.color = `#e6e6e6`;
  globalThis.ME.updateNodeStyle(globalThis.curNode);
  nodeId3 = globalThis.curNode.id;
  globalThis.ME.newTopicName = before;
  return true;
}

  /**
   * Creates a loop node with type `process`. Loops can contain any type of child except intents.
   * @returns bool
   */
const createLoop = () => {
    let node = globalThis.ME.currentNode;
    let before = globalThis.ME.newTopicName;
    if (node.nodeObj.type && (node.nodeObj.type == PE_CONDITION)) {
      console.log("Loop node that has looped parent encountered;;;")
      document.getElementsByTagName("cmenu").item(0).click();
      globalThis.showTooltip(node, { notConditioned: true, tooltipText: "Loops can only be a grandchild" });
      return true;
    }
    document.getElementsByTagName("cmenu").item(0).click();
    let nodeId = ('b' + (Math.random() * 9999999999)).replace('.', '');
    let nodeId2 = ('b' + (Math.random() * 9999999999)).replace('.', '');
    let nodeId3 = ('b' + (Math.random() * 9999999999)).replace('.', '');
    globalThis.ME.selectNode(node);
    globalThis.ME.newTopicName = "Loop";
    globalThis.ME.addChild(E(nodeId));
    globalThis.ME.selectNode(E(nodeId));
    globalThis.curNode.dataRoot = true;
    globalThis.curNode.data = globalThis.curNode.data ?? {};
    globalThis.curNode.data.nodeType = "process";
    globalThis.curNode.style = globalThis.curNode.style ?? {};
    globalThis.curNode.style.background = `#7e00fe`;
    globalThis.curNode.style.color = `#e6e6e6`;
    globalThis.curNode.type = globalThis.PE_LOOP;
    globalThis.ME.newTopicName = before;
    globalThis.ME.updateNodeStyle(globalThis.curNode);
    return true;
  };


  const createEventEmitter = () => {
    let node = globalThis.ME.currentNode;
    let before = globalThis.ME.newTopicName;
    if (node.nodeObj.type && (node.nodeObj.type == globalThis.PE_EVENTCHILDEMITTER || node.nodeObj.type == globalThis.PE_EVENTCHILDEMITTER)) {
      console.log("Event emitter node that has event parent encountered;;;")
      document.getElementsByTagName("cmenu").item(0).click();
      globalThis.showTooltip(node, { notConditioned: true, tooltipText: "Events can only be a grandchild" });
      return true;
    }
    document.getElementsByTagName("cmenu").item(0).click();
    let nodeId = ('b' + (Math.random() * 9999999999)).replace('.', '');
    globalThis.ME.selectNode(node);
    globalThis.ME.newTopicName = "Event Emitter";
    globalThis.ME.addChild(E(nodeId));
    globalThis.ME.selectNode(E(nodeId));
    globalThis.curNode.dataRoot = true;
    globalThis.curNode.data = globalThis.curNode.data ?? {};
    globalThis.curNode.data.nodeType = "process";
    globalThis.curNode.style = globalThis.curNode.style ?? {};
    globalThis.curNode.style.background = `#fe9d00`;
    globalThis.curNode.type = globalThis.PE_EVENTCHILDEMITTER;
    globalThis.ME.newTopicName = before;
    globalThis.ME.updateNodeStyle(globalThis.curNode);
    return true;
  };




  const createEventReceiver = () => {
    let node = globalThis.ME.currentNode;
    let before = globalThis.ME.newTopicName;
    if (node.nodeObj.type && (node.nodeObj.type == globalThis.PE_EVENTCHILDRECEIVER || node.nodeObj.type == globalThis.PE_EVENTCHILDRECEIVER)) {
      console.log("Event receiver node that has event parent encountered;;;")
      document.getElementsByTagName("cmenu").item(0).click();
      globalThis.showTooltip(node, { notConditioned: true, tooltipText: "Events can only be a grandchild" });
      return true;
    }
    document.getElementsByTagName("cmenu").item(0).click();
    let nodeId = ('b' + (Math.random() * 9999999999)).replace('.', '');
    globalThis.ME.selectNode(node);
    globalThis.ME.newTopicName = "Event Receiver";
    globalThis.ME.addChild(E(nodeId));
    globalThis.ME.selectNode(E(nodeId));
    globalThis.curNode.dataRoot = true;
    globalThis.curNode.data = globalThis.curNode.data ?? {};
    globalThis.curNode.data.nodeType = "process";
    globalThis.curNode.style = globalThis.curNode.style ?? {};
    globalThis.curNode.style.background = `#0022fe`;
    globalThis.curNode.style.color = `#e6e6e6`;
    globalThis.ME.currentNode.style.backgroundColor = `#0022fe`;
    globalThis.ME.currentNode.style.color = `#e6e6e6`;
    globalThis.curNode.type = globalThis.PE_EVENTCHILDRECEIVER;
    globalThis.ME.newTopicName = before;
    globalThis.ME.updateNodeStyle(globalThis.curNode);
    return true;
  };




const createProcessBlock = () => {
    let node = globalThis.ME.currentNode;
    let before = globalThis.ME.newTopicName;
    document.getElementsByTagName("cmenu").item(0).click();
    let nodeId = ('b' + (Math.random() * 9999999999)).replace('.', '');
    globalThis.ME.selectNode(node);
    globalThis.ME.newTopicName = "Process Block";
    globalThis.ME.addChild(E(nodeId));
    globalThis.ME.selectNode(E(nodeId));
    globalThis.curNode.dataRoot = true;
    globalThis.curNode.data = globalThis.curNode.data ?? {};
    globalThis.curNode.data.nodeType = "process";
    globalThis.curNode.style = globalThis.curNode.style ?? {};
    globalThis.curNode.style.background = `#fe00d5`;
    globalThis.curNode.style.color = `#e6e6e6`;
    globalThis.curNode.type = globalThis.PE_EXPRESSION;
    globalThis.ME.newTopicName = before;
    globalThis.ME.updateNodeStyle(globalThis.curNode);
    return true;
  };




  const constructTypes = [
    {
      name: "Condition",
      onclick: createCondition
    },
    {
      name: "Loop",
      onclick: createLoop
    },
    {
      name: "Event Emitter",
      onclick: createEventEmitter
    },
    {
      name: "Event Receiver",
      onclick: createEventReceiver
    },
    {
      name: "Process Block",
      onclick: createProcessBlock
    },
  ];


  export { constructTypes, createCondition, createEventEmitter, createEventReceiver, createLoop, createProcessBlock }