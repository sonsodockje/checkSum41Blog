<script>
    import { onMount } from 'svelte';

    /**
     * 이 게시물의 고유 식별자입니다. (예: a-new-post)
     * @type {string}
     */
    export let identifier;

    /**
     * 이 게시물의 전체 URL입니다.
     * @type {string}
     */
    export let url;

    const shortname = 'checksum41blog';

    onMount(() => {
        // Disqus가 전역 변수를 읽어서 설정을 구성합니다.
        window.disqus_config = function () {
            this.page.url = url;
            this.page.identifier = identifier;
        };

        // Disqus 스크립트가 이미 로드되었는지 확인하고, 없으면 새로 만듭니다.
        if (window.DISQUS) {
            window.DISQUS.reset({ reload: true });
        } else {
            const d = document, s = d.createElement('script');
            s.src = `https://${shortname}.disqus.com/embed.js`;
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }
    });
</script>

<div id="disqus_thread"></div>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
