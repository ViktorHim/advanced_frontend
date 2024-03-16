type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]) : string {
    // let res: string = cls;

    // for(let key in mods) {
    //     if(mods[key]) {
    //         res += ' ' + key;
    //     }
    // }

    // res += ' ' + additional.join(' ');

    // return res;

    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
    .join(' ');
}