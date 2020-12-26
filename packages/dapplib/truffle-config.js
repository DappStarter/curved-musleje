require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift repeat still horn grace farm equal gate'; 
let testAccounts = [
"0xc0069e01836654fd919dd818cec491fc3665e6e42b1b05c72b91d5e4c99f7c3b",
"0x60e4f3f4c2b6c575381ae452b8101756f24f291b20cea628dde785d1dc4e77af",
"0x9aae1df27647ba4284d915bb74e0473d5225299b2864f2b6214d997cbf62b30f",
"0xa5666d34aae59a4858d46c82d5ef3bad327d203939c817051e9939c05563ee21",
"0x557d6309b080e8039d86d18e5d2094fc1fe326b80de98408e2822acc2528603f",
"0x3102268aebb4c1a85e86d40db6196853f2787c54b7f55f7ef9b254b89266a325",
"0x0fef51d4a4cc029fed2b2a3cb7927890cbd81300f26bfb65404e84edb782b214",
"0x96b198a81fd7e33c45d4e8a1e2c9936f73d8de30bcb84bcc88adbdd3b6ecb294",
"0x9b85736a8f75e352ca58529d90ab5776221036d5dd46cca4bed506dc6ca3d0e4",
"0xa6872985493900235200c16e3a0c759e97fab0e392691680d5516220d270f698"
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
