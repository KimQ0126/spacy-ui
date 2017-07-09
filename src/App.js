
import React, { Component } from 'react';
import Rule from './Components/Rule'; 
import "./layout.css"

import WordTokenConfig from './Components/WordTokenConfig'

const base64 = require('base-64');

class App extends Component {
  constructor(props) 
  {
    super(props);

    var react = require('react'); 
    //alert("React version" + react); 
    /*this.props.rulesText = "This is test Text. \n" +
    											  "The user can type in whatever they want and select the rules to test. The results show below." +
      											"Hi My Name is Sara and I live in Los Angeles"; 
    	*/	

    this.state = 
    {
      jsonReturnedValue: null, 
      allRuleData:{}

    }
    this.sendData = this.sendData.bind(this);
    this.ProcessJSONData = this.ProcessJSONData.bind(this); 
    this.buildData2Send = this.buildData2Send.bind(this); 
  }

  ProcessJSONData(ruleid, allTokenData)
  {
    console.log("ProcessJSONData....ruleid="+ruleid ); 
    //console.log("ProcessJSONData...token data" + allTokenData); 
    //let values = Array.from(allTokenData.values()); 
    const result = Object.values(allTokenData);
    console.log("ProcessJSONData...token values" + result); 
    //alert("All Rule data ="+ JSON.stringify(result)); 
    //this.allRuleData[ruleid] = result; 


    var myRuleData = this.state.allRuleData; 
    myRuleData[ruleid] = result; 
    this.setState({
      allRuleData: myRuleData
    });

    //alert("All Rule data ="+ JSON.stringify(this.state.allRuleData)); 

  }

  buildData2Send()
  {
    let data2send = this.state.allRuleData; 

  }

  sendData()
  {
    console.Log("SendData");

    //buildData2Send will return the json file to send. 
    mySendData = buildData2Send(); 

    //This is how you authenticate using base64(username:password. )
    var headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode("memex:digdig"));

    fetch('http://52.36.12.77:9879/projects/pedro_test_01/fields/name/spacy_rules', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(
          myJsonFile
      
      )
    }).then( (response) => {
                return response.json() })   
                    .then( (json) => {

                        //var myArr = JSON.parse(json);
                        alert("Test = " + json.field_name); 
                        this.setState({jsonReturnedValue: json});
                    });
  }
  
  render() {
    
    return (
      <div className="App">
      
      <div className="page-wrap">
        <div id="appHeader">
          
          <div className="run-rules"> <button className="button" onClick={this.sendData} >Run Rules </button> </div>
        </div> 
        <span className="extractionText"> Extraction Rules </span>
        <div className="extraction-rules">
        <div id="ruleMenu">
        <button className="button">Add Rule </button>  <button className="button">Select All </button> <button className="button"> Deselect All</button> <button className="button"> Delete</button> <button className="button"> Duplicate</button> 
          </div> 
          <div>{<Rule rulenum="1"  onProcessJSONData={this.ProcessJSONData}/> } </div> 
          
          </div>
        <br/>
        <span className="ExtractionText"> Text</span>
       
        <div className="rulesText"> <textarea name="Text1"  rows="5" className="textInput"></textarea> </div> 
        <br/>
        <span className="ExtractionText"> Results</span>
           {this.state.jsonReturnedValue}
    	</div>

      
      </div>
    );
    
  }
  
}

const myJSONTest1 = 
{
  "rules": [
    {
      "polarity": [],
      "description": "my name is ...",
      "pattern": [
        {
          "prefix": "",
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "length": [],
          "maximum": "",
          "shapes": [],
          "token": [
            "my"
          ],
          "minimum": "",
          "numbers": [],
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_required": "true",
          "type": "word",
          "is_in_output": "false"
        },
        {
          "prefix": "",
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "length": [],
          "maximum": "",
          "shapes": [],
          "token": [
            "name",
            "names"
          ],
          "minimum": "",
          "numbers": [],
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_required": "true",
          "type": "word",
          "is_in_output": "true"
        }
      ],
      "output_format": "{1}",
      "is_active": "true",
      "identifier": "name_rule_01"
    }
  ],
  "test_text": "My name is"

}



const myJsonFile = 
{
  "rules": [
    {
      "polarity": [],
      "pattern": [
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "my"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "name",
            "names"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "is"
          ],
          "is_followed_by_space": "",
          "is_required": "false",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [
            "title",
            "upper"
          ],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "true",
          "length": [],
          "shapes": [],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        }
      ],
      "identifier": "name_rule_01",
      "is_active": "true",
      "description": "a description",
      "output_format": ""
    },
    {
      "polarity": [],
      "pattern": [
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "i"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "am"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [
            "title",
            "upper"
          ],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "true",
          "length": [],
          "shapes": [],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        }
      ],
      "identifier": "name_rule_02",
      "is_active": "true",
      "description": "a description",
      "output_format": ""
    },
    {
      "polarity": [],
      "pattern": [
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "name"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            ":"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "punctuation"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "true",
          "length": [],
          "shapes": [],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        }
      ],
      "identifier": "name_rule_03",
      "is_active": "true",
      "description": "a description",
      "output_format": ""
    },
    {
      "polarity": [],
      "pattern": [
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "it"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "is"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [
            "proper noun"
          ],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "true",
          "length": [],
          "shapes": [],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        }
      ],
      "identifier": "name_rule_04",
      "is_active": "true",
      "description": "a description",
      "output_format": ""
    },
    {
      "polarity": [],
      "pattern": [
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "this"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "is"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [
            "title",
            "mixed",
            "upper"
          ],
          "part_of_speech": [
            "proper noun"
          ],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "true",
          "length": [],
          "shapes": [],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        }
      ],
      "identifier": "name_rule_05",
      "is_active": "true",
      "description": "a description",
      "output_format": ""
    },
    {
      "polarity": [],
      "pattern": [
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "i"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "'"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "punctuation"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "m"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [
            "title",
            "mixed",
            "upper"
          ],
          "part_of_speech": [
            "proper noun"
          ],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "true",
          "length": [],
          "shapes": [],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        }
      ],
      "identifier": "name_rule_06",
      "is_active": "true",
      "description": "a description",
      "output_format": ""
    },
    {
      "polarity": [],
      "pattern": [
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "it"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "'"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "punctuation"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "s"
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [
            "title",
            "mixed",
            "upper"
          ],
          "part_of_speech": [
            "proper noun"
          ],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "true",
          "length": [],
          "shapes": [],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        }
      ],
      "identifier": "name_rule_07",
      "is_active": "true",
      "description": "a description",
      "output_format": ""
    },
    {
      "polarity": [],
      "pattern": [
        {
          "suffix": "",
          "capitalization": [
            "title"
          ],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "true",
          "length": [],
          "shapes": [],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [],
          "token": [
            "(",
            "["
          ],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "punctuation"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [
            "ddd"
          ],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "shape"
        }
      ],
      "identifier": "name_rule_08",
      "is_active": "true",
      "description": "a description",
      "output_format": ""
    },
    {
      "polarity": [],
      "pattern": [
        {
          "suffix": "",
          "capitalization": [
            "title",
            "upper",
            "mixed"
          ],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "true",
          "length": [],
          "shapes": [],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "word"
        },
        {
          "suffix": "",
          "capitalization": [],
          "part_of_speech": [],
          "prefix": "",
          "contain_digit": "",
          "is_in_vocabulary": "",
          "is_out_of_vocabulary": "",
          "is_in_output": "false",
          "length": [],
          "shapes": [
            "dddddddddd"
          ],
          "token": [],
          "is_followed_by_space": "",
          "is_required": "true",
          "type": "shape"
        }
      ],
      "identifier": "name_rule_09",
      "is_active": "true",
      "description": "a description",
      "output_format": ""
    }
  ],
  "test_text": "Hello guy's, it's Jessica here from the #@%%% Spa. I cant say the name on here, and it is JessicaLa, and it is Cold\nHi Gentlemen, My name is Ashley . my name Monica I am the one and, My names is Alanda\nName : Sara . I am the one and, Name: JILL , Name:Jessie\nAshley (702)628-9035 XOXO . Aslll (702) 628-9035 XOXO Alppp 7026289035\nI'm Ashley I'm bored i am All, I am ALL\nthis is Ashleyb I'm bored This is Ashleya  This is AshleyC"
}

; 

export default App;
