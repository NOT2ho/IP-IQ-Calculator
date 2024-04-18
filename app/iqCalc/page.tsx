
export default function iqCalc() {
    async function ipconfig() {
        const ipData = await fetch('https://geolocation-db.com/json/');
        const locationIp = await ipData.json();
        console.log(locationIp.IPv4);
        return (locationIp.IPv4)
    }


    async function normalDtn() {
        const ip = await ipconfig()
        const arr = ip.split('.')

        const ipNumStr = parseInt(arr[0]) * 1000000000 + parseInt(arr[1]) * 1000000 + parseInt(arr[2]) * 1000 + parseInt(arr[3])
        const ipNum = Number(ipNumStr);

        console.log(ipNum)
        let sigma = 30599000000000000000

        var gaussian = require('gaussian');
        var distribution = gaussian(127000000001, sigma);
        var iq = distribution.pdf(ipNum)
        console.log(iq)
        return (iq)
    }
    normalDtn()
}