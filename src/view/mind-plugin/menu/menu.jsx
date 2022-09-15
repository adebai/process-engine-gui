// "use strict";
// exports.__esModule = true;
var styleFile = require("./menu.less");
var i18n_1 = require("./i18n");
var createDiv = function (id, innerHTML) {
    var div = document.createElement('div');
    div.id = id;
    div.innerHTML = innerHTML;
    return div;
};
var colorList = [
    '#2c3e50',
    '#34495e',
    '#7f8c8d',
    '#94a5a6',
    '#bdc3c7',
    '#ecf0f1',
    '#8e44ad',
    '#9b59b6',
    '#2980b9',
    '#3298db',
    '#c0392c',
    '#e74c3c',
    '#d35400',
    '#f39c11',
    '#f1c40e',
    '#17a085',
    '#27ae61',
    '#2ecc71',
];
function default_1(mind) {
    function clearSelect(klass, remove) {
        var elems = mind.container.querySelectorAll(klass);
        [].forEach.call(elems, function (el) {
            el.classList.remove(remove);
        });
    }
    // create element
    var locale = i18n_1["default"][mind.locale] ? mind.locale : 'en';
    var styleDiv = createDiv('nm-style', "\n  <div class=\"nm-fontsize-container\">\n    " + ['15', '24', '32']
        .map(function (size) {
        return "<div class=\"size\"  data-size=\"" + size + "\">\n    <svg class=\"icon\" style=\"width: " + size + "px;height: " + size + "px\" aria-hidden=\"true\">\n      <use xlink:href=\"#icon-a\"></use>\n    </svg></div>";
    })
        .join('') + "<div class=\"bold\"><svg class=\"icon\" aria-hidden=\"true\">\n<use xlink:href=\"#icon-B\"></use>\n</svg></div>\n  </div>\n  <div class=\"nm-fontcolor-container\">\n    " + colorList
        .map(function (color) {
        return "<div class=\"split6\"><div class=\"palette\" data-color=\"" + color + "\" style=\"background-color: " + color + ";\"></div></div>";
    })
        .join('') + "\n  </div>\n  <div class=\"bof\">\n  <span class=\"font\">" + i18n_1["default"][locale].font + "</span>\n  <span class=\"background\">" + i18n_1["default"][locale].background + "</span>\n  </div>");
    var tagDiv = createDiv('nm-tag', i18n_1["default"][locale].tag + "<input class=\"nm-tag\" tabindex=\"-1\" placeholder=\"" + i18n_1["default"][locale].tagsSeparate + "\" />");
    var iconDiv = createDiv('nm-icon', i18n_1["default"][locale].icon + "<input class=\"nm-icon\" tabindex=\"-1\" placeholder=\"" + i18n_1["default"][locale].iconsSeparate + "\" />");
    var urlDiv = createDiv('nm-url', i18n_1["default"][locale].url + "<input class=\"nm-url\" tabindex=\"-1\" />");
    var memoDiv = createDiv('nm-memo', (i18n_1["default"][locale].memo || 'Memo') + "<textarea class=\"nm-memo\" rows=\"5\" tabindex=\"-1\" />");
    // create container
    var menuContainer = document.createElement('nmenu');
    menuContainer.innerHTML = "\n  <div class=\"button-container\"><svg class=\"icon\" aria-hidden=\"true\">\n  <use xlink:href=\"#icon-close\"></use>\n  </svg></div>\n  ";
    menuContainer.appendChild(styleDiv);
    menuContainer.appendChild(tagDiv);
    menuContainer.appendChild(iconDiv);
    menuContainer.appendChild(urlDiv);
    menuContainer.appendChild(memoDiv);
    menuContainer.hidden = true;
    mind.container.append(menuContainer);
    // query input element
    var sizeSelector = menuContainer.querySelectorAll('.size');
    var bold = menuContainer.querySelector('.bold');
    var buttonContainer = menuContainer.querySelector('.button-container');
    var fontBtn = menuContainer.querySelector('.font');
    var tagInput = mind.container.querySelector('.nm-tag');
    var iconInput = mind.container.querySelector('.nm-icon');
    var urlInput = mind.container.querySelector('.nm-url');
    var memoInput = mind.container.querySelector('.nm-memo');
    // handle input and button click
    var bgOrFont;
    menuContainer.onclick = function (e) {
        if (!mind.currentNode)
            return;
        var nodeObj = mind.currentNode.nodeObj;
        var target = e.target;
        if (target.className === 'palette') {
            if (!nodeObj.style)
                nodeObj.style = {};
            clearSelect('.palette', 'nmenu-selected');
            target.className = 'palette nmenu-selected';
            if (bgOrFont === 'font') {
                nodeObj.style.color = target.dataset.color;
            }
            else if (bgOrFont === 'background') {
                nodeObj.style.background = target.dataset.color;
            }
            mind.updateNodeStyle(nodeObj);
        }
        else if (target.className === 'background') {
            clearSelect('.palette', 'nmenu-selected');
            bgOrFont = 'background';
            target.className = 'background selected';
            target.previousElementSibling.className = 'font';
            if (nodeObj.style && nodeObj.style.background) {
                menuContainer.querySelector('.palette[data-color="' + nodeObj.style.background + '"]').className = 'palette nmenu-selected';
            }
        }
        else if (target.className === 'font') {
            clearSelect('.palette', 'nmenu-selected');
            bgOrFont = 'font';
            target.className = 'font selected';
            target.nextElementSibling.className = 'background';
            if (nodeObj.style && nodeObj.style.color) {
                menuContainer.querySelector('.palette[data-color="' + nodeObj.style.color + '"]').className = 'palette nmenu-selected';
            }
        }
    };
    Array.from(sizeSelector).map(function (dom) {
        dom.onclick = function (e) {
            if (!mind.currentNode.nodeObj.style)
                mind.currentNode.nodeObj.style = {};
            clearSelect('.size', 'size-selected');
            var size = e.currentTarget;
            mind.currentNode.nodeObj.style.fontSize = size.dataset.size;
            size.className = 'size size-selected';
            mind.updateNodeStyle(mind.currentNode.nodeObj);
        };
    });
    bold.onclick = function (e) {
        if (!mind.currentNode.nodeObj.style)
            mind.currentNode.nodeObj.style = {};
        if (mind.currentNode.nodeObj.style.fontWeight === 'bold') {
            delete mind.currentNode.nodeObj.style.fontWeight;
            e.currentTarget.className = 'bold';
            mind.updateNodeStyle(mind.currentNode.nodeObj);
        }
        else {
            mind.currentNode.nodeObj.style.fontWeight = 'bold';
            e.currentTarget.className = 'bold size-selected';
            mind.updateNodeStyle(mind.currentNode.nodeObj);
        }
    };
    tagInput.onchange = function (e) {
        if (!mind.currentNode)
            return;
        if (typeof e.target.value === 'string') {
            var newTags = e.target.value.split(',');
            mind.updateNodeTags(mind.currentNode.nodeObj, newTags.filter(function (tag) { return tag; }));
        }
    };
    iconInput.onchange = function (e) {
        if (!mind.currentNode)
            return;
        if (typeof e.target.value === 'string') {
            var newIcons = e.target.value.split(',');
            mind.updateNodeIcons(mind.currentNode.nodeObj, newIcons.filter(function (icon) { return icon; }));
        }
    };
    urlInput.onchange = function (e) {
        if (!mind.currentNode)
            return;
        mind.updateNodeHyperLink(mind.currentNode.nodeObj, e.target.value);
    };
    memoInput.onchange = function (e) {
        if (!mind.currentNode)
            return;
        mind.currentNode.nodeObj.memo = e.target.value;
    };
    var state = 'open';
    buttonContainer.onclick = function (e) {
        if (state === 'open') {
            state = 'close';
            menuContainer.className = 'close';
            buttonContainer.innerHTML = "<svg class=\"icon\" aria-hidden=\"true\"><use xlink:href=\"#icon-menu\"></use></svg>";
        }
        else {
            state = 'open';
            menuContainer.className = '';
            buttonContainer.innerHTML = "<svg class=\"icon\" aria-hidden=\"true\"><use xlink:href=\"#icon-close\"></use></svg>";
        }
    };
    // handle node selection
    mind.bus.addListener('unselectNode', function () {
        menuContainer.hidden = true;
    });
    mind.bus.addListener('selectNode', function (nodeObj, clickEvent) {
        if (!clickEvent)
            return;
        menuContainer.hidden = false;
        clearSelect('.palette', 'nmenu-selected');
        clearSelect('.size', 'size-selected');
        clearSelect('.bold', 'size-selected');
        bgOrFont = 'font';
        fontBtn.className = 'font selected';
        fontBtn.nextElementSibling.className = 'background';
        if (nodeObj.style) {
            if (nodeObj.style.fontSize) {
                menuContainer.querySelector('.size[data-size="' + nodeObj.style.fontSize + '"]').className = 'size size-selected';
            }
            if (nodeObj.style.fontWeight) {
                menuContainer.querySelector('.bold').className = 'bold size-selected';
            }
            if (nodeObj.style.color) {
                menuContainer.querySelector('.palette[data-color="' + nodeObj.style.color + '"]').className = 'palette nmenu-selected';
            }
        }
        if (nodeObj.tags) {
            tagInput.value = nodeObj.tags.join(',');
        }
        else {
            tagInput.value = '';
        }
        if (nodeObj.icons) {
            iconInput.value = nodeObj.icons.join(',');
        }
        else {
            iconInput.value = '';
        }
        urlInput.value = nodeObj.hyperLink || '';
        memoInput.value = nodeObj.memo || '';
    });
}
export default default_1;
