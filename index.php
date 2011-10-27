<? php
	/*
	This code is part of
	OpenLinkMap Copyright (C) 2010 Alexander Matheisen
	This program comes with ABSOLUTELY NO WARRANTY.
	This is free software, and you are welcome to redistribute it under certain conditions.
	See olm.openstreetmap.de/info for details.
	*/
	// return an array of the user's languages, sorted by importance
	function getLangs() {
		$header = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
		$lang = explode(",", $header);
		$i = 0;
		foreach ($lang as $value) {
			$entry = explode(";", $value);
			$langpair = explode("-", $entry[0]);
			$langs[$i] = $langpair[0];
			$i++;
		}
		return $langs;
	}
	// returns the most matching language of the user
	function getUserLang() {
		global $langs;
		// read out language from header as array
		$langs = getLangs();
		// choose most matching language from available langs
		foreach ($langs as $value)
		{
			if (in_array($value, $langs))
				return $value;
		}
		// if no matching language could be found, choose english
		return "en";
	}
	if (in_array($_GET['lang'], $langs) && isset($_GET['lang']))
		$lang = $_GET['lang'];
	else
		$lang = getUserLang();
?>
<!DOCTYPE html>
<head>
	<title>QeoDart &ndash; Geography Education Game</title>
	<link rel="icon" href="https://github.com/gulp21/QeoDart/raw/master/icons/icon16.png" type="image/png"/>
	<style type="text/css">
		* {
			font-family: Ubuntu, sans-serif;
		}
	</style>
</head>
<body>
	<h1>QeoDart</h1>
	<p>You are <?php echo $lang; ?></p>
</body>

