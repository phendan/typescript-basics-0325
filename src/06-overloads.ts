function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }

    return a + b;
}

add(1, 2);
