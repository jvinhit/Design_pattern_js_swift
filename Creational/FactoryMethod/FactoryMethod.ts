interface ITransport {
    deliver(): void;
}

class Ship implements ITransport {
    deliver() {
        return 'Transport with ship in thuyền';
    }
}

class Trunk implements ITransport {
    deliver() {
        return 'Transport with container'
    }
}

abstract class Logistic {
    abstract createTrans(type: string): ITransport;
    planDelivery(type) {
        const transport = this.createTrans(type);
        return transport.deliver();
    }
}

class SeaLogistic extends Logistic {
    createTrans(type: string) {
        if (type.toLowerCase() === 'ship') {
            return new Ship();
        }
    }
}

class TrunkLogistic extends Logistic {
    createTrans(type: string) {
        if (type.toLowerCase() === 'trunk') {
            return new Trunk();
        }
    }
}

const $shipL = new SeaLogistic();
const $delivery =  $shipL.planDelivery('ship');
//=======================================================//


