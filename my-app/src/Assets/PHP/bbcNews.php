<?php 
global $recordNo;
 
// data file (CHANGE THIS TO THE RSS NEWS FEED OF YOUR CHOICE)
$file = "http://newsrss.bbc.co.uk/rss/sportonline_uk_edition/front_page/rss.xml";
 
// use this to keep track of which tag the parser is currently processing
$currentTag = "";
 
if (!function_exists('startElement')) {
function startElement($parser, $name, $attrs)
{
global $currentTag;
$currentTag = $name;
}
}
 
if (!function_exists('endElement')) {
function endElement($parser, $name) {
global $currentTag, $title, $description, $url, $start;
global $recordNo;
 
 
// clear current tag variable
switch ($currentTag)
{
case "ITEM":
$start = 0;
break;
case "LINK":
if($start ==1)
print "&raquo; <a href = \"$url\" target=\"_blank\" title=\"$description\">$title</a><br>
";
$recordNo = $recordNo + 1;
break;
}
$currentTag = "";
}
}
 
// process data between tags
if (!function_exists('characterData')) {
function characterData($parser, $data) {
 
global $currentTag, $title, $description, $url, $start;
switch ($currentTag)
{
case "ITEM":
$start = 1;
break;
 
case "TITLE":
// italics for title
$title = $data;
break;
 
case "DESCRIPTION":
// italics for title
$description = $data;
break;
 
case "LINK":
// italics for title
$url = $data;
break;
}
}
}
 
// initialize parser
$xml_parser = xml_parser_create();
 
// set callback functions
xml_set_element_handler($xml_parser, "startElement", "endElementBBC");
xml_set_character_data_handler($xml_parser, "characterDataBBC");
 
// open XML file
if (!($fp = fopen($file, "r")))
{
die("Cannot locate XML data file: $file");
}
 
$recordNo = 0;
// read and parse data
while (($data = fread($fp, 4096)) && ($recordNo < 6 ))
{
$data= str_replace("&amp;","and",$data);
$data= str_replace("&quot;","'",$data);
 
// error handler
if (!xml_parse($xml_parser, $data, feof($fp)))
{
die(sprintf("XML error: %s at line %d",
xml_error_string(xml_get_error_code($xml_parser)),
xml_get_current_line_number($xml_parser)));
}
}
 
// clean up
xml_parser_free($xml_parser);
 
?>