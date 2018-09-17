export declare type Functions = {
    [key: string]: Function;
};
export declare const registerFunction: (name: string, func: Function) => void;
export declare const registerFunctions: (funcs: {
    [key: string]: Function;
}) => void;
export declare const getFunction: (name: string) => Function;
