export class WebUtils {

    static isNull(object) {
        return object === null || object === undefined;
    }

    static isStringEmpty(string) {
        return string === "";
    }

    static timeTransfer(time) {
        var date = new Date(time);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
}