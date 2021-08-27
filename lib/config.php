<?php
$fd = opendir('windows');
while (false !== ($include = readdir($fd))) {
    if ($include != "." && $include != "..") {
        include_once('windows/'.$include);
    }
}
closedir($fd);