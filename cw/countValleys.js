function countingValleys(n, s) {
    if (!n) return 0;
    let countValleys = 0,
        isChecker = 0;
    for (let i = 0; i < n; i++) {
        if (s.charAt(i) === 'D') {
            if (isChecker === 0) {
                countValleys++;
            }
            isChecker--;
        } else {
            isChecker++;
        }
    }
    return countValleys;
}

const aaa = async () => {
    try {
        let resp = await fetch('aaa');
        let ppp = await resp.json();
    } catch (e) {
        console.log(e);
    }
};

console.log(countingValleys(12, 'DDUUDDUDUUUD'));
