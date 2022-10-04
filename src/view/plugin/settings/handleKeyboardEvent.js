
export class handleKeyboardEvent {
    init = () => {
        this.hasInitialized = true;
        this.queueList = this.queueList || [];
        this.registry = this.registry || {};
        globalThis.shortCodes = globalThis.shortCodes || [];
        this.shouldQueue = this.shouldQueue || false;
        this.filteredShortCodes = this.filteredShortCodes || [];
        globalThis.keyPool = globalThis.keyPool || {};
        this.time = 0;
        globalThis.registry = globalThis.registry || [];
    }

    emit = async (event) => {
        if (this.hasInitialized == undefined) {
            this.init();
        }
        if (event.key == "Alt") {
            this.time = Date.now();
            return this.shouldQueue = true;
        }
        else {
            if (!this.registry.hasOwnProperty(event.type)) {
                this.registry = [];
            }
            console.log(this.time, (Date.now() - 5000))
            if (this.shouldQueue == true && this.time >= (Date.now() - 5000)) this.queue(event);
            else if (this.time < (Date.now() - 5000)) {
                console.log("queue timed out");
                this.shouldQueue = false;
                globalThis.keyPool = {};
                this.shouldQueue = false;
                globalThis.shortCodesLeft = undefined;
            }
        }
        // console.log(event);
    }

    queue = (event) => {
        this.event = event;
        console.log("In queue...");
        console.log("registry items:", globalThis.registry);
        globalThis.registry.forEach(this.sortQueue);
    }

    sortQueue = (e) => {
        if (globalThis.shortCodes.includes(this.event.key)) {
            globalThis.shortCodesLeft = globalThis.shortCodesLeft == undefined ? e.code : globalThis.shortCodesLeft;
            globalThis.shortCodesLeft[globalThis.shortCodesLeft.indexOf(this.event.key)] = false;
            globalThis.keyPool[this.event.key] = 1;
        }
        console.log(globalThis.keyPool);
        for (let i in e.code) {
            console.log("In loop");
            if (globalThis.keyPool[e.code[i]]) {
                globalThis.keyPool[e.code[i]] = -1;
                console.log("In if");
                let ready = globalThis.shortCodesLeft.reduce((e, i, a) => {
                    console.log(e, i, a);
                    // return;
                    if (i === false && e === false) return true;
                    else return false;
                })
                console.log("ready: ", ready);
                if (ready === true) {
                    globalThis.keyPool = {};
                    console.log("In length");
                    this.shouldQueue = false;
                    globalThis.shortCodesLeft = undefined;
                    e.callback.call(this, this.event);
                }
            }
            else {
                break;
            }
        }
    }

    currentQueue() {

    }

    register = (type, shortCode, callback) => {
        if (this.hasInitialized == undefined) {
            this.init();
        }
        shortCode = typeof (shortCode) == 'string' ? shortCode.split('+') : shortCode;
        if (!this.registry.hasOwnProperty(type)) {
            this.registry = [];
        }
        shortCode.forEach((e) => {
            globalThis.shortCodes.push(e);
        });
        console.log(globalThis.shortCodes, shortCode);
        let registerable = { id: (Math.random() * 999).toString().replace('.', ''), code: shortCode, callback: callback };
        this.registry.push(registerable);
        globalThis.registry.push(registerable);
        return true;
    }

}

// export { handleKeyboardEvent }