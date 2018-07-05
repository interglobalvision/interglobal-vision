<video muted autoplay loop>
<?php
foreach($videos as $video) {
  if (strpos($video, 'mp4')) {
    $video_type = 'mp4';
  } else if(strpos($video, 'webm')) {
    $video_type = 'webm';
  }
?>
  <source src="<?php echo $video; ?>" type="video/<?php echo $video_type; ?>">
<?php
}
?>
  I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
</video>
