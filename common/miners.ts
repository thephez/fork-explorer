export interface IMiners {
  coinbase_tags: {
    [key: string]: {
      name: string;
      link: string;
    };
  };
  payout_addresses: {
    [key: string]: {
      name: string;
      link: string;
    };
  };
}

// Copied from https://raw.githubusercontent.com/0xB10C/known-mining-pools/master/pools.json
const miners: IMiners = {
  coinbase_tags: {
    "/LUXOR/": {
      name: "Luxor",
      link: "https://mining.luxor.tech",
    },
    "/CybtcPool/": {
      name: "Cybtc",
      link: "",
    },
    "P2Pool-DASH": {
      name: "P2Pool",
      link: "https://www.p2poolmining.us/",
    },
    "nodeStratum": {
      name: "Node Stratum (XecRcFo...)",
      link: "",
    },
    "prohashing.com": {
      name: "Prohashing",
      link: "https://prohashing.com/",
    },
    "zpool.ca": {
      name: "ZPool",
      link: "https://zpool.ca/",
    },
    "/1THash&58COIN/": {
      name: "1THash",
      link: "https://www.1thash.top",
    },
    "/1THash/": {
      name: "1THash",
      link: "https://www.1thash.top",
    },
    "/BTC.COM/": {
      name: "BTC.com",
      link: "https://pool.btc.com",
    },
    "/BTC.com/": {
      name: "BTC.com",
      link: "https://pool.btc.com",
    },
    BTCPool: {
      name: "BTCPool (unidentified)",
      link: "https://github.com/0xB10C/known-mining-pools/issues/28",
    },
    BITFARMS: {
      name: "Bitfarms",
      link: "https://www.bitarms.io/",
    },
    "Ukrpool.com": {
      name: "UKRPool",
      link: "https://ukrpool.com/",
    },
    "/Huobi/": {
      name: "Huobi Pool",
      link: "https://www.hpt.com/",
    },
    "/HuoBi/": {
      name: "Huobi Pool",
      link: "https://www.hpt.com/",
    },
    "/E2M & BTC.TOP/": {
      name: "WAYI.CN",
      link: "https://www.easy2mine.com/",
    },
    "/E2M/": {
      name: "WAYI.CN",
      link: "http://www.easy2mine.com/",
    },
    "/canoepool/": {
      name: "CanoePool",
      link: "https://www.canoepool.com/",
    },
    "/ArkPool/": {
      name: "ArkPool",
      link: "",
    },
    "/BTC.TOP/": {
      name: "BTC.TOP",
      link: "https://www.btc.top/",
    },
    "pool.bitcoin.com": {
      name: "Bitcoin.com",
      link: "https://www.bitcoin.com/",
    },
    "Mined By 175btc.com": {
      name: "175btc",
      link: "https://www.175btc.com/",
    },
    "/mined by gbminers/": {
      name: "GBMiners",
      link: "https://gbminers.com/",
    },
    "/A-XBT/": {
      name: "A-XBT",
      link: "https://www.a-xbt.com",
    },
    ASICMiner: {
      name: "ASICMiner",
      link: "https://www.asicminer.co",
    },
    BitMinter: {
      name: "BitMinter",
      link: "https://bitminter.com/",
    },
    "/Bitcoin-Russia.ru/": {
      name: "BitcoinRussia",
      link: "https://bitcoin-russia.ru",
    },
    btcserv: {
      name: "BTCServ",
      link: "https://btcserv.net/",
    },
    simplecoin: {
      name: "simplecoin.us",
      link: "https://simplecoin.us/",
    },
    "BTC Guild": {
      name: "BTC Guild",
      link: "https://www.btcguild.com/",
    },
    Eligius: {
      name: "Eligius",
      link: "https://eligius.st/",
    },
    "ozco.in": {
      name: "OzCoin",
      link: "https://ozcoin.net/",
    },
    ozcoin: {
      name: "OzCoin",
      link: "https://ozcoin.net/",
    },
    EMC: {
      name: "EclipseMC",
      link: "https://eclipsemc.com/",
    },
    MaxBTC: {
      name: "MaxBTC",
      link: "https://maxbtc.com/",
    },
    triplemining: {
      name: "TripleMining",
      link: "https://www.triplemining.com/",
    },
    "Triplemining.com": {
      name: "TripleMining",
      link: "https://www.triplemining.com/",
    },
    CoinLab: {
      name: "CoinLab",
      link: "https://coinlab.com/",
    },
    "50BTC": {
      name: "50BTC",
      link: "https://www.50btc.com/",
    },
    "ghash.io": {
      name: "GHash.IO",
      link: "https://ghash.io/",
    },
    "MARA Pool": {
      name: "MARA Pool",
      link: "https://marathondh.com/",
    },
    "st mining corp": {
      name: "ST Mining Corp",
      link: "https://bitcointalk.org/index.php?topic=77000.msg3207708#msg3207708",
    },
    bitparking: {
      name: "Bitparking",
      link: "https://mmpool.bitparking.com/",
    },
    mmpool: {
      name: "mmpool",
      link: "https://mmpool.org/pool",
    },
    "by polmine.pl": {
      name: "Polmine",
      link: "https://polmine.pl/",
    },
    bypmneU: {
      name: "Polmine",
      link: "https://polmine.pl/",
    },
    KnCMiner: {
      name: "KnCMiner",
      link: "https://portal.kncminer.com/pool",
    },
    Bitalo: {
      name: "Bitalo",
      link: "https://bitalo.com/mining",
    },
    七彩神仙鱼: {
      name: "F2Pool",
      link: "https://www.f2pool.com/",
    },
    "🐟": {
      name: "F2Pool",
      link: "https://www.f2pool.com/",
    },
    HHTT: {
      name: "HHTT",
      link: "https://hhtt.1209k.com/",
    },
    "megabigpower.com": {
      name: "MegaBigPower",
      link: "https://megabigpower.com/",
    },
    "/mtred/": {
      name: "Mt Red",
      link: "https://mtred.com/",
    },
    "nmcbit.com": {
      name: "NMCbit",
      link: "https://nmcbit.com/",
    },
    "yourbtc.net": {
      name: "Yourbtc.net",
      link: "https://yourbtc.net/",
    },
    "Give-Me-Coins": {
      name: "Give Me Coins",
      link: "https://give-me-coins.com/",
    },
    "/slush/": {
      name: "SlushPool",
      link: "https://slushpool.com/",
    },
    "Mined by AntPool": {
      name: "AntPool",
      link: "https://www.antpool.com/",
    },
    "Mined By AntPool": {
      name: "AntPool",
      link: "https://www.antpool.com/",
    },
    "/AntPool/": {
      name: "AntPool",
      link: "https://www.antpool.com/",
    },
    "Mined by MultiCoin.co": {
      name: "MultiCoin.co",
      link: "https://multicoin.co",
    },
    "bcpool.io": {
      name: "bcpool.io",
      link: "https://bcpool.io/",
    },
    cointerra: {
      name: "Cointerra",
      link: "https://cointerra.com/",
    },
    Kano: {
      name: "KanoPool",
      link: "https://kano.is/",
    },
    "/solo.ckpool.org/": {
      name: "Solo CK",
      link: "https://solo.ckpool.org/",
    },
    ckpool: {
      name: "CKPool",
      link: "https://ckpool.org",
    },
    "/ckpool.org/": {
      name: "CKPool",
      link: "https://ckpool.org",
    },
    "/NiceHashSolo": {
      name: "NiceHash",
      link: "https://solo.nicehash.com/",
    },
    "/BitClub Network/": {
      name: "BitClub",
      link: "https://bitclubpool.com/",
    },
    "bitcoinaffiliatenetwork.com": {
      name: "Bitcoin Affiliate Network",
      link: "https://mining.bitcoinaffiliatenetwork.com/",
    },
    "BTCChina Pool": {
      name: "BTCC",
      link: "https://pool.btcc.com/",
    },
    "btcchina.com": {
      name: "BTCC",
      link: "https://pool.btcc.com/",
    },
    "BTCChina.com": {
      name: "BTCC",
      link: "https://pool.btcc.com/",
    },
    "/BTCC/": {
      name: "BTCC",
      link: "https://pool.btcc.com/",
    },
    "BW Pool": {
      name: "BWPool",
      link: "https://bwpool.net/",
    },
    BWPool: {
      name: "BWPool",
      link: "https://bwpool.net/",
    },
    "xbtc.exx.com&bw.com": {
      name: "EXX&BW",
      link: "https://xbtc.exx.com/",
    },
    "Bitsolo Pool": {
      name: "Bitsolo",
      link: "https://bitsolo.net/",
    },
    "/BitFury/": {
      name: "BitFury",
      link: "https://bitfury.com/",
    },
    "/Bitfury/": {
      name: "BitFury",
      link: "https://bitfury.com/",
    },
    "/pool34/": {
      name: "21 Inc.",
      link: "https://21.co/",
    },
    "/agentD/": {
      name: "digitalBTC",
      link: "https://digitalbtc.com/",
    },
    "/八宝池 8baochi.com/": {
      name: "8baochi",
      link: "https://8baochi.com/",
    },
    "myBTCcoin Pool": {
      name: "myBTCcoin Pool",
      link: "https://mybtccoin.com/",
    },
    TBDice: {
      name: "TBDice",
      link: "https://tbdice.org/",
    },
    HASHPOOL: {
      name: "HASHPOOL",
      link: "https://hashpool.com/",
    },
    "/Nexious/": {
      name: "Nexious",
      link: "https://nexious.com/",
    },
    "/bravo-mining/": {
      name: "Bravo Mining",
      link: "https://www.bravo-mining.com/",
    },
    "/HotPool/": {
      name: "HotPool",
      link: "https://hotpool.co/",
    },
    "/www.okex.com/": {
      name: "OKExPool",
      link: "https://www.okex.com/",
    },
    "/BCMonster/": {
      name: "BCMonster",
      link: "https://www.bcmonster.com/",
    },
    "Mined by 1hash.com": {
      name: "1Hash",
      link: "https://www.1hash.com/",
    },
    "/HaoBTC/": {
      name: "Bixin",
      link: "https://haopool.com/",
    },
    HAOBTC: {
      name: "Bixin",
      link: "https://haopool.com/",
    },
    "/Bixin/": {
      name: "Bixin",
      link: "https://haopool.com/",
    },
    "/ViaBTC/TATMAS Pool/": {
      name: "TATMAS Pool",
      link: "https://tmsminer.com/",
    },
    "viabtc.com deploy": {
      name: "ViaBTC",
      link: "https://viabtc.com",
    },
    "/ViaBTC/": {
      name: "ViaBTC",
      link: "https://viabtc.com/",
    },
    "/ConnectBTC - Home for Miners/": {
      name: "ConnectBTC",
      link: "https://www.connectbtc.com/",
    },
    "/BATPOOL/": {
      name: "BATPOOL",
      link: "https://www.batpool.com/",
    },
    "/CANOE/": {
      name: "CanoePool",
      link: "https://btc.canoepool.com/",
    },
    "/WATERHOLE.IO/": {
      name: "Waterhole",
      link: "https://btc.waterhole.io/",
    },
    "/DCExploration/": {
      name: "DCExploration",
      link: "https://dcexploration.cn",
    },
    "/DCEX/": {
      name: "DCEX",
      link: "https://dcexploration.cn",
    },
    "/BTPOOL/": {
      name: "BTPOOL",
      link: "",
    },
    "/58coin.com/": {
      name: "58COIN",
      link: "https://www.58coin.com",
    },
    "/Bitcoin-India/": {
      name: "Bitcoin India",
      link: "https://bitcoin-india.org",
    },
    "--Nug--": {
      name: "shawnp0wers",
      link: "https://www.brainofshawn.com",
    },
    "/phash.io/": {
      name: "PHash.IO",
      link: "https://phash.io",
    },
    "/phash.cn/": {
      name: "PHash.IO",
      link: "https://phash.io",
    },
    "/RigPool.com/": {
      name: "RigPool",
      link: "https://www.rigpool.com",
    },
    "/haozhuzhu/": {
      name: "HAOZHUZHU",
      link: "https://haozhuzhu.com/",
    },
    "/$Mined by 7pool.com/": {
      name: "7pool",
      link: "https://7pool.com/",
    },
    "/mined by poopbut/": {
      name: "MiningKings",
      link: "https://miningkings.com/",
    },
    "/Mined by HashBX.io/": {
      name: "HashBX",
      link: "https://hashbx.io",
    },
    "/DPOOL.TOP/": {
      name: "DPOOL",
      link: "https://www.dpool.top/",
    },
    "/Rawpool.com/": {
      name: "Rawpool.com",
      link: "https://www.rawpool.com/",
    },
    "/haominer/": {
      name: "haominer",
      link: "https://haominer.com/",
    },
    "/Helix/": {
      name: "Helix",
      link: "",
    },
    "/Bitcoin-Ukraine.com.ua/": {
      name: "Bitcoin-Ukraine",
      link: "https://bitcoin-ukraine.com.ua/",
    },
    "/poolin.com": {
      name: "Poolin",
      link: "https://www.poolin.com/",
    },
    "/SecretSuperstar/": {
      name: "SecretSuperstar",
      link: "",
    },
    "/tigerpool.net": {
      name: "tigerpool.net",
      link: "",
    },
    "/Sigmapool.com/": {
      name: "Sigmapool.com",
      link: "https://sigmapool.com",
    },
    "/www.okpool.top/": {
      name: "okpool.top",
      link: "https://www.okpool.top",
    },
    HummerPool: {
      name: "Hummerpool",
      link: "https://www.hummerpool.com",
    },
    Hummerpool: {
      name: "Hummerpool",
      link: "https://www.hummerpool.com",
    },
    "/Tangpool/": {
      name: "Tangpool",
      link: "https://www.tangpool.com/",
    },
    "/bytepool.com/": {
      name: "BytePool",
      link: "https://www.bytepool.com/",
    },
    "/SpiderPool/": {
      name: "SpiderPool",
      link: "https://www.spiderpool.com/",
    },
    "/NovaBlock/": {
      name: "NovaBlock",
      link: "https://novablock.com",
    },
    MiningCity: {
      name: "MiningCity",
      link: "https://www.miningcity.com/",
    },
    "/Binance/": {
      name: "Binance Pool",
      link: "https://pool.binance.com/",
    },
    "binance.com/": {
      name: "Binance Pool",
      link: "https://pool.binance.com/",
    },
    "binance/": {
      name: "Binance Pool",
      link: "https://pool.binance.com/",
    },
    "/Minerium.com/": {
      name: "Minerium",
      link: "https://www.minerium.com/",
    },
    "/Buffett/": {
      name: "Lubian.com",
      link: "",
    },
    "/lubian.com/": {
      name: "Lubian.com",
      link: "https://www.lubian.com/",
    },
    "/hash.okkong.com/": {
      name: "OKKONG",
      link: "https://hash.okkong.com",
    },
    "/TMSPOOL/": {
      name: "TMSPool",
      link: "https://btc.tmspool.top",
    },
    "/one_more_mcd/": {
      name: "EMCDPool",
      link: "https://pool.emcd.io",
    },
    "/Foundry USA Pool #dropgold/": {
      name: "Foundry USA",
      link: "https://foundrydigital.com/",
    },
    "/2cDw/": {
      name: "Foundry USA",
      link: "https://foundrydigital.com/",
    },
    "/SBICrypto.com Pool/": {
      name: "SBI Crypto",
      link: "https://sbicrypto.com",
    },
    "SBI Crypto": {
      name: "SBI Crypto",
      link: "https://www.sbicrypto.com",
    },
    SBICrypto: {
      name: "SBI Crypto",
      link: "https://www.sbicrypto.com",
    },
    TogetherPool: {
      name: "TogetherPool",
      link: "https://www.togetherpool.com/",
    },
  },
  payout_addresses: {
    "XoSxpd5VYNQvKbXbEaDKt6P1aZANzAkXrJ": {
      name: "Luxor",
      link: "https://mining.luxor.tech",
    },
    "XmzfivrzYQ7B7oBMZKwPRdhjB1iNvX71XZ": {
      name: "F2Pool",
      link: "https://www.f2pool.com/",
    },
    "Xts6TLf8gdjdxRon7L794WRC53Le7H7D9n": {
      name: "Mining-Dutch",
      link: "https://www.mining-dutch.nl/",
    },
    "XwyHjrAVXFSs2uHKw5BB2U31m8D41izE24": {
      name: "XwyHjrAVXFSs2uHKw5BB2U31m8D41izE24",
      link: "",
    },
  },
};
export default miners;
