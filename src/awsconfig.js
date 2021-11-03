const awsmobile = {
    Auth: {
        // 服務所在的區域
        region: 'ap-northeast-1',
        // 使用者集區 -> 使用者ID
        userPoolId: 'ap-northeast-1_bY2byhlCa',
        // 使用者集區 -> 應用程式用戶端ID
        userPoolWebClientId: '21u50hboia4s5q0sbk6pbdfmss',
        // 身份集區 -> 身份集區ID
        identityPoolId: 'ap-northeast-1:89fa296a-cddb-4937-b82e-2d8dc9732592',
        mandatorySignIn: false,
    },
    API: {
        endpoints: [
            {
                // API GateWay 所在的地區
                region: 'ap-northeast-1',
                // 程式碼之中所使用的名稱
                name: 'myapi',
                // API GateWay的Host Domain
                endpoint: 'https://sgv8e6fakf.execute-api.ap-northeast-1.amazonaws.com/v1',
            },
        ],
    },
}

export default awsmobile