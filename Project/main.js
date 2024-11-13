$(document).ready(() => {
    let song;
    let 

    $(document).load(`https://musicbrainz.org//ws/2/discid/-?toc=1+12+267257+150+22767+41887+58317+72102+91375+104652+115380+132165+143932+159870+174597&media-format=all`, () => {
        $(document).load("https://musicbrainz.org//ws/2/discid/-?toc=1+12+267257+150+22767+41887+58317+72102+91375+104652+115380+132165+143932+159870+174597&media-format=all", (response) => {  
        data = JSON.parse(response);   
    });
}
