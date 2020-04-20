class CellModel {
    isHidden
    id
    constructor(cellsObject) {
        this.id = cellsObject.id;
        this.isHidden = cellsObject.isHidden;
    }
}
export default CellModel;
