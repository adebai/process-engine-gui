import React, { useState } from "react";
import { render, ReactDom } from "react-dom";
import SelectAction from "./SelectAction";
import Input from "./Input";
import * as types from "./../settings/types";
import { watch } from "less";
let formerData = {};
const EditMenuComponent = ({setData}) => {
  const [nv, setNv] = useState({
    "id": "317f6c2b2ac27140",
    "topic": "Default Intent",
    "root": true,
    "children": [],
    "data": {
      "name": "new",
      "nodeType": "new",
    }
  });
  setData(nv, setNv);
  const [command, setCommand] = useState();
  console.log("Changing...");

  let activeType = (nv?.type == 1) ? types.tCondition : 
    (nv?.type == 11) ? types.tIf :
    (nv?.type == 12) ? types.tElseIf :
    (nv?.type == 13) ? types.tElse :
    (nv?.type == 2) ? types.tLoop : 
    (nv?.type == 3) ? types.tEvent :
    (nv?.type == 31) ? types.tEventEmitter :
    (nv?.type == 32) ? types.tEventReceiver :
    (nv?.type == 4) ? types.tExpression :
    types.type2;
  let onchanged = function(e){
    console.log(e);
    globalThis.curNode.data.value = e.target.value;
    return setCommand(e.target.value);
  };
    return (
        <>
    <div className="editmenu">
      <div className="phone">
        <div className="topbar">
          <h3>{ "" + nv.data.nodeType[0].toUpperCase() + nv.data.nodeType.slice(1) }</h3>
        </div>
        <div className="item">
          <div className="check">
            <div className="bg"></div>
            <svg width="32" height="32">
              <g fill="#FFFFFF">
                <path d="M8.48499124,6.449827 C8.48499124,6.449827 6.42021586,5.43771624 5.4369895,6.449827 C4.45376313,7.46193776 5.4369895,9.58737036 5.4369895,9.58737036 L14.5809947,17.9541526 C14.5809947,17.9541526 15.5826082,19 15.5969949,19 C16.5986087,19 17.6289965,17.9541526 17.6289965,17.9541526 L25.7570011,9.58737036 C25.7570011,9.58737036 26.3037486,7.01263642 25.7570011,6.449827 C25.2102536,5.88701759 22.7089994,6.449827 22.7089994,6.449827 L15.5969953,13.7707615 L8.48499124,6.449827 Z">
                  <animate fill="freeze" attributeName="d" begin="indefinite" dur="200ms" to="M8.48499124,6.449827 C8.48499124,6.449827 6.42021586,5.43771624 5.4369895,6.449827 C4.45376313,7.46193776 5.4369895,9.58737036 5.4369895,9.58737036 L14.5809947,17.9541526 C14.5809947,17.9541526 15.5826082,19 15.5969949,19 C16.5986087,19 17.6289965,17.9541526 17.6289965,17.9541526 L25.7570011,9.58737036 C25.7570011,9.58737036 26.3037486,7.01263642 25.7570011,6.449827 C25.2102536,5.88701759 22.7089994,6.449827 22.7089994,6.449827 L15.5969953,13.7707615 L8.48499124,6.449827 Z" />
                  <animate fill="freeze" attributeName="d" begin="indefinite" dur="200ms" to="M2.87499998,10.0000003 C2.87499998,10.0000003 0.999999989,11.1094933 1,12.2292387 C1.00000001,13.2292383 2.875,14.1833914 2.875,14.1833914 L14.6696825,14.1833913 C14.6696825,14.1833913 15.9865124,14.1833916 16,14.1833916 C16.939013,14.1833916 17.5271842,14.1833913 17.5271842,14.1833913 L30.0625,14.1833916 C30.0625,14.1833916 31,13.2292387 31,12.2292383 C31,11.2292379 29.125,10 29.125,10 L15.6221831,10.0000002 L2.87499998,10.0000003 Z" />
                </path>
              </g>
            </svg>	
          </div>
          
          <div className="button"></div>
          <div className="content slideRight">
            <div className="title">{ nv.topic }</div>
            <div className="details">
              <div className="c">
                <div className="n">{nv.children ? nv.children.length : 0}</div>
                <div className="label">{ (nv.data.nodeType == "intent" ? "Processes" : (nv.data.nodeType == "process" ? "Statements" : "Statements")) || "Child Nodes" }</div>
              </div>
              <div className="c">
                <div className="n">{nv.data.status || "Clean"}</div>
                <div className="label">Status</div>
              </div>
              <div className="c">
                <div className="n">{nv.data.plugin || "None"}</div>
                <div className="label">Plugin</div>
              </div>
              <div id="inputs">
                {nv.root ?
                <>
                  
                </>
                  : (
                    nv.parent.dataRoot === true ?
                    <>
                      <h3 style={{ marginBottom: 0,}}>Edit { activeType.name } <small style={{"color":"#FFFFFF7A",}}> <img title="scroll down" className="can-show-tooltip down-arrow animated bounce" src="down-arrow.svg" /> </small></h3>
                        {activeType?.description ?
                            <details style={{fontSize: "60%", padding: "5px", }}>
                              <summary> Help
                              </summary>
                              {activeType?.description}
                            </details>
                          : <></>
                        }
                      <div className="input-cont">
                        {
                          activeType.fields.map((opt) => {
                            if(typeof(opt) == "object")
                            return <Input data= { globalThis.curNode.data } key={ opt.id } nodeid = { nv.id } type= { opt.type } name = { opt.name } title={ opt.title } placeholder = { opt.placeholder} onchanged={ onchanged } value= { nv.data[opt.name] || "" } />
                          })
                        }
                      </div>
                    </> 
                    : 
                    <>
                      
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
        </>
    )
}

export const EditMenu = EditMenuComponent;
