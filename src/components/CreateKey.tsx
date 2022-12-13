import Hash from 'object-hash'

type CreateKeyProps = string;

function CreateKey(prop: CreateKeyProps) {
    return Hash(prop);
}

function CreateGuidKey() {
    let lut = [];
    for (let i = 0; i < 256; i++) {
        lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
    let k = ['x', 'x', '-', 'x', '-', '4', '-', 'y', '-', 'x', 'x', 'x'];
    let u = '';
    let i = 0;
    let rb = Math.random() * 0xffffffff | 0;
    while (i++ < 12) {
        let c = k[i - 1];
        let r = rb & 0xffff;
        let v = c === 'x' ? r : (c === 'y' ? ((r & 0x3fff) | 0x8000) : ((r & 0xfff) | 0x4000));
        u += (c === '-') ? c : (lut[v >> 8] + lut[v & 0xff]);
        rb = i & 1 ? rb >> 16 : Math.random() * 0xffffffff | 0;
    }
    return u
}

export { CreateKey, CreateGuidKey };