function translate(sourceLang, targetLang, sourceText) {
    let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
        + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    return url;
}

