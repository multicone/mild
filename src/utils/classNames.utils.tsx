
interface IClassName {
    style?: string;
    classString?: string;
}
export const classNames = (style?: string, classString?: string) => {
    return `${style} ${classString}`;
}
