<?php
$args = [1, 2, 3, 4, 5, 6];
echo "<br><br>Чётные числа<br>";
for ($i = 0; $i < count($args); $i++) {
  if ($args[$i] % 2 == 0) {
    echo "$args[$i]<br>";
  }
}