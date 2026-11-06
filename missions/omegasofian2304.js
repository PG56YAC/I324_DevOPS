const pseudo = 'omegasofian2304';
const [version, type] = process.argv.slice(2);

const [maj, min, cor] = version.replace('v', '').split('.').map(Number);

if (type.endsWith('!')) {
    console.log(`v${maj + 1}.0.0-${pseudo}`);
} else if (type === 'feat') {
    console.log(`v${maj}.${min + 1}.0-${pseudo}`);
} else {
    console.log(`v${maj}.${min}.${cor + 1}-${pseudo}`);
}

