<?php

// Custom functions (like special queries, etc)
function is_videos($files) {
  foreach ($files as $file) {
    if (stripos($file, '.mp4') !== false || stripos($file, '.webm') !== false) {
      return true;
    }
  }
}

function is_images($files) {
  foreach ($files as $file) {
    if (stripos($file, '.jpg') !== false || stripos($file, '.png') !== false || stripos($file, '.gif') !== false) {
      return true;
    }
  }
}
