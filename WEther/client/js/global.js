import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';

Insurances = new Mongo.Collection(null);

import '../index.html';

abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "lat",
        "type": "string"
      },
      {
        "name": "long",
        "type": "string"
      },
      {
        "name": "date",
        "type": "uint256"
      }
    ],
    "name": "createInsurance",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "dayInsuranceBuffer",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "myid",
        "type": "bytes32"
      },
      {
        "name": "result",
        "type": "string"
      }
    ],
    "name": "__callback",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "myid",
        "type": "bytes32"
      },
      {
        "name": "result",
        "type": "string"
      },
      {
        "name": "proof",
        "type": "bytes"
      }
    ],
    "name": "__callback",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "date",
        "type": "uint256"
      }
    ],
    "name": "dateToString",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "lat",
        "type": "string"
      },
      {
        "name": "long",
        "type": "string"
      },
      {
        "name": "date",
        "type": "uint256"
      }
    ],
    "name": "forceCreateInsurance",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "destroy",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getInsurance",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newMinAmount",
        "type": "uint256"
      }
    ],
    "name": "setMinAmount",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "x",
        "type": "bytes32"
      }
    ],
    "name": "bytes32ToString",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "v",
        "type": "uint256"
      }
    ],
    "name": "uintToBytes",
    "outputs": [
      {
        "name": "ret",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "minAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getInsuranceLength",
    "outputs": [
      {
        "name": "activeIndexes",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getInsurancesExists",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newDayInsuranceBuffer",
        "type": "uint256"
      }
    ],
    "name": "setDayInsuranceBuffer",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "payout",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "lat",
        "type": "string"
      },
      {
        "name": "long",
        "type": "string"
      },
      {
        "name": "date",
        "type": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "getPayoutQuote",
    "outputs": [
      {
        "name": "payout",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "result",
        "type": "string"
      }
    ],
    "name": "oracleResult",
    "type": "event"
  }
];
contractAddress = "0x050709434db5d549735cb08e62ae173772160240";
Contract = web3.eth.contract(abi);
contractInstance = Contract.at(contractAddress);

Meteor.startup(function() {
  contractInstance.getInsuranceLength(function(error, result) {
    if (error) {
      console.log("Error: " + error);
      return;
    }

    // Resets the Insurances collection
    Insurances.remove({});

    // Display number of insurances to the user
    document.getElementById("insurance-number").innerHTML = String(result);

    // Build up the list of Insurance objects
    for (i = 0; i < parseInt(result); i++) {
      contractInstance.getInsurance(i, function(error, result) {
        if (error) {
          console.log("Error: " + error);
          return;
        }

        /*
         * Result tuple order:
         * 0: latitude
         * 1: longitude
         * 2: totalPayout
         * 3: date
         * 4: claimed
         * 5: exists
         * 6: index
         */

        if (result[5]) {
          Insurances.insert({
            latitude: result[0],
            longitude: result[1],
            totalPayout: web3.fromWei(String(result[2]), "ether"),
            date: parseInt(result[3]),
            claimed: result[4],
            index: parseInt(result[6])
          });
        }
      });
    }
  });
});

Template.addInsurance.events({
  "click .submitInsuranceForm": function(event, template) {
    let longitude = template.find("#longitude").value;
    let latitude = template.find("#latitude").value;
    let date = parseInt(Date.parse(template.find("#date").value) / 1000);
    let amount = parseInt(template.find("#amount").value);

    contractInstance.forceCreateInsurance.sendTransaction(latitude, longitude, date, {value: web3.toWei(amount, "ether")}, function(error, result) {
      if (error) {
        console.log("Error: " + error);
        return;
      }
      // Need to run loading insurance function
      // TODO: Solve blockchain delay issue
      $("div[name=insurance-modal]").modal("hide");
      window.location.reload();
    });
  }
});

Template.debug.events({
  "click .payout": function(event, template) {
    contractInstance.payout.sendTransaction(parseInt(event.target.getAttribute("claim-index")), function(error, result) {
      if (error) {
        console.log("Error: " + error);
        return;
      }

      console.log("got here");
    });
  }
});

// Temporary modal input values for convenience
Template.addInsurance.helpers({
  longitude: function() {
    return 49.00;
  },
  latitude: function() {
    return 94.00;
  },
  date: function() {
    return "2017-03-15";
  },
  amount: function() {
    return "1";
  }
});

Template.debug.helpers({
  insurances: function() {
    return Insurances.find();
  }
});