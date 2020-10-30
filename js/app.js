async function fetchquotes() {
    try {
        const response = await fetch('https://tamilsms.mskian.workers.dev/');
        const data = await response.json();
        console.log(data);
        if (document.getElementById('pushcontent') != null) {
            document.getElementById('pushcontent').innerHTML = '<img src="/images/bg-loader.gif" width="35" height="35" alt="Tamil SMS Blog"><br>';
            setTimeout(() => {
                var tamilsmsblog = data;
                const postdata = tamilsmsblog[0].content
                const tamilsms = postdata.replace(/(?:\r\n|\r|\n)/g, "<br>");
                new ClipboardJS('.toscopy');
                document.getElementById('pushcontent').innerHTML = '<div class="quotes-box"><p><br>' + tamilsms + '<br><br><button class="toscopy btn btn-gotify btn-lg read-more" data-clipboard-text="' + postdata + '">📋 Copy Kavithai</button></p></div>';
            }, 1000);
        }
    } catch (exception) {
        console.log('Connection issue');
        if (document.getElementById('pushcontent') != null) {
            document.getElementById('pushcontent').innerHTML = '<img src="/images/bg-loader.gif" width="35" height="35" alt="Tamil SMS Blog"><br>';
            setTimeout(() => {
                document.getElementById('pushcontent').innerHTML = '<p>Connection Lost</p>';
            }, 1000);
        }
    }
}
fetchquotes();

if (document.getElementById("random-roll") != null) {
    document.getElementById("random-roll").addEventListener('click', e => {
        fetchquotes();
    })
}
