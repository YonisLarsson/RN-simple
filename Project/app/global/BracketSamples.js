/**
 * Yonis Larsson (yonis.larsson.biz@gmail.com)
 * April 9th, 2016
 */

module.exports = [
    {
        "uuid":"2b6de6bd-3561-4e28-a098-25aadda44bd0",
        "msigKey":"3QLQHZ9csSrAtLZMGfRvwAvvnjCTndmqoH",
        "status":"open",
        "title":"test bracket",
        "type":"Letter of Credit",
        "LC Number":"",
        "participants":{
            "buyer":{
                "userid":"FordMotors",
                "display_name":"Ford Motor Co Ltd.",
                "ext_pub_key":"xpub661MyMwAqRbcFGNQvCDvDh4eNkoeUTjdL1cpgtDVUBLfvNh3B5Xt1ePv8eNxP7x8YMwy66otdwEjr6BMQg74cjHryp9Lo7GXK7isjmt6vv6",
                "bracket_key":"19Q82RD94m1CfTeQhJG7nZgCAhZ8CYUQ2N",
                "txz":"78cbcca3650e581fe80e7e07a0cb2e5f59f69c02003626beeec92d6bac27c5da"
            },
            "seller":{
                "userid":"Goodyear",
                "display_name":"Goodyear Co.",
                "ext_pub_key":"xpub661MyMwAqRbcGubXfF9oHGt9X1wGD4dradS9BJQJ7TFbyvF4qrahzFp1mvD1PdKSu9mq98M3WTVzxYDiAo4t2rKAZG4qQqYPYFfbPGvZH3U",
                "bracket_key":"1PzDc7AZH6AYu4bxDjzXXeB5WuyqnKVr79",
                "txz":"78cbcca3650e581fe80e7e07a0cb2e5f59f69c02003626beeec92d6bac27c5da"
            },
            "bank":{
                "userid":"Citigroup",
                "display_name":"Citigroup Inc.",
                "ext_pub_key":"xpub661MyMwAqRbcGoBoaGAnTrG7ZY3LBZBeRR5iPyJYMNrw9RzTbqBQWLp3Weem4r9z6aEmuDinrL76G5oyFZL2szUw3LREPvoDiQzTTiHjKJM",
                "bracket_key":"1sFB7J5PQ4mUnx15CiXwD5EasG9vVxQkN",
                "txz":"78cbcca3650e581fe80e7e07a0cb2e5f59f69c02003626beeec92d6bac27c5da"
            }
        },
        "history":[

        ],
        "accords":[
            {
                "label":"Contract",
                "state":"incomplete",
                "uuid":"fc47ecb7-cbea-4cee-bdc4-c7acf36d8254",
                "msigKey":"3FqQTPWJixWY3VxzVcQuHB29J7swUvrRyz",
                "by":"seller",
                "txz":"78cbcca3650e581fe80e7e07a0cb2e5f59f69c02003626beeec92d6bac27c5da",
                "sigs":[

                ],
                "depends":[

                ],
                "terms":{
                    "payment-type":"",
                    "issuing-bank":""
                },
                "documents":{
                    "PO":{
                        "Document Link":"",
                        "PO Number":"",
                        "uuid":"6eba4d51-2b2a-4341-901e-13af6686d33b",
                        "msigKey":"1GiZkN1NtrAQRyN1wYaTvp76wRVSz9ACUr"
                    }
                }
            },
            {
                "label":"Shipment",
                "state":"incomplete",
                "uuid":"61ba4d2e-a119-4cf5-a5de-394bc3bb8869",
                "msigKey":"34yDdMqdRrxt7kbeXFDu6ppWXNpSJn8cBA",
                "txz":"78cbcca3650e581fe80e7e07a0cb2e5f59f69c02003626beeec92d6bac27c5da",
                "by":"seller",
                "sigs":[

                ],
                "depends":[
                    "Contract"
                ],
                "terms":{
                    "amount":"",
                    "payment-terms":"",
                    "description":"",
                    "origin":"",
                    "destination":"",
                    "instructions":""
                }
            }
        ],
        "clauses":[
            {
                "label":"Send Contract",
                "by":"seller",
                "state":"incomplete",
                "uuid":"0e31fbc6-1c9b-4e13-853f-6f0ebbb59f89",
                "msigKey":"3AEjndRnDDrrE3Rhy6h686Ju72BSBt1qTR",
                "accord":"Contract",
                "facilities":[
                    "Download PO"
                ],
                "depends":[

                ]
            },
            {
                "label":"Accept Contract",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"8c5fee30-2740-42f4-ad1d-e39ce7c50265",
                "msigKey":"38wp5UGqHtr4CBKQYTTkdQAnwr1wVKN1e9",
                "accord":"Contract",
                "facilities":[
                    "Download MT700"
                ],
                "depends":[
                    "Contract",
                    "Shipment",
                    "Send Contract"
                ]
            },
            {
                "label":"Ship Goods",
                "by":"seller",
                "byname":"",
                "state":"incomplete",
                "uuid":"39b27d56-52d2-4841-9442-c8dd1b886ebe",
                "msigKey":"3CesUJaHy48Z6VmBJShCmDZkPNhLSqVnTu",
                "accord":"Shipment",
                "facilities":[
                    "View e-Presentation"
                ],
                "depends":[
                    "Accept Contract",
                    "Received LC"
                ],
                "documents":{
                    "Letter of Credit":{
                        "Document Link":"",
                        "DocHash":"",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "Fields":{
                            "LC Number":"",
                            "Latest Presentation Date":"",
                            "Applicant Name":"",
                            "Beneficiary Name":"",
                            "Consign To":"",
                            "Notify":""
                        },
                        "uuid":"bf0a2f0c-7fef-405c-86f2-8f3837e7b0cc",
                        "msigKey":"1td5uchMmcX2ZZ3hvw9PTD68NcZ9pQJfu"
                    },
                    "Commercial Invoice":{
                        "Document Link":"",
                        "DocHash":"",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Description of Goods":"",
                            "PO Number":"",
                            "Inco Terms":"",
                            "Payment Terms":"",
                            "Invoice Number":"",
                            "Invoice Value":"",
                            "Claim (Draft) Value":""
                        },
                        "uuid":"7a445e78-1565-45ef-bde3-4419f826e516",
                        "msigKey":"1F5ht8phJiCqeePf9tkrAZQQmmzSKbMczf"
                    },
                    "Logistics":{
                        "Document Link":"",
                        "DocHash":"",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "Fields":{
                            "MAWB":"",
                            "Destination Port":"",
                            "Pieces":"",
                            "Weight":"",
                            "Date of Shipment":""
                        },
                        "uuid":"44fb6e2d-a378-41db-a0a9-615b9de077a5",
                        "msigKey":"1HacfRoou5VGeCvGXZDTP3EhZounNowg3G"
                    }
                }
            },
            {
                "label":"Accept Shipment",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"8902c2c5-79b2-4ad9-b0ee-c4041f517521",
                "accord":"Shipment",
                "msigKey":"3PZ5PUyVW5h3mheBM3ZNGt9AqkSfajg1Dy",
                "depends":[
                    "Ship Goods"
                ],
                "documents":{
                    "Letter of Credit":{
                        "Document Link":"",
                        "DocHash":"",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "verified":"",
                        "Fields":{
                            "LC Number":"",
                            "Latest Presentation Date":"",
                            "Applicant Name":"",
                            "Beneficiary Name":"",
                            "Consign To":"",
                            "Notify":""
                        },
                        "uuid":"774902e4-8fba-47ff-b462-77475bd154d3",
                        "msigKey":"157LxTu72aMmPVuPP1PMYdWPHGK6k7T4ZA"
                    },
                    "Commercial Invoice":{
                        "Document Link":"",
                        "DocHash":"",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "verified":"",
                        "Fields":{
                            "Description of Goods":"",
                            "PO Number":"",
                            "Inco Terms":"",
                            "Payment Terms":"",
                            "Invoice Number":"",
                            "Invoice Value":"",
                            "Claim (Draft) Value":""
                        },
                        "uuid":"c59e07c6-e8e0-4ec4-a064-f6b68ae8b9e9",
                        "msigKey":"1B6AQWqcZZJPT66L3tT4FvKwdRUPfLAKwh"
                    },
                    "Logistics":{
                        "Document Link":"",
                        "DocHash":"",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "verified":"",
                        "Fields":{
                            "MAWB":"",
                            "Destination Port":"",
                            "Pieces":"",
                            "Weight":"",
                            "Date of Shipment":""
                        },
                        "uuid":"86490aa1-4d38-47b9-8bb6-d38b9ba2105b",
                        "msigKey":"1Cv8v7WJoSY69AGvBjwwkmCLFJpHKP5EjA"
                    }
                }
            },
            {
                "label":"Receive Payment",
                "by":"seller",
                "byname":"",
                "state":"incomplete",
                "uuid":"02f0c7ee-7a59-4e07-af6d-fa01834f5a25",
                "accord":"Shipment",
                "msigKey":"3KhDGoD3TXUbTJvJrZ6yxZMfWxCiWDi468",
                "depends":[
                    "Ship Goods",
                    "Accept Shipment"
                ]
            },
            {
                "label":"Make Payment",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"f080d5f0-1f5f-486a-8dbd-c25317ca2065",
                "accord":"Shipment",
                "msigKey":"37XKtpekGikBjNpE2GrSS6XJzGvgkBCVa7",
                "depends":[
                    "Accept Shipment"
                ]
            }
        ],
        "events":[
            {
                "label":"Submit LC Application",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"2020fea6-b205-4bf9-b73e-4581c7f8d092",
                "msigKey":"",
                "accord":"Contract",
                "depends":[
                    "Accept Contract"
                ],
                "documents":{
                    "MT700":{

                    }
                }
            },
            {
                "label":"Received LC",
                "by":"bank",
                "byname":"",
                "state":"incomplete",
                "uuid":"471e2d9a-4c00-4940-b898-8102d0387c95",
                "msigKey":"",
                "depends":[
                    "Accept Contract"
                ]
            },
            {
                "label":"Verify Documents",
                "by":"bank",
                "byname":"",
                "state":"incomplete",
                "uuid":"467faba1-38f6-424f-af88-a9365f8e66f8",
                "msigKey":"",
                "depends":[
                    "Received LC",
                    "Ship Goods"
                ]
            }
        ],
        "pub_key":"",
        "mintTx":"78cbcca3650e581fe80e7e07a0cb2e5f59f69c02003626beeec92d6bac27c5da",
        "creator":"FordMotors"
    },
    {
        "uuid":"328ed6c3-3a20-4700-a436-fdf3026dcc72",
        "msigKey":"32vmsBVJaC31TowiFFs5xGeE3d2Ugu4cXs",
        "status":"open",
        "title":"New Trade",
        "type":"Open Account",
        "trader":"buyer",
        "children":[

        ],
        "participants":{
            "buyer":{
                "userid":"trader",
                "display_name":"Trading Inc.",
                "ext_pub_key":"xpub661MyMwAqRbcFJvtCMcA8Z6gnL6RERkWP7pSXgHiL6X7wGuT4fPy7rJJRuC4MWeTCYriKS2se5RHMGrtPv2BzuRKRDnNDdDYd1vfEjExLLh",
                "bracket_key":"1CXXPRJg2baS3Cww6hekYKoK1ZxjESN6f2",
                "txz":"ed557b68c9ee4993990d190eb8cf86d11dd6ebea806acb21106aab8f0b6cc927"
            },
            "seller":{
                "userid":"Goodyear",
                "display_name":"Goodyear Co.",
                "ext_pub_key":"xpub661MyMwAqRbcGubXfF9oHGt9X1wGD4dradS9BJQJ7TFbyvF4qrahzFp1mvD1PdKSu9mq98M3WTVzxYDiAo4t2rKAZG4qQqYPYFfbPGvZH3U",
                "bracket_key":"1E44eQKYyUrGevtJ8vVBAykehnLSpa5xsR",
                "txz":"ed557b68c9ee4993990d190eb8cf86d11dd6ebea806acb21106aab8f0b6cc927"
            },
            "bank":{
                "userid":"Citigroup",
                "display_name":"Citigroup Inc.",
                "ext_pub_key":"xpub661MyMwAqRbcGoBoaGAnTrG7ZY3LBZBeRR5iPyJYMNrw9RzTbqBQWLp3Weem4r9z6aEmuDinrL76G5oyFZL2szUw3LREPvoDiQzTTiHjKJM",
                "bracket_key":"1Bz6V76nxYniEvaYxWW4vE2HarbcY3LGSS",
                "txz":"ed557b68c9ee4993990d190eb8cf86d11dd6ebea806acb21106aab8f0b6cc927"
            }
        },
        "history":[

        ],
        "accords":[
            {
                "label":"Contract",
                "state":"complete",
                "uuid":"4075caa1-47ae-4130-bf73-2f0f85cc9d49",
                "msigKey":"353x4Wrvw4i85x8gCCAJyWkGJZhUxjpnkM",
                "txz":"ed557b68c9ee4993990d190eb8cf86d11dd6ebea806acb21106aab8f0b6cc927",
                "by":"buyer",
                "sigs":[

                ],
                "depends":[

                ],
                "terms":{
                    "payment-type":"",
                    "drawee":""
                },
                "documents":{
                    "PO":{
                        "Document Link":"",
                        "PO Number":"",
                        "uuid":"03bee16a-43e2-4753-ab94-1962f62ed335",
                        "msigKey":"1MuFcLCrUoC8kcixL8E6NWANJ3SgoscQ1X"
                    }
                }
            },
            {
                "label":"Shipment",
                "state":"complete",
                "uuid":"8f554640-a6ef-4f7c-b682-04bd21aaa039",
                "msigKey":"33U4VMpqM3JbQSvXumUNWA5gfkjfyBtXz9",
                "by":"buyer",
                "txz":"ed557b68c9ee4993990d190eb8cf86d11dd6ebea806acb21106aab8f0b6cc927",
                "sigs":[

                ],
                "depends":[
                    "Contract"
                ],
                "terms":{
                    "amount":"",
                    "payment-terms":"",
                    "description":"",
                    "origin":"",
                    "destination":"",
                    "instructions":""
                }
            }
        ],
        "clauses":[
            {
                "label":"Send Contract",
                "by":"buyer",
                "state":"complete",
                "uuid":"d95a60c5-4212-42de-ab11-9d8256bf4e44",
                "msigKey":"3QtbiVEexe338oPFstBEwwbZvBf94brEJF",
                "accord":"Contract",
                "facilities":[
                    "Download PO"
                ],
                "depends":[

                ]
            },
            {
                "label":"Accept Contract",
                "by":"seller",
                "byname":"",
                "state":"complete",
                "uuid":"388b05a0-b4d5-4546-adf9-57db99705cdb",
                "msigKey":"3BiDYJLRpCwTqpxYrBF8N3rryUgMBVbsyN",
                "accord":"Contract",
                "facilities":[

                ],
                "depends":[
                    "Send Contract",
                    "Contract",
                    "Shipment"
                ]
            },
            {
                "label":"Ship Goods",
                "by":"seller",
                "byname":"",
                "state":"complete",
                "uuid":"285a67d5-04db-47d3-9f9f-cc18609e77b0",
                "msigKey":"31vfQg6GfHe2vtG5drxogP45JKE11Q4io7",
                "accord":"Shipment",
                "facilities":[
                    "View Commercial Invoice",
                    "View Logistics Document"
                ],
                "depends":[
                    "Accept Contract"
                ],
                "documents":{
                    "Contract":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Buyer Name":"",
                            "Seller Name":"",
                            "Additional Payment Instructions":""
                        },
                        "uuid":"db9ad5ab-a6c1-43e3-a9f1-edc682cb31a9",
                        "msigKey":"1HDoCtkGppd6E98K3QabAJBdb2GaHgiT37"
                    },
                    "Commercial Invoice":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Description of Goods":"",
                            "PO Number":"",
                            "Inco Terms":"",
                            "Payment Terms":"",
                            "Invoice Number":"",
                            "Invoice Value":"",
                            "Claim (Draft) Value":""
                        },
                        "uuid":"e224371f-c242-4db8-a9fd-a3532d037f32",
                        "msigKey":"146iyrucc66vetgXxvu2Zk159S4jfFrfKy"
                    },
                    "Logistics":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "MAWB":"",
                            "Destination Port":"",
                            "Pieces":"",
                            "Weight":"",
                            "Date of Shipment":""
                        },
                        "uuid":"ea5c6912-0168-413a-89cc-4c09e1d667c0",
                        "msigKey":"178S16xoZ48eMnzjenETjxBonLKd7EzvES"
                    }
                }
            },
            {
                "label":"Accept Shipment",
                "by":"buyer",
                "byname":"",
                "state":"complete",
                "uuid":"00778d61-91ce-46da-bc04-ecb8ede120a6",
                "accord":"Shipment",
                "msigKey":"36eJhXnF7P2YcVPFurGecnuKLeoaXNhxdU",
                "verifyCount":"",
                "depends":[
                    "Ship Goods"
                ],
                "documents":{
                    "Contract":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Buyer Name":"",
                            "Seller Name":"",
                            "Additional Payment Instructions":""
                        },
                        "uuid":"c4ccaf5e-50fa-4229-b0c1-10f1b3b9336e",
                        "msigKey":"12CQUMuoLX9Ad3L7MMCN4AmRNXHLmNNgpM"
                    },
                    "Commercial Invoice":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Description of Goods":"",
                            "PO Number":"",
                            "Inco Terms":"",
                            "Payment Terms":"",
                            "Invoice Number":"",
                            "Invoice Value":"",
                            "Claim (Draft) Value":""
                        },
                        "uuid":"aa9bb97f-420b-46f3-bfe0-7cfc463173ff",
                        "msigKey":"13MnkKCkTqEAcPJG9knRK72a79gUZbZe3s"
                    },
                    "Logistics":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "MAWB":"",
                            "Destination Port":"",
                            "Pieces":"",
                            "Weight":"",
                            "Date of Shipment":""
                        },
                        "uuid":"49e54e38-27c3-4e55-8a88-8f1ac50d59af",
                        "msigKey":"19efdncEhnQTAWrWWpFsSnRfqF1HyCpVKT"
                    }
                }
            },
            {
                "label":"Receive Payment",
                "by":"seller",
                "byname":"",
                "state":"incomplete",
                "uuid":"73e34dec-8918-4c75-a3c7-dd5e33ebc9ac",
                "accord":"Shipment",
                "msigKey":"3848GzDBMJ1S4bedA9NkA9Ye5h5fPniTL6",
                "depends":[
                    "Ship Goods"
                ]
            },
            {
                "label":"Make Payment",
                "by":"buyer",
                "byname":"",
                "state":"complete",
                "uuid":"418ccc2b-b6ef-4b5d-8c4d-a1317f417681",
                "accord":"Shipment",
                "msigKey":"3ECM6wfXpc5vi6rByakQG5bnobggUcPrVy",
                "depends":[
                    "Accept Shipment"
                ]
            }
        ],
        "events":[
            {
                "label":"Provided Financing",
                "by":"bank",
                "byname":"",
                "state":"incomplete",
                "uuid":"f8b9f640-551e-46a1-a0af-a7e67fde1b0a",
                "msigKey":"",
                "depends":[
                    "Accept Contract"
                ]
            }
        ],
        "provisions":{
            "Financing":{
                "label":"Financing",
                "by":"bank",
                "amount":"",
                "txz":"",
                "constraints":"",
                "availedBy":{

                }
            }
        },
        "pub_key":"",
        "mintTx":"ed557b68c9ee4993990d190eb8cf86d11dd6ebea806acb21106aab8f0b6cc927",
        "creator":"trader",
        "sibling":"c2320223-5b54-4973-8872-2ac98539b54f"
    },
    {
        "uuid":"464bce0f-922d-47ca-972e-6c23c2600d6d",
        "msigKey":"32k1krW6RzPi2M39fGapfzMFcx5ie554sq",
        "status":"open",
        "title":"Demo BBO",
        "type":"Bracket-Based Obligation",
        "children":[
            "fed955c0-8252-471e-a932-d45f53c58eb7",
            "6f51d009-3f04-4dfb-9559-a62be4894153"
        ],
        "participants":{
            "buyer":{
                "userid":"FordMotors",
                "display_name":"Ford Motor Co Ltd.",
                "ext_pub_key":"xpub661MyMwAqRbcFGNQvCDvDh4eNkoeUTjdL1cpgtDVUBLfvNh3B5Xt1ePv8eNxP7x8YMwy66otdwEjr6BMQg74cjHryp9Lo7GXK7isjmt6vv6",
                "bracket_key":"1PHFaCXi1FtxrSGWbpdx3Cp4YiNwbWXtrp",
                "txz":"c25925790e08e940f7109c975860b54e6960c104c133c06721b41e6b73fcf2c3"
            },
            "seller":{
                "userid":"Goodyear",
                "display_name":"Goodyear Co.",
                "ext_pub_key":"xpub661MyMwAqRbcGubXfF9oHGt9X1wGD4dradS9BJQJ7TFbyvF4qrahzFp1mvD1PdKSu9mq98M3WTVzxYDiAo4t2rKAZG4qQqYPYFfbPGvZH3U",
                "bracket_key":"1AXuhPz87Mp5ZxQZ4WHacVmARnTYKopdbP",
                "txz":"da874fcd10bbd42bc98bd8fb714d0a72878411bafaf7bd23dc0ef4d857bef736"
            },
            "bank":{
                "userid":"Citigroup",
                "display_name":"Citigroup Inc.",
                "ext_pub_key":"xpub661MyMwAqRbcGoBoaGAnTrG7ZY3LBZBeRR5iPyJYMNrw9RzTbqBQWLp3Weem4r9z6aEmuDinrL76G5oyFZL2szUw3LREPvoDiQzTTiHjKJM",
                "bracket_key":"1GCwQCdqaUPMrRqR4jSAEqwuUpEnqjUQgE",
                "txz":"bcea8b44a38abc6ce0423387f6b415eeaef3bdf3014f3f68ffbeed198e21d4c4"
            }
        },
        "history":[
            {
                "event":"Send Contract",
                "timestamp":"Wed Apr 06 2016 14:33:32 GMT-0700 (PDT)",
                "bracketID":"464bce0f-922d-47ca-972e-6c23c2600d6d",
                "uuid":"8152470e-40ac-4494-a33d-8a5e7cf8e7a8"
            },
            {
                "event":"Contract",
                "timestamp":"Wed Apr 06 2016 14:40:31 GMT-0700 (PDT)",
                "bracketID":"464bce0f-922d-47ca-972e-6c23c2600d6d",
                "uuid":"8296e977-1753-4e8a-8da5-8390e2680a8a"
            },
            {
                "event":"Shipment",
                "timestamp":"Wed Apr 06 2016 14:40:52 GMT-0700 (PDT)",
                "bracketID":"464bce0f-922d-47ca-972e-6c23c2600d6d",
                "uuid":"0cf44902-d4af-4f3d-ae88-f5452fd1a6b6"
            },
            {
                "event":"Accept Contract",
                "timestamp":"Wed Apr 06 2016 14:42:08 GMT-0700 (PDT)",
                "bracketID":"464bce0f-922d-47ca-972e-6c23c2600d6d",
                "uuid":"a01188d5-51f4-4b04-bd1d-9dc6822e303c"
            }
        ],
        "accords":[
            {
                "label":"Contract",
                "state":"complete",
                "uuid":"8296e977-1753-4e8a-8da5-8390e2680a8a",
                "msigKey":"3AGmpwWWxDzdCDCKUfb7gKrApic43AuDXv",
                "txz":"fa524c9e4613038b910a30ae22f9bcdb221289d26a0fdb3000e1430ae88b1f14",
                "by":"buyer",
                "sigs":[
                    {
                        "publicKey":"0300bea7d4826b0a15b6d6f001a79b2851a34db6c9dd79764426b3c0e79889cba6",
                        "prevTxId":"bcea8b44a38abc6ce0423387f6b415eeaef3bdf3014f3f68ffbeed198e21d4c4",
                        "outputIndex":4,
                        "inputIndex":0,
                        "signature":"3044022012627454e5bf78115ba667e49a55bf815a21e77ddc0904db060eae7327365c7b02200c567f08376b415a2cfae6ec0199ca041fa144ff95e2beaaa772a2ecf20b4bfc",
                        "sigtype":1,
                        "timestamp":"April 6, 2016 2:33 PM",
                        "sigOwner":"FordMotors"
                    },
                    {
                        "publicKey":"03b373391dbae4f2680b8430b4f6dd6febf57b40fdd3186bfb2fd85bf358a2c7c2",
                        "prevTxId":"bcea8b44a38abc6ce0423387f6b415eeaef3bdf3014f3f68ffbeed198e21d4c4",
                        "outputIndex":4,
                        "inputIndex":0,
                        "signature":"3044022046b2eb540317c5ce157fbbf1b59862ddb8117346923ab3d822bc7e10d15a4ecf02204f5cf128703fe259069a19ac772752aef073714bdd86bb24e02ce1969c01d11e",
                        "sigtype":1,
                        "timestamp":"April 6, 2016 2:40 PM",
                        "sigOwner":"Goodyear"
                    }
                ],
                "depends":[

                ],
                "terms":{
                    "payment-type":"bbo-backed",
                    "drawee":"",
                    "PO Number":"21312",
                    "":"undefined"
                },
                "documents":{
                    "PO":{
                        "Document Link":"uploads/464bce0f-922d-47ca-972e-6c23c2600d6d/8296e977-1753-4e8a-8da5-8390e2680a8a/_OPEN_ACCOUNT_CONTRACT.pdf",
                        "PO Number":"",
                        "uuid":"0c187a22-74bd-4220-bfa3-6469ceb1e951",
                        "msigKey":"12xwvceKHeFMmb1XWJdr1G7mKEcd6pR61c",
                        "secretKey":"8XMBYR7KPu+0OzZ5cB+z/WFzSk2RFN5rHVPWThwYUHU=",
                        "File Name":"_OPEN_ACCOUNT_CONTRACT.pdf",
                        "DocHash":"SiEgOb+meB1A3ktD5b74EOZhA21IFE/IKKsk7WaHT5p63yc+tCWLj2sTIKmD1mkQHjtqtqRRN48kf/NcbaraRg==",
                        "txz":"e18617fb09c86e2e6c8320215a8da5f03d0ee913181130b94b9e0c627cbdd1e4"
                    }
                },
                "completedOn":"April 6, 2016 2:40 PM"
            },
            {
                "label":"Shipment",
                "state":"complete",
                "uuid":"0cf44902-d4af-4f3d-ae88-f5452fd1a6b6",
                "msigKey":"346GEQjFc76TCdpeDukNcWQS9wQX8yaKYS",
                "by":"buyer",
                "txz":"8fa6fd614202a2d06a831d1634e235ac510db2c0071660bc6a365b8a7ee4a5ac",
                "sigs":[
                    {
                        "publicKey":"02f152625d544106a2a55adfae1a3f98f2fe05abb81c95dfa1b199dee1796478f1",
                        "prevTxId":"bcea8b44a38abc6ce0423387f6b415eeaef3bdf3014f3f68ffbeed198e21d4c4",
                        "outputIndex":5,
                        "inputIndex":0,
                        "signature":"304402201c3ec6a539b21086acdbbc0b2206a6611852eece6787077fa15e99ce38bc9a6f022064cfba5907dfc49ecd6e857dbd2320457b49bdea761b6a75f44f124a319782bb",
                        "sigtype":1,
                        "timestamp":"April 6, 2016 2:33 PM",
                        "sigOwner":"FordMotors"
                    },
                    {
                        "publicKey":"025ca48ec62bdc1f466734935d2a50bd10c6660aa9ccbcbb57f8d4c4aa590c9796",
                        "prevTxId":"bcea8b44a38abc6ce0423387f6b415eeaef3bdf3014f3f68ffbeed198e21d4c4",
                        "outputIndex":5,
                        "inputIndex":0,
                        "signature":"304402204d1a3ea8d10cbaaed6a126bb97164cccb72e22786d92e9d6bd49845118e02cf40220228ffa80cbff1ff48ee8a250e91bdbecf76b66305e2bea609d2372db032cc76f",
                        "sigtype":1,
                        "timestamp":"April 6, 2016 2:40 PM",
                        "sigOwner":"Goodyear"
                    }
                ],
                "depends":[
                    "Contract"
                ],
                "terms":{
                    "amount":"",
                    "payment-terms":"",
                    "description":"",
                    "origin":"",
                    "destination":"",
                    "instructions":"",
                    "Payment Amount":"100000",
                    "Currency":"USD",
                    "Payment Terms":"Net60",
                    "Description of Goods and/or Services":"asoiunasd",
                    "Port of Loading/Airport of Departure":"adsniousad",
                    "Port of Discharge/Airport of Destination":"asnoiasda",
                    "Additonal Payment Instructions":"Skuchain 464bce0f-922d-47ca-972e-6c23c2600d6d\r\n",
                    "Payment Amount and Currency":"100,000 USD",
                    "":"undefined"
                },
                "completedOn":"April 6, 2016 2:40 PM"
            }
        ],
        "clauses":[
            {
                "label":"Send Contract",
                "by":"buyer",
                "state":"complete",
                "uuid":"8152470e-40ac-4494-a33d-8a5e7cf8e7a8",
                "msigKey":"3H4WUjh2RNjwv3mv8hK59g7Eh6FDHEYT3e",
                "accord":"Contract",
                "facilities":[
                    "Download PO"
                ],
                "depends":[

                ],
                "completedOn":"April 6, 2016 2:33 PM",
                "txz":"c25925790e08e940f7109c975860b54e6960c104c133c06721b41e6b73fcf2c3"
            },
            {
                "label":"Accept Contract",
                "by":"seller",
                "byname":"",
                "state":"complete",
                "uuid":"a01188d5-51f4-4b04-bd1d-9dc6822e303c",
                "msigKey":"3EW1ufzzaZupNFWPo1nutPXSPKkW3zQfz7",
                "accord":"Contract",
                "facilities":[

                ],
                "depends":[
                    "Send Contract",
                    "Contract",
                    "Shipment"
                ],
                "completedOn":"April 6, 2016 2:42 PM",
                "txz":"da874fcd10bbd42bc98bd8fb714d0a72878411bafaf7bd23dc0ef4d857bef736"
            },
            {
                "label":"Ship Goods",
                "by":"seller",
                "byname":"",
                "state":"incomplete",
                "uuid":"f9eb9c5d-7edb-4ea0-a486-4c10fd67ef72",
                "msigKey":"36gHfSxjuCCxvWpjvq3oxevmQcuMTry8kU",
                "accord":"Shipment",
                "facilities":[
                    "View Commercial Invoice",
                    "View Logistics Document"
                ],
                "depends":[
                    "Accept Contract"
                ],
                "documents":{
                    "BBO Contract":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Buyer Name":"",
                            "Seller Name":"",
                            "Additional Payment Instructions":""
                        },
                        "uuid":"be81b92c-0838-4cad-a839-351aa7cb83c0",
                        "msigKey":"13J53qLyH6D4iYRKHJG32K2ZF6eRVDn6T6"
                    },
                    "Commercial Invoice":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Description of Goods":"",
                            "PO Number":"",
                            "Inco Terms":"",
                            "Payment Terms":"",
                            "Invoice Number":"",
                            "Invoice Value":"",
                            "Claim (Draft) Value":""
                        },
                        "uuid":"d741c42a-c5b1-43e3-8c40-f76e89cb743d",
                        "msigKey":"1B4M9WUFzsVHMCTrxfwXbyVaTn8RfPcFyc"
                    },
                    "Logistics":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "MAWB":"",
                            "Destination Port":"",
                            "Pieces":"",
                            "Weight":"",
                            "Date of Shipment":""
                        },
                        "uuid":"1fd19a02-1cc4-44e8-9548-a6846f10032a",
                        "msigKey":"1DbUQkj8UL3qMf8a1R5e1xrw7ZjbNwjzWD"
                    }
                }
            },
            {
                "label":"Accept Shipment",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"2fc2067e-bcee-4fcb-99bc-ac8d80c0aa60",
                "accord":"Shipment",
                "msigKey":"3Mfyz7HSNtWsKoujH2DWuZLJfsbaoeVfHD",
                "verifyCount":"",
                "depends":[
                    "Ship Goods"
                ],
                "documents":{
                    "BBO Contract":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Buyer Name":"",
                            "Seller Name":"",
                            "Additional Payment Instructions":""
                        },
                        "uuid":"c7dd6ea8-d389-44be-a714-89562b6fd3fb",
                        "msigKey":"1GSjyRR4WyeiPyPS4NVjL42u4HBehqHpQ2"
                    },
                    "Commercial Invoice":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Description of Goods":"",
                            "PO Number":"",
                            "Inco Terms":"",
                            "Payment Terms":"",
                            "Invoice Number":"",
                            "Invoice Value":"",
                            "Claim (Draft) Value":""
                        },
                        "uuid":"a248d169-c2ea-4534-a3af-6feb30b9d144",
                        "msigKey":"1HGipNKgABSo2712dunT1EJjjWHfPJB8Vy"
                    },
                    "Logistics":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "MAWB":"",
                            "Destination Port":"",
                            "Pieces":"",
                            "Weight":"",
                            "Date of Shipment":""
                        },
                        "uuid":"0bd9f48a-ea0b-49d5-b4e6-1714e9ef09ce",
                        "msigKey":"1661BqYijT1Qdc547m6hLegQVCD2VZ6rFm"
                    }
                }
            },
            {
                "label":"Receive Payment",
                "by":"seller",
                "byname":"",
                "state":"incomplete",
                "uuid":"904d5615-0f05-4397-a8a9-b31a59674a9e",
                "accord":"Shipment",
                "msigKey":"3GmBSfASWAgyCFzA94gyC8sN4pUzXH95Zf",
                "depends":[
                    "Ship Goods"
                ]
            },
            {
                "label":"Make Payment",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"0204d0ac-6c6a-4096-a98e-5167adcde735",
                "accord":"Shipment",
                "msigKey":"3JsrTkjfz1qJDnkTvogjar6TKTdg9rEqjf",
                "depends":[
                    "Accept Shipment"
                ]
            }
        ],
        "events":[

        ],
        "provisions":{
            "Scrip":{
                "label":"Scrip",
                "totalAmount":50000,
                "availableAmount":50000,
                "allocatedBy":"buyer",
                "txz":"",
                "mintedBy":"Citigroup",
                "constraints":"",
                "availedBy":{

                },
                "amount":"50,000 USD",
                "available":true,
                "uuid":"ded465bc-f1aa-45ae-b15b-c3dc8805c148"
            }
        },
        "pub_key":"",
        "mintTx":"bcea8b44a38abc6ce0423387f6b415eeaef3bdf3014f3f68ffbeed198e21d4c4",
        "creator":"FordMotors",
        "updatedAt":"April 6, 2016",
        "amount":"100000"
    },
    {
        "uuid":"268d34c9-c103-445e-9b52-1de93a5bc5b7",
        "msigKey":"3LDCdFxHtzxpCLNZoCmVCP8omZN6SCpYS5",
        "status":"open",
        "title":"test of bank admin e-presentation",
        "type":"Letter of Credit",
        "LC Number":"",
        "participants":{
            "buyer":{
                "userid":"FordMotors",
                "display_name":"Ford Motor Co Ltd.",
                "ext_pub_key":"xpub661MyMwAqRbcFGNQvCDvDh4eNkoeUTjdL1cpgtDVUBLfvNh3B5Xt1ePv8eNxP7x8YMwy66otdwEjr6BMQg74cjHryp9Lo7GXK7isjmt6vv6",
                "bracket_key":"17FS6uqHztiUfr9q2GpX2jmhXs3RtvpXzG",
                "txz":"24c1385c7fea84a2b3858a2534d9ac1f700e7447e0a12db3c6ec52d1032feed0"
            },
            "seller":{
                "userid":"Goodyear",
                "display_name":"Goodyear Co.",
                "ext_pub_key":"xpub661MyMwAqRbcGubXfF9oHGt9X1wGD4dradS9BJQJ7TFbyvF4qrahzFp1mvD1PdKSu9mq98M3WTVzxYDiAo4t2rKAZG4qQqYPYFfbPGvZH3U",
                "bracket_key":"1Bc4KaHXqtwLKf7Ho5hJVeBKMoyLHV85Gp",
                "txz":"4c8da8a89adf2ce5bdfb13e57f879cd964d4d3a6c5b2fa71e2e39bfe07a4f99d"
            },
            "bank":{
                "userid":"Citigroup",
                "display_name":"Citigroup Inc.",
                "ext_pub_key":"xpub661MyMwAqRbcGoBoaGAnTrG7ZY3LBZBeRR5iPyJYMNrw9RzTbqBQWLp3Weem4r9z6aEmuDinrL76G5oyFZL2szUw3LREPvoDiQzTTiHjKJM",
                "bracket_key":"1A8ne5dSwjh74FAgNv1FY2MWaTBvjQLfRq",
                "txz":"e46d18d501be0b0b5f622c5d8c33d0a526f08aa90c942eedc0a3549cd5dab162"
            }
        },
        "history":[
            {
                "event":"Send Contract",
                "timestamp":"Thu Apr 07 2016 11:03:08 GMT-0700 (PDT)",
                "bracketID":"268d34c9-c103-445e-9b52-1de93a5bc5b7",
                "uuid":"0101925c-0162-4130-815c-4639daef7c4f"
            },
            {
                "event":"Contract",
                "timestamp":"Thu Apr 07 2016 11:04:42 GMT-0700 (PDT)",
                "bracketID":"268d34c9-c103-445e-9b52-1de93a5bc5b7",
                "uuid":"bff07d11-5270-46f5-9ece-05d020a6ed84"
            },
            {
                "event":"Shipment",
                "timestamp":"Thu Apr 07 2016 11:06:25 GMT-0700 (PDT)",
                "bracketID":"268d34c9-c103-445e-9b52-1de93a5bc5b7",
                "uuid":"74fc61a3-a4eb-4142-9427-fc07a7c47a86"
            },
            {
                "event":"Accept Contract",
                "timestamp":"Thu Apr 07 2016 11:07:09 GMT-0700 (PDT)",
                "bracketID":"268d34c9-c103-445e-9b52-1de93a5bc5b7",
                "uuid":"eca433e9-e3c1-4273-83a8-62d0af8beeeb"
            },
            {
                "event":"Received LC",
                "timestamp":"Thu Apr 07 2016 11:19:43 GMT-0700 (PDT)",
                "bracketID":"268d34c9-c103-445e-9b52-1de93a5bc5b7",
                "uuid":"73f4e4a9-fd3b-447a-b918-ad5d8c1e5036"
            },
            {
                "event":"Ship Goods",
                "timestamp":"Thu Apr 07 2016 11:21:13 GMT-0700 (PDT)",
                "bracketID":"268d34c9-c103-445e-9b52-1de93a5bc5b7",
                "uuid":"41c0324b-62bb-4fb0-8623-2be2ef7cd865"
            }
        ],
        "accords":[
            {
                "label":"Contract",
                "state":"complete",
                "uuid":"bff07d11-5270-46f5-9ece-05d020a6ed84",
                "msigKey":"3DKRWcSahxHpBNTYVadDrAjh34YN2bnJhz",
                "by":"seller",
                "txz":"b87f6e00f9153c35d5e7077110cd388d5f26c8b3e018a3996ee892f14a6999ca",
                "sigs":[
                    {
                        "publicKey":"03c89ca53d9852b1094c0336ceb8ea568d3a9e704736a5887e4c670d37abefd9bf",
                        "prevTxId":"e46d18d501be0b0b5f622c5d8c33d0a526f08aa90c942eedc0a3549cd5dab162",
                        "outputIndex":4,
                        "inputIndex":0,
                        "signature":"3045022100d6b687b50fdd53ec4c32c879e2fa272c1b044ba358b97f654f66d296b173b7ba02202eba6ce48413acab5da1220a5829149c7e65a6c4dcf0b6b17a353a3cec824a13",
                        "sigtype":1,
                        "timestamp":"April 7, 2016 11:03 AM",
                        "sigOwner":"Goodyear"
                    },
                    {
                        "publicKey":"03b52afbcb666b1237457b8a86adf75e87f3df2a173cfa1bb5e50fa79c5d74d7b5",
                        "prevTxId":"e46d18d501be0b0b5f622c5d8c33d0a526f08aa90c942eedc0a3549cd5dab162",
                        "outputIndex":4,
                        "inputIndex":0,
                        "signature":"3045022100b21e552e63ee2abe7cc2f0055c3e3b935063ac3ba470714b232e07455369c223022012d9e97ee69dc4dd5ce28fe893eb3a8bfbad05e9610be16bb9b27584eb161493",
                        "sigtype":1,
                        "timestamp":"April 7, 2016 11:04 AM",
                        "sigOwner":"FordMotors"
                    }
                ],
                "depends":[

                ],
                "terms":{
                    "payment-type":"data-lc-backed",
                    "issuing-bank":"",
                    "PO Number":"11",
                    "Issuing Bank":"Wells"
                },
                "documents":{
                    "PO":{
                        "Document Link":"uploads/268d34c9-c103-445e-9b52-1de93a5bc5b7/bff07d11-5270-46f5-9ece-05d020a6ed84/purchase_order.pdf",
                        "PO Number":"",
                        "uuid":"f47af198-6027-482c-9d3e-4070a12b2175",
                        "msigKey":"1HQiHR2jbLAzj4b5PGxZzXssV1uJpnza7u",
                        "secretKey":"VPAfH9/aqRdoF99FcdMHi9lqJ6Xb3SwbJOP2eeFKbUE=",
                        "File Name":"purchase_order.pdf",
                        "DocHash":"MnrU8TFKO5gZ1FoMm37FyG48D/wLp8xKAqSTEk1UYTwsFAlMYSFo8UNlwkry4nrsBcA7RElyT7CeuEucTkZM1A==",
                        "txz":"1c533bb3a8202da1bd6f53b7e6f29f4e604b3df0bd07963e7271f887c3a4162e"
                    }
                },
                "completedOn":"April 7, 2016 11:04 AM"
            },
            {
                "label":"Shipment",
                "state":"complete",
                "uuid":"74fc61a3-a4eb-4142-9427-fc07a7c47a86",
                "msigKey":"3DAX3yK6giSVecMA5W1srxjpSidzBxfed6",
                "txz":"69bb2b87929dd235641856a4bc9154532eec9783965116d34a1e5ab1fa90eb3e",
                "by":"seller",
                "sigs":[
                    {
                        "publicKey":"023301acf3e8d4b0ec2c2344f016e2cf40fa4e8b4e4612b004e0e54ca5204f3166",
                        "prevTxId":"e46d18d501be0b0b5f622c5d8c33d0a526f08aa90c942eedc0a3549cd5dab162",
                        "outputIndex":5,
                        "inputIndex":0,
                        "signature":"30440220638cdfc1aba4978e913eaf189816c27cc7d5e1893a7a0fed3dfce1b01b03c29c02202fd43b4d2a71ffde2ba9e5aef220169efcc1ec6fee280b09f933b867733914a9",
                        "sigtype":1,
                        "timestamp":"April 7, 2016 11:03 AM",
                        "sigOwner":"Goodyear"
                    },
                    {
                        "publicKey":"02a745c450547a1248098ba01b63f6d78d2df27681c077ae8cedf8289027a18ddd",
                        "prevTxId":"e46d18d501be0b0b5f622c5d8c33d0a526f08aa90c942eedc0a3549cd5dab162",
                        "outputIndex":5,
                        "inputIndex":0,
                        "signature":"304402204ba16c1002100048ddaa7406809f4f6a872fe8828e428ef45e44b9ea7e8fdffa022025c0d3821ff78d085f377494f29128532b4cb3a905fcd4c012196c4377da10d3",
                        "sigtype":1,
                        "timestamp":"April 7, 2016 11:06 AM",
                        "sigOwner":"FordMotors"
                    }
                ],
                "depends":[
                    "Contract"
                ],
                "terms":{
                    "amount":"",
                    "payment-terms":"",
                    "description":"",
                    "origin":"",
                    "destination":"",
                    "instructions":"",
                    "Payment Amount":"1",
                    "Currency":"USD",
                    "Payment Terms":"1",
                    "Description of Goods and/or Services":"1",
                    "Port of Loading/Airport of Departure":"1",
                    "Port of Discharge/Airport of Destination":"1",
                    "Instructions to Paying/Accepting/Negotiating Bank":"Skuchain 268d34c9-c103-445e-9b52-1de93a5bc5b7",
                    "Payment Amount and Currency":"1 USD",
                    "Issuing Bank":"Wells",
                    "":"undefined"
                },
                "completedOn":"April 7, 2016 11:06 AM"
            }
        ],
        "clauses":[
            {
                "label":"Send Contract",
                "by":"seller",
                "state":"complete",
                "uuid":"0101925c-0162-4130-815c-4639daef7c4f",
                "msigKey":"37Ax3DNTzeKa91PEa9YEAcmjiR94bLcDiT",
                "accord":"Contract",
                "facilities":[
                    "Download PO"
                ],
                "depends":[

                ],
                "completedOn":"April 7, 2016 11:03 AM",
                "txz":"188565f05713a4cdb1bf7a69deed885a8a38e538550476b610f32fbec9deebf5"
            },
            {
                "label":"Accept Contract",
                "by":"buyer",
                "byname":"",
                "state":"complete",
                "uuid":"eca433e9-e3c1-4273-83a8-62d0af8beeeb",
                "msigKey":"3Q9zDx63q2P6DGseDNn7zUzVpr8ZuVjbbP",
                "accord":"Contract",
                "facilities":[
                    "Download MT700"
                ],
                "depends":[
                    "Contract",
                    "Shipment",
                    "Send Contract"
                ],
                "completedOn":"April 7, 2016 11:07 AM",
                "txz":"24c1385c7fea84a2b3858a2534d9ac1f700e7447e0a12db3c6ec52d1032feed0",
                "events":[
                    {
                        "label":"Received LC",
                        "by":"bank",
                        "byname":"",
                        "state":"complete",
                        "uuid":"73f4e4a9-fd3b-447a-b918-ad5d8c1e5036",
                        "msigKey":"",
                        "depends":[
                            "Accept Contract"
                        ],
                        "completedOn":"April 7, 2016 11:19 AM"
                    }
                ]
            },
            {
                "label":"Ship Goods",
                "by":"seller",
                "byname":"",
                "state":"complete",
                "uuid":"41c0324b-62bb-4fb0-8623-2be2ef7cd865",
                "msigKey":"3JGfq5Svnkfzn45YF2cDSbZ4HzxqYABCRw",
                "accord":"Shipment",
                "facilities":[
                    "View e-Presentation"
                ],
                "depends":[
                    "Accept Contract",
                    "Received LC"
                ],
                "documents":{
                    "Letter of Credit":{
                        "Document Link":"uploads/268d34c9-c103-445e-9b52-1de93a5bc5b7/41c0324b-62bb-4fb0-8623-2be2ef7cd865/LC.pdf",
                        "DocHash":"9eVaPZrERp5ewnP50bcoF/dA23okBww/fHXciXUO+vx0uWbEy03TyaelTqjHmoW94HhMbQO/Qg2WuZrWBGb63w==",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "Fields":{
                            "LC Number":"78882425",
                            "Latest Presentation Date":"DOCUMENT(S) MUST BE PRESENTED FOR NEGOTIATION WITHIN 21 DAYS AFTER THE DATE OF SHIPMENT BUT NOT LATER THAN THE VALIDITY OF THIS CREDIT",
                            "Applicant Name":"FORDMOTORS",
                            "Beneficiary Name":"GOODYEAR",
                            "Consign To":"1",
                            "Notify":"1"
                        },
                        "uuid":"ccc7ba89-5632-4b54-ade7-e8d3cc80d717",
                        "msigKey":"1EZk4ubyHVPfJSpPraRBK9oqRSd3fQ689R",
                        "secretKey":"c0vWvY4WE1DufaWPGiH0uYlR7KA+vJo9varIyNE+mSs=",
                        "File Name":"LC.pdf",
                        "txz":"d6dc780a1af344e8b37646afe4a8ff3443ca1efbd7e7a929a1f5ca4d156a0c85"
                    },
                    "Commercial Invoice":{
                        "Document Link":"uploads/268d34c9-c103-445e-9b52-1de93a5bc5b7/41c0324b-62bb-4fb0-8623-2be2ef7cd865/CI.pdf",
                        "DocHash":"KCbufWGTCMMg4Zv713WXdWkbV5WzAlWXCqdQNi2lxazVaUx/Rckbsa41RJcxiUJPeL8D7VMz6/yCtvgxNwsLaw==",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Description of Goods":"1",
                            "PO Number":"11",
                            "Inco Terms":"UCP LATEST VERSION",
                            "Payment Terms":"1",
                            "Invoice Number":"123",
                            "Invoice Value":"1 USD",
                            "Claim (Draft) Value":"1 USD"
                        },
                        "uuid":"6d869148-6575-4232-a405-128a655c1f15",
                        "msigKey":"1KcUKwsfLtbnaw95pUGyW6JGNvF7p2GG4J",
                        "secretKey":"u6O4tJRfS/R0fE3kcPA8WWj4oF/0LgMtXC7LN2Z8g48=",
                        "File Name":"CI.pdf",
                        "txz":"9491ec20e783a7a1c36a6c4d73c300bdcecf17943d24405e3da49f715202011a"
                    },
                    "Logistics":{
                        "Document Link":"uploads/268d34c9-c103-445e-9b52-1de93a5bc5b7/41c0324b-62bb-4fb0-8623-2be2ef7cd865/Logistics.pdf",
                        "DocHash":"VskYPvqNcXpcS6OAkadXfKRbn02npSC8n564XghmZU2YBk2Uj+j31GyHfd7az0f/0q8u9TbJKi+zVYq30W9+nA==",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "Fields":{
                            "MAWB":"1",
                            "Destination Port":"1",
                            "Pieces":"1",
                            "Weight":"1",
                            "Date of Shipment":"1"
                        },
                        "uuid":"69bbaee9-2750-4e6d-ba86-0ffa3e849a24",
                        "msigKey":"1EScqHih4Df3qPy7DAsXbAyBwa9mcu8KzY",
                        "secretKey":"91NBEbdHkbZBBYKr0bnoU5jealt0ruArG+VR+uGczeE=",
                        "File Name":"Logistics.pdf",
                        "txz":"1fcb2369cc1d4464201883d56cb2910648e1274fab5551a1e4ae936f6f5dfcde"
                    }
                },
                "completedOn":"April 7, 2016 11:21 AM",
                "txz":"4c8da8a89adf2ce5bdfb13e57f879cd964d4d3a6c5b2fa71e2e39bfe07a4f99d"
            },
            {
                "label":"Accept Shipment",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"d941a9fb-0a32-4739-b6c1-f9e9dae86c94",
                "accord":"Shipment",
                "msigKey":"3BFgCKC5CJ2BT4JZUpTZBynMywZ9Q8Ngra",
                "depends":[
                    "Ship Goods"
                ],
                "documents":{
                    "Letter of Credit":{
                        "Document Link":"",
                        "DocHash":"",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "verified":"",
                        "Fields":{
                            "LC Number":"",
                            "Latest Presentation Date":"",
                            "Applicant Name":"",
                            "Beneficiary Name":"",
                            "Consign To":"",
                            "Notify":""
                        },
                        "uuid":"f62c2ff5-0b83-4709-bad3-a0d643fd1b49",
                        "msigKey":"191eGc7ARu38icNSHPSkcwN7mzm3LPDYb4"
                    },
                    "Commercial Invoice":{
                        "Document Link":"",
                        "DocHash":"",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "verified":"",
                        "Fields":{
                            "Description of Goods":"",
                            "PO Number":"",
                            "Inco Terms":"",
                            "Payment Terms":"",
                            "Invoice Number":"",
                            "Invoice Value":"",
                            "Claim (Draft) Value":""
                        },
                        "uuid":"4413d2b1-54a0-4f74-8ac3-2b035f7f8cb4",
                        "msigKey":"1LngaHEZXnztys2wRFZYp3X9fVnWbuu6mm"
                    },
                    "Logistics":{
                        "Document Link":"",
                        "DocHash":"",
                        "BlockchainTxID":"",
                        "Nonce":"",
                        "verified":"",
                        "Fields":{
                            "MAWB":"",
                            "Destination Port":"",
                            "Pieces":"",
                            "Weight":"",
                            "Date of Shipment":""
                        },
                        "uuid":"4b8f98e6-8b5f-482b-a207-260226cafd24",
                        "msigKey":"19ct5nAJAoJNWxwZYDDp15d4WKv52krFBk"
                    }
                }
            },
            {
                "label":"Receive Payment",
                "by":"seller",
                "byname":"",
                "state":"incomplete",
                "uuid":"32f4fa53-5bad-42b7-8d60-98fd11de32e7",
                "accord":"Shipment",
                "msigKey":"3PbFtVovxTqcYcaFybLCFxk4cmCuoEscCc",
                "depends":[
                    "Ship Goods",
                    "Accept Shipment"
                ]
            },
            {
                "label":"Make Payment",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"87c21a2a-4a62-47f5-ad1f-8309702d8740",
                "accord":"Shipment",
                "msigKey":"37kTLKgM82iDBhUhESU52vPf3TujC1y2on",
                "depends":[
                    "Accept Shipment"
                ]
            }
        ],
        "events":[
            {
                "label":"Submit LC Application",
                "by":"buyer",
                "byname":"",
                "state":"complete",
                "uuid":"08908825-7d09-4f6c-8798-3c9cc7fb9e57",
                "msigKey":"",
                "accord":"Contract",
                "depends":[
                    "Accept Contract"
                ],
                "documents":{
                    "MT700":{

                    }
                }
            },
            {
                "label":"Received LC",
                "by":"bank",
                "byname":"",
                "state":"complete",
                "uuid":"73f4e4a9-fd3b-447a-b918-ad5d8c1e5036",
                "msigKey":"",
                "depends":[
                    "Accept Contract"
                ],
                "completedOn":"April 7, 2016 11:19 AM"
            },
            {
                "label":"Verify Documents",
                "by":"bank",
                "byname":"",
                "state":"incomplete",
                "uuid":"822bca30-3cab-4c84-97b1-db183ad1244e",
                "msigKey":"",
                "depends":[
                    "Received LC",
                    "Ship Goods"
                ]
            }
        ],
        "pub_key":"",
        "mintTx":"e46d18d501be0b0b5f622c5d8c33d0a526f08aa90c942eedc0a3549cd5dab162",
        "creator":"FordMotors",
        "updatedAt":"April 7, 2016",
        "amount":"1"
    },
    {
        "uuid":"8d64057f-a622-46a0-9d61-ac098b9c3500",
        "msigKey":"3FxmEA1BPZqVPUBVxJoF76nyuLdNTn74RP",
        "status":"open",
        "title":"Trader bracket again",
        "type":"Open Account",
        "trader":"seller",
        "children":[

        ],
        "participants":{
            "buyer":{
                "userid":"FordMotors",
                "display_name":"Ford Motor Co Ltd.",
                "ext_pub_key":"xpub661MyMwAqRbcFGNQvCDvDh4eNkoeUTjdL1cpgtDVUBLfvNh3B5Xt1ePv8eNxP7x8YMwy66otdwEjr6BMQg74cjHryp9Lo7GXK7isjmt6vv6",
                "bracket_key":"13zFfYStYJTncL1t77YpZdepkKcBy5A3Bp",
                "txz":"8f4a9825f23578d966bdf928a5b79d2c0dbe3170b1e99b5772ec6583b7d858ac"
            },
            "seller":{
                "userid":"Goodyear",
                "display_name":"Goodyear Co.",
                "ext_pub_key":"xpub661MyMwAqRbcGubXfF9oHGt9X1wGD4dradS9BJQJ7TFbyvF4qrahzFp1mvD1PdKSu9mq98M3WTVzxYDiAo4t2rKAZG4qQqYPYFfbPGvZH3U",
                "bracket_key":"1Du7xMKXgvMAC4Wz6HfgWRzY1rsHS56ZFA",
                "txz":"64b1cc58c0557ba08ecffa1076de3981865ccc95cdc5342e78be6d9520855fde"
            },
            "bank":{
                "userid":"Citigroup",
                "display_name":"Citigroup Inc.",
                "ext_pub_key":"xpub661MyMwAqRbcGoBoaGAnTrG7ZY3LBZBeRR5iPyJYMNrw9RzTbqBQWLp3Weem4r9z6aEmuDinrL76G5oyFZL2szUw3LREPvoDiQzTTiHjKJM",
                "bracket_key":"1ADHEgrhUNyVBiN8eQAd21y8ApYQEu9G8U",
                "txz":"8f4a9825f23578d966bdf928a5b79d2c0dbe3170b1e99b5772ec6583b7d858ac"
            }
        },
        "history":[
            {
                "event":"Send Contract",
                "timestamp":"Wed Apr 06 2016 14:42:49 GMT-0700 (PDT)",
                "bracketID":"8d64057f-a622-46a0-9d61-ac098b9c3500",
                "uuid":"0d2b6896-e31f-408e-b2f8-649a399b94bb"
            }
        ],
        "accords":[
            {
                "label":"Contract",
                "state":"incomplete",
                "uuid":"e23a9c12-e680-4483-89da-f40533235065",
                "msigKey":"3EFkT28z9kJcNVAW133Rvvk1xCGu4jFDEw",
                "txz":"8f4a9825f23578d966bdf928a5b79d2c0dbe3170b1e99b5772ec6583b7d858ac",
                "by":"seller",
                "sigs":[

                ],
                "depends":[

                ],
                "terms":{
                    "payment-type":"",
                    "drawee":""
                },
                "documents":{
                    "PO":{
                        "Document Link":"",
                        "PO Number":"",
                        "uuid":"5979ebf0-45ff-4e50-9064-dc043ca6a825",
                        "msigKey":"12qdj4HPdh7yeq4vYQZnXTUF9kwKkc5jSW"
                    }
                }
            },
            {
                "label":"Shipment",
                "state":"incomplete",
                "uuid":"0e2fbc9f-600a-4ac4-a3f9-27ad1ac82aae",
                "msigKey":"37XN3snM1k4YanosrJwzFKXQxFFzfvHXdy",
                "by":"seller",
                "txz":"8f4a9825f23578d966bdf928a5b79d2c0dbe3170b1e99b5772ec6583b7d858ac",
                "sigs":[

                ],
                "depends":[
                    "Contract"
                ],
                "terms":{
                    "amount":"",
                    "payment-terms":"",
                    "description":"",
                    "origin":"",
                    "destination":"",
                    "instructions":""
                }
            }
        ],
        "clauses":[
            {
                "label":"Send Contract",
                "by":"seller",
                "state":"complete",
                "uuid":"0d2b6896-e31f-408e-b2f8-649a399b94bb",
                "msigKey":"3FN4EsuTXAsS3SeDBiAJWS4wmbj1jXCL71",
                "accord":"Contract",
                "facilities":[
                    "Download PO"
                ],
                "depends":[

                ],
                "completedOn":"April 6, 2016 2:42 PM",
                "txz":"64b1cc58c0557ba08ecffa1076de3981865ccc95cdc5342e78be6d9520855fde"
            },
            {
                "label":"Accept Contract",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"dee509d3-f96f-4ee9-bd37-6d1e1d1e0ff7",
                "msigKey":"3BGViPjAahDVKTEY3UZ3FX1zADGBPMtFft",
                "accord":"Contract",
                "facilities":[

                ],
                "depends":[
                    "Send Contract",
                    "Contract",
                    "Shipment"
                ]
            },
            {
                "label":"Ship Goods",
                "by":"seller",
                "byname":"",
                "state":"incomplete",
                "uuid":"72f1affe-3f35-4107-8aee-a366e471d307",
                "msigKey":"34vY3PpY4g7rHcPgKrp6PZqc3RyS6Zakaa",
                "accord":"Shipment",
                "facilities":[
                    "View Commercial Invoice",
                    "View Logistics Document"
                ],
                "depends":[
                    "Accept Contract"
                ],
                "documents":{
                    "Contract":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Buyer Name":"",
                            "Seller Name":"",
                            "Additional Payment Instructions":""
                        },
                        "uuid":"d83fb036-04d7-4c16-a934-dcac2c824710",
                        "msigKey":"1JGYTSke7kUtqxg3ZJSTnS3J9pcvZtn2y6"
                    },
                    "Commercial Invoice":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Description of Goods":"",
                            "PO Number":"",
                            "Inco Terms":"",
                            "Payment Terms":"",
                            "Invoice Number":"",
                            "Invoice Value":"",
                            "Claim (Draft) Value":""
                        },
                        "uuid":"901f1bc5-b7c3-4eaf-8908-6553b8b3534f",
                        "msigKey":"1ERB4ZX5UbAJEcFesLqZaV21s8nE6Fc2fm"
                    },
                    "Logistics":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "MAWB":"",
                            "Destination Port":"",
                            "Pieces":"",
                            "Weight":"",
                            "Date of Shipment":""
                        },
                        "uuid":"81627889-b36d-4c15-9bdd-eb553002a324",
                        "msigKey":"1953z4sEtniKUCUYvSN9TbmEXXCPWoueLd"
                    }
                }
            },
            {
                "label":"Accept Shipment",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"10839c95-3151-442e-a035-90447dd4123e",
                "accord":"Shipment",
                "msigKey":"3HhfHSaNbhqMj1QHzw7ggPLqCYy8vBGAt5",
                "verifyCount":"",
                "depends":[
                    "Ship Goods"
                ],
                "documents":{
                    "Contract":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Buyer Name":"",
                            "Seller Name":"",
                            "Additional Payment Instructions":""
                        },
                        "uuid":"66867213-6a7a-4e91-bba1-c06aa5c1a138",
                        "msigKey":"1MGVQ6qHDC1y1voVQDnQc6CCKmKwZQLLjh"
                    },
                    "Commercial Invoice":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "Description of Goods":"",
                            "PO Number":"",
                            "Inco Terms":"",
                            "Payment Terms":"",
                            "Invoice Number":"",
                            "Invoice Value":"",
                            "Claim (Draft) Value":""
                        },
                        "uuid":"1863c1c8-7eaa-498b-8ab7-ba169ed4aac7",
                        "msigKey":"1LWajA7V6bGhcgHAjhMMB8h6oCWJXyKqJs"
                    },
                    "Logistics":{
                        "Document Link":"",
                        "DocHash":"",
                        "TxID":"",
                        "Nonce":"",
                        "Fields":{
                            "MAWB":"",
                            "Destination Port":"",
                            "Pieces":"",
                            "Weight":"",
                            "Date of Shipment":""
                        },
                        "uuid":"432845c9-c5e8-46ff-a733-398c5ea1eae6",
                        "msigKey":"1N8oMnnEV23Uqt4koGj6e8xZxy98f1H8hM"
                    }
                }
            },
            {
                "label":"Receive Payment",
                "by":"seller",
                "byname":"",
                "state":"incomplete",
                "uuid":"b7248738-af57-4916-b00f-9003a8518313",
                "accord":"Shipment",
                "msigKey":"3LrTp3hKedbEBL7ZHZQxw3Hnhsyov6sXaW",
                "depends":[
                    "Ship Goods"
                ]
            },
            {
                "label":"Make Payment",
                "by":"buyer",
                "byname":"",
                "state":"incomplete",
                "uuid":"3dc55e8c-dcf1-4067-adc7-2dc1d3f7213c",
                "accord":"Shipment",
                "msigKey":"3Hsk5rBTQxfjM5yEvRkzxoVDmKvRmhDjWF",
                "depends":[
                    "Accept Shipment"
                ]
            }
        ],
        "events":[
            {
                "label":"Provided Financing",
                "by":"bank",
                "byname":"",
                "state":"incomplete",
                "uuid":"e6de9600-1c59-4f05-b624-fe147aa99a10",
                "msigKey":"",
                "depends":[
                    "Accept Contract"
                ]
            }
        ],
        "provisions":{
            "Financing":{
                "label":"Financing",
                "by":"bank",
                "amount":"",
                "txz":"",
                "constraints":"",
                "availedBy":{

                }
            }
        },
        "pub_key":"",
        "mintTx":"8f4a9825f23578d966bdf928a5b79d2c0dbe3170b1e99b5772ec6583b7d858ac",
        "sibling":"20042e17-eed3-4ddd-8c1f-001888481012",
        "creator":"Goodyear",
        "updatedAt":"April 6, 2016"
    }

];
