<?php
$file = 'txtlog.txt';

function getStr()
{
    if (!empty($_POST['name'])) {
        $name = $_POST['name'];
    }
    if (!empty($_POST['site'])) {
        $site = $_POST['site'];
    }
    if (!empty($_POST['phone'])) {
        $phone = $_POST['phone'];
    }

    if (!empty($name) && !empty($site) && !empty($phone)) {
        $message = "Имя: " . $name . "\nСайт: " . $site . "\nТелефон: " . $phone;
    }
    return $message;
}

    $message = getStr();


    $fp = fopen($file, 'a');
    fwrite($fp, $message . "\n");
    fclose($fp);



    echo '
<script>
alert("Записано в файл");
history.back();
</script>';


?>
