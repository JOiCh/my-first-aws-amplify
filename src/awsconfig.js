const awsmobile = {
    Auth: {
        // 服務所在的區域
        region: 'ap-northeast-2',
        // 使用者集區 -> 使用者ID
        userPoolId: 'ap-northeast-2_iL5NFF5Pc',
        // 使用者集區 -> 應用程式用戶端ID
        userPoolWebClientId: '20s2g2pvcdfa6c0jcv3msirbr3',
        // 身份集區 -> 身份集區ID
        identityPoolId: 'ap-northeast-2:b4a31f1b-198a-401d-bbfc-a3089909c47d',
        mandatorySignIn: false,
    },
    API: {
        endpoints: [
            {
                // API GateWay 所在的地區
                region: 'ap-northeast-2',
                // 程式碼之中所使用的名稱
                name: 'myapi',
                // API GateWay的Host Domain
                endpoint: 'https://dtmiglb333.execute-api.ap-northeast-2.amazonaws.com/version1',
            },
        ],
    },
}

export default awsmobile