/* document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll('.container');
    const insertedBefore = new Set();
    const insertedAfter = new Set();
  
    containers.forEach(container => {
      if (!insertedBefore.has(container.previousElementSibling)) {
        const bannerBefore = createBanner(`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9758035810696915"
            crossorigin="anonymous"></script>
       <!-- MeminIt Horizontal Ad -->
       <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-9758035810696915"
            data-ad-slot="3103664696"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
       <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
       </script>`);
        container.parentNode.insertBefore(bannerBefore, container);
        insertedBefore.add(container);
      }
  

      if (!insertedAfter.has(container.nextElementSibling)) {
        const bannerAfter = createBanner(`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9758035810696915"
     crossorigin="anonymous"></script>
<!-- MeminIt Horizontal Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9758035810696915"
     data-ad-slot="3103664696"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`);
        container.parentNode.insertBefore(bannerAfter, container.nextSibling);
        insertedAfter.add(container);
      }
    });
  
    function createBanner(text) {
      const banner = document.createElement("div");
      banner.className = "nice-banner";
      banner.innerHTML = text;
      return banner;
    }
  }); */