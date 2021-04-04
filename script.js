

const Web3 = require('web3');


var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));


var contractsArray = [];
let addr

async  function contractInitalize(contract,address=null){


  console.log("----------------------------------------------------------------------")
 
  let accounts= await web3.eth.getAccounts()
  
 
 
   instance = new web3.eth.Contract(contract,address)
  // console.log(await instance.methods)
  let funName= Object.keys(instance.methods)

  for(let i=2;i<funName.length;i=i+3){

      console.log(funName[i-2])
   
      console.log(await instance.methods[funName[i]]().call())
  }



  console.log("----------------------------------------------------------------------")




}

async function methodfinding(contract){

  console.log("---------------------------------------------------------------------------")
  instance = new web3.eth.Contract(contract,'0x0ed1BCc400aCd34593451e76f854992198995f52')
 // console.log(await instance.methods)
 let funName= Object.keys(instance.methods)

 for(let i=2;i<funName.length;i=i+3){
  
      console.log(funName[i])
    //  console.log(await instance.methods[funName[i]]().call())
 }

 console.log("----------------------------------------------------------------------")
}
try{
let DaiToken = {
  "contractName": "TokenFarm",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract DaiToken",
          "name": "_daitoken",
          "type": "address"
        },
        {
          "internalType": "contract DappToken",
          "name": "_dapptoken",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "daitoken",
      "outputs": [
        {
          "internalType": "contract DaiToken",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "dapptoken",
      "outputs": [
        {
          "internalType": "contract DappToken",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract DaiToken\",\"name\":\"_daitoken\",\"type\":\"address\"},{\"internalType\":\"contract DappToken\",\"name\":\"_dapptoken\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"constant\":true,\"inputs\":[],\"name\":\"daitoken\",\"outputs\":[{\"internalType\":\"contract DaiToken\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"dapptoken\",\"outputs\":[{\"internalType\":\"contract DappToken\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/vishnu/defi_tutorial/src/contracts/TokenFarm.sol\":\"TokenFarm\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/vishnu/defi_tutorial/src/contracts/DaiToken.sol\":{\"keccak256\":\"0xa499778b27d4a0c77a961ed6622441df8adfbc9dc12441dc8f150573fc2918ab\",\"urls\":[\"bzz-raw://1f7778dc92272f74480a1131da78381a366cc7d71117a08861606e8f05e30ff2\",\"dweb:/ipfs/QmPwB3cQR72eEgfxAt5az7RkgP4g6FdPcPvWF2bwe6tGWN\"]},\"/home/vishnu/defi_tutorial/src/contracts/DappToken.sol\":{\"keccak256\":\"0x1338550035d93eb68886e3109f09d018366ba9f60512d3997e4aa8b8d58c6a6c\",\"urls\":[\"bzz-raw://19bb614695694a40343db1301391176addb4fc31f8fac5b76ea2530edf99c787\",\"dweb:/ipfs/QmcDBCPayPczhjvRnQ6fChTRsqQvE7bZkSnfMhXbKJxCuY\"]},\"/home/vishnu/defi_tutorial/src/contracts/TokenFarm.sol\":{\"keccak256\":\"0xece33bacc38a98c81c4429a8588ae13b0207cf2da694dc5ec770b8194d512067\",\"urls\":[\"bzz-raw://3c55de8e3334a6b68cf8e763844f3dc63abc643fbc7e35fc4dd147c7a83bf49a\",\"dweb:/ipfs/QmaqVkmqQEousLqbRj7T1En9fa6ir88wKpcFmg1RatEeZE\"]}},\"version\":1}",
  "bytecode": "0x60806040526040518060400160405280600f81526020017f4461707020746f6b656e206661726d00000000000000000000000000000000008152506000908051906020019061004f929190610123565b5034801561005c57600080fd5b506040516104533803806104538339818101604052604081101561007f57600080fd5b81019080805190602001909291908051906020019092919050505081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506101c8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016457805160ff1916838001178555610192565b82800160010185558215610192579182015b82811115610191578251825591602001919060010190610176565b5b50905061019f91906101a3565b5090565b6101c591905b808211156101c15760008160009055506001016101a9565b5090565b90565b61027c806101d76000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306fdde031461004657806326a4fa21146100c9578063448e523014610113575b600080fd5b61004e61015d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561008e578082015181840152602081019050610073565b50505050905090810190601f1680156100bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100d16101fb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61011b610221565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101f35780601f106101c8576101008083540402835291602001916101f3565b820191906000526020600020905b8154815290600101906020018083116101d657829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea265627a7a7231582072c0970f89fe8cc3502f290e09ce92829e6ab80b253713747af97afcf1a3697964736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c806306fdde031461004657806326a4fa21146100c9578063448e523014610113575b600080fd5b61004e61015d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561008e578082015181840152602081019050610073565b50505050905090810190601f1680156100bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100d16101fb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61011b610221565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101f35780601f106101c8576101008083540402835291602001916101f3565b820191906000526020600020905b8154815290600101906020018083116101d657829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea265627a7a7231582072c0970f89fe8cc3502f290e09ce92829e6ab80b253713747af97afcf1a3697964736f6c63430005100032",
  "sourceMap": "89:280:3:-;;;114:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;221:145;8:9:-1;5:2;;;30:1;27;20:12;5:2;221:145:3;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;221:145:3;;;;;;;;;;;;;;;;;;;;;;;;;309:9;299:8;;:19;;;;;;;;;;;;;;;;;;348:10;337:9;;:21;;;;;;;;;;;;;;;;;;221:145;;89:280;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "89:280:3:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;89:280:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;114:37;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;114:37:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;158:24;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;188:26;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;114:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;158:24::-;;;;;;;;;;;;;:::o;188:26::-;;;;;;;;;;;;;:::o",
  "source": "pragma solidity >=0.4.21 <=0.7.2;\n\nimport \"./DaiToken.sol\";\n\nimport \"./DappToken.sol\";\n\n\ncontract TokenFarm{\n\n    string public name =\"Dapp token farm\";\n\n    DaiToken public daitoken;\n    DappToken public dapptoken;\n\n    constructor(DaiToken _daitoken,DappToken _dapptoken) public{\n                 daitoken= _daitoken;\n                 dapptoken= _dapptoken;\n\n    }\n\n}",
  "sourcePath": "/home/vishnu/defi_tutorial/src/contracts/TokenFarm.sol",
  "ast": {
    "absolutePath": "/home/vishnu/defi_tutorial/src/contracts/TokenFarm.sol",
    "exportedSymbols": {
      "TokenFarm": [
        446
      ]
    },
    "id": 447,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 420,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<=",
          "0.7",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:33:3"
      },
      {
        "absolutePath": "/home/vishnu/defi_tutorial/src/contracts/DaiToken.sol",
        "file": "./DaiToken.sol",
        "id": 421,
        "nodeType": "ImportDirective",
        "scope": 447,
        "sourceUnit": 181,
        "src": "35:24:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/vishnu/defi_tutorial/src/contracts/DappToken.sol",
        "file": "./DappToken.sol",
        "id": 422,
        "nodeType": "ImportDirective",
        "scope": 447,
        "sourceUnit": 362,
        "src": "61:25:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 446,
        "linearizedBaseContracts": [
          446
        ],
        "name": "TokenFarm",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 425,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 446,
            "src": "114:37:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 423,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "114:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4461707020746f6b656e206661726d",
              "id": 424,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "134:17:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_af8105c3950be036a765aed9c5e76d72d033ab752f7aae3787780b76d66f81f3",
                "typeString": "literal_string \"Dapp token farm\""
              },
              "value": "Dapp token farm"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 427,
            "name": "daitoken",
            "nodeType": "VariableDeclaration",
            "scope": 446,
            "src": "158:24:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DaiToken_$180",
              "typeString": "contract DaiToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 426,
              "name": "DaiToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 180,
              "src": "158:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DaiToken_$180",
                "typeString": "contract DaiToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 429,
            "name": "dapptoken",
            "nodeType": "VariableDeclaration",
            "scope": 446,
            "src": "188:26:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DappToken_$361",
              "typeString": "contract DappToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 428,
              "name": "DappToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 361,
              "src": "188:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DappToken_$361",
                "typeString": "contract DappToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 444,
              "nodeType": "Block",
              "src": "280:86:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 436,
                      "name": "daitoken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 427,
                      "src": "299:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DaiToken_$180",
                        "typeString": "contract DaiToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 437,
                      "name": "_daitoken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 431,
                      "src": "309:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DaiToken_$180",
                        "typeString": "contract DaiToken"
                      }
                    },
                    "src": "299:19:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DaiToken_$180",
                      "typeString": "contract DaiToken"
                    }
                  },
                  "id": 439,
                  "nodeType": "ExpressionStatement",
                  "src": "299:19:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 440,
                      "name": "dapptoken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 429,
                      "src": "337:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DappToken_$361",
                        "typeString": "contract DappToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 441,
                      "name": "_dapptoken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 433,
                      "src": "348:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DappToken_$361",
                        "typeString": "contract DappToken"
                      }
                    },
                    "src": "337:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DappToken_$361",
                      "typeString": "contract DappToken"
                    }
                  },
                  "id": 443,
                  "nodeType": "ExpressionStatement",
                  "src": "337:21:3"
                }
              ]
            },
            "documentation": null,
            "id": 445,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 431,
                  "name": "_daitoken",
                  "nodeType": "VariableDeclaration",
                  "scope": 445,
                  "src": "233:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_DaiToken_$180",
                    "typeString": "contract DaiToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 430,
                    "name": "DaiToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 180,
                    "src": "233:8:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DaiToken_$180",
                      "typeString": "contract DaiToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 433,
                  "name": "_dapptoken",
                  "nodeType": "VariableDeclaration",
                  "scope": 445,
                  "src": "252:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_DappToken_$361",
                    "typeString": "contract DappToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 432,
                    "name": "DappToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 361,
                    "src": "252:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DappToken_$361",
                      "typeString": "contract DappToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "232:41:3"
            },
            "returnParameters": {
              "id": 435,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "280:0:3"
            },
            "scope": 446,
            "src": "221:145:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 447,
        "src": "89:280:3"
      }
    ],
    "src": "0:369:3"
  },
  "legacyAST": {
    "absolutePath": "/home/vishnu/defi_tutorial/src/contracts/TokenFarm.sol",
    "exportedSymbols": {
      "TokenFarm": [
        446
      ]
    },
    "id": 447,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 420,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<=",
          "0.7",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:33:3"
      },
      {
        "absolutePath": "/home/vishnu/defi_tutorial/src/contracts/DaiToken.sol",
        "file": "./DaiToken.sol",
        "id": 421,
        "nodeType": "ImportDirective",
        "scope": 447,
        "sourceUnit": 181,
        "src": "35:24:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/vishnu/defi_tutorial/src/contracts/DappToken.sol",
        "file": "./DappToken.sol",
        "id": 422,
        "nodeType": "ImportDirective",
        "scope": 447,
        "sourceUnit": 362,
        "src": "61:25:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 446,
        "linearizedBaseContracts": [
          446
        ],
        "name": "TokenFarm",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 425,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 446,
            "src": "114:37:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 423,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "114:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4461707020746f6b656e206661726d",
              "id": 424,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "134:17:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_af8105c3950be036a765aed9c5e76d72d033ab752f7aae3787780b76d66f81f3",
                "typeString": "literal_string \"Dapp token farm\""
              },
              "value": "Dapp token farm"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 427,
            "name": "daitoken",
            "nodeType": "VariableDeclaration",
            "scope": 446,
            "src": "158:24:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DaiToken_$180",
              "typeString": "contract DaiToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 426,
              "name": "DaiToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 180,
              "src": "158:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DaiToken_$180",
                "typeString": "contract DaiToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 429,
            "name": "dapptoken",
            "nodeType": "VariableDeclaration",
            "scope": 446,
            "src": "188:26:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DappToken_$361",
              "typeString": "contract DappToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 428,
              "name": "DappToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 361,
              "src": "188:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DappToken_$361",
                "typeString": "contract DappToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 444,
              "nodeType": "Block",
              "src": "280:86:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 436,
                      "name": "daitoken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 427,
                      "src": "299:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DaiToken_$180",
                        "typeString": "contract DaiToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 437,
                      "name": "_daitoken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 431,
                      "src": "309:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DaiToken_$180",
                        "typeString": "contract DaiToken"
                      }
                    },
                    "src": "299:19:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DaiToken_$180",
                      "typeString": "contract DaiToken"
                    }
                  },
                  "id": 439,
                  "nodeType": "ExpressionStatement",
                  "src": "299:19:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 440,
                      "name": "dapptoken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 429,
                      "src": "337:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DappToken_$361",
                        "typeString": "contract DappToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 441,
                      "name": "_dapptoken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 433,
                      "src": "348:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DappToken_$361",
                        "typeString": "contract DappToken"
                      }
                    },
                    "src": "337:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DappToken_$361",
                      "typeString": "contract DappToken"
                    }
                  },
                  "id": 443,
                  "nodeType": "ExpressionStatement",
                  "src": "337:21:3"
                }
              ]
            },
            "documentation": null,
            "id": 445,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 431,
                  "name": "_daitoken",
                  "nodeType": "VariableDeclaration",
                  "scope": 445,
                  "src": "233:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_DaiToken_$180",
                    "typeString": "contract DaiToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 430,
                    "name": "DaiToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 180,
                    "src": "233:8:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DaiToken_$180",
                      "typeString": "contract DaiToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 433,
                  "name": "_dapptoken",
                  "nodeType": "VariableDeclaration",
                  "scope": 445,
                  "src": "252:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_DappToken_$361",
                    "typeString": "contract DappToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 432,
                    "name": "DappToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 361,
                    "src": "252:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DappToken_$361",
                      "typeString": "contract DappToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "232:41:3"
            },
            "returnParameters": {
              "id": 435,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "280:0:3"
            },
            "scope": 446,
            "src": "221:145:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 447,
        "src": "89:280:3"
      }
    ],
    "src": "0:369:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xF02E1A9C33cf61f371F8cd9548001608760B2757",
      "transactionHash": "0x0adb189e70ed2e4a9c4eb0759f456be0b105bf62bd043e980731f5cccd64f7f7"
    }
  },
  "schemaVersion": "3.2.3",
  "updatedAt": "2021-04-04T05:52:25.112Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
const abi1=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"AddedAccess","type":"event"},{"anonymous":false,"inputs":[],"name":"CheckAccessDisabled","type":"event"},{"anonymous":false,"inputs":[],"name":"CheckAccessEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"RemovedAccess","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"addAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAccessCheck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAccessCheck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const abi2=[{"inputs":[{"internalType":"uint32","name":"_maximumGasPrice","type":"uint32"},{"internalType":"uint32","name":"_reasonableGasPrice","type":"uint32"},{"internalType":"uint32","name":"_microLinkPerEth","type":"uint32"},{"internalType":"uint32","name":"_linkGweiPerObservation","type":"uint32"},{"internalType":"uint32","name":"_linkGweiPerTransmission","type":"uint32"},{"internalType":"address","name":"_link","type":"address"},{"internalType":"address","name":"_validator","type":"address"},{"internalType":"int192","name":"_minAnswer","type":"int192"},{"internalType":"int192","name":"_maxAnswer","type":"int192"},{"internalType":"contract AccessControllerInterface","name":"_billingAccessController","type":"address"},{"internalType":"contract AccessControllerInterface","name":"_requesterAccessController","type":"address"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"string","name":"description","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"AddedAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"int256","name":"current","type":"int256"},{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"updatedAt","type":"uint256"}],"name":"AnswerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract AccessControllerInterface","name":"old","type":"address"},{"indexed":false,"internalType":"contract AccessControllerInterface","name":"current","type":"address"}],"name":"BillingAccessControllerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"maximumGasPrice","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"reasonableGasPrice","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"microLinkPerEth","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"linkGweiPerObservation","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"linkGweiPerTransmission","type":"uint32"}],"name":"BillingSet","type":"event"},{"anonymous":false,"inputs":[],"name":"CheckAccessDisabled","type":"event"},{"anonymous":false,"inputs":[],"name":"CheckAccessEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"previousConfigBlockNumber","type":"uint32"},{"indexed":false,"internalType":"uint64","name":"configCount","type":"uint64"},{"indexed":false,"internalType":"address[]","name":"signers","type":"address[]"},{"indexed":false,"internalType":"address[]","name":"transmitters","type":"address[]"},{"indexed":false,"internalType":"uint8","name":"threshold","type":"uint8"},{"indexed":false,"internalType":"uint64","name":"encodedConfigVersion","type":"uint64"},{"indexed":false,"internalType":"bytes","name":"encoded","type":"bytes"}],"name":"ConfigSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"startedBy","type":"address"},{"indexed":false,"internalType":"uint256","name":"startedAt","type":"uint256"}],"name":"NewRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint32","name":"aggregatorRoundId","type":"uint32"},{"indexed":false,"internalType":"int192","name":"answer","type":"int192"},{"indexed":false,"internalType":"address","name":"transmitter","type":"address"},{"indexed":false,"internalType":"int192[]","name":"observations","type":"int192[]"},{"indexed":false,"internalType":"bytes","name":"observers","type":"bytes"},{"indexed":false,"internalType":"bytes32","name":"rawReportContext","type":"bytes32"}],"name":"NewTransmission","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"transmitter","type":"address"},{"indexed":false,"internalType":"address","name":"payee","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OraclePaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"transmitter","type":"address"},{"indexed":true,"internalType":"address","name":"current","type":"address"},{"indexed":true,"internalType":"address","name":"proposed","type":"address"}],"name":"PayeeshipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"transmitter","type":"address"},{"indexed":true,"internalType":"address","name":"previous","type":"address"},{"indexed":true,"internalType":"address","name":"current","type":"address"}],"name":"PayeeshipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"RemovedAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract AccessControllerInterface","name":"old","type":"address"},{"indexed":false,"internalType":"contract AccessControllerInterface","name":"current","type":"address"}],"name":"RequesterAccessControllerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":false,"internalType":"bytes16","name":"configDigest","type":"bytes16"},{"indexed":false,"internalType":"uint32","name":"epoch","type":"uint32"},{"indexed":false,"internalType":"uint8","name":"round","type":"uint8"}],"name":"RoundRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previous","type":"address"},{"indexed":true,"internalType":"address","name":"current","type":"address"}],"name":"ValidatorUpdated","type":"event"},{"inputs":[],"name":"LINK","outputs":[{"internalType":"contract LinkTokenInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_transmitter","type":"address"}],"name":"acceptPayeeship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"addAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"billingAccessController","outputs":[{"internalType":"contract AccessControllerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAccessCheck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAccessCheck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBilling","outputs":[{"internalType":"uint32","name":"maximumGasPrice","type":"uint32"},{"internalType":"uint32","name":"reasonableGasPrice","type":"uint32"},{"internalType":"uint32","name":"microLinkPerEth","type":"uint32"},{"internalType":"uint32","name":"linkGweiPerObservation","type":"uint32"},{"internalType":"uint32","name":"linkGweiPerTransmission","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"_calldata","type":"bytes"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestConfigDetails","outputs":[{"internalType":"uint32","name":"configCount","type":"uint32"},{"internalType":"uint32","name":"blockNumber","type":"uint32"},{"internalType":"bytes16","name":"configDigest","type":"bytes16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestTransmissionDetails","outputs":[{"internalType":"bytes16","name":"configDigest","type":"bytes16"},{"internalType":"uint32","name":"epoch","type":"uint32"},{"internalType":"uint8","name":"round","type":"uint8"},{"internalType":"int192","name":"latestAnswer","type":"int192"},{"internalType":"uint64","name":"latestTimestamp","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"linkAvailableForPayment","outputs":[{"internalType":"int256","name":"availableBalance","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxAnswer","outputs":[{"internalType":"int192","name":"","type":"int192"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAnswer","outputs":[{"internalType":"int192","name":"","type":"int192"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_signerOrTransmitter","type":"address"}],"name":"oracleObservationCount","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_transmitter","type":"address"}],"name":"owedPayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"requestNewRound","outputs":[{"internalType":"uint80","name":"","type":"uint80"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"requesterAccessController","outputs":[{"internalType":"contract AccessControllerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_maximumGasPrice","type":"uint32"},{"internalType":"uint32","name":"_reasonableGasPrice","type":"uint32"},{"internalType":"uint32","name":"_microLinkPerEth","type":"uint32"},{"internalType":"uint32","name":"_linkGweiPerObservation","type":"uint32"},{"internalType":"uint32","name":"_linkGweiPerTransmission","type":"uint32"}],"name":"setBilling","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract AccessControllerInterface","name":"_billingAccessController","type":"address"}],"name":"setBillingAccessController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_signers","type":"address[]"},{"internalType":"address[]","name":"_transmitters","type":"address[]"},{"internalType":"uint8","name":"_threshold","type":"uint8"},{"internalType":"uint64","name":"_encodedConfigVersion","type":"uint64"},{"internalType":"bytes","name":"_encoded","type":"bytes"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_transmitters","type":"address[]"},{"internalType":"address[]","name":"_payees","type":"address[]"}],"name":"setPayees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract AccessControllerInterface","name":"_requesterAccessController","type":"address"}],"name":"setRequesterAccessController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newValidator","type":"address"}],"name":"setValidator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_transmitter","type":"address"},{"internalType":"address","name":"_proposed","type":"address"}],"name":"transferPayeeship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_report","type":"bytes"},{"internalType":"bytes32[]","name":"_rs","type":"bytes32[]"},{"internalType":"bytes32[]","name":"_ss","type":"bytes32[]"},{"internalType":"bytes32","name":"_rawVs","type":"bytes32"}],"name":"transmit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transmitters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"validator","outputs":[{"internalType":"contract AggregatorValidatorInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_transmitter","type":"address"}],"name":"withdrawPayment","outputs":[],"stateMutability":"nonpayable","type":"function"}]


contractsArray.push(DaiToken);
contractsArray.push(abi1)
contractsArray.push(abi2)

var i;
for (i = 0; i <contractsArray.length; i++) {
  if (contractsArray[i].networks){
    
  let networkData=contractsArray[i].networks
  



let newtworkId= Object.keys(networkData)


 addr=networkData[newtworkId].address

 contractInitalize(contractsArray[i].abi,addr)


  }else{
    
    
    methodfinding(contractsArray[i])
  }

}





}catch(err){

    console.log(err)
}



// console.log(networkData[newtworkId].address)











