#pragma strict
var Press : GameObject; //Beginning thing

var DollarH : GameObject;
var DollarT : GameObject;
var QuarterH : GameObject;
var QuarterT : GameObject;
var DimeH : GameObject;
var DimeT : GameObject;
var NickelH : GameObject;
var NickelT : GameObject;
var PennyH : GameObject;
var PennyT : GameObject;


function Start () {
	if (PlayerPrefs.GetInt("Intro") == 0) {
		Press.SetActive (true);
		PlayerPrefs.SetString("Coin", "Select Coin");
		PlayerPrefs.SetString("Trick", "Rip");
		QuarterH.SetActive (true);
	}else {
		if (PlayerPrefs.GetString("Coin") == "DollarH" || PlayerPrefs.GetString("Coin") == "DollarT") {
			DollarH.SetActive (true);
		}else if (PlayerPrefs.GetString("Coin") == "QuarterH" || PlayerPrefs.GetString("Coin") == "QuarterT") {
			QuarterH.SetActive (true);
		}else if (PlayerPrefs.GetString("Coin") == "DimeH" || PlayerPrefs.GetString("Coin") == "DimeT") {
			DimeH.SetActive (true);
		}else if (PlayerPrefs.GetString("Coin") == "NickelH" || PlayerPrefs.GetString("Coin") == "NickelT") {
			NickelH.SetActive (true);
		}else if (PlayerPrefs.GetString("Coin") == "PennyH" || PlayerPrefs.GetString("Coin") == "PennyT") {
			PennyH.SetActive (true);
		}else {
			Debug.Log("Error loading Coin");
		}
	}
}

function Update () {

}

function Flip () {
	var number = Random.Range(3,10);
	if (PlayerPrefs.GetString("Trick") == "Lmao" && number == 4 || number == 6 || number == 8 || number == 10) {
		number++;
	}
	//Debug.Log (number);
	while (number != 0) {
		Debug.Log(number);
		if (PlayerPrefs.GetString("Coin") == "DollarH") {
			Killit();
			DollarT.SetActive (true);
			PlayerPrefs.SetString("Coin", "DollarT");
		}else if (PlayerPrefs.GetString("Coin") == "DollarT") {
			Killit();
			DollarH.SetActive (true);
			PlayerPrefs.SetString("Coin", "DollarH");
		}else if (PlayerPrefs.GetString("Coin") == "QuarterH") {
			Killit();
			QuarterT.SetActive (true);
			PlayerPrefs.SetString("Coin", "QuarterT");
		}else if (PlayerPrefs.GetString("Coin") == "QuarterT") {
			Killit();
			QuarterH.SetActive (true);
			PlayerPrefs.SetString("Coin", "QuarterH");
		}else if (PlayerPrefs.GetString("Coin") == "DimeH") {
			Killit();
			DimeT.SetActive (true);
			PlayerPrefs.SetString("Coin", "DimeT");
		}else if (PlayerPrefs.GetString("Coin") == "DimeT") {
			Killit();
			DimeH.SetActive (true);
			PlayerPrefs.SetString("Coin", "DimeH");
		}else if (PlayerPrefs.GetString("Coin") == "NickelH") {
			Killit();
			NickelT.SetActive (true);
			PlayerPrefs.SetString("Coin", "NickelT");
		}else if (PlayerPrefs.GetString("Coin") == "NickelT") {
			Killit();
			NickelH.SetActive (true);
			PlayerPrefs.SetString("Coin", "NickelH");
		}else if (PlayerPrefs.GetString("Coin") == "PennyH") {
			Killit();
			PennyT.SetActive (true);
			PlayerPrefs.SetString("Coin", "PennyT");
		}else if (PlayerPrefs.GetString("Coin") == "PennyT") {
			Killit();
			PennyH.SetActive (true);
			PlayerPrefs.SetString("Coin", "PennyH");
		}
		number--;
	}
	PlayerPrefs.SetString("Trick", "Rip");
}

function numburo () {
	
}
function Killit () {
	DollarT.SetActive (false);
	DollarH.SetActive (false);
	QuarterT.SetActive (false);
	QuarterH.SetActive (false);
	DimeT.SetActive (false);
	DimeH.SetActive (false);
	NickelT.SetActive (false);
	NickelH.SetActive (false);
	PennyT.SetActive (false);
	PennyH.SetActive (false);
}

function settings () {
	PlayerPrefs.SetInt("Intro", 1);
	Application.LoadLevel("Settings");
}