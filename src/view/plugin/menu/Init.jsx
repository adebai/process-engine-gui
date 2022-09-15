import React from "react";
import { ReactDOM } from "react-dom";
import { EditMenu } from './EditMenu';
import { E } from 'mind-elixir';



export function Menu  (mind) {
    globalThis.PE_CONDITION = 1;
    globalThis.PE_CONDITIONCHILDIF = 11;
    globalThis.PE_CONDITIONCHILDELSEIF = 12;
    globalThis.PE_CONDITIONCHILDELSE = 13;
    globalThis.PE_LOOP = 2;
    globalThis.PE_LOOPCHILD = 21;
    globalThis.PE_EVENT = 3;
    globalThis.PE_EVENTCHILDEMITTER = 31;
    globalThis.PE_EVENTCHILDRECEIVER = 32;
    globalThis.PE_EXPRESSION = 5;
    globalThis.PE_EXPRESSIONCHILD = 51;

    // Menu element
    let MenuEl = document.querySelector(".phone");
    let svgContainer = document.querySelector(".phone > .item");
    let css = `
    <style>
    .tooltip {
      position: absolute;
      top:0;
      left:0;
      display: inline-block;
      border-bottom: 1px dotted black;
    }
    
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      bottom: 150%;
      left: 50%;
      margin-left: -60px;
    }
    
    .tooltip .tooltiptext::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
    </style>
    <style>
    #fullscreen {
      display:none!important;
    }
    #inputs {
        padding-top:40px;
    }
  </style>
    `;
    let svg = '<svg style="position: absolute;top: -82px;left: 0;height: 100%;width: 100%; overflow:visible;">' +
'    <path fill="#E6365F" d="M0,60 L113,60 C113,60 228,59 229,60 C230,61 279,60 300,60 C321,60 371,61 371,60 L371,0 L0,0 L0,60 Z">'+
'        <animate fill="freeze" attributeName="d" begin="indefinite" dur="100ms" to="M0,60 L113,60 C113,60 228,59 229,60 C230,61 279,60 300,60 C321,60 371,61 371,60 L371,0 L0,0 L0,60 Z" />'+
'        <animate fill="freeze" attributeName="d" begin="indefinite" dur="100ms" to="M0,60 L113,60 C113,60 214.336411,103.306838 228,109 C240,114 279,129 300,131 C321,133 371,89 371,82 L371,0 L0,0 L0,60 Z" />' +
'        <animate fill="freeze" attributeName="d" begin="indefinite" dur="200ms" to="M0,60 L85.9157895,60 C85.9157895,60 152,58 204,139 C253.616309,216.286943 281,205 299,209 C317,213 371,184 371,177 L371,0 L0,0 L0,60 Z" />'+
'        <animate fill="freeze" attributeName="d" begin="indefinite" dur="250ms" to="M0,60 L85.9157895,60 C85.9157895,60 159,60 200,139 C241.386531,218.744779 261,222 294,225 C327,228 371,201 371,194 L371,0 L0,0 L0,60 Z" />'+
'    </path>'+
''+
'    <defs>'+
'        <pattern id="image1" width="44" height="44">'+
'            <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAMAAADm86mrAAAAq1BMVEXgFEfjH07kOGDmP2bnKVXpL1vrM1/sSm/uOGLuVnjuZYXwb43xPmjxeZXxucbyrsDzX3/zi6L0lan0m6/0o7T07vP1bI32Q2z3e5n3prj35uv4dZX4rr34ssH4uMb4xNH4ytT4z9j43+b5vMn5v8z6tsb7gpv92+L9/f39///+ytX+ztj+1d3+4Ob+5On+6u7++/3+/fr/6en/7/H/8/X/+Pn//f3//f/////AT4wpAAAB0UlEQVR42pWVa3ebMAyGaWhrAWLltpZubSB0gXQjoR0m8f//ZRvmUKhsLn0/+eCH98iyZBm3X5KCo+WG++R3so1iDxdw8MKSi168iGyYxsHe1+Kz+C8HJnAWSZiIP1k6HOw/Z6FV4YCCg3sSU6p9IDjEtZgWl/wId6pXMcfnmzHuHcW8KnuE48tFLGjHPvBN3tDdN+VDCD3OChL4JfUT+kNl9bhPt2pmmDSv5wg6/GGnHMw0bjJBdGQdbnMNfq3kqnElDoFY5S6eoMUxEavcRYEtzrKV7rXV4l610p3ft7jdDMnaRVLBjXEVdMvkfbgpV+JDmf9gBtWmGMziFr8f/s9MFS+HaHISzOHF7XRtXDnd6q4hwXjjxniVao+aydWne5JHZWoOvv9P5HEikZhqE6nm/YgtDqGKa923IEvMaVa5v+VdRbJylXvFOhyCs9oem0xXkLKbLOp0+OY8NtTc65sPArp34Qfae4/Q47csFUsqrNGzZP9doGt3/IqBX8/STQA9LoUBn6MjJA82zvjzCJVxYMbZWU+ffNQMG/C2XBdIYoN+lGGccgrvcjY9KJn7fOIDe9rGbH4Mo/UzeE7Lokz3oWuhOoZVoYnI0ISlIb+sfxpdHHNJS+qbAAAAAElFTkSuQmCC" width="44" height="44" />'+
'        </pattern>'+
''+
'        <pattern id="image2" width="44" height="44">'+
'            <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAMAAACLUGAGAAAArlBMVEXgFEfjH07kOGDmP2bnKVXpL1vrM1/sSm/uOGLuVnjuZYXwb43xPmjxeZXxucbypr7yrsDzX3/zi6LzydT0lan0m6/0o7T07vP3e5n3prj35uv4rr34ssH4uMb4xNH4ytT4z9j43+b4+Pn5vMn5v8z6+v76///7gpv92+L9/f39//z9///+ztj+1d3+4Ob+5On+6u7++/3+/fr/7/H/8/X/+Pn//f3//f////3///9LRslMAAAB7klEQVR4AaXV+3aTMAAGcChoEhJqwYStdrYg1aEdg8il5v1fTGCruXDhePr9yfmd8CWQxPr4P7lTQ4J8yiIWYkTWNHk8lxfxFp4cMFnQIKqEniQkM5pQaRXvwymNYjGVP/wAxhqXYi4xMvVjLeaTBbrG9UUscaRqVIrlnIjU5CRW0kbwnw5bsZbKu2kw6sHz0aSP5F0zYea8oebravymSWHiOrCczHyYwkH7XBjZ2pY9mkuJBv00MbRlOYm5LM+9hq/6Q863dqdt2nB9+KdeI2X6VZzuqe/02trgkH09KnPKnU5jWfsSugOUcT35Fxeg088/1ZWzDE2/y+mgTodC5vfO1bAdKjWbwNCCRyq3/Qdh6qvKv1FbYq/UFrbXxsdJNlKn2k9f9b29Zlbr3y0DnQb6Ts9dqSNt7BPsNHzR9Ge7dx+G9toCXKPhP2GaTjvr0PgT6t7h/1CXBA86UIu3OxewpBW/Hnae62sVwaChtiuL7Zfbip1jpXfL3vcO5mIy2hwL1OuVLS+Hhrc979WrOgfy9GF8BVdYOatIuowbCtVzECxW53uin7Hg2M6PPGCpe35o5jpTOL4bYFhMtsgxnLyl0KEybfvKwNydBoN91sj+1/qFosXbFeDomJVVXRV5Sj2yfnNDABBCgMB77/m/y1ESIzbGKqIAAAAASUVORK5CYII=" width="44" height="44" />'+
'        </pattern>'+
''+
'        <pattern id="image3" width="44" height="44">'+
'            <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAuCAMAAACPpbA7AAAArlBMVEXgFEfjH07kOGDmP2bnKVXpL1vrM1/sSm/uOGLuVnjuZYXwb43xPmjxeZXyrsDzX3/zi6LzydT0lan0m6/0o7T07vP1bI32Q2z3e5n3prj35uv4rr34ssH4uMb4xNH4ytT4z9j43+b4+Pn5vMn5v8z7gpv8k6n92+L9/f39///+ytX+ztj+1d3+4Ob+5On+6u7++/3+/fr/xtH/6en/7/H/8/X/+Pn//f3//f////9QMYrpAAACA0lEQVR42qWW23KbMBBABdiVxMWoUtoEO7FJHBcnxkBbBOj/f6zUYpwFBG4n54EZmAO7q4UV6Mv/8Xmf+NQ7MM6ZF2Jy0/e/iziX1VHVRVUmmwdM5nz8sJMK8FYlgpIpn3i7Sg0pzhybfSxKZUJuQ5NPX38qM00SkJFPT42aolkfyMDH72qOddD3/adGzZKE0Ce8UvM0Wwx8mqtbVJxcffI0WnVZqwFnevVdObBj5u5HjxCk88mmHzkObISoHJWMOx9n8JVJDzZqcUf+y6HzgwKWZaMLbNztR0f7EbgWW0izZJkpodb3d+BaukAdFn0t+n4ZXnx8hkkG6MpS9GuQQeuDZoEAGov1biiY9is1EQBZd7BtNTf4Kl624qIr23lWAKF9qYYBFqvA0gEimA/X9eaDZbOR+yJXug8M9oZpP+n7x3TVZlF/xaglgOvjXXyyVQPqy2HXRrD4m7qSU91foYwc7yy0gG/6CWvfrZSRzEbOGpxHRPt+ava/YcQG6evvRdRG/+zY8SAd7dPMPERcOAYk+/h+JwJIWNg7/pgPOFW3KAM4rzx5Qy8iH/qEF7N6vcX9+elHs35Mh/PZj2Yi7MLx/Hd+yKnc99S0vxDPvEo5v5/Y77D4Pe7BPiST+yOhPIFl1Pmj68/v19gVv5KyqguZnTYBJv/wP+Dc079gh3z+/+EPDoYbaDLTr/YAAAAASUVORK5CYII=" width="44" height="44" />'+
'        </pattern>'+
'    </defs>'+
''+
'    <circle class="can-show-tooltip" title="Check image" id="icon1" r="22" style="fill: url(#image3);">'+
'        <animateMotion dur="0.6s" begin="indefinite" fill="freeze" repeatCount="1" calcMode="spline" keyTimes="0; 1" keyPoints="0; 1" keySplines="0.35 0 1 1" path="M125,26 C170,26 191,51 222,91 C253,131 269.184608,182.272934 306,185 C333,187 338,177 338,177" rotate="auto" />'+
''+
'        <animateTransform attributeName="transform" calcMode="spline" keyTimes="0; 1" keySplines="0.7 0 1 1" begin="indefinite" dur="0.6s" type="rotate" from="0" to="360" repeatCount="1" />'+
'    </circle>'+
''+
'    <circle class="can-show-tooltip" title="Check image" id="icon2" r="22" style="fill: url(#image2);">'+
'        <animateMotion dur="0.6s" begin="indefinite" fill="freeze" repeatCount="1" calcMode="spline" keyTimes="0; 1" keyPoints="0; 1" keySplines="0.35 0 1 1" path="M125,26 C170,26 191,51 222,91 C244.666619,120.247251 265,174 279,180" rotate="auto" />'+
''+
'        <animateTransform attributeName="transform" calcMode="spline" keyTimes="0; 1" keySplines="0.7 0 1 1" begin="indefinite" dur="0.6s" type="rotate" from="0" to="360" repeatCount="1" />'+
'    </circle>'+
''+
'    <circle class="can-show-tooltip" title="Check image" id="icon3" r="22" style="fill: url(#image1);">'+
'        <animateMotion dur="0.6s" begin="indefinite" fill="freeze" repeatCount="1" calcMode="spline" keyTimes="0; 1" keyPoints="0; 1" keySplines="0.35 0 1 1" path="M125,26 C170,26 189.45981,51.9517711 222,91 C232,103 242,131 242,131" rotate="auto" />'+
''+
'        <animateTransform attributeName="transform" calcMode="spline" keyTimes="0; 1" keySplines="0.7 0 1 1" begin="indefinite" dur="0.6s" type="rotate" from="0" to="360" repeatCount="1" />'+
'    </circle>'+
'</svg>';
document.body.insertAdjacentHTML('beforeend', `
<div class="tooltip">
<span class="tooltiptext">Tooltip text</span>
</div>
`);
svgContainer.insertAdjacentHTML('beforeEnd', svg);
document.head.insertAdjacentHTML('beforeEnd', css);
    setTimeout(()=>{
        let canShowTooltip = document.querySelectorAll('.can-show-tooltip');
        canShowTooltip.forEach(globalThis.showTooltip)
    }, 1000)
globalThis.showTooltip = (e, {notConditioned, tooltipText = "", time = 5000}) => {
    if(undefined == notConditioned) notConditioned = false;
    let tooltip = document.querySelector('.tooltiptext').style;
    let tooltipElement = document.querySelector('.tooltiptext');
    if(!notConditioned){
        e.onmouseover = (ev) => {
            let rect = ev.target.getClientRects().item(0);
            console.log('mouse over!')
            tooltip.top = (rect.y - (((rect.height/2 )))) + 'px';
            tooltip.left = (rect.x + (rect.width/2)) + 'px'; 
            tooltip.zIndex = 1010;
            tooltip.display = 'inline-block';
            tooltip.height = 'fit-content';
            tooltip.visibility = "visible";
            tooltipElement.innerHTML = tooltipText || ev.target.getAttribute("title");
        };
        e.onmouseout = (ev) => {
            let rect = ev.target.getClientRects().item(0);
            tooltip.visibility = "hidden";
        };
    }
    else {
        let rect = e.getClientRects().item(0);
        console.log('mouse over!')
        tooltip.top = (rect.y - ((e.clientHeight >= 50 ? e.clientHeight : (rect.height + (rect.height/2))))) + 'px';
        tooltip.left = (rect.x + (rect.width/2)) + 'px'; 
        tooltip.zIndex = 1010;
        tooltip.display = 'inline-block';
        tooltip.height = 'fit-content';
        tooltip.visibility = "visible";
        tooltipElement.innerHTML = tooltipText || e.getAttribute("title");
        setTimeout(()=>{
            tooltip.visibility = "hidden";
        }, (time || 5000))
    }

};




    mind.bus.addListener('unselectNode', function(nodeObj) {
        // alert("closed");
        // console.log(nodeObj)
        // console.log(nodeObj.id);

        MenuEl.style.display = "none";
        window.curNode = null;
    })
    mind.bus.addListener('selectNode', function(nodeObj, clickEvent) {
        if(!mind.currentNode)mind.selectNode(E(nodeObj.id));
        nodeObj.data = nodeObj.data || {
            "name" : "new",
            "nodeType" : (nodeObj.hasOwnProperty('dataRoot') ? "intent" : (nodeObj.parent.hasOwnProperty('dataRoot') ? "process" : "action")) ?? "action",
        }
        let me = nodeObj;
        if(me.hasOwnProperty('parent') && me?.parent?.hasOwnProperty('dataRoot')){
            console.log("process clicked")
            mind.newTopicName = "New Action";
        }
        else if(me.hasOwnProperty('dataRoot')){
              console.log("intent clicked")
            mind.newTopicName = "New Process";
          }
          else {
            console.log("action clicked");
          }
        globalThis.curNode = nodeObj;
        globalThis.updateState(nodeObj);
        // console.log(nodeObj)
        // if (clickEvent)
        MenuEl.style.display = "block";
      });
    const updateNodes = function(nodeObj, clickEvent, force) {
        nodeObj.data = nodeObj.data || {
            "name" : "new",
            "nodeType" : (nodeObj.hasOwnProperty('dataRoot') ? "intent" : (nodeObj.parent.hasOwnProperty('dataRoot') ? "process" : "action")) ?? "action",
        }
        globalThis.curNode = nodeObj;
        globalThis.updateState(nodeObj, force);
        console.log(nodeObj)
        if (clickEvent)
        return MenuEl.style.display = "block";
      };
      mind.bus.addListener('operation', function(params){
        if(params.name == "addChild")
        {
            mind.selectNode(E(params.obj.id));
            // console.log(params.obj);
            // Check if parent of second level is root
            if(undefined == params.obj.parent)return false;
           if(params.obj.hasOwnProperty('dataRoot') || params.obj.parent.hasOwnProperty('dataRoot') || 
            (params.obj.parent.hasOwnProperty('parent') && params.obj.parent.parent.hasOwnProperty('dataRoot') && params.name == "addChild")
             || (params.obj.parent.hasOwnProperty('parent') && params.name == "insertParent")){
                console.log("Delete not needed.");
                // return false;
        }
        else {
            // console.log(params);
            globalThis.ME.removeNode(E(params.obj.id));
            globalThis.ME.selectNode(E(globalThis.curNode.id))
            globalThis.showTooltip(globalThis.ME.currentNode, { notConditioned : true, tooltipText : "Max depth reached!"});
        }
            console.log(params);
            console.log(params.obj.parent.type);

            // Check if parent is a condition or loop, if true, change subjects to suite the case.
            if(params.obj.parent.type == globalThis.PE_CONDITION){
                console.log("conditional statement encountered.")
                params.obj.type = globalThis.PE_CONDITIONCHILD;
                if(params.obj.parent.children.length >= 3){
                    console.log("condition needs renaming.");
                    if(!params.obj.style)params.obj.style = {};
                    if(!params.obj.parent.children[(params.obj.parent.children.length - 2)].style)params.obj.parent.children[(params.obj.parent.children.length - 2)].style = {};
                    // globalThis.ME.beginEdit(E(params.obj.parent.children[(params.obj.parent.children.length - 2)].id));
                    params.obj.parent.children[(params.obj.parent.children.length - 2)].topic = params.obj.parent.children[(params.obj.parent.children.length - 2)].topic.replace('Else', 'Else if');
                    params.obj.parent.children[(params.obj.parent.children.length - 2)].style.background = "#7a1571";
                    params.obj.topic = "Else";
                    E(params.obj.id).innerHTML = "Else";
                    params.obj.style.background = "#fc3737";
                    params.obj.style.color = "#e6e6e6";
                    mind.updateNodeStyle(params.obj.parent.children[(params.obj.parent.children.length - 2)])
                    mind.updateNodeTags(params.obj.parent.children[(params.obj.parent.children.length - 2)])
                    mind.updateNodeStyle(params.obj)
                    mind.updateNodeTags(params.obj)
                    // globalThis.ME.selectNode(params.obj.id);
                }
            }
            return true;
        }
        if(params.name == "finishEdit"){
            console.log("finished editing");
            updateState(params.obj, true);
            let fId = globalThis.curNode.id;
            globalThis.ME.selectNode(E(globalThis.curNode.parent.id));
            setTimeout(()=>{
                globalThis.ME.selectNode(E(fId));
            }, 1);
        }
      })
}
globalThis.setData = (val, setVal) => {
    globalThis.val = val;
    globalThis.setVal = setVal;
    return true;
}
globalThis.darkMode = ()=>{
    let bg = '#303030';
    let selector = '#map div.map-canvas';
    document.querySelector('#map div.map-canvas').style.backgroundColor = bg;
}
globalThis.lightMode = ()=>{
    let bg = '#f6f6f6';
    let selector = '#map div.map-canvas';
    document.querySelector('#map div.map-canvas').style.backgroundColor = bg;
}
globalThis.toggleLightDark = (ev, span) => {
    if(ev.target.innerHTML == 'Light Mode') {
        span.innerHTML = "Dark Mode";
        console.log("switching to light mode");
        globalThis.lightMode();
    } else {
        span.innerHTML = "Light Mode";
        console.log("switching to dark mode");
        globalThis.darkMode();
    }
}
setTimeout(
    ()=>{
        let selector = document.querySelector('#map > div > toolbar.rb');
        let span = document.createElement('span');
        span.style = 'font-family : -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;';
        span.innerHTML = 'Dark Mode';
        span.id="darkmode";
        span.style.cursor = "pointer";
        span.onclick = (ev) => {
            ev.preventDefault();
            ev.stopImmediatePropagation();
            globalThis.toggleLightDark(ev, span);
        }
        selector.insertAdjacentElement('afterBegin', span);
    }, 2
)
globalThis.updateState = (newState , force) => {
    let val = globalThis.val;
    let setVal = globalThis.setVal;
    // console.warn(val, globalThis.prevData, newState);
    let defaultVal = {
        "id": "317f6c2b2ac27140",
        "topic": "Default Intent",
        "root": true,
        "children": [],
        "data": {
          "name": "new"
        }
      }
      newState = newState;
      if(val == newState && force !== true) {
          console.log("before:", val, "newone:", newState);
          console.log("Update not needed.", force === true, force);
          return true;
        } else {
            console.log("before:", val, "newone:", newState);
            globalThis.setVal((prev) => {
                return newState; 
            });
        }
    console.log("Logging value..");
    // console.log(val);
    return true;
}
export function MenuView () {
    // MenuView.__proto__.setData = "setData";
    let setData = globalThis.setData;
    return <>
        <EditMenu  setData={setData}/>
    </>
    }