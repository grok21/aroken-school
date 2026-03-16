<?php
include "./output.php";

function tagCycle($tag, $payload, $iterAmount) {
  for ($i = 0; $i < $iterAmount; $i++) {
    tag($tag, $payload);
  }
}