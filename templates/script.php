<script>
    let muted = true;
    const video = document.querySelector('#header video');
    const toggleAudio = () => {
        video.muted = !video.muted;
        if(muted) {
            document.querySelector('.muted').style.display = 'none';
            document.querySelector('.unmuted').style.display = 'inline';
            muted = false;
        } else {
            document.querySelector('.muted').style.display = 'inline';
            document.querySelector('.unmuted').style.display = 'none';
            muted = true;
        }
    }
</script>
