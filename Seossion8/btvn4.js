const queue = [
    '30A-12345',
    '29B-67890',
    '51C-11223',
    '43D-44556',
    '30E-77889'
];

let headIndex = 0;

console.log('===== HANG DOI TRAM SAC =====');

console.log('Xe tiep theo vao sac:', queue[headIndex]);

headIndex++;

queue.push('88A-99999');

console.log('===== CAC XE CON CHO =====');

for (let i = headIndex; i < queue.length; i++) {
    console.log(`STT ${i - headIndex + 1}: ${queue[i]}`);
}

console.log('===== THONG TIN =====');
console.log('Vi tri head:', headIndex);
console.log('So xe con cho:', queue.length - headIndex);