require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember snake good enroll success genius'; 
let testAccounts = [
"0x88523b26020a5dde90b424e8943162e8a012f014b637e4ebc56b3f8d3dc1267d",
"0xfe41cb49039ac24b744d5a8e797b8d1cf5f72557a0115f2dd1e5f8ff4a649ac0",
"0x3d1f23ffa8df44fddd53dec1b4aa88f691ffbbced98d22ca06609ecd3aba66ee",
"0xa0ab133047b0d094b253f257d3cf0ef8cf0d1c82fe447e11ffe41d2ee1dac35c",
"0xbcca0f408f04c8abd32cd2c7c2e1f7870b19af9296af55352ff0f8e564c4be3d",
"0x7ffa874b0ae40b4adfce0437b836d3456275d680e434b49aabca83b24875ade1",
"0x3bf792d9400750d17eded7319dcf98464501dc9ef24c3534c324eb2dbfb33dec",
"0x158cf7c06c3867c3e8fe171d029028e1285c40a3157b1905b26f5a55eab22686",
"0x16006e3e1060ec9e5761bb2e2952d56243a7ee0a3d5d6f81ad263bbb0863d7c9",
"0xebd12765dcabcd5672e5939ba889bb873dc10c5eb3a6edfb54de6ffd98a05a5b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
