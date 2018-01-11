#pragma strict
var Dropdown : UnityEngine.UI.Text;
var Checker : UnityEngine.UI.Toggle;

var Dollar : GameObject;
var Quarter : GameObject;
var Dime : GameObject;
var Nickel : GameObject;
var Penny : GameObject;

var stop : System.Boolean;


function Start () {
	if (PlayerPrefs.GetString("Trick") == "Lmao") {
		stop = true;
		Checker.isOn = true;
		stop = false;
	}
}

function Update () {
	if (PlayerPrefs.GetString("Coin") == "DollarH" || PlayerPrefs.GetString("Coin") == "DollarT") {
		Dropdown.text = "Dollar Coin";
	}else if (PlayerPrefs.GetString("Coin") == "QuarterH" || PlayerPrefs.GetString("Coin") == "QuarterT") {
		Dropdown.text = "Quarter";
	}else if (PlayerPrefs.GetString("Coin") == "DimeH" || PlayerPrefs.GetString("Coin") == "DimeT") {
		Dropdown.text = "Dime";
	}else if (PlayerPrefs.GetString("Coin") == "NickelH" || PlayerPrefs.GetString("Coin") == "NickelT") {
		Dropdown.text = "Nickel";
	}else if (PlayerPrefs.GetString("Coin") == "PennyH" || PlayerPrefs.GetString("Coin") == "PennyT") {
		Dropdown.text = "Penny";
	}
}

function SELECTORZ ()  {
	if (Dollar.active == true) {
		Dollar.SetActive (false);
		Quarter.SetActive (false);
		Dime.SetActive (false);
		Nickel.SetActive (false);
		Penny.SetActive (false);
	}else if (Dollar.active == false) {
		Dollar.SetActive (true);
		Quarter.SetActive (true);
		Dime.SetActive (true);
		Nickel.SetActive (true);
		Penny.SetActive (true);
	}
}

function Prankster () {
	if (stop == true) {
	
	}else if (stop == false) {
		if (PlayerPrefs.GetString("Trick") == "Lmao") {
			PlayerPrefs.SetString("Trick", "Rip");
			Debug.Log("Not a prank bro");
		}else if (PlayerPrefs.GetString("Trick") == "Rip") {
			PlayerPrefs.SetString("Trick", "Lmao");
			Debug.Log("Just a prank bro");
		}else {
			PlayerPrefs.SetString("Trick", "Lmao");
			Debug.Log("ERROR PLAYPREF WASNT SET");
		}
	}
}

function DollarSETTER () {
	PlayerPrefs.SetString("Coin", "DollarH");
	SELECTORZ();
}

function QuarterSETTER () {
	PlayerPrefs.SetString("Coin", "QuarterH");
	SELECTORZ();
}

function DimeSETTER () {
	PlayerPrefs.SetString("Coin", "DimeH");
	SELECTORZ();
}

function NickelSETTER () {
	PlayerPrefs.SetString("Coin", "NickelH");
	SELECTORZ();
}

function PennySETTER () {
	PlayerPrefs.SetString("Coin", "PennyH");
	SELECTORZ();
}

function BACK () {
	Application.LoadLevel("MainMenu");
}