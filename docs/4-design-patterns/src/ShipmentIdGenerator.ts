class ShipmentIdGenerator {
    private static _instance: ShipmentIdGenerator = new ShipmentIdGenerator();

    private _id: number = 0;

    constructor() {
        if (ShipmentIdGenerator._instance) {
            return ShipmentIdGenerator._instance;
        }
        ShipmentIdGenerator._instance = this;
    }

    createId = () => this._id++;
}

export default ShipmentIdGenerator;
