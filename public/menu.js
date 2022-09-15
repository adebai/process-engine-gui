document.body.addEventListener('click', (e) => {
    let el = e.target;
    let check = getAncestor(el, 'check') || el;
    
    if (!el.classList.contains('button') && !check.classList.contains('check')) {
        return;
    }

    let button = getAncestor(el, 'item').querySelector('.button');
    buttonClickHandler(button);
});

let getAncestor = (el, cls) => {
    if (el.closest) {
        return el.closest('.' + cls);
    } else {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }
};

let buttonClickHandler = (button) => {
    scaleButton(button);
    let contentEl = button.nextElementSibling;
    let svgmenu = contentEl.nextElementSibling;

    contentEl.classList.toggle('slideRight');
    if (contentEl.classList.toggle('slideLeft')) {
        expandMenu(svgmenu);
    } else {
        collapseMenu(svgmenu);
    }
};

let scaleButton = (button) => {
    let check = button.previousElementSibling;
    let animates = check.querySelectorAll('animate');
    
    if (button.classList.contains('expanded')) {
        [button, check].forEach(el => {
            el.classList.remove('expanded');
            setTimeout(() => el.classList.add('collapsed'), 20);
        });

        animates[0].beginElement();
    } else {
        [button, check].forEach(el => {
            el.classList.remove('collapsed');
            setTimeout(() => el.classList.add('expanded'), 20);
        });

        animates[1].beginElement();
    }
};

let expandMenu = (svgmenu) => {
    let animates = svgmenu.querySelectorAll('animate');
    let firstDuration = parseInt(animates[1].getAttribute('dur'));
    let secondDuration = parseInt(animates[2].getAttribute('dur'));

    animates[1].beginElement();
    setTimeout(() => animates[2].beginElement(), firstDuration);
    setTimeout(() => animates[3].beginElement(), firstDuration + secondDuration);
    animateItems(svgmenu, {
        dur: "0.6s",
        keyPoints: "0; 1",
        keySplines: "0.35 0 1 1",
        from: "0",
        to: "360"
    });
};

let collapseMenu = (svgmenu) => {
    let animates = svgmenu.querySelectorAll('animate');
    let firstDuration = parseInt(animates[2].getAttribute('dur'));
    let secondDuration = parseInt(animates[1].getAttribute('dur'));

    animates[2].beginElement();
    setTimeout(() => animates[1].beginElement(), firstDuration);
    setTimeout(() => animates[0].beginElement(), firstDuration + secondDuration);
    animateItems(svgmenu, {
        dur: "0.4s",
        keyPoints: "1; 0",
        keySplines: "0 0 0.65 1",
        from: "360",
        to: "0"
    });
};

let animateItems = (svgmenu, cfg) => {
    let circles = [].slice.call(svgmenu.querySelectorAll('circle'));

    circles.forEach(circle => {
        let animateTransform = circle.querySelector('animateTransform');
        let animateMotion = circle.querySelector('animateMotion');
        
        animateMotion.setAttribute('dur', cfg.dur);
        animateMotion.setAttribute('keyPoints', cfg.keyPoints);
        animateMotion.setAttribute('keySplines', cfg.keySplines);

        animateTransform.setAttribute('dur', cfg.dur);
        animateTransform.setAttribute('from', cfg.from);
        animateTransform.setAttribute('to', cfg.to);

        animateTransform.beginElement();
        animateMotion.beginElement();
    });
};
setTimeout(() => document.querySelector('.button').click(), 1e3);
setTimeout(() => document.querySelector('.button').click(), 3e3);