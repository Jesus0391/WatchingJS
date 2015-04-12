/**
 * Created by Jesus_H on 4/9/2015.
 */
class View {
    constructor(name) {
        this._name = name;
        this._lastName = name;
    }

    name(name, lastName) {
        if (!arguments.length) return this._name;
        this._name = name;
        this._lastName = lastNames;
        return this;
    }

}

export default View;